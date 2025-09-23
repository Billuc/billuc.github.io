---
title: RSS Reader - How I built my own news aggregator in Gleam
createdAt: '17/09/2025'
---

Some time ago, I gave myself a new side quest. I wanted to know more about RSS feeds.
The motivation behind it was that I was tired of "modern" news websites. I feel it is
now harder to access meaninful content on those websites than it should be. Whether it
is loading time, huge images, useless platitudes or the infamous cookie popups and paywalls, I get annoyed
really, really fast. This shouldn't be the case ! After all, all you need to know what
there is to know is usually simply a title and a short description.

That is where RSS feeds come in ! I am old enough to know that RSS feeds were a thing
in the 2000s and that they were often used to be notified of the latest news of a
particular website. So here I am on my new side quest of trying to build a RSS reader/aggregator
for myself ! The goal is to have a simple list of titles, with a description if I want to know more
and a link to the article if I want to read the full article.

For this project, I am using my currently favorite language, which is Gleam ! I didn't choose Gleam
because it would make the project easier or faster to write, but simply because I knew I could
do the whole project using it and that I would have a good time all along the way :)

## First, a word about Gleam

[Gleam](https://gleam.run/) is a relatively new functional language with a strong emphasis
on type safety. With its type system, its friendly syntax and community and the fact that
(at least in my opinion) it is a well-thought language, it quickly became one of my
favorite languages to code with !

Under the hood, Gleam compiles to Erlang or to Javascript. The Erlang target allows
to take advantage of the power of the BEAM and its immense scalability and thus
build extremely concurrent applications. The Javascript target allows to create scripts
for the browser (take a look at [Lustre](https://hexdocs.pm/lustre/index.html), a Gleam
web framework) or the server (via Node, Deno and co.).

## The XML parser

The first step on our RSS reader journey is to parse the XML documents RSS is built upon.
I could have gone the simple and easy path of reusing existing code, as there are utilities
both in Erlang ([xmerl](https://www.erlang.org/doc/apps/xmerl/xmerl_ug.html)) and Javascript
([DOMParser](https://developer.mozilla.org/en-US/docs/Web/XML/Guides/Parsing_and_serializing_XML))
to parse XML, but I wanted to do the parsing myself so I ended up writing my own XML parser
using [nibble](https://hexdocs.pm/nibble/index.html).

Nibble is a lexer and parser combinator library written entirely in pure Gleam. This is great
because it means the parser I wrote with it can run anywhere Gleam can, whether it is an
Erlang or Javascript server or the browser. It works in 2 steps: a lexing step and a parsing
step, much like lex/flex + yacc/bison (even though there are fundamental differences, I know).

Let's start with the lexer. The goal of the lexer is to take a string and turn it into a chain
of meaningful symbols called tokens. Here is my list of tokens for XML:

```gleam
pub type XmlToken {
  TagOpen(name: String)             // <name
  TagClose                          // >
  TagSelfClose                      // />
  TagEnd(name: String)              // </name
  Text(String)                      // a chain of characters
  Equals                            // =
  CommentStart                      // <!--
  CommentEnd                        // -->
  Quote(quote: String)              // " or '
  CDATAOpen                         // <[CDATA[
  CDATAClose                        // ]]>
  ReferenceStart                    // &
  ReferenceName(name: String)       // name
  ReferenceCode(code: String)       // #code
  ReferenceHexCode(code: String)    // #xcode
  ReferenceEnd                      // ;
  XmlDeclarationStart               // <?xml
  XmlDeclarationEnd                 // ?>
}
```

My XML lexer is a bit more complicated than just matching characters to tokens though.
Let's take this example:

```xml
<!-- You can define a book's title like so <title>My Book</title> -->
```

Here, for instance, `<title` should not be matched to `TagOpen("title")`, but should be
included in the comment's content. Therefore, I have to know that I am in the context of a comment.
To introduce this idea of _lexing context_, nibble has the ability to define
advanced lexers that produce different tokens based on the _mode_ we are in. If you want
to know more about how I used these modes, you can look at the code
[here](https://github.com/Billuc/gleaxml/blob/master/src/gleaxml/lexer.gleam).

Then, there is the parsing step. The parser's job is to take the chain of tokens returned by
the lexer and turn it into objects that can be used for whatever you need. Here, we want to
create objects such as a XmlDocument, XmlNodes, etc. The parser is basically a set of rules
on how tokens should be arranged and how to turn these into Gleam objects. Here is a simple example:

```gleam
fn comment() -> nibble.Parser(XmlNode, lexer.XmlToken, k) {
  use _ <- nibble.do(nibble.token(lexer.CommentStart))
  use values <- nibble.do(
    nibble.take_map_while(fn(tok) {
      case tok {
        lexer.Text(v) -> option.Some(v)
        _ -> option.None
      }
    }),
  )
  use _ <- nibble.do(nibble.token(lexer.CommentEnd))

  nibble.return(Comment(string.join(values, "")))
}
```

This basically says "If you have a sequence of a CommentStart, then 0 or many Texts and finally a CommentEnd,
create a Comment by joining the values of the Texts". Since the [XML specification](https://www.w3.org/TR/xml/)
is very well defined, it was easy to create such rules to assemble tokens and create XmlDocument and XmlNode objects.

Finally, I created a 'main' module with helpful function to make my life easier when I want to manipulate said objects,
since pattern matching all the time when you want to get the value of an attribute or the first child of a certain
name is cumbersome. Functions such as `pub fn get_node(root: parser.XmlNode, path: List(String))` or
`pub fn get_attribute(node: parser.XmlNode, name: String)` have much more meaning in this context and are very
convenient for building our RSS library.

## The RSS library

The RSS library is very simple since most of the work has been done in the XML library.
What we have to do now is simply to retrieve data from specific places in the XML node tree returned by our XML
parser. Then, we can build new objects relative to RSS feeds and voilà !

Once again, the [specification](https://www.rssboard.org/rss-specification) is very clear and detailed
and the helper functions I mentioned at the end of the previous section helped tremendously with
retrieving data from specific places. There isn't much to say about the code, you can find it
[here](https://github.com/Billuc/glisse/).

## The website

Now that I can, from a string of data, parse its XML content and build RSS-related objects, I want to display
the data so that I can read the news' titles. A website is the best way to do this and get access to the
content from basically anywhere. Gleam can build website by using the Lustre library, perfect !

My first idea was to create a purely static website that I could host on a Github Page and access easily.
I spun up a Lustre project, added [rsvp](https://hexdocs.pm/rsvp/index.html) to fetch the RSS documents, and...
it did not work ! Damn you CORS ! I guess this solution is out the window and I have to fetch them on the
server instead.

As I am currently learning how to use AWS, I thought this project would be perfect for testing AWS Lambdas.
A Lambda is a simple function that receive an event as an input and returns data under a specific format as
the output. It can be called with an HTTP request from an URL and return data to create HTTP responses.
I did not need much computational power, since I would simply be serving an HTML page and fetching, parsing
and formatting RSS data, so a Lambda is a good fit (and it has a free tier).

First, I have to decode the incoming event ! Since I will only be calling the Lambda with HTTP requests, the
event will always have the same format, so I could write a decoder in order to get a Gleam object out of it
(even though I am not sure this was necessary). The code of our Lambda then starts like this:

```gleam
pub fn handler(event) {
  node.console_log("Received event: " <> string.inspect(event))
  let ev = aws.decode_event(event)
  // ...
}
```

Next, I discriminate on the HTTP path to choose what I should do:

```gleam
let res = case ev.request_context.http.path {
  "/" -> todo as "return a HTML page"
  "/items" -> todo as "return the RSS data formatted"
}
res
```

I generate the HTML using Lustre and the `element.to_document_string` function, which generate an HTML document
from a Lustre element. The HTML in itself is quite simple, it is a list of divs (one for each RSS source) that
make a request to `/items` when initialized.

The items endpoint has a very straightforward job to do: fetch the url passed as parameter, parse it and return
the data correctly formatted. Since I use HTMX, the items endpoint should also return HTML that will replace
the calling div's content. Again, I use Lustre to build an element from the parsed data and convert it to
and HTML string using `element.to_string`.

And voilà, we have an HTML page that loads and displays the RSS items from the provided URLs ! I use it
almost daily to get news and articles. If you want to see it for yourself, [here](https://sbocjayj46dktf3orwcsw27nxi0ymkxn.lambda-url.eu-north-1.on.aws/) is the link. If you want to
look at the code (which shouldn't be too hard to understand, send me a message if you struggle), it is
[here](https://github.com/Billuc/rss-reader).

## Ending notes

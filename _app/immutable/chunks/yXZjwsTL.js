import"./DsnmJJEf.js";import"./CraCJsNR.js";import{f,s as e,a as w,b,d as t,r as a,Z as y}from"./DIc3h8md.js";import{h as o}from"./BHGvuBUI.js";const v={title:"RSS Reader - How I built my own news aggregator in Gleam",createdAt:"17/09/2025"},{title:L,createdAt:R}=v;var S=f(`<p>Some time ago, I gave myself a new side quest. I wanted to know more about RSS feeds.
The motivation behind it was that I was tired of “modern” news websites. I feel it is
now harder to access meaningful content on those websites than it should be. Whether it
is loading time, huge images, useless platitudes or the infamous cookie popups and paywalls, I get annoyed
really, really fast. This shouldn’t be the case ! After all, all you need to know what
there is to know is usually simply a title and a short description.</p> <p>I am old enough to know that RSS feeds were commonly used to be notified of the latest news of a
particular website, and all of this without the fioritures. So here I am on my new side quest of
trying to build a RSS reader/aggregator for myself ! The goal is to have a simple list of titles,
with a description if I want to know more and a link if I want to read the full article.</p> <p>For this project, I am using my currently favorite language, Gleam ! I didn’t choose Gleam
because it would make the project easier or faster to write, but simply because I knew I could
do the whole project using it and that I would have a good time all along the way :)</p> <h2>First, a word about Gleam</h2> <p><a href="https://gleam.run/" rel="nofollow">Gleam</a> is a relatively new functional language with a strong emphasis
on type safety. With its type system, its friendly syntax and community and the fact that
(at least in my opinion) it is a well-thought language, it quickly became one of my
favorite languages to code with !</p> <p>Under the hood, Gleam compiles to Erlang or to Javascript. The Erlang target allows
to take advantage of the power of the BEAM to build extremely concurrent applications.
The Javascript target allows to create scripts for the browser (take a look at <a href="https://hexdocs.pm/lustre/index.html" rel="nofollow">Lustre</a>, a Gleam web framework) or the server
(via Node, Deno and co.).</p> <h2>The XML parser</h2> <p>The first step on our RSS reader journey is to parse the XML documents RSS is built upon.
I could have gone the simple and easy path of reusing existing code. There are utilities
both in Erlang (<a href="https://www.erlang.org/doc/apps/xmerl/xmerl_ug.html" rel="nofollow">xmerl</a>) and Javascript
(<a href="https://developer.mozilla.org/en-US/docs/Web/XML/Guides/Parsing_and_serializing_XML" rel="nofollow">DOMParser</a>)
to parse XML, but I wanted to do the parsing myself so I ended up writing my own XML parser
using <a href="https://hexdocs.pm/nibble/index.html" rel="nofollow">nibble</a>.</p> <p>Nibble is a lexer and parser combinator library written entirely in pure Gleam. This is great
because it means the parser I wrote with it can run anywhere Gleam can, whether it is an
Erlang or Javascript server or the browser. It works in 2 steps: a lexing step and a parsing
step, much like lex/flex + yacc/bison (even though there are fundamental differences, I know).</p> <p>Let’s start with the lexer. The goal of the lexer is to take a string and turn it into a chain
of meaningful symbols called tokens. Here is my list of tokens for XML:</p> <pre class="language-gleam"><!></pre> <p>My XML lexer is a bit more complicated than just matching characters to tokens though.
Let’s take this example:</p> <pre class="language-xml"><!></pre> <p>Here, for instance, <code>&lt;title</code> should not be matched to <code>TagOpen("title")</code>, but should be
included in the comment’s content. Therefore, I have to know that I am in the context of a comment.
To introduce this idea of <em>lexing context</em>, nibble has the ability to define
advanced lexers that produce different tokens based on the <em>mode</em> we are in. If you want
to know more about how I used these modes, you can look at the code <a href="https://github.com/Billuc/gleaxml/blob/master/src/gleaxml/lexer.gleam" rel="nofollow">here</a>.</p> <p>Then, there is the parsing step. The parser’s job is to take the chain of tokens returned by
the lexer and turn it into objects that can be used for whatever you need. Here, we want to
create objects such as a XmlDocument, XmlNodes, etc. The parser is basically a set of rules
on how tokens should be arranged and how to turn these into Gleam objects. Here is a simple example:</p> <pre class="language-gleam"><!></pre> <p>This basically says “If you have a sequence of a CommentStart, then 0 or many Texts and finally a CommentEnd,
create a Comment by joining the values of the Texts”. Since the <a href="https://www.w3.org/TR/xml/" rel="nofollow">XML specification</a> is very well defined, it was easy to create such rules to assemble tokens and create XmlDocument and XmlNode objects.</p> <p>Finally, I created a ‘main’ module with helpful function to make my life easier when I want to manipulate said objects,
since pattern matching all the time when you want to get the value of an attribute or the first child of a certain
tagname is cumbersome. Functions such as <code>pub fn get_node(root: parser.XmlNode, path: List(String))</code> or <code>pub fn get_attribute(node: parser.XmlNode, name: String)</code> have much more meaning in this context and are very
convenient for building our RSS library.</p> <h2>The RSS library</h2> <p>The RSS library is very simple since most of the work has been done in the XML library.
What we have to do now is simply to retrieve data from specific places in the XML node tree returned by our XML
parser. Then, we can build new objects relative to RSS feeds and voilà !</p> <p>Once again, the <a href="https://www.rssboard.org/rss-specification" rel="nofollow">specification</a> is very clear and detailed
and the helper functions I mentioned at the end of the previous section helped tremendously with
retrieving data from specific places. There isn’t much to say about the code, you can find it <a href="https://github.com/Billuc/glisse/" rel="nofollow">here</a>.</p> <h2>The website</h2> <p>Now that I can, from a string of data, parse its XML content and build RSS-related objects, I want to display
the data so that I can read the news’ titles. A website is the best way to do this, since I would get access to the
content from basically anywhere. Let’s start building a webpage using Lustre then !</p> <p>My first idea was to create a purely static website that I could host on a Github Page and access easily.
I spun up a Lustre project, added <a href="https://hexdocs.pm/rsvp/index.html" rel="nofollow">rsvp</a> to fetch the RSS documents, and…
it did not work ! Damn you CORS ! Basically, I can’t access content from another website if they don’t authorize
me to access it. Some RSS feeds don’t allow or deny access to their RSS feeds, but the browser’s default behaviour is, for
security reasons, to block unallowed content… I guess this solution is out the window and I have to fetch them on the
server instead.</p> <p>As I am currently learning how to use AWS, I thought this project would be perfect for testing AWS Lambdas.
A Lambda is a simple function that receive an event as an input and returns data under a specific format as
the output. It can be called with an HTTP request from an URL and return data to create HTTP responses.
I did not need much computational power, since I would simply be serving an HTML page and fetching, parsing
and formatting RSS data, so a Lambda is a good fit (and it has a free tier).</p> <p>First, I have to decode the incoming event ! Since I will only be calling the Lambda with HTTP requests, the
event will always have the same format, so I could write a decoder in order to get a Gleam object out of it
(even though I am not sure this was necessary). The code of our Lambda then starts like this:</p> <pre class="language-gleam"><!></pre> <p>Next, I discriminate on the HTTP path to choose what I should do:</p> <pre class="language-gleam"><!></pre> <p>I generate the HTML using Lustre and the <code>element.to_document_string</code> function, which generate an HTML document
from a Lustre element. The HTML in itself is quite simple, it is a list of divs (one for each RSS source) that
make a request to <code>/items</code> when initialized.</p> <p>The items endpoint has a very straightforward job to do: fetch the url passed as parameter, parse it and return
the data correctly formatted. Since I use HTMX, the items endpoint should also return HTML that will replace
the calling div’s content. Again, I use Lustre to build an element from the parsed data and convert it to
and HTML string using <code>element.to_string</code>.</p> <p>And voilà, we have an HTML page that loads and displays the RSS items from the provided URLs ! If you want to see
it for yourself, <a href="https://sbocjayj46dktf3orwcsw27nxi0ymkxn.lambda-url.eu-north-1.on.aws/" rel="nofollow">here</a> is the link. If you want to
look at the code (which shouldn’t be too hard to understand, send me a message if you struggle), it is <a href="https://github.com/Billuc/rss-reader" rel="nofollow">here</a>.</p> <h2>Ending notes</h2> <p>I loved doing this simple project, which has now a big impact since I use it
almost daily to get news and articles ! It was super interesting learning about lexers and
parsers and I plan on using nibble for more projects (I have this idea of a toy programming
language) ! As always with Gleam, it was super easy to get things done, the language doesn’t
get in your way, it is a pleasure to use and there are many great packages :)</p> <p>P.S.: I got to read of <a href="https://feedmaker.fly.dev" rel="nofollow">this website</a> that allow you to generate
RSS feeds from websites thanks to my RSS reader :D I can get news from even more sources !!!</p>`,1);function _(d){var l=S(),n=e(w(l),20),c=t(n);o(c,()=>`<code class="language-gleam">pub type XmlToken &#123;
  TagOpen(name: String)             // &lt;name
  TagClose                          // &gt;
  TagSelfClose                      // /&gt;
  TagEnd(name: String)              // &lt;/name
  Text(String)                      // a chain of characters
  Equals                            // =
  CommentStart                      // &lt;!--
  CommentEnd                        // --&gt;
  Quote(quote: String)              // &quot; or &#39;
  CDATAOpen                         // &lt;[CDATA[
  CDATAClose                        // ]]&gt;
  ReferenceStart                    // &amp;
  ReferenceName(name: String)       // name
  ReferenceCode(code: String)       // #code
  ReferenceHexCode(code: String)    // #xcode
  ReferenceEnd                      // ;
  XmlDeclarationStart               // &lt;?xml
  XmlDeclarationEnd                 // ?&gt;
&#125;</code>`),a(n);var s=e(n,4),m=t(s);o(m,()=>`<code class="language-xml"><span class="token comment">&lt;!-- You can define a book's title like so &lt;title>My Book&lt;/title> --></span></code>`),a(s);var r=e(s,6),u=t(r);o(u,()=>`<code class="language-gleam">fn comment() -&gt; nibble.Parser(XmlNode, lexer.XmlToken, k) &#123;
  use _ &lt;- nibble.do(nibble.token(lexer.CommentStart))
  use values &lt;- nibble.do(
    nibble.take_map_while(fn(tok) &#123;
      case tok &#123;
        lexer.Text(v) -&gt; option.Some(v)
        _ -&gt; option.None
      &#125;
    &#125;),
  )
  use _ &lt;- nibble.do(nibble.token(lexer.CommentEnd))

  nibble.return(Comment(string.join(values, &quot;&quot;)))
&#125;</code>`),a(r);var i=e(r,22),p=t(i);o(p,()=>`<code class="language-gleam">pub fn handler(event) &#123;
  node.console_log(&quot;Received event: &quot; &lt;&gt; string.inspect(event))
  let ev = aws.decode_event(event)
  // ...
&#125;</code>`),a(i);var h=e(i,4),g=t(h);o(g,()=>`<code class="language-gleam">let res = case ev.request_context.http.path &#123;
  &quot;/&quot; -&gt; todo as &quot;return a HTML page&quot;
  &quot;/items&quot; -&gt; todo as &quot;return the RSS data formatted&quot;
&#125;
res</code>`),a(h),y(12),b(d,l)}export{_ as default,v as metadata};

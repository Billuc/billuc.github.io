import"./DsnmJJEf.js";import"./CraCJsNR.js";import{f as m,s as a,a as p,b as u,d as o,r as n,Z as g}from"./DIc3h8md.js";import{h as r}from"./BHGvuBUI.js";const f={title:"RSS Reader - How I built my own news aggregator in Gleam",createdAt:"17/09/2025"},{title:x,createdAt:S}=f;var w=m(`<p>Some time ago, I gave myself a new side quest. I wanted to know more about RSS feeds.
The motivation behind it was that I was tired of “modern” news websites. I feel it is
now harder to access meaninful content on those websites than it should be. Whether it
is loading time, huge images, useless platitudes or the infamous cookie popups and paywalls, I get annoyed
really, really fast. This shouldn’t be the case ! After all, all you need to know what
there is to know is usually simply a title and a short description.</p> <p>That is where RSS feeds come in ! I am old enough to know that RSS feeds were a thing
in the 2000s and that they were often used to be notified of the latest news of a
particular website. So here I am on my new side quest of trying to build a RSS reader/aggregator
for myself ! The goal is to have a simple list of titles, with a description if I want to know more
and a link to the article if I want to read the full article.</p> <p>For this project, I am using my currently favorite language, which is Gleam ! I didn’t choose Gleam
because it would make the project easier or faster to write, but simply because I knew I could
do the whole project using it and that I would have a good time all along the way :)</p> <h2>First, a word about Gleam</h2> <p><a href="https://gleam.run/" rel="nofollow">Gleam</a> is a relatively new functional language with a strong emphasis
on type safety. With its type system, its friendly syntax and community and the fact that
(at least in my opinion) it is a well-thought language, it quickly became one of my
favorite languages to code with !</p> <p>Under the hood, Gleam compiles to Erlang or to Javascript. The Erlang target allows
to take advantage of the power of the BEAM and its immense scalability and thus
build extremely concurrent applications. The Javascript target allows to create scripts
for the browser (take a look at <a href="https://hexdocs.pm/lustre/index.html" rel="nofollow">Lustre</a>, a Gleam
web framework) or the server (via Node, Deno and co.).</p> <h2>The XML parser</h2> <p>The first step on our RSS reader journey is to parse the XML documents RSS is built upon.
I could have gone the simple and easy path of reusing existing code, as there are utilities
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
name is cumbersome. Functions such as <code>pub fn get_node(root: parser.XmlNode, path: List(String))</code> or <code>pub fn get_attribute(node: parser.XmlNode, name: String)</code> have much more meaning in this context and are very
convenient for building our RSS library.</p> <h2>The RSS library</h2> <p>The RSS library is very simple since most of the work has been done in the XML library.
What we have to do now is simply to retrieve data from specific places in the XML node tree returned by our XML
parser. Then, we can build new objects relative to RSS feeds and voilà !</p> <p>Once again, the <a href="https://www.rssboard.org/rss-specification" rel="nofollow">specification</a> is very clear and detailed
and the helper functions I mentioned at the end of the previous section helped tremendously with
retrieving data from specific places. You can find this library <a href="https://github.com/Billuc/glisse/" rel="nofollow">here</a>.</p> <h2>The website</h2> <p>Now that I can, from a string of data, parse its XML content and build RSS-related objects, I want to display
the data so that I can read the news’ titles. A website is the best way to do this and get access to the
content from basically anywhere. Gleam can build website by using the Lustre library, perfect !</p>`,1);function T(l){var s=w(),e=a(p(s),20),h=o(e);r(h,()=>`<code class="language-gleam">pub type XmlToken &#123;
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
&#125;</code>`),n(e);var t=a(e,4),d=o(t);r(d,()=>`<code class="language-xml"><span class="token comment">&lt;!-- You can define a book's title like so &lt;title>My Book&lt;/title> --></span></code>`),n(t);var i=a(t,6),c=o(i);r(c,()=>`<code class="language-gleam">fn comment() -&gt; nibble.Parser(XmlNode, lexer.XmlToken, k) &#123;
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
&#125;</code>`),n(i),g(14),u(l,s)}export{T as default,f as metadata};

import{f as i,a as c}from"./D7nt4fav.js";import"./DW57CB9H.js";import{s as e,f as d,D as h}from"./LQZmqQ7L.js";import{h as s}from"./CHazYe-K.js";const y={title:"RSS Reader - How I built my own news aggregator in Gleam",createdAt:"17/09/2025",lastUpdatedAt:"31/10/2025"},{title:D,createdAt:w,lastUpdatedAt:b}=y;var m=i(`<p>Some time ago, I gave myself a new side quest. I wanted to know more about RSS feeds.
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
of meaningful symbols called tokens. Here is my list of tokens for XML:</p> <!> <p>My XML lexer is a bit more complicated than just matching characters to tokens though.
Let’s take this example:</p> <!> <p>Here, for instance, <code>&lt;title</code> should not be matched to <code>TagOpen("title")</code>, but should be
included in the comment’s content. Therefore, I have to know that I am in the context of a comment.
To introduce this idea of <em>lexing context</em>, nibble has the ability to define
advanced lexers that produce different tokens based on the <em>mode</em> we are in. If you want
to know more about how I used these modes, you can look at the code <a href="https://github.com/Billuc/gleaxml/blob/master/src/gleaxml/lexer.gleam" rel="nofollow">here</a>.</p> <p>Then, there is the parsing step. The parser’s job is to take the chain of tokens returned by
the lexer and turn it into objects that can be used for whatever you need. Here, we want to
create objects such as a XmlDocument, XmlNodes, etc. The parser is basically a set of rules
on how tokens should be arranged and how to turn these into Gleam objects. Here is a simple example:</p> <!> <p>This basically says “If you have a sequence of a CommentStart, then 0 or many Texts and finally a CommentEnd,
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
(even though I am not sure this was necessary). The code of our Lambda then starts like this:</p> <!> <p>Next, I discriminate on the HTTP path to choose what I should do:</p> <!> <p>I generate the HTML using Lustre and the <code>element.to_document_string</code> function, which generate an HTML document
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
RSS feeds from websites thanks to my RSS reader :D I can get news from even more sources !!!</p> <p>P.P.S.: I should warn you if you want to use GleaXML, as its performance and memory usage are not great. I have to
allocate 512MB of RAM to my Lambdas and they still take about 3 seconds to parse and render basic RSS data.</p> <h2>Links</h2> <ul><li><a href="https://github.com/Billuc/gleaxml" rel="nofollow">gleaxml (XML parsing library)</a></li> <li><a href="https://github.com/Billuc/glisse/" rel="nofollow">glisse (RSS parser)</a></li> <li><a href="https://github.com/Billuc/rss-reader" rel="nofollow">RSS Reader (code)</a></li> <li><a href="https://sbocjayj46dktf3orwcsw27nxi0ymkxn.lambda-url.eu-north-1.on.aws/" rel="nofollow">RSS Reader (page)</a></li></ul>`,1);function F(r){var a=m(),n=e(d(a),20);s(n,()=>`<pre class="shiki nord" style="background-color:#2e3440ff;color:#d8dee9ff" tabindex="0"><code><span class="line"><span style="color:#81A1C1">pub</span><span style="color:#81A1C1"> type</span><span style="color:#D8DEE9FF"> XmlToken &#123;</span></span>
<span class="line"><span style="color:#D8DEE9FF">  TagOpen(</span><span style="color:#D8DEE9">name: </span><span style="color:#D8DEE9FF">String)             </span><span style="color:#616E88">// &#x3C;name</span></span>
<span class="line"><span style="color:#D8DEE9FF">  TagClose                          </span><span style="color:#616E88">// ></span></span>
<span class="line"><span style="color:#D8DEE9FF">  TagSelfClose                      </span><span style="color:#616E88">// /></span></span>
<span class="line"><span style="color:#D8DEE9FF">  TagEnd(</span><span style="color:#D8DEE9">name: </span><span style="color:#D8DEE9FF">String)              </span><span style="color:#616E88">// &#x3C;/name</span></span>
<span class="line"><span style="color:#D8DEE9FF">  Text(String)                      </span><span style="color:#616E88">// a chain of characters</span></span>
<span class="line"><span style="color:#D8DEE9FF">  Equals                            </span><span style="color:#616E88">// =</span></span>
<span class="line"><span style="color:#D8DEE9FF">  CommentStart                      </span><span style="color:#616E88">// &#x3C;!--</span></span>
<span class="line"><span style="color:#D8DEE9FF">  CommentEnd                        </span><span style="color:#616E88">// --></span></span>
<span class="line"><span style="color:#D8DEE9FF">  Quote(</span><span style="color:#D8DEE9">quote: </span><span style="color:#D8DEE9FF">String)              </span><span style="color:#616E88">// " or '</span></span>
<span class="line"><span style="color:#D8DEE9FF">  CDATAOpen                         </span><span style="color:#616E88">// &#x3C;[CDATA[</span></span>
<span class="line"><span style="color:#D8DEE9FF">  CDATAClose                        </span><span style="color:#616E88">// ]]></span></span>
<span class="line"><span style="color:#D8DEE9FF">  ReferenceStart                    </span><span style="color:#616E88">// &#x26;</span></span>
<span class="line"><span style="color:#D8DEE9FF">  ReferenceName(</span><span style="color:#D8DEE9">name: </span><span style="color:#D8DEE9FF">String)       </span><span style="color:#616E88">// name</span></span>
<span class="line"><span style="color:#D8DEE9FF">  ReferenceCode(</span><span style="color:#D8DEE9">code: </span><span style="color:#D8DEE9FF">String)       </span><span style="color:#616E88">// #code</span></span>
<span class="line"><span style="color:#D8DEE9FF">  ReferenceHexCode(</span><span style="color:#D8DEE9">code: </span><span style="color:#D8DEE9FF">String)    </span><span style="color:#616E88">// #xcode</span></span>
<span class="line"><span style="color:#D8DEE9FF">  ReferenceEnd                      </span><span style="color:#616E88">// ;</span></span>
<span class="line"><span style="color:#D8DEE9FF">  XmlDeclarationStart               </span><span style="color:#616E88">// &#x3C;?xml</span></span>
<span class="line"><span style="color:#D8DEE9FF">  XmlDeclarationEnd                 </span><span style="color:#616E88">// ?></span></span>
<span class="line"><span style="color:#D8DEE9FF">&#125;</span></span></code></pre>`);var t=e(n,4);s(t,()=>`<pre class="shiki nord" style="background-color:#2e3440ff;color:#d8dee9ff" tabindex="0"><code><span class="line"><span style="color:#616E88">&#x3C;!-- You can define a book's title like so &#x3C;title>My Book&#x3C;/title> --></span></span></code></pre>`);var o=e(t,6);s(o,()=>`<pre class="shiki nord" style="background-color:#2e3440ff;color:#d8dee9ff" tabindex="0"><code><span class="line"><span style="color:#81A1C1">fn</span><span style="color:#88C0D0"> comment</span><span style="color:#D8DEE9FF">() </span><span style="color:#81A1C1">-></span><span style="color:#D8DEE9FF"> nibble.Parser(XmlNode, lexer.XmlToken, k) &#123;</span></span>
<span class="line"><span style="color:#81A1C1">  use</span><span style="color:#616E88"> _</span><span style="color:#81A1C1"> &#x3C;-</span><span style="color:#D8DEE9FF"> nibble.</span><span style="color:#88C0D0">do</span><span style="color:#D8DEE9FF">(nibble.</span><span style="color:#88C0D0">token</span><span style="color:#D8DEE9FF">(lexer.CommentStart))</span></span>
<span class="line"><span style="color:#81A1C1">  use</span><span style="color:#D8DEE9FF"> values </span><span style="color:#81A1C1">&#x3C;-</span><span style="color:#D8DEE9FF"> nibble.</span><span style="color:#88C0D0">do</span><span style="color:#D8DEE9FF">(</span></span>
<span class="line"><span style="color:#D8DEE9FF">    nibble.</span><span style="color:#88C0D0">take_map_while</span><span style="color:#D8DEE9FF">(</span><span style="color:#81A1C1">fn</span><span style="color:#D8DEE9FF">(tok) &#123;</span></span>
<span class="line"><span style="color:#81A1C1">      case</span><span style="color:#D8DEE9FF"> tok &#123;</span></span>
<span class="line"><span style="color:#D8DEE9FF">        lexer.Text(v) </span><span style="color:#81A1C1">-></span><span style="color:#D8DEE9FF"> option.Some(v)</span></span>
<span class="line"><span style="color:#616E88">        _</span><span style="color:#81A1C1"> -></span><span style="color:#D8DEE9FF"> option.None</span></span>
<span class="line"><span style="color:#D8DEE9FF">      &#125;</span></span>
<span class="line"><span style="color:#D8DEE9FF">    &#125;),</span></span>
<span class="line"><span style="color:#D8DEE9FF">  )</span></span>
<span class="line"><span style="color:#81A1C1">  use</span><span style="color:#616E88"> _</span><span style="color:#81A1C1"> &#x3C;-</span><span style="color:#D8DEE9FF"> nibble.</span><span style="color:#88C0D0">do</span><span style="color:#D8DEE9FF">(nibble.</span><span style="color:#88C0D0">token</span><span style="color:#D8DEE9FF">(lexer.CommentEnd))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF">  nibble.</span><span style="color:#88C0D0">return</span><span style="color:#D8DEE9FF">(Comment(string.</span><span style="color:#88C0D0">join</span><span style="color:#D8DEE9FF">(values, </span><span style="color:#A3BE8C">""</span><span style="color:#D8DEE9FF">)))</span></span>
<span class="line"><span style="color:#D8DEE9FF">&#125;</span></span></code></pre>`);var l=e(o,22);s(l,()=>`<pre class="shiki nord" style="background-color:#2e3440ff;color:#d8dee9ff" tabindex="0"><code><span class="line"><span style="color:#81A1C1">pub</span><span style="color:#81A1C1"> fn</span><span style="color:#88C0D0"> handler</span><span style="color:#D8DEE9FF">(event) &#123;</span></span>
<span class="line"><span style="color:#D8DEE9FF">  node.</span><span style="color:#88C0D0">console_log</span><span style="color:#D8DEE9FF">(</span><span style="color:#A3BE8C">"Received event: "</span><span style="color:#81A1C1"> &#x3C;></span><span style="color:#D8DEE9FF"> string.</span><span style="color:#88C0D0">inspect</span><span style="color:#D8DEE9FF">(event))</span></span>
<span class="line"><span style="color:#81A1C1">  let</span><span style="color:#D8DEE9FF"> ev </span><span style="color:#81A1C1">=</span><span style="color:#D8DEE9FF"> aws.</span><span style="color:#88C0D0">decode_event</span><span style="color:#D8DEE9FF">(event)</span></span>
<span class="line"><span style="color:#616E88">  // ...</span></span>
<span class="line"><span style="color:#D8DEE9FF">&#125;</span></span></code></pre>`);var p=e(l,4);s(p,()=>`<pre class="shiki nord" style="background-color:#2e3440ff;color:#d8dee9ff" tabindex="0"><code><span class="line"><span style="color:#81A1C1">let</span><span style="color:#D8DEE9FF"> res </span><span style="color:#81A1C1">=</span><span style="color:#81A1C1"> case</span><span style="color:#D8DEE9FF"> ev.request_context.http.path &#123;</span></span>
<span class="line"><span style="color:#A3BE8C">  "/"</span><span style="color:#81A1C1"> -></span><span style="color:#81A1C1"> todo</span><span style="color:#81A1C1"> as</span><span style="color:#A3BE8C"> "return a HTML page"</span></span>
<span class="line"><span style="color:#A3BE8C">  "/items"</span><span style="color:#81A1C1"> -></span><span style="color:#81A1C1"> todo</span><span style="color:#81A1C1"> as</span><span style="color:#A3BE8C"> "return the RSS data formatted"</span></span>
<span class="line"><span style="color:#D8DEE9FF">&#125;</span></span>
<span class="line"><span style="color:#D8DEE9FF">res</span></span></code></pre>`),h(18),c(r,a)}export{F as default,y as metadata};

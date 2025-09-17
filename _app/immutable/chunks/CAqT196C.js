import"./DsnmJJEf.js";import"./DRoFOHEh.js";import{f as a,b as o,Z as s}from"./BzqehAlX.js";const i={title:"RSS Reader - How I built my own news aggregator in Gleam",createdAt:"17/09/2025"},{title:d,createdAt:m}=i;var r=a(`<p>Some time ago, I gave myself a new side quest. I wanted to know more about RSS feeds.
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
using <a href="https://hexdocs.pm/nibble/index.html" rel="nofollow">nibble</a>.</p> <h2>The RSS library</h2> <h2>The website</h2>`,1);function p(e){var t=r();s(18),o(e,t)}export{p as default,i as metadata};

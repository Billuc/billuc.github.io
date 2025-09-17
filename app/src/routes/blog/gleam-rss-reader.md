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

## The RSS library

## The website

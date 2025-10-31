---
title: How slow is GleaXML ? :)
createdAt: '31/10/2025'
---

In my [previous post](./gleam-rss-reader), I presented RSS Reader, the RSS agregator I wrote entirely using Gleam.
In order to parse the RSS feeds, I had to use an XML parser and decided to create one from scratch.
That's how [GleaXML](https://github.com/Billuc/gleaxml) was born !

When I shared it with the Gleam community on [Discord](https://discord.gg/Fm8Pwmy), it sparked a discussion on how
nibble, the parser combinator I used, was slow, has a high memory usage and maybe wasn't the best tool to parse XML
(especially large ones).

The reasons for this are (I guess):

1.  nibble has 2 loops: one for lexing and one for parsing
2.  nibble creates tokens in the lexing loop, which are all stored in memory alongside additional (but still useful) data
3.  Gleam adds some overhead
4.  Parser combinators are not optimal when looking for performance (but quite easy to understand IMO)

People then recommended me to take a look at [splitter](https://hexdocs.pm/splitter/index.html), a small library that is
very good at doing one thing: splitting text ! I should be able to write a performant parser with that ! To see the
magnitude of the performance gain, I decided to do a benchmark to compare my nibble and splitter parsers with each other and
with a reference parser like [xmerl](https://www.erlang.org/doc/apps/xmerl/xmerl_ug.html), the XML library provided with
Erlang.

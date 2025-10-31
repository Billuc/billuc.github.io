---
title: How slow is GleaXML ? :)
createdAt: '31/10/2025'
---

In my [previous post](./gleam-rss-reader), I presented RSS Reader, the RSS agregator I wrote entirely using Gleam.
In order to parse the RSS feeds, I had to use an XML parser and decided to create one from scratch.
That's how [GleaXML](https://github.com/Billuc/gleaxml) was born !

When I shared it with the Gleam community on [Discord](https://discord.gg/Fm8Pwmy), it sparked a discussion on how
nibble, the parser combinator I used, was slow, has a high memory usage and maybe wasn't the best tool to parse XML
especially large ones.

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

## The splitter parser

splitter's job is only to split an input string based on tokens defined in advance, but this is enough to parse about anything.

Let's take a simple example like parsing a simple self-closing tag with no argument.
Our input looks like this: `<my-tag/>`. Basically the expected structure is this: `OPEN_TAG tag_name SELF_CLOSE_TAG` and the data we
want to retrieve is the tag name. We can then create a Splitter, split on `OPEN_TAG` and `SELF_CLOSE_TAG` and all that is left should
be the tag name. Here is what the code looks like:

```gleam
fn parse_tag() -> Result(String, String) {
  let my_splitter = splitter.new(["<", "/>"])
  let input = "<my-tag/>"

  let #(_, delimiter, input) = splitter.split(my_splitter, input)
  use <- bool.guard(delimiter != "<", Error("Tags should start with '<'"))

  let #(tag_name, delimiter, _) = splitter.split(my_splitter, input)
  use <- bool.guard(delimiter != "/>", Error("Tags should end with '/>'"))

  Ok(tag_name)
}
```

As you can see the splitter has to be pre-defined to split only on certain tokens. Here, the only tokens that are of interest are
the _open tag token_ (`<`) and _self close tag token_ (`/>`), so we will only split on those.

The first split should be on a _open tag token_,
so we check on that and return an error if it is not. Note that we keep the remaining string and use it to perform the second split.
This second split should be on a _self-close tag token_ and return an error again if it is not. Finally, we can return the tag name that we
got during the second split.

```
fn root_splitter() {
  splitter.new([xml_decl_start, "<", "\r", "\n", " "])
}

fn attr_value_splitter() {
  splitter.new([
    hex_char_reference,
    dec_char_reference,
    entity_reference,
    "\"",
    "'",
  ])
}

fn start_tag_splitter() {
  splitter.new(["/>", ">", "=", "\"", "'", "\r", "\n", " "])
}

fn end_tag_splitter() {
  splitter.new([">", "\r", " ", "\n"])
}

fn content_splitter() {
  splitter.new([
    "</",
    hex_char_reference,
    dec_char_reference,
    entity_reference,
    comment_start,
    cdata_start,
    "<",
  ])
}

fn comment_value_splitter() {
  splitter.new([comment_end, "--"])
}

fn cdata_splitter() {
  splitter.new([cdata_end])
}

fn xml_decl_splitter() {
  splitter.new(["=", "\"", "'", xml_decl_end, "\r", "\n", " "])
}

fn reference_splitter() {
  splitter.new([semi_colon])
}
```

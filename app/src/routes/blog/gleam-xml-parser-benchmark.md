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

And that is (almost) all there is to parsing. Obviously, this example is very simple compared to parsing whole XML documents but the core principle
is there ! I only added helper functions that introduce some overhead but made my life sooooo much easier when writing the logic of parsing XML.

The main benefit from this approach is that we only got through the document once and we do it very efficiently since we basically jump to the
pre-defined tokens. As such, I expected this parser to be much faster than the nibble one, at least 2 to 3 times faster.

## The FFI parsers

[Gleam](https://gleam.run/) is a really cool language that can compile to Erlang or Javascript and, to take advantage of the extensive ecosystem of both languages, Gleam
has a very powerful [FFI (foreign function interface)](https://en.wikipedia.org/wiki/Foreign_function_interface) system. This allowed me to write reference
parsers, which I can compare my parsers to to see how fast/slow they are !

Erlang's OTP does include natively a full-spec compliant XML parser, [xmerl](https://www.erlang.org/doc/apps/xmerl/api-reference.html), so I can use just that without
putting much work into it. The only thing I have to do is wrap calls to xmerl_scan into functions that take Gleam data as an input and outputs data that can be
"understood" by Gleam. Here is a snapshot of the code :

```erlang
-module(gleaxml_ffi).
-export([
  parse/1
]).
-include_lib("xmerl/include/xmerl.hrl").

parse(XmlString) when is_binary(XmlString) ->
    parse(binary_to_list(XmlString));
parse(XmlString) when is_list(XmlString) ->
    case do_parse(XmlString) of
        {error, Reason} ->
            {error, Reason};
        {Xml, _Rest} -> to_xml_document(Xml);
        Other ->
            {error, Other}
    end.

do_parse(XmlString) when is_list(XmlString) ->
    try xmerl_scan:string(XmlString)
    catch
        _:Reason -> {error, Reason}
    end.


to_xml_document(Xml) ->
    case is_node(Xml) of
        false -> {error, list_to_binary("unsupported_node")};
        true -> {ok, #{
                  atom_to_binary(version) => list_to_binary("1.0"),
                  atom_to_binary(encoding) => list_to_binary("utf8"),
                  atom_to_binary(standalone) => true,
                  list_to_binary("root_element") => to_node(Xml)
            }}
    end.
```

Since Gleam's strings are binary data under the hood, we have to convert them to character lists, which is the way Erlang represents strings.
Then, we can call `xmerl_scan:string` to parse the XML document and call `to_xml_document` to shape the data the way we want so that it matches
our Gleam data type. And that is all there is to our Erlang FFI parser !

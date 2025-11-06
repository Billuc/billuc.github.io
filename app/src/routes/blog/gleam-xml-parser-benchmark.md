---
title: How slow is GleaXML ? :)
createdAt: '31/10/2025'
---

In my [previous post](./gleam-rss-reader), I presented RSS Reader, the RSS agregator I wrote entirely using Gleam.
In order to parse the RSS feeds, I had to use an XML parser and decided to create my own from scratch.
That's how [GleaXML](https://github.com/Billuc/gleaxml) was born !

When I shared it with the Gleam community on [Discord](https://discord.gg/Fm8Pwmy), it sparked a discussion on how
nibble, the parser combinator I used, was slow, had a high memory usage and maybe wasn't the best tool to parse XML
especially large ones.

Reasons for this are (I guess):

1.  nibble has 2 loops: one for lexing and one for parsing
2.  nibble creates tokens in the lexing loop, which are all stored in memory alongside additional (but still useful) data
3.  Both Gleam and nibble add some overhead
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

  let #(_, delimiter, input) = splitter.split(my_splitter, input) // (1)
  use <- bool.guard(delimiter != "<", Error("Tags should start with '<'"))

  let #(tag_name, delimiter, _) = splitter.split(my_splitter, input) // (2)
  use <- bool.guard(delimiter != "/>", Error("Tags should end with '/>'"))

  Ok(tag_name) // (3)
}
```

As you can see the splitter has to be pre-defined to split only on certain tokens. Here, the only tokens that are of interest are
the _open tag token_ (`<`) and _self close tag token_ (`/>`), so we will only split on those.

The first split should be on a _open tag token_, so we check on that and return an error if it is not `(1)`.
Note that we keep the remaining string and use it to perform the second split.
This second split should be on a _self-close tag token_ and return an error again if it is not `(2)`.
Finally, we can return the tag name that we got during the second split `(3)`.

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

For the JavaScript FFI parser, I had a tiny bit more trouble. There is an XML parser available called [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser).
However, the problem is that it is a Web API and is not available on Node, where I want to run my benchmarks.
Thus, I used [jsdom](https://www.npmjs.com/package/jsdom) to get a similar API that I could work with.

Again, all that was left was write the "glue" code which was very simple. Here is the gist of it :

```javascript
import { Ok, Error, List } from '../../gleam.mjs';
import { JSDOM } from 'jsdom';

function newDomParser() {
	if (typeof process === 'object') {
		const jsdom = new JSDOM('');
		return new jsdom.window.DOMParser();
	}
	return new DOMParser();
}

export function parse(string) {
	const domParser = newDomParser();
	const document = domParser.parseFromString(string, 'application/xml');
	const errorNode = document.querySelector('parsererror');

	if (errorNode) {
		return new Error(errorNode.textContent);
	}
	return new Ok(toXmlDocument(document));
}

function toXmlDocument(xml) {
	return {
		version: '1.0',
		standalone: true,
		encoding: 'UTF-8',
		root_element: toElement(getRootElement(xml))
	};
}
```

Note that I am returning JavaScript objects and not Gleam objects. Since I am unsure how both interact and whether I can "simply" return data and have
it "magically transformed" into Gleam object as with Erlang, I decided to return JS objects and decode them on the Gleam side, to make sure everything
was as I wanted them to be.

So, now that we have our parsers, let's see how well they perform !

## Benchmark Results

To compare the performance of all my parsers, I used a benchmarking library called [gleamy_bench](https://github.com/schurhammer/gleamy_bench). Since
I am no benchmarking expert, I don't know what it's worth, but I looked at the code and it seemed to do things well. It uses JS's `performance.now` and
Erlang's `os.pref_counter` to get high resolution timestamps and does some warmup cycles to increase result stability.

Next, I want to compare the performance for different document sizes, especially given the memory concerns raised over nibble. I expect that parsers that
have a larger memory usage such as my original parser perform okay for small XML documents but have their performance drop when the file size increase. I
selected 3 documents, each with different sizes. The first is a very trivial XML string consisting of 2 elements and a comment. The second is more of interest
for my use-case (RSS feeds, remember ?) since it is a RSS document I retrieved at [https://phys.org/rss-feed/](https://phys.org/rss-feed/). The third document
is a 20MB XML containing astronomical data from NASA I got from the [UW XML repository](https://aiweb.cs.washington.edu/research/projects/xmltk/xmldata/). It
has 476646 elements, a max depth of 8 and an average depth of 5.58, which seems to be a good test for our parsers. I tried using larger files, but quickly
abandonned the idea, since parsing them was taking way too long.

Finally, for those that may be interested, here is the configuration I benched my parsers on:

- Windows 11 24H2 - WSL with Ubuntu 22.04.5
- 12th gen Intel i7 core
- 32GB RAM

Now that that is done let's see the results !

### Erlang

```
benching set Small XML Nibble Xml Parser
benching set Small XML Splitter Xml Parser
benching set Small XML FFI Xml Parser
benching set RSS XML Nibble Xml Parser
benching set RSS XML Splitter Xml Parser
benching set RSS XML FFI Xml Parser

Input               Function                       IPS          Mean            SD           Min           Max           P99
Small XML           Nibble Xml Parser        1621.5860        0.6166        0.0598        0.5202        1.3497        0.8220
Small XML           Splitter Xml Parser     25711.5187        0.0388        0.0757        0.0134        2.5307        0.4296
Small XML           FFI Xml Parser          61161.1047        0.0163        0.0110        0.0110        0.6093        0.0522
RSS XML             Nibble Xml Parser           2.0644      484.3904        6.0017      477.0457      493.7076      493.7076
RSS XML             Splitter Xml Parser       302.1760        3.3093        0.7497        2.4544        5.9974        5.2471
RSS XML             FFI Xml Parser             74.8305       13.3635        0.5270       12.3682       16.3330       14.8474

Not benching Nibble Xml Parser on 20MB XML due to very long execution time and high memory usage.
benching set 20MB XML Splitter Xml Parser
benching set 20MB XML FFI Xml Parser

Input               Function                       IPS           Min           Max          Mean           P99
20MB XML            Splitter Xml Parser         0.1296     7535.8357     7831.2075     7715.1691     7831.2075
20MB XML            FFI Xml Parser              0.0528    18911.3905    18911.3905    18911.3905    18911.3905
```

### Javascript

```
benching set Small XML Nibble Xml Parser
benching set Small XML Splitter Xml Parser
benching set Small XML FFI Xml Parser
benching set RSS XML Nibble Xml Parser
benching set RSS XML Splitter Xml Parser
benching set RSS XML FFI Xml Parser

Input               Function                       IPS          Mean            SD           Min           Max           P99
Small XML           Nibble Xml Parser        2962.1175        0.3375        0.1985        0.2614        2.4809        1.5666
Small XML           Splitter Xml Parser     19289.0837        0.0518        0.0371        0.0400        2.2642        0.1230
Small XML           FFI Xml Parser            277.0603        3.6093        4.9692        1.9326       38.6214       33.3262
RSS XML             Nibble Xml Parser           6.2610      159.7168       37.1099      126.2318      243.1317      243.1317
RSS XML             Splitter Xml Parser       185.6392        5.3867        2.0135        3.8836       18.4995       14.0524
RSS XML             FFI Xml Parser             92.3344       10.8301        5.1439        7.6413       28.0219       25.9219

Not benching Nibble Xml Parser on 20MB XML due to very long execution time and high memory usage.
benching set 20MB XML Splitter Xml Parser
benching set 20MB XML FFI Xml Parser

Input               Function                       IPS           Min           Max          Mean           P99
20MB XML            Splitter Xml Parser         0.1380     7024.2156     7462.3651     7243.2438     7462.3651
20MB XML            FFI Xml Parser              0.0656    15236.0095    15236.0095    15236.0095    15236.0095
```

> Note: I had to run the benchmark with `NODE_OPTIONS="--max-old-space-size=8192"` to avoid out-of-memory errors on the 20MB XML input for the FFI parser.

### Analysis

The most obvious observation we can make is that the Nibble parser does not perform as well as the other two parsers, especially as the size of the input grows.
I am surprised by the performance of the splitter parser, especially compared to the FFI parser. I expected the FFI parser to be very optimized and as such to outperform the splitter parser.
However, the result shows that the splitter parser can be 2 to 4 times faster than the FFI parser and up to 146 times faster than the nibble parser.
It can still be slower than the FFI parser for small XML on the Erlang target and the high standard deviation is something I should investigate.

On the JavaScript target, the results are similar. I expected the FFI to perform worse than its Erlang counterpart because apparently jsdom isn't optimized, but it was
actually a bit faster for the RSS and 20MB documents. For the small document, the jsdom parser performs really badly, but I guess this can be due to overhead or some
initialization operations. The high standard deviation should again be something I should investigate.

## Conclusion

Overall, my splitter parser performed remarkably well and even outperformed the FFI references for larger documents ! On the other hand,
the nibble parser performed poorly, which was expected. Then, I'll use the splitter parser as the main parser for the gleaxml project from
now on.

Some improvments could be made though ! I should rethink how my helper function for splitter are done to optimize performance. I also
could use the supposedly faster [htmlparser2](https://www.npmjs.com/package/htmlparser2) library as a JS reference. I could use
a [SAX](https://en.wikipedia.org/wiki/Simple_API_for_XML) approach to parse large documents efficiently and compare that to
[xmerl_sax_parser](https://www.erlang.org/doc/apps/xmerl/xmerl_sax_parser.html) and htmlparser2. Finally, I should consider making this
project's parsers full-spec compliant ^^'

If I ever do one of these things, I will probably write about it here ! Until then, have a nice day ! :)

## Links

- [gleaxml benchmark code](https://github.com/Billuc/gleaxml/tree/benchmark)

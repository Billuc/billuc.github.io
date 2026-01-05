---
title: A custom dev server with file watching in Gleam using Deno
createdAt: '02/01/2026'
lastUpdatedAt: '05/01/2026'
---

After the work on gleaxml in [the previous blog post](./gleam-xml-parser-benchmark), I wanted to update my RSS reader website to use
the most performant parser and change a few things in the layout and style of the website. Since the website
is thought to be served by an AWS Lambda, it is 100% server-side rendered and it is done in a very basic
fashion: generate a [Lustre](https://hexdocs.pm/lustre/index.html) Element, convert it to a string using `to_string` or `to_document_string`,
wrap it in an object with the form expected by AWS and return it. This works really well in "production" but
the code I generated was only a handler that would be called by AWS Lambda's framework and not an actual server
that I could use for local development.

## Creating a dev server for AWS Lambdas

Here, the solution was quite simple: find a web server, write some code to convert the objects provided by
the server to object expected by the handler and vice-versa and connect my AWS handler at the end of it.
Since the handler runs on AWS's Javascript runtime, I needed a JS web server. Fortunately, I found one in [Gleam packages](https://packages.gleam.run)
called [glen](https://hexdocs.pm/glen/index.html). It is actually a wrapper around Deno's `serve` function
and the code is well-written, the API is nice and it supports WebSockets.

Here is what the logic looks like:

```gleam
fn run_dev_server() {
  node.console_log("Starting development server on http://localhost:1212")
  glen.serve(1212, glen_handler)
}

fn glen_handler(request: glen.Request) -> promise.Promise(glen.Response) {
  request_to_event(request)
  |> promise.await(rss_reader.handler)
  |> promise.map(response_to_glen)
}
```

> Note: This code is located in 'dev/rss_reader_dev.gleam'. I originally put it in 'src/rss_reader_dev.gleam',
> but there were some problems with dev-only dependencies which are not accessible to code located in 'src'.
> I couldn't find a doc on the 'dev' folder on the Gleam website, but found some information on the Gleam
> Discord server !

The `request_to_event` and `response_to_glen` functions are pretty simple.  
The first one takes a `glen.Request` object and encodes it into a `dynamic.Dynamic` object with the properties
expected by the handler. Most of them are provided in the `Request` object such as the path,
the query string, the HTTP method, but some were specific to the AWS context, such as the accountId or the
requestId, so I filled them with placeholder data.  
The second takes the `dynamic.Dynamic` object returned by the handler and decodes it to create a `glen.Response`.
We simply takes the status code, headers and body from the data and create a `Response` with it and that is
basically it !

## Making it rebuild automatically

This server functions really well but has a major flaw. When I started to change the CSS code, I had to stop the server,
rebuild the project, restart the server and reload the page to see the change applied. This became frustating quite
quickly so instead of forcing my way through and finishing the CSS code in a few hours, I decided to spend a whole day
setting up some code that would automatically rebuild the project and restart the server whenever I made a change to the
code. And it was worth it !

The principle is this: have a piece of code watch the folder containing the code (1) and whenever changes are made,
rebuild the project (2) and restart the server with the new code (3). Let's start with step 1 !

### Watching the code

Since glen was based on Deno, I have the whole power of Deno at my hands and Deno has a plethora of cool utilities !
Fortunately Deno exposes the function [Deno.watchFs](https://docs.deno.com/api/deno/~/Deno.watchFs) whose job is to,
well, watch the filesystem at a specified location. So I wrote a simple FFI code that would watch a provided path and call
a callback whenever a change is made to a file.

```javascript
export async function deno_watch(path, onEvent) {
	let watcher = Deno.watchFs(path);

	for await (const event of watcher) {
		await onEvent(event);
	}
}
```

Here onEvent would be something like this:

```gleam
fn on_event(ctx: DevContext, _event) -> promise.Promise(DevContext) {
  node.console_log("Changes detected, rebuilding...")

  rebuild()
  |> promise.await(fn(_) {
    node.console_log("Rebuild succeeded ! Restarting server...")
    restart_server(ctx)
  })
}
```

`rebuild` was easy to implement: use [shellout](https://hexdocs.pm/shellout/) or [Deno.Command](https://docs.deno.com/api/deno/~/Deno.Command)
to spawn a process running `gleam build` and wait for it to complete. I ended up using `Deno.Command` to avoid
having one more dependency.

`restart_server` however gave me a lot more headaches.

### Restarting the server

At first, I used a naive approach. I stored a reference to the [server](https://docs.deno.com/api/deno/~/Deno.HttpServer) in the context,
closed it and created a new one after the build completed. As you can guess, this approach did not work because it didn't use
the freshly built code. The reason why is because we didn't restart the process, so the new code isn't loaded in memory, only the old code.

Alright, so I have to create a new **_process_** and not a new **_server_** when I call `restart_server`. Fortunately, I have a simple way
to start a dev server **_process_** via `gleam dev run`. So I wrote code that looked like this:

```gleam
fn restart_server(ctx: DevContext) {
  // kill_process is a FFI function calling process.kill("SIGTERM")
  kill_process(ctx.process)
  let process = deno_spawn(["gleam", "dev", "run"])
  DevContext(..ctx, process:)
}
```

However, the new server could not start and threw an error saying port 1212 was not available.
But I just killed the process that used port 1212 !!! Well, not really ! `process.kill` only sends the signal "SIGTERM" to the process
which will handle it as it wants. By default, it will stop the process but this is not necessarily the case. For our process, this is
what will happen but we have to explicitely wait for the process to be stopped. Fortunately, by awaiting `process.status`, we make sure
that the process is stopped before exiting the `kill_process` function.

Now that this is taken care of, we make use of `promise.await` to await `kill_process` before spawning the new one and
we should be good, right ? Right ?! Not quite ! Now `kill_process` runs indefinitely ! It took some time to understand what
was going on, but `ps -aux` gave me the answer:

```
lbillaud    3086  2.0  0.1 910728 24092 pts/5    Sl+  10:48   0:00 gleam dev run watch
lbillaud    3100  2.6  0.4 35440224 78504 pts/5  Sl+  10:48   0:00 deno run --allow-all /home/lbillaud/rss-reader/build/dev/javascript/rss_reader/gleam.main.mjs run watch
lbillaud    3115  1.3  0.1 909692 21264 pts/5    Sl+  10:48   0:00 /home/linuxbrew/.linuxbrew/bin/gleam dev run
lbillaud    3130  1.3  0.4 35372212 73416 pts/5  Sl+  10:48   0:00 deno run --allow-all /home/lbillaud/rss-reader/build/dev/javascript/rss_reader/gleam.main.mjs run
lbillaud    3145  0.0  0.0   7756  3516 pts/3    R+   10:48   0:00 ps -aux
```

Here you can see the 5 last processes launched on my machine. 4 of them correspond to my dev server. Wait, 4 !?!
The gleam command itself spawns a new process to launch the runtime that will execute the code (here deno).
So when we sent a "SIGTERM" to our process, it was sent to process n°3115 (gleam run dev) while the one we want
to receive the signal is the one running the server so process n°3130 (deno run). And it appears, sending a signal
to the gleam command does nothing. It is not forwarded, it does not kill the `gleam` process, nothing !

To solve this issue, I decided to launch the `deno run` command myself. Now only one process is spawned and when
I send it a "SIGTERM" it does properly kill the process. Victory ? Almost !

### Last hurdles

One problem with Javascript is that occasionally, functions can throw errors without you knowing it in advance
(except if they are well-documented). So every FFI function had to be wrapped in try-catch blocks and now return
a Result. Functions like `kill_process` that used to return `Nil` now have to return `Promise(Result(Nil, String))`,
but I still prefer that to not knowing exactly what will happen.

We are almost there ! The last hurdle concerns the watcher and its events. You see, many events can be sent
for a single change. For instance, a delete and a create event will be sent if you move a file. Or if you
save multiple files at once (":wa"), all write events will be sent at once. Since we don't care about each
individual change, I followed the [Deno doc](https://docs.deno.com/examples/watching_files/) and used a
`debounce`d function. I also added a context object to have access to the server process in my callback
(in order to kill the process).

```javascript
import { debounce } from 'jsr:@std/async/debounce';

export async function deno_watch(path, initialCtx, onEvent) {
	let watcher = Deno.watchFs(path);
	let context = initialCtx;

	const onEventDebounced = debounce(onEvent, 500);

	for await (const event of watcher) {
		context = await onEventDebounced(context, event);
	}
}
```

Now, here is the problem: context always ended up being undefined and the process crashed. It turns out that
[debounce](https://jsr.io/@std/async@1.0.16/doc/~/debounce) expects a function returning `void` and returns a
function returning `void`. Thus, all the logic has to be taken out of the loop and put in the function passed to `debounce`.

```javascript
export async function deno_watch(path, initialCtx, onEvent) {
	let watcher = Deno.watchFs(path);
	let context = initialCtx;

	const onEventDebounced = debounce(async (ev) => {
		context = await onEvent(context, ev);
	}, 500);

	for await (const event of watcher) {
		await onEventDebounced(event);
	}
}
```

With this version, the server restart system works properly ! The final step is to reload the page automatically.

## Reloading the page automatically

Since my webpage is very simple and does not have state or whatnots, I can simply reload it to get access to the
modified content. I needed a way for the client to know that the server has restarted. I thought about doing
WebSockets (which glen support) or Server-Sent Events, but those 2 solutions require a TCP connection between
the client and the server and I did not know if that would be possible since we have to **restart** the server.

I ended up using a super simple solution suggested by [Le Chat](https://chat.mistral.ai/chat): polling.
I can simply send HTTP requests at a regular interval to the server and check if it always answers with the
same response. If the response is different, it means that the server has restarted. To implement this system,
I am sending the timestamp at which the server started when we receive a request on `/last-updated`. Finally,
I make the dev server inject a small script doing the polling in the HTML page and voilà !!!

```javascript
let serverStartTime = undefined;

setInterval(() => {
	fetch('/last-updated')
		.then((response) => response.text())
		.then((data) => {
			if (!serverStartTime) {
				serverStartTime = parseFloat(data);
			} else {
				const newStartTime = parseFloat(data);
				if (newStartTime !== serverStartTime) {
					console.log('Changes detected on server. Reloading page...');
					window.location.reload();
				}
			}
		});
}, 1000);
```

## Conclusion

I ended up spending 2 extra days making the dev server work and writing this post compared to if I just restarted
the server manually. Was it worth it ? I would say yes ! I did learn some stuff about Deno, processes and signals.
Also now auto-reloading servers do not seem so magical to me now and more like something I had some understanding
about. Finally, my mind is not at ease knowing that I can write code and see the resulting effect the next second
and that I will never have to manually restart the server or reload the page ever again !

I may publish the code as a library if you ask me to or you can steal it from [this repo](https://github.com/Billuc/rss-reader) ;)

Happy coding !

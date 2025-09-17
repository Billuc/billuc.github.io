<script lang="ts">
	import type { BlogPostMetadata } from '$lib/model/blogpost';

	// Took inspiration from this post
	
	interface Props {
		// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
		data: BlogPostMetadata & { content: any };
	}

	let { data }: Props = $props();
</script>

<div class="py-16 text-center w-full">
	<article class="flex flex-col items-center">
		<span class="text-4xl font-black text-slate-900">{data.title}</span>
		<div class="my-4 border-b-2 border-red-600 border-opacity-30 w-40"></div>

		<p class="text-sm italic mb-8">
			Published: {data.createdAt}, last updated: {data.lastUpdatedAt ?? data.createdAt}
		</p>

		<div
			class="px-4 md:px-10 lg:px-20 mx-auto self-stretch text-justify prose md:prose-lg max-w-full"
		>
			<data.content />
		</div>
	</article>
</div>

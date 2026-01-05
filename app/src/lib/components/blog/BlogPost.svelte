<script lang="ts">
	import type { FullBlogPost } from '$lib/model/blogpost';

	// Took inspiration from this post

	interface Props {
		// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
		data: FullBlogPost;
	}

	let { data }: Props = $props();
</script>

<article class="py-4 text-center w-full">
	<span class="text-4xl font-black text-slate-900">{data.metadata.title}</span>
	<div class="my-4 mx-auto border-b-2 border-red-600 border-opacity-30 w-40"></div>

	<p class="text-sm italic mb-8">
		Published: {data.metadata.createdAt}, last updated: {data.metadata.lastUpdatedAt ??
			data.metadata.createdAt}
	</p>

	<div
		class={[
			'px-4 max-w-full',
			'text-justify',
			'prose md:prose-lg md:prose-li:my-1',
			'prose-code:text-red-700 prose-code:font-normal',
			'prose-blockquote:font-normal prose-blockquote:bg-slate-200 prose-blockquote:pr-4 prose-blockquote:border-l-slate-500'
		]}
	>
		<data.content />
	</div>
</article>

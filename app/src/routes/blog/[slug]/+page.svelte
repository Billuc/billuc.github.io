<script lang="ts">
	import BlogPost from '$lib/components/blog/BlogPost.svelte';
	import type { FullBlogPost } from '$lib/model/blogpost';

	// Took inspiration from this post

	interface Props {
		// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
		data: FullBlogPost;
	}

	let { data }: Props = $props();
</script>

<BlogPost {data} />

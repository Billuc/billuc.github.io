<script lang="ts">
	import BlogPost from '$lib/components/blog/BlogPost.svelte';
	import type { BlogPostMetadata } from '$lib/model/blogpost';

	// Took inspiration from this post
	
	interface Props {
		// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
		data: BlogPostMetadata & { content: any };
	}

	let { data }: Props = $props();
</script>

<BlogPost {data} />

<script lang="ts">
	import BlogPost from '$lib/components/blog/BlogPost.svelte';
	import type { BlogPostMetadata } from '$lib/model/blogpost';

	// Took inspiration from this post
	// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
	export let data: BlogPostMetadata & { content: any };
</script>

<BlogPost {data} />

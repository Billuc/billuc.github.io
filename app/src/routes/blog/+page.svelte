<script lang="ts">
	import Blog from '$lib/components/blog/Blog.svelte';
	import type { BlogPost } from '$lib/model/blogpost';

	export let data: { posts: (BlogPost & { path: string })[] };
</script>

<Blog posts={data.posts} />

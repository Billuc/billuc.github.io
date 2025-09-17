<script lang="ts">
	import Blog from '$lib/components/blog/Blog.svelte';
	import type { BlogPost } from '$lib/model/blogpost';

	interface Props {
		data: { posts: (BlogPost & { path: string })[] };
	}

	let { data }: Props = $props();
</script>

<Blog posts={data.posts} />

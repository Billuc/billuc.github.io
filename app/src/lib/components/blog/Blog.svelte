<script lang="ts">
	import type { BlogPost } from '$lib/model/blogpost';

	interface Props {
		posts: BlogPost[];
	}

	let { posts }: Props = $props();
</script>

<div class="py-4 text-center w-full">
	<div class="text-4xl font-black text-slate-900">
		Blog
		<a
			href="./blog/rss.xml"
			class="inline-block ml-1"
			data-sveltekit-preload-data="false"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				src="https://www.rssboard.org/images/rss-icon.png"
				alt="Link to RSS feed"
				width="24"
				height="24"
			/>
		</a>
	</div>
	<div class="my-4 mx-auto border-b-2 border-red-600 border-opacity-30 w-40"></div>

	<div class="px-5 w-full">
		{#each posts as post}
			<a
				href={post.path}
				class={[
					'text-left bg-slate-200 px-4 py-2 rounded-sm cursor-pointer',
					'w-full md:w-2/3 min-w-2xs max-w-lg',
					'block mb-4 mx-auto'
				]}
			>
				<span class="font-bold">{post.metadata.title}</span><br />
				<span class="text-sm italic">
					Published: {post.metadata.createdAt}, last updated: {post.metadata.lastUpdatedAt ??
						post.metadata.createdAt}
				</span>
			</a>
		{/each}
	</div>
</div>

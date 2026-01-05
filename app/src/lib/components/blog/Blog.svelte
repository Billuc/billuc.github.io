<script lang="ts">
	import type { BlogPost } from '$lib/model/blogpost';

	interface Props {
		posts: BlogPost[];
	}

	let { posts }: Props = $props();
</script>

<div class="py-16 text-center w-full">
	<div class="flex flex-col items-center">
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
					src="https://www.rssboard.org/images/rss-feed-icon-96-by-96.png"
					alt="Link to RSS feed"
					width="24"
					height="24"
				/>
			</a>
		</div>
		<div class="my-4 border-b-2 border-red-600 border-opacity-30 w-40"></div>

		<div class="flex flex-col gap-4 px-5 self-stretch items-center">
			{#each posts as post}
				<a
					href={post.path}
					class="text-left bg-slate-200 px-4 py-2 rounded-sm cursor-pointer w-full md:w-2/3 min-w-2xs max-w-lg"
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
</div>

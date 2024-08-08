<script lang="ts">
	import type { BlogPost } from '$lib/model/blogpost';

	export let posts: (BlogPost & { path: string })[];

	$: postsByCreatedDate = posts.sort(
		(a, b) => Date.parse(a.metadata.createdAt) - Date.parse(b.metadata.createdAt)
	);
</script>

<div class="py-16 text-center w-full">
	<div class="flex flex-col items-center">
		<span class="text-4xl font-black text-slate-900">Blog</span>
		<div class="my-4 border-b-2 border-red-600 border-opacity-30 w-40" />

		<div class="flex flex-col gap-4 px-5 self-stretch items-center">
			{#each postsByCreatedDate as post}
				<a
					href={post.path}
					class="text-left bg-slate-200 px-4 py-2 rounded-sm cursor-pointer w-full md:w-2/3"
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

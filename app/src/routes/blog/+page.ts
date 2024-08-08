import type { BlogPost } from '$lib/model/blogpost';

export async function load({}): Promise<{ posts: (BlogPost & { path: string })[] }> {
	const allPostFiles = import.meta.glob<boolean, string, BlogPost>('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = '.' + path.slice(11, -3);

			return {
				metadata: metadata,
				path: postPath
			};
		})
	);

	return { posts: allPosts };
}

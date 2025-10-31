import type { BlogPost } from '$lib/model/blogpost';

export async function load({ }): Promise<{ posts: BlogPost[] }> {
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

	const sortedPosts = allPosts.sort((a, b) => {
		const dateA = standardizeDate(a.metadata.createdAt);
		const dateB = standardizeDate(b.metadata.createdAt);

		return Date.parse(dateB) - Date.parse(dateA);
	});

	return { posts: sortedPosts };
}

function standardizeDate(dateString: string): string {
	const day = dateString.slice(0, 2);
	const month = dateString.slice(3, 5);
	const year = dateString.slice(6, 10);

	return `${year}-${month}-${day}`;
}

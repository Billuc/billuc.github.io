// Took inspiration from this post
// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

import type { BlogPostMetadata } from '$lib/model/blogpost';

export async function load({ params }): Promise<BlogPostMetadata & { content: any }> {
	try {
		const post = await import(`../${params.slug}.md`);
		const { title, createdAt, lastUpdatedAt } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			createdAt,
			lastUpdatedAt
		};
	} catch {
		throw new Error('Not Found');
	}
}

// Took inspiration from this post
// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

import type { BlogPostMetadata } from '$lib/model/blogpost';
import { error } from '@sveltejs/kit';

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
		error(404, {
        			message: 'Not found'
        		});
	}
}

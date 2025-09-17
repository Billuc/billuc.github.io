// Took inspiration from this post
// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

import type { FullBlogPost } from '$lib/model/blogpost';
import { error } from '@sveltejs/kit';

export async function load({ params }: { params: { slug: string } }): Promise<FullBlogPost> {
	try {
		const post = await import(`../${params.slug}.md`);
		const content = post.default;

		return {
			content,
			metadata: post.metadata
		};
	} catch {
		error(404, {
			message: 'Not found'
		});
	}
}

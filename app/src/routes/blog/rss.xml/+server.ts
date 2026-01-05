import type { BlogPost } from '$lib/model/blogpost';
import type { RequestHandler } from '@sveltejs/kit';
import { asset, resolve } from '$app/paths';
import RSS from 'rss';

export const prerender = true;

export const GET: RequestHandler = async ({ }) => {
  const allPostFiles = import.meta.glob<boolean, string, BlogPost>('/src/routes/blog/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = resolve('/blog/[slug]', { slug: path.slice(17, -3) });

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

  const feed = new RSS({
    title: 'Luc Billaud - Blog',
    feed_url: resolve('/blog/rss.xml'),
    site_url: resolve('/blog'),
    image_url: asset('/luc.webp')
  });

  for (const post of sortedPosts) {
    feed.item({
      title: post.metadata.title,
      description: '',
      url: post.path,
      date: post.metadata.createdAt
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/rss+xml'
    }
  });
};

function standardizeDate(dateString: string): string {
  const day = dateString.slice(0, 2);
  const month = dateString.slice(3, 5);
  const year = dateString.slice(6, 10);

  return `${year}-${month}-${day}`;
}

import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'writing'>;

/** Published articles, newest first. Drafts only show up in dev. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Dates are stored as UTC midnight, so format in UTC to avoid showing the day before. */
export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export const readingMinutes = (body = '') => Math.max(1, Math.round(body.trim().split(/\s+/).length / 220));

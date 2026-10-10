import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Articles live in src/content/writing as Markdown files; the filename becomes the URL
 * (my-article.md -> /writing/my-article/). See PERSONA.md, "Writing articles".
 */
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    // One or two sentences. Shown as the lede under the title and used for search and social previews.
    description: z.string().max(220),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // Adds a name filter and dividers between `##` sections. Meant for long, one-section-per-person articles.
    filterable: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    // Drafts are visible in `npm run dev` and left out of the production build.
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };

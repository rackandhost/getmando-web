import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const releases = defineCollection({
  loader: glob({ base: './src/content/releases/en', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    version: z.string().regex(/^v\d+\.\d+\.\d+$/),
    slug: z.string().regex(/^v\d+\.\d+\.\d+$/),
    publishedAt: z.iso.date(),
    githubReleaseUrl: z.url().regex(/^https:\/\/github\.com\/rackandhost\/getmando\/releases\/tag\//),
  }),
});

export const collections = { releases };

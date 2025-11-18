import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['ChatGPT', 'Claude', 'Image Generation', 'Research', 'Other']),
    tags: z.array(z.string()).optional(),
    locale: z.enum(['en', 'ja']),
  }),
});

export const collections = {
  articles,
};

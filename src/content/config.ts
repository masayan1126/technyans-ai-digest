import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['ChatGPT', 'Claude', 'Gemini', 'Image Generation', 'Research', 'Other']),
    tags: z.array(z.string()).optional(),
    locale: z.enum(['en', 'ja']),
    technyanComment: z.string().optional(), // テクにゃんのコメント
  }),
});

export const collections = {
  articles,
};

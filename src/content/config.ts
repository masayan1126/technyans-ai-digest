import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['ChatGPT', 'Claude', 'Gemini', 'Grok', 'Image Generation', 'Research', 'Other']),
    tags: z.array(z.string()).optional(),
    locale: z.enum(['en', 'ja']),
    technyanComment: z.string().optional(), // テクにゃんのコメント
  }),
});

const aiTimeline = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['Model Release', 'Technical Breakthrough', 'Investment', 'Social Impact', 'Policy & Regulation']),
    impactLevel: z.enum(['high', 'medium', 'low']),
    tags: z.array(z.string()).optional(),
    relatedCompanies: z.array(z.string()).optional(), // 関連企業（OpenAI, Google, Anthropic等）
    locale: z.enum(['en', 'ja']),
    technyanComment: z.string().optional(), // テクにゃんのコメント
  }),
});

export const collections = {
  articles,
  aiTimeline,
};

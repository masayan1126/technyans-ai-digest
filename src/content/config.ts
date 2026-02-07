import { defineCollection, z } from 'astro:content';

// Common tags used across articles
const commonTags = z.enum([
  // Companies
  'OpenAI', 'Google', 'Anthropic', 'Microsoft', 'Microsoft Azure', 'Nvidia', 'NVIDIA', 'Meta', 'DeepSeek', 'Amazon', 'DeepMind', 'xAI', 'SpaceX', 'Adobe', 'Linux Foundation', 'Block', 'Disney', 'AMD', 'TIME', 'Apple',
  // Models & Products
  'ChatGPT', 'Claude', 'Claude Code', 'Claude Desktop', 'GPT', 'GPT-4', 'GPT-4o', 'GPT-5', 'GPT-5.1', 'GPT-5.1 Auto', 'GPT-5.2',
  'Gemini', 'Gemini 3', 'Grok', 'LLM', 'LLaMA', 'Sora', 'o3', 'R1', 'AlphaFold', 'Haiku', 'Codex', 'Deep Research', 'GPT-5.3',
  // Technical areas - AI Core
  'AI', 'AI Safety', 'AI安全性', 'Multimodal', 'マルチモーダル', 'Reasoning AI', '推論AI', 'Reasoning', '推論',
  'Computer Use', 'Automation', '自動化', 'RPA', 'Agent AI', 'エージェントAI', 'AI Agents', 'AIエージェント',
  'Agentic AI', 'Multi-Agent', 'マルチエージェント',
  'Coding', 'コーディング', 'AI Coding', 'AIコーディング', 'Open Source', 'オープンソース', 'MoE',
  // Technical areas - Advanced
  'Extended Thinking', '拡張思考', 'Autonomous AI', '自律AI', 'Chain-of-Thought',
  'Deep Learning', 'ディープラーニング', 'Fine-tuning', 'ファインチューニング',
  'Context Window', 'コンテキストウィンドウ', 'Long-text Processing', '長文処理',
  'Real-time Processing', 'リアルタイム処理',
  'Machine Learning', '機械学習', 'Natural Language Processing', '自然言語処理',
  'Large Language Models', '大規模言語モデル',
  // Content Generation
  'Video Generation', '動画生成', 'Voice AI', '音声AI', 'Generative AI', 'ジェネレーティブAI', '生成AI',
  'Creative Tools', 'クリエイティブツール', 'Creative AI', '創造的AI',
  'Image Generation', '画像生成', 'Text-to-Image', 'AI Art', 'AI アート',
  // Business/Enterprise
  'Enterprise AI', 'エンタープライズAI', 'AI Investment', 'Investment', 'AI投資', '投資戦略', 'Investment Strategy',
  'Infrastructure', 'インフラ', 'Data Centers', 'データセンター',
  'Cost Efficiency', 'コスト効率', 'Low Cost', '低コスト',
  'Cloud Computing', 'クラウドコンピューティング',
  'Startup', 'スタートアップ', 'Industry Analysis', '業界分析', 'Benchmark', 'ベンチマーク',
  // Development Tools
  'Developer Tools', '開発ツール', '開発者ツール', 'Coding Assistant', 'コーディングアシスタント',
  'Code Editor', 'コードエディタ', 'IDE', 'Cursor', 'GitHub Copilot',
  'Collaboration', 'コラボレーション', 'Composer',
  'MCP', 'FastMCP', 'Ecosystem', 'エコシステム',
  // Policy/Social/Business
  'Regulation', '規制', 'Governance', 'ガバナンス',
  'International Cooperation', '国際協力', 'Risk Management', 'リスク管理',
  'Bletchley Declaration', 'Bletchley宣言',
  'Management Crisis', '経営危機',
  'Social Features', 'ソーシャル機能', 'Group Chat', 'グループチャット',
  // Market & Competition
  'AI Competition', 'AI競争', 'AI Democratization', 'AI民主化', 'AI Revolution', 'AI革命',
  // Regional
  'Chinese AI', '中国AI', 'China', '中国',
  // People
  'Sam Altman', 'Geoffrey Hinton', 'Demis Hassabis', 'Jeff Bezos', 'Jensen Huang', 'Dario Amodei', 'Mark Zuckerberg', 'Lisa Su', 'Bob Iger', 'Elon Musk',
  // Scientific
  'Nobel Prize', 'ノーベル賞', 'Mathematics', '数学',
  // Specialized Applications
  'Cybersecurity', 'サイバーセキュリティ', 'Hacking', 'ハッキング',
  'Physical AI', '物理AI', 'Mobile Development', 'モバイル開発',
  'Weather Prediction', '天気予報', 'Energy Trading', 'エネルギー取引',
  'Government DX', '行政DX', 'Digital Agency', 'デジタル庁',
  'Subsidy Search', '補助金検索', 'J-Grants', 'Jグランツ',
  'Emotional Intelligence', '感情的知性',
  // Hardware/Products
  'Nano Banana Pro', 'Antigravity', 'Project Prometheus',
  // Programming Languages & Runtimes
  'JavaScript', 'TypeScript', 'Bun',
  // Business Events
  'Acquisition', '買収', 'Licensing', 'Partnership', 'Person of the Year', 'Entertainment',
  // General
  'テキスト生成'
]);

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['ChatGPT', 'Claude', 'Gemini', 'Grok', 'Image Generation', 'Research', 'Other']),
    tags: z.array(commonTags).optional(),
    locale: z.enum(['en', 'ja']),
    technyanComment: z.string().optional(), // テクにゃん.のコメント
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
    tags: z.array(commonTags).optional(),
    relatedCompanies: z.array(z.string()).optional(), // 関連企業（OpenAI, Google, Anthropic等）
    locale: z.enum(['en', 'ja']),
    technyanComment: z.string().optional(), // テクにゃん.のコメント
  }),
});

export const collections = {
  articles,
  aiTimeline,
};

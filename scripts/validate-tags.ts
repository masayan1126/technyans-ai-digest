#!/usr/bin/env tsx

/**
 * タグ検証スクリプト
 *
 * すべての記事のタグがスキーマで定義されたenumと一致するかチェックします。
 *
 * 使用方法:
 *   npm run validate-tags
 *
 * または:
 *   tsx scripts/validate-tags.ts
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { parse as parseYaml } from 'yaml';

// src/content/config.ts から許可されたタグのリストをコピー
const ALLOWED_TAGS = [
  // Companies
  'OpenAI', 'Google', 'Anthropic', 'Microsoft', 'Microsoft Azure', 'Nvidia', 'NVIDIA', 'Meta', 'DeepSeek', 'Amazon', 'DeepMind', 'xAI', 'Adobe', 'Linux Foundation', 'Block',
  // Models & Products
  'ChatGPT', 'Claude', 'Claude Code', 'Claude Desktop', 'GPT', 'GPT-4', 'GPT-4o', 'GPT-5', 'GPT-5.1', 'GPT-5.1 Auto', 'GPT-5.2',
  'Gemini', 'Gemini 3', 'Grok', 'LLM', 'LLaMA', 'Sora', 'o3', 'R1', 'AlphaFold', 'Haiku', 'Codex', 'Deep Research',
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
  'Sam Altman', 'Geoffrey Hinton', 'Demis Hassabis', 'Jeff Bezos',
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
  'Acquisition', '買収',
  // General
  'テキスト生成'
];

interface ValidationError {
  file: string;
  invalidTags: string[];
}

function extractFrontmatter(content: string): any {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    return null;
  }

  try {
    return parseYaml(frontmatterMatch[1]);
  } catch (error) {
    console.error('Failed to parse frontmatter:', error);
    return null;
  }
}

function getAllMarkdownFiles(dir: string): string[] {
  const files: string[] = [];

  const items = readdirSync(dir);
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function validateTags(): ValidationError[] {
  const articlesDir = join(process.cwd(), 'src/content/articles');
  const timelineDir = join(process.cwd(), 'src/content/aiTimeline');

  const articleFiles = getAllMarkdownFiles(articlesDir);
  const timelineFiles = getAllMarkdownFiles(timelineDir);
  const allFiles = [...articleFiles, ...timelineFiles];

  const errors: ValidationError[] = [];

  for (const file of allFiles) {
    const content = readFileSync(file, 'utf-8');
    const frontmatter = extractFrontmatter(content);

    if (!frontmatter || !frontmatter.tags) {
      continue;
    }

    const tags = frontmatter.tags;
    if (!Array.isArray(tags)) {
      continue;
    }

    const invalidTags = tags.filter(tag => !ALLOWED_TAGS.includes(tag));

    if (invalidTags.length > 0) {
      errors.push({
        file: file.replace(process.cwd() + '/', ''),
        invalidTags
      });
    }
  }

  return errors;
}

function suggestAlternativeTags(invalidTag: string): string[] {
  const suggestions: string[] = [];
  const lowerInvalidTag = invalidTag.toLowerCase();

  for (const allowedTag of ALLOWED_TAGS) {
    const lowerAllowedTag = allowedTag.toLowerCase();

    // 部分一致を探す
    if (lowerAllowedTag.includes(lowerInvalidTag) || lowerInvalidTag.includes(lowerAllowedTag)) {
      suggestions.push(allowedTag);
    }
  }

  return suggestions.slice(0, 5); // 最大5つまで
}

// メイン実行
const errors = validateTags();

if (errors.length === 0) {
  console.log('✅ All tags are valid!');
  process.exit(0);
} else {
  console.error('❌ Found invalid tags:\n');

  for (const error of errors) {
    console.error(`📄 ${error.file}`);
    for (const invalidTag of error.invalidTags) {
      console.error(`   ❌ "${invalidTag}"`);

      const suggestions = suggestAlternativeTags(invalidTag);
      if (suggestions.length > 0) {
        console.error(`      💡 Did you mean: ${suggestions.join(', ')}?`);
      }
    }
    console.error('');
  }

  console.error('📚 See TAGS.md for the complete list of allowed tags.');
  console.error('🔧 To add new tags, edit src/content/config.ts');

  process.exit(1);
}

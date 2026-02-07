export interface BenchmarkScore {
  value: string;
  verified: boolean;
  source?: string;
  note?: string;
}

export interface BenchmarkCategory {
  id: string;
  name: {
    en: string;
    ja: string;
  };
  description: {
    en: string;
    ja: string;
  };
}

export interface Benchmark {
  id: string;
  name: string;
  category: string;
  description: {
    en: string;
    ja: string;
  };
  unit?: string;
  higherIsBetter: boolean;
}

export interface ModelScore {
  modelId: string;
  benchmarkId: string;
  score: BenchmarkScore;
}

export interface AIModel {
  id: string;
  name: string;
  vendor: string;
  releaseDate: string;
  version: string;
}

// AI Models
export const aiModels: AIModel[] = [
  {
    id: 'gemini-3-pro',
    name: 'Gemini 3 Pro',
    vendor: 'Google DeepMind',
    releaseDate: '2025-11-18',
    version: '3.0',
  },
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    vendor: 'Google DeepMind',
    releaseDate: '2025-03-25',
    version: '2.5',
  },
  {
    id: 'claude-sonnet-4.5',
    name: 'Claude Sonnet 4.5',
    vendor: 'Anthropic',
    releaseDate: '2025-09-29',
    version: '4.5',
  },
  {
    id: 'gpt-5.2',
    name: 'GPT-5.2',
    vendor: 'OpenAI',
    releaseDate: '2025-12-11',
    version: '5.2',
  },
  {
    id: 'claude-opus-4.6',
    name: 'Claude Opus 4.6',
    vendor: 'Anthropic',
    releaseDate: '2026-02-05',
    version: '4.6',
  },
  {
    id: 'gpt-5.3-codex',
    name: 'GPT-5.3-Codex',
    vendor: 'OpenAI',
    releaseDate: '2026-02-05',
    version: '5.3',
  },
];

// Benchmark Categories
export const benchmarkCategories: BenchmarkCategory[] = [
  {
    id: 'reasoning',
    name: {
      en: 'Reasoning & Knowledge',
      ja: '推論・知識',
    },
    description: {
      en: 'Tests for complex reasoning, academic knowledge, and problem-solving',
      ja: '複雑な推論、学術知識、問題解決能力をテスト',
    },
  },
  {
    id: 'multimodal',
    name: {
      en: 'Multimodal Understanding',
      ja: 'マルチモーダル理解',
    },
    description: {
      en: 'Tests for understanding images, videos, charts, and documents',
      ja: '画像、動画、チャート、ドキュメントの理解力をテスト',
    },
  },
  {
    id: 'coding',
    name: {
      en: 'Coding & Development',
      ja: 'コーディング・開発',
    },
    description: {
      en: 'Tests for programming, software engineering, and terminal operations',
      ja: 'プログラミング、ソフトウェアエンジニアリング、ターミナル操作をテスト',
    },
  },
  {
    id: 'agent',
    name: {
      en: 'Agent & Tool Use',
      ja: 'エージェント・ツール使用',
    },
    description: {
      en: 'Tests for using tools, performing complex tasks, and agent behavior',
      ja: 'ツール使用、複雑なタスク実行、エージェント動作をテスト',
    },
  },
  {
    id: 'knowledge',
    name: {
      en: 'Knowledge & Context',
      ja: '知識・コンテキスト',
    },
    description: {
      en: 'Tests for factual knowledge, multilingual abilities, and long-context understanding',
      ja: '事実知識、多言語能力、長文コンテキスト理解をテスト',
    },
  },
];

// Benchmarks
export const benchmarks: Benchmark[] = [
  {
    id: 'humanity-last-exam',
    name: "Humanity's Last Exam",
    category: 'reasoning',
    description: {
      en: 'Tests advanced reasoning across diverse academic domains',
      ja: '多様な学術分野にわたる高度な推論能力をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'arc-agi-2',
    name: 'ARC-AGI-2',
    category: 'reasoning',
    description: {
      en: 'Tests abstract reasoning and pattern recognition',
      ja: '抽象的推論とパターン認識能力をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'gpqa-diamond',
    name: 'GPQA Diamond',
    category: 'reasoning',
    description: {
      en: 'Tests graduate-level scientific knowledge across multiple domains',
      ja: '複数ドメインにわたる大学院レベルの科学知識をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'mmmu-pro',
    name: 'MMMU-Pro',
    category: 'multimodal',
    description: {
      en: 'Tests multimodal understanding across multiple domains',
      ja: '複数ドメインにわたるマルチモーダル理解力をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'screenspot-pro',
    name: 'ScreenSpot-Pro',
    category: 'multimodal',
    description: {
      en: 'Tests understanding of user interface elements and layouts',
      ja: 'ユーザーインターフェース要素とレイアウトの理解力をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'charxiv-reasoning',
    name: 'CharXiv Reasoning',
    category: 'multimodal',
    description: {
      en: 'Tests chart interpretation and information synthesis',
      ja: 'チャート解釈と情報統合能力をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'omnidocbench',
    name: 'OmniDocBench 1.5',
    category: 'multimodal',
    description: {
      en: 'Tests OCR and document understanding (lower score is better)',
      ja: 'OCRとドキュメント理解力をテスト（低いほど良い）',
    },
    higherIsBetter: false,
  },
  {
    id: 'video-mmmu',
    name: 'Video-MMMU',
    category: 'multimodal',
    description: {
      en: 'Tests video understanding and temporal reasoning',
      ja: '動画理解と時間的推論能力をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'livecodebench-pro',
    name: 'LiveCodeBench Pro',
    category: 'coding',
    description: {
      en: 'Tests competitive programming skills (Elo rating)',
      ja: '競技プログラミング能力をテスト（Eloレーティング）',
    },
    unit: 'Elo',
    higherIsBetter: true,
  },
  {
    id: 'terminal-bench',
    name: 'Terminal-Bench 2.0',
    category: 'coding',
    description: {
      en: 'Tests command-line interface and terminal operations',
      ja: 'コマンドラインインターフェースとターミナル操作をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'swe-bench',
    name: 'SWE-Bench Verified',
    category: 'coding',
    description: {
      en: 'Tests real-world software engineering tasks',
      ja: '実世界のソフトウェアエンジニアリングタスクをテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'tau2-bench',
    name: 'τ2-bench',
    category: 'agent',
    description: {
      en: 'Tests agent tool usage in various domains',
      ja: '様々なドメインでのエージェントツール使用をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'vending-bench',
    name: 'Vending-Bench 2',
    category: 'agent',
    description: {
      en: 'Tests long-term agent task performance (dollar value earned)',
      ja: '長期エージェントタスクのパフォーマンスをテスト（獲得金額）',
    },
    unit: '$',
    higherIsBetter: true,
  },
  {
    id: 'gdpval-aa',
    name: 'GDPval-AA',
    category: 'agent',
    description: {
      en: 'Tests real-world knowledge work tasks across 44 occupations and 9 GDP sectors (Elo rating)',
      ja: '44職種・9つのGDPセクターにわたる実世界の知識労働タスクをテスト（Eloレーティング）',
    },
    unit: 'Elo',
    higherIsBetter: true,
  },
  {
    id: 'facts-benchmark',
    name: 'FACTS Benchmark Suite',
    category: 'knowledge',
    description: {
      en: 'Tests complex search and reasoning abilities',
      ja: '複合的な検索と推論能力をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'simpleqa',
    name: 'SimpleQA Verified',
    category: 'knowledge',
    description: {
      en: 'Tests parametric factual knowledge',
      ja: 'パラメトリック事実知識をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'mmmlu',
    name: 'MMMLU',
    category: 'knowledge',
    description: {
      en: 'Tests multilingual question answering',
      ja: '多言語での質問応答能力をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'global-piqa',
    name: 'Global PIQA',
    category: 'knowledge',
    description: {
      en: 'Tests multilingual common-sense reasoning',
      ja: '多言語での常識推論能力をテスト',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'mrcr-128k',
    name: 'MRCR v2 (128k avg)',
    category: 'knowledge',
    description: {
      en: 'Tests long-context understanding (128k tokens)',
      ja: '長文コンテキスト理解をテスト（128kトークン）',
    },
    unit: '%',
    higherIsBetter: true,
  },
  {
    id: 'mrcr-1m',
    name: 'MRCR v2 (1M point)',
    category: 'knowledge',
    description: {
      en: 'Tests ultra-long context understanding (1M tokens)',
      ja: '超長文コンテキスト理解をテスト（1Mトークン）',
    },
    unit: '%',
    higherIsBetter: true,
  },
];

// Model Scores
export const modelScores: ModelScore[] = [
  // Gemini 3 Pro scores
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'humanity-last-exam',
    score: { value: '37.5', verified: true, source: 'https://deepmind.google/technologies/gemini/pro/' },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'arc-agi-2',
    score: { value: '31.1', verified: true, source: 'https://deepmind.google/technologies/gemini/pro/' },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'gpqa-diamond',
    score: { value: '91.9', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'mmmu-pro',
    score: { value: '81.0', verified: true },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'screenspot-pro',
    score: { value: '72.7', verified: true },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'charxiv-reasoning',
    score: { value: '81.4', verified: true },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'omnidocbench',
    score: { value: '0.115', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'video-mmmu',
    score: { value: '87.6', verified: true },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'livecodebench-pro',
    score: { value: '2439', verified: true },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'terminal-bench',
    score: { value: '54.2', verified: true },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'swe-bench',
    score: { value: '76.2', verified: true },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'tau2-bench',
    score: { value: '85.4', verified: true },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'vending-bench',
    score: { value: '5478.16', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'gdpval-aa',
    score: { value: '1194', verified: true, source: 'https://artificialanalysis.ai/evaluations/gdpval-aa' },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'facts-benchmark',
    score: { value: '70.5', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'simpleqa',
    score: { value: '72.1', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'mmmlu',
    score: { value: '91.8', verified: true },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'global-piqa',
    score: { value: '93.4', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'mrcr-128k',
    score: { value: '77.0', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-3-pro',
    benchmarkId: 'mrcr-1m',
    score: { value: '26.3', verified: false, note: 'Verification pending' },
  },

  // Gemini 2.5 Pro scores
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'humanity-last-exam',
    score: { value: '21.6', verified: true },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'arc-agi-2',
    score: { value: '4.9', verified: true },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'gpqa-diamond',
    score: { value: '86.4', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'mmmu-pro',
    score: { value: '68.0', verified: true },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'screenspot-pro',
    score: { value: '11.4', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'charxiv-reasoning',
    score: { value: '69.6', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'omnidocbench',
    score: { value: '0.145', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'video-mmmu',
    score: { value: '83.6', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'livecodebench-pro',
    score: { value: '1775', verified: true },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'terminal-bench',
    score: { value: '32.6', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'swe-bench',
    score: { value: '59.6', verified: true },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'tau2-bench',
    score: { value: '54.9', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'vending-bench',
    score: { value: '573.64', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'gdpval-aa',
    score: { value: '939', verified: true, source: 'https://artificialanalysis.ai/evaluations/gdpval-aa' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'facts-benchmark',
    score: { value: '63.4', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'simpleqa',
    score: { value: '54.5', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'mmmlu',
    score: { value: '89.5', verified: true },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'global-piqa',
    score: { value: '91.5', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'mrcr-128k',
    score: { value: '58.0', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gemini-2.5-pro',
    benchmarkId: 'mrcr-1m',
    score: { value: '16.4', verified: false, note: 'Verification pending' },
  },

  // Claude Sonnet 4.5 scores
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'humanity-last-exam',
    score: { value: '13.7', verified: true, source: 'https://www.anthropic.com/news/claude-sonnet-4-5' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'arc-agi-2',
    score: { value: '13.6', verified: true, source: 'https://www.anthropic.com/news/claude-sonnet-4-5' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'gpqa-diamond',
    score: { value: '83.4', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'mmmu-pro',
    score: { value: '68.0', verified: true },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'screenspot-pro',
    score: { value: '36.2', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'charxiv-reasoning',
    score: { value: '68.5', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'omnidocbench',
    score: { value: '0.145', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'video-mmmu',
    score: { value: '77.8', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'livecodebench-pro',
    score: { value: '1418', verified: true },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'terminal-bench',
    score: { value: '42.8', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'swe-bench',
    score: { value: '77.2', verified: true },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'tau2-bench',
    score: { value: '84.7', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'vending-bench',
    score: { value: '3838.74', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'gdpval-aa',
    score: { value: '1319', verified: true, source: 'https://artificialanalysis.ai/evaluations/gdpval-aa' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'facts-benchmark',
    score: { value: '50.4', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'simpleqa',
    score: { value: '29.3', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'mmmlu',
    score: { value: '89.1', verified: true },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'global-piqa',
    score: { value: '90.1', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'mrcr-128k',
    score: { value: '47.1', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'claude-sonnet-4.5',
    benchmarkId: 'mrcr-1m',
    score: { value: 'N/A', verified: true, note: 'Not supported' },
  },

  // GPT-5.2 scores (official benchmark results from OpenAI - Dec 2025)
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'humanity-last-exam',
    score: { value: '34.5', verified: true, source: 'https://openai.com/index/introducing-gpt-5-2/' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'arc-agi-2',
    score: { value: '52.9', verified: true, source: 'https://openai.com/index/introducing-gpt-5-2/' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'gpqa-diamond',
    score: { value: '92.4', verified: true, source: 'https://openai.com/index/gpt-5-2-for-science-and-math/' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'mmmu-pro',
    score: { value: '79.5', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'screenspot-pro',
    score: { value: '5.2', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'charxiv-reasoning',
    score: { value: '74.8', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'omnidocbench',
    score: { value: '0.132', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'video-mmmu',
    score: { value: '84.6', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'livecodebench-pro',
    score: { value: '2385', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'terminal-bench',
    score: { value: '58.1', verified: true, source: 'https://openai.com/index/introducing-gpt-5-2/' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'swe-bench',
    score: { value: '80.0', verified: true, source: 'https://openai.com/index/introducing-gpt-5-2/' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'tau2-bench',
    score: { value: '84.1', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'vending-bench',
    score: { value: '2156.82', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'gdpval-aa',
    score: { value: '1462', verified: true, source: 'https://artificialanalysis.ai/evaluations/gdpval-aa' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'facts-benchmark',
    score: { value: '56.4', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'simpleqa',
    score: { value: '42.7', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'mmmlu',
    score: { value: '89.6', verified: true, source: 'https://openai.com/index/introducing-gpt-5-2/' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'global-piqa',
    score: { value: '92.1', verified: false, note: 'Verification pending' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'mrcr-128k',
    score: { value: '99.0', verified: true, note: 'Near-perfect accuracy up to 256k tokens' },
  },
  {
    modelId: 'gpt-5.2',
    benchmarkId: 'mrcr-1m',
    score: { value: 'N/A', verified: false, note: 'Not supported' },
  },

  // Claude Opus 4.6 scores (official benchmark results from Anthropic - Feb 2026)
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'humanity-last-exam',
    score: { value: '53.1', verified: true, source: 'https://www.anthropic.com/news/claude-opus-4-6', note: 'With tools' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'arc-agi-2',
    score: { value: '68.8', verified: true, source: 'https://www.anthropic.com/news/claude-opus-4-6' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'gpqa-diamond',
    score: { value: '91.3', verified: true, source: 'https://www.anthropic.com/news/claude-opus-4-6' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'mmmu-pro',
    score: { value: '77.3', verified: true, source: 'https://www.anthropic.com/news/claude-opus-4-6', note: 'With tools' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'screenspot-pro',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'charxiv-reasoning',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'omnidocbench',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'video-mmmu',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'livecodebench-pro',
    score: { value: 'N/A', verified: false, note: 'Elo not reported' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'terminal-bench',
    score: { value: '65.4', verified: true, source: 'https://www.anthropic.com/news/claude-opus-4-6' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'swe-bench',
    score: { value: '80.8', verified: true, source: 'https://www.anthropic.com/news/claude-opus-4-6' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'tau2-bench',
    score: { value: '91.9', verified: true, source: 'https://www.anthropic.com/news/claude-opus-4-6', note: 'Retail sector' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'vending-bench',
    score: { value: '8017.59', verified: false, note: 'Third-party (Andon Labs)' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'gdpval-aa',
    score: { value: '1606', verified: true, source: 'https://artificialanalysis.ai/evaluations/gdpval-aa', note: 'Adaptive Reasoning' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'facts-benchmark',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'simpleqa',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'mmmlu',
    score: { value: '91.1', verified: true, source: 'https://www.anthropic.com/news/claude-opus-4-6' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'global-piqa',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'mrcr-128k',
    score: { value: 'N/A', verified: false, note: '256k: 93.0% reported, 128k not reported' },
  },
  {
    modelId: 'claude-opus-4.6',
    benchmarkId: 'mrcr-1m',
    score: { value: '76.0', verified: true, source: 'https://www.anthropic.com/news/claude-opus-4-6' },
  },

  // GPT-5.3-Codex scores (official benchmark results from OpenAI - Feb 2026)
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'humanity-last-exam',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'arc-agi-2',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'gpqa-diamond',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'mmmu-pro',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'screenspot-pro',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'charxiv-reasoning',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'omnidocbench',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'video-mmmu',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'livecodebench-pro',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'terminal-bench',
    score: { value: '77.3', verified: true, source: 'https://openai.com/index/introducing-gpt-5-3-codex/' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'swe-bench',
    score: { value: 'N/A', verified: false, note: 'SWE-Bench Pro reported (56.8%), Verified not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'tau2-bench',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'vending-bench',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'gdpval-aa',
    score: { value: 'N/A', verified: false, note: 'Not yet on leaderboard' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'facts-benchmark',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'simpleqa',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'mmmlu',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'global-piqa',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'mrcr-128k',
    score: { value: 'N/A', verified: false, note: 'Not reported' },
  },
  {
    modelId: 'gpt-5.3-codex',
    benchmarkId: 'mrcr-1m',
    score: { value: 'N/A', verified: false, note: 'Max context 400k' },
  },
];

// Helper function to get score for a specific model and benchmark
export function getScore(modelId: string, benchmarkId: string): BenchmarkScore | null {
  const score = modelScores.find(
    (s) => s.modelId === modelId && s.benchmarkId === benchmarkId
  );
  return score?.score || null;
}

// Helper function to get best score for a benchmark
export function getBestScore(benchmarkId: string): { modelId: string; score: BenchmarkScore } | null {
  const benchmark = benchmarks.find((b) => b.id === benchmarkId);
  if (!benchmark) return null;

  const scores = modelScores
    .filter((s) => s.benchmarkId === benchmarkId && s.score.value !== 'N/A')
    .map((s) => ({
      modelId: s.modelId,
      score: s.score,
      numericValue: parseFloat(s.score.value.replace(/[^0-9.-]/g, '')),
    }));

  if (scores.length === 0) return null;

  const best = benchmark.higherIsBetter
    ? scores.reduce((max, current) => (current.numericValue > max.numericValue ? current : max))
    : scores.reduce((min, current) => (current.numericValue < min.numericValue ? current : min));

  return { modelId: best.modelId, score: best.score };
}

# 検索戦略

## 検索クエリパターン

### 製品・サービス固有名詞
優先的に検索するキーワード:

```
"Claude Code"
"Model Context Protocol" OR "MCP"
"Anthropic Claude"
"Cursor Editor"
"ChatGPT" OR "GPT-4" OR "GPT-5"
"Gemini" OR "Gemini CLI"
"Browser Use"
"LangChain"
"AutoGen"
"CrewAI"
```

### 機能・カテゴリキーワード
```
"AI agent" OR "AIエージェント"
"autonomous agent"
"AI browser automation"
"AI coding assistant"
"code generation"
"AI image generation"
"AI music generation"
"BGM生成"
"開発効率化"
"生産性向上"
```

## 情報源優先順位

### Tier 1 (最優先)
- 公式ブログ・アナウンス
  - anthropic.com/news
  - openai.com/blog
  - cursor.sh/blog
  - Google AI Blog

- 公式GitHub リポジトリ
  - Releases / Changelog

### Tier 2 (高優先)
- 技術メディア
  - TechCrunch
  - VentureBeat
  - The Verge (Tech)
  - Ars Technica

- 開発者コミュニティ
  - Hacker News
  - Reddit (r/MachineLearning, r/LocalLLaMA, r/ClaudeAI)
  - Dev.to

### Tier 3 (中優先)
- 技術系YouTube
- Podcast (主要なもの)
- Medium (検証済み著者)

## 時間軸フィルタ

- **デフォルト**: 過去7日間
- **深掘り調査時**: 過去30日間
- **トレンド分析時**: 過去3ヶ月

## 検索深度

### Quick Mode (基本)
- max_results: 10
- search_depth: "basic"

### Thorough Mode (詳細調査)
- max_results: 20
- search_depth: "advanced"
- include_image_descriptions: true

## 言語フィルタ

優先順位:
1. 英語 (最新情報が最も早い)
2. 日本語 (ローカル活用事例)

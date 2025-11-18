# 記事構造ガイドライン

## 基本原則

### 1つのテーマ = 1つの記事
- 複数のニュースを1つのインデックスファイルにまとめない
- 各テーマごとに独立した記事ファイルを作成する
- 1記事1トピックの原則を守る

### 多言語対応
- 各記事について、英語版と日本語版を必ず両方作成する
- ファイル名は言語コードで区別する

## ディレクトリ構造

```
src/content/articles/
└── YYYYMMDD/
    ├── bezos-ai-investment-ja.md        # 日本語版
    ├── bezos-ai-investment-en.md        # 英語版
    ├── ai-labor-market-impact-ja.md     # 日本語版
    ├── ai-labor-market-impact-en.md     # 英語版
    ├── akira-ransomware-nutanix-ja.md   # 日本語版
    └── akira-ransomware-nutanix-en.md   # 英語版
```

## ファイル命名規則

### 形式
```
{slug}-{locale}.md
```

### slug（スラッグ）の作成ルール
- 記事の主題を表す簡潔な英語フレーズ
- 小文字のみ使用
- 単語間はハイフン（-）で区切る
- 3〜5単語程度が理想
- SEOフレンドリーなキーワードを含める

### locale（言語コード）
- `ja`: 日本語
- `en`: 英語

### 例
- ✅ `bezos-ai-investment-ja.md`
- ✅ `ai-powered-teddy-bear-safety-en.md`
- ✅ `qantas-adelaide-ai-center-ja.md`
- ❌ `article1.md`（内容が不明）
- ❌ `news-2025-11-18.md`（日付のみで内容不明）
- ❌ `ai_news_ja.md`（アンダースコア使用）

## フロントマター構成

### 必須フィールド

```yaml
---
title: string           # 記事タイトル
description: string     # 記事概要（150〜200文字）
date: YYYY-MM-DD       # 公開日（ISO 8601形式）
category: enum         # 'ChatGPT' | 'Claude' | 'Image Generation' | 'Research' | 'Other'
locale: enum           # 'ja' | 'en'
---
```

### オプションフィールド

```yaml
tags: string[]         # タグ配列（省略可）
```

### 完全な例（日本語）

```yaml
---
title: "Jeff BezosがAI企業Project Prometheusに62億ドル投資"
description: "Amazon創業者Jeff Bezosが新設のAI企業Project Prometheusに62億ドルを投資し、共同CEOとして経営に参画。物理世界で動作するAI開発に注力する。"
date: 2025-11-18
category: "Other"
tags: ["AI投資", "Jeff Bezos", "Project Prometheus", "物理AI"]
locale: "ja"
---
```

### 完全な例（英語）

```yaml
---
title: "Jeff Bezos Invests $6.2B in AI Startup Project Prometheus"
description: "Amazon founder Jeff Bezos invests $6.2 billion in newly established AI company Project Prometheus and joins as co-CEO, focusing on AI development for the physical world."
date: 2025-11-18
category: "Other"
tags: ["AI Investment", "Jeff Bezos", "Project Prometheus", "Physical AI"]
locale: "en"
---
```

## カテゴリ選択ガイド

| カテゴリ | 使用する場合 |
|---------|------------|
| `ChatGPT` | OpenAI製品、ChatGPT関連の記事 |
| `Claude` | Anthropic製品、Claude関連の記事 |
| `Image Generation` | 画像生成AI（Stable Diffusion, Midjourney, DALL-E等） |
| `Research` | AI研究、論文、学術的な内容 |
| `Other` | 上記以外のAI関連ニュース全般 |

## 記事本文の構造

### 日本語版テンプレート

```markdown
# {記事タイトル}

## 概要

{2〜3文で記事の要点をまとめる}

## 詳細

### 主要ポイント

- ポイント1
- ポイント2
- ポイント3

### 背景

{必要に応じて背景情報を記載}

### 影響・意義

{この技術やニュースの影響、意義を解説}

## テクにゃんのコメント

「{技術的な洞察や実用的なアドバイスをキャラクターの口調で}」

> **注意:** この見出しを使用すると、自動的にテクにゃんの画像が表示されます。見出しのテキストは必ず「テクにゃんのコメント」にしてください。

## 情報源

- [元記事タイトル](URL)
```

### 英語版テンプレート

```markdown
# {Article Title}

## Overview

{Summarize the key points in 2-3 sentences}

## Details

### Key Points

- Point 1
- Point 2
- Point 3

### Background

{Provide background information if necessary}

### Impact & Significance

{Explain the impact and significance of this technology or news}

## Tech-nyan's Comment

"{Technical insights or practical advice in the character's voice}"

> **Note:** Using this heading will automatically display Tech-nyan's image. The heading text must be exactly "Tech-nyan's Comment".

## Sources

- [Original Article Title](URL)
```

## 記事作成ワークフロー

1. **ニュース収集**: 複数のAI関連ニュースを収集
2. **テーマ分類**: 各ニュースを独立したテーマとして識別
3. **スラッグ生成**: 各テーマに対してSEOフレンドリーなスラッグを作成
4. **日本語版作成**: `{slug}-ja.md` ファイルを作成
5. **英語版作成**: `{slug}-en.md` ファイルを作成
6. **検証**: フロントマターがスキーマに準拠しているか確認

## 禁止事項

❌ **やってはいけないこと:**

1. 複数のテーマを1つの `index.md` にまとめる
2. 日本語版だけ、または英語版だけを作成する
3. ファイル名に日付のみを使用する
4. スキーマに存在しないフィールドを使用する（例: `pubDate`, `heroImage`）
5. `category` に定義外の値を使用する

✅ **正しい例:**

```
src/content/articles/20251118/
├── bezos-ai-investment-ja.md
├── bezos-ai-investment-en.md
├── ai-labor-market-impact-ja.md
└── ai-labor-market-impact-en.md
```

❌ **誤った例:**

```
src/content/articles/20251118/
└── index.md  # 複数テーマを1ファイルにまとめている
```

## 品質チェックリスト

記事公開前に以下を確認:

- [ ] 1記事1テーマになっているか
- [ ] 日本語版と英語版の両方が存在するか
- [ ] ファイル名が命名規則に従っているか
- [ ] フロントマターが全て正しく設定されているか
- [ ] `locale` が正しく設定されているか（ja/en）
- [ ] `category` が enum 値に含まれているか
- [ ] タイトルと本文の内容が一致しているか
- [ ] 情報源が明記されているか
- [ ] テクにゃんのコメントが含まれているか

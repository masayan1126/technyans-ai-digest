# CLAUDE.md

このファイルは Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

> **同期ルール**: `CLAUDE.md`（英語版）と `CLAUDE.ja.md`（日本語版）は常に同期してください。一方を変更した場合は、もう一方も必ず更新してください。

## プロジェクト概要 & セットアップ

@README.md

## コンテンツアーキテクチャ

### 2つのコレクションシステム

コードベースは Astro のコンテンツコレクションと**厳格なスキーマ検証**を使用しています：

1. **`articles`** - 日々の AI ニュース記事
2. **`aiTimeline`** - タイムラインビュー用の歴史的 AI マイルストーン

### タグ検証システム

タグは `src/content/config.ts` で定義された enum に対して**厳格に検証**されます。

**重要なワークフロー**：
1. 記事作成前に `TAGS.md` を確認
2. 許可リストのタグのみ使用
3. コミット前に `npm run validate-tags` を実行
4. 新しいタグが必要な場合は `src/content/config.ts`（`commonTags` enum）に追加

タグ検証スクリプト（`scripts/validate-tags.ts`）はビルド前（`prebuild` フック）に自動実行されます。未定義のタグを使用すると**ビルドエラー**になります。

### フロントマタースキーマ

**Articles** (`src/content/articles`):
```yaml
---
title: string
description: string
date: YYYY-MM-DD (Date としてパース)
category: ChatGPT | Claude | Gemini | Grok | Image Generation | Research | Other
tags: [TAGS.md の許可されたタグの配列]
locale: en | ja
technyanComment?: string (オプションのマスコットコメント)
---
```

**Timeline** (`src/content/aiTimeline`):
```yaml
---
title: string
description: string
date: YYYY-MM-DD
category: Model Release | Technical Breakthrough | Investment | Social Impact | Policy & Regulation
impactLevel: high | medium | low
tags?: [許可されたタグの配列]
relatedCompanies?: [企業名の配列]
locale: en | ja
technyanComment?: string
---
```

## 記事作成ガイドライン

複数のニュースを収集した場合、以下のルールに従ってください：

1. **個別の記事を作成** - 関連のないニュースを1つの記事にまとめない
2. **両言語ファイル** - 必ず `ja.md` と `en.md` の両方を作成
3. **明確なディレクトリ名** - 内容を反映した英語のディレクトリ名を使用（例: `anthropic-microsoft-nvidia-partnership/`）
4. **関連性の評価** - 密接に関連するニュースのみまとめる；独立したニュースは分離
5. **フォーマットの一貫性** - 既存の記事フォーマット（フロントマター、セクション構造）に従う
6. **カテゴリ制限** - スキーマ enum で定義されたカテゴリのみ使用

## AI ニュース収集スキル参照

> **重要**: `.claude/skills/` ディレクトリのスキルは GitHub Actions（claude-code-action）では直接利用できません。ここで `@` 構文でスキルドキュメントを参照することで、これらのドキュメントが CLAUDE.md のコンテキストとして読み込まれ、ローカル環境と CI 環境の両方で同じガイダンスが機能します。

@.claude/skills/ai-news-fetcher/SKILL.md
@.claude/skills/ai-news-fetcher/WORKFLOW.md

## アーキテクチャハイライト

### コンテンツ処理フロー

1. **Articles** は YAML フロントマター付きの Markdown として保存
2. **Astro Content Collections** が型安全なアクセスと検証を提供
3. **React コンポーネント** がインタラクティブ機能（検索、フィルタリング、ビュー）を処理
4. **History ユーティリティ**（`src/utils/historyUtils.ts`）がインパクトスコアを計算し記事をグループ化

### インパクトスコアシステム

記事は以下に基づいて動的にインパクトスコア（0-100）が計算されます：
- タグ数（各 ×10 ポイント）
- Technyan コメントの有無（+30 ポイント）
- カテゴリウェイト（Research: +20、主要モデル: +15 など）

**Impact Map View** で記事の重要度を可視化するために使用されます。

### 5つの履歴ビュー

`/history` ページは同じタイムラインデータに対して**5つの異なる可視化モード**を提供：

1. **Timeline View** - 垂直時系列フロー
2. **Milestone View** - 年/月ごとにグループ化
3. **Impact Map View** - インパクトスコアでサイズ変更
4. **Archive Grid View** - コンパクトなカレンダースタイルグリッド
5. **Story Flow View** - 没入型ストーリーテリング体験

すべて同じ `aiTimeline` コレクションから異なるレンダリングロジックで表示。

### i18n システム

**2レベルの言語サポート**：

1. **UI 翻訳** - `src/i18n/translations.ts` で `en` と `ja` キーで管理
2. **コンテンツ翻訳** - 言語ごとに別々の `.md` ファイル（`locale` フィールド付き）

React コンポーネントは `I18nProvider` と `useI18n()` フックを使用。言語設定は `localStorage` に保存。

## Claude Code 設定

### 拡張思考（Ultrathink）

複雑なタスクには**拡張思考**（ultrathink）を積極的に使用してください。以下のような場面でより深い推論と優れた結果を実現します：

- 複数ステップの問題解決
- アーキテクチャの決定
- コードレビューとデバッグ
- コンテンツの計画とリサーチ

拡張思考により、Claude は応答前により多くの内部検討を行い、より徹底的で論理的な回答を生成できます。

# Technyan's AI Digests

AI技術関連のニュースを配信するバイリンガル（日本語/英語）メディアサイト。レトロテック・ミニマリストデザインで、ニュース記事、AIベンチマーク、歴史的タイムライン、業界ランドスケープを提供。

## Tech Stack

- **Astro 4** - 静的サイトジェネレーター
- **React 18** - インタラクティブコンポーネント
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **Playwright** - E2Eテスト
- **Vercel** - ホスティング

## Getting Started

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド（タグ検証を含む）
npm run build

# 本番ビルドのプレビュー
npm run preview
```

## テスト & 検証

```bash
# タグの検証のみ実行
npm run validate-tags

# E2Eテストの実行
npm run test

# テストのUIモード
npm run test:ui

# テストレポートの表示
npm run test:report
```

## 記事作成ガイド

### 1. タグの確認

記事作成前に必ず [TAGS.md](./TAGS.md) を確認してください。
**スキーマで定義されていないタグを使用するとビルドエラーになります。**

### 2. 記事の構造

すべての記事は両言語でペアファイルとして作成する必要があります：

```
src/content/articles/[YYYYMMDD]/[article-slug]/
├── ja.md    # 日本語版
└── en.md    # 英語版
```

### 3. カテゴリ

記事のカテゴリは以下のみ使用可能：

| カテゴリ | 対象 |
|----------|------|
| `ChatGPT` | OpenAI 関連 |
| `Claude` | Anthropic 関連 |
| `Gemini` | Google/DeepMind 関連 |
| `Grok` | xAI 関連 |
| `Image Generation` | 画像生成AI |
| `Research` | 業界分析・研究 |
| `Other` | その他 |

### 4. 記事作成の流れ

1. [TAGS.md](./TAGS.md) から適切なタグを選択
2. `src/content/articles/YYYYMMDD/[slug]/` ディレクトリを作成
3. `ja.md` と `en.md` の両方を作成
4. `npm run validate-tags` でタグを検証
5. `npm run build` でビルド確認
6. コミット＆プッシュ

### 5. よくあるエラー

#### タグのビルドエラー

```
Invalid enum value. Expected 'OpenAI' | ... received 'TOON'
```

**原因**: 使用したタグが [TAGS.md](./TAGS.md) に含まれていません。

**対処法**:
1. [TAGS.md](./TAGS.md) で適切なタグを探す
2. 新しいタグが必要な場合は `src/content/config.ts` の `commonTags` に追加

#### 言語ペアの欠落

記事は `ja.md` と `en.md` の両方に存在する必要があります。片方が欠けるとビルドエラーになります。

## ファイル構造

```
src/
├── pages/          # Astro ページと API ルート
├── components/     # React コンポーネント
├── layouts/        # Astro レイアウト
├── content/        # Markdown 記事（スキーマ検証済み）
│   ├── articles/   # ニュース記事
│   └── aiTimeline/ # 歴史的タイムライン
├── utils/          # 共有ユーティリティ
├── i18n/           # 翻訳文字列
scripts/            # ビルド時スクリプト（タグ検証）
tests/              # Playwright E2E テスト
```

## デザインシステム

**レトロテック・ミニマリズム**：
- **カラー**: クリーム背景（`#FFF6D0`）+ ネイビーテキスト（`#0C2340`）
- **タイポグラフィ**: モノスペースフォント（IBM Plex Mono スタイル）
- **UI**: フラット、ミニマル、グラデーションなし、シャープなコーナー

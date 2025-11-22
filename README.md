# Technyan's AI Digests

AI技術関連のニュースを配信するメディアサイト

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## 記事作成ガイド

### 1. タグの確認 ⚠️ 重要

記事作成前に必ず [TAGS.md](./TAGS.md) を確認してください。
**スキーマで定義されていないタグを使用するとビルドエラーになります。**

### 2. タグの検証

記事作成後、以下のコマンドでタグを検証できます：

```bash
npm run validate-tags
```

ビルド前に自動的にタグ検証が実行されます（`prebuild`フック）。

### 3. 記事作成の流れ

1. `.article-template.md` をコピーして新しい記事を作成
2. [TAGS.md](./TAGS.md) から適切なタグを選択
3. 記事を書く
4. `npm run validate-tags` でタグを検証
5. ローカルでビルドして確認: `npm run build`
6. コミット＆プッシュ

### 4. よくあるエラー

#### タグのビルドエラー

```
Invalid enum value. Expected 'OpenAI' | ... received 'TOON'
```

**原因**: 使用したタグが [TAGS.md](./TAGS.md) に含まれていません。

**対処法**:
1. [TAGS.md](./TAGS.md) で適切なタグを探す
2. 新しいタグが必要な場合は `src/content/config.ts` の `commonTags` に追加

## 開発ツール

### タグ検証

```bash
# タグの検証のみ実行
npm run validate-tags

# ビルド（自動的にタグ検証も実行される）
npm run build
```

### テスト

```bash
# E2Eテストの実行
npm run test

# テストのUIモード
npm run test:ui

# テストレポートの表示
npm run test:report
```

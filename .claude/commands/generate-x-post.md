# X Post Generator

記事のパスを元に、テクにゃん.のXアカウント用ポスト投稿案を生成します。

## 入力

記事パス: $ARGUMENTS

## 実行手順

1. 指定された記事パスから日本語版（ja.md）と英語版（en.md）の両方を読み込む
2. frontmatterからtitle, description, date, category, tags, technyanCommentを抽出
3. `.claude/skills/x-post-generator/HASHTAG_MAP.md`を参照してタグをハッシュタグに変換
4. `.claude/skills/x-post-generator/TEMPLATES.md`を参照して3パターンのポスト案を生成
5. 日本語版3パターン、英語版3パターンの合計6パターンを出力

## 出力形式

各ポスト案には以下を含める：
- 紹介文（テクにゃん.口調）
- 記事タイトル
- 記事URL
- ハッシュタグ（3-5個）
- OGP画像添付指示
- 文字数カウント

## 参照ドキュメント

- `.claude/skills/x-post-generator/WORKFLOW.md` - 詳細な実行手順
- `.claude/skills/x-post-generator/TEMPLATES.md` - ポストテンプレート
- `.claude/skills/x-post-generator/HASHTAG_MAP.md` - ハッシュタグ変換ルール
- `.claude/skills/x-post-generator/EXAMPLES.md` - 出力例

## 注意事項

- 文字数は280文字以内に収める
- technyanCommentがある場合はパターンBで引用
- URLは短縮後23文字として計算

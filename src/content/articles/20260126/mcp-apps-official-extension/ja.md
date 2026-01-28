---
title: "MCP Apps正式リリース：AIチャットにインタラクティブUIを統合するオープン標準"
description: "Model Context Protocolの初の公式拡張「MCP Apps」が正式リリース。AnthropicとOpenAIの共同開発により、AIチャット内でダッシュボード、フォーム、可視化ツールなどのUIを直接表示可能に。"
date: 2026-01-26
category: "Claude"
locale: "ja"
tags: ["Anthropic", "OpenAI", "MCP", "Developer Tools", "Open Source", "Agent AI"]
technyanComment: "AnthropicとOpenAIが一緒にオープン標準を作ったにゃ！AIチャットが「ミニアプリのプラットフォーム」になる時代が来たにゃん。競争しながら協力する、面白い関係だにゃ～"
---

# MCP Apps正式リリース：AIチャットにインタラクティブUIを統合するオープン標準

2026年1月26日、Model Context Protocol（MCP）の初の公式拡張仕様「MCP Apps」が正式にリリースされた。これにより、AIツールはテキストや構造化データだけでなく、ダッシュボード、フォーム、可視化ツールなどのインタラクティブなUI要素を会話内に直接表示できるようになる。

## MCP Appsとは

MCP Appsは、MCPサーバーがホストアプリケーションにインタラクティブなUI要素を提供するための標準化された方法を定義する拡張仕様（SEP-1865）。2025年11月に最初に提案され、AnthropicとOpenAIのMCPコアメンテナー、およびMCP-UIコミュニティワーキンググループの共同作業により開発された。

### なぜMCP Appsが必要なのか

従来のMCPツールはテキストと構造化データを返すことしかできなかった。しかし、チャート、フォーム、ビデオプレーヤーなどのインタラクティブなUIが必要な場面では、これは大きな制約となっていた。

MCP Apps公式ブログより：
「モデルはループ内に留まり、ユーザーの行動を見て適切に応答しますが、UIはテキストでは不可能なことを処理します：ライブ更新、ネイティブメディアビューア、永続的な状態、直接操作。組み合わせることで、モデルとユーザーの両方に必要なすべてのコンテキストを1つの使い慣れたインターフェースで提供します」

## 技術的な仕組み

MCP Appsは以下のような流れで動作する：

1. **ツール定義**: ツールが`ui://`リソースを含むUIインターフェースを宣言
2. **ツール呼び出し**: LLMがサーバー上のツールを呼び出し
3. **ホストによるレンダリング**: ホストがリソースを取得し、サンドボックス化されたiframeで表示
4. **双方向通信**: ホストが通知経由でUIにツールデータを渡し、UIはホスト経由で他のツールを呼び出し可能

### セキュリティモデル

- **サンドボックス化されたiframe**: UIコンテンツは隔離された環境で実行
- **JSON-RPCによる通信**: postMessage経由の構造化された通信で監査証跡を作成
- **明示的な承認**: ホストはUI起動のツール呼び出しに対して明示的な承認を要求可能

## 対応プラットフォーム

リリース時点で以下のプラットフォームがMCP Appsをサポート：

- **Claude**: Web版およびデスクトップ版（Pro、Max、Team、Enterprise）
- **Visual Studio Code**: Insidersで利用可能、安定版も近日対応
- **Goose**: 対応済み
- **ChatGPT**: 今週中に対応予定

## AnthropicとOpenAIの協力

MCP Appsの特筆すべき点は、競合関係にあるAnthropicとOpenAIが共同でオープン標準を開発したことだ。OpenAIのApps SDKとMCP-UIの両方からインスピレーションを得て、断片化を防ぎ、業界標準として統一された仕様を作り上げた。

AWS上級プリンシパルエンジニアのClare Liguori氏：
「MCP Appsは、エージェントツールが提供できるものとユーザーが自然に求めるインタラクション方法の間にある実際のギャップに対処しています。会話内に直接動的なインターフェースをレンダリングする機能により、MCPサーバーの機能を実用的な方法で活用しやすくなります」

## エンタープライズユースケース

MCP Appsは特にエンタープライズ環境での活用が期待されている：

- **インタラクティブな承認ワークフロー**
- **ダッシュボードによるデータ探索**
- **設定ウィザード**
- **ドキュメントレビュー**
- **リアルタイムモニタリング**

## 開発者向けリソース

MCP Appsを使ったアプリ開発には`@modelcontextprotocol/ext-apps`パッケージが利用可能：

- **アプリ開発者向けSDK**: `@modelcontextprotocol/ext-apps`
- **Reactフック**: `@modelcontextprotocol/ext-apps/react`
- **ホスト開発者向けSDK**: `@modelcontextprotocol/ext-apps/app-bridge`

GitHubリポジトリ: [modelcontextprotocol/ext-apps](https://github.com/modelcontextprotocol/ext-apps)

## AIチャットの「OS化」への一歩

MCP Appsのリリースは、AIチャットボットが単なる会話ツールから「アプリケーションプラットフォーム」へと進化する重要な転換点を示している。TelegramやDiscordの「ミニアプリ」、中国のWeChatのような「スーパーアプリ」の方向性に、AI業界も向かいつつある。

「AIを個別のアプリに埋め込む」従来のアプローチから、「アプリをAIエージェント内のプラグ可能なコンポーネントにする」というパラダイムシフトが、オープン標準によって加速している。

## 情報源

- [MCP Blog - MCP Apps: Bringing UI Capabilities To MCP Clients](https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/)
- [GitHub - modelcontextprotocol/ext-apps](https://github.com/modelcontextprotocol/ext-apps)
- [The New Stack - Anthropic extends MCP with a UI framework](https://thenewstack.io/anthropic-extends-mcp-with-an-app-framework/)
- [The Register - Claude supports MCP Apps](https://www.theregister.com/2026/01/26/claude_mcp_apps_arrives/)
- [The Verge - MCP unites Claude chat with apps like Slack, Figma, and Canva](https://www.theverge.com/news/867673/claude-mcp-app-interactive-slack-figma-canva)

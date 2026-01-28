---
title: "Anthropic、Interactive Toolsを発表：Claudeから業務ツールを直接操作可能に"
description: "AnthropicがClaude新機能「Interactive Tools」を発表。SlackやFigma、Asanaなどの業務ツールをClaudeの会話画面から直接操作できるようになった。"
date: 2026-01-26
category: "Claude"
locale: "ja"
tags: ["Anthropic", "Claude", "MCP", "Enterprise AI", "Collaboration", "Agent AI"]
technyanComment: "Claudeの中でSlackもCanvaも使えるようになったにゃ！タブを切り替えずに仕事が完結するなんて、未来のワークスペースって感じにゃん～"
---

# Anthropic、Interactive Toolsを発表：Claudeから業務ツールを直接操作可能に

Anthropicは2026年1月26日、対話型AI「Claude」の会話画面内で外部サービスを直接操作できる新機能「Interactive Tools」を発表した。この機能により、Slackでのメッセージ送信やFigmaでのダイアグラム作成などを、Claudeとの会話中にタブを切り替えることなく実行できる。

## Interactive Toolsとは

Interactive Toolsは、Claudeの会話インターフェース内にサードパーティアプリのUI要素を直接埋め込む機能。従来はテキストベースの指示や結果の要約が中心だったが、この新機能では外部サービスの操作画面そのものがClaude内に組み込まれる。

### 対応アプリケーション

ローンチ時点で以下のサービスに対応：

- **Slack（Salesforce）**: メッセージ検索、会話コンテキストの取得、ドラフト作成・フォーマット・投稿前確認
- **Canva**: プレゼンテーションアウトライン作成、ブランディング・デザインのリアルタイム編集
- **Figma**: FigJamでフローチャートやガントチャートなどのビジュアルダイアグラム作成
- **Box**: ファイル検索、インラインドキュメントプレビュー、コンテンツからの洞察抽出
- **Clay**: 企業調査、連絡先検索（メール・電話）、企業規模・資金調達データの取得、パーソナライズされたアウトリーチ作成
- **Asana**: チャットからプロジェクト・タスク・タイムライン作成
- **monday.com**: 作業管理、ボード更新、タスク割り当て、進捗可視化
- **Hex**: データに関する質問への回答、インタラクティブなチャート・テーブル・引用の表示
- **Amplitude**: 分析チャート作成、トレンド探索、パラメータ調整

Salesforce連携も近日対応予定とされている。

## 技術基盤：MCP Apps

この機能の基盤には、Anthropicが策定したオープン標準「Model Context Protocol（MCP）」の拡張仕様「MCP Apps」が用いられている。MCP Appsでは、外部サービス側が提供するUI要素を、サンドボックス化されたiframeとしてホスト側が描画する方式が定義されている。

ホストとアプリ間の通信は定義されたプロトコルに基づいて行われ、セキュリティを確保しながらシームレスな統合を実現している。

## 利用方法と対象プラン

- **利用開始**: claude.ai/directoryから「interactive」と表示された連携先を選択
- **対応プラットフォーム**: Web版およびデスクトップ版Claude
- **対象プラン**: Pro、Max、Team、Enterprise（無料プランは対象外）
- **今後の対応**: Claude Coworkでも利用可能になる予定

## OpenAIのApps機能との類似点

この機能はOpenAIが2025年10月にリリースした「Apps」システムと類似しており、両社ともMCPをベースにしている。MCPは2024年にAnthropicが導入したオープン標準で、2025年11月にAppsサポートが追加された。

## Anthropicの好調な勢い

VentureBeatの報道によると、このInteractive Tools発表はAnthropicにとって異例の勢いの中で行われた。開発者向けコーディングアシスタント「Claude Code」は開発者以外にも広く普及し、NVIDIAのJensen Huang CEOも「incredible（素晴らしい）」と評価。さらに、競合製品GitHub Copilotを持つMicrosoft社内でもClaude Codeが広く採用されているという。

## 情報源

- [TechCrunch - Anthropic launches interactive Claude apps, including Slack and other workplace tools](https://techcrunch.com/2026/01/26/anthropic-launches-interactive-claude-apps-including-slack-and-other-workplace-tools/)
- [VentureBeat - Anthropic embeds Slack, Figma and Asana inside Claude](https://venturebeat.com/ai/anthropic-embeds-slack-figma-and-asana-inside-claude-turning-ai-chat-into-a)
- [MacRumors - Claude AI Now Lets You Use Slack, Figma, and Canva Within the Chat](https://www.macrumors.com/2026/01/27/claude-app-integration-asana-slack-figma-canva/)
- [Yahoo Tech - Anthropic launches interactive Claude apps](https://tech.yahoo.com/ai/claude/articles/anthropic-launches-interactive-claude-apps-180000226.html)

---
title: "OpenAI、AIブラウザのプロンプトインジェクションは「完全には解決できない」と認める"
description: "OpenAIがChatGPT Atlasブラウザエージェントのセキュリティアップデートを公開。プロンプトインジェクション攻撃はAIシステムにとって長期的な課題であると警告。"
date: 2026-01-05
category: "ChatGPT"
locale: "ja"
tags: ["OpenAI", "ChatGPT", "AI Safety", "Cybersecurity", "Agent AI"]
---

# OpenAI、AIブラウザのプロンプトインジェクションは「完全には解決できない」と認める

OpenAIは、AIブラウザエージェント「ChatGPT Atlas」の重要なセキュリティアップデートを公開した。同時に、プロンプトインジェクション攻撃は完全には排除できない可能性があることを認めている。この発表は、ウェブ環境で動作するエージェント型AIシステムが直面するセキュリティ課題の深刻さを浮き彫りにしている。

## プロンプトインジェクションの脅威

プロンプトインジェクション攻撃は、AIブラウザエージェント特有の脆弱性だ。ソフトウェアの欠陥を突く従来のサイバー攻撃とは異なり、AIのロジックそのものを標的にする。攻撃者はドキュメント、メール、ウェブサイトなどのウェブコンテンツに悪意のある命令を埋め込み、AIエージェントにユーザーのコマンドを無視させ、意図しない動作を実行させる。

2025年10月にChatGPT Atlasがローンチされると、セキュリティ研究者たちは即座に防御機能のテストを開始。数時間以内に、Googleドキュメント内に巧妙に配置された言葉がブラウザの動作に影響を与えることを示すデモが公開された。

## OpenAIの対応

同社は、敵対的学習モデルと強化されたセーフガードを組み合わせて展開した。主な改善点は以下の通り：

- 新しい攻撃戦略を発見する高度な自動レッドチーミング
- 数十ステップにわたる長期的エクスプロイトの検出
- 継続的な脅威軽減のための多層防御アーキテクチャ

OpenAIの内部攻撃者は、人間によるレッドチームキャンペーンや公開セキュリティレポートには登場しなかった、複雑な多段階エクスプロイトを発見した。

## 業界全体の課題

OpenAIの認識は、業界全体の懸念と一致している。英国の国家サイバーセキュリティセンター（NCSC）も最近、生成AIシステムに対するプロンプトインジェクション攻撃は「完全に軽減されることはないかもしれない」と警告している。AnthropicとGoogleも、エージェント型システムにはアーキテクチャレベルの制御と継続的なストレステストが必要だと主張している。

OpenAIは「プロンプトインジェクションは、オンライン詐欺と同様の長期的な課題です。一度の修正ではなく、継続的な圧力が必要です」と述べている。

## AIセキュリティへの影響

AIエージェントが自律的にタスクを実行する能力が高まるにつれ、敵対的攻撃にとってより価値の高いターゲットとなる。同社は、完全な解決策を期待するのではなく、より速いパッチサイクル、継続的なテスト、多層防御が今後の道筋であると強調している。

この認識は、AIブラウザ技術が直面する根本的な限界について、OpenAIが透明性を示した注目すべき瞬間となった。

## 情報源

- [Fox News - OpenAI admits AI browsers face unsolvable prompt attacks](https://www.foxnews.com/tech/openai-admits-ai-browsers-face-unsolvable-prompt-attacks)
- [CyberScoop - OpenAI says prompt injection may never be 'solved' for browser agents](https://cyberscoop.com/openai-chatgpt-atlas-prompt-injection-browser-agent-security-update-head-of-preparedness/)
- [Cybersecurity News - OpenAI Hardened ChatGPT Atlas](https://cybersecuritynews.com/openai-hardened-chatgpt-atlas/)

---
title: "AWS MCP Serverプレビュー開始 - 15,000以上のAWS APIをAIエージェントから利用可能に"
description: "AWSがAIエージェント向け統合ツール「AWS MCP Server」のプレビューを発表。15,000以上のAWS API呼び出しとナレッジベースアクセスを包括的に提供し、AIからのAWS操作を大幅に簡素化。"
date: 2025-12-02
category: "Other"
tags: ["Amazon", "MCP", "Agentic AI", "Cloud Computing", "Developer Tools"]
locale: "ja"
technyanComment: "MCPでAWSを操作できるようになったにゃ！15,000以上のAPIが使えるにゃんて、AIエージェントの可能性が一気に広がるにゃ〜"
---

## AWS、AIエージェント向けMCPサーバーを発表

Amazon Web Servicesは、AWS re:Invent 2025において、AIエージェントやLLMからAWSを包括的に利用するための新サービス「AWS MCP Server」のプレビュー提供を発表しました。

## MCPとは

MCP（Model Context Protocol）は、生成AIやAIエージェントが外部ツールを呼び出して情報を取得・操作する際に使用されるプロトコルです。AIがMCPクライアントとなり、対象システムがMCPサーバーとして機能します。

## AWS MCP Serverの概要

AWS MCP Serverは、これまで個別に提供されていた以下のサーバーを統合・包括したものです：

- **AWS API MCP Server**: AWS APIの利用
- **AWS Knowledge MCP Server**: ナレッジベースへのアクセス

新サービスにより、**15,000以上のAWS API**の呼び出しおよびAWSドキュメントへのアクセスが、生成AIやAIエージェントから可能になります。

## 3つの主要機能

### Agent SOP Tools

AIエージェントが操作対象を適切に操作するための標準操作手順（Standard Operating Procedures）を取得できます。ワークフローやベストプラクティスが含まれたドキュメントにアクセス可能です。

### AWS API Tools

自動化されたクレデンシャル管理のもと、適切な構文確認やエラーハンドリングを行いながら、AWSの15,000以上のAPIのほとんどを呼び出せます。また、AIの学習データに含まれていない新しいAWS APIの説明や構文に関するヘルプも取得できます。

### AWS Knowledge Tools

以下のAWSリソースを参照可能です：

- 公式ドキュメント
- APIリファレンス
- ブログ記事
- 新着情報
- アーキテクチャガイダンス
- リージョン一覧・死活情報

## 開発者へのメリット

### 最新APIへの即座のアクセス

新サービスがリリースされても、AIの学習データ更新を待たずに最新APIの情報と利用方法を取得できます。

### 統合されたアクセス

これまで複数のMCPサーバーを個別に設定する必要がありましたが、AWS MCP Serverひとつで包括的なアクセスが可能になります。

### 安全な認証管理

クレデンシャル管理が自動化されており、セキュアなAPI呼び出しを実現します。

## 今後の展望

AWS MCP Serverは現在プレビュー段階です。AIエージェントによるクラウドインフラ管理の自動化が進む中、このようなMCPベースの統合ツールは、開発者の生産性向上に大きく貢献すると期待されています。

AWSはre:Invent 2025で他にも多数のAI関連サービスを発表しており、AIとクラウドの融合がさらに加速しています。

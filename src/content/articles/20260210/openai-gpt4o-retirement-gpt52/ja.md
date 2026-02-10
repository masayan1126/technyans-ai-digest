---
title: "OpenAI、2月13日にGPT-4oなどレガシーモデルを廃止 — GPT-5.2シリーズへ全面移行"
description: "OpenAIが2月13日にGPT-4o、GPT-4.1、GPT-4.1 mini、o4-miniを廃止し、GPT-5.2シリーズへの移行を実施。GPT-5.2はハルシネーション30%削減、SWE-Bench Verified 80%達成など大幅な性能向上を実現。"
date: 2026-02-10
category: "ChatGPT"
tags: ["OpenAI", "ChatGPT", "GPT-5.2", "GPT-4o", "AI", "Benchmark"]
locale: "ja"
technyanComment: "GPT-4oお疲れ様にゃ！ハルシネーション30%減はユーザーにとって嬉しい進化にゃ。でもAPI価格は据え置きじゃなくて値上げにゃ...コスパ計算が大事にゃね"
---

## レガシーモデルの終焉

OpenAIは**2026年2月13日**をもって、ChatGPTから以下のモデルを廃止することを発表した：

- **GPT-4o**
- **GPT-4.1** / **GPT-4.1 mini**
- **o4-mini**
- **GPT-5 Instant** / **GPT-5 Thinking**

廃止後、すべての会話は自動的に**GPT-5.2シリーズ**へ移行される。なお、API側の即時廃止は予定されておらず、十分な予告期間を設けるとしている。

## GPT-5.2シリーズの構成

GPT-5.2は用途別に3つのバリアントを提供する：

| モデル | 用途 | API名 |
|--------|------|-------|
| **GPT-5.2 Instant** | 日常的な質問・情報検索・翻訳 | `gpt-5.2-chat-latest` |
| **GPT-5.2 Thinking** | コーディング・数学・長文要約 | `gpt-5.2` |
| **GPT-5.2 Pro** | 高難度の質問・高信頼性が必要な場面 | `gpt-5.2-pro` |

## 主要ベンチマーク

GPT-5.2 Thinkingは前世代から大幅な性能向上を達成：

| ベンチマーク | GPT-5.2 | GPT-5.1 | 改善 |
|-------------|---------|---------|------|
| SWE-Bench Verified | **80.0%** | 76.3% | +3.7pt |
| SWE-Bench Pro | **55.6%** | 50.8% | +4.8pt |
| GPQA Diamond | **92.4%** | 88.1% | +4.3pt |
| FrontierMath T1-3 | **40.3%** | 31.0% | +9.3pt |
| ARC-AGI-1 | **86.2%** | 72.8% | +13.4pt |
| GDPval（44職業） | **70.9%** | 38.8% | +32.1pt |

特筆すべきは**ハルシネーション（幻覚）の30%削減**と、256Kトークンのコンテキストで約100%の精度を維持する長文脈処理能力だ。

## 価格体系

API価格はGPT-5.1から変更されている：

| | GPT-5.2 | GPT-5.1（参考） |
|---|---------|----------------|
| 入力 | $1.75/1M tokens | $1.25/1M tokens |
| キャッシュ入力 | $0.175/1M tokens | — |
| 出力 | $14/1M tokens | $10/1M tokens |

性能向上に伴い入力・出力ともに値上げとなるが、キャッシュ入力の大幅割引が導入された。

## 移行のポイント

- ChatGPTユーザーは**2月13日に自動移行**
- GPT-5.1は廃止後**3ヶ月間**レガシーモデルとして利用可能
- APIは当面影響なし（別途予告あり）
- コーディング特化の**GPT-5.2-Codex**も近日リリース予定

## ソース

- [OpenAI - Introducing GPT-5.2](https://openai.com/index/introducing-gpt-5-2/)
- [OpenAI Help Center - Retiring GPT-4o](https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models)
- [OpenAI - GPT-5 System Card Update](https://openai.com/index/gpt-5-system-card-update-gpt-5-2/)

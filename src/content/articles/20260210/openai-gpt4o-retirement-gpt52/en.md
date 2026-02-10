---
title: "OpenAI to Retire GPT-4o and Legacy Models on Feb 13 — Full Migration to GPT-5.2 Series"
description: "OpenAI will retire GPT-4o, GPT-4.1, GPT-4.1 mini, and o4-mini on February 13, migrating all ChatGPT conversations to the GPT-5.2 series. GPT-5.2 delivers 30% fewer hallucinations, 80% on SWE-Bench Verified, and significant gains across all benchmarks."
date: 2026-02-10
category: "ChatGPT"
tags: ["OpenAI", "ChatGPT", "GPT-5.2", "GPT-4o", "AI", "Benchmark"]
locale: "en"
technyanComment: "Farewell GPT-4o, nya! 30% fewer hallucinations is a welcome upgrade for users. But the API pricing went up... gotta do the cost-benefit math carefully, nya~"
---

## End of the Legacy Era

OpenAI announced that the following models will be retired from ChatGPT on **February 13, 2026**:

- **GPT-4o**
- **GPT-4.1** / **GPT-4.1 mini**
- **o4-mini**
- **GPT-5 Instant** / **GPT-5 Thinking**

After retirement, all conversations will automatically migrate to the **GPT-5.2 series**. The API will not be immediately affected — OpenAI has committed to providing adequate notice before any API deprecation.

## GPT-5.2 Series Lineup

GPT-5.2 offers three variants tailored to different use cases:

| Model | Best For | API Name |
|-------|----------|----------|
| **GPT-5.2 Instant** | Everyday queries, search, translation | `gpt-5.2-chat-latest` |
| **GPT-5.2 Thinking** | Coding, math, long-document summarization | `gpt-5.2` |
| **GPT-5.2 Pro** | High-difficulty questions, maximum reliability | `gpt-5.2-pro` |

## Key Benchmarks

GPT-5.2 Thinking delivers substantial improvements over its predecessor:

| Benchmark | GPT-5.2 | GPT-5.1 | Improvement |
|-----------|---------|---------|-------------|
| SWE-Bench Verified | **80.0%** | 76.3% | +3.7pt |
| SWE-Bench Pro | **55.6%** | 50.8% | +4.8pt |
| GPQA Diamond | **92.4%** | 88.1% | +4.3pt |
| FrontierMath T1-3 | **40.3%** | 31.0% | +9.3pt |
| ARC-AGI-1 | **86.2%** | 72.8% | +13.4pt |
| GDPval (44 occupations) | **70.9%** | 38.8% | +32.1pt |

Notably, hallucinations are **reduced by 30%**, and the model maintains near-100% accuracy at 256K token context lengths.

## Pricing

API pricing has changed from GPT-5.1:

| | GPT-5.2 | GPT-5.1 (reference) |
|---|---------|---------------------|
| Input | $1.75/1M tokens | $1.25/1M tokens |
| Cached input | $0.175/1M tokens | — |
| Output | $14/1M tokens | $10/1M tokens |

While input and output costs have increased alongside the performance gains, a substantial discount for cached inputs has been introduced.

## Migration Notes

- ChatGPT users will be **automatically migrated on February 13**
- GPT-5.1 remains available as a legacy model for **3 months** post-retirement
- API is unaffected for now (separate notice will be provided)
- A coding-optimized **GPT-5.2-Codex** variant is also coming soon

## Sources

- [OpenAI - Introducing GPT-5.2](https://openai.com/index/introducing-gpt-5-2/)
- [OpenAI Help Center - Retiring GPT-4o](https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models)
- [OpenAI - GPT-5 System Card Update](https://openai.com/index/gpt-5-system-card-update-gpt-5-2/)

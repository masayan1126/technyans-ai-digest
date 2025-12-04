# 利用可能なタグ一覧

記事作成時に使用できるタグのリストです。このリストにないタグを使用するとビルドエラーになります。

## 📝 タグ追加方法

新しいタグを追加したい場合は、[src/content/config.ts](./src/content/config.ts) の `commonTags` に追加してください。

## 🏢 企業

- OpenAI
- Google
- Anthropic
- Microsoft
- Microsoft Azure
- Nvidia / NVIDIA
- Meta
- DeepSeek
- Amazon
- DeepMind
- xAI

## 🤖 モデル・プロダクト

- ChatGPT
- Claude / Claude Code / Claude Desktop
- GPT / GPT-4 / GPT-4o / GPT-5 / GPT-5.1 / GPT-5.1 Auto
- Gemini / Gemini 3
- Grok
- LLM / LLaMA
- Sora
- o3 / R1
- AlphaFold
- Haiku
- Codex

## 🔬 技術分野 - AI Core

- AI
- AI Safety / AI安全性
- Multimodal / マルチモーダル
- Reasoning AI / 推論AI / Reasoning / 推論
- Computer Use
- Automation / 自動化 / RPA
- Agent AI / エージェントAI / AI Agents / AIエージェント
- Agentic AI
- Multi-Agent / マルチエージェント
- Coding / コーディング
- AI Coding / AIコーディング
- Open Source / オープンソース
- MoE

## 🎓 技術分野 - Advanced

- Extended Thinking / 拡張思考
- Autonomous AI / 自律AI
- Chain-of-Thought
- Deep Learning / ディープラーニング
- Fine-tuning / ファインチューニング
- Context Window / コンテキストウィンドウ
- Long-text Processing / 長文処理
- Real-time Processing / リアルタイム処理
- Machine Learning / 機械学習
- Natural Language Processing / 自然言語処理
- Large Language Models / 大規模言語モデル

## 🎨 コンテンツ生成

- Video Generation / 動画生成
- Voice AI / 音声AI
- Generative AI / ジェネレーティブAI / 生成AI
- Creative Tools / クリエイティブツール
- Creative AI / 創造的AI
- Image Generation / 画像生成
- Text-to-Image
- AI Art / AI アート

## 💼 ビジネス・エンタープライズ

- Enterprise AI / エンタープライズAI
- AI Investment / Investment / AI投資 / 投資戦略 / Investment Strategy
- Infrastructure / インフラ
- Data Centers / データセンター
- Cost Efficiency / コスト効率
- Low Cost / 低コスト
- Cloud Computing / クラウドコンピューティング
- Startup / スタートアップ
- Industry Analysis / 業界分析

## 🛠️ 開発ツール

- Developer Tools / 開発ツール / 開発者ツール
- Coding Assistant / コーディングアシスタント
- Code Editor / コードエディタ
- IDE
- Cursor
- GitHub Copilot
- Collaboration / コラボレーション
- Composer
- MCP / FastMCP
- Ecosystem / エコシステム

## 📜 政策・社会・ビジネス

- Regulation / 規制
- Governance / ガバナンス
- International Cooperation / 国際協力
- Risk Management / リスク管理
- Bletchley Declaration / Bletchley宣言
- Management Crisis / 経営危機
- Social Features / ソーシャル機能
- Group Chat / グループチャット

## 🏆 市場・競争

- AI Competition / AI競争
- AI Democratization / AI民主化
- AI Revolution / AI革命

## 🌏 地域

- Chinese AI / 中国AI
- China / 中国

## 👤 人物

- Sam Altman
- Geoffrey Hinton
- Demis Hassabis
- Jeff Bezos

## 🔬 科学

- Nobel Prize / ノーベル賞
- Mathematics / 数学

## 🎯 専門アプリケーション

- Cybersecurity / サイバーセキュリティ
- Hacking / ハッキング
- Physical AI / 物理AI
- Mobile Development / モバイル開発
- Weather Prediction / 天気予報
- Energy Trading / エネルギー取引
- Government DX / 行政DX
- Digital Agency / デジタル庁
- Subsidy Search / 補助金検索
- J-Grants / Jグランツ
- Emotional Intelligence / 感情的知性

## 🔧 ハードウェア・プロダクト

- Nano Banana Pro
- Antigravity
- Project Prometheus

## 💻 プログラミング言語・ランタイム

- JavaScript
- TypeScript
- Bun

## 💼 ビジネスイベント

- Acquisition / 買収

## 📌 その他

- テキスト生成

---

## ⚠️ よくあるエラー

### ビルドエラーが発生した場合

```
Invalid enum value. Expected 'OpenAI' | 'Google' | ... received 'TOON'
```

このようなエラーが出た場合、使用したタグがこのリストにありません。

**対処法：**
1. このファイルで適切なタグを探す
2. 新しいタグが必要な場合は `src/content/config.ts` に追加する

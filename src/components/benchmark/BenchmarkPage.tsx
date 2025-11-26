import { useI18n } from '../I18nProvider';
import BenchmarkTable from './BenchmarkTable';
import BenchmarkCard from './BenchmarkCard';

const content = {
  ja: {
    title: 'AIモデルベンチマーク比較',
    description: 'テクにゃん.が最新AIモデルのベンチマークをわかりやすく解説するにゃん！',
    hero: {
      greeting: 'やあ！テクにゃん.だよ！',
      intro:
        'AI業界では、各社が「うちのモデルが最強だにゃ！」って主張してるけど、実際どうなの？って思うよね。ここでは、Gemini 3 Pro、Claude Sonnet 4.5、GPT-5.1といった最新モデルのベンチマーク結果を比較してみるにゃん！',
    },
    whatIsBenchmark: {
      title: 'ベンチマークって何？',
      content:
        'ベンチマークは、AIモデルの性能を測るテストのことだにゃ。人間でいえば、試験みたいなものだね。ただし、ベンチマークのスコアが高いからといって、全ての用途で優れているわけじゃないことに注意だにゃん！',
    },
    categories: {
      title: 'ベンチマークのカテゴリ',
      reasoning: {
        title: '🧠 推論・知識',
        description: '複雑な問題を解いたり、学術的な知識を問うテストだにゃ',
      },
      multimodal: {
        title: '🎨 マルチモーダル理解',
        description: '画像、動画、チャートを理解する能力をテストするにゃん',
      },
      coding: {
        title: '💻 コーディング・開発',
        description: 'プログラミングやソフトウェア開発の能力を測るにゃ',
      },
      agent: {
        title: '🤖 エージェント・ツール使用',
        description: 'ツールを使って複雑なタスクをこなす能力だにゃん',
      },
      knowledge: {
        title: '📚 知識・コンテキスト',
        description: '事実知識や多言語能力、長文理解をテストするにゃ',
      },
    },
    tableSection: {
      title: 'ベンチマーク比較表',
      intro:
        'さて、いよいよ本題だにゃん！下の表で、各モデルのベンチマーク結果を見てみよう。黄色くハイライトされているのが、そのベンチマークで最高のスコアを出したモデルだよ。',
      note: '※一部のベンチマークは現在検証中です。データは各社の公式発表を元にしています。',
    },
    technyanComment: {
      title: 'テクにゃん.のコメント',
      gemini:
        '**Gemini 3 Pro** は本当に凄いにゃ！18項目中14項目で最高スコアを記録してるんだから。特に、ScreenSpot-Pro（画面理解）で72.7%、Vending-Bench（エージェントタスク）で$5,478、長文コンテキスト理解で77.0%という圧倒的なスコアは目を見張るものがあるにゃん。Googleの本気度が伝わってくるね。',
      claude:
        '**Claude Sonnet 4.5** は、実用的なコーディング（SWE-Bench: 77.2%）で唯一トップを獲得したにゃ！Anthropicはソフトウェアエンジニアリングに力を入れてる感じがするね。エージェントツール使用でもGemini 3 Proにほぼ並ぶ84.7%を記録してるから、実務での使いやすさはピカイチかもしれないにゃん。',
      gpt: '**GPT-5.1** は、全体的にバランスが取れたモデルだにゃ。多くのベンチマークで2位または3位をキープしてるから、安定感はあるね。ただ、ScreenSpot-Pro（3.5%）のような視覚理解タスクでは苦戦してるのが気になるところだにゃん。OpenAIには次のアップデートに期待だね！',
      overall:
        '結局のところ、「最強のAI」というのは用途によって変わるんだにゃ。コーディングならClaude、マルチモーダル理解ならGemini、バランス重視ならGPTって感じかな。君が何をしたいかで、選ぶモデルが変わってくるにゃん！',
      closing:
        'AI業界は本当に速いペースで進化してるから、このベンチマークも数ヶ月で古くなっちゃうかもしれないにゃ。でも、それだけ僕たちユーザーにとっては嬉しい競争が起きてるってことだよね。今後も楽しみだにゃん！✨',
    },
    lastUpdated: '最終更新',
    disclaimer: {
      title: '⚠️ 注意事項',
      points: [
        'ベンチマークは特定のタスクにおける性能を測るものであり、全ての使用シナリオを網羅していません',
        '実際の使用感や使いやすさは、スコアだけでは判断できません',
        '一部のベンチマークデータは現在検証中であり、正確性を保証できない場合があります',
        'モデルは定期的にアップデートされるため、最新情報は各社の公式サイトをご確認ください',
      ],
    },
  },
  en: {
    title: 'AI Model Benchmark Comparison',
    description: "Technyan's friendly guide to understanding AI model benchmarks!",
    hero: {
      greeting: "Hi! I'm Technyan!",
      intro:
        'In the AI industry, every company claims "our model is the best!" But what\'s the real story? Here, I\'ll compare benchmark results from the latest models like Gemini 3 Pro, Claude Sonnet 4.5, and GPT-5.1!',
    },
    whatIsBenchmark: {
      title: 'What are Benchmarks?',
      content:
        'Benchmarks are tests that measure AI model performance. Think of them like exams for AI! However, remember that a high benchmark score doesn\'t mean the model is better for all use cases.',
    },
    categories: {
      title: 'Benchmark Categories',
      reasoning: {
        title: '🧠 Reasoning & Knowledge',
        description: 'Tests complex problem-solving and academic knowledge',
      },
      multimodal: {
        title: '🎨 Multimodal Understanding',
        description: 'Tests ability to understand images, videos, and charts',
      },
      coding: {
        title: '💻 Coding & Development',
        description: 'Measures programming and software development capabilities',
      },
      agent: {
        title: '🤖 Agent & Tool Use',
        description: 'Tests ability to use tools and perform complex tasks',
      },
      knowledge: {
        title: '📚 Knowledge & Context',
        description: 'Tests factual knowledge, multilingual abilities, and long-context understanding',
      },
    },
    tableSection: {
      title: 'Benchmark Comparison Table',
      intro:
        "Now for the main event! Check out the table below to see how each model performs. Scores highlighted in yellow represent the best performance for that benchmark.",
      note: '※Some benchmarks are currently under verification. Data is based on official announcements from each company.',
    },
    technyanComment: {
      title: "Technyan's Commentary",
      gemini:
        '**Gemini 3 Pro** is truly impressive! It achieved the highest score in 14 out of 18 benchmarks. Particularly noteworthy are its scores in ScreenSpot-Pro (screen understanding) at 72.7%, Vending-Bench (agent tasks) at $5,478, and long-context understanding at 77.0%. Google really brought their A-game!',
      claude:
        '**Claude Sonnet 4.5** is the only model to top the practical coding benchmark (SWE-Bench: 77.2%)! Anthropic seems to be focusing heavily on software engineering capabilities. With an 84.7% score in agent tool usage, nearly matching Gemini 3 Pro, it might be the most practical for real-world tasks.',
      gpt: '**GPT-5.1** is a well-balanced model overall. It consistently ranks 2nd or 3rd in most benchmarks, showing solid reliability. However, it struggles with visual understanding tasks like ScreenSpot-Pro (3.5%). Looking forward to OpenAI\'s next update!',
      overall:
        'In the end, the "best AI" depends on your use case. For coding, go with Claude. For multimodal understanding, choose Gemini. For balanced performance, pick GPT. Your needs determine the right model!',
      closing:
        'The AI industry evolves so rapidly that these benchmarks might be outdated in a few months. But that\'s exciting—it means there\'s healthy competition benefiting us users! The future looks bright! ✨',
    },
    lastUpdated: 'Last Updated',
    disclaimer: {
      title: '⚠️ Disclaimers',
      points: [
        'Benchmarks measure performance on specific tasks and do not cover all usage scenarios',
        'Real-world usability and user experience cannot be judged by scores alone',
        'Some benchmark data is currently under verification and accuracy cannot be guaranteed',
        'Models are regularly updated; please check official sources for the latest information',
      ],
    },
  },
};

export default function BenchmarkPage() {
  const { locale } = useI18n();
  const t = content[locale];

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div
          className="border-1.5 border-navy bg-yellow-100 p-6 md:p-8 mb-8"
          style={{ borderWidth: '1.5px', boxShadow: '4px 4px 0 #0C2340' }}
        >
          <div className="mb-4 flex justify-center md:justify-start">
            <img
              src="/technyan.webp"
              alt="Technyan"
              className="w-32 h-32 md:w-40 md:h-40 object-contain border-1.5 border-navy bg-cream"
              style={{ borderWidth: '1.5px' }}
            />
          </div>
          <h1 className="font-mono font-bold text-2xl md:text-4xl text-navy mb-4">
            {t.title}
          </h1>
          <div className="font-mono text-navy mb-4">
            <p className="text-lg font-bold mb-2">{t.hero.greeting}</p>
            <p className="text-sm md:text-base leading-relaxed">{t.hero.intro}</p>
          </div>
        </div>

        {/* What is Benchmark Section */}
        <div
          className="border-1.5 border-navy bg-cream p-6 md:p-8 mb-8"
          style={{ borderWidth: '1.5px', boxShadow: '3px 3px 0 #0C2340' }}
        >
          <h2 className="font-mono font-bold text-xl md:text-2xl text-navy mb-4">
            {t.whatIsBenchmark.title}
          </h2>
          <p className="font-mono text-sm md:text-base text-navy leading-relaxed">
            {t.whatIsBenchmark.content}
          </p>
        </div>

        {/* Categories Section */}
        <div
          className="border-1.5 border-navy bg-cream p-6 md:p-8 mb-8"
          style={{ borderWidth: '1.5px', boxShadow: '3px 3px 0 #0C2340' }}
        >
          <h2 className="font-mono font-bold text-xl md:text-2xl text-navy mb-6">
            {t.categories.title}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(t.categories)
              .filter(([key]) => key !== 'title')
              .map(([_, category]: [string, any]) => (
                <div
                  key={category.title}
                  className="border-1.5 border-navy bg-yellow-50 p-4"
                  style={{ borderWidth: '1.5px', boxShadow: '2px 2px 0 #0C2340' }}
                >
                  <h3 className="font-mono font-bold text-navy mb-2">{category.title}</h3>
                  <p className="font-mono text-sm text-navy opacity-80">{category.description}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Benchmark Table Section */}
        <div className="mb-8">
          <h2 className="font-mono font-bold text-xl md:text-2xl text-navy mb-4">
            {t.tableSection.title}
          </h2>
          <p className="font-mono text-sm md:text-base text-navy mb-6 leading-relaxed">
            {t.tableSection.intro}
          </p>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <BenchmarkTable lang={locale} />
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden">
            <BenchmarkCard lang={locale} />
          </div>

          <p className="font-mono text-xs text-navy opacity-70 mt-4">
            {t.tableSection.note}
          </p>
        </div>

        {/* Technyan's Comment Section */}
        <div
          className="border-1.5 border-navy bg-yellow-100 p-6 md:p-8 mb-8"
          style={{ borderWidth: '1.5px', boxShadow: '4px 4px 0 #0C2340' }}
        >
          <h2 className="font-mono font-bold text-xl md:text-2xl text-navy mb-6 flex items-center gap-3">
            <span className="inline-block">
              <img
                src="/technyan.webp"
                alt="Technyan"
                className="w-10 h-10 object-contain border-1.5 border-navy bg-cream"
                style={{ borderWidth: '1.5px' }}
              />
            </span>
            {t.technyanComment.title}
          </h2>
          <div className="font-mono text-sm md:text-base text-navy space-y-4 leading-relaxed">
            <p>{t.technyanComment.gemini}</p>
            <p>{t.technyanComment.claude}</p>
            <p>{t.technyanComment.gpt}</p>
            <p className="font-bold">{t.technyanComment.overall}</p>
            <p>{t.technyanComment.closing}</p>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div
          className="border-1.5 border-navy bg-cream p-6 md:p-8 mb-8"
          style={{ borderWidth: '1.5px', boxShadow: '3px 3px 0 #0C2340' }}
        >
          <h3 className="font-mono font-bold text-lg text-navy mb-4">
            {t.disclaimer.title}
          </h3>
          <ul className="font-mono text-sm text-navy space-y-2 list-disc list-inside">
            {t.disclaimer.points.map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Last Updated */}
        <div className="text-center font-mono text-sm text-navy opacity-70">
          {t.lastUpdated}: {new Date().toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'en-US')}
        </div>
      </div>
    </div>
  );
}

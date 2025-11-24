import React from 'react';
import { useI18n } from '../I18nProvider';

interface TimelineEvent {
  date: string;
  company: string;
  title: string;
  titleJa: string;
  description: string;
  descriptionJa: string;
  icon?: string;
  color: string;
  impact: 'high' | 'medium' | 'low';
}

const timelineEvents: TimelineEvent[] = [
  {
    date: '2025-11-18',
    company: 'Google',
    title: 'Google Releases Gemini 3',
    titleJa: 'Google、Gemini 3をリリース',
    description: 'Google releases Gemini 3, reclaiming the top spot on LMArena benchmark, surpassing Grok 4.1 just 24 hours after its release.',
    descriptionJa: 'GoogleがGemini 3をリリースし、Grok 4.1のリリースからわずか24時間後にLMArenaベンチマークでトップを奪還。',
    icon: '/technyans/webp/busyo/tecnyan-busho8.webp',
    color: '#4285F4',
    impact: 'high',
  },
  {
    date: '2025-11',
    company: 'Microsoft',
    title: 'Microsoft Invests Up to $5B in Anthropic',
    titleJa: 'Microsoft、Anthropicに最大50億ドル投資',
    description: 'Microsoft announces up to $5B investment in Anthropic, integrating Claude AI into Azure AI Foundry, Microsoft 365 Copilot, and GitHub Copilot.',
    descriptionJa: 'MicrosoftがAnthropicに最大50億ドルを投資し、Claude AIをAzure AI Foundry、Microsoft 365 Copilot、GitHub Copilotに統合。',
    icon: '/technyans/webp/busyo/tecnyan-busho4.webp',
    color: '#00A4EF',
    impact: 'high',
  },
  {
    date: '2025-10',
    company: 'OpenAI',
    title: 'Microsoft-OpenAI Relationship Restructured',
    titleJa: 'Microsoft-OpenAI関係が再編',
    description: 'OpenAI reaches $500B valuation post-restructuring. New contract extends Microsoft IP license to 2032 while allowing OpenAI to use other cloud providers.',
    descriptionJa: 'OpenAIが再編後に評価額5,000億ドルに。新契約でMicrosoftのIPライセンスが2032年まで延長される一方、OpenAIは他のクラウドプロバイダーも利用可能に。',
    icon: '/technyans/webp/busyo/tecnyan-busho3.webp',
    color: '#10A37F',
    impact: 'high',
  },
  {
    date: '2025-09',
    company: 'Anthropic',
    title: 'Anthropic Launches Claude Sonnet 4.5',
    titleJa: 'Anthropic、Claude Sonnet 4.5を発表',
    description: 'Claude Sonnet 4.5 achieves 73.3% on SWE-bench coding benchmark and captures 32% of enterprise LLM market share.',
    descriptionJa: 'Claude Sonnet 4.5がSWE-benchコーディングベンチマークで73.3%を達成し、企業向けLLM市場で32%のシェアを獲得。',
    icon: '/technyans/webp/busyo/tecnyan-busho5.webp',
    color: '#D4A373',
    impact: 'high',
  },
  {
    date: '2025-08',
    company: 'OpenAI',
    title: 'OpenAI Releases GPT-5',
    titleJa: 'OpenAI、GPT-5をリリース',
    description: 'GPT-5 integrates reasoning and non-reasoning capabilities. Monthly revenue grows from $300M (Aug 2024) to over $13B annualized.',
    descriptionJa: 'GPT-5が推論機能と非推論機能を統合。月間収益が3億ドル（2024年8月）から年換算130億ドル以上に成長。',
    icon: '/technyans/webp/busyo/tecnyan-busho3.webp',
    color: '#10A37F',
    impact: 'high',
  },
  {
    date: '2024-12',
    company: 'Google',
    title: 'Google Releases Gemini 2.0',
    titleJa: 'Google、Gemini 2.0をリリース',
    description: 'Gemini 2.0 launches with focus on "agentic era". Gemini 2.5 Pro achieves 92% on AIME 2024 benchmark with up to 10M token context window.',
    descriptionJa: 'Gemini 2.0が「エージェント時代」に焦点を当ててリリース。Gemini 2.5 ProがAIME 2024ベンチマークで92%を達成し、最大1,000万トークンのコンテキストウィンドウを実現。',
    icon: '/technyans/webp/busyo/tecnyan-busho8.webp',
    color: '#4285F4',
    impact: 'high',
  },
];

const AIImpactTimeline: React.FC = () => {
  const { locale } = useI18n();

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'border-red-500';
      case 'medium':
        return 'border-yellow-500';
      case 'low':
        return 'border-green-500';
      default:
        return 'border-navy';
    }
  };

  const formatDate = (dateString: string) => {
    if (dateString.length === 7) {
      // Format: 2025-11
      const [year, month] = dateString.split('-');
      return locale === 'ja' ? `${year}年${month}月` : `${year}/${month}`;
    }
    // Format: 2025-11-18
    const date = new Date(dateString);
    if (locale === 'ja') {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="w-full">
      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy opacity-20" />

        {/* Timeline Events */}
        <div className="space-y-8 md:space-y-12">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } items-start md:items-center gap-4 md:gap-8`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 relative z-10 ml-2 md:ml-0">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 ${getImpactColor(
                    event.impact
                  )} bg-cream overflow-hidden shadow-lg`}
                >
                  {event.icon ? (
                    <img
                      src={event.icon}
                      alt={locale === 'ja' ? event.titleJa : event.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center font-bold text-white text-lg"
                      style={{ backgroundColor: event.color }}
                    >
                      {event.company[0]}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } ml-16 md:ml-0`}
              >
                <div className="bg-cream border-2 border-navy rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Date */}
                  <div className="text-xs md:text-sm font-bold text-navy opacity-60 mb-2">
                    {formatDate(event.date)}
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-navy mb-2">
                    {locale === 'ja' ? event.titleJa : event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {locale === 'ja' ? event.descriptionJa : event.description}
                  </p>

                  {/* Company Badge */}
                  <div className="mt-3">
                    <span
                      className="inline-block px-2 py-1 text-xs font-semibold rounded"
                      style={{ backgroundColor: event.color, color: 'white' }}
                    >
                      {event.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Spacer for desktop alignment */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIImpactTimeline;

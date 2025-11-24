import React, { useState, useEffect } from 'react';
import { useI18n } from '../I18nProvider';

interface AICompany {
  id: string;
  name: string;
  nameJa: string;
  description: string;
  descriptionJa: string;
  category: 'bigtech' | 'startup' | 'research';
  flagship: string;
  flagshipJa: string;
  position: { x: number; y: number };
  color: string;
  icon: string; // busho warrior icon image path
  size: number; // icon size in pixels
}

interface Investment {
  from: string;
  to: string;
  amount: string;
  amountJa: string;
  type: 'investment' | 'acquisition' | 'partnership';
}

const companies: AICompany[] = [
  // Big Tech
  {
    id: 'microsoft',
    name: 'Microsoft',
    nameJa: 'Microsoft',
    description: 'Mighty daimyo with dual-blade strategy: $13B+ to OpenAI, $5B to Anthropic',
    descriptionJa: 'OpenAIに130億ドル以上、Anthropicに50億ドルを投じる二刀流戦略の強大な大名',
    category: 'bigtech',
    flagship: 'Azure AI, Copilot (800億ドルAI投資)',
    flagshipJa: 'Azure AI、Copilot（800億ドルAI投資）',
    position: { x: 12, y: 25 },
    color: '#00A4EF',
    icon: '/technyans/png/busyo/tecnyan-busho4.png',
    size: 200,
  },
  {
    id: 'google',
    name: 'Google (Alphabet)',
    nameJa: 'Google (Alphabet)',
    description: 'DeepMind lord with 1B users, investing $3B+ in Anthropic clan',
    descriptionJa: 'DeepMind配下、10億ユーザーを擁し、Anthropic勢力に30億ドル以上投資する大名',
    category: 'bigtech',
    flagship: 'Gemini 2.5 Pro (10億ユーザー)',
    flagshipJa: 'Gemini 2.5 Pro（10億ユーザー）',
    position: { x: 85, y: 28 },
    color: '#4285F4',
    icon: '/technyans/png/busyo/tecnyan-busho8.png',
    size: 300,
  },
  {
    id: 'amazon',
    name: 'Amazon',
    nameJa: 'Amazon',
    description: 'Powerful daimyo with largest single investment: $8B to Anthropic',
    descriptionJa: 'Anthropic勢力に80億ドルという最大の軍資金を投じる強力な大名',
    category: 'bigtech',
    flagship: 'AWS Bedrock (数万社が利用)',
    flagshipJa: 'AWS Bedrock（数万社が利用）',
    position: { x: 85, y: 80 },
    color: '#FF9900',
    icon: '/technyans/png/busyo/tecnyan-busho9.png',
    size: 190,
  },
  {
    id: 'meta',
    name: 'Meta',
    nameJa: 'Meta',
    description: 'Open-source champion with 650M+ Llama downloads',
    descriptionJa: '6.5億回ダウンロードのオープンソース戦略で独自の天下統一を目指す大名',
    category: 'bigtech',
    flagship: 'Llama 4 (6.5億DL)',
    flagshipJa: 'Llama 4（6.5億DL）',
    position: { x: 38, y: 87 },
    color: '#0866FF',
    icon: '/technyans/png/busyo/tecnyan-busho2.png',
    size: 110,
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    nameJa: 'NVIDIA',
    description: 'GPU weapon forge master, investing $10B in Anthropic',
    descriptionJa: 'GPU武器鍛冶の棟梁、Anthropic勢力に100億ドル投資し全勢力に影響力',
    category: 'bigtech',
    flagship: 'H100, Trainium (AI加速器)',
    flagshipJa: 'H100、Trainium（AI加速器）',
    position: { x: 35, y: 15 },
    color: '#76B900',
    icon: '/technyans/png/busyo/tecnyan-busho6.png',
    size: 110,
  },
  // Startups
  {
    id: 'openai',
    name: 'OpenAI',
    nameJa: 'OpenAI',
    description: 'Dominant clan with 700M weekly users, valued at $500B',
    descriptionJa: 'ChatGPTで週間7億ユーザー、評価額5,000億ドルの圧倒的勢力',
    category: 'startup',
    flagship: 'ChatGPT, GPT-5 (週間7億ユーザー)',
    flagshipJa: 'ChatGPT、GPT-5（週間7億ユーザー）',
    position: { x: 28, y: 55 },
    color: '#10A37F',
    icon: '/technyans/png/busyo/tecnyan-busho3.png',
    size: 280,
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    nameJa: 'Anthropic',
    description: 'Enterprise champion with 32% market share, backed by 4 tech lords',
    descriptionJa: '企業市場32%シェア、Google・Amazon・Microsoft・Nvidia 4大名の支援を受ける稀有な勢力',
    category: 'startup',
    flagship: 'Claude Sonnet 4.5 (企業市場32%)',
    flagshipJa: 'Claude Sonnet 4.5（企業市場32%）',
    position: { x: 57, y: 48 },
    color: '#D4A373',
    icon: '/technyans/png/busyo/tecnyan-busho5.png',
    size: 300,
  },
  {
    id: 'xai',
    name: 'xAI',
    nameJa: 'xAI',
    description: 'Elon Musk\'s independent clan, valued at $50B',
    descriptionJa: 'Elon Musk率いる独立勢力、評価額500億ドルでGrokを展開',
    category: 'startup',
    flagship: 'Grok (評価額500億ドル)',
    flagshipJa: 'Grok（評価額500億ドル）',
    position: { x: 60, y: 87 },
    color: '#000000',
    icon: '/technyans/png/busyo/tecnyan-busho7.png',
    size: 110,
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    nameJa: 'Mistral AI',
    description: 'Europe\'s strongest AI force, valued at $13.7B',
    descriptionJa: '欧州最強のAI勢力、評価額137億ドルでオープンソース戦略を展開',
    category: 'startup',
    flagship: 'Mistral (評価額137億ドル)',
    flagshipJa: 'Mistral（評価額137億ドル）',
    position: { x: 8, y: 68 },
    color: '#F2A900',
    icon: '/technyans/png/busyo/tecnyan-busho1.png',
    size: 110,
  },
];

const investments: Investment[] = [
  {
    from: 'microsoft',
    to: 'openai',
    amount: '$13B+',
    amountJa: '130億ドル+',
    type: 'investment',
  },
  {
    from: 'microsoft',
    to: 'anthropic',
    amount: '$5B',
    amountJa: '50億ドル',
    type: 'investment',
  },
  {
    from: 'google',
    to: 'anthropic',
    amount: '$3B+',
    amountJa: '30億ドル+',
    type: 'investment',
  },
  {
    from: 'amazon',
    to: 'anthropic',
    amount: '$8B',
    amountJa: '80億ドル',
    type: 'investment',
  },
  {
    from: 'nvidia',
    to: 'anthropic',
    amount: '$10B',
    amountJa: '100億ドル',
    type: 'investment',
  },
  {
    from: 'microsoft',
    to: 'mistral',
    amount: 'Partnership',
    amountJa: 'パートナーシップ',
    type: 'partnership',
  },
];

const AILandscapeMap: React.FC = () => {
  const { locale } = useI18n();
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
  const [scaleFactor, setScaleFactor] = useState(1);

  // Responsive scaling based on window size
  useEffect(() => {
    const updateScaleFactor = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setScaleFactor(0.35); // Small phones: 35%
      } else if (width < 640) {
        setScaleFactor(0.45); // Large phones: 45%
      } else if (width < 1024) {
        setScaleFactor(0.7); // Tablets: 70%
      } else {
        setScaleFactor(1); // Desktop: 100%
      }
    };

    updateScaleFactor();
    window.addEventListener('resize', updateScaleFactor);
    return () => window.removeEventListener('resize', updateScaleFactor);
  }, []);

  const getRelatedInvestments = (companyId: string) => {
    return investments.filter(
      (inv) => inv.from === companyId || inv.to === companyId
    );
  };

  const isInvestmentActive = (investment: Investment) => {
    if (!selectedCompany && !hoveredCompany) return true;
    const activeCompany = selectedCompany || hoveredCompany;
    return investment.from === activeCompany || investment.to === activeCompany;
  };

  return (
    <div className="w-full">
      {/* Map Container */}
      <div className="relative w-full bg-cream border-4 border-navy rounded-lg overflow-visible shadow-2xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,246,208,1) 0%, rgba(240,230,190,1) 100%)' }}>
        {/* Background layer with clipping */}
        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          {/* Japanese Paper Texture Background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="washi-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3" />
                  <circle cx="30" cy="25" r="1.5" fill="currentColor" opacity="0.2" />
                  <circle cx="50" cy="15" r="1" fill="currentColor" opacity="0.25" />
                  <circle cx="20" cy="40" r="0.8" fill="currentColor" opacity="0.3" />
                  <circle cx="45" cy="50" r="1.2" fill="currentColor" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#washi-pattern)" />
            </svg>
          </div>

          {/* Investment Lines */}
          <svg className={`absolute inset-0 transition-opacity ${scaleFactor < 0.7 ? 'opacity-30' : ''}`} width="100%" height="100%">
            {investments.map((investment, idx) => {
              const fromCompany = companies.find((c) => c.id === investment.from);
              const toCompany = companies.find((c) => c.id === investment.to);
              if (!fromCompany || !toCompany) return null;

              const active = isInvestmentActive(investment);
              const strokeWidth = active ? 3 : 1.5;
              const opacity = active ? 0.8 : 0.3;

              return (
                <g key={idx}>
                  <line
                    x1={`${fromCompany.position.x}%`}
                    y1={`${fromCompany.position.y}%`}
                    x2={`${toCompany.position.x}%`}
                    y2={`${toCompany.position.y}%`}
                    stroke={fromCompany.color}
                    strokeWidth={strokeWidth}
                    opacity={opacity}
                    strokeDasharray={investment.type === 'partnership' ? '5,5' : 'none'}
                  />
                  <circle
                    cx={`${toCompany.position.x}%`}
                    cy={`${toCompany.position.y}%`}
                    r="4"
                    fill={fromCompany.color}
                    opacity={opacity}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Company Nodes */}
        {companies.map((company) => {
          const isSelected = selectedCompany === company.id;
          const isHovered = hoveredCompany === company.id;
          const isActive = !selectedCompany && !hoveredCompany;
          const shouldHighlight = isSelected || isHovered || isActive;

          return (
            <div
              key={company.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200"
              style={{
                left: `${company.position.x}%`,
                top: `${company.position.y}%`,
                zIndex: isSelected || isHovered ? 20 : 10,
              }}
              onClick={() => setSelectedCompany(isSelected ? null : company.id)}
              onMouseEnter={() => setHoveredCompany(company.id)}
              onMouseLeave={() => setHoveredCompany(null)}
            >
              <div
                className={`
                  flex flex-col items-center
                  ${scaleFactor < 0.5 ? 'gap-0.5' : 'gap-2'}
                  transition-all duration-200
                  ${shouldHighlight ? 'opacity-100 scale-100' : 'opacity-60 scale-90'}
                  ${isSelected || isHovered ? 'scale-110' : ''}
                `}
              >
                {/* Warrior Icon */}
                <div className={`
                  rounded-full overflow-hidden shadow-lg border-4
                  transition-all duration-200
                  ${isSelected || isHovered ? 'border-yellow-600 shadow-2xl' : 'border-navy'}
                `}
                style={{ width: `${company.size * scaleFactor}px`, height: `${company.size * scaleFactor}px` }}>
                  <img
                    src={company.icon}
                    alt={locale === 'ja' ? company.nameJa : company.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name Banner */}
                <div
                  className={`
                    ${scaleFactor < 0.5 ? 'px-1 py-0.5' : 'px-2 sm:px-3 py-1 sm:py-1.5'}
                    rounded border-2 shadow-md
                    ${isSelected || isHovered ? 'border-yellow-600' : 'border-navy'}
                  `}
                  style={{
                    backgroundColor: '#FFF6D0',
                    fontSize: scaleFactor < 0.5
                      ? '0.5rem'  // 8px for ultra-small
                      : scaleFactor < 0.7
                        ? '0.625rem' // 10px for small
                        : (company.size > 120 ? '0.875rem' : '0.75rem'),
                  }}
                >
                  <div className={`text-navy font-bold text-center ${scaleFactor >= 0.7 ? 'whitespace-nowrap' : ''}`}>
                    {locale === 'ja' ? company.nameJa : company.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Technyan's Hover Comment - Floating near warrior */}
        {hoveredCompany && !selectedCompany && (() => {
          const company = companies.find((c) => c.id === hoveredCompany);
          if (!company) return null;

          // Determine position: if x < 50, show on right; otherwise show on left
          const showOnRight = company.position.x < 50;

          // Calculate offset distance (half of icon size + some spacing)
          const offsetDistance = (company.size * scaleFactor / 2) + (scaleFactor < 0.7 ? 10 : 20);

          // Responsive max width
          const maxWidth = scaleFactor < 0.7 ? '90vw' : '280px';

          return (
            <div
              className="absolute z-30 pointer-events-none animate-bounce-in"
              style={{
                left: `calc(${company.position.x}% ${showOnRight ? '+' : '-'} ${offsetDistance}px)`,
                top: `${company.position.y}%`,
                transform: `translateY(-50%)`,
                maxWidth,
              }}
            >
              <div className="bg-cream border-2 border-navy px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(12,35,64,1)] flex items-center gap-2 sm:gap-3">
                {/* Technyan Icon */}
                <div className="flex-shrink-0 w-8 h-8 bg-cream border-2 border-navy rounded-full overflow-hidden">
                  <img
                    src="/technyan.webp"
                    alt="Technyan"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Comment Text */}
                <p className="text-xs md:text-sm font-medium text-navy leading-snug flex-1">
                  {(() => {
                    if (locale === 'ja') {
                      switch (company.id) {
                        case 'microsoft':
                          return 'OpenAIに130億ドル以上、Anthropicに50億ドルを投資する二刀流戦略の大名だにゃん！';
                        case 'google':
                          return 'Gemini 2.5 Proで10億ユーザー！Anthropicにも30億ドル以上投資しているにゃん！';
                        case 'amazon':
                          return 'Anthropicに80億ドルという最大の軍資金を投じる強力な大名だにゃん！';
                        case 'meta':
                          return 'Llama 4が6.5億回ダウンロード！オープンソース戦略で独自の道を行く大名だにゃん！';
                        case 'nvidia':
                          return 'GPU武器鍛冶の棟梁！Anthropicに100億ドル投資して全勢力に影響力を持つにゃん！';
                        case 'openai':
                          return 'ChatGPTで週間7億ユーザー！評価額5,000億ドルのAI天下の覇者候補だにゃん！';
                        case 'anthropic':
                          return '企業市場32%シェア！Google・Amazon・Microsoft・Nvidia 4大名の支援を受ける稀有な勢力だにゃん！';
                        case 'xai':
                          return 'Elon Musk率いる独立勢力！評価額500億ドルでGrokを展開しているにゃん！';
                        case 'mistral':
                          return '欧州最強のAI勢力！評価額137億ドルでオープンソース戦略を展開だにゃん！';
                        default:
                          return `${company.nameJa}は${company.flagshipJa}を開発・提供しているにゃん！`;
                      }
                    } else {
                      switch (company.id) {
                        case 'microsoft':
                          return 'Dual-blade strategy: $13B+ to OpenAI, $5B to Anthropic, nya!';
                        case 'google':
                          return 'Gemini 2.5 Pro with 1B users! Also investing $3B+ in Anthropic, nya!';
                        case 'amazon':
                          return 'Largest single investment: $8B to Anthropic, nya!';
                        case 'meta':
                          return 'Llama 4 with 650M+ downloads! Open-source champion, nya!';
                        case 'nvidia':
                          return 'GPU forge master! $10B investment in Anthropic, nya!';
                        case 'openai':
                          return 'ChatGPT with 700M weekly users! Valued at $500B, nya!';
                        case 'anthropic':
                          return '32% enterprise market share! Backed by 4 tech lords, nya!';
                        case 'xai':
                          return 'Elon Musk\'s independent force! Valued at $50B, nya!';
                        case 'mistral':
                          return 'Europe\'s strongest AI! Valued at $13.7B, nya!';
                        default:
                          return `${company.name} develops ${company.flagship}, nya!`;
                      }
                    }
                  })()}
                </p>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Company Details Panel */}
      {selectedCompany && (
        <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-white border-2 border-navy rounded-lg shadow-lg">
          {(() => {
            const company = companies.find((c) => c.id === selectedCompany);
            if (!company) return null;

            const relatedInvestments = getRelatedInvestments(selectedCompany);
            const investing = relatedInvestments.filter((inv) => inv.from === selectedCompany);
            const receiving = relatedInvestments.filter((inv) => inv.to === selectedCompany);

            return (
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-navy">
                    {locale === 'ja' ? company.nameJa : company.name}
                  </h3>
                  <button
                    onClick={() => setSelectedCompany(null)}
                    className="text-navy hover:text-gray-600 text-xl sm:text-2xl"
                  >
                    ×
                  </button>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  {locale === 'ja' ? company.descriptionJa : company.description}
                </p>
                <div className="mb-2 text-sm sm:text-base">
                  <span className="font-semibold text-navy">
                    {locale === 'ja' ? '主力製品:' : 'Flagship:'}
                  </span>{' '}
                  {locale === 'ja' ? company.flagshipJa : company.flagship}
                </div>

                {/* Key Stats Section */}
                <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-cream border-2 border-navy rounded-lg">
                  <h4 className="font-semibold text-navy mb-1.5 sm:mb-2 text-xs sm:text-sm">
                    {locale === 'ja' ? '📊 戦力データ' : '📊 Battle Stats'}
                  </h4>
                  <div className="text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                    {(() => {
                      switch (company.id) {
                        case 'microsoft':
                          return locale === 'ja' ? (
                            <>
                              <div>• AI投資: 800億ドル（2026会計年度）</div>
                              <div>• OpenAI株式: 27%保有（評価額1,350億ドル相当）</div>
                              <div>• 戦略: 二刀流（OpenAI + Anthropic）</div>
                            </>
                          ) : (
                            <>
                              <div>• AI Investment: $80B (FY2026)</div>
                              <div>• OpenAI Stake: 27% (valued at $135B)</div>
                              <div>• Strategy: Dual-blade (OpenAI + Anthropic)</div>
                            </>
                          );
                        case 'google':
                          return locale === 'ja' ? (
                            <>
                              <div>• ユーザー数: 10億人（Gemini）</div>
                              <div>• AI投資: 910-930億ドル（2025年）</div>
                              <div>• Anthropic株式: 約10%保有</div>
                            </>
                          ) : (
                            <>
                              <div>• Users: 1B (Gemini)</div>
                              <div>• AI Investment: $91-93B (2025)</div>
                              <div>• Anthropic Stake: ~10%</div>
                            </>
                          );
                        case 'amazon':
                          return locale === 'ja' ? (
                            <>
                              <div>• Anthropic投資: 80億ドル（最大規模）</div>
                              <div>• AI投資: 1,250億ドル（2025年）</div>
                              <div>• Bedrock顧客: 数万社</div>
                            </>
                          ) : (
                            <>
                              <div>• Anthropic Investment: $8B (largest)</div>
                              <div>• AI Investment: $125B (2025)</div>
                              <div>• Bedrock Customers: Tens of thousands</div>
                            </>
                          );
                        case 'meta':
                          return locale === 'ja' ? (
                            <>
                              <div>• Llamaダウンロード: 6.5億回以上</div>
                              <div>• AI投資: 600-650億ドル（2025年）</div>
                              <div>• Meta AIユーザー: 月間6億人近く</div>
                            </>
                          ) : (
                            <>
                              <div>• Llama Downloads: 650M+</div>
                              <div>• AI Investment: $60-65B (2025)</div>
                              <div>• Meta AI Users: ~600M monthly</div>
                            </>
                          );
                        case 'nvidia':
                          return locale === 'ja' ? (
                            <>
                              <div>• GPU市場: 圧倒的シェア</div>
                              <div>• Anthropic投資: 最大100億ドル</div>
                              <div>• 戦略投資: 多数のAIスタートアップ</div>
                            </>
                          ) : (
                            <>
                              <div>• GPU Market: Dominant share</div>
                              <div>• Anthropic Investment: Up to $10B</div>
                              <div>• Strategic Investments: Many AI startups</div>
                            </>
                          );
                        case 'openai':
                          return locale === 'ja' ? (
                            <>
                              <div>• ユーザー数: 週間7億人</div>
                              <div>• 評価額: 5,000億ドル（2025年10月）</div>
                              <div>• 総資金調達: 579億ドル（11ラウンド）</div>
                            </>
                          ) : (
                            <>
                              <div>• Users: 700M weekly</div>
                              <div>• Valuation: $500B (Oct 2025)</div>
                              <div>• Total Raised: $57.9B (11 rounds)</div>
                            </>
                          );
                        case 'anthropic':
                          return locale === 'ja' ? (
                            <>
                              <div>• 企業市場シェア: 32%（2024年）</div>
                              <div>• 評価額: 約3,500億ドル（2025年11月）</div>
                              <div>• 総資金調達: 143億ドル以上</div>
                            </>
                          ) : (
                            <>
                              <div>• Enterprise Market Share: 32% (2024)</div>
                              <div>• Valuation: ~$350B (Nov 2025)</div>
                              <div>• Total Raised: $14.3B+</div>
                            </>
                          );
                        case 'xai':
                          return locale === 'ja' ? (
                            <>
                              <div>• 評価額: 500億ドル（2024年11月）</div>
                              <div>• 総資金調達: 120億ドル（2024年）</div>
                              <div>• 特徴: X（旧Twitter）データで訓練</div>
                            </>
                          ) : (
                            <>
                              <div>• Valuation: $50B (Nov 2024)</div>
                              <div>• Total Raised: $12B (2024)</div>
                              <div>• Feature: Trained on X (Twitter) data</div>
                            </>
                          );
                        case 'mistral':
                          return locale === 'ja' ? (
                            <>
                              <div>• 評価額: 約137億ドル（2025年9月）</div>
                              <div>• 総資金調達: 30.5-31.9億ドル</div>
                              <div>• 地位: 欧州で最も価値の高いAIスタートアップ</div>
                            </>
                          ) : (
                            <>
                              <div>• Valuation: ~$13.7B (Sep 2025)</div>
                              <div>• Total Raised: $3.05-3.19B</div>
                              <div>• Status: Europe's most valuable AI startup</div>
                            </>
                          );
                        default:
                          return null;
                      }
                    })()}
                  </div>
                </div>

                {investing.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-navy mb-2">
                      {locale === 'ja' ? '⚔️ 支援同盟先:' : '⚔️ Allied Clans:'}
                    </h4>
                    <ul className="space-y-2">
                      {investing.map((inv, idx) => {
                        const target = companies.find((c) => c.id === inv.to);
                        return (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="text-2xl">→</span>
                            <span className="font-medium">
                              {locale === 'ja' ? target?.nameJa : target?.name}
                            </span>
                            <span className="text-gray-600">
                              ({locale === 'ja' ? inv.amountJa : inv.amount})
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {receiving.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-navy mb-2">
                      {locale === 'ja' ? '🏯 支援大名:' : '🏯 Backed by Lords:'}
                    </h4>
                    <ul className="space-y-2">
                      {receiving.map((inv, idx) => {
                        const source = companies.find((c) => c.id === inv.from);
                        return (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="text-2xl">←</span>
                            <span className="font-medium">
                              {locale === 'ja' ? source?.nameJa : source?.name}
                            </span>
                            <span className="text-gray-600">
                              ({locale === 'ja' ? inv.amountJa : inv.amount})
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* Technyan's Hover Tooltip */}
      {hoveredCompany && !selectedCompany && (
        <div className="mt-6 bg-gradient-to-r from-amber-50 to-yellow-50 border-3 border-navy rounded-lg p-5 shadow-lg animate-fade-in">
          <div className="flex items-start space-x-3">
            <div className="text-3xl">🐱💭</div>
            <div className="flex-1">
              {(() => {
                const company = companies.find((c) => c.id === hoveredCompany);
                if (!company) return null;

                return (
                  <div>
                    <h4 className="font-bold text-navy mb-1 text-base">
                      {locale === 'ja'
                        ? `${company.nameJa}の主力AI`
                        : `${company.name}'s Flagship AI`}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-semibold text-navy">
                        {locale === 'ja' ? company.flagshipJa : company.flagship}
                      </span>
                      {locale === 'ja'
                        ? 'を開発・提供しているにゃん！'
                        : ' - powered by this clan, nya!'}
                    </p>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Instruction */}
      <div className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-600">
        {scaleFactor < 0.7 ? (
          locale === 'ja' ? '💡 タップで詳細表示' : '💡 Tap for details'
        ) : (
          locale === 'ja'
            ? '💡 武将にカーソルを合わせてテクにゃんの解説を見る・クリックして詳細情報を表示'
            : '💡 Hover over warriors for Technyan\'s insights・Click for details'
        )}
      </div>
    </div>
  );
};

export default AILandscapeMap;

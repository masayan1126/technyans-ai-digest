import React, { useState } from 'react';
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
    description: 'Mighty daimyo backing OpenAI and other rising clans',
    descriptionJa: 'OpenAIなど新興勢力を支援する強大な大名',
    category: 'bigtech',
    flagship: 'Azure AI, Copilot',
    flagshipJa: 'Azure AI、Copilot',
    position: { x: 12, y: 25 },
    color: '#00A4EF',
    icon: '/technyans/png/busyo/tecnyan-busho4.png',
    size: 200,
  },
  {
    id: 'google',
    name: 'Google (Alphabet)',
    nameJa: 'Google (Alphabet)',
    description: 'DeepMind\'s lord, supporting Anthropic clan',
    descriptionJa: 'DeepMind配下の大名、Anthropic勢力を支援',
    category: 'bigtech',
    flagship: 'Gemini, DeepMind',
    flagshipJa: 'Gemini、DeepMind',
    position: { x: 85, y: 28 },
    color: '#4285F4',
    icon: '/technyans/png/busyo/tecnyan-busho8.png',
    size: 300,
  },
  {
    id: 'amazon',
    name: 'Amazon',
    nameJa: 'Amazon',
    description: 'Powerful daimyo allied with Anthropic',
    descriptionJa: 'Anthropicと同盟を結ぶ強力な大名',
    category: 'bigtech',
    flagship: 'AWS AI, Bedrock',
    flagshipJa: 'AWS AI、Bedrock',
    position: { x: 85, y: 80 },
    color: '#FF9900',
    icon: '/technyans/png/busyo/tecnyan-busho9.png',
    size: 190,
  },
  {
    id: 'meta',
    name: 'Meta',
    nameJa: 'Meta',
    description: 'Daimyo championing open-source AI path',
    descriptionJa: 'オープンソースAIを掲げる大名',
    category: 'bigtech',
    flagship: 'Llama',
    flagshipJa: 'Llama',
    position: { x: 38, y: 87 },
    color: '#0866FF',
    icon: '/technyans/png/busyo/tecnyan-busho2.png',
    size: 110,
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    nameJa: 'NVIDIA',
    description: 'AI weapon forge master, arming multiple clans',
    descriptionJa: 'AI武器鍛冶の棟梁、多数の勢力に武器供給',
    category: 'bigtech',
    flagship: 'CUDA, H100',
    flagshipJa: 'CUDA、H100',
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
    description: 'Rising clan wielding ChatGPT, allied with Microsoft',
    descriptionJa: 'ChatGPTを操る新興勢力、Microsoft同盟',
    category: 'startup',
    flagship: 'ChatGPT, GPT-4',
    flagshipJa: 'ChatGPT、GPT-4',
    position: { x: 28, y: 55 },
    color: '#10A37F',
    icon: '/technyans/png/busyo/tecnyan-busho3.png',
    size: 280,
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    nameJa: 'Anthropic',
    description: 'Claude clan, supported by Google & Amazon lords',
    descriptionJa: 'Claude勢力、Google・Amazon両大名の支援を受ける',
    category: 'startup',
    flagship: 'Claude',
    flagshipJa: 'Claude',
    position: { x: 57, y: 48 },
    color: '#D4A373',
    icon: '/technyans/png/busyo/tecnyan-busho5.png',
    size: 300,
  },
  {
    id: 'xai',
    name: 'xAI',
    nameJa: 'xAI',
    description: 'Elon Musk\'s independent warrior clan',
    descriptionJa: 'Elon Muskが率いる独立勢力',
    category: 'startup',
    flagship: 'Grok',
    flagshipJa: 'Grok',
    position: { x: 60, y: 87 },
    color: '#000000',
    icon: '/technyans/png/busyo/tecnyan-busho7.png',
    size: 110,
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    nameJa: 'Mistral AI',
    description: 'European rising force, allied with Microsoft',
    descriptionJa: 'ヨーロッパの新興勢力、Microsoft同盟',
    category: 'startup',
    flagship: 'Mistral',
    flagshipJa: 'Mistral',
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
    from: 'google',
    to: 'anthropic',
    amount: '$2.3B',
    amountJa: '23億ドル',
    type: 'investment',
  },
  {
    from: 'amazon',
    to: 'anthropic',
    amount: '$4B',
    amountJa: '40億ドル',
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
      <div className="relative w-full bg-cream border-4 border-navy rounded-lg overflow-hidden shadow-2xl" style={{ height: '700px', backgroundImage: 'radial-gradient(circle, rgba(255,246,208,1) 0%, rgba(240,230,190,1) 100%)' }}>
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
        <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
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
                  flex flex-col items-center gap-2
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
                style={{ width: `${company.size}px`, height: `${company.size}px` }}>
                  <img
                    src={company.icon}
                    alt={locale === 'ja' ? company.nameJa : company.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name Banner */}
                <div
                  className={`
                    px-3 py-1.5 rounded border-2 shadow-md
                    ${isSelected || isHovered ? 'border-yellow-600' : 'border-navy'}
                  `}
                  style={{
                    backgroundColor: '#FFF6D0',
                    fontSize: company.size > 120 ? '0.875rem' : '0.75rem',
                  }}
                >
                  <div className="text-navy font-bold whitespace-nowrap text-center">
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
          const offsetDistance = (company.size / 2) + 20; // 20px spacing from icon edge

          return (
            <div
              className="absolute z-30 pointer-events-none animate-bounce-in"
              style={{
                left: `calc(${company.position.x}% ${showOnRight ? '+' : '-'} ${offsetDistance}px)`,
                top: `${company.position.y}%`,
                transform: `translateY(-50%)`,
                maxWidth: '280px',
              }}
            >
              <div className="bg-cream border-2 border-navy px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(12,35,64,1)] flex items-center gap-3">
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
                  {locale === 'ja'
                    ? `${company.nameJa}は${company.flagshipJa}を開発・提供しているにゃん！`
                    : `${company.name} develops ${company.flagship}, nya!`}
                </p>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Company Details Panel */}
      {selectedCompany && (
        <div className="mt-6 p-6 bg-white border-2 border-navy rounded-lg shadow-lg">
          {(() => {
            const company = companies.find((c) => c.id === selectedCompany);
            if (!company) return null;

            const relatedInvestments = getRelatedInvestments(selectedCompany);
            const investing = relatedInvestments.filter((inv) => inv.from === selectedCompany);
            const receiving = relatedInvestments.filter((inv) => inv.to === selectedCompany);

            return (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-navy">
                    {locale === 'ja' ? company.nameJa : company.name}
                  </h3>
                  <button
                    onClick={() => setSelectedCompany(null)}
                    className="text-navy hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-700 mb-4">
                  {locale === 'ja' ? company.descriptionJa : company.description}
                </p>
                <div className="mb-2">
                  <span className="font-semibold text-navy">
                    {locale === 'ja' ? '主力製品:' : 'Flagship:'}
                  </span>{' '}
                  {locale === 'ja' ? company.flagshipJa : company.flagship}
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
      <div className="mt-4 text-center text-sm text-gray-600">
        {locale === 'ja'
          ? '💡 武将にカーソルを合わせてテクにゃんの解説を見る・クリックして詳細情報を表示'
          : '💡 Hover over warriors for Technyan\'s insights・Click for details'}
      </div>
    </div>
  );
};

export default AILandscapeMap;

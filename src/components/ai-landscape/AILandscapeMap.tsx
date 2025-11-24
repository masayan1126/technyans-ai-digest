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
    description: 'Major investor in OpenAI and other AI companies',
    descriptionJa: 'OpenAIなど多数のAI企業への主要投資家',
    category: 'bigtech',
    flagship: 'Azure AI, Copilot',
    flagshipJa: 'Azure AI、Copilot',
    position: { x: 20, y: 30 },
    color: '#00A4EF',
  },
  {
    id: 'google',
    name: 'Google (Alphabet)',
    nameJa: 'Google (Alphabet)',
    description: 'Owner of DeepMind, major investor in Anthropic',
    descriptionJa: 'DeepMindの親会社、Anthropicへの主要投資家',
    category: 'bigtech',
    flagship: 'Gemini, DeepMind',
    flagshipJa: 'Gemini、DeepMind',
    position: { x: 70, y: 25 },
    color: '#4285F4',
  },
  {
    id: 'amazon',
    name: 'Amazon',
    nameJa: 'Amazon',
    description: 'Major investor in Anthropic',
    descriptionJa: 'Anthropicへの主要投資家',
    category: 'bigtech',
    flagship: 'AWS AI, Bedrock',
    flagshipJa: 'AWS AI、Bedrock',
    position: { x: 75, y: 65 },
    color: '#FF9900',
  },
  {
    id: 'meta',
    name: 'Meta',
    nameJa: 'Meta',
    description: 'Open source AI leader',
    descriptionJa: 'オープンソースAIのリーダー',
    category: 'bigtech',
    flagship: 'Llama',
    flagshipJa: 'Llama',
    position: { x: 15, y: 70 },
    color: '#0866FF',
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    nameJa: 'NVIDIA',
    description: 'AI chip leader, investor in multiple AI startups',
    descriptionJa: 'AIチップのリーダー、多数のAI企業への投資家',
    category: 'bigtech',
    flagship: 'CUDA, H100',
    flagshipJa: 'CUDA、H100',
    position: { x: 45, y: 10 },
    color: '#76B900',
  },
  // Startups
  {
    id: 'openai',
    name: 'OpenAI',
    nameJa: 'OpenAI',
    description: 'Creator of ChatGPT, backed by Microsoft',
    descriptionJa: 'ChatGPTの開発元、Microsoft支援',
    category: 'startup',
    flagship: 'ChatGPT, GPT-4',
    flagshipJa: 'ChatGPT、GPT-4',
    position: { x: 30, y: 45 },
    color: '#10A37F',
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    nameJa: 'Anthropic',
    description: 'Creator of Claude, backed by Google & Amazon',
    descriptionJa: 'Claudeの開発元、Google・Amazon支援',
    category: 'startup',
    flagship: 'Claude',
    flagshipJa: 'Claude',
    position: { x: 65, y: 50 },
    color: '#D4A373',
  },
  {
    id: 'xai',
    name: 'xAI',
    nameJa: 'xAI',
    description: 'Elon Musk\'s AI company',
    descriptionJa: 'Elon Muskのプロジェクト',
    category: 'startup',
    flagship: 'Grok',
    flagshipJa: 'Grok',
    position: { x: 40, y: 75 },
    color: '#000000',
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    nameJa: 'Mistral AI',
    description: 'European AI leader, backed by Microsoft',
    descriptionJa: 'ヨーロッパのAIリーダー、Microsoft支援',
    category: 'startup',
    flagship: 'Mistral',
    flagshipJa: 'Mistral',
    position: { x: 25, y: 55 },
    color: '#F2A900',
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
      <div className="relative w-full bg-cream border-2 border-navy rounded-lg overflow-hidden" style={{ height: '600px' }}>
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
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
                  px-4 py-3 rounded-lg border-2 shadow-lg
                  transition-all duration-200
                  ${shouldHighlight ? 'opacity-100 scale-100' : 'opacity-50 scale-90'}
                  ${isSelected || isHovered ? 'scale-110 shadow-2xl' : ''}
                `}
                style={{
                  backgroundColor: company.color,
                  borderColor: '#1a1a2e',
                }}
              >
                <div className="text-white font-bold text-sm whitespace-nowrap">
                  {locale === 'ja' ? company.nameJa : company.name}
                </div>
                <div className="text-white text-xs opacity-90 whitespace-nowrap">
                  {locale === 'ja' ? company.flagshipJa : company.flagship}
                </div>
                {company.category === 'bigtech' && (
                  <div className="text-white text-xs mt-1 opacity-75">
                    💰 {locale === 'ja' ? '投資家' : 'Investor'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
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
                      {locale === 'ja' ? '投資先:' : 'Investments:'}
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
                      {locale === 'ja' ? '投資元:' : 'Backed by:'}
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

      {/* Legend */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white border-2 border-navy rounded-lg">
          <h4 className="font-bold text-navy mb-2">
            {locale === 'ja' ? 'ビッグテック' : 'Big Tech'}
          </h4>
          <p className="text-sm text-gray-600">
            {locale === 'ja'
              ? '主要な投資家として活動する大手テクノロジー企業'
              : 'Major technology companies acting as primary investors'}
          </p>
        </div>
        <div className="p-4 bg-white border-2 border-navy rounded-lg">
          <h4 className="font-bold text-navy mb-2">
            {locale === 'ja' ? 'AIスタートアップ' : 'AI Startups'}
          </h4>
          <p className="text-sm text-gray-600">
            {locale === 'ja'
              ? '最先端のAIモデルを開発する革新的な企業'
              : 'Innovative companies developing cutting-edge AI models'}
          </p>
        </div>
        <div className="p-4 bg-white border-2 border-navy rounded-lg">
          <h4 className="font-bold text-navy mb-2">
            {locale === 'ja' ? '投資関係' : 'Investment Relations'}
          </h4>
          <p className="text-sm text-gray-600">
            <span className="inline-block w-8 h-0.5 bg-navy mr-2"></span>
            {locale === 'ja' ? '実線: 投資' : 'Solid: Investment'}
            <br />
            <span className="inline-block w-8 h-0.5 bg-navy mr-2" style={{ backgroundImage: 'repeating-linear-gradient(to right, #1a1a2e 0, #1a1a2e 5px, transparent 5px, transparent 10px)' }}></span>
            {locale === 'ja' ? '破線: パートナーシップ' : 'Dashed: Partnership'}
          </p>
        </div>
      </div>

      {/* Instruction */}
      <div className="mt-4 text-center text-sm text-gray-600">
        {locale === 'ja'
          ? '💡 各企業をクリックして詳細情報を表示'
          : '💡 Click on any company to see details'}
      </div>
    </div>
  );
};

export default AILandscapeMap;

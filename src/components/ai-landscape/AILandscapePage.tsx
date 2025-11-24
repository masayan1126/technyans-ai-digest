import React from 'react';
import { useI18n } from '../I18nProvider';
import AILandscapeMap from './AILandscapeMap';

const AILandscapePage: React.FC = () => {
  const { t, locale } = useI18n();

  return (
    <div className="container-custom py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
          {t('aiLandscapeTitle')}
        </h1>
        <p className="text-xl text-gray-700 mb-2">
          {t('aiLandscapeSubtitle')}
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('aiLandscapeIntro')}
        </p>
      </div>

      {/* Map Component */}
      <AILandscapeMap />

      {/* Additional Context */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-navy rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="text-4xl">🐱</div>
          <div>
            <h3 className="text-lg font-bold text-navy mb-2">
              {locale === 'ja' ? 'テクにゃんのワンポイント解説' : "Technyan's Insight"}
            </h3>
            <p className="text-gray-700">
              {locale === 'ja'
                ? 'AI業界は今、まさに戦国時代のような状況だよ！ビッグテック企業が有望なAIスタートアップに巨額の投資を行い、勢力拡大を図っているんだ。例えば、MicrosoftはOpenAIに130億ドル以上、GoogleとAmazonはAnthropicに合計60億ドル以上を投資しているよ。この投資関係を理解することで、AI業界の今後の動向が見えてくるんだ！'
                : "The AI industry is like a modern warring states period! Big tech companies are making massive investments in promising AI startups to expand their influence. For example, Microsoft has invested over $13 billion in OpenAI, while Google and Amazon have invested over $6 billion combined in Anthropic. Understanding these investment relationships helps us see where the AI industry is heading!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILandscapePage;

import React from 'react';
import TechnyanImage from './TechnyanImage';
import { I18nProvider, useI18n } from './I18nProvider';

interface HomeContentProps {
  articlesCount: number;
}

const HomeContentInner: React.FC<HomeContentProps> = ({ articlesCount }) => {
  const { t } = useI18n();

  return (
    <>
      {/* Hero Section */}
      <section className="mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl">
            <div className="mb-6 inline-block px-4 py-2 bg-navy text-cream text-sm border-1.5 border-navy">
              {t('latestAiNews')}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('stayUpdatedWithAI')}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-80 max-w-2xl">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/articles" className="btn-primary text-center">
                {t('browseAllArticles')}
              </a>
              <a href="/about" className="btn-secondary text-center">
                {t('aboutUs')}
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <TechnyanImage size="xlarge" className="p-4 retro-shadow" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card hover:retro-shadow transition-all duration-200">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">{t('featureLatestNewsTitle')}</h3>
            <p className="leading-relaxed opacity-80">{t('featureLatestNewsDesc')}</p>
          </div>
          <div className="card hover:retro-shadow transition-all duration-200">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">{t('featureMultiViewTitle')}</h3>
            <p className="leading-relaxed opacity-80">{t('featureMultiViewDesc')}</p>
          </div>
          <div className="card hover:retro-shadow transition-all duration-200">
            <div className="text-4xl mb-4">🐱</div>
            <h3 className="text-xl font-semibold mb-3">{t('featureTechnyanTitle')}</h3>
            <p className="leading-relaxed opacity-80">{t('featureTechnyanDesc')}</p>
          </div>
        </div>
      </section>

      {/* Latest Articles Section Header */}
      <section className="mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">{t('latestArticles')}</h2>
          <a href="/articles" className="text-sm hover:underline flex items-center gap-2">
            {t('viewAll')} <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
};

const HomeContent: React.FC<HomeContentProps> = (props) => {
  return (
    <I18nProvider>
      <HomeContentInner {...props} />
    </I18nProvider>
  );
};

export default HomeContent;

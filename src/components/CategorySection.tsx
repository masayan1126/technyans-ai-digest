import React from 'react';
import { I18nProvider, useI18n } from './I18nProvider';

const CategorySectionInner: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="mt-16 md:mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('browseByCategory')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <a href="/articles?category=ChatGPT" className="card text-center hover:retro-shadow transition-all">
          <div className="text-2xl mb-2">💬</div>
          <div className="font-semibold">ChatGPT</div>
        </a>
        <a href="/articles?category=Claude" className="card text-center hover:retro-shadow transition-all">
          <div className="text-2xl mb-2">🤖</div>
          <div className="font-semibold">Claude</div>
        </a>
        <a href="/articles?category=Image%20Generation" className="card text-center hover:retro-shadow transition-all">
          <div className="text-2xl mb-2">🎨</div>
          <div className="font-semibold">{t('imageGeneration')}</div>
        </a>
        <a href="/articles?category=Research" className="card text-center hover:retro-shadow transition-all">
          <div className="text-2xl mb-2">🔬</div>
          <div className="font-semibold">{t('research')}</div>
        </a>
      </div>
    </section>
  );
};

const CategorySection: React.FC = () => {
  return (
    <I18nProvider>
      <CategorySectionInner />
    </I18nProvider>
  );
};

export default CategorySection;

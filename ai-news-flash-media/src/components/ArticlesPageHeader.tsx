import React from 'react';
import TechnyanImage from './TechnyanImage';
import { I18nProvider, useI18n } from './I18nProvider';

const ArticlesPageHeaderInner: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('allArticles')}</h1>
          <p className="text-lg opacity-80 max-w-2xl">
            {t('articlesPageDescription')}
          </p>
        </div>
        <div className="flex-shrink-0">
          <TechnyanImage size="medium" className="p-3 retro-shadow-sm" />
        </div>
      </div>
    </section>
  );
};

const ArticlesPageHeader: React.FC = () => {
  return (
    <I18nProvider>
      <ArticlesPageHeaderInner />
    </I18nProvider>
  );
};

export default ArticlesPageHeader;

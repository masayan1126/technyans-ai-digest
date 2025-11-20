import React from 'react';
import TechnyanImage from './TechnyanImage';
import { I18nProvider, useI18n } from './I18nProvider';

const NotFoundPageContentInner: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Technyan */}
      <div className="mb-8 flex justify-center">
        <TechnyanImage size="large" className="p-6 retro-shadow" />
      </div>

      {/* 404 Message */}
      <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>

      <div className="mb-8">
        <div className="inline-block px-6 py-3 bg-navy text-cream text-lg border-1.5 border-navy mb-6">
          {t('pageNotFound')}
        </div>
        <p className="text-xl md:text-2xl leading-relaxed mb-4">
          {t('notFoundMessage')}
        </p>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          {t('notFoundDescription')}
        </p>
      </div>

      {/* Navigation Options */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/" className="btn-primary text-center">
          {t('goToHomepage')}
        </a>
        <a href="/articles" className="btn-secondary text-center">
          {t('allArticles')}
        </a>
      </div>

      {/* Additional Help */}
      <div className="mt-12 p-6 border-1.5 border-navy bg-cream">
        <h2 className="text-xl font-bold mb-4">{t('lookingForSomething')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <a href="/" className="text-sm hover:underline">{t('home')}</a>
          <a href="/articles" className="text-sm hover:underline">{t('allArticles')}</a>
          <a href="/about" className="text-sm hover:underline">{t('aboutUs')}</a>
          <a href="/articles?category=ChatGPT" className="text-sm hover:underline">ChatGPT</a>
          <a href="/articles?category=Claude" className="text-sm hover:underline">Claude</a>
          <a href="/articles?category=Image%20Generation" className="text-sm hover:underline">{t('imageGeneration')}</a>
          <a href="/articles?category=Research" className="text-sm hover:underline">{t('research')}</a>
          <a href="/articles?category=Other" className="text-sm hover:underline">{t('otherTopics')}</a>
        </div>
      </div>
    </div>
  );
};

const NotFoundPageContent: React.FC = () => {
  return (
    <I18nProvider>
      <NotFoundPageContentInner />
    </I18nProvider>
  );
};

export default NotFoundPageContent;

import React from 'react';
import TechnyanImage from './TechnyanImage';
import { I18nProvider, useI18n } from './I18nProvider';

const AboutPageContentInner: React.FC = () => {
  const { t } = useI18n();

  return (
    <>
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-4xl flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-80">
              {t('aboutSubtitle')}
            </p>
          </div>
          <div className="flex-shrink-0">
            <TechnyanImage size="large" className="p-4 retro-shadow" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('ourMission')}</h2>
          <div className="card">
            <p className="text-lg leading-relaxed mb-4">
              {t('missionParagraph1')}
            </p>
            <p className="text-lg leading-relaxed">
              {t('missionParagraph2')}
            </p>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="mb-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('whatWeCover')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">{t('languageModels')}</h3>
              <p className="leading-relaxed opacity-80">
                {t('languageModelsDescription')}
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-3">{t('imageGeneration')}</h3>
              <p className="leading-relaxed opacity-80">
                {t('imageGenerationDescription')}
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-3">{t('researchBreakthroughs')}</h3>
              <p className="leading-relaxed opacity-80">
                {t('researchBreakthroughsDescription')}
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-3">{t('practicalApplications')}</h3>
              <p className="leading-relaxed opacity-80">
                {t('practicalApplicationsDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('ourValues')}</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-navy pl-6">
              <h3 className="text-xl font-semibold mb-2">{t('accuracy')}</h3>
              <p className="leading-relaxed opacity-80">
                {t('accuracyDescription')}
              </p>
            </div>

            <div className="border-l-4 border-navy pl-6">
              <h3 className="text-xl font-semibold mb-2">{t('clarity')}</h3>
              <p className="leading-relaxed opacity-80">
                {t('clarityDescription')}
              </p>
            </div>

            <div className="border-l-4 border-navy pl-6">
              <h3 className="text-xl font-semibold mb-2">{t('timeliness')}</h3>
              <p className="leading-relaxed opacity-80">
                {t('timelinessDescription')}
              </p>
            </div>

            <div className="border-l-4 border-navy pl-6">
              <h3 className="text-xl font-semibold mb-2">{t('independence')}</h3>
              <p className="leading-relaxed opacity-80">
                {t('independenceDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mascot Introduction Section */}
      <section className="mb-16 max-w-4xl">
        <div className="card">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <TechnyanImage size="medium" className="p-3" />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3">{t('meetTechnyan')}</h3>
              <p className="text-lg leading-relaxed opacity-80">
                {t('technyanDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl">
        <div className="card text-center py-12">
          <h2 className="text-3xl font-bold mb-4">{t('stayConnected')}</h2>
          <p className="text-lg leading-relaxed mb-8 opacity-80">
            {t('stayConnectedDescription')}
          </p>
          <a href="/articles" className="btn-primary">
            {t('browseAllArticles')}
          </a>
        </div>
      </section>
    </>
  );
};

const AboutPageContent: React.FC = () => {
  return (
    <I18nProvider>
      <AboutPageContentInner />
    </I18nProvider>
  );
};

export default AboutPageContent;

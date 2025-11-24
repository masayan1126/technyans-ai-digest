import React from 'react';
import { I18nProvider, useI18n } from '../I18nProvider';
import AILandscapeMap from './AILandscapeMap';
import AIImpactTimeline from './AIImpactTimeline';

const AILandscapePageContent: React.FC = () => {
  const { t } = useI18n();

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

      {/* Timeline Section */}
      <div className="mt-16 md:mt-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {t('aiImpactTimelineTitle')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t('aiImpactTimelineDescription')}
          </p>
        </div>
        <AIImpactTimeline />
      </div>
    </div>
  );
};

const AILandscapePage: React.FC = () => {
  return (
    <I18nProvider>
      <AILandscapePageContent />
    </I18nProvider>
  );
};

export default AILandscapePage;

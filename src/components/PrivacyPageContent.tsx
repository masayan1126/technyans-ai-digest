import React from 'react';
import { I18nProvider, useI18n } from './I18nProvider';

const PrivacyPageContentInner: React.FC = () => {
  const { t } = useI18n();

  return (
    <>
      {/* Header Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {t('privacyTitle')}
        </h1>
        <p className="text-sm opacity-60">
          {t('privacyLastUpdated')}
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <div className="card">
          <p className="text-lg leading-relaxed">
            {t('privacyIntro')}
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('privacySection1Title')}</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-lg font-semibold mb-2">{t('privacySection1Subtitle')}</h3>
            <p className="leading-relaxed opacity-80">
              {t('privacySection1Content1')}
            </p>
          </div>
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-lg font-semibold mb-2">{t('privacySection1Subtitle2')}</h3>
            <ul className="list-disc list-inside space-y-2 opacity-80">
              <li className="leading-relaxed">{t('privacySection1Content2')}</li>
              <li className="leading-relaxed">{t('privacySection1Content3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('privacySection2Title')}</h2>
        <div className="card">
          <ul className="list-disc list-inside space-y-3">
            <li className="leading-relaxed">{t('privacySection2Content1')}</li>
            <li className="leading-relaxed">{t('privacySection2Content2')}</li>
            <li className="leading-relaxed">{t('privacySection2Content3')}</li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('privacySection3Title')}</h2>
        <div className="card">
          <ul className="list-disc list-inside space-y-3">
            <li className="leading-relaxed">{t('privacySection3Content1')}</li>
            <li className="leading-relaxed">{t('privacySection3Content2')}</li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('privacySection4Title')}</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-lg font-semibold mb-2">{t('privacySection4Subtitle')}</h3>
            <p className="leading-relaxed opacity-80">
              {t('privacySection4Content1')}
            </p>
          </div>
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-lg font-semibold mb-2">{t('privacySection4Subtitle2')}</h3>
            <p className="leading-relaxed opacity-80">
              {t('privacySection4Content2')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('privacySection5Title')}</h2>
        <div className="card">
          <p className="leading-relaxed">
            {t('privacySection5Content')}
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('privacySection6Title')}</h2>
        <div className="card">
          <ul className="list-disc list-inside space-y-3">
            <li className="leading-relaxed">{t('privacySection6Content1')}</li>
            <li className="leading-relaxed">{t('privacySection6Content2')}</li>
            <li className="leading-relaxed">{t('privacySection6Content3')}</li>
          </ul>
        </div>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('privacySection7Title')}</h2>
        <div className="card">
          <p className="leading-relaxed">
            {t('privacySection7Content')}
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('privacySection8Title')}</h2>
        <div className="card">
          <p className="leading-relaxed">
            {t('privacySection8Content')}
          </p>
        </div>
      </section>

      {/* Section 9 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('privacySection9Title')}</h2>
        <div className="card">
          <p className="leading-relaxed">
            {t('privacySection9Content')}
          </p>
        </div>
      </section>

      {/* Operator */}
      <section className="mb-10">
        <div className="card bg-yellow-50 border-yellow-200">
          <p className="text-center font-semibold">
            {t('privacyOperator')}
          </p>
        </div>
      </section>
    </>
  );
};

const PrivacyPageContent: React.FC = () => {
  return (
    <I18nProvider>
      <PrivacyPageContentInner />
    </I18nProvider>
  );
};

export default PrivacyPageContent;

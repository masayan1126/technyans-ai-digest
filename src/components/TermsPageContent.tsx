import React from 'react';
import { I18nProvider, useI18n } from './I18nProvider';

const TermsPageContentInner: React.FC = () => {
  const { t } = useI18n();

  return (
    <>
      {/* Header Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {t('termsTitle')}
        </h1>
        <p className="text-sm opacity-60">
          {t('termsLastUpdated')}
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <div className="card">
          <p className="text-lg leading-relaxed">
            {t('termsIntro')}
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('termsSection1Title')}</h2>
        <div className="card">
          <p className="leading-relaxed">
            {t('termsSection1Content')}
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('termsSection2Title')}</h2>
        <div className="card">
          <p className="leading-relaxed">
            {t('termsSection2Content')}
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('termsSection3Title')}</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-lg font-semibold mb-2">{t('termsSection3Subtitle')}</h3>
            <p className="leading-relaxed opacity-80">
              {t('termsSection3Content1')}
            </p>
          </div>
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-lg font-semibold mb-2">{t('termsSection3Subtitle2')}</h3>
            <p className="leading-relaxed opacity-80">
              {t('termsSection3Content2')}
            </p>
          </div>
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-lg font-semibold mb-2">{t('termsSection3Subtitle3')}</h3>
            <p className="leading-relaxed opacity-80">
              {t('termsSection3Content3')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('termsSection4Title')}</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-lg font-semibold mb-2">{t('termsSection4Subtitle')}</h3>
            <p className="leading-relaxed opacity-80">
              {t('termsSection4Content1')}
            </p>
          </div>
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-lg font-semibold mb-2">{t('termsSection4Subtitle2')}</h3>
            <p className="leading-relaxed opacity-80 mb-2">
              {t('termsSection4Content2')}
            </p>
            <p className="leading-relaxed opacity-80 font-semibold">
              {t('termsSection4Content3')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('termsSection5Title')}</h2>
        <div className="card">
          <p className="leading-relaxed">
            {t('termsSection5Content')}
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('termsSection6Title')}</h2>
        <div className="card">
          <p className="leading-relaxed mb-3">{t('termsSection6Content')}</p>
          <ul className="list-disc list-inside space-y-2 opacity-80">
            <li className="leading-relaxed">{t('termsSection6Item1')}</li>
            <li className="leading-relaxed">{t('termsSection6Item2')}</li>
            <li className="leading-relaxed">{t('termsSection6Item3')}</li>
            <li className="leading-relaxed">{t('termsSection6Item4')}</li>
            <li className="leading-relaxed">{t('termsSection6Item5')}</li>
            <li className="leading-relaxed">{t('termsSection6Item6')}</li>
          </ul>
        </div>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('termsSection7Title')}</h2>
        <div className="card">
          <p className="leading-relaxed">
            {t('termsSection7Content')}
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('termsSection8Title')}</h2>
        <div className="card">
          <p className="leading-relaxed">
            {t('termsSection8Content')}
          </p>
        </div>
      </section>

      {/* Section 9 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('termsSection9Title')}</h2>
        <div className="card">
          <p className="leading-relaxed">
            {t('termsSection9Content')}
          </p>
        </div>
      </section>

      {/* Section 10 */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('termsSection10Title')}</h2>
        <div className="card">
          <p className="leading-relaxed">
            {t('termsSection10Content')}
          </p>
        </div>
      </section>

      {/* Operator */}
      <section className="mb-10">
        <div className="card bg-yellow-50 border-yellow-200">
          <p className="text-center font-semibold">
            {t('termsOperator')}
          </p>
        </div>
      </section>
    </>
  );
};

const TermsPageContent: React.FC = () => {
  return (
    <I18nProvider>
      <TermsPageContentInner />
    </I18nProvider>
  );
};

export default TermsPageContent;

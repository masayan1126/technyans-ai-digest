import React from 'react';
import { I18nProvider, useI18n } from './I18nProvider';

const FooterContent: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-navy text-cream border-t-1.5 border-navy mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI NEWS FLASH</h3>
            <p className="text-sm leading-relaxed opacity-90">
              {t('footerDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline opacity-90 hover:opacity-100">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="/articles" className="hover:underline opacity-90 hover:opacity-100">
                  {t('articles')}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline opacity-90 hover:opacity-100">
                  {t('about')}
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('categories')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/articles?category=chatgpt" className="hover:underline opacity-90 hover:opacity-100">
                  ChatGPT
                </a>
              </li>
              <li>
                <a href="/articles?category=claude" className="hover:underline opacity-90 hover:opacity-100">
                  Claude
                </a>
              </li>
              <li>
                <a href="/articles?category=image-generation" className="hover:underline opacity-90 hover:opacity-100">
                  {t('imageGeneration')}
                </a>
              </li>
              <li>
                <a href="/articles?category=research" className="hover:underline opacity-90 hover:opacity-100">
                  {t('research')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t-1.5 border-cream/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} AI NEWS FLASH. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

const Footer: React.FC = () => {
  return (
    <I18nProvider>
      <FooterContent />
    </I18nProvider>
  );
};

export default Footer;

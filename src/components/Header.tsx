import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import TechnyanImage from './TechnyanImage';
import { I18nProvider, useI18n } from './I18nProvider';

const HeaderContent: React.FC = () => {
  const { t } = useI18n();

  return (
    <header className="bg-cream border-b-1.5 border-navy sticky top-0 z-50 pt-[env(safe-area-inset-top)]">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-70">
            <TechnyanImage size="small" className="p-1" />
            <span className="text-xl font-semibold">Technyan's AI Digests</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden nav:flex items-center space-x-6">
            <a href="/" className="hover:underline">
              {t('home')}
            </a>
            <a href="/articles" className="hover:underline">
              {t('articles')}
            </a>
            <a href="/benchmarks" className="hover:underline">
              {t('benchmarks')}
            </a>
            <a href="/ai-landscape" className="hover:underline">
              {t('aiLandscape')}
            </a>
            <a href="/history" className="hover:underline">
              {t('history')}
            </a>
            <a href="/gallery" className="hover:underline">
              {t('gallery')}
            </a>
            <a href="/about" className="hover:underline">
              {t('about')}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile: Language Switcher only (navigation is in BottomNavigation) */}
          <div className="nav:hidden flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

const Header: React.FC = () => {
  return (
    <I18nProvider>
      <HeaderContent />
    </I18nProvider>
  );
};

export default Header;

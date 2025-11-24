import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import TechnyanImage from './TechnyanImage';
import { I18nProvider, useI18n } from './I18nProvider';

const HeaderContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="bg-cream border-b-1.5 border-navy sticky top-0 z-50">
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

          {/* Mobile: Language Switcher and Menu Button */}
          <div className="nav:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <button
              className="w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-navy transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-navy transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-navy transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="nav:hidden border-t-1.5 border-navy py-4">
            <div className="flex flex-col space-y-4">
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
            </div>
          </div>
        )}
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

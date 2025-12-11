import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LanguageSwitcher from './LanguageSwitcher';
import TechnyanImage from './TechnyanImage';
import { I18nProvider, useI18n } from './I18nProvider';

const HeaderContent: React.FC = () => {
  const { t } = useI18n();
  const [canGoBack, setCanGoBack] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(window.location.pathname === '/');
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-cream border-b-1.5 border-navy sticky top-0 z-50 pt-[env(safe-area-inset-top)]"
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Mobile: Back button + Logo */}
          <div className="flex items-center nav:hidden">
            <AnimatePresence>
              {!isHome && canGoBack && (
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  whileTap={{ scale: 0.85, x: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  onClick={handleBack}
                  className="p-2 -ml-2 mr-1 text-navy"
                  aria-label="Go back"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2"
            >
              <TechnyanImage size="small" className="p-1" />
              <span className="text-lg font-semibold">Technyan AI</span>
            </motion.a>
          </div>

          {/* Desktop: Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden nav:flex items-center space-x-3"
          >
            <TechnyanImage size="small" className="p-1" />
            <span className="text-xl font-semibold">Technyan's AI Digests</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden nav:flex items-center space-x-6">
            {[
              { href: '/', label: t('home') },
              { href: '/articles', label: t('articles') },
              { href: '/benchmarks', label: t('benchmarks') },
              { href: '/ai-landscape', label: t('aiLandscape') },
              { href: '/history', label: t('history') },
              { href: '/gallery', label: t('gallery') },
              { href: '/about', label: t('about') },
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hover:underline"
              >
                {item.label}
              </motion.a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile: Language Switcher only (navigation is in BottomNavigation) */}
          <div className="nav:hidden flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </motion.header>
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

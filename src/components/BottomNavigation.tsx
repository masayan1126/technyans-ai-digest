import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { I18nProvider, useI18n } from './I18nProvider';

interface NavItem {
  key: string;
  href: string;
  labelEn: string;
  labelJa: string;
  icon: React.ReactNode;
}

interface SubMenuItem {
  key: string;
  href: string;
  labelEn: string;
  labelJa: string;
}

const navItems: NavItem[] = [
  {
    key: 'home',
    href: '/',
    labelEn: 'Home',
    labelJa: 'ホーム',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    key: 'articles',
    href: '/articles',
    labelEn: 'Articles',
    labelJa: '記事',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
        />
      </svg>
    ),
  },
  {
    key: 'gallery',
    href: '/gallery',
    labelEn: 'Gallery',
    labelJa: 'ギャラリー',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    ),
  },
];

const subMenuItems: SubMenuItem[] = [
  { key: 'history', href: '/history', labelEn: 'History', labelJa: '歴史' },
  { key: 'landscape', href: '/ai-landscape', labelEn: 'AI Landscape', labelJa: '業界マップ' },
  { key: 'benchmarks', href: '/benchmarks', labelEn: 'Benchmarks', labelJa: 'ベンチマーク' },
  { key: 'about', href: '/about', labelEn: 'About', labelJa: 'About' },
];

const BottomNavigationInner: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale } = useI18n();

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  const isOtherActive = subMenuItems.some((item) => currentPath.startsWith(item.href));

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Submenu popup */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-16 left-0 right-0 bg-cream border-t-1.5 border-navy z-40 md:hidden"
          >
            <div className="py-2">
              {subMenuItems.map((item, index) => {
                const label = locale === 'ja' ? item.labelJa : item.labelEn;
                const active = currentPath.startsWith(item.href);
                return (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98, backgroundColor: 'rgba(12, 35, 64, 0.1)' }}
                    className={`flex items-center px-6 py-3 transition-colors ${
                      active ? 'bg-navy/10 text-navy font-medium' : 'text-navy/70'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom navigation bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-cream border-t-1.5 border-navy md:hidden z-40 safe-area-bottom">
        <div className="flex items-center justify-around h-14">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const label = locale === 'ja' ? item.labelJa : item.labelEn;

            return (
              <motion.a
                key={item.key}
                href={item.href}
                whileTap={{ scale: 0.9 }}
                className={`relative flex flex-col items-center justify-center flex-1 h-full py-1 transition-colors ${
                  active ? 'text-navy' : 'text-navy/50'
                }`}
              >
                <motion.span
                  animate={{ scale: active ? 1.1 : 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {item.icon}
                </motion.span>
                <span className={`text-[10px] mt-0.5 font-medium ${active ? '' : 'opacity-60'}`}>
                  {label}
                </span>
                {active && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 w-8 h-0.5 bg-navy"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}

          {/* Other menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className={`relative flex flex-col items-center justify-center flex-1 h-full py-1 transition-colors ${
              isOtherActive || isMenuOpen ? 'text-navy' : 'text-navy/50'
            }`}
          >
            <motion.span
              animate={{
                scale: isOtherActive || isMenuOpen ? 1.1 : 1,
                rotate: isMenuOpen ? 90 : 0,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </motion.span>
            <span
              className={`text-[10px] mt-0.5 font-medium ${isOtherActive || isMenuOpen ? '' : 'opacity-60'}`}
            >
              {locale === 'ja' ? 'その他' : 'More'}
            </span>
            {isOtherActive && !isMenuOpen && (
              <motion.span
                layoutId="activeIndicator"
                className="absolute bottom-0 w-8 h-0.5 bg-navy"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        </div>
      </nav>
    </>
  );
};

const BottomNavigation: React.FC = () => {
  return (
    <I18nProvider>
      <BottomNavigationInner />
    </I18nProvider>
  );
};

export default BottomNavigation;

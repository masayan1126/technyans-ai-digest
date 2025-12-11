import React, { useState, useEffect } from 'react';
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
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Submenu popup */}
      {isMenuOpen && (
        <div className="fixed bottom-16 left-0 right-0 bg-cream border-t-1.5 border-navy z-40 md:hidden animate-slide-up">
          <div className="py-2">
            {subMenuItems.map((item) => {
              const label = locale === 'ja' ? item.labelJa : item.labelEn;
              const active = currentPath.startsWith(item.href);
              return (
                <a
                  key={item.key}
                  href={item.href}
                  className={`flex items-center px-6 py-3 transition-colors ${
                    active ? 'bg-navy/10 text-navy font-medium' : 'text-navy/70 hover:bg-navy/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom navigation bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-cream border-t-1.5 border-navy md:hidden z-40 safe-area-bottom">
        <div className="flex items-center justify-around h-14">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const label = locale === 'ja' ? item.labelJa : item.labelEn;

            return (
              <a
                key={item.key}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full py-1 transition-colors ${
                  active ? 'text-navy' : 'text-navy/50'
                }`}
              >
                <span className={active ? 'scale-110 transition-transform' : ''}>{item.icon}</span>
                <span className={`text-[10px] mt-0.5 font-medium ${active ? '' : 'opacity-60'}`}>
                  {label}
                </span>
                {active && <span className="absolute bottom-0 w-8 h-0.5 bg-navy"></span>}
              </a>
            );
          })}

          {/* Other menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex flex-col items-center justify-center flex-1 h-full py-1 transition-colors ${
              isOtherActive || isMenuOpen ? 'text-navy' : 'text-navy/50'
            }`}
          >
            <span className={isOtherActive || isMenuOpen ? 'scale-110 transition-transform' : ''}>
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
            </span>
            <span
              className={`text-[10px] mt-0.5 font-medium ${isOtherActive || isMenuOpen ? '' : 'opacity-60'}`}
            >
              {locale === 'ja' ? 'その他' : 'More'}
            </span>
            {isOtherActive && <span className="absolute bottom-0 w-8 h-0.5 bg-navy"></span>}
          </button>
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

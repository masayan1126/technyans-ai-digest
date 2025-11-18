import React, { useState, useEffect } from 'react';

const LanguageSwitcher: React.FC = () => {
  const [locale, setLocale] = useState<'en' | 'ja'>('en');

  useEffect(() => {
    // Load locale from localStorage
    const savedLocale = localStorage.getItem('locale') as 'en' | 'ja' | null;
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  const handleToggle = () => {
    const newLocale = locale === 'en' ? 'ja' : 'en';
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);

    // Trigger custom event for other components to listen
    window.dispatchEvent(new CustomEvent('localeChange', { detail: newLocale }));
  };

  return (
    <button
      onClick={handleToggle}
      className="px-3 py-1.5 text-sm font-medium border-1.5 border-navy bg-cream text-navy hover:bg-navy hover:text-cream transition-all"
      aria-label="Switch language"
    >
      {locale === 'en' ? '日本語' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;

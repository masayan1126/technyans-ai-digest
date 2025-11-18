import React, { useState, useEffect } from 'react';

const LanguageSwitcher: React.FC = () => {
  const [locale, setLocale] = useState<'en' | 'ja'>('en');

  useEffect(() => {
    // 記事詳細ページの場合、URLから言語を取得
    const currentPath = window.location.pathname;
    const articleMatch = currentPath.match(/^\/articles\/(en|ja)\/(.+)$/);

    if (articleMatch) {
      const [, urlLang] = articleMatch;
      setLocale(urlLang as 'en' | 'ja');
      // localStorageにも保存
      localStorage.setItem('locale', urlLang);
    } else {
      // 他のページの場合、localStorageから読み込む
      const savedLocale = localStorage.getItem('locale') as 'en' | 'ja' | null;
      if (savedLocale) {
        setLocale(savedLocale);
      }
    }
  }, []);

  const handleToggle = () => {
    const newLocale = locale === 'en' ? 'ja' : 'en';
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);

    // 記事詳細ページの場合、URLを変更してリダイレクト
    const currentPath = window.location.pathname;
    const articleMatch = currentPath.match(/^\/articles\/(en|ja)\/(.+)$/);

    if (articleMatch) {
      // 記事詳細ページ: /articles/en/20251118/slug -> /articles/ja/20251118/slug
      const [, currentLang, articleSlug] = articleMatch;
      const newPath = `/articles/${newLocale}/${articleSlug}`;
      window.location.href = newPath;
    } else {
      // 他のページ: カスタムイベントを発行して、コンポーネントが反応できるようにする
      window.dispatchEvent(new CustomEvent('localeChange', { detail: newLocale }));
    }
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

import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  locale: string;
}

interface LatestArticlesProps {
  articles: Article[];
}

const LatestArticles: React.FC<LatestArticlesProps> = ({ articles }) => {
  const [locale, setLocale] = useState<'en' | 'ja'>('en');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Load locale from localStorage
    const savedLocale = localStorage.getItem('locale') as 'en' | 'ja' | null;
    if (savedLocale) {
      setLocale(savedLocale);
    }

    // Listen for locale changes
    const handleLocaleChange = (event: CustomEvent<string>) => {
      setLocale(event.detail as 'en' | 'ja');
    };

    window.addEventListener('localeChange', handleLocaleChange as EventListener);

    return () => {
      window.removeEventListener('localeChange', handleLocaleChange as EventListener);
    };
  }, []);

  useEffect(() => {
    // Filter articles by locale
    const filtered = articles.filter((article) => article.locale === locale);
    setFilteredArticles(filtered);
  }, [locale, articles]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
          <NewsCard
            key={article.slug}
            title={article.title}
            description={article.description}
            date={article.date}
            category={article.category}
            slug={article.slug}
            locale={article.locale}
          />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-lg opacity-60">
            {locale === 'ja' ? '記事が見つかりません' : 'No articles found'}
          </p>
        </div>
      )}
    </div>
  );
};

export default LatestArticles;

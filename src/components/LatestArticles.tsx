import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { I18nProvider, useI18n } from './I18nProvider';

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  locale: string;
  technyanComment?: string;
}

interface LatestArticlesProps {
  articles: Article[];
}

const LatestArticlesInner: React.FC<LatestArticlesProps> = ({ articles }) => {
  const { locale } = useI18n();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

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
            technyanComment={article.technyanComment}
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

const LatestArticles: React.FC<LatestArticlesProps> = (props) => {
  return (
    <I18nProvider>
      <LatestArticlesInner {...props} />
    </I18nProvider>
  );
};

export default LatestArticles;

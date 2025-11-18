import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import CategoryTag from './CategoryTag';
import NewsCard from './NewsCard';
import { I18nProvider, useI18n } from './I18nProvider';

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  locale: string;
}

interface ArticleListProps {
  articles: Article[];
}

const categories = ['All', 'ChatGPT', 'Claude', 'Image Generation', 'Research', 'Other'];

const ArticleListInner: React.FC<ArticleListProps> = ({ articles }) => {
  const { locale, t } = useI18n();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    let result = articles;

    // Filter by locale
    result = result.filter((article) => article.locale === locale);

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter((article) => article.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredArticles(result);
  }, [selectedCategory, searchQuery, locale, articles]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Search Box */}
      <div className="mb-8">
        <SearchBox onSearch={handleSearch} />
      </div>

      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <CategoryTag
            key={category}
            category={category}
            isActive={selectedCategory === category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>

      {/* Results Count */}
      <div className="mb-6 text-sm opacity-60">
        {t('showing')} {filteredArticles.length} {filteredArticles.length === 1 ? t('article') : t('articles')}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <NewsCard
              key={article.slug}
              title={article.title}
              description={article.description}
              date={article.date}
              category={article.category}
              slug={article.slug}
              locale={article.locale}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg opacity-60">{t('noArticlesFound')}</p>
        </div>
      )}
    </div>
  );
};

const ArticleList: React.FC<ArticleListProps> = (props) => {
  return (
    <I18nProvider>
      <ArticleListInner {...props} />
    </I18nProvider>
  );
};

export default ArticleList;

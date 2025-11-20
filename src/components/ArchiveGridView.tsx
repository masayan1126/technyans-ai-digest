import { useState } from 'react';
import type { SerializedArticle } from '../utils/historyUtils';
import { groupArticlesByMonth } from '../utils/historyUtils';
import { useI18n } from './I18nProvider';
import BookmarkButton from './BookmarkButton';

interface ArchiveGridViewProps {
  articles: SerializedArticle[];
}

interface CompactArticleCardProps {
  article: SerializedArticle;
}

function CompactArticleCard({ article }: CompactArticleCardProps) {
  const { locale } = useI18n();
  const [isHovered, setIsHovered] = useState(false);

  const slugParts = article.slug.split('/');
  const articleSlug = slugParts.length >= 2 ? slugParts.slice(0, -1).join('/') : article.slug;
  const articleUrl = `/articles/${locale}/${articleSlug}`;

  const day = article.data.date.getDate();

  return (
    <article
      className="border-1.5 border-navy bg-cream hover:shadow-[2px_2px_0px_0px_rgba(12,35,64,1)] transition-all duration-200 cursor-pointer relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bookmark Button */}
      <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <BookmarkButton articleSlug={articleSlug} size="small" />
      </div>

      <a href={articleUrl} className="block p-4">
        <div className="flex flex-col h-full">
          {/* Date Badge */}
          <div className="mb-2">
            <span className="inline-block w-8 h-8 bg-navy text-cream text-center leading-8 font-bold text-sm">
              {day}
            </span>
          </div>

          {/* Category */}
          <div className="mb-2">
            <span className="inline-block px-2 py-0.5 text-[10px] bg-navy text-cream border-1.5 border-navy truncate max-w-full">
              {article.data.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-semibold mb-2 line-clamp-2 group-hover:underline leading-tight">
            {article.data.title}
          </h3>

          {/* Tags */}
          {article.data.tags && article.data.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-auto">
              {article.data.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[10px] opacity-60 truncate">
                  #{tag}
                </span>
              ))}
              {article.data.tags.length > 2 && (
                <span className="text-[10px] opacity-60">+{article.data.tags.length - 2}</span>
              )}
            </div>
          )}
        </div>
      </a>

      {/* Hover tooltip with description */}
      {isHovered && (
        <div className="absolute bottom-full left-0 right-0 mb-2 p-3 bg-navy text-cream text-xs border-1.5 border-navy shadow-[4px_4px_0px_0px_rgba(12,35,64,1)] z-20 opacity-0 animate-fade-in pointer-events-none">
          <p className="line-clamp-3 leading-relaxed">{article.data.description}</p>
          {article.data.technyanComment && (
            <p className="mt-2 pt-2 border-t-1.5 border-cream/30 italic">
              💬 {article.data.technyanComment}
            </p>
          )}
        </div>
      )}
    </article>
  );
}

export default function ArchiveGridView({ articles }: ArchiveGridViewProps) {
  const { t, locale } = useI18n();
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-navy opacity-60">{t('noArticlesFound')}</p>
      </div>
    );
  }

  const groupedByMonth = groupArticlesByMonth(articles);

  // Auto-select first month if none selected
  if (!selectedMonth && groupedByMonth.length > 0) {
    const firstMonth = groupedByMonth[0];
    setSelectedMonth(`${firstMonth.year}-${firstMonth.month}`);
  }

  const currentMonthGroup = groupedByMonth.find(
    (group) => `${group.year}-${group.month}` === selectedMonth
  );

  return (
    <div>
      {/* Month Selector */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-navy mb-4 uppercase tracking-wider">
          Select Month
        </h3>
        <div className="flex flex-wrap gap-3">
          {groupedByMonth.map((monthGroup) => {
            const key = `${monthGroup.year}-${monthGroup.month}`;
            const isSelected = selectedMonth === key;

            return (
              <button
                key={key}
                onClick={() => setSelectedMonth(key)}
                className={`px-4 py-2 border-1.5 transition-all duration-200 ${
                  isSelected
                    ? 'bg-navy border-navy text-cream shadow-[4px_4px_0px_0px_rgba(12,35,64,1)]'
                    : 'bg-cream border-navy text-navy hover:shadow-[2px_2px_0px_0px_rgba(12,35,64,1)]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{monthGroup.monthName} {monthGroup.year}</span>
                  <span className="text-xs opacity-80">({monthGroup.articles.length})</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid */}
      {currentMonthGroup ? (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-xl font-bold text-navy">
              {currentMonthGroup.monthName} {currentMonthGroup.year}
            </h4>
            <span className="text-sm opacity-60">
              {currentMonthGroup.articles.length} {t('articlesByMonth')}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {currentMonthGroup.articles.map((article) => (
              <CompactArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-navy opacity-60">{t('noArticlesInPeriod')}</p>
        </div>
      )}
    </div>
  );
}

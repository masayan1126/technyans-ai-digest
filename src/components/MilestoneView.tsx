import { useState } from 'react';
import type { SerializedArticle } from '../utils/historyUtils';
import { groupArticlesByYear, formatDate } from '../utils/historyUtils';
import { useI18n } from './I18nProvider';
import BookmarkButton from './BookmarkButton';

interface MilestoneViewProps {
  articles: SerializedArticle[];
}

interface MilestoneArticleCardProps {
  article: SerializedArticle;
}

function MilestoneArticleCard({ article }: MilestoneArticleCardProps) {
  const { locale } = useI18n();
  const [isHovered, setIsHovered] = useState(false);

  const slugParts = article.slug.split('/');
  const articleSlug = slugParts.length >= 2 ? slugParts.slice(0, -1).join('/') : article.slug;
  const articleUrl = `/articles/${locale}/${articleSlug}`;

  const dateStr = formatDate(article.data.date, locale);

  return (
    <article
      className="card group cursor-pointer relative mb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bookmark Button */}
      <div className="absolute top-4 right-4 z-10">
        <BookmarkButton articleSlug={articleSlug} size="small" />
      </div>

      <a href={articleUrl} className="block">
        <div className="flex flex-col">
          {/* Category and Date */}
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block px-3 py-1 text-xs bg-navy text-cream border-1.5 border-navy">
              {article.data.category}
            </span>
            <time className="text-xs opacity-60" dateTime={article.data.date.toISOString()}>
              {dateStr}
            </time>
          </div>

          {/* Technyan Comment */}
          {article.data.technyanComment && isHovered && (
            <div className="mb-3 animate-bounce-in">
              <div className="relative bg-cream border-2 border-navy px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(12,35,64,1)] flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-cream border-2 border-navy rounded-full overflow-hidden">
                  <img src="/technyan.webp" alt="Technyan" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs md:text-sm font-medium text-navy leading-snug flex-1">
                  {article.data.technyanComment}
                </p>
              </div>
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:underline">
            {article.data.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed opacity-80">
            {article.data.description}
          </p>
        </div>
      </a>
    </article>
  );
}

export default function MilestoneView({ articles }: MilestoneViewProps) {
  const { t } = useI18n();
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set());
  const [expandedMonths, setExpandedMonths] = useState<Set<string>>(new Set());

  const groupedByYear = groupArticlesByYear(articles);

  // Expand first year by default
  if (expandedYears.size === 0 && groupedByYear.length > 0) {
    setExpandedYears(new Set([groupedByYear[0].year]));
    // Expand first month of first year
    if (groupedByYear[0].months.length > 0) {
      const firstMonth = groupedByYear[0].months[0];
      setExpandedMonths(new Set([`${firstMonth.year}-${firstMonth.month}`]));
    }
  }

  const toggleYear = (year: number) => {
    const newSet = new Set(expandedYears);
    if (newSet.has(year)) {
      newSet.delete(year);
      // Also collapse all months in this year
      const newMonths = new Set(expandedMonths);
      groupedByYear.find(y => y.year === year)?.months.forEach(m => {
        newMonths.delete(`${m.year}-${m.month}`);
      });
      setExpandedMonths(newMonths);
    } else {
      newSet.add(year);
    }
    setExpandedYears(newSet);
  };

  const toggleMonth = (year: number, month: number) => {
    const key = `${year}-${month}`;
    const newSet = new Set(expandedMonths);
    if (newSet.has(key)) {
      newSet.delete(key);
    } else {
      newSet.add(key);
    }
    setExpandedMonths(newSet);
  };

  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-navy opacity-60">{t('noArticlesFound')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {groupedByYear.map((yearGroup) => (
        <div key={yearGroup.year} className="border-1.5 border-navy bg-cream">
          {/* Year Header */}
          <button
            onClick={() => toggleYear(yearGroup.year)}
            className="w-full px-6 py-4 bg-navy text-cream flex items-center justify-between hover:bg-navy-light transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">{yearGroup.year}</span>
              <span className="text-sm opacity-80">
                {yearGroup.months.reduce((sum, m) => sum + m.articles.length, 0)} {t('articlesByMonth')}
              </span>
            </div>
            <span className="text-2xl transform transition-transform duration-200" style={{
              transform: expandedYears.has(yearGroup.year) ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>
              ▼
            </span>
          </button>

          {/* Months */}
          {expandedYears.has(yearGroup.year) && (
            <div className="border-t-1.5 border-navy">
              {yearGroup.months.map((monthGroup) => {
                const monthKey = `${monthGroup.year}-${monthGroup.month}`;
                const isExpanded = expandedMonths.has(monthKey);

                return (
                  <div key={monthKey} className="border-b-1.5 border-navy last:border-b-0">
                    {/* Month Header */}
                    <button
                      onClick={() => toggleMonth(monthGroup.year, monthGroup.month)}
                      className="w-full px-6 py-3 bg-cream text-navy flex items-center justify-between hover:bg-cream/80 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-semibold">{monthGroup.monthName}</span>
                        <span className="text-sm opacity-60">
                          {monthGroup.articles.length} {t('articlesByMonth')}
                        </span>
                      </div>
                      <span className="text-lg transform transition-transform duration-200" style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}>
                        ▼
                      </span>
                    </button>

                    {/* Articles */}
                    {isExpanded && (
                      <div className="px-6 py-4 bg-cream">
                        {monthGroup.articles.map((article) => (
                          <MilestoneArticleCard key={article.slug} article={article} />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

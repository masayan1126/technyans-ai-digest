import { useState } from 'react';
import type { SerializedArticle } from '../utils/historyUtils';
import { addImpactScores, getImpactSizeClass, formatDate } from '../utils/historyUtils';
import { useI18n } from './I18nProvider';
import BookmarkButton from './BookmarkButton';

interface ImpactMapViewProps {
  articles: SerializedArticle[];
}

interface ImpactArticleCardProps {
  article: SerializedArticle;
  impactScore: number;
}

function ImpactArticleCard({ article, impactScore }: ImpactArticleCardProps) {
  const { locale } = useI18n();
  const [isHovered, setIsHovered] = useState(false);

  const slugParts = article.slug.split('/');
  const articleSlug = slugParts.length >= 2 ? slugParts.slice(0, -1).join('/') : article.slug;
  const articleUrl = `/articles/${locale}/${articleSlug}`;

  const dateStr = formatDate(article.data.date, locale);
  const sizeClass = getImpactSizeClass(impactScore);

  // Size classes based on impact
  const sizeStyles = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-2 md:row-span-1',
    small: 'md:col-span-1 md:row-span-1',
  };

  return (
    <article
      className={`card group cursor-pointer relative ${sizeStyles[sizeClass]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Impact Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className={`px-3 py-1 border-1.5 border-navy ${
          sizeClass === 'large' ? 'bg-navy text-cream' :
          sizeClass === 'medium' ? 'bg-cream text-navy border-2' :
          'bg-cream text-navy'
        }`}>
          <span className="text-xs font-semibold">
            {sizeClass === 'large' ? '💥 HIGH IMPACT' :
             sizeClass === 'medium' ? '✨ MEDIUM IMPACT' :
             '📌 NOTABLE'}
          </span>
        </div>
      </div>

      {/* Bookmark Button */}
      <div className="absolute top-4 right-4 z-10">
        <BookmarkButton articleSlug={articleSlug} size="small" />
      </div>

      <a href={articleUrl} className="block h-full">
        <div className="flex flex-col h-full pt-12">
          {/* Category */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs bg-navy text-cream border-1.5 border-navy">
              {article.data.category}
            </span>
          </div>

          {/* Technyan Comment */}
          {article.data.technyanComment && isHovered && (
            <div className="mb-4 animate-bounce-in">
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
          <h3 className={`font-semibold mb-3 group-hover:underline ${
            sizeClass === 'large' ? 'text-2xl md:text-3xl' :
            sizeClass === 'medium' ? 'text-xl md:text-2xl' :
            'text-lg md:text-xl'
          }`}>
            {article.data.title}
          </h3>

          {/* Description */}
          <p className={`leading-relaxed mb-4 flex-grow opacity-80 ${
            sizeClass === 'large' ? 'text-base md:text-lg' :
            sizeClass === 'medium' ? 'text-sm md:text-base' :
            'text-sm'
          }`}>
            {article.data.description}
          </p>

          {/* Date and Impact Score */}
          <div className="flex items-center justify-between text-xs opacity-60">
            <time dateTime={article.data.date.toISOString()}>{dateStr}</time>
            <div className="flex items-center gap-2">
              <span className="hidden md:inline">Impact: {impactScore}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}

export default function ImpactMapView({ articles }: ImpactMapViewProps) {
  const { t } = useI18n();

  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-navy opacity-60">{t('noArticlesFound')}</p>
      </div>
    );
  }

  // Add impact scores and sort by score (descending)
  const articlesWithImpact = addImpactScores(articles).sort(
    (a, b) => b.impactScore - a.impactScore
  );

  return (
    <div>
      {/* Legend */}
      <div className="mb-8 flex flex-wrap gap-4 items-center">
        <span className="text-sm font-semibold text-navy">Impact Level:</span>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-navy border-1.5 border-navy"></div>
            <span className="text-xs">High (80+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-cream border-2 border-navy"></div>
            <span className="text-xs">Medium (60-79)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-cream border-1.5 border-navy"></div>
            <span className="text-xs">Notable (&lt;60)</span>
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
        {articlesWithImpact.map((article) => (
          <ImpactArticleCard
            key={article.slug}
            article={article}
            impactScore={article.impactScore}
          />
        ))}
      </div>
    </div>
  );
}

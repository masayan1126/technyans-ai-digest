import { useRef, useState } from 'react';
import type { SerializedArticle } from '../utils/historyUtils';
import { formatDate } from '../utils/historyUtils';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useI18n } from './I18nProvider';
import BookmarkButton from './BookmarkButton';

interface TimelineViewProps {
  articles: SerializedArticle[];
}

interface TimelineItemProps {
  article: SerializedArticle;
  position: 'left' | 'right';
  index: number;
}

function TimelineItem({ article, position, index }: TimelineItemProps) {
  const { locale, t } = useI18n();
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(itemRef, { threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  const slugParts = article.slug.split('/');
  const articleSlug = slugParts.length >= 2 ? slugParts.slice(0, -1).join('/') : article.slug;
  const articleUrl = `/articles/${locale}/${articleSlug}`;

  const dateStr = formatDate(article.data.date, locale);

  return (
    <div
      ref={itemRef}
      className={`relative flex items-center mb-16 ${
        position === 'left' ? 'md:flex-row-reverse' : ''
      } ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
    >
      {/* Content Card */}
      <div className={`w-full md:w-[calc(50%-3rem)] ${position === 'left' ? 'md:pl-0' : 'md:pr-0'}`}>
        <article
          className={`card group cursor-pointer relative ${
            isVisible ? 'translate-y-0' : 'translate-y-8'
          } transition-all duration-700 delay-${Math.min(index * 100, 500)}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Bookmark Button */}
          <div className="absolute top-4 right-4 z-10">
            <BookmarkButton articleSlug={articleSlug} size="small" />
          </div>

          <a href={articleUrl} className="block">
            <div className="flex flex-col h-full">
              {/* Category Tag */}
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
              <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:underline">
                {article.data.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed mb-4 flex-grow opacity-80">
                {article.data.description}
              </p>

              {/* Date */}
              <div className="flex items-center justify-between text-xs opacity-60">
                <time dateTime={article.data.date.toISOString()}>{dateStr}</time>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>
        </article>
      </div>

      {/* Timeline Marker - Hidden on mobile */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center z-10">
        <div className="w-12 h-12 bg-cream border-1.5 border-navy rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(12,35,64,1)]">
          <div className="w-4 h-4 bg-navy rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default function TimelineView({ articles }: TimelineViewProps) {
  const { t } = useI18n();

  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-navy opacity-60">{t('noArticlesFound')}</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Vertical Timeline Line - Hidden on mobile */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-navy -translate-x-1/2"></div>

      {/* Timeline Items */}
      <div className="relative">
        {articles.map((article, index) => (
          <TimelineItem
            key={article.slug}
            article={article}
            position={index % 2 === 0 ? 'right' : 'left'}
            index={index}
          />
        ))}
      </div>

      {/* End Marker */}
      <div className="hidden md:flex justify-center">
        <div className="w-6 h-6 bg-navy border-1.5 border-navy rounded-full shadow-[4px_4px_0px_0px_rgba(12,35,64,1)]"></div>
      </div>
    </div>
  );
}

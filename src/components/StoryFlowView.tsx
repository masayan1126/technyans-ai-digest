import { useRef, useState } from 'react';
import type { SerializedArticle } from '../utils/historyUtils';
import { formatDate } from '../utils/historyUtils';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useI18n } from './I18nProvider';
import BookmarkButton from './BookmarkButton';

interface StoryFlowViewProps {
  articles: SerializedArticle[];
}

interface StoryArticleSectionProps {
  article: SerializedArticle;
  index: number;
}

function StoryArticleSection({ article, index }: StoryArticleSectionProps) {
  const { locale, t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  const slugParts = article.slug.split('/');
  const articleSlug = slugParts.length >= 2 ? slugParts.slice(0, -1).join('/') : article.slug;
  const articleUrl = `/articles/${locale}/${articleSlug}`;

  const dateStr = formatDate(article.data.date, locale);

  // Alternating layout: even on left, odd on right
  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center py-16 px-4 md:px-8 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl w-full">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
          {/* Content Side */}
          <div className={`flex-1 ${isVisible ? 'translate-y-0' : 'translate-y-12'} transition-transform duration-1000 delay-200`}>
            {/* Story Number */}
            <div className="mb-6 flex items-center gap-4">
              <span className="text-6xl md:text-8xl font-bold text-navy opacity-10">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 h-[2px] bg-navy"></div>
            </div>

            {/* Category and Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-4 py-2 text-sm bg-navy text-cream border-1.5 border-navy">
                {article.data.category}
              </span>
              <time className="text-sm opacity-60" dateTime={article.data.date.toISOString()}>
                {dateStr}
              </time>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <a href={articleUrl} className="hover:underline">
                {article.data.title}
              </a>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-80">
              {article.data.description}
            </p>

            {/* Technyan Comment */}
            {article.data.technyanComment && (
              <div className={`mb-8 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-60'}`}>
                <div className="relative bg-cream border-2 border-navy px-4 py-3 rounded-lg shadow-[4px_4px_0px_0px_rgba(12,35,64,1)] flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cream border-2 border-navy rounded-full overflow-hidden">
                    <img src="/technyan.webp" alt="Technyan" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-base font-medium text-navy leading-snug flex-1">
                    {article.data.technyanComment}
                  </p>
                </div>
              </div>
            )}

            {/* Tags */}
            {article.data.tags && article.data.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {article.data.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm border-1.5 border-navy text-navy bg-cream">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                href={articleUrl}
                className="inline-block px-8 py-4 bg-navy text-cream border-1.5 border-navy font-semibold hover:shadow-[4px_4px_0px_0px_rgba(12,35,64,1)] hover:-translate-y-1 transition-all duration-200"
              >
                Read Full Article →
              </a>
              <BookmarkButton articleSlug={articleSlug} size="medium" />
            </div>
          </div>

          {/* Visual Side */}
          <div className={`flex-1 ${isVisible ? 'scale-100' : 'scale-95'} transition-transform duration-1000 delay-400`}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="aspect-square md:aspect-[4/3] bg-cream border-1.5 border-navy shadow-[8px_8px_0px_0px_rgba(12,35,64,1)] flex items-center justify-center overflow-hidden">
                {/* Technyan mascot */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="/technyan.webp"
                    alt="Technyan"
                    className="w-3/4 h-3/4 object-contain opacity-20"
                  />
                  {/* Category emoji overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl md:text-9xl opacity-30">
                      {article.data.category === 'ChatGPT' ? '🤖' :
                       article.data.category === 'Claude' ? '🎭' :
                       article.data.category === 'Gemini' ? '💎' :
                       article.data.category === 'Grok' ? '🚀' :
                       article.data.category === 'Image Generation' ? '🎨' :
                       article.data.category === 'Research' ? '🔬' :
                       '📰'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function StoryFlowView({ articles }: StoryFlowViewProps) {
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
      {/* Story sections */}
      {articles.map((article, index) => (
        <div key={article.slug}>
          <StoryArticleSection article={article} index={index} />
          {/* Divider between sections */}
          {index < articles.length - 1 && (
            <div className="w-full h-px bg-navy opacity-20"></div>
          )}
        </div>
      ))}

      {/* End marker */}
      <div className="flex justify-center py-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-navy border-1.5 border-navy rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">✨</span>
          </div>
          <p className="text-sm text-navy opacity-60">End of Story</p>
        </div>
      </div>
    </div>
  );
}

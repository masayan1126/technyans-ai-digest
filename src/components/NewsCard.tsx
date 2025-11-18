import React, { useState } from 'react';
import BookmarkButton from './BookmarkButton';
import { useBookmark } from '../hooks/useBookmark';

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  locale: string;
  technyanComment?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, date, category, slug, locale, technyanComment }) => {
  // 新しいslug形式: "20251118/article-name/ja" -> "20251118/article-name"
  const slugParts = slug.split('/');
  const articleSlug = slugParts.length >= 2 ? slugParts.slice(0, -1).join('/') : slug;
  const articleUrl = `/articles/${locale}/${articleSlug}`;

  useBookmark(articleSlug); // ブックマーク機能を有効化
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="card group cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bookmark Button */}
      <div className="absolute top-4 right-4 z-10">
        <BookmarkButton articleSlug={articleSlug} size="small" />
      </div>

      {/* Technyan Hover Comment - show if technyanComment exists */}
      {technyanComment && isHovered && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none max-w-xs">
          <div className="relative bg-cream border-2 border-navy px-4 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(12,35,64,1)] animate-bounce-in">
            {/* Technyan Icon */}
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-cream border-2 border-navy rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/technyan.webp"
                alt="Technyan"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Comment Text */}
            <p className="text-xs md:text-sm font-medium text-navy leading-snug">
              {technyanComment}
            </p>

            {/* Arrow pointing down */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cream border-r-2 border-b-2 border-navy rotate-45"></div>
          </div>
        </div>
      )}

      <a href={articleUrl} className="block">
        <div className="flex flex-col h-full">
          {/* Category Tag */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs bg-navy text-cream border-1.5 border-navy">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:underline">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base leading-relaxed mb-4 flex-grow opacity-80">
            {description}
          </p>

          {/* Date */}
          <div className="flex items-center justify-between text-xs opacity-60">
            <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}</time>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default NewsCard;

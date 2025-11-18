import React from 'react';

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  locale: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, date, category, slug, locale }) => {
  // 新しいslug形式: "20251118/article-name/ja" -> "20251118/article-name"
  const slugParts = slug.split('/');
  const articleSlug = slugParts.length >= 2 ? slugParts.slice(0, -1).join('/') : slug;
  const articleUrl = `/articles/${locale}/${articleSlug}`;

  return (
    <article className="card group cursor-pointer">
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

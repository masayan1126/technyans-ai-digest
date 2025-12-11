import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BookmarkButton from './BookmarkButton';
import { useBookmark } from '../hooks/useBookmark';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useIsTouchDevice } from '../hooks/useIsTouchDevice';

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

  // Ref for the card element
  const cardRef = useRef<HTMLElement>(null);

  // Detect if device is touch-based (smartphone/tablet)
  const isTouchDevice = useIsTouchDevice();

  // Detect if card is visible in viewport (for touch devices)
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.5 });

  // Show comment based on device type
  const shouldShowComment = technyanComment && (isTouchDevice ? isVisible : isHovered);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      whileHover={{
        y: -4,
        boxShadow: '6px 6px 0px 0px rgba(12, 35, 64, 1)',
      }}
      whileTap={{ scale: 0.98 }}
      className="card group cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bookmark Button */}
      <motion.div
        className="absolute top-4 right-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <BookmarkButton articleSlug={articleSlug} size="small" />
      </motion.div>

      <a href={articleUrl} className="block">
        <div className="flex flex-col h-full">
          {/* Category Tag */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 }}
          >
            <span className="inline-block px-3 py-1 text-xs bg-navy text-cream border-1.5 border-navy">
              {category}
            </span>
          </motion.div>

          {/* Technyan Comment - show on hover (PC) or scroll into view (touch devices) */}
          <AnimatePresence>
            {shouldShowComment && (
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <div className="relative bg-cream border-2 border-navy px-3 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(12,35,64,1)] flex items-center gap-3">
                  {/* Technyan Icon */}
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 bg-cream border-2 border-navy rounded-full overflow-hidden"
                    animate={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <img
                      src="/technyan.webp"
                      alt="Technyan"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Comment Text */}
                  <p className="text-xs md:text-sm font-medium text-navy leading-snug flex-1">
                    {technyanComment}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </a>
    </motion.article>
  );
};

export default NewsCard;

import { useBookmark } from '../hooks/useBookmark';
import { useI18n } from './I18nProvider';
import { useState } from 'react';

interface BookmarkButtonProps {
  articleSlug: string;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
  className?: string;
}

export default function BookmarkButton({
  articleSlug,
  size = 'medium',
  showLabel = false,
  className = '',
}: BookmarkButtonProps) {
  const { isBookmarked, isLoading, toggleBookmark } = useBookmark(articleSlug);
  const { t } = useI18n();
  const [isAnimating, setIsAnimating] = useState(false);

  // サイズに応じたクラス
  const sizeClasses = {
    small: 'w-8 h-8 text-sm',
    medium: 'w-10 h-10 text-base',
    large: 'w-12 h-12 text-lg',
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // アニメーションを開始
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    // ブックマークをトグル
    toggleBookmark();
  };

  if (isLoading) {
    return null; // ローディング中は非表示
  }

  const label = isBookmarked ? t('bookmarked') : t('addToBookmarks');

  return (
    <button
      onClick={handleClick}
      className={`
        ${sizeClasses[size]}
        ${className}
        relative
        flex items-center justify-center gap-2
        border-1.5 border-navy
        transition-all duration-200
        hover:shadow-[2px_2px_0px_0px_rgba(12,35,64,1)]
        active:shadow-none
        active:translate-x-[1px]
        active:translate-y-[1px]
        ${isBookmarked
          ? 'bg-navy text-cream'
          : 'bg-cream text-navy hover:bg-navy hover:text-cream'
        }
        ${isAnimating ? 'animate-bounce' : ''}
      `}
      aria-label={label}
      title={label}
    >
      {/* ブックマークアイコン（SVG） */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isBookmarked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          ${size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-6 h-6' : 'w-5 h-5'}
          transition-all duration-200
          ${isAnimating ? 'scale-125' : 'scale-100'}
        `}
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>

      {/* ラベル（オプション） */}
      {showLabel && (
        <span className="text-xs font-medium whitespace-nowrap">
          {t('bookmark')}
        </span>
      )}
    </button>
  );
}

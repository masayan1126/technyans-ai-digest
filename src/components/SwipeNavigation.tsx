import React from 'react';
import { useSwipeNavigation } from '../hooks/useSwipeNavigation';
import { I18nProvider, useI18n } from './I18nProvider';

interface SwipeNavigationProps {
  prevUrl?: string | null;
  nextUrl?: string | null;
  prevLabel?: string;
  nextLabel?: string;
}

const SwipeNavigationInner: React.FC<SwipeNavigationProps> = ({
  prevUrl,
  nextUrl,
  prevLabel,
  nextLabel,
}) => {
  const { locale } = useI18n();
  const { direction, progress, isSwiping } = useSwipeNavigation({
    prevUrl,
    nextUrl,
    threshold: 100,
    enabled: true,
  });

  const defaultLabels = {
    en: { prev: 'Previous', next: 'Next' },
    ja: { prev: '前へ', next: '次へ' },
  };

  const labels = defaultLabels[locale] || defaultLabels.en;
  const prevText = prevLabel || labels.prev;
  const nextText = nextLabel || labels.next;

  if (!isSwiping || !direction || progress === 0) {
    return null;
  }

  const showPrev = direction === 'right' && prevUrl;
  const showNext = direction === 'left' && nextUrl;

  if (!showPrev && !showNext) {
    return null;
  }

  return (
    <>
      {showPrev && (
        <div
          className="fixed left-0 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
          style={{
            opacity: progress,
            transform: `translateY(-50%) translateX(${-20 + progress * 20}px)`,
          }}
        >
          <div className="bg-navy text-cream px-4 py-3 flex items-center gap-2 border-1.5 border-navy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span className="text-sm font-medium">{prevText}</span>
          </div>
        </div>
      )}

      {showNext && (
        <div
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
          style={{
            opacity: progress,
            transform: `translateY(-50%) translateX(${20 - progress * 20}px)`,
          }}
        >
          <div className="bg-navy text-cream px-4 py-3 flex items-center gap-2 border-1.5 border-navy">
            <span className="text-sm font-medium">{nextText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      )}

      {progress >= 1 && (
        <div className="fixed inset-0 bg-navy/10 z-40 pointer-events-none transition-opacity" />
      )}
    </>
  );
};

const SwipeNavigation: React.FC<SwipeNavigationProps> = (props) => {
  return (
    <I18nProvider>
      <SwipeNavigationInner {...props} />
    </I18nProvider>
  );
};

export default SwipeNavigation;

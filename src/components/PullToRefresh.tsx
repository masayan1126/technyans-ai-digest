import React, { useState, useEffect, useRef, useCallback } from 'react';

const PULL_THRESHOLD = 120;
const MAX_PULL = 200;

const PullToRefresh: React.FC = () => {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const startY = useRef(0);
  const isPulling = useRef(false);

  useEffect(() => {
    const checkStandalone = () => {
      const isStandaloneMode =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
      setIsStandalone(isStandaloneMode);
    };

    checkStandalone();

    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleChange = () => checkStandalone();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (!isStandalone || window.scrollY > 0 || isRefreshing) return;

      startY.current = e.touches[0].clientY;
      isPulling.current = true;
    },
    [isStandalone, isRefreshing]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isPulling.current || !isStandalone || isRefreshing) return;

      const currentY = e.touches[0].clientY;
      const diff = currentY - startY.current;

      if (diff > 0 && window.scrollY === 0) {
        e.preventDefault();
        const distance = Math.min(diff * 0.5, MAX_PULL);
        setPullDistance(distance);
      }
    },
    [isStandalone, isRefreshing]
  );

  const handleTouchEnd = useCallback(() => {
    if (!isPulling.current) return;

    isPulling.current = false;

    if (pullDistance >= PULL_THRESHOLD) {
      setIsRefreshing(true);
      setPullDistance(PULL_THRESHOLD);

      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      setPullDistance(0);
    }
  }, [pullDistance]);

  useEffect(() => {
    if (!isStandalone) return;

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isStandalone, handleTouchStart, handleTouchMove, handleTouchEnd]);

  if (!isStandalone || pullDistance === 0) {
    return null;
  }

  const progress = Math.min(pullDistance / PULL_THRESHOLD, 1);
  const rotation = progress * 360;

  return (
    <div
      className="fixed top-0 left-0 right-0 flex items-center justify-center z-50 pointer-events-none"
      style={{
        height: `${pullDistance}px`,
        transition: isPulling.current ? 'none' : 'height 0.2s ease-out',
      }}
    >
      <div
        className="bg-cream border-2 border-navy p-3 rounded-full shadow-lg"
        style={{
          transform: `rotate(${rotation}deg)`,
          opacity: progress,
          transition: isPulling.current ? 'none' : 'all 0.2s ease-out',
        }}
      >
        {isRefreshing ? (
          <svg
            className="w-10 h-10 text-navy animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <img
            src="/technyan.webp"
            alt="Technyan"
            className="w-10 h-10 object-contain"
            style={{
              transform: `scale(${0.8 + progress * 0.2})`,
            }}
          />
        )}
      </div>
      {progress >= 1 && !isRefreshing && (
        <span className="absolute top-full mt-1 text-xs text-navy font-medium">
          Release to refresh
        </span>
      )}
    </div>
  );
};

export default PullToRefresh;

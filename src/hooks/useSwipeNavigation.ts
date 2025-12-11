import { useEffect, useRef, useCallback, useState } from 'react';

interface SwipeNavigationOptions {
  prevUrl?: string | null;
  nextUrl?: string | null;
  threshold?: number;
  enabled?: boolean;
}

interface SwipeState {
  direction: 'left' | 'right' | null;
  progress: number;
  isSwiping: boolean;
}

export function useSwipeNavigation({
  prevUrl,
  nextUrl,
  threshold = 100,
  enabled = true,
}: SwipeNavigationOptions) {
  const [swipeState, setSwipeState] = useState<SwipeState>({
    direction: null,
    progress: 0,
    isSwiping: false,
  });

  const startX = useRef(0);
  const startY = useRef(0);
  const currentX = useRef(0);
  const isHorizontalSwipe = useRef<boolean | null>(null);

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (!enabled) return;

      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
      currentX.current = startX.current;
      isHorizontalSwipe.current = null;

      setSwipeState({
        direction: null,
        progress: 0,
        isSwiping: true,
      });
    },
    [enabled]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!enabled || !swipeState.isSwiping) return;

      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      const diffX = touchX - startX.current;
      const diffY = touchY - startY.current;

      if (isHorizontalSwipe.current === null) {
        if (Math.abs(diffX) > 10 || Math.abs(diffY) > 10) {
          isHorizontalSwipe.current = Math.abs(diffX) > Math.abs(diffY);
        }
      }

      if (!isHorizontalSwipe.current) {
        return;
      }

      currentX.current = touchX;
      const direction = diffX > 0 ? 'right' : 'left';
      const progress = Math.min(Math.abs(diffX) / threshold, 1);

      const canSwipe =
        (direction === 'right' && prevUrl) || (direction === 'left' && nextUrl);

      if (canSwipe) {
        setSwipeState({
          direction,
          progress,
          isSwiping: true,
        });
      }
    },
    [enabled, swipeState.isSwiping, threshold, prevUrl, nextUrl]
  );

  const handleTouchEnd = useCallback(() => {
    if (!enabled) return;

    const diffX = currentX.current - startX.current;
    const direction = diffX > 0 ? 'right' : 'left';
    const shouldNavigate = Math.abs(diffX) >= threshold;

    if (shouldNavigate && isHorizontalSwipe.current) {
      if (direction === 'right' && prevUrl) {
        window.location.href = prevUrl;
      } else if (direction === 'left' && nextUrl) {
        window.location.href = nextUrl;
      }
    }

    setSwipeState({
      direction: null,
      progress: 0,
      isSwiping: false,
    });

    isHorizontalSwipe.current = null;
  }, [enabled, threshold, prevUrl, nextUrl]);

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return swipeState;
}

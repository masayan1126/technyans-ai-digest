import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const PULL_THRESHOLD = 200;
const MAX_PULL = 700;

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

  const progress = Math.min(pullDistance / PULL_THRESHOLD, 1);
  const rotation = progress * 360;

  return (
    <AnimatePresence>
      {isStandalone && pullDistance > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, height: 0 }}
          className="fixed top-0 left-0 right-0 flex items-center justify-center z-50 pointer-events-none"
          style={{
            height: pullDistance,
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotate: rotation,
            }}
            exit={{ scale: 0 }}
            transition={{
              scale: { type: 'spring', stiffness: 300, damping: 20 },
              rotate: { duration: 0 },
            }}
            className="bg-cream border-2 border-navy p-3 rounded-full shadow-lg"
            style={{ opacity: progress }}
          >
            {isRefreshing ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              >
                <svg
                  className="w-10 h-10 text-navy"
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
              </motion.div>
            ) : (
              <motion.img
                src="/technyan.webp"
                alt="Technyan"
                className="w-10 h-10 object-contain"
                animate={{
                  scale: 0.8 + progress * 0.2,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              />
            )}
          </motion.div>

          <AnimatePresence>
            {progress >= 1 && !isRefreshing && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="absolute top-full mt-2 text-sm text-navy font-medium bg-cream/90 px-3 py-1 rounded-full border border-navy/20"
              >
                Release to refresh
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PullToRefresh;

import { useEffect, useState } from 'react';

/**
 * Custom hook to detect if the device is a touch device (smartphone/tablet)
 * Uses CSS Media Query to detect devices without precise hover capability
 * @returns boolean indicating if device is a touch device
 */
export function useIsTouchDevice(): boolean {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if window is available (for SSR compatibility)
    if (typeof window === 'undefined') return;

    // Media query to detect touch devices
    // (hover: none) = device doesn't support hover (touch devices)
    // (pointer: coarse) = primary input mechanism has limited accuracy (touch)
    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');

    // Set initial value
    setIsTouchDevice(mediaQuery.matches);

    // Handler for media query changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };

    // Listen for changes (e.g., when device orientation changes or external monitor is connected)
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return isTouchDevice;
}

import { useEffect, useState, useCallback } from "react";

export const useTruckScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Throttle the scroll calculation for better performance
  const calculateScrollProgress = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100));
  }, []);

  useEffect(() => {
    // Throttle scroll events
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Calculate initial scroll progress
    calculateScrollProgress();

    // Add throttled scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [calculateScrollProgress]);

  return scrollProgress;
};

// Export default hook
export default useTruckScroll;

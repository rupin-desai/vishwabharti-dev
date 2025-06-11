import { useEffect, useState } from "react";

export const useTruckScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100));
    };

    // Calculate initial scroll progress
    calculateScrollProgress();

    // Add scroll event listener
    window.addEventListener("scroll", calculateScrollProgress, {
      passive: true,
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", calculateScrollProgress);
    };
  }, []);

  return scrollProgress;
};

// Export default hook
export default useTruckScroll;

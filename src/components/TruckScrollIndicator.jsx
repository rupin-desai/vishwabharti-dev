import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useTruckScroll } from "../utils/truckScroll";

const TruckScrollIndicator = () => {
  const scrollProgress = useTruckScroll();
  const [isDragging, setIsDragging] = useState(false);
  const [mouseProgress, setMouseProgress] = useState(0);
  const containerRef = useRef(null);
  const lastScrollTimeRef = useRef(0);

  // Use mouse progress when dragging, otherwise use scroll progress
  const currentProgress = isDragging ? mouseProgress : scrollProgress;

  const handleDragStart = () => {
    setIsDragging(true);
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
    document.body.style.webkitUserSelect = "";
  };

  // More aggressive throttling for better performance
  const throttledScroll = useCallback((targetPosition) => {
    const now = Date.now();
    if (now - lastScrollTimeRef.current > 16) {
      // 60fps
      window.scrollTo({
        top: targetPosition,
        behavior: "auto",
      });
      lastScrollTimeRef.current = now;
    }
  }, []);

  const handleDrag = useCallback(
    (event, info) => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;

      // Use the absolute mouse position from the pointer event
      const mouseX = event.clientX || info.point.x;
      const relativeX = mouseX - containerRect.left;

      // Calculate progress ensuring it's between 0 and 100
      const newProgress = Math.min(
        Math.max((relativeX / containerWidth) * 100, 0),
        100
      );

      setMouseProgress(newProgress);

      const maxScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const targetScrollPosition = (newProgress / 100) * maxScrollHeight;
      throttledScroll(targetScrollPosition);
    },
    [throttledScroll]
  );

  // Handle direct mouse events for perfect tracking
  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const relativeX = e.clientX - containerRect.left;
      const newProgress = Math.min(
        Math.max((relativeX / containerWidth) * 100, 0),
        100
      );

      setMouseProgress(newProgress);

      const maxScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const targetScrollPosition = (newProgress / 100) * maxScrollHeight;
      throttledScroll(targetScrollPosition);
    },
    [isDragging, throttledScroll]
  );

  // Add global mouse move listener when dragging
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleDragEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleDragEnd);
    };
  }, [isDragging, handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-0 left-0 w-full h-20 pointer-events-none z-50"
    >
      {/* Road/Track Base */}
      <div className="absolute bottom-0 w-full h-2 bg-gray-500">
        <div
          className="absolute bottom-0 left-0 h-full bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success"
          style={{ width: `${currentProgress}%` }}
        />

        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 opacity-60">
          <div className="flex justify-evenly h-full">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-8 h-full bg-white"
                style={{
                  clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Truck - Perfect mouse following */}
      <motion.div
        className="absolute bottom-0 w-24 h-24 flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
        style={{
          left: `${currentProgress}%`,
          transform: "translateX(-50%)",
        }}
        animate={!isDragging ? { y: [0, -3, 0] } : {}}
        transition={
          !isDragging
            ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
            : {}
        }
        onMouseDown={handleDragStart}
        whileDrag={{ scale: 1.1, y: -5, zIndex: 100 }}
        // Remove Framer Motion's drag handling to use our custom implementation
        drag={false}
      >
        <img
          src="/images/truck.png"
          alt="Delivery Truck"
          className="w-full h-full object-contain"
          style={{ pointerEvents: "none" }}
        />

        {/* Smoke effect only when dragging */}
        {isDragging && (
          <motion.div
            className="absolute -top-3 -left-3 w-3 h-3 bg-gray-400 rounded-full opacity-70"
            animate={{
              scale: [0, 1.2, 0],
              y: [0, -15, -30],
              x: [-8, -15, -22],
              opacity: [0.7, 0.3, 0],
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        {/* Drag indicator */}
        {isDragging && (
          <motion.div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-theme-primary text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Drag to navigate
          </motion.div>
        )}
      </motion.div>

      {/* Dust effect when dragging */}
      {isDragging && (
        <motion.div
          className="absolute bottom-3 w-1.5 h-1.5 bg-yellow-600 rounded-full opacity-60"
          style={{ left: `calc(${currentProgress}% - 24px)` }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0.6, 0.3, 0],
            y: [0, -8, -16],
          }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </div>
  );
};

export default TruckScrollIndicator;

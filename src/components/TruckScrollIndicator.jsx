import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTruckScroll } from "../utils/truckScroll";

const TruckScrollIndicator = () => {
  const scrollProgress = useTruckScroll();
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const containerRef = useRef(null);

  // Use drag progress when dragging, otherwise use scroll progress
  const currentProgress = isDragging ? dragProgress : scrollProgress;

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Optionally scroll to the position where truck was dragged
    const targetScrollPosition =
      (dragProgress / 100) *
      (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  const handleDrag = (event, info) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const relativeX = info.point.x - containerRect.left;

    // Calculate progress as percentage, constrained between 0 and 100
    const newProgress = Math.min(
      Math.max((relativeX / containerWidth) * 100, 0),
      100
    );
    setDragProgress(newProgress);
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-0 left-0 w-full h-20 pointer-events-none z-50"
    >
      {/* Road/Track Base */}
      <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400">
        {/* Road Progress Fill */}
        <div
          className="absolute bottom-0 left-0 h-full bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success transition-all duration-300 ease-out"
          style={{
            width: `${currentProgress}%`,
          }}
        />

        {/* Road markings overlay */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 opacity-60">
          <div className="flex justify-evenly h-full">
            {Array.from({ length: 20 }).map((_, i) => (
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

      {/* Truck - Now draggable with pointer events enabled */}
      <motion.div
        className="absolute bottom-2 w-16 h-12 flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
        style={{
          left: `${currentProgress}%`,
          transform: "translateX(-50%)",
        }}
        animate={{
          y: isDragging ? 0 : [0, -3, 0], // Stop bouncing when dragging
        }}
        transition={{
          duration: isDragging ? 0 : 2,
          repeat: isDragging ? 0 : Infinity,
          ease: "easeInOut",
        }}
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        whileDrag={{
          scale: 1.1,
          y: -5,
          zIndex: 100,
          filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.3))",
        }}
      >
        <img
          src="/images/truck.png"
          alt="Delivery Truck"
          className="w-full h-full object-contain drop-shadow-lg"
          style={{
            filter: "drop-shadow(3px 3px 6px rgba(0,0,0,0.4))",
            pointerEvents: "none", // Prevent image from interfering with drag
          }}
        />

        {/* Exhaust smoke effect when moving (only when not dragging) */}
        {!isDragging && currentProgress > 0 && (
          <div className="absolute -top-3 -left-3">
            <motion.div
              className="w-2.5 h-2.5 bg-gray-400 rounded-full opacity-60"
              animate={{
                scale: [0, 1, 0],
                y: [0, -12, -24],
                x: [-6, -12, -18],
                opacity: [0.6, 0.4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="w-2 h-2 bg-gray-300 rounded-full opacity-40 absolute top-1 left-1"
              animate={{
                scale: [0, 1, 0],
                y: [0, -10, -20],
                x: [-4, -8, -12],
                opacity: [0.4, 0.2, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.3,
              }}
            />
          </div>
        )}

        {/* Drag indicator when hovering */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-theme-primary text-white px-2 py-1 rounded text-xs font-medium opacity-0 pointer-events-none"
          animate={{
            opacity: isDragging ? 1 : 0,
            y: isDragging ? 0 : 5,
          }}
          transition={{ duration: 0.2 }}
        >
          Drag me!
        </motion.div>
      </motion.div>

      {/* Wheel dust effects when scrolling (only when not dragging) */}
      {!isDragging && currentProgress > 0 && (
        <>
          <motion.div
            className="absolute bottom-3 w-1.5 h-1.5 bg-yellow-600 rounded-full opacity-50"
            style={{
              left: `calc(${currentProgress}% - 24px)`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0.5, 0.3, 0],
              y: [0, -6, -12],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute bottom-3 w-1.5 h-1.5 bg-yellow-700 rounded-full opacity-40"
            style={{
              left: `calc(${currentProgress}% - 30px)`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0.4, 0.2, 0],
              y: [0, -4, -10],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.2,
            }}
          />
        </>
      )}

      {/* Progress tooltip when dragging */}
      {isDragging && (
        <motion.div
          className="absolute bottom-16 bg-theme-dark text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg"
          style={{
            left: `${dragProgress}%`,
            transform: "translateX(-50%)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {Math.round(dragProgress)}%
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-theme-dark"></div>
        </motion.div>
      )}
    </div>
  );
};

export default TruckScrollIndicator;

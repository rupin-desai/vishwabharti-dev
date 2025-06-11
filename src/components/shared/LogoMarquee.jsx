import React from "react";
import { motion } from "framer-motion";

/**
 * High-performance logo marquee component with hardware acceleration
 * @param {Object} props
 * @param {Array} props.logos - Array of logo objects with image and alt properties
 * @param {number} props.speed - Speed factor (higher = faster, default: 10)
 * @param {boolean} props.reverse - Whether to reverse direction (default: false)
 * @param {string} props.className - Additional classes for the container
 * @param {number} props.height - Height in pixels (default: 80)
 * @param {number} props.gap - Gap between logos in pixels (default: 16)
 * @param {boolean} props.grayscale - Whether to apply grayscale filter (default: true)
 */
const LogoMarquee = ({
  logos = [],
  speed = 10,
  reverse = false,
  className = "",
  height = 80,
  gap = 16,
  grayscale = true,
}) => {
  // Triple the logos for seamless infinite scrolling
  const tripleLogos = [...logos, ...logos, ...logos];

  // Calculate animation duration based on speed parameter (lower = faster)
  const duration = 300 / speed;

  // Animation variants with direction control
  const marqueeVariants = {
    animate: {
      transform: reverse
        ? "translate3d(0, 0, 0)"
        : "translate3d(-66.666%, 0, 0)",
      transition: {
        transform: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
          ...(reverse && {
            from: "-66.666%",
            to: "0%",
          }),
        },
      },
    },
  };

  return (
    <div
      className={`relative overflow-hidden w-full ${className}`}
      style={{ height: `${height}px` }}
    >
      {/* Gradient overlay - left side */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none dark:from-gray-900" />

      {/* Main scrolling container */}
      <div className="flex overflow-hidden relative w-full h-full">
        <motion.div
          className={`flex gap-${gap} whitespace-nowrap absolute`}
          variants={marqueeVariants}
          animate="animate"
          style={{
            width: "300%", // Triple width for triple logos
            [reverse ? "right" : "left"]: "0",
            willChange: "transform",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            perspective: 1000,
          }}
        >
          {/* Logo items */}
          {tripleLogos.map((logo, index) => (
            <motion.div
              key={`logo-${index}`}
              className="inline-flex flex-shrink-0 items-center justify-center bg-white p-4 rounded-lg shadow-sm dark:bg-gray-800"
              style={{
                width: `${height * 2}px`,
                height: `${height}px`,
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <img
                src={logo.image}
                alt={logo.alt}
                className="w-auto h-auto object-contain transition-all duration-300"
                style={{
                  maxWidth: `${height * 1.5}px`,
                  maxHeight: `${height * 0.75}px`,
                  minWidth: "80px",
                  filter: grayscale ? "grayscale(100%)" : "none",
                  opacity: grayscale ? 0.7 : 1,
                  willChange: "filter, opacity, transform",
                }}
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/${height}x${
                    height / 2
                  }?text=Logo`;
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlay - right side */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none dark:from-gray-900" />
    </div>
  );
};

export default LogoMarquee;

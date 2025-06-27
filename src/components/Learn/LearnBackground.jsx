// components/Learn/LearnBackground.jsx
import React from "react";
import { motion } from "framer-motion";

const LearnBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top-right SVG pattern */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: -40 }}
        animate={{ opacity: 0.2, x: 0, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        className="absolute top-0 right-0 w-72 h-72"
      >
        <svg
          className="w-full h-full text-theme-primary/20"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="100" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Bottom-left gradient blur */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-theme-primary/30 to-theme-accent/20 rounded-full blur-3xl"
      />

      {/* Optional middle parallax blur */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="absolute top-1/3 left-1/2 w-[300px] h-[300px] -translate-x-1/2 rounded-full bg-theme-success/30 blur-2xl"
      />
    </div>
  );
};

export default LearnBackground;

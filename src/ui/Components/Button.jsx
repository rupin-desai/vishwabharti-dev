import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({
  children,
  to = "",
  variant = "primary",
  color = "blue",
  className = "",
  scrollToId = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  // Color configurations
  const colors = {
    blue: {
      primary: "bg-[#00B5CA] hover:bg-[#00a3b6] text-white",
      outline: "border border-[#00B5CA] text-[#00B5CA] hover:bg-[#00B5CA]/10",
    },
    gradient: {
      primary:
        "bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 hover:from-indigo-700 hover:via-sky-700 hover:to-teal-700 text-white",
      outline:
        "border border-transparent bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600/10",
    },
    yellow: {
      primary:
        "bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 hover:from-indigo-700 hover:via-sky-700 hover:to-teal-700 text-white",
      outline:
        "border border-transparent bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600/10",
    },
    white: {
      primary: "bg-white hover:bg-gray-100 text-gray-900",
      outline: "border border-white text-white hover:bg-white/10",
    },
    dark: {
      primary: "bg-gray-900 hover:bg-gray-800 text-white",
      outline: "border border-gray-900 text-gray-900 hover:bg-gray-900/10",
    },
  };

  // Base classes for all buttons - added cursor-pointer
  const baseStyles =
    "font-medium px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center justify-center cursor-pointer";

  // Combined styles based on props, with fallback to blue primary if color or variant doesn't exist
  const buttonStyles = `${baseStyles} ${
    colors[color]?.[variant] || colors.blue.primary
  } ${className}`;

  // Handle scroll to element
  const handleScroll = (elementId) => {
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Animation configuration
  const buttonAnimation = {
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  // If it's a regular button
  if (!to) {
    return (
      <motion.button
        type={type}
        className={buttonStyles}
        onClick={(e) => {
          if (onClick) onClick(e);
          if (scrollToId) handleScroll(scrollToId);
        }}
        disabled={disabled}
        whileTap="tap"
        variants={buttonAnimation}
        style={{ transformOrigin: "center" }}
      >
        {children}
      </motion.button>
    );
  }

  // If it has an internal link
  if (to.startsWith("/") || to === "#") {
    return (
      <motion.div
        whileTap="tap"
        variants={buttonAnimation}
        style={{ transformOrigin: "center", display: "inline-block" }}
      >
        <Link
          to={to}
          className={buttonStyles}
          onClick={(e) => {
            if (onClick) onClick(e);
            if (scrollToId) {
              // If we're navigating to a new page and want to scroll
              setTimeout(() => handleScroll(scrollToId), 100);
            } else {
              // Otherwise just scroll to top
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  // If it's an external link
  return (
    <motion.div
      whileTap="tap"
      variants={buttonAnimation}
      style={{ transformOrigin: "center", display: "inline-block" }}
    >
      <a
        href={to}
        className={buttonStyles}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    </motion.div>
  );
};

export default Button;

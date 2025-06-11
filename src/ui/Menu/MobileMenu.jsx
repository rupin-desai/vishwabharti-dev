import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef(null);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle clicks outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <motion.div
      ref={menuRef}
      initial={{ translateX: "100%" }}
      animate={{
        translateX: isOpen ? 0 : "100%",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-lg z-50 flex flex-col"
    >
      <div className="flex justify-between items-center p-5 border-b">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src="/logos/logo_full.png"
            alt="Vishwabharti Logo"
            className="h-24 object-contain"
          />
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="text-gray-700 hover:text-theme-primary p-2"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        <Link
          to="/"
          className="block py-2 text-gray-700 hover:text-theme-primary font-medium transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>

        <a
          href="#"
          className="block py-2 text-gray-700 hover:text-theme-primary font-medium transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Learn
        </a>

        <a
          href="#"
          className="block py-2 text-gray-700 hover:text-theme-primary font-medium transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Program
        </a>

        <a
          href="#"
          className="block py-2 text-gray-700 hover:text-theme-primary font-medium transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Book
        </a>

        <a
          href="#"
          className="block py-2 text-gray-700 hover:text-theme-primary font-medium transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>

        <a
          href="#"
          className="block bg-theme-primary hover:bg-theme-warning text-white px-6 py-3 rounded-md transition-colors text-center mt-6"
          onClick={() => setIsOpen(false)}
        >
          Book Now
        </a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;

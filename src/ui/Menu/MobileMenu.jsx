import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const [expandedMenus, setExpandedMenus] = useState({
    services: false,
    industries: false,
  });
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

  const toggleSubmenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

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
        {/* Logo - Updated to use image */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src="/logos/logo_full.png"
            alt="GSK Consulting Logo"
            className="h-24 object-contain"
          />
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600 p-2"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        <Link
          to="/"
          className="block py-2 text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600 font-medium transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>

        <Link
          to="#"
          className="block py-2 text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600 font-medium transition-colors"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>

        {/* Services with submenu */}
        <div className="py-2">
          <div
            className="flex justify-between items-center cursor-pointer group"
            onClick={() => toggleSubmenu("services")}
          >
            <span className="text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-sky-600 group-hover:to-teal-600 font-medium transition-colors">
              Services
            </span>
            {expandedMenus.services ? (
              <ChevronUp
                size={20}
                className="text-gray-500 group-hover:text-sky-600 transition-colors"
              />
            ) : (
              <ChevronDown
                size={20}
                className="text-gray-500 group-hover:text-sky-600 transition-colors"
              />
            )}
          </div>

          {expandedMenus.services && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="ml-4 mt-2 space-y-2"
            >
              <Link
                to="#"
                className="block py-2 text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Business & Management Consulting
              </Link>
              <Link
                to="#"
                className="block py-2 text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Project Management Services
              </Link>
              <Link
                to="#"
                className="block py-2 text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Strategic Planning & Execution
              </Link>
            </motion.div>
          )}
        </div>

        {/* Industries with submenu */}
        <div className="py-2">
          <div
            className="flex justify-between items-center cursor-pointer group"
            onClick={() => toggleSubmenu("industries")}
          >
            <span className="text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-sky-600 group-hover:to-teal-600 font-medium transition-colors">
              Industries
            </span>
            {expandedMenus.industries ? (
              <ChevronUp
                size={20}
                className="text-gray-500 group-hover:text-sky-600 transition-colors"
              />
            ) : (
              <ChevronDown
                size={20}
                className="text-gray-500 group-hover:text-sky-600 transition-colors"
              />
            )}
          </div>

          {expandedMenus.industries && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="ml-4 mt-2 space-y-2"
            >
              <Link
                to="#"
                className="block py-2 text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Manufacturing
              </Link>
              <Link
                to="#"
                className="block py-2 text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Technology
              </Link>
              <Link
                to="#"
                className="block py-2 text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Healthcare
              </Link>
            </motion.div>
          )}
        </div>

        <Link
          to="#"
          className="block py-2 text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600 font-medium transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>

        <Link
          to="#"
          className="block bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 hover:from-indigo-700 hover:via-sky-700 hover:to-teal-700 text-white px-6 py-3 rounded-md transition-colors text-center mt-6"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  );
};

export default MobileMenu;

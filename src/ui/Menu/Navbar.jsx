import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  CheckCircle,
  BarChart2,
  PieChart,
  Users,
  LineChart,
  Briefcase,
  CircleDot,
} from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Button from "../Components/Button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const bannerControls = useAnimation();
  const currentYear = new Date().getFullYear();

  // Timeout ref for delayed dropdown closing
  const closeTimeoutRef = useRef(null);

  // States for scroll behavior
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Function to show dropdown - clear any pending timeout
  const showDropdown = (dropdown) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  // Function to hide dropdown with delay
  const hideDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  // Check if a path is active
  const isPathActive = (path) => {
    return location.pathname.startsWith(path);
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Handle navigation changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setVisible(true);
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Banner scrolling animation
  useEffect(() => {
    bannerControls.start({
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [bannerControls]);

  // Styles for nav link underline
  const navLinkStyle = {
    position: "relative",
    paddingBottom: "2px",
  };

  const navLinkAfterStyle = {
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: "-2px",
    left: 0,
    backgroundImage: "linear-gradient(to right, #4f46e5, #0284c7, #0d9488)",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease-out",
  };

  return (
    <>
      {/* Announcement Banner - Updated with gradient */}
      <div className="bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 text-white overflow-hidden py-1">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex items-center space-x-8 mx-4 text-sm font-medium"
            animate={bannerControls}
          >
            <div className="flex items-center gap-1.5">
              <Briefcase size={14} className="stroke-[2.5]" />
              <span>Expert Business & Management Consulting</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Users size={14} className="stroke-[2.5]" />
              <span>Client-Focused Project Management</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <BarChart2 size={14} className="stroke-[2.5]" />
              <span>Strategic Business Growth Solutions</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <PieChart size={14} className="stroke-[2.5]" />
              <span>Data-Driven Decision Making</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <LineChart size={14} className="stroke-[2.5]" />
              <span>Performance Optimization</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="stroke-[2.5]" />
              <span>Proven Track Record of Success</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Briefcase size={14} className="stroke-[2.5]" />
              <span>
                Trusted by Leading Businesses Since {currentYear - 10}
              </span>
            </div>

            {/* Second set for continuous scrolling */}
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Briefcase size={14} className="stroke-[2.5]" />
              <span>Expert Business & Management Consulting</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Users size={14} className="stroke-[2.5]" />
              <span>Client-Focused Project Management</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <BarChart2 size={14} className="stroke-[2.5]" />
              <span>Strategic Business Growth Solutions</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <PieChart size={14} className="stroke-[2.5]" />
              <span>Data-Driven Decision Making</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <LineChart size={14} className="stroke-[2.5]" />
              <span>Performance Optimization</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="stroke-[2.5]" />
              <span>Proven Track Record of Success</span>
            </div>
            <CircleDot size={6} className="opacity-60" />
            <div className="flex items-center gap-1.5">
              <Briefcase size={14} className="stroke-[2.5]" />
              <span>
                Trusted by Leading Businesses Since {currentYear - 10}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <header
        className={`bg-white shadow-md sticky top-0 z-40 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo - Updated to use image */}
          <Link to="/" className="flex items-center">
            <img
              src="/logos/logo_full.png"
              alt="GSK Consulting Logo"
              className="h-18 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex uppercase space-x-8">
            {/* Home Link with span wrapper */}
            <span
              className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600"
              style={navLinkStyle}
              onMouseEnter={() => setHoveredItem("home")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600"
                    : "font-medium uppercase"
                }
              >
                Home
              </NavLink>
              <span
                style={{
                  ...navLinkAfterStyle,
                  transform:
                    location.pathname === "/" || hoveredItem === "home"
                      ? "scaleX(1)"
                      : "scaleX(0)",
                }}
              ></span>
            </span>

            {/* About Link with span wrapper */}
            <span
              className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600"
              style={navLinkStyle}
              onMouseEnter={() => setHoveredItem("about")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600"
                    : "font-medium uppercase"
                }
              >
                About
              </NavLink>
              <span
                style={{
                  ...navLinkAfterStyle,
                  transform:
                    location.pathname === "/about" || hoveredItem === "about"
                      ? "scaleX(1)"
                      : "scaleX(0)",
                }}
              ></span>
            </span>

            {/* Services Dropdown */}
            <div className="relative">
              {/* Button trigger only - reduced hitbox */}
              <div
                className="flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => {
                  showDropdown("services");
                  setHoveredItem("services");
                }}
                onMouseLeave={() => {
                  hideDropdown();
                  setHoveredItem(null);
                }}
              >
                <span
                  className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600"
                  style={navLinkStyle}
                >
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive
                        ? "font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600"
                        : "font-medium uppercase"
                    }
                  >
                    Services
                  </NavLink>
                  <span
                    style={{
                      ...navLinkAfterStyle,
                      transform:
                        location.pathname.startsWith("/services") ||
                        hoveredItem === "services"
                          ? "scaleX(1)"
                          : "scaleX(0)",
                    }}
                  ></span>
                </span>
                <ChevronDown
                  size={16}
                  className="text-gray-600 hover:text-sky-600 transition-colors"
                />
              </div>

              {/* Dropdown Menu */}
              <div
                className="absolute left-0 top-full pt-2"
                onMouseEnter={() => {
                  showDropdown("services");
                  setHoveredItem("services");
                }}
                onMouseLeave={() => {
                  hideDropdown();
                  setHoveredItem(null);
                }}
              >
                <div
                  className={`bg-white shadow-lg rounded-md py-2 w-72 transform transition-all duration-200 ${
                    activeDropdown === "services"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="block px-4 py-2 text-sm hover:bg-gray-100">
                    <span className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                      <Link to="/services/business-consulting">
                        Business & Management Consulting
                      </Link>
                    </span>
                  </div>
                  <div className="block px-4 py-2 text-sm hover:bg-gray-100">
                    <span className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                      <Link to="/services/project-management">
                        Project Management Services
                      </Link>
                    </span>
                  </div>
                  <div className="block px-4 py-2 text-sm hover:bg-gray-100">
                    <span className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                      <Link to="/services/strategic-planning">
                        Strategic Planning & Execution
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative">
              {/* Button trigger only - reduced hitbox */}
              <div
                className="flex items-center space-x-1 cursor-pointer"
                onMouseEnter={() => {
                  showDropdown("industries");
                  setHoveredItem("industries");
                }}
                onMouseLeave={() => {
                  hideDropdown();
                  setHoveredItem(null);
                }}
              >
                <span
                  className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600"
                  style={navLinkStyle}
                >
                  <NavLink
                    to="/industries"
                    className={({ isActive }) =>
                      isActive
                        ? "font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600"
                        : "font-medium uppercase"
                    }
                  >
                    Industries
                  </NavLink>
                  <span
                    style={{
                      ...navLinkAfterStyle,
                      transform:
                        location.pathname.startsWith("/industries") ||
                        hoveredItem === "industries"
                          ? "scaleX(1)"
                          : "scaleX(0)",
                    }}
                  ></span>
                </span>
                <ChevronDown
                  size={16}
                  className="text-gray-600 hover:text-sky-600 transition-colors"
                />
              </div>

              {/* Dropdown Menu */}
              <div
                className="absolute left-0 top-full pt-2"
                onMouseEnter={() => {
                  showDropdown("industries");
                  setHoveredItem("industries");
                }}
                onMouseLeave={() => {
                  hideDropdown();
                  setHoveredItem(null);
                }}
              >
                <div
                  className={`bg-white shadow-lg rounded-md py-2 w-64 transform transition-all duration-200 ${
                    activeDropdown === "industries"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="block px-4 py-2 text-sm hover:bg-gray-100">
                    <span className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                      <Link to="/industries/manufacturing">Manufacturing</Link>
                    </span>
                  </div>
                  <div className="block px-4 py-2 text-sm hover:bg-gray-100">
                    <span className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                      <Link to="/industries/technology">Technology</Link>
                    </span>
                  </div>
                  <div className="block px-4 py-2 text-sm hover:bg-gray-100">
                    <span className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600">
                      <Link to="/industries/healthcare">Healthcare</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Link with span wrapper */}
            <span
              className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600"
              style={navLinkStyle}
              onMouseEnter={() => setHoveredItem("contact")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600"
                    : "font-medium uppercase"
                }
              >
                Contact
              </NavLink>
              <span
                style={{
                  ...navLinkAfterStyle,
                  transform:
                    location.pathname === "/contact" ||
                    hoveredItem === "contact"
                      ? "scaleX(1)"
                      : "scaleX(0)",
                }}
              ></span>
            </span>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button to="/contact" color="gradient">
              GET STARTED
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-sky-600 hover:to-teal-600"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {/* Overlay when mobile menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Menu,
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
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const bannerControls = useAnimation();
  const currentYear = new Date().getFullYear();

  // States for scroll behavior
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  // Banner scrolling animation - adjusted for 10x repetition
  useEffect(() => {
    bannerControls.start({
      x: [0, -2000], // Adjust distance based on content width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Slightly longer duration for smoother scroll
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
    background:
      "linear-gradient(to right, var(--color-theme-primary), var(--color-theme-success))",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease-out",
  };

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success text-white overflow-hidden py-1">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex items-center space-x-8 mx-4 text-sm font-medium"
            animate={bannerControls}
          >
            {/* Repeat the banner content 10 times for infinite effect */}
            {Array.from({ length: 10 }).map((_, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-1.5">
                  <Briefcase size={14} className="stroke-[2.5]" />
                  <span>Professional Driver Training Programs</span>
                </div>
                <CircleDot size={6} className="opacity-60" />
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="stroke-[2.5]" />
                  <span>International Certification Available</span>
                </div>
                <CircleDot size={6} className="opacity-60" />
                <div className="flex items-center gap-1.5">
                  <BarChart2 size={14} className="stroke-[2.5]" />
                  <span>Global Employment Opportunities</span>
                </div>
                <CircleDot size={6} className="opacity-60" />
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="stroke-[2.5]" />
                  <span>100% Job Placement Assistance</span>
                </div>
                <CircleDot size={6} className="opacity-60" />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      <header
        className={`bg-white shadow-md sticky top-0 z-40 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logos/logo_full.png"
              alt="Vishwabharti Logo"
              className="h-18 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex uppercase space-x-8">
            {/* Home Link */}
            <span
              className="text-gray-700 hover:text-theme-primary"
              style={navLinkStyle}
              onMouseEnter={() => setHoveredItem("home")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "font-medium uppercase text-theme-primary"
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

            {/* Learn Link */}
            <span
              className="text-gray-700 hover:text-theme-primary"
              style={navLinkStyle}
              onMouseEnter={() => setHoveredItem("learn")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a href="#" className="font-medium uppercase">
                Learn
              </a>
              <span
                style={{
                  ...navLinkAfterStyle,
                  transform:
                    hoveredItem === "learn" ? "scaleX(1)" : "scaleX(0)",
                }}
              ></span>
            </span>

            {/* Program Link */}
            <span
              className="text-gray-700 hover:text-theme-primary"
              style={navLinkStyle}
              onMouseEnter={() => setHoveredItem("program")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a href="#" className="font-medium uppercase">
                Program
              </a>
              <span
                style={{
                  ...navLinkAfterStyle,
                  transform:
                    hoveredItem === "program" ? "scaleX(1)" : "scaleX(0)",
                }}
              ></span>
            </span>

            {/* Book Link */}
            <span
              className="text-gray-700 hover:text-theme-primary"
              style={navLinkStyle}
              onMouseEnter={() => setHoveredItem("book")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a href="#" className="font-medium uppercase">
                Book
              </a>
              <span
                style={{
                  ...navLinkAfterStyle,
                  transform: hoveredItem === "book" ? "scaleX(1)" : "scaleX(0)",
                }}
              ></span>
            </span>

            {/* Contact Link */}
            <span
              className="text-gray-700 hover:text-theme-primary"
              style={navLinkStyle}
              onMouseEnter={() => setHoveredItem("contact")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a href="#" className="font-medium uppercase">
                Contact
              </a>
              <span
                style={{
                  ...navLinkAfterStyle,
                  transform:
                    hoveredItem === "contact" ? "scaleX(1)" : "scaleX(0)",
                }}
              ></span>
            </span>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button to="#" color="gradient">
              BOOK NOW
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-gray-700 hover:text-theme-primary"
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

import React from "react";
import Button from "../../ui/Components/Button";
import { motion } from "framer-motion";

const HomeHero = () => {
  // Function to scroll to the HomeStats section
  const scrollToStats = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const statsSection = document.getElementById("home-stats-section");
    if (statsSection) {
      const navbarHeight = 80; // Estimated navbar height
      const sectionPosition =
        statsSection.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      transform: "translateX(-50px)",
    },
    visible: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const subheadingVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(30px)",
    },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(30px)",
    },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(30px)",
    },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <section
      className="relative h-[90vh] sm:h-[85vh] md:h-[80vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`,
        backgroundPosition: "center 30%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            variants={headingVariants}
          >
            Drive Your Future Forward
          </motion.h1>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            variants={subheadingVariants}
          >
            <span className="bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success bg-clip-text text-transparent">
              Professional Driver Training
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 mx-auto px-2 sm:px-0"
            variants={paragraphVariants}
          >
            Transform your driving skills into a global career opportunity. Join
            our comprehensive training program and unlock international
            employment prospects.
          </motion.p>

          <motion.div className="flex justify-center" variants={buttonVariants}>
            <Button
              color="gradient"
              variant="primary"
              onClick={scrollToStats}
              className="px-5 py-2.5 sm:px-6 sm:py-3 text-base sm:text-lg"
            >
              Start Your Journey
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;

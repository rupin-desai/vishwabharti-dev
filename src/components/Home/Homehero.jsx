import React from "react";
import Button from "../../ui/Components/Button";
import { motion } from "framer-motion";

const HomeHero = () => {
  // Function to scroll to the HomeStats section
  const scrollToStats = (e) => {
    e.preventDefault();
    const statsSection = document.getElementById("home-stats-section");
    if (statsSection) {
      const navbarHeight = 80;
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

  // Subtle animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
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
      {/* Simple overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Organization Name */}
          <motion.div className="mb-6" variants={fadeInVariants}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-2">
              Bharat Vishwa Saarti
            </h1>
            <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-orange-400 to-green-500 rounded-full opacity-80"></div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
            variants={fadeInUpVariants}
          >
            Drive Your Future Forward
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-6"
            variants={fadeInUpVariants}
          >
            <span className="bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent">
              Professional Driver Training
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-200 mb-8 md:mb-10 mx-auto px-2 sm:px-0 max-w-2xl leading-relaxed"
            variants={fadeInUpVariants}
          >
            Transform your driving skills into a global career opportunity. Join
            our comprehensive training program and unlock international
            employment prospects.
          </motion.p>

          {/* Call-to-Action */}
          <motion.div
            className="flex justify-center"
            variants={fadeInUpVariants}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                color="gradient"
                variant="primary"
                onClick={scrollToStats}
                className="px-8 py-3 text-lg font-medium bg-gradient-to-r from-orange-400 to-green-500 hover:from-orange-500 hover:to-green-600 transition-all duration-300 shadow-lg"
              >
                Start Your Journey
              </Button>
            </motion.div>
          </motion.div>

          {/* Simple trust indicators */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-8 text-gray-300 text-sm"
            variants={fadeInVariants}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
              <span>International Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
              <span>Expert Instructors</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span>Job Placement Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;

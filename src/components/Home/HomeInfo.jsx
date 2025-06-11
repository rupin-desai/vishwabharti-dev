import React, { useRef } from "react";
import Button from "../../ui/Components/Button";
import { motion, useInView } from "framer-motion";

const HomeInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Function to scroll to the HomeContact section
  const scrollToContact = (e) => {
    e.stopPropagation(); // Prevent the section click event
    const contactSection = document.getElementById("home-contact-section");
    if (contactSection) {
      const navbarHeight = 80; // Estimated navbar height
      const sectionPosition =
        contactSection.getBoundingClientRect().top +
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
        staggerChildren: 0.05,
      },
    },
  };

  const decorationVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 0, 0) scale(0.8)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0) scale(1)",
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 30px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 30px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 20px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
        delay: 0.2,
      },
    },
  };

  return (
    <section
      className="py-12 sm:py-16 relative overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-teal-50"
      ref={ref}
      style={{
        perspective: 1000,
        backfaceVisibility: "hidden",
      }}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-4 sm:left-10 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-teal-100/40 to-indigo-100/40 rounded-full pointer-events-none"
        variants={decorationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ willChange: "transform, opacity" }}
      ></motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center px-2 sm:px-0"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Title */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 relative"
            variants={titleVariants}
            style={{ willChange: "transform, opacity" }}
          >
            Ready to Transform Your Business?
          </motion.h2>

          {/* Content */}
          <motion.p
            className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
            variants={contentVariants}
            style={{ willChange: "transform, opacity" }}
          >
            Let's discuss how our strategic consulting and project management
            expertise can help you achieve measurable results and sustainable
            growth.
          </motion.p>

          <motion.div
            className="flex justify-center"
            variants={buttonVariants}
            style={{ willChange: "transform, opacity" }}
          >
            <Button
              color="gradient"
              className="px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg"
              onClick={scrollToContact}
            >
              Get in Touch Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeInfo;

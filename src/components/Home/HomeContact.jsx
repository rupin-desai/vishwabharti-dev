import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactCard from "../../ui/Components/ContactCard";

const HomeContact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });

  // Animation variants
  const titleVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 20px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 30px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  return (
    <section
      id="home-contact-section"
      className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 bg-gray-50 relative overflow-hidden"
      ref={sectionRef}
      style={{
        perspective: 1000,
        backfaceVisibility: "hidden",
      }}
    >
      {/* Simple background gradient */}

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left-aligned title */}
          <motion.div
            ref={contentRef}
            className="text-left lg:mt-8"
            variants={titleVariants}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            style={{ willChange: "transform, opacity" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <div className="w-32 sm:w-60 h-1 ml-1 sm:ml-2 bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
              Have a question or ready to explore how we can help? Reach out to
              our team.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Fill out the form and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Contact form - spans 2 columns on larger screens */}
          <motion.div
            className="lg:col-span-2"
            variants={cardVariants}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            style={{ willChange: "transform, opacity" }}
          >
            <ContactCard compact={true} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;

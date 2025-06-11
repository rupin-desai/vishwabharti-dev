import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServicesAbout = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, transform: "translateX(-20px)" },
    visible: {
      opacity: 1,
      transform: "translateX(0)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, transform: "translateX(20px)" },
    visible: {
      opacity: 1,
      transform: "translateX(0)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 px-6 sm:px-12 bg-gray-50 relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Text */}
          <motion.div
            className="space-y-0 text-center lg:text-left"
            variants={textVariants}
          >
            {/* Title and underline */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {data.title}
              </h2>
              {/* Centered underline on mobile */}
              <div className="w-20 h-1 bg-[#e6b400] mt-2 mx-auto lg:mx-0"></div>
            </div>

            {data.paragraphs.map((paragraph, index) => (
              <div key={index} className="relative mt-10">
                <p className="relative pl-2 lg:pl-2 px-4 md:px-6 lg:px-0 text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right content - Image */}
          <motion.div className="relative h-full" variants={imageVariants}>
            <div className="relative z-10">
              <img
                src={data.image}
                alt="Business consulting services"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 rounded-lg border-4 border-[#e6b400]/20 -z-10"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesAbout;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, transform: "translateY(20px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, transform: "translateY(30px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 0.8,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  // Decorative element variants
  const circleVariants = {
    hidden: { opacity: 0, transform: "scale(0.8)" },
    visible: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
    floating: (custom) => ({
      transform: `translateY(${custom}px)`,
      transition: {
        transform: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut",
        },
      },
    }),
  };

  const dotsVariants = {
    hidden: { opacity: 0, transform: "translateX(-20px)" },
    visible: {
      opacity: 0.15,
      transform: "translateX(0px)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const smallCircleVariants = {
    hidden: { opacity: 0, transform: "scale(0)" },
    visible: {
      opacity: 0.2,
      transform: "scale(1)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-[#00B5CA] py-20 md:py-28 px-6 relative overflow-hidden"
    >
      {/* Dots grid decorative element - keep this */}
      <motion.div
        className="absolute top-1/2 left-10 transform -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 opacity-5"
        variants={dotsVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white"
            ></div>
          ))}
        </div>
      </motion.div>

      {/* Replace bottom right line with a small transparent circle */}
      <motion.div
        className="absolute bottom-16 right-20 w-12 h-12 rounded-full bg-white opacity-10"
        variants={smallCircleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />

      {/* Main content */}
      <motion.div
        className="container mx-auto max-w-4xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={titleVariants} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            IILOS Global Vision
          </h2>

          <motion.div
            className="w-24 h-1 bg-white mx-auto mb-6 origin-center"
            variants={lineVariants}
          />
        </motion.div>

        <motion.p
          className="text-white text-lg md:text-xl leading-relaxed text-center font-light"
          variants={textVariants}
        >
          To be a world-renowned center for logistics excellence, shaping the
          industry's future through cutting-edge research, impactful education,
          and strategic partnerships, contributing to a more efficient,
          sustainable, and interconnected global supply chain.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutVision;

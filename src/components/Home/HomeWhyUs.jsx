import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrophyIcon,
  UsersIcon,
  ScaleIcon,
  BarChartIcon,
  PieChartIcon,
  BriefcaseIcon,
} from "lucide-react";

const WhyUsCard = ({ icon, title, description, variants, iconColor }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center relative overflow-hidden group h-full transition-all duration-300 hover:shadow-xl"
    >
      {/* Curtain overlay - hidden initially, slides down on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/90 via-theme-accent/90 to-theme-success/90 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

      {/* Content container - stays above the curtain overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        {/* Icon container with theme colors */}
        <div
          className={`w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-center rounded-full transition-all duration-300 bg-theme-light group-hover:bg-white/20`}
        >
          {/* Icon with theme colors */}
          <span className={`text-theme-primary group-hover:text-white`}>
            {icon}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Decorative line */}
        <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success group-hover:bg-white transition-colors duration-300 mb-3 sm:mb-4"></div>

        <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const HomeWhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Main container variants - just handles opacity
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Title section variants
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Individual title element variants
  const titleElementVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(20px)",
    },
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

  // Cards grid variants
  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Individual card variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      transform: "translateY(30px)",
    },
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

  // Features with driver training specific content
  const features = [
    {
      icon: <TrophyIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "Expert Instructors",
      description:
        "Certified trainers with international driving experience and safety expertise.",
      iconColor: "theme-primary",
    },
    {
      icon: <UsersIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "Personalized Training",
      description:
        "Individual attention and customized learning paths for every student.",
      iconColor: "theme-accent",
    },
    {
      icon: <ScaleIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "International Standards",
      description:
        "Training programs that meet global driving and safety requirements.",
      iconColor: "theme-success",
    },
    {
      icon: <BarChartIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "Proven Success Rate",
      description:
        "95% job placement rate with comprehensive career support services.",
      iconColor: "theme-primary",
    },
    {
      icon: <PieChartIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "Modern Equipment",
      description:
        "State-of-the-art vehicles and simulation technology for practical training.",
      iconColor: "theme-accent",
    },
    {
      icon: <BriefcaseIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "Career Support",
      description:
        "Complete assistance from training to international job placement.",
      iconColor: "theme-success",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 px-4 sm:px-12 md:px-16 lg:px-24 bg-gray-50"
      id="homewhy"
      ref={ref}
    >
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section title */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          variants={titleContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800"
            variants={titleElementVariants}
          >
            Why Choose Vishwabharti
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success mx-auto mt-3 sm:mt-4 mb-4 sm:mb-6"
            variants={titleElementVariants}
          ></motion.div>
          <motion.p
            className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2 sm:px-0"
            variants={titleElementVariants}
          >
            What sets our driver training programs apart and why we're the
            preferred choice for aspiring professional drivers.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={cardsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <WhyUsCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variants={cardVariants}
              iconColor={feature.iconColor}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeWhyUs;

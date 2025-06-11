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
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-sky-600/90 to-teal-600/90 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

      {/* Content container - stays above the curtain overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        {/* Icon container with consistent gradient that stays on hover */}
        <div
          className={`w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-center rounded-full transition-all duration-300 bg-gradient-to-r ${
            iconColor === "indigo"
              ? "from-indigo-100 to-indigo-200"
              : iconColor === "teal"
              ? "from-teal-100 to-teal-200"
              : "from-sky-100 to-sky-200"
          } group-hover:${
            iconColor === "indigo"
              ? "from-indigo-200 to-indigo-300"
              : iconColor === "teal"
              ? "from-teal-200 to-teal-300"
              : "from-sky-200 to-sky-300"
          }`}
        >
          {/* Icon that keeps its color on hover */}
          <span
            className={`text-${iconColor}-600 group-hover:text-${iconColor}-700`}
          >
            {icon}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Decorative line */}
        <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 group-hover:bg-white transition-colors duration-300 mb-3 sm:mb-4"></div>

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

  // Features with reduced text content and added icon colors
  const features = [
    {
      icon: <TrophyIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "Experienced Professionals",
      description:
        "Industry experts with decades of experience across diverse sectors.",
      iconColor: "indigo",
    },
    {
      icon: <UsersIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "Client-Focused Approach",
      description:
        "Solutions tailored to your specific business goals and culture.",
      iconColor: "teal",
    },
    {
      icon: <ScaleIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "Scalable Solutions",
      description:
        "Services that grow with your business and adapt to market changes.",
      iconColor: "sky",
    },
    {
      icon: <BarChartIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "Proven Track Record",
      description:
        "Hundreds of successful projects with measurable client results.",
      iconColor: "indigo",
    },
    {
      icon: <PieChartIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "Data-Driven Strategy",
      description:
        "Recommendations backed by thorough analysis and industry insights.",
      iconColor: "teal",
    },
    {
      icon: <BriefcaseIcon size={28} className="sm:w-8 sm:h-8" />,
      title: "End-to-End Solutions",
      description:
        "Complete project oversight from strategy to implementation.",
      iconColor: "sky",
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
            Why Choose GSK Consultants
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 mx-auto mt-3 sm:mt-4 mb-4 sm:mb-6"
            variants={titleElementVariants}
          ></motion.div>
          <motion.p
            className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2 sm:px-0"
            variants={titleElementVariants}
          >
            What sets our consulting and project management services apart.
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

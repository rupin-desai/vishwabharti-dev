import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";

const IndustriesHero = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
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

  const subtitleVariants = {
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

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] sm:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('${data.backgroundImage}')`,
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Industry Title */}
        <div className="text-center mb-10">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {data.title}
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#e6b400]"
            variants={subtitleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {data.subtitle}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-300"
            variants={subtitleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {data.description}
          </motion.p>
        </div>

        {/* Criteria Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={cardsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {data.criteria.map((item, index) => {
            // Dynamically get the icon component from Lucide
            const IconComponent = LucideIcons[item.icon] || LucideIcons.Circle;

            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:bg-white/20 transition-colors duration-300 h-24"
                variants={cardVariants}
              >
                <div className="flex h-full">
                  {/* Icon container - now full height with centered icon */}
                  <div className="bg-[#e6b400] flex items-center justify-center px-6">
                    <IconComponent size={36} />
                  </div>

                  {/* Content container - vertically centered */}
                  <div className="flex-1 flex flex-col justify-center px-4">
                    <h3 className="text-sm font-medium opacity-80 mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-lg font-semibold">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesHero;

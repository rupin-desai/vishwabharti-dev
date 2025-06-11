import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";

const IndustriesChallenges = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Helper function to determine if card should be aligned left or right (alternating within each column)
  const shouldAlignLeft = (index) => {
    const positionInColumn = Math.floor(index / 2);
    return positionInColumn % 2 === 0; // Even positions align left, odd positions align right
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-[#e6b400] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We help organizations address these key challenges and transform
            them into opportunities for growth.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {data.features.map((feature, index) => {
            // Dynamically get the icon component from Lucide
            const IconComponent =
              LucideIcons[feature.icon] || LucideIcons.Circle;
            const alignLeft = shouldAlignLeft(index);

            return (
              <div key={index} className="flex justify-center">
                <motion.div
                  variants={cardVariants}
                  className={`bg-white rounded-lg shadow-lg w-full max-w-lg border-t-4 border-[#e6b400] hover:shadow-xl transition-shadow ${
                    alignLeft
                      ? "lg:-translate-x-12 xl:-translate-x-16" // Align left
                      : "lg:translate-x-12 xl:translate-x-16" // Align right
                  }`}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Icon Column */}
                    <div className="flex-shrink-0 p-5 md:p-6 bg-yellow-50 sm:bg-transparent rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none flex items-center justify-center">
                      <div className="bg-yellow-50 p-3 md:p-5 rounded-full">
                        <IconComponent size={48} className="text-[#e6b400]" />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 p-5 md:p-6 sm:pl-3 md:pl-4">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesChallenges;

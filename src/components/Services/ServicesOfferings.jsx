import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServicesOfferings = ({ data }) => {
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

  const itemVariants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {data.title}
            </h2>
            <div className="w-24 h-1 bg-[#e6b400] mx-auto"></div>
          </motion.div>

          {/* Service Categories */}
          {data.categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="mb-10"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
                {category.title}
              </h3>
              {/* Table wrapper with horizontal scroll indicator on small screens */}
              <div className="max-w-7xl mx-auto relative mb-2">
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  {/* Minimum width to ensure table doesn't get too compressed */}
                  <div className="min-w-[650px]">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#e6b400] text-white">
                          <th className="px-3 text-xl py-3 text-left w-12 sm:w-16">
                            No.
                          </th>
                          <th className="px-3 text-xl py-3 text-left">
                            Service
                          </th>
                          <th className="px-3 text-xl py-3 text-center w-28 sm:w-36">
                            Duration
                          </th>
                          <th className="px-3 text-xl py-3 text-center w-20 sm:w-24">
                            Delivery
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.services.map((service, index) => (
                          <tr
                            key={index}
                            className={`border-b border-gray-200 ${
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } ${
                              index === category.services.length - 1
                                ? "border-b-0"
                                : ""
                            }`}
                          >
                            <td className="px-3 text-xl py-2 sm:py-3 text-left">
                              {service.no}
                            </td>
                            <td className="px-3 text-xl py-2 sm:py-3 text-left">
                              {service.name}
                            </td>
                            <td className="px-3 text-xl py-2 sm:py-3 text-center">
                              {service.duration}
                            </td>
                            <td className="px-3 text-xl py-2 sm:py-3 text-center">
                              {service.delivery}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Scroll indicator for mobile - only shows on small screens */}
                <div className="sm:hidden text-center mt-2 text-sm text-gray-500 italic">
                  Swipe horizontally to see full table
                </div>
              </div>
            </motion.div>
          ))}

          {/* Additional Notes */}
          {data.notes && (
            <motion.div variants={itemVariants} className="space-y-5">
              {data.notes.map((note, index) => (
                <div
                  key={index}
                  className="border-l-4 border-[#e6b400] rounded-r-xl pl-4 py-2 bg-gray-50"
                >
                  <h4 className="font-semibold text-lg mb-1">{note.title}:</h4>
                  <p className="text-gray-600 text-sm sm:text-base italic">
                    *{note.description}*
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOfferings;

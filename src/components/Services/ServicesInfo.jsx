import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServicesInfo = ({ data }) => {
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
    <section
      id="service-info"
      className="py-12 md:py-16 px-4 sm:px-12"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Images and Summary */}
          <div className="lg:w-7/8">
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
              {/* First Image (larger) - with border instead of shadow */}
              <div className="md:w-2/3 rounded-2xl overflow-hidden border border-gray-200 h-64 md:h-96">
                <img
                  src={data.summaryImage}
                  alt="Business consulting meeting"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/3 flex flex-col gap-4">
                {/* Second Image (half size) - with border instead of shadow */}
                <div className="rounded-xl overflow-hidden border border-gray-200 h-32 md:h-44">
                  <img
                    src={data.strategyImage}
                    alt="Strategic planning session"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Summary - with border */}
                <motion.div
                  className="bg-white p-3 rounded-2xl flex-grow"
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    <strong className="text-[#e6b400]">
                      Expert consulting services
                    </strong>{" "}
                    {data.summary}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Section - Service Details Cards with borders */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {data.details.map((detail, index) => (
              <motion.div
                key={index}
                className="bg-white py-3 px-4 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors flex flex-col items-center justify-center text-center h-24"
                variants={itemVariants}
              >
                <h3 className="text-base md:text-2xl text-[#e6b400]">
                  {detail.title}
                </h3>
                <p className="text-xs text-gray-600">{detail.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;

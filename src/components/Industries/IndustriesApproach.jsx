import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

const IndustriesApproach = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const imageVariants = {
    hidden: { opacity: 0, translateX: -20 },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, translateY: -20 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, translateX: 20 },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section ref={ref} className="py-16 md:py-24 px-8 sm:px-12 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left: Image with special rounded borders */}
          <motion.div className="lg:w-2/5 relative" variants={imageVariants}>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Our approach"
                className="w-full h-full object-cover rounded-t-[300px] rounded-b-xl shadow-lg"
              />
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full border-4 border-[#e6b400]/20 -z-10"></div>

            {/* Additional small decorative circles */}
            <div className="absolute top-1/4 -right-6 w-12 h-12 rounded-full bg-[#e6b400]/10 -z-10"></div>
            <div className="absolute top-3/4 -left-4 w-8 h-8 rounded-full bg-[#e6b400]/20 -z-10"></div>
          </motion.div>

          {/* Right: Approach list */}
          <div className="lg:w-3/5">
            <motion.div variants={titleVariants} className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {data.title}
              </h2>
              <div className="w-20 h-1 bg-[#e6b400]"></div>
              <p className="mt-4 text-xl text-gray-600">{data.description}</p>
            </motion.div>

            <motion.ul className="space-y-4">
              {data.items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <CheckCircle
                    className="text-[#e6b400] mr-3 min-w-[20px] mt-0.5"
                    size={20}
                  />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesApproach;

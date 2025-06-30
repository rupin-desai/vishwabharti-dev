import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SectionWrapper = ({ children, className = "", id = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;

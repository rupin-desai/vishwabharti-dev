import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe } from "lucide-react";

const LearnGoal = () => {
  const goalRef = useRef(null);
  const isInView = useInView(goalRef, { once: true, amount: 0.3 });

  return (
    <section className="py-12" ref={goalRef}>
      <motion.div
        className="bg-gradient-to-r from-theme-primary to-theme-success text-white p-6 md:p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.015,
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <Globe size={26} className="text-white" />
          <h3 className="text-xl md:text-2xl font-semibold">Our Goal</h3>
        </div>
        <p className="text-sm md:text-base text-white/90 leading-relaxed">
          To ensure that you're not just a driver — but a{" "}
          <strong>Global Mobility Professional</strong>.
        </p>
      </motion.div>
    </section>
  );
};

export default LearnGoal;

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const ProgramCTA = () => {
  return (
    <section className="px-4 py-24 bg-gradient-to-r from-theme-primary/10 to-theme-success/10">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-md border border-theme-light text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-theme-dark mb-4 leading-tight">
            Ready to Start Your Journey?
          </h2>

          <p className="text-lg text-theme-neutral mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who’ve secured their future
            abroad through our guided program.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-to-r from-theme-primary to-theme-success text-white px-8 py-4 rounded-full font-semibold text-base flex items-center gap-3 mx-auto shadow hover:shadow-lg transition-all duration-300"
          >
            <Zap className="w-5 h-5" />
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramCTA;

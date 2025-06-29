// components/Program/ProgramCTA.jsx
import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const ProgramCTA = () => {
  return (
    <section className="px-4 py-20 bg-gradient-to-r from-theme-primary to-theme-secondary">
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who have secured their
            future abroad through our structured program
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-theme-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Zap className="w-6 h-6" />
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramCTA;

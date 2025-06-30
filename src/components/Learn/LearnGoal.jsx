import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Target, TrendingUp } from "lucide-react";

const LearnGoal = () => {
  const goalRef = useRef(null);
  const isInView = useInView(goalRef, { once: true, amount: 0.2 });

  // Enhanced motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={goalRef}
      className="px-4 sm:px-8 py-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          animate={floatingVariants.float}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 2 },
          }}
        />
      </div>

      <motion.div
        className="relative bg-gradient-to-br from-theme-primary to-theme-success text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-3xl" />

        {/* Floating background icons */}
        <div className="absolute top-6 right-6 opacity-10">
          <motion.div
            animate={floatingVariants.float}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Target size={60} />
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-6 opacity-10">
          <motion.div
            animate={{
              ...floatingVariants.float,
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <TrendingUp size={50} />
          </motion.div>
        </div>

        <div className="relative z-10">
          {/* Header section */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            variants={childVariants}
          >
            <motion.div className="relative" variants={iconVariants}>
              <div className="absolute inset-0 bg-white/20 rounded-full blur-lg" />
              <div className="relative bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20">
                <Globe size={32} className="text-white" />
              </div>
            </motion.div>
            <motion.h3
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent"
              variants={childVariants}
            >
              Our Mission
            </motion.h3>
          </motion.div>

          {/* Main content */}
          <motion.div className="space-y-4" variants={childVariants}>
            <p className="text-lg sm:text-xl text-white/95 leading-relaxed">
              To transform you from just another driver into a{" "}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className="relative z-10 text-white font-bold text-xl sm:text-2xl bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  Global Mobility Professional
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-lg blur-sm"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isInView ? 1 : 0 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                />
              </motion.span>
            </p>

            <motion.div
              className="flex items-center gap-2 text-white/80"
              variants={childVariants}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-white to-white/80 rounded-full" />
              <p className="text-sm sm:text-base italic">
                Excellence in motion, professionalism in practice
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom accent line */}
          <motion.div
            className="mt-8 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default LearnGoal;

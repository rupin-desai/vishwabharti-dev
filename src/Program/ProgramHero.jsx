// components/Program/ProgramHero.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, ArrowRight, Users, Globe, Star } from "lucide-react";

const ProgramHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transform: "translate3d(0, 20px, 0)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Students Placed",
      color: "theme-primary",
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries",
      color: "theme-success",
    },
    {
      icon: Star,
      number: "98%",
      label: "Success Rate",
      color: "theme-primary",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative px-4 py-20 bg-gradient-to-br from-theme-primary/5 to-theme-success/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/10 to-transparent"></div>
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-theme-primary to-theme-success text-white px-6 py-3 rounded-full mb-6"
          >
            <Target className="w-5 h-5" />
            <span className="font-semibold">Structured Program</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-theme-dark mb-6 leading-tight">
            Program Structured to{" "}
            <span className="bg-gradient-to-r from-theme-primary to-theme-success bg-clip-text text-transparent">
              Secure Your Future
            </span>{" "}
            Abroad
          </h1>

          <p className="text-xl text-theme-neutral max-w-3xl mx-auto mb-8">
            Join our comprehensive program designed to take you from training to
            deployment with guaranteed job placement abroad
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-gradient-to-r from-theme-primary to-theme-success text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-theme-primary text-theme-primary px-8 py-4 rounded-full font-semibold hover:bg-theme-primary hover:text-white transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, transform: "translate3d(0, -5px, 0)" }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-theme-light"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r from-theme-primary to-theme-success rounded-xl flex items-center justify-center mb-4`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-theme-dark mb-2">
                {stat.number}
              </h3>
              <p className="text-theme-neutral">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramHero;

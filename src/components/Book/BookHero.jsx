import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const BookHero = () => {
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
    hidden: { opacity: 0, y: 30 },
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

  return (
    <section className="relative py-20 bg-gradient-to-br from-theme-light via-white to-theme-light overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-theme-primary/10 to-theme-success/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-theme-accent/10 to-theme-primary/10 rounded-full translate-y-24 -translate-x-24"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-theme-primary/10 text-theme-primary rounded-full font-medium text-sm mb-6"
            variants={itemVariants}
          >
            Professional Driver Training
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-theme-dark mb-6 leading-tight"
            variants={itemVariants}
          >
            Book Your Journey to
            <span className="block bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success bg-clip-text text-transparent">
              Professional Success
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-theme-neutral mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Start your transformation today with our comprehensive driver
            training programs. Get certified, get hired, and drive your career
            forward.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 text-theme-neutral">
              <CheckCircle className="text-theme-success" size={20} />
              <span>Industry-Recognized Certification</span>
            </div>
            <div className="flex items-center gap-2 text-theme-neutral">
              <Calendar className="text-theme-primary" size={20} />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2 text-theme-neutral">
              <Clock className="text-theme-accent" size={20} />
              <span>Quick Start Available</span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-theme-primary/20 inline-block"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-theme-primary">
                  500+
                </div>
                <div className="text-sm text-theme-neutral">
                  Students Trained
                </div>
              </div>
              <div className="w-px h-12 bg-theme-primary/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-theme-primary">95%</div>
                <div className="text-sm text-theme-neutral">Success Rate</div>
              </div>
              <div className="w-px h-12 bg-theme-primary/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-theme-primary">15+</div>
                <div className="text-sm text-theme-neutral">
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookHero;

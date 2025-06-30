import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Languages, FileText, Plane } from "lucide-react";

const ProgramFee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, -40px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(60px, 0, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const features = [
    {
      icon: Award,
      title: "Training & Certifications",
      description:
        "Comprehensive training programs with industry-recognized certifications to boost your professional credentials.",
    },
    {
      icon: Languages,
      title: "Language Modules",
      description:
        "Advanced language learning modules specifically tailored to your destination country and professional needs.",
    },
    {
      icon: FileText,
      title: "Visa & License Assistance",
      description:
        "Complete support for visa applications, document processing, and professional licensing requirements.",
    },
    {
      icon: Plane,
      title: "Travel Coordination & Support",
      description:
        "End-to-end travel planning with 24/7 support services to ensure a smooth transition to your new destination.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-theme-success/5 via-white to-theme-primary/5"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={headingVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-theme-primary to-theme-success text-white px-4 py-2 rounded-full mb-4">
              <span className="font-semibold text-sm">Complete Package</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-dark mb-4">
              Final Program Fee{" "}
              <span className="bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success bg-clip-text text-transparent">
                Includes
              </span>
            </h2>
            <p className="text-lg text-theme-neutral max-w-3xl mx-auto">
              Everything you need for a successful global transition, all
              included in one comprehensive package designed for your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  transform: "translate3d(0, -8px, 0)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    className="bg-gradient-to-r from-theme-primary to-theme-success p-4 rounded-2xl flex-shrink-0"
                    whileHover={{
                      transform: "translate3d(0, 0, 0) rotateY(15deg)",
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-theme-dark mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-theme-neutral leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramFee;

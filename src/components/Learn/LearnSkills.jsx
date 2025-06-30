import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Car, Languages, Users } from "lucide-react";

const LearnSkills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Variants for the header
  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  // Container & card animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      transform: "translate3d(0, 30px, 0)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cards = [
    {
      title: "Technical Training Modules",
      icon: Car,
      skills: [
        "Basic to Advanced Driving Techniques",
        "Hazardous Material Transport (ADR)",
        "Left-Hand Driving Mastery",
        "Terrain Mastery",
      ],
    },
    {
      title: "Language & Communication",
      icon: Languages,
      skills: [
        "English for Professionals (IELTS)",
        "German A1 & B2 Certification",
        "Spanish Basics + Transport Terms",
      ],
    },
    {
      title: "Behavioral & Soft Skills",
      icon: Users,
      skills: [
        "Professional Conduct and Work Ethics",
        "Cultural Adaptability Training",
        "Interview Preparation",
      ],
    },
  ];

  return (
    <section className="py-20 px-4" ref={sectionRef}>
      {/* Section Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-14"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-4xl font-bold text-theme-dark mb-4">
          Skills You Will Master
        </h2>
        <p className="text-theme-neutral text-lg max-w-2xl mx-auto">
          Learn the technical, language, and soft skills required to succeed as
          an international driver.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
              }}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm transition-all duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-theme-primary to-theme-success flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-theme-dark text-left">
                  {card.title}
                </h3>
              </div>

              {/* Line */}
              <div className="w-16 h-1 bg-gradient-to-r from-theme-primary to-theme-success mb-4 rounded-full mx-auto" />

              {/* Skill List */}
              <ul className="list-disc list-inside text-theme-neutral text-left space-y-1">
                {card.skills.map((skill, idx) => (
                  <li key={idx} className="break-words">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default LearnSkills;

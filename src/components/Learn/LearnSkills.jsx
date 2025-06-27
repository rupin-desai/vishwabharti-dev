import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Car, Languages, Users } from "lucide-react";

const LearnSkills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const cards = [
    {
      title: "Technical Training Modules",
      icon: <Car className="text-theme-primary" />,
      skills: [
        "Basic to Advanced Driving Techniques",
        "Hazardous Material Transport (ADR)",
        "Left-Hand Driving Mastery",
        "Terrain Mastery",
      ],
    },
    {
      title: "Language & Communication",
      icon: <Languages className="text-theme-primary" />,
      skills: [
        "English for Professionals (IELTS)",
        "German A1 & B2 Certification",
        "Spanish Basics + Transport Terms",
      ],
    },
    {
      title: "Behavioral & Soft Skills",
      icon: <Users className="text-theme-primary" />,
      skills: [
        "Professional Conduct and Work Ethics",
        "Cultural Adaptability Training",
        "Interview Preparation",
      ],
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-12" ref={sectionRef}>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={i}
            whileHover={{
              scale: 1.015,
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
            }}
            className="bg-theme-light p-6 rounded-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {card.icon}
              <h2 className="text-xl font-semibold text-theme-dark">
                {card.title}
              </h2>
            </div>
            <ul className="list-disc list-inside text-theme-neutral space-y-1">
              {card.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearnSkills;

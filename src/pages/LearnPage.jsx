import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Car,
  Languages,
  Users,
  Globe,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const LearnPage = () => {
  const steps = [
    {
      step: 1,
      title: "Application",
      description: "Submit your application and required documents",
    },
    {
      step: 2,
      title: "Assessment",
      description: "Complete skills assessment and interview",
    },
    {
      step: 3,
      title: "Classroom Training",
      description: "4 weeks of theoretical knowledge and safety training",
    },
    {
      step: 4,
      title: "Practical Training",
      description: "6 weeks of hands-on driving experience",
    },
    {
      step: 5,
      title: "On-the-Job Training",
      description: "2 weeks of supervised real-world experience",
    },
    {
      step: 6,
      title: "Certification",
      description: "Receive your professional driver certification",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    visible: (i = 0) => ({
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 110,
        damping: 15,
      },
    }),
  };

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
      >
        <h1 className="text-4xl font-bold text-theme-dark mb-4">Learn</h1>
        <p className="text-lg text-theme-neutral max-w-3xl mb-10">
          Unlock Skills That Drive You Globally. Our "Learn" page is your
          complete guide to what you'll master during your apprenticeship at
          Vishwabharti.
        </p>
      </motion.div>

      {/* 3 Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "Technical Training Modules",
            Icon: Car,
            list: [
              "Basic to Advanced Driving Techniques",
              "Hazardous Material Transport (ADR)",
              "Left-Hand Driving Mastery",
              "Terrain Mastery",
            ],
          },
          {
            title: "Language & Communication",
            Icon: Languages,
            list: [
              "English for Professionals (IELTS)",
              "German A1 & B2 Certification",
              "Spanish Basics + Transport Terms",
            ],
          },
          {
            title: "Behavioral & Soft Skills",
            Icon: Users,
            list: [
              "Professional Conduct and Work Ethics",
              "Cultural Adaptability Training",
              "Interview Preparation",
            ],
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={i + 1}
            className="bg-theme-light p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <item.Icon className="text-theme-primary" />
              <h2 className="text-xl font-semibold text-theme-dark">
                {item.title}
              </h2>
            </div>
            <ul className="list-disc list-inside text-theme-neutral space-y-1 text-sm">
              {item.list.map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Goal Box */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={4}
        className="bg-gradient-to-r from-theme-primary to-theme-success text-white p-6 rounded-xl mb-16"
      >
        <div className="flex items-center gap-3 mb-2">
          <Globe className="text-white" />
          <h3 className="text-xl font-semibold">Our Goal</h3>
        </div>
        <p>
          To ensure that you're not just a driver—but a Global Mobility
          Professional.
        </p>
      </motion.div>

      {/* Training Steps */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={5}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold text-theme-dark mb-4">
          Training Process
        </h2>
        <p className="text-lg text-theme-neutral max-w-2xl mb-8">
          Our structured training process ensures you receive comprehensive
          preparation for your driving career.
        </p>
      </motion.div>

      <div className="space-y-6 max-w-2xl">
        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={6 + i}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 bg-theme-primary text-white rounded-full flex items-center justify-center font-bold">
              {step.step}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-theme-dark">
                {step.title}
              </h3>
              <p className="text-theme-neutral text-sm">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Duration & Certification */}
      <div className="mt-16 flex flex-col md:flex-row gap-6">
        {[
          {
            title: "Program Duration",
            desc: "12-week intensive training program",
            icon: Briefcase,
          },
          {
            title: "Certification",
            desc: "Industry-recognized certification upon completion",
            icon: BadgeCheck,
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={12 + i}
            whileHover={{ scale: 1.02 }}
            className="flex-1 bg-yellow-100 border border-yellow-200 p-6 rounded-xl flex items-start gap-4 hover:border-yellow-400 transition"
          >
            <card.icon className="text-yellow-700 mt-1" size={26} />
            <div>
              <h2 className="text-lg font-semibold text-yellow-900 mb-1">
                {card.title}
              </h2>
              <p className="text-yellow-800 text-sm">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearnPage;

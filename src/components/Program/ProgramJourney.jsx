// components/Program/ProgramJourney.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  Users,
  FileText,
  Plane,
  Shield,
  Heart,
  MapPin,
} from "lucide-react";

const steps = [
  {
    title: "Orientation & Candidate Categorization",
    description:
      "Initial assessment and personalized program planning based on your background",
    icon: Users,
    duration: "1-2 days",
    category: "assessment",
  },
  {
    title: "Technical & Language Training",
    description:
      "Comprehensive skill development program tailored to your experience level",
    icon: FileText,
    duration: "2 years (Freshers) / 6 months (Experienced)",
    category: "training",
  },
  {
    title: "Company Interview Round",
    description:
      "Direct interviews with potential employers matching your profile",
    icon: Users,
    duration: "2-4 weeks",
    category: "placement",
  },
  {
    title: "Documentation & Fee Payment",
    description: "Complete paperwork processing and program fee settlement",
    icon: FileText,
    duration: "1-2 weeks",
    category: "documentation",
  },
  {
    title: "Visa & Legal Clearance",
    description: "Official visa processing and legal documentation completion",
    icon: Shield,
    duration: "4-8 weeks",
    category: "legal",
  },
  {
    title: "Medical & Final Evaluation",
    description:
      "Health checkups and final readiness assessment for deployment",
    icon: Heart,
    duration: "1 week",
    category: "medical",
  },
  {
    title: "Travel and Deployment",
    description:
      "Coordinated travel arrangements and arrival at your new workplace",
    icon: Plane,
    duration: "1-2 days",
    category: "travel",
  },
  {
    title: "Post-Arrival Support",
    description:
      "Ongoing assistance for smooth transition and settlement abroad",
    icon: MapPin,
    duration: "Ongoing",
    category: "support",
  },
];

const ProgramJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);
  const ActiveIcon = steps[activeStep].icon;
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

  const slideUp = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 30px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <section ref={ref} className="px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-theme-dark mb-6">
            Step-by-Step Journey
          </h2>
          <p className="text-xl text-theme-neutral max-w-3xl mx-auto">
            Our proven 8-step process ensures your success from application to
            deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Steps List */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={index}
                  variants={slideUp}
                  onHoverStart={() => setActiveStep(index)}
                  className={`
                    p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2
                    ${
                      isActive
                        ? "bg-gradient-to-r from-theme-primary/10 to-theme-secondary/10 border-theme-primary/30 shadow-lg"
                        : "bg-white border-theme-light hover:border-theme-primary/20 hover:shadow-md"
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                      w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success text-white scale-110"
                          : "bg-theme-light text-theme-primary"
                      }
                    `}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-theme-dark mb-1">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-theme-neutral">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-gradient-to-br from-theme-primary/5 to-theme-secondary/5 p-8 rounded-3xl border border-theme-light">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success rounded-2xl flex items-center justify-center">
                  <ActiveIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-theme-dark">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-theme-neutral">
                    Step {activeStep + 1} of {steps.length}
                  </p>
                </div>
              </div>

              <p className="text-lg text-theme-neutral mb-6">
                {steps[activeStep].description}
              </p>

              <div className="flex items-center gap-4 text-theme-neutral">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">
                    {steps[activeStep].duration}
                  </span>
                </div>
                <div className="px-3 py-1 bg-theme-primary/20 text-theme-primary rounded-full text-sm font-medium">
                  {steps[activeStep].category}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramJourney;

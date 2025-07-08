import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Users,
  FileText,
  Plane,
  Shield,
  Heart,
  MapPin,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "Orientation & Candidate Categorization",
    description:
      "Initial assessment and personalized program planning based on your background and career goals",
    icon: Users,
    duration: "1-2 days",
    category: "assessment",
    color: "from-green-500 to-lime-600",
  },
  {
    title: "Technical & Language Training",
    description:
      "Comprehensive skill development program tailored to your experience level with industry experts",
    icon: FileText,
    duration: "2 years (Freshers) / 6 months (Experienced)",
    category: "training",
    color: "from-lime-600 to-emerald-600",
  },
  {
    title: "Company Interview Round",
    description:
      "Direct interviews with potential employers matching your profile and career aspirations",
    icon: Users,
    duration: "2-4 weeks",
    category: "placement",
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "Documentation & Fee Payment",
    description: "Complete paperwork processing and program fee settlement with full transparency",
    icon: FileText,
    duration: "1-2 weeks",
    category: "documentation",
    color: "from-teal-600 to-green-600",
  },
  {
    title: "Visa & Legal Clearance",
    description: "Official visa processing and legal documentation completion with expert guidance",
    icon: Shield,
    duration: "4-8 weeks",
    category: "legal",
    color: "from-green-600 to-emerald-700",
  },
  {
    title: "Medical & Final Evaluation",
    description:
      "Health checkups and final readiness assessment for deployment with certified professionals",
    icon: Heart,
    duration: "1 week",
    category: "medical",
    color: "from-emerald-700 to-teal-700",
  },
  {
    title: "Travel and Deployment",
    description:
      "Coordinated travel arrangements and arrival at your new workplace with full support",
    icon: Plane,
    duration: "1-2 days",
    category: "travel",
    color: "from-teal-700 to-green-700",
  },
  {
    title: "Post-Arrival Support",
    description:
      "Ongoing assistance for smooth transition and settlement abroad with 24/7 support",
    icon: MapPin,
    duration: "Ongoing",
    category: "support",
    color: "from-green-700 to-emerald-800",
  },
];

const ProgramJourney = () => {
  const ref = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (hoveredStep !== null) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hoveredStep]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const ActiveIcon = steps[activeStep].icon;

  return (
    <section ref={ref} className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-green-700 mb-6">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Embark on a transformative 8-step journey designed to guide you from application to a thriving career abroad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Steps Timeline */}
          <div className="lg:col-span-3 relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-green-200 z-0" />
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isCompleted = index < activeStep;
              const isHovered = hoveredStep === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => {
                    setHoveredStep(index);
                    setActiveStep(index);
                  }}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative mb-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`
                      p-4 rounded-xl cursor-pointer bg-white border border-green-100 shadow-md
                      ${isActive ? "border-green-300 bg-green-50" : isCompleted ? "border-emerald-300 bg-emerald-50" : "hover:border-green-300 hover:bg-green-50"}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`
                          w-10 h-10 rounded-full flex items-center justify-center text-white
                          ${isActive ? `bg-gradient-to-r ${step.color}` : isCompleted ? "bg-emerald-500" : "bg-gray-300"}
                        `}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <span className="text-sm font-bold text-gray-800">{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold ${isActive ? "text-green-700" : "text-gray-800"}`}>
                          {step.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                          <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                            {step.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-xl border border-green-100 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${steps[activeStep].color}`}
                    >
                      <ActiveIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {steps[activeStep].title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Step {activeStep + 1} of {steps.length}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {steps[activeStep].description}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">{steps[activeStep].duration}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${steps[activeStep].color} text-white text-sm`}>
                      {steps[activeStep].category}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                      <span>Journey Progress</span>
                      <span>{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${steps[activeStep].color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramJourney;
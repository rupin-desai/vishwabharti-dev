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
  ArrowRight,
  Star,
  Zap,
  Target,
  Play,
  Pause,
} from "lucide-react";

const steps = [
  {
    title: "Orientation & Candidate Categorization",
    description:
      "Initial assessment and personalized program planning based on your background and career goals",
    icon: Users,
    duration: "1-2 days",
    category: "assessment",
    color: "from-orange-500 to-green-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-green-50",
    details: ["Skill assessment", "Career counseling", "Program customization", "Goal setting"],
  },
  {
    title: "Technical & Language Training",
    description:
      "Comprehensive skill development program tailored to your experience level with industry experts",
    icon: FileText,
    duration: "2 years (Freshers) / 6 months (Experienced)",
    category: "training",
    color: "from-orange-500 to-green-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-green-50",
    details: ["Technical bootcamp", "Language proficiency", "Soft skills", "Industry certification"],
  },
  {
    title: "Company Interview Round",
    description:
      "Direct interviews with potential employers matching your profile and career aspirations",
    icon: Target,
    duration: "2-4 weeks",
    category: "placement",
    color: "from-orange-500 to-green-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-green-50",
    details: ["Mock interviews", "Company matching", "Interview coaching", "Offer negotiation"],
  },
  {
    title: "Documentation & Fee Payment",
    description: "Complete paperwork processing and program fee settlement with full transparency",
    icon: FileText,
    duration: "1-2 weeks",
    category: "documentation",
    color: "from-orange-500 to-green-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-green-50",
    details: ["Document verification", "Fee processing", "Contract signing", "Legal compliance"],
  },
  {
    title: "Visa & Legal Clearance",
    description: "Official visa processing and legal documentation completion with expert guidance",
    icon: Shield,
    duration: "4-8 weeks",
    category: "legal",
    color: "from-orange-500 to-green-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-green-50",
    details: ["Visa application", "Legal documentation", "Background checks", "Approval tracking"],
  },
  {
    title: "Medical & Final Evaluation",
    description:
      "Health checkups and final readiness assessment for deployment with certified professionals",
    icon: Heart,
    duration: "1 week",
    category: "medical",
    color: "from-orange-500 to-green-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-green-50",
    details: ["Health screening", "Medical certification", "Final assessment", "Readiness check"],
  },
  {
    title: "Travel and Deployment",
    description:
      "Coordinated travel arrangements and arrival at your new workplace with full support",
    icon: Plane,
    duration: "1-2 days",
    category: "travel",
    color: "from-orange-500 to-green-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-green-50",
    details: ["Flight booking", "Travel insurance", "Airport assistance", "Arrival coordination"],
  },
  {
    title: "Post-Arrival Support",
    description:
      "Ongoing assistance for smooth transition and settlement abroad with 24/7 support",
    icon: MapPin,
    duration: "Ongoing",
    category: "support",
    color: "from-orange-500 to-green-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-green-50",
    details: ["Settlement support", "24/7 helpline", "Community integration", "Career guidance"],
  },
];

const ProgramJourney = () => {
  const ref = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' or 'cards'

  useEffect(() => {
    if (hoveredStep !== null || !isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hoveredStep, isPlaying]);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star className="w-4 h-4" />
            Your Success Journey
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-6">
            8 Steps to Your Dream Career
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience our proven methodology that has helped thousands transform their careers and achieve international success.
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 bg-white shadow-lg hover:shadow-xl px-4 py-2 rounded-full text-gray-700 font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play'}
            </motion.button>
            
            <div className="flex bg-white shadow-lg rounded-full p-1">
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  viewMode === 'timeline' ? 'bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-lg' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Timeline
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  viewMode === 'cards' ? 'bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-lg' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Cards
              </button>
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-full p-6 shadow-2xl">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - (activeStep + 1) / steps.length)}`}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{activeStep + 1}</div>
                  <div className="text-sm text-gray-600">of {steps.length}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {viewMode === 'timeline' ? (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-green-200 to-green-200 rounded-full" />
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  className="space-y-6"
                >
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = activeStep === index;
                    const isCompleted = index < activeStep;

                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        onMouseEnter={() => {
                          setHoveredStep(index);
                          setActiveStep(index);
                        }}
                        onMouseLeave={() => setHoveredStep(null)}
                        className="relative"
                      >
                        <motion.div
                          className={`relative ml-16 p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                            isActive 
                              ? 'bg-white shadow-2xl border-2 border-orange-200 scale-105' 
                              : 'bg-white/80 hover:bg-white shadow-lg hover:shadow-xl border border-gray-100'
                          }`}
                          whileHover={{ y: -5 }}
                          layout
                        >
                          <div className="flex items-center gap-4">
                            <motion.div
                              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-r ${step.color} shadow-lg`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Icon className="w-7 h-7" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-800 mb-1">{step.title}</h3>
                              <div className="flex items-center gap-3 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{step.duration}</span>
                                </div>
                                <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white font-medium`}>
                                  {step.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Timeline Node */}
                        <motion.div
                          className={`absolute left-2 top-8 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? `bg-gradient-to-r ${step.color} shadow-lg scale-125` 
                              : isCompleted 
                                ? 'bg-green-500 shadow-md' 
                                : 'bg-gray-300'
                          }`}
                          whileHover={{ scale: 1.3 }}
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <motion.div
                              className="w-3 h-3 bg-white rounded-full"
                              animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Active Step Details */}
              <div className="sticky top-24">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 50, rotateY: -15 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -50, rotateY: 15 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className={`${steps[activeStep].bgColor} p-8 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm`}
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${steps[activeStep].color} shadow-xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <ActiveIcon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          {steps[activeStep].title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          Step {activeStep + 1} of {steps.length}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {steps[activeStep].description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Key Activities
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {steps[activeStep].details.map((detail, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <ArrowRight className="w-4 h-4 text-orange-500" />
                            <span className="text-sm">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">{steps[activeStep].duration}</span>
                      </div>
                      <motion.div
                        className="text-2xl font-bold text-gray-800"
                        key={activeStep}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {Math.round(((activeStep + 1) / steps.length) * 100)}%
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="cards"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => {
                      setHoveredStep(index);
                      setActiveStep(index);
                    }}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`relative group cursor-pointer ${
                      isActive ? 'scale-110 z-10' : ''
                    }`}
                  >
                    <motion.div
                      className={`p-6 rounded-2xl transition-all duration-500 ${
                        isActive 
                          ? 'bg-white shadow-2xl border-2 border-orange-200' 
                          : 'bg-white/80 hover:bg-white shadow-lg hover:shadow-xl border border-gray-100'
                      }`}
                      whileHover={{ y: -10 }}
                      layout
                    >
                      <div className="text-center">
                        <motion.div
                          className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-r ${step.color} shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                        
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{step.description}</p>
                        
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{step.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProgramJourney;
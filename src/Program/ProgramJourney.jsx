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
  ChevronRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    title: "Orientation & Candidate Categorization",
    subtitle: "The Journey Begins",
    year: "2024",
    description:
      "Initial assessment and personalized program planning based on your background and career goals. We understand your unique strengths and tailor the entire journey to maximize your potential.",
    icon: Users,
    duration: "1-2 days",
    category: "assessment",
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    details: ["Comprehensive skill assessment", "Personalized career counseling", "Custom program design", "Strategic goal setting"],
    stats: { success: "98%", candidates: "5000+" },
  },
  {
    title: "Technical & Language Training",
    subtitle: "Building Excellence",
    year: "2024",
    description:
      "Comprehensive skill development program tailored to your experience level with industry experts. Master cutting-edge technologies and perfect your communication skills.",
    icon: FileText,
    duration: "2 years (Freshers) / 6 months (Experienced)",
    category: "training",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    details: ["Advanced technical bootcamp", "Language proficiency enhancement", "Leadership & soft skills", "Industry-specific certification"],
    stats: { success: "96%", candidates: "12000+" },
  },
  {
    title: "Company Interview Round",
    subtitle: "Opportunity Awaits",
    year: "2024",
    description:
      "Direct interviews with potential employers matching your profile and career aspirations. We connect you with leading companies that value your unique skill set.",
    icon: Target,
    duration: "2-4 weeks",
    category: "placement",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    details: ["Rigorous mock interviews", "Strategic company matching", "Expert interview coaching", "Professional offer negotiation"],
    stats: { success: "92%", candidates: "8500+" },
  },
  {
    title: "Documentation & Fee Payment",
    subtitle: "Making It Official",
    year: "2024",
    description: "Complete paperwork processing and program fee settlement with full transparency. Every step is clearly documented and legally compliant.",
    icon: FileText,
    duration: "1-2 weeks",
    category: "documentation",
    color: "from-violet-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-violet-50 to-indigo-50",
    details: ["Thorough document verification", "Transparent fee processing", "Legal contract signing", "Full compliance assurance"],
    stats: { success: "100%", candidates: "7200+" },
  },
  {
    title: "Visa & Legal Clearance",
    subtitle: "Global Gateway",
    year: "2024",
    description: "Official visa processing and legal documentation completion with expert guidance. Navigate complex international requirements with ease.",
    icon: Shield,
    duration: "4-8 weeks",
    category: "legal",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
    details: ["Expert visa application", "Complete legal documentation", "Thorough background checks", "Real-time approval tracking"],
    stats: { success: "94%", candidates: "6800+" },
  },
  {
    title: "Medical & Final Evaluation",
    subtitle: "Health & Readiness",
    year: "2024",
    description:
      "Health checkups and final readiness assessment for deployment with certified professionals. Ensure you're physically and mentally prepared for success.",
    icon: Heart,
    duration: "1 week",
    category: "medical",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
    details: ["Comprehensive health screening", "Official medical certification", "Final readiness assessment", "Wellness optimization"],
    stats: { success: "99%", candidates: "6500+" },
  },
  {
    title: "Travel and Deployment",
    subtitle: "The Big Move",
    year: "2024",
    description:
      "Coordinated travel arrangements and arrival at your new workplace with full support. Your journey to international success begins here.",
    icon: Plane,
    duration: "1-2 days",
    category: "travel",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    details: ["Premium flight booking", "Comprehensive travel insurance", "Dedicated airport assistance", "Seamless arrival coordination"],
    stats: { success: "100%", candidates: "6200+" },
  },
  {
    title: "Post-Arrival Support",
    subtitle: "Ongoing Success",
    year: "2024",
    description:
      "Ongoing assistance for smooth transition and settlement abroad with 24/7 support. We're with you every step of the way in your new journey.",
    icon: MapPin,
    duration: "Ongoing",
    category: "support",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    details: ["Comprehensive settlement support", "24/7 dedicated helpline", "Community integration programs", "Continuous career guidance"],
    stats: { success: "97%", candidates: "5800+" },
  },
];

const ProgramJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (hoveredStep !== null || !isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hoveredStep, isPlaying]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToStep = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-orange-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 flex">
        {/* Sticky Left Panel */}
        <div className="w-1/3 relative">
          <div className="sticky top-0 h-screen flex flex-col justify-center p-12 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium mb-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-4 h-4" />
                  Success Journey
                </motion.div>
                
                <h1 className="text-6xl font-bold mb-6 leading-tight">
                  <span className="block text-white">OUR</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    JOURNEY
                  </span>
                </h1>
                
                <p className="text-xl text-blue-200 leading-relaxed max-w-md">
                  The evolution of our mission to transform careers and create international opportunities
                </p>
              </div>

              {/* Current Step Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{activeStep + 1}</span>
                    </div>
                    <div>
                      <div className="text-blue-200 text-sm">{steps[activeStep].subtitle}</div>
                      <div className="text-white font-semibold">{steps[activeStep].year}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-bold text-lg mb-2">{steps[activeStep].title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{steps[activeStep].description}</p>
                  
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-white font-bold">{steps[activeStep].stats.success}</div>
                      <div className="text-blue-200 text-xs">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">{steps[activeStep].stats.candidates}</div>
                      <div className="text-blue-200 text-xs">Candidates</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-200 text-sm">Progress</span>
                  <span className="text-white font-bold">
                    {Math.round(((activeStep + 1) / steps.length) * 100)}%
                  </span>
                </div>
                
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="grid grid-cols-4 gap-2">
                {steps.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToStep(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeStep 
                        ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                        : index < activeStep 
                          ? 'bg-white/40' 
                          : 'bg-white/20'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full text-white font-medium transition-all duration-300 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isPlaying ? 'Pause' : 'Play'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scrollable Right Content */}
        <div ref={contentRef} className="w-2/3 p-12">
          <div className="space-y-32">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <motion.div
                  key={index}
                  ref={(el) => sectionRefs.current[index] = el}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative"
                >
                  {/* Year Badge */}
                  <motion.div
                    className={`absolute -top-8 -left-8 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="text-white font-bold text-sm">{step.year}</span>
                  </motion.div>

                  {/* Main Card */}
                  <motion.div
                    className={`relative overflow-hidden rounded-3xl transition-all duration-700 ${
                      isActive 
                        ? `${step.bgColor} shadow-2xl border-2 border-white/50 scale-105` 
                        : 'bg-white/80 hover:bg-white shadow-lg hover:shadow-xl border border-gray-100'
                    }`}
                    whileHover={{ y: -10 }}
                    layout
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-5' : ''}`} />
                    
                    <div className="relative z-10 p-12">
                      {/* Header */}
                      <div className="flex items-start gap-6 mb-8">
                        <motion.div
                          className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-r ${step.color} shadow-xl`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-medium text-gray-500">Step {index + 1}</span>
                            <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-medium`}>
                              {step.category}
                            </span>
                          </div>
                          <h2 className="text-4xl font-bold text-gray-800 mb-2">{step.title}</h2>
                          <p className="text-xl text-gray-600 font-medium">{step.subtitle}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">{step.description}</p>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            Key Activities
                          </h4>
                          <div className="space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <motion.div
                                key={detailIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: detailIndex * 0.1 }}
                                className="flex items-center gap-3"
                              >
                                <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                <span className="text-gray-600">{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <Star className="w-5 h-5" />
                            Success Metrics
                          </h4>
                          <div className="space-y-4">
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                              <div className="text-2xl font-bold text-gray-800">{step.stats.success}</div>
                              <div className="text-sm text-gray-600">Success Rate</div>
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                              <div className="text-2xl font-bold text-gray-800">{step.stats.candidates}</div>
                              <div className="text-sm text-gray-600">Candidates Served</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-5 h-5" />
                          <span className="font-medium">{step.duration}</span>
                        </div>
                        <motion.div
                          className="flex items-center gap-2 text-2xl font-bold text-gray-800"
                          key={index}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <span>{Math.round(((index + 1) / steps.length) * 100)}%</span>
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramJourney;
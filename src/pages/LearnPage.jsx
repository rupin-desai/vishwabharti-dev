import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Car,
  AlertTriangle,
  Navigation,
  Mountain,
  MessageCircle,
  Award,
  Globe,
  Users,
  Heart,
  Target,
  CheckCircle,
  ArrowRight,
  Truck,
  Languages,
  Star,
  Clock,
  Download,
  Play,
  GraduationCap,
  Shield,
  MapPin,
  TrendingUp,
} from "lucide-react";

// Enhanced Section Wrapper with better animations
const SectionWrapper = ({ children, className = "", id = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

// Enhanced Learn Hero Component
const LearnHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-200 rounded-full opacity-30 animate-bounce"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Skill Development Program</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            Learn Skills to{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
              Drive Your Global Career
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Our comprehensive Learn program equips you with in-demand technical
            and soft skills needed for a successful international driving career
            — from training to transition.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
              <Play className="w-5 h-5" />
              Start Learning Journey
            </button>
            <button className="border-2 border-orange-500 text-orange-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
              <Download className="w-5 h-5" />
              Download Curriculum
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, number: "1000+", label: "Students Trained" },
              { icon: Globe, number: "15+", label: "Countries Covered" },
              { icon: Star, number: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100"
              >
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Technical Training Component
const TechnicalTraining = () => {
  const modules = [
    {
      icon: Car,
      title: "Basic to Advanced Driving Techniques",
      description:
        "Master fundamental to expert-level driving skills for various vehicle types and road conditions.",
      features: [
        "Defensive driving strategies",
        "Vehicle control mastery",
        "Advanced maneuvering",
        "Safety protocols",
      ],
      duration: "8 weeks",
      level: "Beginner to Advanced",
    },
    {
      icon: AlertTriangle,
      title: "Hazardous Material Transport (ADR)",
      description:
        "Comprehensive training for safe transport of dangerous goods according to international ADR standards.",
      features: [
        "ADR certification",
        "Safety procedures",
        "Emergency protocols",
        "Documentation requirements",
      ],
      duration: "6 weeks",
      level: "Intermediate",
    },
    {
      icon: Navigation,
      title: "Left-Hand Driving Mastery",
      description:
        "Specialized training for countries with left-hand traffic systems like the UK and Australia.",
      features: [
        "Traffic adaptation",
        "Road positioning",
        "Roundabout navigation",
        "Country-specific rules",
      ],
      duration: "4 weeks",
      level: "Intermediate",
    },
    {
      icon: Mountain,
      title: "Terrain Mastery",
      description:
        "Learn to navigate challenging terrains including mountains, highways, and urban environments.",
      features: [
        "Mountain driving",
        "Highway navigation",
        "Urban maneuvering",
        "Weather adaptation",
      ],
      duration: "5 weeks",
      level: "Advanced",
    },
  ];

  return (
    <SectionWrapper className="bg-gray-50" id="technical-training">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full mb-6">
            <Truck className="w-5 h-5" />
            <span className="font-semibold">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Training Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your technical foundation with comprehensive driving modules
            designed for international standards and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 rounded-xl shadow-lg">
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {module.level}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {module.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

// Enhanced Language and Communication Component
const LanguageCommunication = () => {
  const languages = [
    {
      icon: Globe,
      title: "English for Professionals (IELTS)",
      description:
        "Achieve professional English proficiency with IELTS certification for global opportunities.",
      level: "Professional Level",
      duration: "12 weeks",
      certification: "IELTS Certified",
      color: "blue",
    },
    {
      icon: Languages,
      title: "German A1 & B2 Certification",
      description:
        "Master German language skills from basic to intermediate level for European driving careers.",
      level: "A1 to B2 Levels",
      duration: "16 weeks",
      certification: "Goethe Certified",
      color: "red",
    },
    {
      icon: MessageCircle,
      title: "Spanish Basics + Transport Terms",
      description:
        "Learn essential Spanish communication skills with specialized transport terminology.",
      level: "Basic + Specialized",
      duration: "8 weeks",
      certification: "DELE Prep",
      color: "yellow",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      gradient: "from-blue-500 to-blue-600",
      border: "border-blue-200",
    },
    red: {
      bg: "bg-red-50",
      text: "text-red-700",
      gradient: "from-red-500 to-red-600",
      border: "border-red-200",
    },
    yellow: {
      bg: "bg-yellow-50",
      text: "text-yellow-700",
      gradient: "from-yellow-500 to-orange-500",
      border: "border-yellow-200",
    },
  };

  return (
    <SectionWrapper className="bg-white" id="language-training">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full mb-6">
            <Languages className="w-5 h-5" />
            <span className="font-semibold">Global Communication</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Language & Communication
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Break language barriers and communicate confidently in international
            markets with certified language programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                colorClasses[lang.color].border
              } hover:shadow-2xl transition-all duration-300`}
            >
              <div
                className={`${
                  colorClasses[lang.color].bg
                } w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto`}
              >
                <lang.icon
                  className={`w-10 h-10 ${colorClasses[lang.color].text}`}
                />
              </div>

              <div className="text-center mb-6">
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-3 ${
                    colorClasses[lang.color].bg
                  } ${colorClasses[lang.color].text}`}
                >
                  {lang.level}
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {lang.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    {lang.certification}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {lang.title}
              </h3>
              <p className="text-gray-600 mb-8 text-center leading-relaxed">
                {lang.description}
              </p>

              <button
                className={`w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r ${
                  colorClasses[lang.color].gradient
                } hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

// Enhanced Behavioral Skills Component
const BehavioralSkills = () => {
  const skills = [
    {
      icon: Users,
      title: "Professional Conduct and Work Ethics",
      description:
        "Develop the professional standards expected in international work environments.",
      benefits: [
        "Workplace professionalism",
        "Cultural sensitivity",
        "Time management",
        "Team collaboration",
      ],
      highlight: "Foundation of Success",
      color: "orange",
    },
    {
      icon: Heart,
      title: "Cultural Adaptability Training",
      description:
        "Learn to adapt and thrive in diverse cultural environments across different countries.",
      benefits: [
        "Cross-cultural communication",
        "Adaptation strategies",
        "Cultural awareness",
        "Respectful interaction",
      ],
      highlight: "Global Mindset",
      color: "yellow",
    },
    {
      icon: Target,
      title: "Interview Preparation",
      description:
        "Master the art of interviews and presentations to secure your dream international position.",
      benefits: [
        "Interview techniques",
        "Resume optimization",
        "Confidence building",
        "Mock interviews",
      ],
      highlight: "Career Acceleration",
      color: "green",
    },
  ];

  return (
    <SectionWrapper
      className="bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50"
      id="soft-skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full mb-6">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">Personal Development</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Behavioral & Soft Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Develop the interpersonal skills that make you stand out in global
            markets and build lasting professional relationships.
          </p>
        </div>

        <div className="space-y-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="bg-gradient-to-r from-orange-500 to-green-500 p-4 rounded-xl shadow-lg">
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {skill.highlight}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2">
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skill.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-orange-600 via-yellow-600 to-green-600 rounded-3xl p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                  <div className="relative z-10">
                    <div className="text-7xl font-bold opacity-20 mb-6">
                      0{index + 1}
                    </div>
                    <h4 className="text-2xl font-bold mb-6">
                      Why This Matters
                    </h4>
                    <p className="text-orange-100 text-lg leading-relaxed">
                      {index === 0 &&
                        "Professional conduct is the foundation of success in international careers. Employers worldwide value reliability, integrity, and professional behavior above all else."}
                      {index === 1 &&
                        "Cultural adaptability sets you apart in global markets. Understanding and respecting different cultures makes you a valuable international professional and opens doors to opportunities."}
                      {index === 2 &&
                        "Strong interview skills are your gateway to opportunities. Confidence, preparation, and presentation are key to landing your dream international position and advancing your career."}
                    </p>
                    <div className="mt-8">
                      <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300">
                        Start Module
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

// Enhanced Goal Section Component
const GoalSection = () => {
  return (
    <SectionWrapper
      className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50"
      id="our-goal"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/30 backdrop-blur-2xl rounded-3xl p-10 sm:p-14 border border-white/40 shadow-2xl"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white/60 text-purple-700 px-6 py-2 rounded-full mb-8 text-sm font-semibold shadow-sm"
          >
            <Target className="w-5 h-5" />
            <span>Our Mission</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6"
          >
            Our Goal
          </motion.h2>

          {/* Highlighted Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            To ensure that you're not just a driver — but a{" "}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-xl font-semibold shadow-md whitespace-nowrap"
            >
              Global Mobility Professional
            </motion.span>
          </motion.p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                number: "100+",
                label: "Skills Covered",
                description: "Comprehensive curriculum",
              },
              {
                icon: MapPin,
                number: "50+",
                label: "Countries Supported",
                description: "Global opportunities",
              },
              {
                icon: TrendingUp,
                number: "95%",
                label: "Success Rate",
                description: "Proven track record",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-xl rounded-xl p-6 sm:p-8 shadow-md border border-white/40 hover:shadow-xl transition-all duration-300"
              >
                <stat.icon className="w-10 h-10 text-purple-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
                <div className="text-gray-500 text-sm mt-1">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

// Enhanced Call to Action Component
const CallToAction = () => {
  return (
    <SectionWrapper className="bg-gray-900" id="get-started">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full mb-8">
            <Star className="w-5 h-5" />
            <span className="font-semibold">Join the Journey</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Start Your Global Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who have transformed their careers
            through our comprehensive learning program. Your international
            driving career starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
              Start Learning Today
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-3">
              <Download className="w-5 h-5" />
              Download Curriculum
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-5 h-5" />
              <span>Certified Programs</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Award className="w-5 h-5" />
              <span>Industry Recognized</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-5 h-5" />
              <span>1000+ Success Stories</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

// Main Learn Page Component
const LearnPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <LearnHero />
      <TechnicalTraining />
      <LanguageCommunication />
      <BehavioralSkills />
      <GoalSection />
      <CallToAction />
    </div>
  );
};

export default LearnPage;
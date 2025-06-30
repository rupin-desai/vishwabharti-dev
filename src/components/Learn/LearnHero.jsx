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

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default LearnHero;

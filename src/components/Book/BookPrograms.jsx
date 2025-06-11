import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Target,
} from "lucide-react";

const BookPrograms = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const programs = [
    {
      id: "basic",
      title: "Basic Driver Training",
      duration: "4 Weeks",
      price: "₹25,000",
      level: "Beginner",
      description:
        "Perfect for complete beginners who want to learn professional driving skills from scratch.",
      features: [
        "Basic vehicle operation and controls",
        "Traffic rules and road safety",
        "Parking and maneuvering techniques",
        "Defensive driving principles",
        "License preparation support",
      ],
      icon: BookOpen,
      color: "from-theme-primary to-theme-accent",
      popular: false,
    },
    {
      id: "advanced",
      title: "Advanced Driver Training",
      duration: "8 Weeks",
      price: "₹45,000",
      level: "Intermediate",
      description:
        "Comprehensive training for those with basic driving skills who want to become professional drivers.",
      features: [
        "Advanced driving techniques",
        "Commercial vehicle operation",
        "Route planning and navigation",
        "Customer service training",
        "Job placement assistance",
      ],
      icon: Target,
      color: "from-theme-accent to-theme-success",
      popular: true,
    },
    {
      id: "professional",
      title: "Professional Certification",
      duration: "12 Weeks",
      price: "₹65,000",
      level: "Advanced",
      description:
        "Complete professional development program with industry certification and guaranteed job placement.",
      features: [
        "Professional driving certification",
        "Multi-vehicle training",
        "Business communication skills",
        "Financial planning basics",
        "100% job placement guarantee",
      ],
      icon: Award,
      color: "from-theme-success to-theme-primary",
      popular: false,
    },
    {
      id: "international",
      title: "International Certification",
      duration: "16 Weeks",
      price: "₹85,000",
      level: "Expert",
      description:
        "Premium program for international employment with language training and global certification.",
      features: [
        "International driving standards",
        "Language training (IELTS/German)",
        "Cultural orientation",
        "Visa and documentation support",
        "Global job placement assistance",
      ],
      icon: Globe,
      color: "from-theme-primary to-theme-success",
      popular: false,
    },
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById("booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-theme-dark mb-4">
            Choose Your Training Program
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-success mx-auto mb-6"></div>
          <p className="text-xl text-theme-neutral max-w-3xl mx-auto">
            Select the perfect program based on your experience level and career
            goals. All programs include hands-on training and certification.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="relative h-full"
              variants={cardVariants}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-theme-primary to-theme-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${
                  program.popular ? "border-theme-primary" : "border-gray-100"
                } hover:shadow-xl transition-all duration-300 group h-full flex flex-col`}
              >
                {/* Card Header - Fixed height */}
                <div
                  className={`bg-gradient-to-r ${program.color} p-6 text-white min-h-[180px] flex flex-col justify-between`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <program.icon size={24} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{program.price}</div>
                      <div className="text-white/80 text-sm">
                        Total Program Fee
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Card Content - Flexible height */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Program Details */}
                  <div className="flex items-center gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="text-theme-primary" size={16} />
                      <span className="text-theme-neutral">
                        {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="text-theme-accent" size={16} />
                      <span className="text-theme-neutral">
                        {program.level}
                      </span>
                    </div>
                  </div>

                  {/* Features List - Fixed height with scrolling if needed */}
                  <div className="mb-6 flex-1">
                    <h4 className="font-semibold text-theme-dark mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2 max-h-[140px] overflow-y-auto">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle
                            className="text-theme-success mt-0.5 flex-shrink-0"
                            size={16}
                          />
                          <span className="text-theme-neutral text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button - Fixed at bottom */}
                  <button
                    onClick={scrollToForm}
                    className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group flex items-center justify-center gap-2 mt-auto`}
                  >
                    Select This Program
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-theme-dark mb-4">
              Not Sure Which Program is Right for You?
            </h3>
            <p className="text-theme-neutral mb-6">
              Our training experts will help you choose the perfect program
              based on your experience, goals, and timeline. Get personalized
              recommendations and answers to all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919322606890"
                className="bg-theme-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-theme-warning transition-colors inline-flex items-center justify-center gap-2"
              >
                <Clock size={16} />
                Schedule a Consultation
              </a>
              <button
                onClick={scrollToForm}
                className="border border-theme-primary text-theme-primary px-6 py-3 rounded-lg font-medium hover:bg-theme-primary hover:text-white transition-colors inline-flex items-center justify-center gap-2"
              >
                <BookOpen size={16} />
                Book Any Program
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookPrograms;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  User,
  Award,
  Clock,
  Target,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import Button from "../../ui/Components/Button";

const HomeCandidateTypes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const truckVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  // Candidate types data
  const candidateTypes = [
    {
      id: "fresher",
      title: "Fresher",
      experience: "<2 years of Experience",
      description:
        "Perfect for beginners who want to start their professional driving career",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      features: [
        "Basic driving skills training",
        "Road safety & traffic rules",
        "Professional conduct training",
        "License preparation support",
        "Entry-level job placement",
      ],
      icon: <User size={24} />,
      color: "from-theme-primary to-theme-accent",
      bgColor: "bg-theme-primary/10",
      textColor: "text-theme-primary",
    },
    {
      id: "experienced",
      title: "Experienced",
      experience: ">2 years of Experience",
      description:
        "Advanced training for experienced drivers seeking international opportunities",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      features: [
        "Advanced driving techniques",
        "International standards training",
        "Specialized vehicle operations",
        "Language & cultural preparation",
        "Premium job placements",
      ],
      icon: <Award size={24} />,
      color: "from-theme-accent to-theme-success",
      bgColor: "bg-theme-success/10",
      textColor: "text-theme-success",
    },
  ];

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("home-contact-section");
    if (contactSection) {
      const navbarHeight = 80;
      const sectionPosition =
        contactSection.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="py-16 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-theme-primary/5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-theme-success/5 rounded-full"></div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-theme-primary/10 text-theme-primary rounded-full font-medium text-sm mb-4">
              Choose Your Path
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Candidate Types
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-success mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The process for international mobilization will differ slightly
              based on the candidate type
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Candidate Cards */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {candidateTypes.map((candidate, index) => (
                <motion.div
                  key={candidate.id}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  {/* Card Header */}
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <img
                        src={candidate.avatar}
                        alt={`${candidate.title} candidate`}
                        className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                      />
                      <div
                        className={`absolute -bottom-1 -right-1 w-8 h-8 ${candidate.bgColor} rounded-full flex items-center justify-center`}
                      >
                        <span className={candidate.textColor}>
                          {candidate.icon}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {candidate.title}
                      </h3>
                      <p
                        className={`text-sm font-medium ${candidate.textColor} bg-gradient-to-r ${candidate.color} bg-clip-text text-transparent`}
                      >
                        {candidate.experience}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {candidate.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Program Features:
                    </h4>
                    {candidate.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle
                          className="text-theme-success mt-0.5 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <Button
                      color="gradient"
                      className="w-full justify-center"
                      onClick={scrollToContact}
                    >
                      Apply for {candidate.title} Program
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Truck Illustration */}
            <motion.div
              className="lg:col-span-1 flex justify-center items-center"
              variants={truckVariants}
            >
              <div className="relative">
                {/* Main truck container with background */}
                <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 shadow-2xl">
                  {/* Truck Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      src="/images/truck.png"
                      alt="Professional Driver Training"
                      className="w-48 h-32 object-contain filter drop-shadow-lg"
                    />
                  </div>

                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                </div>

                {/* Floating stats */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-theme-success" size={20} />
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Success Rate
                      </p>
                      <p className="text-lg font-bold text-theme-success">
                        95%
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="text-theme-primary" size={20} />
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Training Time
                      </p>
                      <p className="text-lg font-bold text-theme-primary">
                        4-16 Weeks
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div className="mt-16 text-center" variants={itemVariants}>
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Not Sure Which Program is Right for You?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our career counselors will help you assess your experience level
                and recommend the perfect training path for your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button color="gradient" onClick={scrollToContact}>
                  Get Free Consultation
                </Button>
                <Button variant="outline" color="gradient">
                  Download Program Guide
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCandidateTypes;

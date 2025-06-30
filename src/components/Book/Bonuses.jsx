import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Languages, User, Plane, Star, CheckCircle } from "lucide-react";
import Button from "../../ui/Components/Button";

const Bonuses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, -40px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 60px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const buttonVariants = {
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
        damping: 14,
      },
    },
  };

  const bonuses = [
    {
      icon: Languages,
      title: "Free IELTS Crash Course",
      description:
        "Intensive IELTS preparation course with expert instructors to boost your language proficiency scores.",
      value: "$500 Value",
    },
    {
      icon: User,
      title: "Resume Building",
      description:
        "Professional resume crafting service to make you stand out in the competitive global job market.",
      value: "$200 Value",
    },
    {
      icon: Plane,
      title: "Airport Assistance",
      description:
        "Dedicated airport assistance and guidance for your departure and arrival at your destination.",
      value: "$150 Value",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-theme-primary/10 via-white to-theme-success/10"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={headingVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-theme-accent to-orange-500 text-white px-4 py-2 rounded-full mb-4"
              animate={{
                transform: [
                  "translate3d(0, 0, 0) scale(1)",
                  "translate3d(0, -2px, 0) scale(1.05)",
                  "translate3d(0, 0, 0) scale(1)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star className="w-4 h-4" />
              <span className="font-semibold text-sm">LIMITED TIME OFFER</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-dark mb-4">
              Exclusive Bonuses for{" "}
              <span className="bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success bg-clip-text text-transparent">
                Early Applicants
              </span>
            </h2>
            <p className="text-lg text-theme-neutral max-w-3xl mx-auto">
              Register now and unlock these incredible bonuses worth over $850,
              exclusively for early applicants
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  transform: "translate3d(0, -12px, 0)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100 overflow-hidden group"
              >
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-theme-accent/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 text-center">
                  <motion.div
                    className="bg-gradient-to-r from-theme-accent to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{
                      transform: "translate3d(0, 0, 0) rotateY(15deg)",
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                  >
                    <bonus.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="bg-gradient-to-r from-theme-accent to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                    {bonus.value}
                  </div>

                  <h3 className="text-xl font-bold text-theme-dark mb-3">
                    {bonus.title}
                  </h3>
                  <p className="text-theme-neutral leading-relaxed text-sm">
                    {bonus.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={buttonVariants} className="text-center">
            <Button
              color="gradient"
              variant="primary"
              size="lg"
              className="mb-4"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Claim Your Bonuses Now
            </Button>
            <p className="text-theme-neutral text-sm">
              *Bonuses available for registrations completed within 48 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bonuses;

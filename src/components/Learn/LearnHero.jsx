import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen } from "lucide-react";
import Button from "../../ui/Components/Button"; // adjust path if needed

const LearnHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(-40px, 0, 0)",
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

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 40px, 0)",
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

  return (
    <section
      ref={ref}
      className="relative h-[calc(100vh-180px)] w-full flex items-center justify-center bg-gradient-to-br from-theme-primary/10 via-white to-theme-success/10"
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={headingVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-theme-primary to-theme-success text-white px-6 py-3 rounded-full mb-6"
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Skill Development</span>
          </motion.div>

          <motion.h1
            variants={headingVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-theme-dark leading-tight mb-4"
          >
            Learn Skills to{" "}
            <span className="bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success bg-clip-text text-transparent">
              Drive Your Global Career
            </span>
          </motion.h1>

          <motion.p
            variants={paragraphVariants}
            className="text-lg sm:text-xl text-theme-neutral max-w-2xl mx-auto mb-8"
          >
            Our Learn program equips you with in-demand technical and soft
            skills needed for a successful international driving career — from
            training to transition.
          </motion.p>

          <motion.div variants={buttonVariants} className="flex justify-center">
            <Button color="gradient" variant="primary" size="lg">
              Explore the Skills →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearnHero;

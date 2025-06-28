import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LearnCTA = () => {
  const fadeUp = (delay = 0) => ({
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 30px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 140, // Higher = faster snap
        damping: 16, // Lower = more bounce
        mass: 0.9,
        delay,
      },
    },
  });

  return (
    <section className="mt-15 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp(0)}
        className="bg-theme-light/60 backdrop-blur-md border border-theme-light rounded-2xl px-6 py-16 text-center shadow-md space-y-6 sm:space-y-7"
        style={{
          willChange: "transform, opacity",
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <motion.h2
          variants={fadeUp(0.1)}
          className="text-3xl sm:text-4xl font-bold text-theme-dark"
        >
          Your Global Driving Career Starts Here
        </motion.h2>

        <motion.p
          variants={fadeUp(0.2)}
          className="text-lg sm:text-xl text-theme-neutral max-w-2xl mx-auto"
        >
          You've learned the process. You've seen the skills. Now take the first
          step.
        </motion.p>

        <motion.a
          href="/apply"
          variants={fadeUp(0.3)}
          className="inline-flex items-center justify-center bg-theme-primary hover:bg-theme-success text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300"
        >
          Begin Your Training
          <ArrowRight className="ml-2 h-5 w-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default LearnCTA;

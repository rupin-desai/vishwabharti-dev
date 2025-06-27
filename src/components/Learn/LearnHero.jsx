// components/Learn/LearnHero.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LearnHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const heroVariant = {
    hidden: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={heroVariant}
        className="max-w-4xl"
      >
        <h1 className="text-4xl font-bold text-theme-dark mb-4">
          Unlock Skills That Drive You Globally
        </h1>
        <p className="text-lg md:text-xl text-theme-neutral">
          Our "Learn" page is your complete guide to what you'll master during
          your apprenticeship at Vishwabharti. From technical knowledge to soft
          skills, we prepare you for every challenge that comes with
          international driving careers.
        </p>
      </motion.div>
    </section>
  );
};

export default LearnHero;

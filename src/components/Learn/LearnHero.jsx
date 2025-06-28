// components/Learn/LearnHero.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LearnHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const headingVariant = {
    hidden: { opacity: 0, transform: "translate3d(-40px, 0, 0)" },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 1,
        delay: 0,
      },
    },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 1,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16" ref={ref}>
      <motion.h1
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headingVariant}
        className="text-4xl font-bold text-theme-dark mb-4"
      >
        Unlock Skills That Drive You Globally
      </motion.h1>

      <motion.p
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={paragraphVariant}
        className="text-lg md:text-xl text-theme-neutral"
      >
        Our "Learn" page is your complete guide to what you'll master during
        your apprenticeship at Vishwabharti. From technical knowledge to soft
        skills, we prepare you for every challenge that comes with international
        driving careers.
      </motion.p>
    </section>
  );
};

export default LearnHero;

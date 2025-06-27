import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Application",
    desc: "Submit your application and required documents",
  },
  {
    step: 2,
    title: "Assessment",
    desc: "Complete skills assessment and interview",
  },
  {
    step: 3,
    title: "Classroom Training",
    desc: "4 weeks of theoretical knowledge and safety training",
  },
  {
    step: 4,
    title: "Practical Training",
    desc: "6 weeks of hands-on driving experience",
  },
  {
    step: 5,
    title: "On-the-Job Training",
    desc: "2 weeks of supervised real-world experience",
  },
  {
    step: 6,
    title: "Certification",
    desc: "Receive your professional driver certification",
  },
];

const LearnProcess = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="container mx-auto px-4 py-12" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-theme-dark mb-2">
          Training Process
        </h2>
        <p className="text-theme-neutral max-w-xl">
          Our structured training process ensures you receive comprehensive
          preparation for your driving career.
        </p>
      </motion.div>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 bg-theme-primary text-white rounded-full flex items-center justify-center font-bold">
              {step.step}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-theme-dark">
                {step.title}
              </h4>
              <p className="text-theme-neutral text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearnProcess;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Upload, CreditCard, Phone } from "lucide-react";

const BookingProcess = () => {
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

  const steps = [
    {
      icon: FileText,
      title: "Fill the Online Registration Form",
      description:
        "Complete our comprehensive registration form with your personal details and preferences.",
      step: "01",
    },
    {
      icon: Upload,
      title: "Upload Documents",
      description:
        "Securely upload all required documents for verification and processing.",
      step: "02",
    },
    {
      icon: CreditCard,
      title: "Pay Registration Fee",
      description:
        "Make a secure payment for your registration fee through our encrypted portal.",
      step: "03",
    },
    {
      icon: Phone,
      title: "Get Confirmation Call",
      description:
        "Receive a confirmation call from our team to finalize your registration.",
      step: "04",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-white via-theme-primary/5 to-theme-success/5"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={headingVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-theme-primary to-theme-success text-white px-4 py-2 rounded-full mb-4">
              <span className="font-semibold text-sm">4 Simple Steps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-dark mb-4">
              Simple{" "}
              <span className="bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success bg-clip-text text-transparent">
                Booking Process
              </span>
            </h2>
            <p className="text-lg text-theme-neutral max-w-2xl mx-auto">
              Follow these four easy steps to begin your global journey with
              confidence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  transform: "translate3d(0, -10px, 0)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-theme-primary/10">
                  {step.step}
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-theme-primary to-theme-success rounded-xl flex items-center justify-center mb-4"
                    whileHover={{
                      transform: "translate3d(0, 0, 0) rotateY(15deg)",
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-theme-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-theme-neutral text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingProcess;

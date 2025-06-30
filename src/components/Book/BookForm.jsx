import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Upload, CreditCard, Send } from "lucide-react";
import Button from "../../ui/Components/Button";

const BookForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentStep, setCurrentStep] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const formVariants = {
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

  const steps = [
    { number: 1, title: "Registration Form", icon: FileText },
    { number: 2, title: "Upload Documents", icon: Upload },
    { number: 3, title: "Payment", icon: CreditCard },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-white via-theme-success/5 to-theme-primary/5"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={headingVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-theme-primary to-theme-success text-white px-4 py-2 rounded-full mb-4">
              <FileText className="w-4 h-4" />
              <span className="font-semibold text-sm">Start Registration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-dark mb-4">
              Complete Your{" "}
              <span className="bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success bg-clip-text text-transparent">
                Registration
              </span>
            </h2>
            <p className="text-lg text-theme-neutral max-w-2xl mx-auto">
              Fill out the form below to begin your global journey registration
              process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <motion.div
              variants={formVariants}
              className="flex justify-center mb-12"
            >
              <div className="flex items-center space-x-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-center">
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        currentStep >= step.number
                          ? "bg-gradient-to-r from-theme-primary to-theme-success text-white border-transparent"
                          : "border-gray-300 text-gray-400"
                      }`}
                      whileHover={{ transform: "translate3d(0, -2px, 0)" }}
                    >
                      <step.icon className="w-5 h-5" />
                    </motion.div>
                    <span
                      className={`ml-2 text-sm font-medium ${
                        currentStep >= step.number
                          ? "text-theme-dark"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </span>
                    {step.number < steps.length && (
                      <div
                        className={`w-8 h-0.5 mx-4 ${
                          currentStep > step.number
                            ? "bg-gradient-to-r from-theme-primary to-theme-success"
                            : "bg-gray-300"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Registration Form */}
            <motion.div
              variants={formVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ transform: "translate3d(0, -2px, 0)" }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold text-theme-dark">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ transform: "translate3d(0, -2px, 0)" }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold text-theme-dark">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ transform: "translate3d(0, -2px, 0)" }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold text-theme-dark">
                      Destination Country *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-all duration-200">
                      <option value="">Select destination country</option>
                      <option value="usa">United States</option>
                      <option value="canada">Canada</option>
                      <option value="uk">United Kingdom</option>
                      <option value="australia">Australia</option>
                      <option value="germany">Germany</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    whileHover={{ transform: "translate3d(0, -2px, 0)" }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold text-theme-dark">
                      Experience Level *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-all duration-200">
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner (0-2 years)</option>
                      <option value="intermediate">
                        Intermediate (2-5 years)
                      </option>
                      <option value="experienced">
                        Experienced (5+ years)
                      </option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ transform: "translate3d(0, -2px, 0)" }}
                  className="space-y-2"
                >
                  <label className="text-sm font-semibold text-theme-dark">
                    Additional Comments
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-all duration-200 resize-none"
                    placeholder="Tell us more about your goals and preferences..."
                  />
                </motion.div>

                <motion.div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 text-theme-primary bg-gray-100 border-gray-300 rounded focus:ring-theme-primary/20"
                  />
                  <label htmlFor="terms" className="text-sm text-theme-neutral">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-theme-primary hover:underline font-medium"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-theme-primary hover:underline font-medium"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </motion.div>

                <motion.div
                  className="pt-6"
                  whileHover={{ transform: "translate3d(0, -2px, 0)" }}
                >
                  <Button
                    color="gradient"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Registration
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookForm;

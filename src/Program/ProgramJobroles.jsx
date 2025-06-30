// components/Program/ProgramJobRoles.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  Truck,
  Package,
  AlertTriangle,
  Globe,
} from "lucide-react";

const jobRoles = [
  {
    title: "Long-haul Truck Driver",
    description: "Drive across long distances with modern fleet vehicles",
    icon: Truck,
    salary: "$45,000 - $65,000",
    features: ["Interstate routes", "Modern trucks", "Flexible schedules"],
  },
  {
    title: "Hazard Goods Carrier",
    description:
      "Specialized transport of hazardous materials with safety protocols",
    icon: AlertTriangle,
    salary: "$55,000 - $75,000",
    features: ["Safety training", "Premium rates", "Specialized equipment"],
  },
  {
    title: "Logistic Fleet Driver",
    description: "Coordinate and drive within organized fleet operations",
    icon: Package,
    salary: "$40,000 - $55,000",
    features: ["Team coordination", "Regular routes", "Fleet benefits"],
  },
  {
    title: "Freight & Container Transporter",
    description: "Handle international freight and container transportation",
    icon: Globe,
    salary: "$48,000 - $68,000",
    features: [
      "Port operations",
      "International cargo",
      "Growth opportunities",
    ],
  },
];

const ProgramJobroles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedJob, setSelectedJob] = useState(null);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transform: "translate3d(0, 20px, 0)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="px-4 py-20 bg-gradient-to-br from-theme-primary/5 to-theme-success/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-theme-dark mb-6">
            Available Job Roles
          </h2>
          <p className="text-xl text-theme-neutral max-w-3xl mx-auto">
            Choose from high-demand transportation roles with competitive
            salaries
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {jobRoles.map((job, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{
                scale: 1.02,
                transform: "translate3d(0, -10px, 0)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              onClick={() =>
                setSelectedJob(selectedJob === index ? null : index)
              }
              className={`bg-white rounded-3xl p-8 cursor-pointer transition-all duration-300 border-2 ${
                selectedJob === index
                  ? "border-theme-primary/30 shadow-2xl"
                  : "border-theme-light hover:border-theme-primary/20 shadow-lg hover:shadow-xl"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-theme-primary to-theme-success rounded-2xl flex items-center justify-center">
                  <job.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-theme-dark">
                    {job.salary}
                  </p>
                  <p className="text-sm text-theme-neutral">Annual Salary</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-theme-dark mb-3">
                {job.title}
              </h3>

              <p className="text-theme-neutral mb-6">{job.description}</p>

              <div className="space-y-2">
                {job.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-theme-success" />
                    <span className="text-theme-neutral">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-gradient-to-r from-theme-primary via-theme-accent to-theme-success text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Apply for this Role
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramJobroles;

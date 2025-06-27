import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, BadgeCheck } from "lucide-react";

const LearnStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-6"
      ref={ref}
    >
      {[
        {
          icon: <Briefcase className="text-yellow-700 mt-1" size={26} />,
          title: "Program Duration",
          desc: "12-week intensive training program",
        },
        {
          icon: <BadgeCheck className="text-yellow-700 mt-1" size={26} />,
          title: "Certification",
          desc: "Industry-recognized certification upon completion",
        },
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 20px rgba(234, 179, 8, 0.25)",
            transition: { duration: 0.3 },
          }}
          className="flex-1 bg-yellow-100 p-6 rounded-xl flex items-start gap-4 border border-yellow-200 hover:border-yellow-400 transition-all duration-300"
        >
          {stat.icon}
          <div>
            <h2 className="text-lg font-semibold text-yellow-900 mb-1">
              {stat.title}
            </h2>
            <p className="text-yellow-800 text-sm">{stat.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LearnStats;

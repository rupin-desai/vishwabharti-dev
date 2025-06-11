import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Award,
  Users,
  Calendar,
  Zap,
} from "lucide-react";

const BookSidebar = () => {
  const sidebarVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const benefits = [
    "100% Job Placement Assistance",
    "International Certification",
    "Expert Instructors",
    "Modern Training Vehicles",
    "Flexible Scheduling",
    "Language Support Available",
    "Career Counseling",
    "Post-Training Support",
  ];

  const quickStats = [
    {
      icon: Users,
      value: "500+",
      label: "Students Trained",
      color: "text-theme-primary",
    },
    {
      icon: Award,
      value: "95%",
      label: "Success Rate",
      color: "text-theme-accent",
    },
    {
      icon: Calendar,
      value: "15+",
      label: "Years Experience",
      color: "text-theme-success",
    },
    {
      icon: Zap,
      value: "25+",
      label: "Countries Served",
      color: "text-theme-warning",
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Contact Information Card */}
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-theme-primary/10 rounded-lg flex items-center justify-center">
            <Phone className="text-theme-primary" size={20} />
          </div>
          <h3 className="text-xl font-bold text-theme-dark">
            Contact Information
          </h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Phone
              className="text-theme-primary mt-1 flex-shrink-0"
              size={18}
            />
            <div>
              <p className="font-medium text-theme-dark">Phone</p>
              <a
                href="tel:+919322606890"
                className="text-theme-neutral hover:text-theme-primary transition-colors"
              >
                (+91) 93226 06890
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-theme-accent mt-1 flex-shrink-0" size={18} />
            <div>
              <p className="font-medium text-theme-dark">Email</p>
              <a
                href="mailto:info@vishwabharti.com"
                className="text-theme-neutral hover:text-theme-primary transition-colors"
              >
                info@vishwabharti.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin
              className="text-theme-success mt-1 flex-shrink-0"
              size={18}
            />
            <div>
              <p className="font-medium text-theme-dark">Training Center</p>
              <p className="text-theme-neutral">
                Sector 12, Kharghar
                <br />
                Navi Mumbai, Maharashtra
                <br />
                India - 410210
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock
              className="text-theme-warning mt-1 flex-shrink-0"
              size={18}
            />
            <div>
              <p className="font-medium text-theme-dark">Operating Hours</p>
              <p className="text-theme-neutral">
                Mon - Sat: 9:00 AM - 8:00 PM
                <br />
                Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats Card */}
      <motion.div
        className="bg-gradient-to-br from-theme-light to-white rounded-2xl shadow-lg p-6 border border-theme-primary/20"
        variants={itemVariants}
      >
        <h3 className="text-xl font-bold text-theme-dark mb-6 text-center">
          Our Achievement
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-12 h-12 ${stat.color.replace(
                  "text-",
                  "bg-"
                )}/10 rounded-lg flex items-center justify-center mx-auto mb-2`}
              >
                <stat.icon className={stat.color} size={24} />
              </div>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-theme-neutral">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Card */}
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-theme-success/10 rounded-lg flex items-center justify-center">
            <CheckCircle className="text-theme-success" size={20} />
          </div>
          <h3 className="text-xl font-bold text-theme-dark">Why Choose Us?</h3>
        </div>

        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle
                className="text-theme-success mt-0.5 flex-shrink-0"
                size={16}
              />
              <span className="text-theme-neutral">{benefit}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Emergency Contact Card */}
      <motion.div
        className="bg-theme-warning/5 rounded-2xl shadow-lg p-6 border border-theme-warning/20"
        variants={itemVariants}
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-theme-warning/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Zap className="text-theme-warning" size={24} />
          </div>
          <h3 className="text-lg font-bold text-theme-dark mb-2">
            Quick Response
          </h3>
          <p className="text-theme-neutral text-sm mb-4">
            Need immediate assistance or have urgent questions?
          </p>
          <a
            href="tel:+919322606890"
            className="inline-flex items-center gap-2 bg-theme-warning text-white px-4 py-2 rounded-lg font-medium hover:bg-theme-warning/90 transition-colors"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookSidebar;

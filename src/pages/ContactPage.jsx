import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

// PageHeader Component
const PageHeader = () => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-theme-primary to-theme-success bg-clip-text text-transparent mb-4">
        Get in Touch
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-success mx-auto mb-6 rounded-full"></div>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
        Ready to start your journey as a professional driver? Reach out for
        enquiries, support or collaborations. Contact us to learn more about our
        comprehensive training programs and international opportunities.
      </p>
    </motion.div>
  );
};

// ContactInfo Component
const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: [
        { label: "Customer Support", value: "+91 98765 43210" },
        { label: "Admissions Helpline", value: "+91 91234 56789" },
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: [
        { label: "General Info", value: "info@vishwabharti.in" },
        { label: "Applications", value: "apply@vishwabharti.in" },
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: [
        { label: "Monday - Saturday", value: "9:00 AM - 6:30 PM" },
        { label: "Response Time", value: "Within 24 business hours" },
      ],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Training Center",
      details: [
        {
          label: "Vishwabharti Driver Training Institute",
          value: "Sector 12, Kharghar, Navi Mumbai, Maharashtra 410210",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {contactDetails.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-br from-theme-primary to-theme-success text-white p-3 rounded-lg shadow-md">
              {item.icon}
            </div>
            <h3 className="ml-3 font-semibold text-gray-800 text-sm lg:text-base">
              {item.title}
            </h3>
          </div>
          <div className="space-y-2">
            {item.details.map((detail, idx) => (
              <div key={idx}>
                <p className="text-xs text-gray-600">{detail.label}</p>
                <p className="font-medium text-gray-800 text-sm">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// ContactForm Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="mb-6">
        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
          Quick Contact Form
        </h3>
        <p className="text-gray-600 text-sm lg:text-base">
          Get in touch with us for enquiries, support or collaborations
        </p>
      </div>

      {isSubmitted ? (
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-theme-primary to-theme-success p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Message Sent!
          </h4>
          <p className="text-gray-600">
            We'll get back to you within 24 business hours.
          </p>
        </motion.div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-colors text-sm lg:text-base"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-colors text-sm lg:text-base"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-colors text-sm lg:text-base"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Program of Interest
              </label>
              <select
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-colors text-sm lg:text-base"
              >
                <option value="">Select a program</option>
                <option value="basic">Basic Driver Training</option>
                <option value="advanced">Advanced Driver Training</option>
                <option value="international">
                  International Certification
                </option>
                <option value="adr">ADR Certification</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-colors resize-none text-sm lg:text-base"
              placeholder="Tell us about your training goals, questions, or how we can help you..."
            ></textarea>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-br from-theme-primary to-theme-success text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:scale-105"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </div>
      )}
    </motion.div>
  );
};

// TrainingCenterMap Component
const TrainingCenterMap = () => {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-lg border border-gray-100"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="bg-gradient-to-br from-theme-primary to-theme-success text-white p-4 lg:p-6">
        <h3 className="text-lg lg:text-xl font-semibold flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Visit Our Training Center
        </h3>
        <p className="text-white/80 mt-1 text-sm lg:text-base">
          Vishwabharti Driver Training Institute
        </p>
        <p className="text-white/70 text-xs lg:text-sm mt-1">
          Sector 12, Kharghar, Navi Mumbai, Maharashtra 410210
        </p>
      </div>
      <div className="aspect-w-16 aspect-h-9 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.963870875241!2d73.067763!3d19.042537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c2164dbbc321%3A0xb60a32a655d291de!2sSector%2012%2C%20Kharghar%2C%20Navi%20Mumbai%2C%20Maharashtra%20410210%2C%20India!5e0!3m2!1sen!2sus!4v1746272248936!5m2!1sen!2sus"
          className="w-full h-[350px] lg:h-[450px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vishwabharti Training Center Location"
        ></iframe>
      </div>
    </motion.div>
  );
};

// CTASection Component
const CTASection = () => {
  return (
    <motion.div
      className="mt-16 text-center bg-gradient-to-br from-theme-primary to-theme-success rounded-2xl p-6 lg:p-8 text-white shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h3 className="text-xl lg:text-2xl font-bold mb-4">
        Ready to Start Your Driving Career?
      </h3>
      <p className="text-white/90 mb-6 max-w-2xl mx-auto text-sm lg:text-base">
        Join thousands of successful drivers who have launched their careers
        with Vishwabharti Driver Training Institute.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-theme-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-md text-sm lg:text-base">
          View Programs
        </button>
        <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-theme-primary transition-all duration-300 hover:scale-105 text-sm lg:text-base">
          Download Brochure
        </button>
      </div>
    </motion.div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/50 py-8 lg:py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <PageHeader />
        <ContactInfo />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <TrainingCenterMap />
          <ContactForm />
        </div>

        <CTASection />
      </div>
    </div>
  );
};

export default ContactPage;

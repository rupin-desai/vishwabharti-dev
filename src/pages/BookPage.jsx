import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const BookPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programType: "",
    preferredDate: "",
    preferredTime: "",
    experience: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const programTypes = [
    { value: "basic", label: "Basic Driver Training (4 weeks)" },
    { value: "advanced", label: "Advanced Driver Training (8 weeks)" },
    {
      value: "professional",
      label: "Professional Driver Certification (12 weeks)",
    },
    {
      value: "international",
      label: "International Driver Certification (16 weeks)",
    },
  ];

  const timeSlots = [
    { value: "morning", label: "Morning (9:00 AM - 12:00 PM)" },
    { value: "afternoon", label: "Afternoon (1:00 PM - 4:00 PM)" },
    { value: "evening", label: "Evening (5:00 PM - 8:00 PM)" },
  ];

  const experienceLevels = [
    { value: "beginner", label: "Complete Beginner" },
    { value: "basic", label: "Basic (Can drive but need improvement)" },
    {
      value: "intermediate",
      label: "Intermediate (Confident but want certification)",
    },
    {
      value: "experienced",
      label: "Experienced (Want professional certification)",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        programType: "",
        preferredDate: "",
        preferredTime: "",
        experience: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-theme-dark mb-4">
            Book Your Training
          </h1>
          <div className="w-24 h-1 bg-theme-primary mx-auto mb-6"></div>
          <p className="text-theme-neutral max-w-2xl mx-auto text-lg">
            Start your journey towards professional driving certification.
            Choose your program and schedule your training today.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-theme-dark mb-6">
                Book Your Program
              </h2>

              {submitStatus === "success" && (
                <motion.div
                  className="mb-6 p-4 bg-theme-success bg-opacity-10 border border-theme-success rounded-lg flex items-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="text-theme-success mr-3" size={20} />
                  <span className="text-theme-success font-medium">
                    Booking submitted successfully! We'll contact you within 24
                    hours.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  className="mb-6 p-4 bg-theme-warning bg-opacity-10 border border-theme-warning rounded-lg flex items-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <AlertCircle className="text-theme-warning mr-3" size={20} />
                  <span className="text-theme-warning font-medium">
                    Something went wrong. Please try again later.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-theme-dark mb-4">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-theme-neutral mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-theme-neutral mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-theme-neutral mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-theme-neutral mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-theme-dark mb-4">
                    Program Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-theme-neutral mb-2">
                        Program Type *
                      </label>
                      <select
                        name="programType"
                        value={formData.programType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                      >
                        <option value="">Select a program</option>
                        {programTypes.map((program) => (
                          <option key={program.value} value={program.value}>
                            {program.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-theme-neutral mb-2">
                        Experience Level *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                      >
                        <option value="">Select your level</option>
                        {experienceLevels.map((level) => (
                          <option key={level.value} value={level.value}>
                            {level.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Schedule Preferences */}
                <div>
                  <h3 className="text-lg font-semibold text-theme-dark mb-4">
                    Schedule Preferences
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-theme-neutral mb-2">
                        Preferred Start Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-theme-neutral mb-2">
                        Preferred Time Slot *
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot.value} value={slot.value}>
                            {slot.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-medium text-theme-neutral mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                    placeholder="Any specific requirements or questions..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-theme-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-theme-warning transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Book Training Program"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-theme-dark mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone
                    className="text-theme-primary mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-theme-dark">Phone</p>
                    <p className="text-theme-neutral">(+91) 93226 06890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail
                    className="text-theme-accent mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-theme-dark">Email</p>
                    <p className="text-theme-neutral">info@vishwabharti.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin
                    className="text-theme-success mr-3 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-medium text-theme-dark">Address</p>
                    <p className="text-theme-neutral">
                      Sector 12, Kharghar
                      <br />
                      Navi Mumbai, Maharashtra
                      <br />
                      India - 410210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-theme-dark mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-theme-success mr-3 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-theme-neutral">
                    100% Job Placement Assistance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-theme-success mr-3 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-theme-neutral">
                    International Certification
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-theme-success mr-3 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-theme-neutral">
                    Experienced Instructors
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-theme-success mr-3 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-theme-neutral">
                    Modern Training Vehicles
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-theme-success mr-3 flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-theme-neutral">Flexible Schedules</span>
                </li>
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="bg-theme-light rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-theme-dark mb-4">
                Training Stats
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-theme-primary">
                    500+
                  </div>
                  <div className="text-sm text-theme-neutral">
                    Students Trained
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-theme-primary">
                    95%
                  </div>
                  <div className="text-sm text-theme-neutral">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-theme-primary">
                    10+
                  </div>
                  <div className="text-sm text-theme-neutral">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;

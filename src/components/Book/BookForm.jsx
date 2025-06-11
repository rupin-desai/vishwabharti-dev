import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import Button from "../../ui/Components/Button";

const BookForm = () => {
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
  const [submitted, setSubmitted] = useState(false);

  const programTypes = [
    { value: "", label: "Select a training program" },
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
    { value: "adr", label: "ADR Hazardous Materials Certification" },
    { value: "language", label: "Language Training (IELTS/German/Spanish)" },
  ];

  const timeSlots = [
    { value: "", label: "Select preferred time" },
    { value: "morning", label: "Morning (9:00 AM - 12:00 PM)" },
    { value: "afternoon", label: "Afternoon (1:00 PM - 4:00 PM)" },
    { value: "evening", label: "Evening (5:00 PM - 8:00 PM)" },
  ];

  const experienceLevels = [
    { value: "", label: "Select your experience level" },
    { value: "beginner", label: "Complete Beginner" },
    { value: "basic", label: "Basic (Can drive but need improvement)" },
    { value: "intermediate", label: "Intermediate (Confident driver)" },
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

    // Create email body
    const emailBody = `
New Training Program Booking Request

Personal Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Program Details:
Program Type: ${
      programTypes.find((p) => p.value === formData.programType)?.label ||
      formData.programType
    }
Experience Level: ${
      experienceLevels.find((e) => e.value === formData.experience)?.label ||
      formData.experience
    }
Preferred Start Date: ${formData.preferredDate}
Preferred Time Slot: ${
      timeSlots.find((t) => t.value === formData.preferredTime)?.label ||
      formData.preferredTime
    }

Additional Message:
${formData.message || "No additional message provided."}
    `;

    // Create mailto link
    const mailtoLink = `mailto:info@vishwabharti.com?subject=Training Program Booking Request - ${
      formData.firstName
    } ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after showing success
      setTimeout(() => {
        setSubmitted(false);
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
      }, 3000);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="w-16 h-16 bg-theme-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-theme-success" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-theme-dark mb-2">
          Booking Submitted!
        </h3>
        <p className="text-theme-neutral mb-4">
          Thank you for your interest! We'll contact you within 24 hours to
          confirm your booking and discuss next steps.
        </p>
        <div className="inline-flex items-center gap-2 text-theme-primary font-medium">
          <Mail size={16} />
          <span>Check your email for confirmation</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Form Header */}
      <div className="bg-gradient-to-r from-theme-primary to-theme-success p-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Book Your Training Program
        </h2>
        <p className="text-white/90">
          Fill out the form below to reserve your spot
        </p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Personal Information Section */}
        <div>
          <h3 className="text-lg font-semibold text-theme-dark mb-4 flex items-center gap-2">
            <User className="text-theme-primary" size={20} />
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-colors"
                placeholder="Enter your last name"
              />
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-lg font-semibold text-theme-dark mb-4 flex items-center gap-2">
            <Phone className="text-theme-accent" size={20} />
            Contact Information
          </h3>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>
        </div>

        {/* Program Selection Section */}
        <div>
          <h3 className="text-lg font-semibold text-theme-dark mb-4 flex items-center gap-2">
            <BookOpen className="text-theme-success" size={20} />
            Program Selection
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-theme-neutral mb-2">
                Training Program *
              </label>
              <select
                name="programType"
                value={formData.programType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-colors appearance-none bg-white"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-colors appearance-none bg-white"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                {experienceLevels.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Schedule Preferences Section */}
        <div>
          <h3 className="text-lg font-semibold text-theme-dark mb-4 flex items-center gap-2">
            <Calendar className="text-theme-primary" size={20} />
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-colors appearance-none bg-white"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                {timeSlots.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Additional Message Section */}
        <div>
          <h3 className="text-lg font-semibold text-theme-dark mb-4 flex items-center gap-2">
            <MessageSquare className="text-theme-accent" size={20} />
            Additional Information
          </h3>
          <div>
            <label className="block text-sm font-medium text-theme-neutral mb-2">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary transition-colors resize-none"
              placeholder="Tell us about your goals, any specific requirements, or questions you have..."
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            color="gradient"
            className="w-full group relative overflow-hidden"
            disabled={isSubmitting}
          >
            <span className="flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting Request...
                </>
              ) : (
                <>
                  Book Training Program
                  <Send
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </span>
          </Button>
        </div>

        {/* Privacy Notice */}
        <div className="text-xs text-theme-neutral text-center pt-2 border-t border-gray-100">
          By submitting this form, you agree to our{" "}
          <a
            href="/privacy-policy"
            className="text-theme-primary hover:underline"
          >
            Privacy Policy
          </a>{" "}
          and consent to being contacted about our training programs.
        </div>
      </form>
    </motion.div>
  );
};

export default BookForm;

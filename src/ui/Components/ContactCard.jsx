import React, { useState } from "react";
import Button from "./Button";
import { Send, CheckCircle } from "lucide-react";

const ContactCard = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    contactNumber: "",
    email: "",
    industry: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const industryOptions = [
    { value: "", label: "Select your industry" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "technology", label: "Technology" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Financial Services" },
    { value: "retail", label: "Retail & Consumer Goods" },
    { value: "energy", label: "Energy & Utilities" },
    { value: "education", label: "Education" },
    { value: "other", label: "Other" },
  ];

  const serviceOptions = [
    { value: "", label: "Select a service" },
    { value: "business-consulting", label: "Business & Management Consulting" },
    { value: "project-management", label: "Project Management Services" },
    { value: "strategy", label: "Strategic Planning & Execution" },
    { value: "operations", label: "Operations Optimization" },
    { value: "digital-transformation", label: "Digital Transformation" },
    { value: "market-analysis", label: "Market Research & Analysis" },
    { value: "general-inquiry", label: "General Inquiry" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.contactNumber.trim()) {
      tempErrors.contactNumber = "Contact number is required";
      isValid = false;
    } else if (
      !/^\d{10,15}$/.test(formData.contactNumber.replace(/[-()\s]/g, ""))
    ) {
      tempErrors.contactNumber = "Please enter a valid contact number";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.service) {
      tempErrors.service = "Please select a service";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      companyName: "",
      contactNumber: "",
      email: "",
      industry: "",
      service: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Get the selected service and industry labels
      const selectedService = serviceOptions.find(
        (option) => option.value === formData.service
      );

      const selectedIndustry = industryOptions.find(
        (option) => option.value === formData.industry
      );

      // Create email body
      const emailBody = `
Name: ${formData.name}
Company: ${formData.companyName || "Not provided"}
Contact Number: ${formData.contactNumber}
Email: ${formData.email}
Industry: ${selectedIndustry ? selectedIndustry.label : "Not specified"}
Service Interest: ${selectedService ? selectedService.label : formData.service}

Message:
${formData.message || "No additional message provided."}
      `;

      // Create mailto link
      const mailtoLink = `mailto:info@gskconsulting.com?subject=Business Inquiry from ${
        formData.name
      }&body=${encodeURIComponent(emailBody)}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      setSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        resetForm();
      }, 5000);
    }
  };

  return (
    <div className={compact ? "" : "max-w-3xl mx-auto"}>
      {/* Card Container with enhanced styling */}
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header section with gradient background */}
        <div
          className={`bg-gradient-to-r ${
            compact
              ? "from-indigo-600 to-sky-600"
              : "from-[#e6b400] to-[#d6a700]"
          } p-5 md:p-6`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {compact ? "Send Us a Message" : "Contact Us"}
          </h3>
          {!compact && (
            <p className="text-white/90 mt-2">
              Fill out this form to discuss how we can help your business
            </p>
          )}
        </div>

        {/* Form section with padding */}
        <div className="p-5 md:p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="bg-green-100 rounded-full p-4 mb-4">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Thank You!
              </h4>
              <p className="text-gray-600 text-center mb-4">
                Your inquiry has been sent successfully. We'll get back to you
                soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className={`text-${
                  compact ? "indigo" : "[#e6b400]"
                }-600 font-medium hover:underline`}
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-red-500 focus:ring-red-200"
                          : `border-gray-300 focus:ring-${
                              compact ? "indigo" : "[#e6b400]"
                            }/20 focus:border-${
                              compact ? "indigo" : "[#e6b400]"
                            }`
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-red-500 focus:ring-red-200"
                          : `border-gray-300 focus:ring-${
                              compact ? "indigo" : "[#e6b400]"
                            }/20 focus:border-${
                              compact ? "indigo" : "[#e6b400]"
                            }`
                      }`}
                      placeholder="john.smith@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Contact Number */}
                  <div>
                    <label
                      htmlFor="contactNumber"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Contact Number*
                    </label>
                    <input
                      type="text"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.contactNumber
                          ? "border-red-500 focus:ring-red-200"
                          : `border-gray-300 focus:ring-${
                              compact ? "indigo" : "[#e6b400]"
                            }/20 focus:border-${
                              compact ? "indigo" : "[#e6b400]"
                            }`
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.contactNumber && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.contactNumber}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 border-gray-300 focus:ring-${
                        compact ? "indigo" : "[#e6b400]"
                      }/20 focus:border-${compact ? "indigo" : "[#e6b400]"}`}
                      placeholder="ABC Corporation"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Industry */}
                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Your Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none bg-white border-gray-300 focus:ring-${
                        compact ? "indigo" : "[#e6b400]"
                      }/20 focus:border-${compact ? "indigo" : "[#e6b400]"}`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                        backgroundPosition: "right 0.5rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.5em 1.5em",
                        paddingRight: "2.5rem",
                      }}
                    >
                      {industryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Service of Interest*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none bg-white ${
                        errors.service
                          ? "border-red-500 focus:ring-red-200"
                          : `border-gray-300 focus:ring-${
                              compact ? "indigo" : "[#e6b400]"
                            }/20 focus:border-${
                              compact ? "indigo" : "[#e6b400]"
                            }`
                      }`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                        backgroundPosition: "right 0.5rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.5em 1.5em",
                        paddingRight: "2.5rem",
                      }}
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${
                      compact ? "indigo" : "[#e6b400]"
                    }/20 focus:border-${
                      compact ? "indigo" : "[#e6b400]"
                    } border-gray-300`}
                    placeholder="Tell us about your business needs or specific challenges you're facing..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    color={compact ? "gradient" : "yellow"}
                    className="w-full group"
                  >
                    <span className="flex items-center justify-center">
                      Send Inquiry
                      <Send
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Button>
                </div>

                {/* Privacy note */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    className={`text-${
                      compact ? "indigo" : "[#e6b400]"
                    }-600 hover:underline`}
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

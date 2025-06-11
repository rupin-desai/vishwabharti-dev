import React from "react";
import ContactCard from "../ui/Components/ContactCard";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      {/* Page container */}
      <div className="container mx-auto">
        {/* Page title with animation and theme styling */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-[#e6b400] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're here to answer your questions and discuss how GSK Consulting
            can help your business thrive.
          </p>
        </motion.div>

        {/* Contact card */}
        <ContactCard />

        {/* Map and contact info section */}
        <div className="mt-20">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Visit Our Office
          </motion.h2>

          {/* Two-column layout for larger screens */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Map container with responsive sizing */}
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg border border-gray-100 w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.963870875241!2d73.067763!3d19.042537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c2164dbbc321%3A0xb60a32a655d291de!2sSector%2012%2C%20Kharghar%2C%20Navi%20Mumbai%2C%20Maharashtra%20410210%2C%20India!5e0!3m2!1sen!2sus!4v1746272248936!5m2!1sen!2sus"
                  className="w-full h-[450px]"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GSK Consulting Office Location"
                ></iframe>
              </div>
            </motion.div>

            
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ContactPage;

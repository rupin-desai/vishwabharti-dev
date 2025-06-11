import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Clock,
  CheckCircle,
  Star,
  Users,
  Award,
} from "lucide-react";

const BookCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-theme-light via-white to-theme-light">
      <div className="container mx-auto">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main CTA Section */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-theme-dark mb-4">
              Still Have Questions?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-theme-primary to-theme-success mx-auto mb-6"></div>
            <p className="text-xl text-theme-neutral max-w-3xl mx-auto">
              Our training experts are here to help you choose the perfect
              program and answer all your questions.
            </p>
          </motion.div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Phone Contact */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-theme-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-theme-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-theme-dark mb-3">
                Call Us Directly
              </h3>
              <p className="text-theme-neutral mb-6">
                Speak with our training advisors for immediate assistance and
                personalized guidance.
              </p>
              <a
                href="tel:+919322606890"
                className="inline-flex items-center gap-2 bg-theme-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-theme-warning transition-colors"
              >
                <Phone size={18} />
                (+91) 93226 06890
              </a>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-theme-neutral">
                <Clock size={16} />
                <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-theme-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-theme-success" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-theme-dark mb-3">
                WhatsApp Support
              </h3>
              <p className="text-theme-neutral mb-6">
                Get quick answers to your questions via WhatsApp. We're here to
                help 24/7.
              </p>
              <a
                href="https://wa.me/919322606890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-theme-success text-white px-6 py-3 rounded-lg font-medium hover:bg-theme-green-dark transition-colors"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-theme-neutral">
                <CheckCircle size={16} />
                <span>Quick Response Guaranteed</span>
              </div>
            </motion.div>
          </div>

          {/* Success Stories Highlight */}
          <motion.div
            className="bg-gradient-to-r from-theme-primary/5 to-theme-success/5 rounded-2xl p-8 border border-theme-primary/20"
            variants={itemVariants}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-theme-dark mb-3">
                Join Our Success Stories
              </h3>
              <p className="text-theme-neutral">
                See what our graduates have to say about their training
                experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="text-yellow-500 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-theme-neutral text-sm italic mb-4">
                  "Excellent training program! Got my international
                  certification and landed a job in Germany within 4 months."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Student"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-theme-dark text-sm">
                      Rahul Sharma
                    </p>
                    <p className="text-xs text-theme-neutral">
                      Professional Driver, Germany
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="text-yellow-500 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-theme-neutral text-sm italic mb-4">
                  "Professional instructors and modern equipment. The best
                  investment I made for my career."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Student"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-theme-dark text-sm">
                      Amit Patel
                    </p>
                    <p className="text-xs text-theme-neutral">
                      Professional Driver, Australia
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="text-yellow-500 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-theme-neutral text-sm italic mb-4">
                  "Complete support from training to job placement. Now working
                  in Canada with a great salary."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/28.jpg"
                    alt="Student"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-theme-dark text-sm">
                      Suresh Kumar
                    </p>
                    <p className="text-xs text-theme-neutral">
                      Professional Driver, Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-theme-primary/20">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="text-theme-primary" size={20} />
                  <span className="text-2xl font-bold text-theme-primary">
                    500+
                  </span>
                </div>
                <p className="text-sm text-theme-neutral">Graduates Placed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="text-theme-accent" size={20} />
                  <span className="text-2xl font-bold text-theme-accent">
                    95%
                  </span>
                </div>
                <p className="text-sm text-theme-neutral">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="text-theme-success" size={20} />
                  <span className="text-2xl font-bold text-theme-success">
                    4.9/5
                  </span>
                </div>
                <p className="text-sm text-theme-neutral">Student Rating</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCTA;

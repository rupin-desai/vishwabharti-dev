import React from "react";
import Button from "../../ui/Components/Button";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { useRef } from "react";

const HomeBanner = () => {
  // Create refs for each section we want to animate when in view
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  const trustRef = useRef(null);
  const imageRef = useRef(null);
  const bgTopRef = useRef(null);
  const bgBottomRef = useRef(null);

  // Check if elements are in view
  const isBannerInView = useInView(bannerRef, { once: true, amount: 0.1 });
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.6 });
  const isDescriptionInView = useInView(descriptionRef, {
    once: true,
    amount: 0.6,
  });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.6 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.6 });
  const isTrustInView = useInView(trustRef, { once: true, amount: 0.6 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.4 });
  const isBgTopInView = useInView(bgTopRef, { once: true, amount: 0.1 });
  const isBgBottomInView = useInView(bgBottomRef, { once: true, amount: 0.1 });

  // Function to scroll to the HomeContact section
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("home-contact-section");
    if (contactSection) {
      const navbarHeight = 80; // Estimated navbar height
      const sectionPosition =
        contactSection.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll to the next section (HomeAbout)
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("home-about-section");
    if (nextSection) {
      const navbarHeight = 80; // Estimated navbar height
      const sectionPosition =
        nextSection.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  // Features data
  const features = [
    {
      text: "Expert team with industry-specific knowledge",
      color: "text-indigo-600",
    },
    {
      text: "Proven methodologies that deliver measurable results",
      color: "text-sky-600",
    },
    {
      text: "Customized solutions tailored to your unique needs",
      color: "text-teal-600",
    },
  ];

  // Optimized animation variants using transform3d for better performance
  const itemVariants = {
    hidden: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, transform: "translate3d(-20px, 0, 0)" },
    visible: (i) => ({
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 1,
        delay: i * 0.1,
      },
    }),
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(20px, 0, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 1.2,
      },
    },
  };

  const decorVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 0, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        mass: 1,
        delay: 0.2,
      },
    },
  };

  const statsCardVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 20px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        delay: 0.3,
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden"
      style={{
        perspective: 1000,
        backfaceVisibility: "hidden",
      }}
      ref={bannerRef}
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Content Column */}
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <motion.div
                ref={headingRef}
                className="space-y-2"
                variants={itemVariants}
                initial="hidden"
                animate={isHeadingInView ? "visible" : "hidden"}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
              >
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-indigo-600/10 via-sky-600/10 to-teal-600/10 text-indigo-700 font-medium rounded-full text-xs sm:text-sm inline-block">
                  Premier Consulting Services
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  Transform Your Business with Strategic Expertise
                </h2>
              </motion.div>

              <motion.p
                ref={descriptionRef}
                variants={itemVariants}
                initial="hidden"
                animate={isDescriptionInView ? "visible" : "hidden"}
                className="text-gray-600 text-base sm:text-lg leading-relaxed"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
              >
                Our tailored consulting solutions help businesses achieve
                sustainable growth, optimize operations, and navigate complex
                challenges with confidence.
              </motion.p>

              {/* Feature List */}
              <motion.div
                ref={featuresRef}
                className="space-y-3 mt-2 sm:mt-4"
                initial="hidden"
                animate={isFeaturesInView ? "visible" : "hidden"}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
              >
                <AnimatePresence>
                  {features.map((feature, i) => (
                    <motion.div
                      key={`feature-${i}`}
                      className="flex items-start"
                      variants={featureVariants}
                      custom={i}
                      initial="hidden"
                      animate={isFeaturesInView ? "visible" : "hidden"}
                      style={{
                        transformStyle: "preserve-3d",
                        willChange: "transform, opacity",
                      }}
                    >
                      <CheckCircle
                        className={`h-4 w-4 sm:h-5 sm:w-5 mt-1 mr-2 sm:mr-3 flex-shrink-0 ${feature.color}`}
                      />
                      <p className="text-sm sm:text-base text-gray-700">
                        {feature.text}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
                variants={itemVariants}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
              >
                <Button
                  color="gradient"
                  className="flex items-center justify-center"
                  onClick={scrollToContact}
                >
                  Schedule a Consultation{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  color="gradient"
                  className="justify-center"
                  onClick={scrollToNextSection}
                >
                  Learn More
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                ref={trustRef}
                className="flex flex-col sm:flex-row sm:items-center pt-2 sm:pt-4 gap-3 sm:gap-0"
                variants={itemVariants}
                initial="hidden"
                animate={isTrustInView ? "visible" : "hidden"}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://randomuser.me/api/portraits/men/${
                        20 + i
                      }.jpg`}
                      alt="Client"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="sm:ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Trusted by 200+ businesses worldwide
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Image Column with decorative elements */}
            <motion.div
              ref={imageRef}
              className="relative mx-auto max-w-sm sm:max-w-md md:max-w-none order-1 md:order-2"
              variants={imageVariants}
              initial="hidden"
              animate={isImageInView ? "visible" : "hidden"}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
              }}
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                  alt="Business Strategy Session"
                  className="w-full h-full object-cover rounded-lg"
                  style={{ willChange: "transform" }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-3 sm:-bottom-5 -right-3 sm:-right-5 w-full h-full border-2 border-indigo-200 rounded-lg -z-10"
                variants={decorVariants}
                initial="hidden"
                animate={isImageInView ? "visible" : "hidden"}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
              ></motion.div>

              <motion.div
                className="absolute -top-3 sm:-top-5 -left-3 sm:-left-5 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-indigo-100 to-sky-100 rounded-lg -z-10"
                variants={decorVariants}
                initial="hidden"
                animate={isImageInView ? "visible" : "hidden"}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
              ></motion.div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 sm:-bottom-10 left-0 sm:-left-6 md:left-10 bg-white shadow-xl rounded-lg p-3 sm:p-4 z-20 max-w-[160px] sm:max-w-[200px]"
                variants={statsCardVariants}
                initial="hidden"
                animate={isImageInView ? "visible" : "hidden"}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                }}
              >
                <div className="text-indigo-600 font-bold text-2xl sm:text-3xl">
                  95%
                </div>
                <div className="text-gray-700 text-xs sm:text-sm">
                  Client satisfaction rate on projects delivered on time
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        ref={bgBottomRef}
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-teal-50 to-transparent -z-10"
        variants={backgroundVariants}
        initial="hidden"
        animate={isBgBottomInView ? "visible" : "hidden"}
      ></motion.div>
    </section>
  );
};

export default HomeBanner;

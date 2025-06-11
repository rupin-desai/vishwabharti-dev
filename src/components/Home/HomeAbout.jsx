import React, { useRef } from "react";
import Button from "../../ui/Components/Button";
import { motion, useInView } from "framer-motion";
import { Target, Users, Award, Briefcase, ChevronRight } from "lucide-react";

const HomeAbout = () => {
  // Create refs for each section we want to animate when in view
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const imageRef = useRef(null);

  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.6 });
  const isStoryInView = useInView(storyRef, { once: true, amount: 0.4 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.4 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  // Simplified animation variants with transform3d
  const itemVariants = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0, 20px, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    },
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
        stiffness: 70,
        damping: 12,
      },
    },
  };

  // Core values data - simplified descriptions
  const values = [
    {
      title: "Excellence",
      description: "Delivering the highest quality in all we do",
      icon: <Target size={18} className="sm:w-[22px] sm:h-[22px]" />,
      color: "from-indigo-600 to-sky-600",
    },
    {
      title: "Collaboration",
      description: "Working as true partners with our clients",
      icon: <Users size={18} className="sm:w-[22px] sm:h-[22px]" />,
      color: "from-sky-600 to-teal-600",
    },
    {
      title: "Integrity",
      description: "Upholding the highest ethical standards",
      icon: <Award size={18} className="sm:w-[22px] sm:h-[22px]" />,
      color: "from-teal-600 to-indigo-600",
    },
    {
      title: "Innovation",
      description: "Creating solutions for complex challenges",
      icon: <Briefcase size={18} className="sm:w-[22px] sm:h-[22px]" />,
      color: "from-indigo-600 to-teal-600",
    },
  ];

  return (
    <section
      id="home-about-section"
      className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden bg-gray-50"
      ref={sectionRef}
      style={{
        perspective: 1000,
        backfaceVisibility: "hidden",
      }}
    >
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-teal-50 to-transparent -z-10"></div>

      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            About GSK Consultants
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 mx-auto mb-4 sm:mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          {/* Left column - company info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Company overview - reduced content, larger text */}
            <motion.div
              ref={storyRef}
              variants={itemVariants}
              initial="hidden"
              animate={isStoryInView ? "visible" : "hidden"}
              className="space-y-3 sm:space-y-4"
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                GSK Consultants is a premier consulting firm helping businesses
                navigate challenges and seize opportunities. Our expert team
                brings decades of experience to every project.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Founded in 2013, we've grown to serve clients across India and
                internationally with innovative solutions that deliver
                measurable results.
              </p>
            </motion.div>

            {/* Core values - simplified grid */}
            <motion.div
              ref={valuesRef}
              variants={itemVariants}
              initial="hidden"
              animate={isValuesInView ? "visible" : "hidden"}
              className="space-y-4"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-2">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-2 sm:mr-3">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-white`}
                      >
                        {value.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-base sm:text-lg">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 sm:pt-6">
                <Button
                  scrollToId="#homewhy"
                  color="gradient"
                  variant="primary"
                  className="flex items-center text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5"
                >
                  Learn More{" "}
                  <ChevronRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right column - image */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            className="relative mt-6 lg:mt-0"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg relative">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Business team collaborating"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-full h-full border-2 border-indigo-200 rounded-lg -z-10"></div>
            <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-indigo-100 to-sky-100 rounded-lg -z-10"></div>

            {/* Quote overlay - simplified */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-md">
              <p className="text-gray-700 text-sm sm:text-base italic">
                "Empowering businesses with strategic insights and operational
                excellence to thrive in today's competitive landscape."
              </p>
              <p className="text-right text-indigo-600 font-medium text-sm sm:text-base mt-1 sm:mt-2">
                — Founder & CEO
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;

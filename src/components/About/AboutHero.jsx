import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../../ui/Components/Button";

const AboutHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Title animation appears first, independent of other animations
  const titleVariants = {
    hidden: { opacity: 0, transform: "translateY(20px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Content animation starts after title
  const contentVariants = {
    hidden: { opacity: 0, transform: "translateY(30px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, transform: "translateY(30px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Image grid animations
  const imageGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-16 lg:py-16 px-4 md:px-12" ref={ref}>
      <div className="container mx-auto">
        {/* Changed from items-start to items-center for vertical alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - now in a flex container for better centering */}
          <div className="flex flex-col justify-center h-full">
            {/* Title animated independently and first */}
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-gray-800"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={titleVariants}
            >
              About IILOS Community
            </motion.h1>

            {/* Content animated after title */}
            <motion.div
              className="space-y-6 mt-6"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={contentVariants}
            >
              <div className="w-20 h-1 bg-[#00B5CA]"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                In the vibrant landscape of Mumbai, a groundbreaking startup is
                emerging in the field of overseas education. Aligned with a
                successful skill training organization, this venture seeks to
                inject a fresh perspective into the education sector.
                Strategically headquartered in India's financial capital, the
                startup aims to specialize in overseas education with a keen
                focus on logistics.
              </p>

              {/* Learn More Button */}
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mt-8"
              >
                <Button
                  color="blue"
                  scrollToId="about-mission"
                  className="px-6"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Masonry Grid - adjusted to have consistent height */}
          <motion.div
            className="grid grid-cols-2 gap-4 h-[500px]"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageGridVariants}
          >
            {/* First column */}
            <div className="space-y-4 h-full">
              {/* First image - New Campus/Institution Building */}
              <motion.div
                className="rounded-lg overflow-hidden h-[240px]"
                variants={imageVariants}
              >
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                  alt="IILOS Campus Building"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Second image - New Logistics Training Facility */}
              <motion.div
                className="rounded-lg overflow-hidden h-[240px]"
                variants={imageVariants}
              >
                <img
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                  alt="Logistics Training Facility"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Second column - New Tall image of students */}
            <motion.div
              className="rounded-lg overflow-hidden h-full"
              variants={imageVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                alt="IILOS Students Learning"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

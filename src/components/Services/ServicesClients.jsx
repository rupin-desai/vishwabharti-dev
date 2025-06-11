import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";

const ServicesClients = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.05 });

  // States for auto-trigger functionality
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [autoTriggerEnabled, setAutoTriggerEnabled] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [tappedCardIndex, setTappedCardIndex] = useState(null);
  const timeoutRef = useRef(null);

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
    hidden: { opacity: 0, translateY: 20 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Handle auto-triggering of cards
  useEffect(() => {
    // Clean up any existing timeouts when component unmounts or dependencies change
    const cleanup = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    // Only run the effect if section is in view and auto-trigger is enabled
    if (isInView && autoTriggerEnabled) {
      // Reset active card if we're starting fresh
      if (activeCardIndex === null) {
        setActiveCardIndex(0);
      } else {
        // Set timeout to move to the next card
        timeoutRef.current = setTimeout(() => {
          // Move to the next card or back to the beginning
          const nextIndex = (activeCardIndex + 1) % data.industries.length;
          setActiveCardIndex(nextIndex);
        }, 2000); // Change cards every 2 seconds
      }
    } else if (!isInView) {
      // Reset when out of view
      setActiveCardIndex(null);
    }

    return cleanup;
  }, [isInView, activeCardIndex, autoTriggerEnabled, data.industries.length]);

  // Handle user interaction
  useEffect(() => {
    if (userInteracted) {
      // Disable auto-trigger when user interacts
      setAutoTriggerEnabled(false);

      // Set a timeout to re-enable auto-trigger after 12 seconds
      const inactivityTimeout = setTimeout(() => {
        setAutoTriggerEnabled(true);
        setUserInteracted(false);
      }, 12000);

      return () => clearTimeout(inactivityTimeout);
    }
  }, [userInteracted]);

  // Determine if we're on a touch device
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device has touch capabilities
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Handle tap interactions for mobile
  const handleTap = (index, event) => {
    // Prevent default to avoid any browser quirks
    event.preventDefault();

    // Mark that user has interacted
    if (!userInteracted) {
      setUserInteracted(true);
    }

    // Toggle tapped state
    if (tappedCardIndex === index) {
      // If this card is already tapped, untap it
      setTappedCardIndex(null);
    } else {
      // Otherwise, tap this card (and untap any other)
      setTappedCardIndex(index);
    }
  };

  // Handle mouse interactions for desktop
  const handleMouseEnter = (index) => {
    if (!userInteracted) {
      setUserInteracted(true);
    }
  };

  return (
    <section
      id="client-industries"
      ref={ref}
      className="py-16 md:py-24 px-4 bg-white overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {data.title}
            </h2>
            <div className="w-24 h-1 bg-[#e6b400] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {data.description}
            </p>
          </motion.div>

          {/* Industries Grid with properly centered cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {data.industries.map((industry, index) => {
              // Dynamically get the icon component from Lucide
              const IconComponent =
                LucideIcons[industry.icon] || LucideIcons.Briefcase;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group relative h-60 bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer ${
                    activeCardIndex === index && !userInteracted
                      ? "auto-hover"
                      : ""
                  }`}
                  style={{
                    width: "calc(25% - 18px)",
                    maxWidth: "280px",
                    minWidth: "250px",
                  }}
                  // Different handlers for desktop vs mobile
                  onMouseEnter={
                    !isTouchDevice ? () => handleMouseEnter(index) : undefined
                  }
                  onClick={(e) => isTouchDevice && handleTap(index, e)}
                >
                  {/* Card content with icon */}
                  <div className="p-6 h-full flex flex-col justify-center items-center text-center">
                    <div className="text-[#e6b400] mb-3 flex justify-center">
                      <IconComponent size={36} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Curtain overlay - modified to handle tap vs hover */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-r from-[#e6b400] to-[#c99c00] text-white transform transition-transform duration-300 ease-in-out ${
                      (isTouchDevice && tappedCardIndex === index) ||
                      (!isTouchDevice &&
                        (activeCardIndex === index && !userInteracted
                          ? "translate-y-0"
                          : "translate-y-full group-hover:translate-y-0")) ||
                      "translate-y-full"
                    }`}
                  >
                    <div className="text-center w-full">
                      <div className="text-white mb-3 flex justify-center">
                        <IconComponent size={36} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-sm">{industry.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesClients;

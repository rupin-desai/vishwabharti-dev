import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserCheck, Building2, Award, UsersRound, Network } from "lucide-react";

const MissionCard = ({ icon, title, description, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden group h-full transition-all duration-300 hover:shadow-xl flex flex-col"
    >
      {/* Curtain overlay - hidden initially, slides down on hover */}
      <div className="absolute inset-0 bg-[#00B5CA]/90 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

      {/* Content container - centered with flex */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        {/* Icon container - already centered */}
        <div className="w-16 h-16 rounded-full bg-[#00B5CA]/10 group-hover:bg-white/20 flex items-center justify-center text-[#00B5CA] group-hover:text-white mb-4 transition-colors duration-300">
          {icon}
        </div>

        {/* Title - explicitly centered */}
        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-white transition-colors duration-300 text-center">
          {title}
        </h3>

        {/* Description - explicitly centered */}
        <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const AboutMission = () => {
  // Rest of the component remains unchanged
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, transform: "translateY(20px)" },
    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0,
      },
    },
  };

  const cardVariants = {
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

  const missions = [
    {
      icon: <UserCheck size={32} />,
      title: "Empowering Individuals",
      description:
        "The institute provides educational opportunities and resources to equip individuals with the knowledge and skills necessary to succeed in the logistics field.",
    },
    {
      icon: <Building2 size={32} />,
      title: "Excelling Organizations",
      description:
        "The institute collaborates with organizations to improve their logistics practices, enhance efficiency, and achieve their strategic goals.",
    },
    {
      icon: <Award size={32} />,
      title: "Fostering Excellence",
      description:
        "The institute prioritizes rigorous research, high-quality education, and innovative approaches to logistics challenges.",
    },
    {
      icon: <UsersRound size={32} />,
      title: "Collaboration",
      description:
        "The institute actively encourages partnerships with industry leaders, academics, and government agencies.",
    },
    {
      icon: <Network size={32} />,
      title: "Catalyst for Knowledge Exchange",
      description:
        "The institute creates platforms for the exchange of ideas, best practices, and industry insights among stakeholders.",
    },
  ];

  // Calculate how many cards to show in the first row based on screen size
  const firstRowCount = 3;
  const firstRow = missions.slice(0, firstRowCount);
  const lastRow = missions.slice(firstRowCount);

  return (
    <section
      id="about-mission"
      className="py-16 lg:py-20 px-4 md:px-12 bg-gray-50"
      ref={ref}
    >
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Title section */}
        <motion.div className="text-center mb-12" variants={titleVariants}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Mission of IILOS
          </h2>
          <div className="w-24 h-1 bg-[#00B5CA] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming logistics education by bridging theory with practice,
            nurturing innovation, and building global connections for the
            leaders of tomorrow.
          </p>
        </motion.div>

        {/* First row - standard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {firstRow.map((mission, index) => (
            <MissionCard
              key={index}
              icon={mission.icon}
              title={mission.title}
              description={mission.description}
              variants={cardVariants}
            />
          ))}
        </div>

        {/* Last row - centered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-3xl lg:max-w-4xl mx-auto">
          {lastRow.map((mission, index) => (
            <MissionCard
              key={index + firstRowCount}
              icon={mission.icon}
              title={mission.title}
              description={mission.description}
              variants={cardVariants}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMission;

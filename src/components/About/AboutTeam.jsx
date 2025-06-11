import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TeamMemberCard = ({ name, role, description, imageSrc, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Image container - centered with flexible height */}
      <div className="relative overflow-hidden flex justify-center items-center bg-gray-100">
        <div className="w-full">
          <img
            src={imageSrc}
            alt={name}
            className="w-full object-contain mx-auto transition-transform duration-500 hover:scale-105"
            style={{ maxHeight: "350px" }} // Consistent max height
          />
        </div>
      </div>

      {/* Content half - added text-center class here */}
      <div className="p-6 text-center flex-grow flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <p className="text-[#00B5CA] text-2xl font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-md">{description}</p>
      </div>
    </motion.div>
  );
};

const AboutTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
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
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const teamMembers = [
    {
      name: "Vikrant Chawla",
      role: "Director",
      description:
        "Vikrant Chawla is a visionary leader known for his strategic insight, exceptional interpersonal skills, and a proven track record of driving organizational growth and innovation.",
      imageSrc: "/vikrant_chawla.jpeg",
    },
    {
      name: "Balakrishnan Sridhar",
      role: "Assistant Director",
      description:
        "Balakrishnan Sridhar is a proactive and detail-oriented professional dedicated to supporting the executive team, fostering collaboration, and ensuring the seamless execution of strategic initiatives that drive educational excellence and operational efficiency.",
      imageSrc: "balakrishna_sridhar.jpeg",
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-4 md:px-12 bg-gray-50" ref={ref}>
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Title section */}
        <motion.div className="text-center mb-12" variants={titleVariants}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-[#00B5CA] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the leadership driving innovation and excellence at IILOS
          </p>
        </motion.div>

        {/* Team member cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              imageSrc={member.imageSrc}
              variants={cardVariants}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutTeam;

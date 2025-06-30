import React from "react";

// Enhanced Technical Training Component
const LearnTechnicalTraining = () => {
  const modules = [
    {
      icon: Car,
      title: "Basic to Advanced Driving Techniques",
      description:
        "Master fundamental to expert-level driving skills for various vehicle types and road conditions.",
      features: [
        "Defensive driving strategies",
        "Vehicle control mastery",
        "Advanced maneuvering",
        "Safety protocols",
      ],
      duration: "8 weeks",
      level: "Beginner to Advanced",
    },
    {
      icon: AlertTriangle,
      title: "Hazardous Material Transport (ADR)",
      description:
        "Comprehensive training for safe transport of dangerous goods according to international ADR standards.",
      features: [
        "ADR certification",
        "Safety procedures",
        "Emergency protocols",
        "Documentation requirements",
      ],
      duration: "6 weeks",
      level: "Intermediate",
    },
    {
      icon: Navigation,
      title: "Left-Hand Driving Mastery",
      description:
        "Specialized training for countries with left-hand traffic systems like the UK and Australia.",
      features: [
        "Traffic adaptation",
        "Road positioning",
        "Roundabout navigation",
        "Country-specific rules",
      ],
      duration: "4 weeks",
      level: "Intermediate",
    },
    {
      icon: Mountain,
      title: "Terrain Mastery",
      description:
        "Learn to navigate challenging terrains including mountains, highways, and urban environments.",
      features: [
        "Mountain driving",
        "Highway navigation",
        "Urban maneuvering",
        "Weather adaptation",
      ],
      duration: "5 weeks",
      level: "Advanced",
    },
  ];

  return (
    <SectionWrapper className="bg-gray-50" id="technical-training">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full mb-6">
            <Truck className="w-5 h-5" />
            <span className="font-semibold">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Training Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your technical foundation with comprehensive driving modules
            designed for international standards and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 rounded-xl shadow-lg">
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {module.level}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {module.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LearnTechnicalTraining;

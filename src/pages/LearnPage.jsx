import React from "react";

const LearnPage = () => {
  const steps = [
    {
      step: 1,
      title: "Application",
      description: "Submit your application and required documents",
    },
    {
      step: 2,
      title: "Assessment",
      description: "Complete skills assessment and interview",
    },
    {
      step: 3,
      title: "Classroom Training",
      description: "4 weeks of theoretical knowledge and safety training",
    },
    {
      step: 4,
      title: "Practical Training",
      description: "6 weeks of hands-on driving experience",
    },
    {
      step: 5,
      title: "On-the-Job Training",
      description: "2 weeks of supervised real-world experience",
    },
    {
      step: 6,
      title: "Certification",
      description: "Receive your professional driver certification",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-theme-dark mb-8">
        Learn & Training Process
      </h1>
      <p className="text-xl text-theme-neutral mb-12 max-w-3xl">
        Our structured training process ensures you receive comprehensive
        preparation for your driving career.
      </p>

      <div className="max-w-4xl">
        {steps.map((item, index) => (
          <div key={item.step} className="flex mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-theme-primary text-white rounded-full flex items-center justify-center font-bold mr-6">
              {item.step}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-theme-dark mb-2">
                {item.title}
              </h3>
              <p className="text-theme-neutral">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-theme-light p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-theme-dark mb-4">
            Program Duration
          </h2>
          <p className="text-theme-neutral">
            12-week intensive training program
          </p>
        </div>
        <div className="bg-theme-light p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-theme-dark mb-4">
            Certification
          </h2>
          <p className="text-theme-neutral">
            Industry-recognized certification upon completion
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;

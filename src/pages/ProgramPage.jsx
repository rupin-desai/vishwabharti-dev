import React from "react";

const ProgramPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-theme-dark mb-8">
        Program Overview
      </h1>
      <div className="max-w-4xl">
        <p className="text-xl text-theme-neutral mb-8">
          Our comprehensive driver apprenticeship program is designed to provide
          you with the skills and knowledge needed for a successful career.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

        <h2 className="text-3xl font-semibold text-theme-dark mb-6">
          What You'll Learn
        </h2>
        <ul className="space-y-3 text-theme-neutral">
          <li className="flex items-start">
            <span className="text-theme-primary mr-2">•</span>
            Vehicle safety and maintenance
          </li>
          <li className="flex items-start">
            <span className="text-theme-primary mr-2">•</span>
            Traffic laws and regulations
          </li>
          <li className="flex items-start">
            <span className="text-theme-primary mr-2">•</span>
            Defensive driving techniques
          </li>
          <li className="flex items-start">
            <span className="text-theme-primary mr-2">•</span>
            Professional communication skills
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgramPage;

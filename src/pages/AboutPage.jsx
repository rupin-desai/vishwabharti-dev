import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutMission from "../components/About/AboutMission";
import AboutVision from "../components/About/AboutVision";
import AboutTeam from "../components/About/AboutTeam";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-theme-dark mb-8">About Us</h1>
      <div className="max-w-4xl">
        <p className="text-lg text-theme-neutral mb-6">
          Learn more about our mission, vision, and commitment to excellence in
          driver training.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-theme-light p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-theme-dark mb-4">
              Our Mission
            </h2>
            <p className="text-theme-neutral">
              To provide comprehensive and professional driver training
              programs.
            </p>
          </div>
          <div className="bg-theme-light p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-theme-dark mb-4">
              Our Vision
            </h2>
            <p className="text-theme-neutral">
              To be the leading provider of driver apprenticeship programs.
            </p>
          </div>
        </div>
      </div>
      <AboutHero />
      <AboutMission />
      <AboutVision />
      <AboutTeam />
    </div>
  );
};

export default AboutPage;

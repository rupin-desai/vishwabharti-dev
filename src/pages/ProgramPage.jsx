// pages/ProgramPage.jsx
import React from "react";
import ProgramHero from "../Program/ProgramHero";
import ProgramJourney from "../Program/ProgramJourney";
import ProgramCTA from "../Program/ProgramCTA";
import ProgramJobroles from "../Program/ProgramJobroles";

const ProgramPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ProgramHero />
      <ProgramJourney />
      <ProgramJobroles />
      <ProgramCTA />
    </div>
  );
};

export default ProgramPage;

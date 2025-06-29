// pages/ProgramPage.jsx
import React from "react";
import ProgramHero from "../components/Program/ProgramHero";
import ProgramJourney from "../components/Program/ProgramJourney";
import ProgramCTA from "../components/Program/ProgramCTA";
import ProgramJobRoles from "../components/Program/ProgramJobroles";

const ProgramPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ProgramHero />
      <ProgramJourney />

      <ProgramJobRoles />
      <ProgramCTA />
    </div>
  );
};

export default ProgramPage;

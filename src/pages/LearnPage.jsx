import React, { useRef } from "react";
import { useInView } from "framer-motion";
import LearnHero from "../components/Learn/LearnHero";
import LearnSkills from "../components/Learn/LearnSkills";
import LearnGoal from "../components/Learn/LearnGoal";
import LearnProcess from "../components/Learn/LearnProcess";
import LearnStats from "../components/Learn/LearnStats";
import LearnBackground from "../components/Learn/LearnBackground";
import LearnCTA from "../components/Learn/LearnCTA";

const LearnPage = () => {
  const trainingRef = useRef(null);
  const isInView = useInView(trainingRef, { once: true });

  return (
    <div className="relative overflow-hidden bg-white">
      <LearnBackground />

      {/* ✅ Full-width hero should stay outside container */}
      <LearnHero />

      {/* ✅ Container starts AFTER full-width hero */}
      <div className="relative z-10 container mx-auto px-4 py-10">
        <LearnSkills />
        <LearnGoal />
        <LearnProcess />
        <LearnStats />
        <LearnCTA />
      </div>
    </div>
  );
};

export default LearnPage;

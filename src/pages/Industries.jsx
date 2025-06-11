import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import IndustriesHero from "../components/Industries/IndustriesHero";
import IndustriesAbout from "../components/Industries/IndustriesAbout";
import IndustriesChallenges from "../components/Industries/IndustriesChallenges";
import IndustriesSolutions from "../components/Industries/IndustriesSolutions";
import IndustriesApproach from "../components/Industries/IndustriesApproach";
import { getIndustryData } from "../utils/industryUtils";

const Industries = () => {
  const { industrySlug } = useParams();
  const navigate = useNavigate();
  const [industryData, setIndustryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If no industry slug is provided, redirect to the default industry
    if (!industrySlug) {
      navigate("/industries/manufacturing", { replace: true });
      return;
    }

    // Fetch industry data
    const data = getIndustryData(industrySlug);

    // If no data found for this slug, redirect to not found or default industry
    if (!data) {
      navigate("/industries/manufacturing", { replace: true });
      return;
    }

    // Set industry data
    setIndustryData(data);
    setLoading(false);
  }, [industrySlug, navigate]);

  if (loading || !industryData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#e6b400]"></div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <IndustriesHero data={industryData.hero} />
      <IndustriesAbout data={industryData.about} />
      <IndustriesChallenges data={industryData.challenges} />
      <IndustriesSolutions data={industryData.solutions} />
      <IndustriesApproach data={industryData.approach} />
    </div>
  );
};

export default Industries;

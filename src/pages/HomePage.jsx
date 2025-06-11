import React from "react";
import Homehero from "../components/Home/Homehero";
import HomeBanner from "../components/Home/HomeBanner";
import HomeAbout from "../components/Home/HomeAbout";
import HomeWhyUs from "../components/Home/HomeWhyUs";
import HomeInfo from "../components/Home/HomeInfo";
import HomeColabs from "../components/Home/HomeColabs";
import HomeStats from "../components/Home/HomeStats";
import HomeContact from "../components/Home/HomeContact"

const HomePage = () => {
  return (
    <>
      <Homehero />
      {/* <HomeBanner /> */}
      <HomeStats />
      <HomeBanner />
      <HomeColabs />
      <HomeAbout />
      <HomeWhyUs />
      <HomeInfo />
      <HomeContact />
    </>
  );
};

export default HomePage;

import React from "react";
import Homehero from "../components/Home/Homehero";
import HomeBanner from "../components/Home/HomeBanner";
import HomeAbout from "../components/Home/HomeAbout";
import HomeWhyUs from "../components/Home/HomeWhyUs";
import HomeInfo from "../components/Home/HomeInfo";
import HomeColabs from "../components/Home/HomeColabs";
import HomeStats from "../components/Home/HomeStats";
import HomeContact from "../components/Home/HomeContact";

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
      <div className="container mx-auto px-4 py-8">
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-theme-dark mb-6">
            Welcome to Vishwabharti
          </h1>
          <p className="text-xl text-theme-neutral max-w-2xl mx-auto mb-8">
            Empowering your journey through comprehensive driver apprenticeship
            programs
          </p>
          <button className="bg-theme-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Get Started
          </button>
        </section>
      </div>
    </>
  );
};

export default HomePage;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Menu/Navbar";
import Footer from "../ui/Menu/Footer";
import TruckScrollIndicator from "../components/TruckScrollIndicator";

const Mainlayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Truck Scroll Indicator */}
      <TruckScrollIndicator />
    </div>
  );
};

export default Mainlayout;

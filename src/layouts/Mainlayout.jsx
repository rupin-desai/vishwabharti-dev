import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Menu/Navbar";
import Footer from "../ui/Menu/Footer";

const Mainlayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Mainlayout;

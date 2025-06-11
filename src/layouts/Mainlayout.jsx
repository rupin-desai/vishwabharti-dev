import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Menu/Navbar";
import Footer from "../ui/Menu/Footer";

const Mainlayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default Mainlayout;

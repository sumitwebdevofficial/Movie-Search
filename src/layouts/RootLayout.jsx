import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// sets the minimum height of the layout to the height of the screen
const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;

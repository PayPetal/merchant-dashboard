import React from "react";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import GetStarted from "./GetStarted";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div></div>
        {/* Add links inside the sidebar (or wherever appropriate) */}
        <Routes>
          {/* Make sure paths are relative to `/dashboard` */}
          <Route path="home" element={<Homepage />} />
          <Route path="get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

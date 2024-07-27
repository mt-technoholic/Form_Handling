import React from "react";
import { Outlet } from "react-router-dom";
import * as Components from "../../components";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Components.Sidebar />
      <div className="w-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

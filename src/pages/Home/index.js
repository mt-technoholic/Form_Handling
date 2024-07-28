import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useStore from "../../(store)/store";
import * as Components from "../../components";

const Home = () => {
  const { setRole } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    if (!(role && token)) navigate("/login");
    else setRole(role);
  }, [navigate, setRole]);

  return (
    <div className="flex h-screen">
      <Components.Sidebar />
      <div className="w-full flex flex-col items-center py-9">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

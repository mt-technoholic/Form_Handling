import React from "react";
import { Link } from "react-router-dom";
import * as Component from ".";
import * as Icons from "../Assets/icons";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>
      <div className="flex gap-8">
        <Component.ThemeController />
        <div className="flex-1">
          <Link to="/login" className="btn btn-ghost text-xl">
            Login
          </Link>
        </div>
        <button className="btn btn-square btn-ghost">
          <Icons.HorizontalEllipsis />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

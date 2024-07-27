import React from "react";
import { Link } from "react-router-dom";
import useStore from "../(store)/store";
import * as Icon from "../Assets/icons";

const MenuItems = () => {
  const { role } = useStore();

  return (
    <ul className="menu bg-base-200 rounded-box w-56 h-full">
      {(role === "landlord" || role === "tenant") && (
        <li>
          <Link to={"/"}>
            <Icon.HomeIcon />
            Dashboard
          </Link>
        </li>
      )}

      {(role === "landlord" || role === "tenant") && (
        <li>
          <Link to={"/properties"}>
            <Icon.ChartBarIcon />
            Properties
          </Link>
        </li>
      )}

      {role === "landlord" && (
        <li>
          <Link to={"/tenants"}>
            <Icon.ExclamationCircle />
            Tenants
          </Link>
        </li>
      )}

      {role === "landlord" && (
        <li>
          <Link to={"/prospects"}>
            <Icon.ChartBarIcon />
            Prospects
          </Link>
        </li>
      )}

      {role === "landlord" && (
        <li>
          <Link to={"vendors"}>
            <Icon.ExclamationCircle />
            Vendors
          </Link>
        </li>
      )}
    </ul>
  );
};

export default MenuItems;

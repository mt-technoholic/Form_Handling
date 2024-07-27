import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "../Assets/icons";

const MenuItems = () => {
  return (
    <ul className="menu bg-base-200 rounded-box w-56">
      <li>
        <Link to={'/'}>
          <Icon.HomeIcon />
          Dashboard
        </Link>
      </li>
      <li>
        <Link to={'/properties'}>
          <Icon.ChartBarIcon />
          Properties
        </Link>
      </li>
      <li>
        <Link to={'/tenants'}>
          <Icon.ExclamationCircle />
          Tenants
        </Link>
      </li>
      <li>
        <Link to={'/prospects'}>
          <Icon.ChartBarIcon />
          Prospects
        </Link>
      </li>
      <li>
        <Link to={'vendors'}>
          <Icon.ExclamationCircle />
          Vendors
        </Link>
      </li>
    </ul>
  );
};

export default MenuItems;

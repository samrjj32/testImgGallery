import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./service.scss";
function Service() {
  return (
    <div className="service">
      <ul>
        <li>
          <NavLink to="" end>
            not optimized
          </NavLink>
        </li>
        <li>
          <NavLink to="latest"> optimized </NavLink>
        </li>

        <li>
          <NavLink to="list1">list not optimized</NavLink>
        </li>
        <li>
          <NavLink to="list2">list optimized</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Service;

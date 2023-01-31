import React from "react";
import "./left.scss";
import { NavLink } from "react-router-dom";

export default function LeftContainer() {
  return (
    <div className="left">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="service">Service</NavLink>
        </li>
      </ul>
    </div>
  );
}

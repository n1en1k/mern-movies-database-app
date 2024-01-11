import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ sN }: { sN: boolean }) {
  return (
    <nav className={`${sN && "active"}`}>
      <div className="navwrapper">
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              movies
              <img
                className="nav-arrow"
                src="../../assets/images/arrow.svg"
                alt="->"
              />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/directors"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              directors
              <img
                className="nav-arrow"
                src="../../assets/images/arrow.svg"
                alt="->"
              />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/actors"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              actors
              <img
                className="nav-arrow"
                src=".../../assets/images/arrow.svg"
                alt="->"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

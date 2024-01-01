import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      //className={`${showNavbar && "active"}`}
      className="active"
    >
      <div className="navwrapper">
        <ul className="nav-menu">
          <li className="nav-item nav-item-active">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " nav-link-active" : "")
              }
            >
              movies
              <img
                className="nav-arrow nav-arrow-active"
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
};

export default Nav;

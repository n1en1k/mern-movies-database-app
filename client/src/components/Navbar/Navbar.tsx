import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../../assets/icons/hamburger-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="Navbar">
      <div className="container">
        <div className="logo">
          <h1>
            <NavLink to="/">Movies Database</NavLink>
          </h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} alt="" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/actors">Actors</NavLink>
            </li>
            <li>
              <NavLink to="/directors">Directors</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

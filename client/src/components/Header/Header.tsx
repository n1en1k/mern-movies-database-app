import React from "react";
import { NavLink } from "react-router-dom";
// import { useState } from "react";
import { bool, func } from "prop-types";
/*
TODO:
useBetween for showNavbar state for component Nav to active show menu mobile

*/

const Header = ({ open }: { open: any }, { setOpen }: { setOpen: any }) => {
  const handleShowNavbar = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="logoDiv">
        <h1 className="logo">
          <NavLink to="/" className="logoLink">
            Movies App
          </NavLink>
        </h1>
        <div
          className={`hamburger  ${open && "active"}`}
          onClick={handleShowNavbar}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className="headerSearch">
        <form name="headerSearchForm" className="headerSearchForm">
          <input
            type="text"
            className="searchBar"
            name="searchBar"
            id="searchBar"
            placeholder="Search"
          />
          <input
            type="submit"
            className="searchSubmit"
            id="searchSubmit"
            name="searchSubmit"
            value="&rarr;"
          />
        </form>
      </div>
    </header>
  );
};
Header.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Header;

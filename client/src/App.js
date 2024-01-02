import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import CreateMovie from "./components/createMovie";
import React, { useState } from "react";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div className="logoDiv">
            <h1 className="logo">
              <NavLink to="/" className="logoLink">
                Movies App
              </NavLink>
            </h1>
            <div
              className={`hamburger  ${showNavbar && "active"}`}
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

        <div className="container">
          <nav className={`${showNavbar && "active"}`}>
            <div className="navwrapper">
              <ul className="nav-menu">
                <li className="nav-item">
                  <NavLink
                    to="/"
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
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/createMovie" element={<CreateMovie />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="/directors" element={<Directors />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Start from "./components/Start";
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
        <Header sN={showNavbar} onActive={handleShowNavbar} />

        <div className="container">
          <Navbar sN={showNavbar} />
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/createMovie" element={<CreateMovie />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="/directors" element={<Directors />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

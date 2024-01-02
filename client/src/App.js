import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./components/Movies";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import Nav from "./components/Nav/Nav";
import React, { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header open={open} setOpen={setOpen} />
        <div className="container">
          <Nav open={open} setOpen={setOpen} />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="/directors" element={<Directors />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

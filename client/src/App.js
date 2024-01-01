import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./components/Movies";
import Actors from "./components/Actors";
import Directors from "./components/Directors";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/directors" element={<Directors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <Card />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />

      </Routes>
    </>
  );
}

export default App;

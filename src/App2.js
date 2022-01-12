import React from "react";
import NavbarComp from "./Components/NavbarComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Layout from "./pages/Layout";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App2() {
  return (
    <div style={{marginTop: 100}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarComp />}>
            <Route path="/" element={<Home />} />
            <Route path="service" element={<Service />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App2;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComp from './component/fungsi/NavbarComp';
import HomePage from './component/fungsi/HomePage';
import AboutComp from './component/fungsi/AboutComp';
import DetailComp from './component/fungsi/DetailComp';



// import BootstrapComp from './component/class/BootstrapComp';
// import Parent from './component/class/Parent';
// import './App.css';
// import Home from './component/fungsi/Home';

const App = () => {
  return (
    //   {/* <Home/> */ }
    //     {/* <Parent/> */ }
    // {/* <BootstrapComp/> */ }
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/detail/:id" element={<DetailComp />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

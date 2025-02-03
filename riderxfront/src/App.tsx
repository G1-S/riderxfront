import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SobreNos from "./components/sobrenos/SobreNos";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/sobrenos" element={<SobreNos/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
  
  );
};

export default App;


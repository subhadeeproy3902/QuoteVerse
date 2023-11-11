import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Sections/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Team from "./Components/Pages/Team";
import { Route, Routes } from "react-router-dom";

function App() {



  return (
    <>
      <Header/>
      <div className="bg-slate-900 flex flex-col">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

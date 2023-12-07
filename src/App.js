import React from "react";
import Header from "./Components/Sections/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Header/>
      <div className="bg-slate-900 flex flex-col w-full">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;

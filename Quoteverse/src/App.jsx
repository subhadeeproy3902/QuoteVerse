import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper flex flex-col">
        <div className="header sticky flex justify-between items-center">
          <div className="logo">
            <h1>Quote Verse</h1>
          </div>
          <div className="nav">
            <ul className="flex flex-row gap-6">
              <li className="nav-item">About</li>
              <li className="nav-item">Know More</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

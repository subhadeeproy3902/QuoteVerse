import './App.css';
import Header from './Components/Assets/Header';
import { Route, Routes } from 'react-router';
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Team from "./Components/Pages/Team";
import Contact from "./Components/Pages/Contact";

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element = { <Home/> }/>
        <Route path="/about" element = { <About/> }/>
        <Route path="/team" element = { <Team/> }/>
        <Route path="/contact" element = { <Contact/> }/>
      </Routes>
    </div>
  );
}

export default App;

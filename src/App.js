import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Tech from "./components/Tech";
import Film from "./components/Film";
import Photo from "./components/Photo";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        {/* Navigation Bar */}
        <nav className="p-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black flex justify-between items-center shadow-lg">
          <h1 className="text-2xl font-extrabold tracking-wider">Aswanth_ks</h1>
          <ul className="flex space-x-4 items-center text-sm">
            <li className="px-3 py-1 rounded hover:bg-white/5"><Link to="/">Home</Link></li>
            <li className="px-3 py-1 rounded hover:bg-white/5"><Link to="/tech">Tech</Link></li>
            <li className="px-3 py-1 rounded hover:bg-white/5"><Link to="/film">Filmmaking</Link></li>
            <li className="px-3 py-1 rounded hover:bg-white/5"><Link to="/photo">Photography</Link></li>
            <li className="px-3 py-1 rounded hover:bg-white/5"><Link to="/projects">Projects</Link></li>
            <li className="px-3 py-1 rounded hover:bg-white/5"><Link to="/achievements">Achievements</Link></li>
            <li className="px-3 py-1 rounded hover:bg-white/5"><Link to="/about">About me</Link></li>
            <li className="px-3 py-1 rounded hover:bg-white/5"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Route Handling */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/film" element={<Film />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import React from "react";
import homeIcon from "../assets/home.svg";
import profileImg from "../assets/aswanth_2.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex h-screen font-sans">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center px-16">
        <h2 className="text-xl text-gray-600 mb-2 font-bold  mb-10">HI THERE!</h2>
        <h1 className="text-5xl font-bold mb-4">
          I'M <span className="text-yellow-400">I'M ASWANTH</span>
        </h1>
        <p className="text-sm text-gray-500 font-semibold mb-6">
          FULL-STACK DEVELOPER | SEARCH ENGINE OPTIMIZATION | VISUAL STORYTELLER
        </p>
        <p className="text-gray-600 mb-6 max-w-md">
          Versatile creative expert in Graphic Design and Photography. Blending
          art and strategy to craft unique experiences.
        </p>
        <Link to="/about">
          <button className="bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
            MORE ABOUT ME
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-1/2 relative">
          <img
            src={profileImg}
            alt="Profile"
            className="object-cover h-full w-full"
          />

        {/* Sidebar Icons */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 space-y-4">
          <SidebarIcon icon={<img src={homeIcon} alt="Home" className="w-6 h-6" />} />
          <SidebarIcon icon="👤" />
          <SidebarIcon icon="📄" />
          <SidebarIcon icon="🖼️" />
          <SidebarIcon icon="💬" />
          <SidebarIcon icon="✉️" />
        </div>
      </div>
    </div>
  );
}

function SidebarIcon({ icon }) {
  return (
    <div className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-lg hover:bg-yellow-500 transition cursor-pointer">
      {typeof icon === "string" ? <span className="text-lg">{icon}</span> : icon}
    </div>
  );
}

export default App;

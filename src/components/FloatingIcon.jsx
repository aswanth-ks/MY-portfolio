// src/components/FloatingIcons.jsx
import React from "react";
import { FaLaptopCode, FaCameraRetro } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";

const icons = [
  { icon: <FaLaptopCode />, className: "text-blue-400" },
  { icon: <MdMovie />, className: "text-red-400" },
  { icon: <FaCameraRetro />, className: "text-purple-500" },
  { icon: <SiGoogleanalytics />, className: "text-green-400" },
];

const FloatingIcons = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute text-3xl animate-float${index % 4} ${item.className}`}
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;

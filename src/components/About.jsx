import React from "react";
import { motion } from "framer-motion";
import { FaCameraRetro, FaCode, FaGraduationCap } from "react-icons/fa";
import profileImg from "../assets/aswanth_2.jpg";

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Profile Image */}
        <motion.div
          className="relative w-72 h-72 flex-shrink-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <img
            src={profileImg}
            alt="Aswanth"
            className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/10"
          />
          <span className="absolute top-0 left-0 w-full h-full border-4 border-indigo-500 rounded-3xl animate-pulse"></span>
        </motion.div>

        {/* Right Side - Text */}
        <div className="flex-1 backdrop-blur-md bg-white/10 rounded-3xl p-8 shadow-2xl">
          <motion.h2
            className="text-4xl font-extrabold mb-6 border-b border-white/20 inline-block"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            About Me
          </motion.h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-lg leading-8 text-gray-200">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              I’m <span className="font-semibold text-white">Aswanth K.S</span>, a curious full-stack developer and visual storyteller.
              Whether it's building apps with React or shooting a short film, I chase meaning through creation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Currently pursuing B.E in Computer Science, I specialize in{" "}
              <span className="text-indigo-400">Java, Spring Boot, React, HTML/CSS</span> and have a growing interest in SEO & web performance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              Outside of tech, I express my vision through a{" "}
              <span className="text-purple-400">Sony A6700</span>, capturing moments and making films that provoke thought and emotion.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              Always open to new ideas, collaborations, and challenging projects. Let’s build something meaningful — together.
            </motion.p>
          </div>

          {/* Highlights */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md hover:scale-105 transition">
              <FaCode className="text-3xl mx-auto text-blue-400 mb-2" />
              <p className="text-sm text-gray-300">Full-Stack Dev</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md hover:scale-105 transition">
              <FaCameraRetro className="text-3xl mx-auto text-pink-400 mb-2" />
              <p className="text-sm text-gray-300">Filmmaker & Photographer</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md hover:scale-105 transition">
              <FaGraduationCap className="text-3xl mx-auto text-green-400 mb-2" />
              <p className="text-sm text-gray-300">B.E in CSE @ Kumaraswamy College</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;

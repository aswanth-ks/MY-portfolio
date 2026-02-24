import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJava, FaSearch } from "react-icons/fa";

const skills = [
  { name: "HTML", level: 90, color: "from-orange-400 to-red-500", Icon: FaHtml5, description: "Semantic structure and responsive layout." },
  { name: "CSS", level: 85, color: "from-blue-400 to-blue-700", Icon: FaCss3Alt, description: "Flexbox, Grid, animations, Tailwind." },
  { name: "Java", level: 30, color: "from-yellow-400 to-yellow-600", Icon: FaJava, description: "OOP basics, Spring Boot intro." },
  { name: "SEO", level: 80, color: "from-purple-500 to-indigo-700", Icon: FaSearch, description: "On-page SEO, meta tags, sitemaps." },
];

function Tech() {
  return (
    <section id="tech" className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center text-indigo-900 mb-12 tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Technical Skills
        </motion.h2>

        <div className="backdrop-blur-md bg-white/30 rounded-xl shadow-2xl p-10 grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <skill.Icon className="text-2xl text-indigo-600" />
                  <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                </div>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>

              <div className="w-full h-4 rounded-full bg-gray-300 overflow-hidden">
                <motion.div
                  className={`h-4 bg-gradient-to-r ${skill.color} rounded-full shadow-md`}
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>

              {/* Tooltip on hover */}
              <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tech;

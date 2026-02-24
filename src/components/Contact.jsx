import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <motion.div
      id="contact" // ✅ Added this line for anchor scroll
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        📬 Contact Me
      </motion.h1>

      <div className="space-y-6 text-lg">
        <motion.div
          className="flex items-center space-x-4 hover:text-blue-400 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="text-2xl" />
          <a
            href="https://www.linkedin.com/in/aswanth-karuppannan/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/aswanthks
          </a>
        </motion.div>

        <motion.div
          className="flex items-center space-x-4 hover:text-pink-400 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaInstagram className="text-2xl" />
          <a
            href="https://www.instagram.com/vision69"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            instagram.com/69.visions
          </a>
        </motion.div>

        <motion.div
          className="flex items-center space-x-4 hover:text-yellow-300 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="text-2xl" />
          <a
            href="mailto:aswanthks@gmail.com"
            className="underline"
          >
            aswanthks@gmail.com
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;

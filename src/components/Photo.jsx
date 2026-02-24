import React, { useState } from "react";
import { motion } from "framer-motion";

function importAll(r) {
  return r.keys().map(r);
}

const photos = importAll(require.context("../assets/photography", false, /\.(jpe?g|png|webp|svg)$/i));

export default function Photo() {
  const [active, setActive] = useState(null);

  return (
    <motion.section
      className="min-h-screen p-10 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Photography</h2>
        <p className="text-gray-300 mb-8">A curated gallery highlighting composition, light, and mood.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group bg-white rounded-xl overflow-hidden shadow-lg p-2"
              aria-label={`Open photo ${i + 1}`}
            >
              <div className="bg-white rounded-md overflow-hidden border border-white/20">
                <img
                  src={p}
                  alt={`photo-${i + 1}`}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
            </button>
          ))}
        </div>

        {active !== null && (
          <div
            className="fixed inset-0 bg-black/85 flex items-center justify-center p-6 z-50"
            onClick={() => setActive(null)}
          >
            <div className="bg-white p-4 rounded shadow-2xl max-h-[90vh] max-w-[95vw]">
              <img src={photos[active]} alt={`active-${active + 1}`} className="max-h-[80vh] max-w-[90vw] object-contain" />
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}

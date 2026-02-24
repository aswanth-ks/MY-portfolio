import React from "react";

export default function Achievements() {
  const items = [
    {
      id: 1,
      title: "1st Prize — Kongu College of Engineering",
      detail: "Awarded first prize for technical project submission; received ₹10,000 cash and an associated internship opportunity.",
    },
    {
      id: 2,
      title: "JLPT N5 — Japanese Language Proficiency",
      detail: "Certified foundational Japanese proficiency demonstrating basic reading and listening competency.",
    },
    {
      id: 3,
      title: "Dean's List — Academic Recognition",
      detail: "Recognized for academic performance in Computer Science studies.",
    },
    {
      id: 4,
      title: "Short Film Award — College Fest",
      detail: "Best Short Film award in the college festival for direction and production quality.",
    },
  ];

  return (
    <section className="min-h-screen p-10 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8">Achievements</h2>

        <div className="relative pl-6 border-l border-white/10">
          {items.map((a, idx) => (
            <div key={a.id} className="mb-8 relative">
              <span className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-yellow-400 shadow" />
              <div className="bg-white/5 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg">{a.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

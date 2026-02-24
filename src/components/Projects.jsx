import React from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Trust-Based Escrow System (Startup Concept)",
      short:
        "A secure escrow workflow enabling QR-code verification for counterparty identity and a monitored transaction lifecycle for buyer–seller exchanges.",
      highlights: [
        "QR-code based verification between buyer and seller",
        "End-to-end secure transaction lifecycle and dispute-ready logging",
        "Unique user ID–based transaction requests",
        "Admin dashboard for monitoring and oversight",
      ],
      tech: ["HTML", "CSS", "React", "FastAPI", "MongoDB"],
    },
    {
      id: 2,
      name: "Admin Dashboard & Analytics System",
      short:
        "A production-focused dashboard for report generation, real-time monitoring, and backend-integrated operational analytics.",
      highlights: [
        "Automated report generation and export",
        "Real-time data monitoring and visualization",
        "Tight backend integration for reliable metrics and alerts",
      ],
      tech: ["React", "FastAPI", "MongoDB"],
    },
    {
      id: 3,
      name: "NFC/RFID Attendance System (IoT Project)",
      short:
        "A hardware-integrated attendance solution that links smart ID readings to a backend logging service for accurate, real-time attendance records.",
      highlights: [
        "Smart ID–based attendance using NFC/RFID",
        "Real-time event logging with persistent storage",
        "Hardware and backend integration for end-to-end reliability",
      ],
      tech: ["Embedded firmware", "NFC/RFID hardware", "Backend services"],
    },
  ];

  return (
    <section className="min-h-screen p-10 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <article key={p.id} className="bg-white/5 p-6 rounded-xl shadow-md hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-300 mb-4">{p.short}</p>

              <ul className="list-disc list-inside text-gray-300 mb-4">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="mt-2 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

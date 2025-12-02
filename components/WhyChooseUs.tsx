"use client";

import { motion } from "framer-motion";
import { CheckCircle, Cog, Move, Timer, Ruler, Shield } from "lucide-react";
import React from "react";

export default function WhyChooseUs() {
  const primaryGradient = "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  const items = [
    { title: "Tailor-Made Crusher Plants", desc: "Fully customized plants engineered for specific materials, production needs, and site conditions.", icon: <Cog /> },
    { title: "Zero Civil Work Required", desc: "Nut–bolt structure eliminates foundation work, drastically reduces cost, and enables quick installation.", icon: <CheckCircle /> },
    { title: "Ultra-Fast 15-Day Setup", desc: "Our modular engineering ensures complete installation and commissioning in an industry-leading 15 days.", icon: <Timer /> },
    { title: "100% Movable & Wheel-Mounted", desc: "Achieve maximum operational flexibility with our fully wheel-mounted design, allowing easy relocation.", icon: <Move /> },
    { title: "Compact & Space Efficient", desc: "Smart layout and vertical integration maximize output, fitting high productivity into restricted site spaces.", icon: <Ruler /> },
    { title: "Superior Quality & Reliability", desc: "Premium, high-manganese materials and strict QC guarantee long-term durability and stable, high-performance crushing.", icon: <Shield /> },
  ];

  return (
    <section className="py-15 text-white relative overflow-hidden">
      {/* Background radial glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-color-blue-900)_0%,transparent_70%)] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <p className="text-sm tracking-widest text-cyan-400 uppercase mb-3 font-semibold">
            THE ADVANTAGE
          </p>
          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Reasons To{" "}
            <span className={primaryGradient}>
              Partner With Us
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.4)" }}
              className="
                bg-gray-900/50 backdrop-blur-sm border border-blue-800/50 rounded-xl p-8 
                transition-all duration-300 transform-gpu cursor-pointer relative
              "
            >
              {/* Icon Container with single spin on hover */}
              <motion.div
                className="
                  mb-4 p-3 inline-flex rounded-lg 
                  bg-linear-to-br from-blue-900/50 to-cyan-900/50 
                  shadow-[0_0_15px_rgba(59,130,246,0.5)]
                "
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Apply color directly to the icon */}
                {React.cloneElement(item.icon, { className: "w-10 h-10 text-blue-400" })}
              </motion.div>

              <h3 className="text-2xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

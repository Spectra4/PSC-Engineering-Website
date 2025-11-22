"use client";

import { motion } from "framer-motion";
import { Zap, Target } from "lucide-react"; // Zap for Vision (Power/Future), Target for Mission (Goal/Execution)

export default function VisionMissionSection() {
  const primaryGradient = "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  const cards = [
    {
      title: "Our Vision",
      icon: <Target className="w-12 h-12" />,
      text: "To be India’s most trusted and technologically advanced engineering company for customized crusher plants, delivering world-class quality, economical performance, and long-term value to every client.",
      color: "text-cyan-400",
      shadow: "shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    },
    {
      title: "Our Mission",
      icon: <Zap className="w-12 h-12" />,
      text: "To engineer and build reliable, economical, and high-performance customized crusher plants by integrating advanced design, precision machining, and world-class fabrication. We remain committed to innovation, indigenous technology, disciplined project execution, and timely delivery — ensuring every customer receives a solution tailored to their operational needs and future growth.",
      color: "text-blue-400",
      shadow: "shadow-[0_0_40px_rgba(45,212,191,0.3)]",
    },
  ];

  return (
    <section className="py-24 bg-gray-950 text-white relative overflow-hidden" data-scroll>
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
            GUIDING PRINCIPLES
          </p>
          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Our <span className={primaryGradient}>Core Commitment</span>
          </h2>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              
              // Dark, futuristic card styling with subtle depth
              className={`
                p-10 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-blue-800/50 
                relative overflow-hidden transition-all duration-300 transform-gpu h-full
                hover:border-cyan-400/50 ${card.shadow}
              `}
            >
              {/* Decorative Corner Element */}
              <div className={`absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 ${card.color} rounded-tl-2xl opacity-50`}></div>

              {/* Icon Container */}
              <div className="mb-6">
                <span className={`inline-block p-3 rounded-full ${card.color}`}>
                  {card.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-extrabold text-white mb-4">
                <span className={primaryGradient}>{card.title}</span>
              </h3>

              {/* Statement */}
              <p className="text-gray-300 leading-relaxed text-lg border-l-4 border-cyan-500/50 pl-4 italic">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
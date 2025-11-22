"use client";

import { Wrench, Cog, Settings, Hammer } from "lucide-react";
import { motion } from "framer-motion";

export default function HiTechMachines() {
  const services = [
    { title: "Precision Plasma Cutting", icon: <Wrench className="w-8 h-8" /> },
    { title: "Advanced Welding & Fabrication", icon: <Hammer className="w-8 h-8" /> },
    { title: "CNC Drilling Machines", icon: <Settings className="w-8 h-8" /> },
    { title: "High-Force Hydraulic Bending", icon: <Cog className="w-8 h-8" /> },
  ];

  return (
    <section 
      // Changed background to dark for a high-tech/futuristic look
      className="w-full py-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Subtle background element (blue radial gradient) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-color-blue-900)_0%,transparent_50%)] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* TITLE - Enhanced for better contrast and gradient */}
        <motion.div
          data-scroll
          data-scroll-speed="1" // Adjusted speed for consistency
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mb-16"
        >
          <p className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-2">
            Our Arsenal
          </p>
          <h2 className="text-5xl font-extrabold tracking-tight text-white leading-tight">
            Hi-tech{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-300">
              Machineries
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              data-scroll
              data-scroll-speed={index % 2 === 0 ? 0.5 : 1.2}
              // Entry Animation: Staggered with slight lift
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              
              // Hover Animation: Lift and subtle glow
              whileHover={{ y: -5, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
              
              // Styles: Futuristic Card Look
              className="
                group p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-blue-800/50 
                transition-all duration-300 transform-gpu 
                shadow-xl hover:border-cyan-400/50
              "
            >
              <div className="
                w-16 h-16 rounded-full 
                flex items-center justify-center mx-auto mb-5
                
                // Icon Background Glow and Gradient
                bg-linear-to-br from-blue-900/50 to-cyan-900/50 
                shadow-[0_0_20px_rgba(59,130,246,0.3)]
                group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
                transition-shadow duration-300
              ">
                {/* Icon Color: Apply primary gradient to the icon itself */}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-300">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white leading-snug tracking-wide">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
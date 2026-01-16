"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
  Plus,
  ArrowUpRight,
  Zap,
  Settings,
  Minimize2,
  CircleDashed,
} from "lucide-react";

// Mock data (Added descriptions for the expanded view)
const machines = [
  {
    id: "01",
    title: "Plasma Cutting",
    category: "Precision",
    desc: "High-definition ionized gas cutting for aerospace-grade tolerances.",
    image: "/machines/plasma-cutting.jpg", // Ensure these paths exist or use placeholders
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "02",
    title: "Welding & Fab",
    category: "Assembly",
    desc: "Robotic MIG/TIG welding arms ensuring consistent structural integrity.",
    image: "/machines/welding-fabrication.jpg",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    id: "03",
    title: "CNC Drilling",
    category: "Automation",
    desc: "Multi-axis automated drilling systems for rapid mass production.",
    image: "/machines/cnc-drilling.jpg",
    icon: <CircleDashed className="w-5 h-5" />,
  },
  {
    id: "04",
    title: "Hydraulic Bending",
    category: "Force",
    desc: "300-ton press brakes capable of bending heavy-gauge steel alloys.",
    image: "/machines/hydraulic-bending.jpg",
    icon: <Minimize2 className="w-5 h-5" />,
  },
];

export default function HiTechMachines() {
  const primaryGradient =
    "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";
  const [activeId, setActiveId] = useState<string | null>("01");

  return (
    <section className="relative w-full overflow-hidden py-4 sm:py-6 lg:py-8">
  {/* Background */}
  <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>

  {/* 🔑 SINGLE MASTER CONTAINER */}
  <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
    
    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-6 sm:mb-8 lg:mb-12 text-center"
    >
      <p className="mb-3 text-xs sm:text-sm font-semibold tracking-widest text-cyan-400 uppercase">
        Manufacturing Facility
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
         High-Tech {" "}
        <span className={primaryGradient}>Machineries</span>
      </h2>
    </motion.div>

    {/* ACCORDION ROW */}
    <div className="flex w-full lg:min-h-[600px] gap-4 overflow-hidden">
      <div className="flex w-full flex-col lg:flex-row gap-4">
        {machines.map((machine) => (
          <MachineCard
            key={machine.id}
            data={machine}
            isActive={activeId === machine.id}
            onClick={() => setActiveId(machine.id)}
          />
        ))}
      </div>
    </div>
  </div>
</section>

  );
}

function MachineCard({
  data,
  isActive,
  onClick,
}: {
  data: any;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl cursor-pointer group
        border border-neutral-800 
        transition-colors duration-500
        ${
          isActive
            ? "lg:flex-[3] border-cyan-500/50"
            : "lg:flex-[0.5] hover:border-neutral-600"
        }
        h-[300px] lg:h-full flex-shrink-0
      `}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          layoutId={`img-${data.id}`}
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent ${
            isActive ? "opacity-90" : "opacity-60"
          }`}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-between">
        
        {/* Bottom: Title & Details */}
        <div className="flex flex-col gap-2">
          {/* Collapsed Vertical Text (Desktop Only) */}
          {!isActive && (
            <div className="hidden lg:block absolute bottom-28 left-1/2 -translate-x-1/2 whitespace-nowrap origin-center -rotate-90">
              <span className="text-xl font-bold text-neutral-500 tracking-widest uppercase group-hover:text-white transition-colors">
                {data.title}
              </span>
            </div>
          )}

          <motion.div layout="position">
            <h3
              className={`font-bold text-white leading-none mb-2 ${
                isActive ? "text-3xl md:text-5xl" : "text-2xl lg:opacity-0"
              }`}
            >
              {data.title}
            </h3>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-neutral-400 text-sm md:text-base max-w-lg mb-4">
                    {data.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Active Borders / Corners */}
      {isActive && (
        <>
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-500 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-500 rounded-bl-lg" />
        </>
      )}
    </motion.div>
  );
}

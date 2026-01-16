"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  CheckCircle,
  Cog,
  Move,
  Timer,
  Ruler,
  Shield,
  ExternalLink,
} from "lucide-react";
import React, { MouseEvent } from "react";

const items = [
  {
    title: "Tailor-Made Crusher Plants",
    desc: "Fully customized plants engineered for specific materials, production needs, and site conditions.",
    icon: <Cog />,
  },
  {
    title: "Zero Civil Work Required",
    desc: "Nut–bolt structure eliminates foundation work, drastically reduces cost, and enables quick installation.",
    icon: <CheckCircle />,
  },
  {
    title: "Ultra-Fast 15-Day Setup",
    desc: "Our modular engineering ensures complete installation and commissioning in an industry-leading 15 days.",
    icon: <Timer />,
  },
  {
    title: "100% Movable & Wheel-Mounted",
    desc: "Achieve maximum operational flexibility with our fully wheel-mounted design, allowing easy relocation.",
    icon: <Move />,
  },
  {
    title: "Compact & Space Efficient",
    desc: "Smart layout and vertical integration maximize output, fitting high productivity into restricted site spaces.",
    icon: <Ruler />,
  },
  {
    title: "Superior Quality & Reliability",
    desc: "Premium, high-manganese materials and strict QC guarantee long-term durability and stable performance.",
    icon: <Shield />,
  },
];

export default function WhyChooseUs() {
  const primaryGradient =
    "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";
  return (
    <section className="py-8 text-white relative overflow-hidden">
      {/* Background Glow - Kept from your original */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-color-blue-900)_0%,transparent_70%)] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Modernized Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8 lg:mb-12 text-center"
        >
          <p className="mb-3 text-xs sm:text-sm font-semibold tracking-widest text-cyan-400 uppercase">
            THE ADVANTAGE
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            Reasons To <span className={primaryGradient}>Partner With Us</span>
          </h2>
        </motion.div>

        {/* 3D Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <TiltCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ item, index }: { item: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotation logic for 3D effect
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-[280px] w-full cursor-pointer"
    >
      {/* Glow Effect that follows mouse */}
      <div
        style={{
          transform: "translateZ(20px)",
        }}
        className="absolute inset-0 bg-blue-500/5 rounded-2xl border border-blue-900/30 transition-colors group-hover:border-cyan-500/50 group-hover:bg-blue-500/10"
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 group-hover:w-1/2 transition-all duration-500" />

        <div className="p-8 flex flex-col h-full justify-between">
          <div style={{ transform: "translateZ(40px)" }}>
            {/* Icon & ID */}
            <div className="flex justify-between items-start mb-6">
              <div className="text-cyan-400 p-3 bg-neutral-900 rounded-lg ring-1 ring-white/10 group-hover:ring-cyan-500/50 transition-all">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-100">
              {item.title}
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

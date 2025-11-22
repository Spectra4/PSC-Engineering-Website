"use client";

import { Wrench, Cog, Settings, Hammer } from "lucide-react";
import { motion } from "framer-motion";

export default function HiTechMachines() {
  const services = [
    { title: "Plasma Cutting", icon: <Wrench className="w-8 h-8 text-primary" /> },
    { title: "Hi-tech Welding and Fabrication", icon: <Hammer className="w-8 h-8 text-primary" /> },
    { title: "Drilling Machines", icon: <Settings className="w-8 h-8 text-primary" /> },
    { title: "Hydraulic Press Bending", icon: <Cog className="w-8 h-8 text-primary" /> },
  ];

  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.div
          data-scroll
          data-scroll-speed="1.5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mb-10"
        >
          <span className="block w-16 h-1 bg-primary mx-auto mb-3 rounded-full"></span>
          <h2 className="text-4xl font-bold tracking-wide text-gray-900">
            Hi-tech Machineries
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              data-scroll
              data-scroll-speed={index % 2 === 0 ? 1.5 : 1.2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="
                group p-8 rounded-2xl bg-white border border-gray-200 
                shadow-sm hover:shadow-lg 
                transition-all duration-300 
                hover:-translate-y-1
              "
            >
              <div className="
                w-14 h-14 rounded-xl bg-primary/10 
                flex items-center justify-center mx-auto mb-5
              ">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Wrench, Cog, Settings, Hammer } from "lucide-react";

export default function HiTechMachines() {
  const services = [
    { title: "Plasma Cutting", icon: <Wrench className="w-8 h-8 text-primary" /> },
    { title: "Hi-tech Welding and Fabrication", icon: <Hammer className="w-8 h-8 text-primary" /> },
    { title: "Drilling Machines", icon: <Settings className="w-8 h-8 text-primary" /> },
    { title: "Hydraulic Press Bending", icon: <Cog className="w-8 h-8 text-primary" /> },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <div className="relative inline-block mb-14">
          <span className="block w-16 h-1 bg-primary mx-auto mb-3 rounded-full"></span>
          <h2 className="text-4xl font-bold tracking-wide text-gray-900">
            Hi-tech Machineries
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {services.map((item, index) => (
            <div
              key={index}
              className="
                group p-8 rounded-2xl bg-white border border-gray-200 
                shadow-sm hover:shadow-lg 
                transition-all duration-300 
                hover:-translate-y-1
              "
            >
              {/* Icon Block */}
              <div className="
                w-14 h-14 rounded-xl bg-primary/10 
                flex items-center justify-center mx-auto mb-5
                ">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Wrench, Settings, DollarSign, Zap, Clock, Users, Leaf } from "lucide-react";

export default function CompanyGoalsSection() {
  const primaryGradient = "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  const goals = [
    {
      title: "Engineering Excellence",
      icon: Wrench,
      description: "Continuously improve our design, fabrication, and machining capabilities to deliver structurally superior and technologically advanced crusher plants.",
    },
    {
      title: "Customized Solutions",
      icon: Settings,
      description: "Develop crusher plants tailored to each customer's production requirements, site conditions, and machinery preferences.",
    },
    {
      title: "Technological Advancement",
      icon: Zap,
      description: "Invest in modern tools, R&D, and indigenous innovation to enhance plant performance, automation, and durability.",
    },
    {
      title: "Timely Delivery",
      icon: Clock,
      description: "Execute every project with discipline and precision to ensure on-schedule delivery and seamless installation.",
    },
    {
      title: "Customer Support",
      icon: Users,
      description: "Build long-term partnerships by providing dependable systems, transparent communication, and dedicated after-sales support.",
    },
    {
      title: "Sustainable Growth",
      icon: Leaf,
      description: "Develop engineering solutions that support efficient operations, reduced downtime, and long-term productivity for clients.",
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
          className="flex flex-col items-center text-center mb-16"
        >
          <p className="text-sm tracking-widest text-cyan-400 uppercase mb-3 font-semibold">
            STRATEGIC IMPERATIVES
          </p>
          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Our <span className={primaryGradient}>Key Goals</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            These seven strategic goals guide every decision, from initial design to final installation, ensuring we deliver maximum value and reliability.
          </p>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              
              className="
                p-8 rounded-xl bg-gray-800/80 border border-blue-800/50 
                transition-all duration-300 transform-gpu
                hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-900/40
              "
            >
              {/* Icon */}
              <div className="mb-4">
                <goal.icon className="w-10 h-10 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {goal.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-sm">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
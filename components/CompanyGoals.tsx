"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Settings,
  IndianRupee,
  Zap,
  Clock,
  Users,
  Leaf,
} from "lucide-react";

export default function CompanyGoalsSection() {
  const primaryGradient =
    "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  const goals = [
    {
      title: "Engineering Excellence",
      icon: Wrench,
      description:
        "Continuously improve our design, fabrication, and machining capabilities to deliver structurally superior and technologically advanced crusher plants.",
    },
    {
      title: "Customized Solutions",
      icon: Settings,
      description:
        "Develop crusher plants tailored to each customer's production requirements, site conditions, and machinery preferences.",
    },
    {
      title: "Cost Efficiency",
      icon: IndianRupee,
      description:
        "Optimize material procurement and production workflows to ensure clients receive maximum value and ROI from their investment.",
    },
    {
      title: "Technological Advancement",
      icon: Zap,
      description:
        "Invest in modern tools, R&D, and indigenous innovation to enhance plant performance, automation, and durability.",
    },
    {
      title: "Timely Delivery",
      icon: Clock,
      description:
        "Execute every project with discipline and precision to ensure on-schedule delivery and seamless installation.",
    },
    {
      title: "Customer Support",
      icon: Users,
      description:
        "Build long-term partnerships by providing dependable systems, transparent communication, and dedicated after-sales support.",
    },
    {
      title: "Sustainable Growth",
      icon: Leaf,
      description:
        "Develop engineering solutions that support efficient operations, reduced downtime, and long-term productivity for clients.",
    },
  ];

  const GoalCard = ({ goal, index }: { goal: typeof goals[0]; index: number }) => {
    const isLeft = index % 2 === 0;

    return (
      <div className="relative w-full flex md:block">
        {/* CENTER DOT */}
        <div
          className="
            absolute left-1/2 top-[50%]
            -translate-x-1/2 -translate-y-1/2
            w-5 h-5 rounded-full 
            bg-cyan-400 border-4 border-gray-900 shadow-xl z-20
            hidden md:block
          "
        />

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 90 }}
          className={`
            w-full md:w-[48%] 
            ${isLeft ? "md:pr-20 md:ml-0" : "md:pl-20 md:ml-auto"}
          `}
        >
          <div
            className="
              p-8 bg-gray-800/80 border border-blue-800/40 
              rounded-xl hover:border-cyan-400/50 
              hover:scale-[1.03] transition-all
            "
            style={{
              clipPath: isLeft
                ? "polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%)"
                : "polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 85%)",
            }}
          >
            <goal.icon className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">{goal.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {goal.description}
            </p>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-8 md:py-10 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-4"
        >
          <p className="text-sm tracking-widest text-cyan-400 uppercase mb-3 font-semibold">
            STRATEGIC IMPERATIVES
          </p>

          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Our <span className={primaryGradient}>Key Goals</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl">
            These strategic goals guide every decision, from initial design to
            final installation, ensuring we deliver maximum value and
            reliability.
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative flex flex-col gap-y-15">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[3px] bg-gray-700/40 hidden md:block" />

          {goals.map((goal, index) => (
            <GoalCard key={index} goal={goal} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

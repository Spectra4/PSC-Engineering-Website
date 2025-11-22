"use client";

import { motion } from "framer-motion";
import { CheckCircle, Cog, Move, Timer, Ruler, Shield } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    { title: "Tailor-Made Crusher Plants", desc: "Fully customized plants engineered for specific materials, production needs, and site conditions.", icon: <Cog className="w-10 h-10 text-primary" /> },
    { title: "No Civil Work Required", desc: "Nut–bolt structure eliminates foundation work, reduces cost, and enables quick installation.", icon: <CheckCircle className="w-10 h-10 text-primary" /> },
    { title: "Fast 15-Day Installation", desc: "Modular engineering ensures installation and commissioning in just 15 days.", icon: <Timer className="w-10 h-10 text-primary" /> },
    { title: "100% Movable & Wheel-Mounted", desc: "Easy relocation across multiple project sites with our fully wheel-mounted design.", icon: <Move className="w-10 h-10 text-primary" /> },
    { title: "Compact & Space Efficient", desc: "Smart layout fits easily into restricted spaces without compromising productivity.", icon: <Ruler className="w-10 h-10 text-primary" /> },
    { title: "Superior Quality & Reliability", desc: "Premium materials and strict QC ensure long-term durability and stable performance.", icon: <Shield className="w-10 h-10 text-primary" /> },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          data-scroll
          data-scroll-speed="1.5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10"
        >
          <div className="text-center relative">
            <span className="block w-16 h-1 bg-primary mx-auto mb-3 rounded-full"></span>
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              data-scroll
              data-scroll-speed={index % 2 === 0 ? 1.2 : 1.5}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="
                bg-white border border-gray-200 rounded-2xl p-8 
                shadow-sm hover:shadow-md transition-all
              "
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

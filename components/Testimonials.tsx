"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Project Contractor",
      text: "Their crusher plants are extremely reliable and perfectly engineered. Installation was smooth and fast.",
    },
    {
      name: "Ankit Verma",
      role: "Site Supervisor",
      text: "High-quality fabrication and excellent customer support. We are fully satisfied with their performance.",
    },
    {
      name: "Amit Construction Pvt Ltd",
      role: "Industry Client",
      text: "Their wheel-mounted plants are a game-changer — compact, movable and highly efficient.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      {/* Title */}
      <div className="flex justify-center mb-12">
        <div className="text-center">
          <span className="block w-16 h-1 bg-primary mx-auto mb-3 rounded-full"></span>
          <h2 className="text-4xl font-bold text-gray-900">Testimonials</h2>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="
              p-8 rounded-2xl bg-gray-50 border border-gray-200 
              shadow-md hover:shadow-lg transition-all duration-300
            "
          >
            <MessageCircle className="w-10 h-10 text-primary mb-4" />

            <p className="text-gray-800 italic mb-6">“{item.text}”</p>

            <div>
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

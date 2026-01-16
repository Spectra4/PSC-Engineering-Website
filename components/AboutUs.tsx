"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const primaryGradient =
    "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  return (
    <section className="py-8 md:py-12 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          {/* Heading */}
          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-6 
                        border-l-4 border-cyan-500/50 pl-4 italic">
            Founded in 1975, Patel Stone Crushers Engg. Works Pvt. Ltd. is one
            of India’s most trusted engineering companies specializing in
            customized crusher plant design, fabrication, and turnkey
            execution. With over 50 years of industry experience, we deliver
            durable, efficient, and high-performance systems engineered to
            meet the demands of the mining, construction, and infrastructure
            sectors.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            With thousands of successful installations across India, we are
            trusted by leading contractors, EPC companies, and developers. Our
            flexibility to integrate multi-brand machinery with robust
            fabricated structures ensures each plant is optimized for
            performance and customer specific goals. Guided by a vision to be
            India’s most reliable name in engineered crusher plants, we remain
            committed to innovation, engineering excellence, economical
            solutions, and timely project delivery.
          </p>

          {/* CTA */}
          <motion.a
            href="/products"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex w-fit items-center gap-2 
                       px-8 py-3 text-base font-semibold rounded-full
                       bg-linear-to-r from-blue-600 to-cyan-500 text-white
                       transition-all duration-300 shadow-lg"
          >
            View Crushing Solutions
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative p-3 bg-gray-800/50 
                     border border-blue-700/50 rounded-3xl
                     shadow-[0_0_60px_rgba(59,130,246,0.3)]"
        >
          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-8 h-8 
                          border-t-4 border-r-4 
                          border-cyan-400 rounded-tr-3xl z-10" />

          <img
            src="images/about-plant.png"
            alt="Patel Crusher Jaw Crusher or Crushing Plant"
            className="w-full h-auto rounded-2xl object-cover"
          />

          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 
                          bg-linear-to-t from-gray-950/80 to-transparent 
                          rounded-b-2xl" />
        </motion.div>

      </div>
    </section>
  );
}

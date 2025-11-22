"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  // Define custom styles for the high-tech gradient
  const primaryGradient = "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  return (
    <section 
      // Dark background for a futuristic theme
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT (Futuristic Styling with Specific Content) */}
        <motion.div
          data-scroll
          data-scroll-speed="1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-sm tracking-widest text-cyan-400 uppercase mb-3 font-semibold">
            <span className="drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">
              PATEL CRUSHER LEGACY
            </span>
          </h4>

          <h2 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Pioneering Industry Growth <br />
            <span className={primaryGradient}>
              with Reliable Crushing Solutions.
            </span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 border-l-4 border-cyan-500/50 pl-4 italic">
            {/* Dummy Content: Focus on core value proposition */}
            As Patel Crusher Manufacturing Pvt Ltd, we design and engineer
            heavy-duty jaw, cone, and VSI crushers built for
            unmatched durability and high throughput performance. Our advanced machinery
            is the backbone of operations across the mining, infrastructure, and material
            processing sectors globally, setting the benchmark for precision and reliability.
            We are committed to delivering engineering solutions that maximize uptime and profitability.
          </p>

          {/* Call to Action Button - Enhanced for tech look */}
          <motion.a
            href="/products"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-full 
                       bg-linear-to-r from-blue-600 to-cyan-500 text-white 
                       transition-all duration-300 shadow-lg"
          >
            View Crushing Solutions
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>

        {/* RIGHT — IMAGE (Futuristic Frame/Panel Styling) */}
        <motion.div
          data-scroll
          data-scroll-speed="1.2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          
          className="relative p-2 bg-gray-800/50 border border-blue-700/50 rounded-3xl 
                     shadow-[0_0_60px_rgba(59,130,246,0.3)] transform-gpu"
        >
          {/* Decorative Corner Tabs */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-cyan-400 rounded-tr-3xl z-10"></div>
          
          <img
            // DUMMY IMAGE URL: Replace this with your actual image path later
            src="images/about-plant.png" 
            alt="Patel Crusher Jaw Crusher or Crushing Plant"
            className="w-full h-auto rounded-2xl object-cover"
          />
          
          {/* Subtle bottom glow for the image/panel */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-gray-950/80 to-transparent rounded-b-2xl"></div>
        </motion.div>

      </div>
    </section>
  );
}
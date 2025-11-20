"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-28 text-white" id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/about-plant.png"
            alt="Stone Crusher Plant"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="text-yellow-600">Our Company</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Founded with a vision to build the backbone of modern infrastructure, our company
            specializes in manufacturing high-quality **stone crushing machinery** and **aggregate
            processing solutions**. With years of industry experience, we have become a trusted name
            for reliability, innovation, and performance.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From large-scale mining projects to local construction needs, we design and engineer
            crushers, conveyors, and screening systems that deliver unmatched productivity and
            durability. Every machine we build reflects our commitment to **precision engineering**,
            **sustainability**, and **customer satisfaction**.
          </p>
          <div className="pt-4">
            <motion.a
              onClick={() => window.dispatchEvent(new Event("openContactForm"))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-500 transition"
            >
              Explore Our Products
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Wrench, Shield } from "lucide-react";

export default function SemiMobileCrushing() {
  const products = [
    {
      title: "Primary Jaw Crushing Plant",
      location: "Iron Ore Mine – Odisha, India",
      image: "/images/product-cone.png",
      description:
        "Designed for high-capacity primary crushing, this semi-mobile jaw plant offers quick relocation and consistent output in mining operations.",
      specs: [
        "Capacity: 300 TPH",
        "Feed Size: 1000 mm",
        "Hydraulic Wheel Mounted",
      ],
    },
    {
      title: "Secondary Crushing Unit",
      location: "Aggregate Quarry – Rajasthan, India",
      image: "/images/product-conveyor.png",
      description:
        "Engineered for secondary crushing applications with excellent reduction ratios and low operational costs.",
      specs: [
        "Capacity: 250 TPH",
        "Cone Crusher Configuration",
        "Low Maintenance Design",
      ],
    },
    {
      title: "Tertiary Crushing Plant",
      location: "Construction Site – Maharashtra, India",
      image: "/images/product-jaw.png",
      description:
        "Ideal for producing fine aggregates with precision control and energy-efficient operation.",
      specs: [
        "Output Size: 0–20 mm",
        "Fuel Efficient System",
        "Compact Footprint",
      ],
    },
    {
      title: "Recycling Crushing Plant",
      location: "Urban Project – Gujarat, India",
      image: "/images/product-plant.png",
      description:
        "Optimized for concrete and demolition waste recycling with fast setup and flexible relocation.",
      specs: [
        "Eco-Friendly Operation",
        "Quick Setup Time",
        "Robust Chassis Mounted",
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* ================= Banner ================= */}
      <section
        className="relative w-full h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
            backgroundImage: "url('/images/product-conveyor.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85"></div>

        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Content */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400 text-sm tracking-wide">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            Industrial Crushing Solutions
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Conveyors
            <span className="block text-blue-400 mt-2 text-lg md:text-xl lg:text-2xl">
                (Plate Bending)
            </span>
            </h1>

            {/* Accent Line */}
            <div className="w-24 h-[3px] bg-blue-400 mx-auto mb-6"></div>

            {/* Subtitle */}
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Durable conveyor systems designed for seamless material handling and continuous flow.
            </p>
        </motion.div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>


      {/* ================= Products Section ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        {products.map((product, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* ===== Mobile Heading ===== */}
              <div className="lg:hidden">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {product.title}
                </h2>
                <p className="text-blue-400 text-sm mb-6">
                  {product.location}
                </p>
              </div>

              {/* ===== Image ===== */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[300px] md:h-[420px] object-cover hover:scale-105 transition duration-700"
                  />
                </div>
              </motion.div>

              {/* ===== Content ===== */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Desktop Heading */}
                <div className="hidden lg:block">
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {product.title}
                  </h2>
                  <p className="text-blue-400 text-sm">
                    {product.location}
                  </p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-3">
                  {product.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <CheckCircle
                        size={20}
                        className="text-blue-400 mt-1"
                      />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          );
        })}
      </section>
    </main>
  );
}

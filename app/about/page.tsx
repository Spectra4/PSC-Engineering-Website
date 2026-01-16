"use client";

import VisionMissionSection from "@/components/VisionMission";
import CompanyGoalsSection from "@/components/CompanyGoals";
import LeadershipTeamSection from "@/components/TeamSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  // Define the futuristic color variables
  const primaryText = "text-cyan-400";
  const primaryBorder = "border-blue-700/50";
  const primaryGlow = "shadow-[0_0_40px_rgba(59,130,246,0.3)]";
  const primaryGradientText =
    "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  return (
    <>
      {/* ----------------- 1. Main About Section (Grid) ----------------- */}
      <section
        className="pt-28 pb-8 text-white relative overflow-hidden"
        id="about"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-color-blue-900)_0%,transparent_70%)] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Image (High-Tech Panel Style) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative w-full h-80 md:h-[420px] rounded-3xl overflow-hidden p-2 bg-gray-900/50 border ${primaryBorder} ${primaryGlow} transform-gpu`}
          >
            <Image
              src="/images/about-plant.png"
              alt="Advanced Modular Crushing Plant"
              fill
              className="object-cover rounded-2xl"
              priority
            />

            <div
              className={`absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 ${primaryText} rounded-tr-3xl z-10 opacity-70`}
            ></div>
          </motion.div>

          {/* Right: Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Built on{" "}
              <span className={primaryGradientText}>Precision Engineering</span>{" "}
              and Trust.
            </h2>

            <p className="text-gray-400 leading-relaxed border-l-4 border-cyan-500/50 pl-4 italic">
              Founded in 1975, Patel Stone Crushers Engg. Works Pvt. Ltd. is one
              of India’s most trusted engineering companies specializing in
              customized crusher plant design, fabrication, and turnkey
              execution. With over 50 years of industry experience, we deliver
              durable, efficient, and high-performance systems engineered to
              meet the demands of the mining, construction, and infrastructure
              sectors.
            </p>

            <p className="text-gray-400 leading-relaxed">
              With thousands of successful installations across India, we are
              trusted by leading contractors, EPC companies, and developers. Our
              flexibility to integrate multi-brand machinery with robust
              fabricated structures ensures each plant is optimized for
              performance and customer specific goals. Guided by a vision to be
              India’s most reliable name in engineered crusher plants, we remain
              committed to innovation, engineering excellence, economical
              solutions, and timely project delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ----------------- 2. Vision/Mission Section ----------------- */}
      <VisionMissionSection />

      {/* ----------------- 3. Goals Section ----------------- */}
      <CompanyGoalsSection />

      {/* ----------------- 4. Leadership Team Section ----------------- */}
      <LeadershipTeamSection />
    </>
  );
}

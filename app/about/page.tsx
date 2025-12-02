"use client";

import VisionMissionSection from '@/components/VisionMission';  
import CompanyGoalsSection from '@/components/CompanyGoals';
import LeadershipTeamSection from '@/components/TeamSection';
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  // Define the futuristic color variables
  const primaryText = "text-cyan-400";
  const primaryBorder = "border-blue-700/50";
  const primaryGlow = "shadow-[0_0_40px_rgba(59,130,246,0.3)]";
  const primaryGradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  return (
    <> 
      {/* ----------------- 1. Main About Section (Grid) ----------------- */}
      <section className="pt-28 pb-8 text-white relative overflow-hidden" id="about">
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

            <div className={`absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 ${primaryText} rounded-tr-3xl z-10 opacity-70`}></div>
          </motion.div>

          {/* Right: Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className={`text-sm tracking-widest ${primaryText} uppercase mb-3 font-semibold`}>
              PATEL CRUSHER MANUFACTURING PVT LTD
            </h4>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Built on <span className={primaryGradientText}>Precision Engineering</span> and Trust.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-cyan-500/50 pl-4 italic">
              Founded with a vision to be the backbone of infrastructure, we specialize in designing
              and manufacturing high-performance mobile and modular crushing plants. Our solutions
              are engineered to meet the stringent demands of the mining, quarrying, and construction
              sectors, providing maximum throughput and operational efficiency.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              We innovate beyond standard crushing machinery, focusing on **zero civil work structures**
              and fast, 15-day installations. Every piece of equipment reflects our commitment to 
              superior material quality, sustainable processes, and a partnership approach that ensures 
              long-term success for our clients.
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

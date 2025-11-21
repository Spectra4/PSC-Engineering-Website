// StatsSection.jsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReelNumber from "./ReelNumber";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const sectionRef = useRef(null);

  const stats = [
    { value: 47, label: "Years of Experience", suffix: "+" },
    { value: 1200, label: "Satisfied Customers", suffix: "+" },
    { value: 24, label: "Customer Support", suffix: "x7" },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Once section is in view, dispatch event to start reels
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        window.dispatchEvent(new Event("startReel"));
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT & IMAGE */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Building Trust,
            <br />
            Delivering Excellence
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            With decades of engineering expertise, our company continues to
            deliver precision, quality and industry-leading performance across
            all projects.
          </p>

          <div className="w-24 h-1 bg-primary rounded-full" />

          {/* sample image (uses uploaded file path) */}
          <div className="mt-6 w-[300px] rounded-xl overflow-hidden shadow-lg">
            <img src="/mnt/data/92468a5d-589d-4d41-aa53-69c94d1bffda.png" alt="factory" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* RIGHT STATS GRID */}
        <div className="grid grid-cols-3 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gray-50 shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center">
                <ReelNumber number={s.value} suffix={s.suffix} indexBase={idx * 5} />
              </div>
              <p className="text-gray-600 mt-4 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

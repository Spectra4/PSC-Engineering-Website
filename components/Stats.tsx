"use client";

import { motion } from "framer-motion"; 
import { useEffect, useRef, useState } from "react";

interface Stat {
  number: number;
  label: string;
  suffix: string;
}

const CountUp = ({ target, duration = 2.5 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    let animationFrameId: number;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      countRef.current = Math.floor(target * progress);
      setCount(countRef.current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default function StatsSection() {
  const stats: Stat[] = [
    { number: 47, label: "Years of Experience", suffix: "+" },
    { number: 1200, label: "Happy Customers", suffix: "+" },
    { number: 24, label: "Support Availability", suffix: "/7" },
  ];

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-15 text-white relative overflow-hidden"
    >
      {/* Subtle background grid/pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1c2a4f_1px,transparent_1px)] [bg-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-lg font-medium text-blue-400 uppercase tracking-widest mb-2">
            Our Performance
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Excellence
            </span>{" "}
            By The Numbers
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            A proven track record of dedication, innovation, and client satisfaction.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: idx % 2 === 0 ? 5 : -5, rotateX: 5 }}
              className="relative p-8 rounded-xl border border-blue-800/50 backdrop-blur-sm bg-gray-900/30 shadow-xl 
                         transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:bg-gray-800/50 group transform-gpu"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 group-hover:border-blue-400 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 group-hover:border-blue-400 transition-colors"></div>

              <div className="text-left">
                <p className="text-gray-400 text-base uppercase tracking-wider mb-2">{stat.label}</p>

                <div className="text-7xl md:text-8xl font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {isInView ? <CountUp target={stat.number} /> : "0"}
                  <span className="text-5xl font-black">{stat.suffix}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

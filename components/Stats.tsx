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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
      data-scroll
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-scroll
          data-scroll-speed="2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">By The Numbers</h2>
          <p className="text-lg text-gray-300">Proven track record of excellence and reliability.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              data-scroll
              data-scroll-speed={-1}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                {isInView ? <CountUp target={stat.number} /> : "0"}
                <span className="text-4xl md:text-5xl">{stat.suffix}</span>
              </div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

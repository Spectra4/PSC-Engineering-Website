"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Stat {
  number: number;
  label: string;
  suffix: string;
}

/* ---------------- COUNT UP ---------------- */
const CountUp = ({
  target,
  duration = 2.5,
}: {
  target: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    let raf: number;
    const start = Date.now();

    const animate = () => {
      const progress = Math.min(
        (Date.now() - start) / (duration * 1000),
        1
      );
      countRef.current = Math.floor(target * progress);
      setCount(countRef.current);

      if (progress < 1) raf = requestAnimationFrame(animate);
      else setCount(target);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

/* ================= STATS SECTION ================= */
export default function StatsSection() {
  const stats: Stat[] = [
    { number: 50, label: "Years of Experience", suffix: "+" },
    { number: 30, label: "Product Range", suffix: "+" },
    { number: 2500, label: "Satisfied Customers", suffix: "+" },
    { number: 175000, label: "Sqft Area", suffix: "+" },
    { number: 24, label: "Customer Support", suffix: "x7" },
  ];

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-4 text-white relative overflow-hidden"
    >
      {/* background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1c2a4f_1px,transparent_1px)] [bg-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ---------------- GRID ---------------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.04,
                y: -6,
              }}
              className="
                relative p-6 md:p-8
                rounded-xl
                border border-blue-800/40
                bg-gray-900/30
                backdrop-blur-sm
                shadow-xl
                hover:bg-gray-800/40
                transition-all
                group
              "
            >
              {/* corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 group-hover:border-blue-400 transition-colors" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 group-hover:border-blue-400 transition-colors" />

              <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 text-center">
                {stat.label}
              </p>

              <div className="text-center">
                <div className="text-5xl md:text-6xl xl:text-5xl font-extrabold leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  {isInView ? <CountUp target={stat.number} /> : "0"}
                  <span className="text-3xl font-black">
                    {stat.suffix}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

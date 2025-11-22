"use client";

import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useDrag } from '@use-gesture/react'; // <-- Import useDrag

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  
  const primaryGradient = "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Project Contractor",
      text: "Their crusher plants are extremely reliable and perfectly engineered. Installation was smooth and fast, minimizing downtime significantly.",
    },
    {
      name: "Ankit Verma",
      role: "Site Supervisor",
      text: "High-quality fabrication and excellent, proactive customer support. We are fully satisfied with their long-term performance and reliability on site.",
    },
    {
      name: "Amit Construction Pvt Ltd",
      role: "Industry Client",
      text: "Their wheel-mounted plants are a true game-changer—compact, instantly movable, and highly efficient. A brilliant piece of modular engineering.",
    },
    {
      name: "Harish Engineers",
      role: "Procurement Head",
      text: "The zero civil work structure saved us weeks on installation time. Their modular approach is genuinely innovative and cost-effective.",
    },
  ];

  const total = testimonials.length;
  const SWIPE_THRESHOLD = 50; // Minimum distance to register a swipe

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };
  
  // Logic to get the three visible cards (Center, Left, Right)
  const visibleCards = testimonials.map((_, index) => {
    let relativeIndex = index - currentIndex;

    // Circular logic: Adjust for wrap-around
    if (relativeIndex > 1) relativeIndex -= total;
    if (relativeIndex < -1) relativeIndex += total;
    
    if (relativeIndex >= -1 && relativeIndex <= 1) {
      return {
        ...testimonials[index],
        relativeIndex,
        originalIndex: index,
      };
    }
    return null;
  }).filter(card => card !== null);

  // 1. SWIPE/DRAG LOGIC
  const bind = useDrag(({ down, movement: [mx], direction: [dx], velocity, last }) => {
    // Only process if the drag is finished (mouse up/touch end) and the movement exceeds the threshold
    if (last) {
      if (mx < -SWIPE_THRESHOLD) {
        nextTestimonial();
      } else if (mx > SWIPE_THRESHOLD) {
        prevTestimonial();
      }
    }
  }, { axis: 'x', filterTaps: true }); // Only detect movement on the X-axis

  return (
    <section 
      className="py-24 bg-gray-950 text-white relative overflow-hidden" 
      data-scroll
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <motion.div
          data-scroll
          data-scroll-speed="1.2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-20"
        >
          <p className="text-sm tracking-widest text-cyan-400 uppercase mb-3 font-semibold">
            VOICES OF EXCELLENCE
          </p>
          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Client{" "}
            <span className={primaryGradient}>
              Testimonials
            </span>
          </h2>
        </motion.div>

        {/* 3D-Style Slider Interface - BIND MOUSE/TOUCH EVENTS HERE */}
        <div 
          {...bind()} // <-- Apply the useDrag binding
          className="relative h-[450px] w-full flex justify-center items-center cursor-grab md:cursor-grabbing active:cursor-grabbing"
          aria-live="polite" // Announce changes to screen readers
        >
          
          <AnimatePresence initial={false} custom={currentIndex}>
            {visibleCards.map((item) => {
              const isCenter = item.relativeIndex === 0;
              const isLeft = item.relativeIndex === -1;
              
              const zIndex = isCenter ? 50 : 10;
              const exitX = item.relativeIndex > 0 ? 300 : -300; 

              return (
                <motion.div
                  key={item.originalIndex} 
                  role="group" 
                  aria-roledescription="testimonial slide"
                  aria-label={`Testimonial ${item.originalIndex + 1} of ${total}`}

                  // Framer Motion Dynamic Animation
                  initial={{ 
                    x: isLeft ? -200 : isCenter ? 0 : 200, 
                    scale: isCenter ? 0.75 : 0.5, 
                    opacity: 0,
                  }}
                  animate={{ 
                    x: isLeft ? -200 : isCenter ? 0 : 200, 
                    scale: isCenter ? 1 : 0.75,
                    opacity: isCenter ? 1 : 0.4,
                    zIndex: zIndex,
                  }}
                  exit={{ 
                    x: exitX, 
                    opacity: 0, 
                    scale: 0.5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  
                  // Only center item has whileHover glow
                  whileHover={isCenter ? { scale: 1.05, boxShadow: "0 0 100px rgba(59, 130, 246, 0.8)" } : {}}
                  
                  className={`
                    absolute w-full max-w-[400px] h-auto p-8 rounded-xl
                    bg-gray-800/80 backdrop-blur-sm border border-blue-700/50 transform-gpu
                    ${isCenter ? 'border-cyan-400/70 shadow-[0_0_80px_rgba(59,130,246,0.6)]' : 'shadow-lg'}
                    md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    ${isCenter ? 'cursor-grab md:cursor-grabbing active:cursor-grabbing' : 'pointer-events-none'}
                  `}
                >
                  {/* Icon with Gradient */}
                  <div className="mb-4">
                    <span className={primaryGradient}>
                      <MessageCircle className="w-10 h-10" />
                    </span>
                  </div>

                  <p className="text-gray-300 italic mb-6 text-lg">
                    <span className="text-cyan-400 text-3xl font-serif mr-1">“</span>
                    {item.text}
                    <span className="text-cyan-400 text-3xl font-serif ml-1">”</span>
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-blue-700/50 pt-4 mt-2">
                    <h4 className="font-bold text-white text-xl">{item.name}</h4>
                    <p className="text-sm text-cyan-400">{item.role}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-6 pt-12">
            
            <motion.button
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-blue-700/70 bg-gray-900/50 text-cyan-400 
                           transition-all duration-300 hover:bg-blue-900/50 hover:border-cyan-400/70"
            >
                <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div 
                className="text-lg font-bold text-cyan-400"
                role="status" 
                aria-live="polite"
            >
                {currentIndex + 1} / {total}
            </div>

            <motion.button
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-blue-700/70 bg-gray-900/50 text-cyan-400 
                           transition-all duration-300 hover:bg-blue-900/50 hover:border-cyan-400/70"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
        </div>

      </div>
    </section>
  );
}
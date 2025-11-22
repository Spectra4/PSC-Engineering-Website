"use client";

import { useRef, useLayoutEffect } from "react"; // Using useLayoutEffect for DOM manipulation
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
// import { gsap } from "gsap"; // REMOVED: GSAP
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // REMOVED: ScrollTrigger

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // Use LocomotiveScroll type directly as we don't need the custom GSAP structure anymore
  const locoScrollRef = useRef<LocomotiveScroll | null>(null); 

  // Use useLayoutEffect for correct DOM initialization timing
  useLayoutEffect(() => {
    // Check for client-side environment and the DOM element
    if (typeof window === 'undefined' || !scrollRef.current) return;

    const scrollEl = scrollRef.current;

    // Initialize Locomotive Scroll
    locoScrollRef.current = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08, // smaller = smoother feel
      multiplier: 1.0,
      smartphone: { smooth: true }, 
    });

    // We no longer need the GSAP/ScrollTrigger proxy or updates.

    // Cleanup function
    return () => {
      // Safely destroy the instance and clear the ref
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
        locoScrollRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures it runs only on mount/unmount

  return (
    <div id="smooth-scroll" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
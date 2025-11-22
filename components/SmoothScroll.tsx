"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const locoScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollEl = scrollRef.current;

    // Initialize Locomotive Scroll
    locoScrollRef.current = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08, // smaller = smoother feel
      multiplier: 1.0,
      smartphone: { smooth: true, breakpoint: 0 },
      tablet: { smooth: true, breakpoint: 0 },
    });

    // Integrate GSAP ScrollTrigger with Locomotive Scroll
    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScrollRef.current!.scrollTo(value, 0, 0)
          : locoScrollRef.current!.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    // Update ScrollTrigger on Locomotive Scroll events
    locoScrollRef.current.on("scroll", ScrollTrigger.update);

    ScrollTrigger.addEventListener("refresh", () => locoScrollRef.current?.update());
    ScrollTrigger.refresh();

    return () => {
      locoScrollRef.current?.destroy();
      locoScrollRef.current = null;
    };
  }, []);

  return (
    <div id="smooth-scroll" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}

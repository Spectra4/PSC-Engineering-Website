"use client";

import React, { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

type SmoothScrollProps = {
  children?: React.ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    let scroll: any;
    import("locomotive-scroll").then((module) => {
      scroll = new module.default({
        el: containerRef.current!,
        smooth: true,
      });
    });

    return () => scroll && scroll.destroy();
  }, []);

  return <div data-scroll-container ref={containerRef}>{children}</div>;
}

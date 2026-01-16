"use client";

import React from "react";

type SmoothScrollProps = {
  children?: React.ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <div className="smooth-scroll-container">
      {children}
    </div>
  );
}

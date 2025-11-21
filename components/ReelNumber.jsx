// ReelNumber.jsx
"use client";
import ReelDigit from "./ReelDigit";

export default function ReelNumber({ number, suffix, indexBase = 0 }) {
  const digits = number.toString().split("");
  return (
    <div className="flex items-end justify-center gap-1">
      {digits.map((d, i) => (
        // add a small stagger by passing delayOffset (i * 0.08)
        <ReelDigit
          key={i}
          finalDigit={d}
          index={indexBase + i}
          delayOffset={i * 0.08}
        />
      ))}

      {/* static suffix */}
      {suffix && (
        <span className="text-primary font-bold text-3xl ml-2 self-center">
          {suffix}
        </span>
      )}
    </div>
  );
}

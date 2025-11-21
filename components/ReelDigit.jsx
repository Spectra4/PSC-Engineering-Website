// ReelDigit.jsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ReelDigit({ finalDigit, index, startEvent = "startReel", delayOffset = 0 }) {
  const wrapperRef = useRef(null);
  const columnRef = useRef(null);

  useEffect(() => {
    let ctx;
    const onStart = () => {
      const wrapper = wrapperRef.current;
      const column = columnRef.current;
      if (!wrapper || !column) return;

      // Digit elements: we'll build a column of numbers 0-9 repeated
      // to allow continuous spinning; GSAP will animate translateY.
      // Ensure each number's height (digitHeight) is measured.
      const digitItems = column.querySelectorAll(".reel-item");
      const digitHeight = digitItems[0]?.offsetHeight || 1;
      const digitsCount = digitItems.length;

      // Final target is the last occurrence of finalDigit in our column stack.
      // We'll compute final offset so finalDigit aligns in view.
      // We'll animate with 3 phases: fast spin, medium spin, smooth final roll.

      // Build timeline:
      const tl = gsap.timeline();

      // 1) Fast spin: 0.35s per loop, make ~3 full rotations (loop count)
      const fastRotations = 3; // how many full 0-9 rotations quickly
      const fastDistance = digitHeight * 10 * fastRotations; // 10 digits per rotation

      tl.to(column, {
        y: `-=${fastDistance}`,
        duration: 0.9,
        ease: "power2.in",
      });

      // 2) Medium spin: slower additional rotations
      const mediumRotations = 2;
      const mediumDistance = digitHeight * 10 * mediumRotations;
      tl.to(column, {
        y: `-=${mediumDistance}`,
        duration: 1.0,
        ease: "power2.out",
      });

      // 3) Smooth roll to final digit (calculate nearest landing position)
      // Find current y (as number) after previous animations
      // We'll compute how many extra steps to land on the final digit's last occurrence.
      tl.call(() => {
        const computedY = gsap.getProperty(column, "y");
        // Convert to positive offset
        const currentOffset = -computedY;

        // Find index (position) of finalDigit in the column, we want the nearest next occurrence after currentOffset
        let targetIndex = -1;
        // Collect positions of each matching digit in column
        const positions = [];
        digitItems.forEach((el, idx) => {
          if (el.dataset.digit === String(finalDigit)) {
            positions.push(idx);
          }
        });

        // If no positions found (unlikely) fallback to first occurrence
        if (positions.length === 0) {
          positions.push(0);
        }

        // Now find the first occurrence index that's > currentRotationIndex
        // Each item position * digitHeight = absolute offset position
        let chosenPos = positions[0];
        for (let p of positions) {
          const posOffset = p * digitHeight;
          if (posOffset > currentOffset) {
            chosenPos = p;
            break;
          }
        }
        // If none is greater (we spun past), choose the first occurrence after looping once more:
        if (positions.every((p) => p * digitHeight <= currentOffset)) {
          chosenPos = positions[0] + Math.ceil((currentOffset - positions[0] * digitHeight) / (10 * digitHeight)) * 10;
        }

        // compute finalDistance to move from currentOffset to chosenPos
        const finalDistance = chosenPos * digitHeight - currentOffset;
        // Save finalDistance on wrapper for the next tween
        wrapper.dataset.finalDistance = finalDistance;
      });

      // perform final smooth roll (use small duration, ease)
      tl.to(column, {
        y: `-=${0}`, // placeholder, we'll use function-based value below
        duration: 0.9,
        ease: "power4.out",
        onStart: function () {
          // read finalDistance we stored
          const finalDistance = parseFloat(wrapper.dataset.finalDistance || "0");
          // animate by that exact amount
          gsap.to(column, { y: `-=${finalDistance}`, duration: 0.9, ease: "power4.out" });
        },
      });

      // cleanup
      tl.call(() => {
        // ensure final digit visible exactly: snap to nearest
        const finalSnap = Math.round(parseFloat(gsap.getProperty(column, "y")) / digitHeight) * digitHeight;
        gsap.set(column, { y: finalSnap });
      });

      // Stagger per-digit start by delayOffset (optional)
      if (delayOffset) {
        gsap.delayedCall(delayOffset, () => tl.play(0));
        tl.pause();
      }
    };

    // Listen to start event
    window.addEventListener(startEvent, onStart);

    return () => {
      window.removeEventListener(startEvent, onStart);
      // clear any GSAP instances on unmount (best effort)
      gsap.killTweensOf(columnRef.current);
      gsap.killTweensOf(wrapperRef.current);
    };
  }, [finalDigit, index, startEvent, delayOffset]);

  // build a column with repeated 0-9 sequences (enough length for spins)
  const buildDigits = () => {
    // number of cycles = total repeated sets of 0-9
    // choose 6 cycles so we have enough content to spin
    const cycles = 8;
    const arr = [];
    for (let c = 0; c < cycles; c++) {
      for (let d = 0; d < 10; d++) {
        arr.push(d);
      }
    }
    // append final sequence at end to ensure landing position exists
    for (let d = 0; d < 10; d++) arr.push(d);
    return arr;
  };

  const digits = buildDigits();

  return (
    <div className="relative w-14 h-20 overflow-hidden mx-1">
      <div
        ref={wrapperRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: 900 }}
      >
        <div ref={columnRef} className="flex flex-col items-center will-change-transform">
          {digits.map((d, i) => (
            <div
              key={i}
              data-digit={d}
              className="reel-item w-full text-center text-4xl font-extrabold py-1 leading-[1] select-none"
              style={{ height: "56px", lineHeight: "56px" }}
            >
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !barRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.15,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100060] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
        className="w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
      />
    </div>
  );
}

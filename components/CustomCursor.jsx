"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorText, setCursorText] = useState("");
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer and when reduced-motion is not requested
    if (typeof window === "undefined" || prefersReducedMotion()) return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Use GSAP quickTo for high performance 60/120fps mouse following without lag
    const setDotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });
    const setRingX = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power3" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power3" });

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);

      // Check element under cursor for interactive states
      const target = e.target;
      if (!target) return;

      const projectTarget = target.closest("[data-cursor='view'], [data-cursor-project]");
      if (projectTarget) {
        setIsHoveringProject(true);
        setIsHoveringLink(false);
        setCursorText(projectTarget.getAttribute("data-cursor-text") || "VIEW");
        return;
      } else {
        setIsHoveringProject(false);
        setCursorText("");
      }

      const interactive = target.closest("a, button, input, textarea, select, [role='button'], .clickable");
      if (interactive) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      {/* Precision inner center dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-cyan-400 pointer-events-none z-[100070] transition-opacity duration-300 hidden md:block ${
          isVisible && !isHoveringProject ? "opacity-100" : "opacity-0"
        } ${isHoveringLink ? "scale-150 bg-white" : ""}`}
      />

      {/* Smooth outer follower ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[100069] transition-[opacity,width,height,transform,background-color,border-color] duration-200 hidden md:flex items-center justify-center rounded-full ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isHoveringProject
            ? "w-20 h-20 -ml-10 -mt-10 bg-cyan-400 text-slate-950 font-mono text-[11px] font-bold tracking-wider shadow-[0_0_30px_rgba(6,182,212,0.6)] border border-cyan-300 scale-100"
            : isHoveringLink
            ? "w-11 h-11 -ml-[22px] -mt-[22px] border border-cyan-400/80 bg-cyan-400/10 backdrop-blur-[2px] scale-110"
            : "w-8 h-8 -ml-4 -mt-4 border border-white/30 bg-transparent"
        }`}
      >
        {isHoveringProject && (
          <span className="select-none tracking-widest">{cursorText}</span>
        )}
      </div>
    </>
  );
}

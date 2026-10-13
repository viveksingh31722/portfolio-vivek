"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Checks if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Connects Lenis smooth scroll instance with GSAP ScrollTrigger & Ticker
 * @param {import('lenis').default} lenisInstance
 */
export const setupLenisWithGsap = (lenisInstance) => {
  if (typeof window === "undefined" || !lenisInstance) return () => {};

  // Update ScrollTrigger on every Lenis scroll
  const onScroll = () => {
    ScrollTrigger.update();
  };
  lenisInstance.on("scroll", onScroll);

  // Sync GSAP ticker with Lenis raf
  const tickerCallback = (time) => {
    lenisInstance.raf(time * 1000);
  };
  gsap.ticker.add(tickerCallback);

  // Avoid lag smoothing jumps with smooth scrolling
  gsap.ticker.lagSmoothing(0);

  return () => {
    lenisInstance.off("scroll", onScroll);
    gsap.ticker.remove(tickerCallback);
  };
};

/**
 * Creates a standard premium reveal animation for a container
 */
export const createScrollReveal = (element, options = {}) => {
  if (typeof window === "undefined" || !element || prefersReducedMotion()) {
    if (element) gsap.set(element, { opacity: 1, y: 0 });
    return;
  }

  const {
    trigger = element,
    start = "top 85%",
    duration = 0.9,
    delay = 0,
    y = 35,
    ease = "power3.out",
    stagger = 0,
  } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger,
        start,
        once: true,
      },
    }
  );
};

export { gsap, ScrollTrigger };

"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { setupLenisWithGsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap";

const LenisContext = createContext(null);

export default function SmoothScrollProvider({ children }) {
  const [lenis, setLenis] = useState(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    // If user prefers reduced motion, do not initialize smooth inertia scroll
    if (prefersReducedMotion()) {
      return;
    }

    const lenisInstance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    // Sync Lenis with GSAP ScrollTrigger and Ticker
    const cleanupGsap = setupLenisWithGsap(lenisInstance);

    // Intercept standard in-page hash anchor clicks to scroll smoothly with Lenis
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;
      
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          lenisInstance.scrollTo(element, {
            offset: -70,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
          // Update URL hash without jumping
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    // Refresh ScrollTrigger after fonts/DOM loaded
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      cleanupGsap();
      lenisInstance.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}

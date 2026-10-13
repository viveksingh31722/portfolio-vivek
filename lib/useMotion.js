"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Reusable hook to animate elements on enter viewport
 */
export function useScrollReveal({
  y = 35,
  opacity = 0,
  duration = 0.85,
  delay = 0,
  stagger = 0.1,
  start = "top 85%",
  once = true,
  ease = "power3.out",
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;

    const el = ref.current;
    const ctx = gsap.context(() => {
      // If element has children with .reveal-item class, animate them staggered
      const targets = el.querySelectorAll(".reveal-item").length > 0
        ? el.querySelectorAll(".reveal-item")
        : el;

      gsap.fromTo(
        targets,
        { opacity, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: targets.length > 1 ? stagger : 0,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            once,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, opacity, duration, delay, stagger, start, once, ease]);

  return ref;
}

/**
 * Reusable hook for subtle scrub-based vertical parallax
 */
export function useParallax({
  yPercent = -10,
  start = "top bottom",
  end = "bottom top",
  ease = "none",
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;

    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: 0.5,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [yPercent, start, end, ease]);

  return ref;
}

/**
 * Reusable hook for agency-style clip-path and scale image reveal
 */
export function useImageReveal({
  start = "top 80%",
  duration = 1.1,
  ease = "power3.out",
} = {}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current || !imageRef.current) return;

    const container = containerRef.current;
    const img = imageRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start,
          once: true,
        },
      });

      tl.fromTo(
        container,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration,
          ease,
        }
      );

      tl.fromTo(
        img,
        { scale: 1.12 },
        {
          scale: 1,
          duration: duration * 1.15,
          ease: "power2.out",
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, [start, duration, ease]);

  return { containerRef, imageRef };
}

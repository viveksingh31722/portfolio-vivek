"use client";
import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  cursorText = "VIEW",
  enableParallax = true,
  parallaxAmount = -8,
  priority = false,
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current || !imageRef.current) return;

    const container = containerRef.current;
    const img = imageRef.current;

    const ctx = gsap.context(() => {
      // 1. Entrance Reveal: clip-path inset + scale down to 1
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once: true,
        },
      });

      tl.fromTo(
        container,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.1,
          ease: "power3.out",
        }
      );

      tl.fromTo(
        img,
        { scale: 1.12 },
        {
          scale: 1,
          duration: 1.3,
          ease: "power2.out",
        },
        0
      );

      // 2. Scroll Parallax (subtle yPercent scrub)
      if (enableParallax) {
        gsap.to(img, {
          yPercent: parallaxAmount,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [enableParallax, parallaxAmount]);

  return (
    <div
      ref={containerRef}
      data-cursor="view"
      data-cursor-text={cursorText}
      className={`overflow-hidden relative ${className}`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform ${imgClassName}`}
      />
    </div>
  );
}

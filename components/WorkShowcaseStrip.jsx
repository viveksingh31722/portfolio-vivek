"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const showcaseItems = [
  {
    title: "MedTrackInsight",
    tag: "BIOTECH & DATA CONSOLE",
    image: "/medtrackInsigh_cover.png",
    metric: "<100ms latency",
    href: "#projects",
  },
  {
    title: "DocuLens AI Assistant",
    tag: "GROUNDED RAG & NEXT.JS 16",
    image: "/docuLens_cover.png",
    metric: "0 hallucinations",
    href: "#chapter-04",
  },
  {
    title: "Subsea Field Configurator",
    tag: "ELECTRON & JOINTJS CANVAS",
    image: "/subsea-cover.png",
    metric: "60 FPS 2D graph",
    href: "#work",
  },
  {
    title: "Real-Time Microservices",
    tag: "SOCKET.IO & RABBITMQ",
    image: "/chat-app-cover.png",
    metric: "Sub-50ms sync",
    href: "#chapter-03",
  },
  {
    title: "Engineering Journal",
    tag: "ASME IMECE CONGRESS",
    image: "/field-notes/imece-2026/imece-presentation-stage.png",
    metric: "Field Note // 001",
    href: "#field-notes",
  },
];

export default function WorkShowcaseStrip() {
  const trackRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !trackRef.current) return;

    // Smooth horizontal scroll-linked drift
    const track = trackRef.current;
    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: track,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, track);

    return () => ctx.revert();
  }, []);

  // Double the array for seamless visual width
  const items = [...showcaseItems, ...showcaseItems];

  return (
    <div className="w-full py-8 sm:py-12 overflow-hidden bg-[#02050f] relative border-y border-white/5">
      {/* Subtle edge vignette fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      {/* Top Section Eyebrow (Konrad style: minimal uppercase label with pulse dot) */}
      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between font-mono text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="uppercase tracking-widest text-slate-300 font-bold">PRODUCTION REPERTOIRE</span>
        </div>
        <span className="text-slate-600 hidden sm:inline">DRAG & SCROLL INTERACTIVE SHOWCASE</span>
      </div>

      {/* Drifting Strip Track */}
      <div
        ref={trackRef}
        className="flex gap-4 sm:gap-6 w-max will-change-transform"
      >
        {items.map((item, idx) => (
          <a
            key={`${item.title}-${idx}`}
            href={item.href}
            data-cursor="view"
            data-cursor-text="EXPLORE"
            className="group relative w-64 sm:w-80 h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/60 bg-[#070b16] shrink-0 transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_45px_rgba(6,182,212,0.25)] hover:-translate-y-1 block"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />

            {/* Top Tag & Metric Badge */}
            <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono z-10">
              <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-cyan-300 border border-white/10 uppercase tracking-wider">
                {item.tag}
              </span>
              <span className="text-emerald-400 font-bold bg-black/75 px-1.5 py-0.5 rounded border border-emerald-500/30">
                {item.metric}
              </span>
            </div>

            {/* Bottom Title & Action */}
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end z-10">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow">
                  {item.title}
                </h4>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300">
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

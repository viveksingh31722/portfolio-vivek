"use client";
import { useEffect, useRef } from "react";
import { Compass, Cpu, Layers, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function ChapterStarted() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="chapter-01"
      className="py-20 md:py-32 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/5 relative bg-[#030712] scroll-mt-32"
    >
      {/* Chapter Label */}
      <div className="flex justify-center mb-6">
        <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 uppercase tracking-widest text-center">
          CHAPTER 01 — WHERE IT STARTED
        </span>
      </div>

      <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          What happens when{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            engineering
          </span>{" "}
          meets software?
        </h2>
        <p className="text-slate-400 text-base sm:text-xl font-light leading-relaxed">
          My transition into professional software engineering wasn't about simple template sites—it was about translating physical engineering constraints into clean, high-performance digital tools.
        </p>
      </div>

      {/* Modern Full-Width Narrative Card */}
      <div
        ref={cardRef}
        className="bg-[#090e1c]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-8 hover:border-cyan-400/30 transition-colors duration-500"
      >
        <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
          <Compass size={17} />
          <span>THE ORIGIN STORY</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
          Building software for real-world physical constraints.
        </h3>

        <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl font-light">
          <p>
            At <strong className="text-white font-medium">IDG10 Engineering Solutions</strong>, I stepped directly into the intersection of complex mechanical & marine calculations and modern web applications.
          </p>
          <p>
            When subsea engineers design offshore oil and gas field layouts, calculating pipe stress limits, vessel choices, and real-time cost estimations manually took days. The challenge was building an interactive tool that runs complex physics calculations instantly in the browser.
          </p>
        </div>

        {/* Horizontal Key Realization Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-colors duration-300 group">
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm mb-2 group-hover:text-purple-300 transition-colors">
              <Cpu size={16} />
              <span>Performance is UI</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              A 100ms calculation lag on interactive canvas layouts breaks engineer focus. Optimization isn't an afterthought—it's core usability.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-400/30 transition-colors duration-300 group">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2 group-hover:text-emerald-300 transition-colors">
              <Layers size={16} />
              <span>Architecture Matters</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Decoupling interactive UI canvases from backend computation engines allowed us to increase efficiency by 25% and boost reliability by 60%.
            </p>
          </div>
        </div>

        {/* Role Metadata Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 text-xs font-mono text-slate-400">
          <span className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/5">
            Role: Software Engineer
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            IDG10 Engineering Solutions
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-400 border border-white/5">
            Aug 2024 – Present
          </span>
        </div>
      </div>

      {/* Chapter Transition Link */}
      <div className="flex justify-center">
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer"
        >
          <span>Continue to Chapter 02: Building Real Systems</span>
          <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}

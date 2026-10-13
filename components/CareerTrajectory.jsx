"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Cpu, Layers, Sparkles, Code2 } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function CareerTrajectory() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const steps = [
    {
      label: "THEN",
      title: "Building Applications",
      desc: "Learning core full-stack software development, UI state management, and relational database schemas.",
      accent: "cyan",
    },
    {
      label: "NOW",
      title: "Building Full-Stack Systems",
      desc: "Engineering interactive subsea configurators, high-concurrency microservices, and low-latency WebSocket backends.",
      accent: "purple",
    },
    {
      label: "NEXT",
      title: "Building Intelligent Software",
      desc: "Combining full-stack software engineering with grounded RAG pipelines and autonomous agentic workflows.",
      accent: "emerald",
    },
  ];

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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".trajectory-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
      className="py-20 md:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10 relative bg-[#030712] scroll-mt-32"
    >
      <div className="flex justify-center mb-6">
        <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-xs font-mono text-cyan-300 uppercase tracking-widest text-center">
          CHAPTER 10 — THE CAREER TRAJECTORY
        </span>
      </div>

      <div
        ref={headerRef}
        className="text-center mb-16 max-w-3xl mx-auto space-y-3"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Where engineering is heading.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
          Software development evolves from isolated scripts to scalable systems, and now to intelligent software.
        </p>
      </div>

      {/* Trajectory Cards Grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        {steps.map((step, idx) => (
          <div
            key={step.label}
            className="trajectory-card p-6 sm:p-8 rounded-3xl bg-[#090e1c]/80 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_15px_35px_rgba(6,182,212,0.12)] hover:-translate-y-1.5 transition-all duration-300 space-y-4 relative shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-bold">
                  {step.label}
                </span>
                <span className="text-slate-600 font-bold">0{idx + 1}</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {step.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Career Formula Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-slate-950 border border-white/15 text-center space-y-6 shadow-2xl">
        <div className="flex justify-center">
          <Sparkles className="text-cyan-400 w-8 h-8 animate-pulse" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider">
          <span className="px-3 py-1 rounded bg-white/10 text-cyan-300">FULL STACK</span>
          <span>+</span>
          <span className="px-3 py-1 rounded bg-white/10 text-purple-300">DISTRIBUTED SYSTEMS</span>
          <span>+</span>
          <span className="px-3 py-1 rounded bg-white/10 text-emerald-300">GROUNDED AI</span>
          <span>=</span>
          <span className="px-4 py-1.5 rounded-full bg-cyan-500 text-black font-extrabold shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            INTELLIGENT SOFTWARE
          </span>
        </div>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-light">
          Combining clean UI architecture with robust backend microservices and reliable AI context models.
        </p>
      </div>
    </section>
  );
}

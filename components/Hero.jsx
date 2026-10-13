"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, FastForward, Terminal, Download, MapPin, Sparkles, Cpu, Code2, Activity } from "lucide-react";
import { useQuickView } from "@/lib/QuickViewContext";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import TextRoll from "./TextRoll";

export default function Hero({ onOpenQuickView: propOnOpenQuickView }) {
  const { openQuickView: contextOpenQuickView } = useQuickView();
  const handleOpenQuickView = propOnOpenQuickView || contextOpenQuickView;

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const badgeRef = useRef(null);
  const descRef = useRef(null);
  const manifestRef = useRef(null);
  const ctaRef = useRef(null);
  const portraitCardRef = useRef(null);
  const portraitImageRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Timeline for cinematic load sequence
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 0.0s: Badge & metadata
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 }
        );
      }

      // 0.2s: Heading lines staggered
      if (headingRef.current) {
        const lines = headingRef.current.querySelectorAll(".hero-line");
        tl.fromTo(
          lines,
          { opacity: 0, y: 45 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          "-=0.4"
        );
      }

      // 0.5s: Description text
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );
      }

      // 0.65s: Developer manifest card
      if (manifestRef.current) {
        tl.fromTo(
          manifestRef.current,
          { opacity: 0, y: 30, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.5"
        );
      }

      // 0.8s: Action CTAs
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          "-=0.5"
        );
      }

      // Right column portrait card reveal
      if (portraitCardRef.current) {
        tl.fromTo(
          portraitCardRef.current,
          { opacity: 0, scale: 0.94, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power3.out" },
          0.3
        );
      }

      // Scroll-linked subtle parallax on desktop portrait
      if (portraitCardRef.current && sectionRef.current) {
        gsap.to(portraitCardRef.current, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }
    }, sectionRef);

    // Subtle 3D tilt interaction on desktop
    const card = portraitCardRef.current;
    if (card && window.matchMedia("(pointer: fine)").matches) {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          duration: 0.4,
          ease: "power1.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="chapter-00"
      className="min-h-screen relative flex flex-col justify-start md:justify-center px-4 sm:px-6 pt-16 md:pt-40 sm:pt-48 pb-12 md:pb-24 overflow-hidden bg-[#030712] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.18),rgba(3,7,18,1))] scroll-mt-32"
    >
      {/* Background Radial Glows & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[450px] h-[280px] bg-gradient-to-bl from-emerald-500/15 via-cyan-500/15 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 md:space-y-14">
        {/* Top Status & Location Bar (Desktop & Tablet) */}
        <div
          ref={badgeRef}
          className="hidden md:flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for work, worldwide</span>
            </span>
            <span className="text-slate-600">/</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin size={13} className="text-cyan-400" />
              <span>Lucknow / Noida, India</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>SYS_STATUS:</span>
            <span className="text-cyan-400 font-bold">100% OPERATIONAL</span>
          </div>
        </div>

        {/* DEDICATED EDITORIAL MOBILE HERO COMPOSITION (SCREENS < 768px) */}
        <div className="md:hidden flex flex-col justify-start -mx-4 sm:-mx-6 pb-6 relative overflow-hidden">
          {/* Full-Bleed Portrait Photo */}
          <div className="relative w-full h-[54dvh] max-h-[500px] overflow-hidden bg-[#030712]">
            <img
              src="/vivek-profile.jpg"
              alt="Vivek Singh"
              className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.98] saturate-[0.88]"
            />
            <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-[#030712]/40 to-transparent z-10" />
            <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent z-10 pointer-events-none" />
          </div>

          {/* Text Content */}
          <div className="px-6 relative z-10 -mt-10 space-y-4">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest block">
              FULL-STACK & AI SYSTEMS
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Hello, I'm Vivek <br />
              Singh.
            </h1>

            <p className="text-slate-300 text-base leading-relaxed font-sans max-w-md">
              Building production-grade software systems, engineering tools and AI-powered applications.
            </p>

            <div className="pt-3 flex flex-col gap-3">
              <a
                href="#chapter-01"
                className="w-full py-4 rounded-2xl bg-white text-black font-semibold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-98 transition-transform"
              >
                <span>START THE STORY</span>
                <ArrowRight size={16} />
              </a>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 px-1 text-[11px] sm:text-xs">
                <button
                  onClick={handleOpenQuickView}
                  className="font-mono text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer py-1"
                >
                  <Sparkles size={13} />
                  <span>Recruiter Summary</span>
                </button>

                <a
                  href="#work"
                  className="font-mono text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 py-1"
                >
                  <span>Skip to work →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP & TABLET 2-COLUMN SPLIT SHOWCASE (SCREENS >= 768px) */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story Headline & Interactive Developer Config */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-xs font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
              <Terminal size={14} className="text-cyan-400" />
              <span>CHAPTER 00 — THE STORY BEGINS</span>
            </div>

            <div ref={headingRef}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                <div className="hero-line overflow-hidden">
                  <span>Hey, I'm Vivek —</span>
                </div>
                <div className="hero-line overflow-hidden">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                    Full-Stack & AI Systems
                  </span>{" "}
                  <span>Engineer.</span>
                </div>
              </h1>
            </div>

            <p
              ref={descRef}
              className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-light"
            >
              Every developer has a stack. Behind every stack, there's a story. I build production-ready applications from raw code to microservices, subsea configurators, and grounded AI.
            </p>

            {/* Developer Config Card */}
            <div
              ref={manifestRef}
              className="p-5 rounded-2xl bg-[#090e1c]/80 backdrop-blur-md border border-white/15 font-mono text-xs text-slate-300 space-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)] group"
            >
              <div className="flex items-center justify-between text-slate-500 text-[10px] pb-2 border-b border-white/10">
                <span className="group-hover:text-cyan-400 transition-colors">developer_manifest.json</span>
                <span className="text-cyan-400">v2026.1</span>
              </div>
              <div className="text-purple-300"><span className="text-slate-500">const</span> engineer = &#123;</div>
              <div className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"Vivek Singh"</span>,</div>
              <div className="pl-4"><span className="text-slate-400">coreFocus:</span> <span className="text-cyan-300">"Full-Stack, Distributed Microservices & AI RAG"</span>,</div>
              <div className="pl-4"><span className="text-slate-400">techStack:</span> [<span className="text-amber-300">"Next.js 16"</span>, <span className="text-amber-300">"Node.js"</span>, <span className="text-amber-300">"PostgreSQL"</span>, <span className="text-amber-300">"Gemini API"</span>],</div>
              <div className="text-purple-300">&#125;;</div>
            </div>

            {/* Action Buttons with Micro-Interactions */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleOpenQuickView}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-cyan-500 text-black font-mono font-bold text-xs hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles size={16} className="text-black group-hover:scale-110 transition-transform" />
                <TextRoll rollColor="text-slate-900">⚡ RECRUITER FAST-TRACK</TextRoll>
              </button>

              <a
                href="#chapter-01"
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <TextRoll>Explore story</TextRoll>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>

              <a
                href="#work"
                className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-white/[0.06] border border-white/15 text-slate-200 font-mono text-xs hover:bg-white/10 hover:border-cyan-400/50 hover:text-white transition-all duration-300 active:scale-95 group shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <FastForward size={15} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <TextRoll>Skip to work</TextRoll>
              </a>
            </div>
          </div>

          {/* Right Column: Holographic Cyber-Glass Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={portraitCardRef}
              data-cursor="view"
              data-cursor-text="VIVEK"
              className="relative w-full max-w-[430px] p-[2px] rounded-3xl bg-gradient-to-tr from-cyan-400/50 via-purple-500/40 to-emerald-400/50 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(6,182,212,0.3)] group transition-shadow duration-500 hover:shadow-[0_30px_90px_rgba(6,182,212,0.45)]"
            >
              <div className="w-full h-full bg-[#080d1b] rounded-[22px] overflow-hidden relative">
                {/* Top Desktop Window Bar inside Photo Card */}
                <div className="px-5 py-3 bg-[#030712]/90 border-b border-white/15 flex justify-between items-center z-20 relative">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-wider">
                    VIVEK_SINGH.SYS
                  </span>
                </div>

                {/* High-Resolution Portrait Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    ref={portraitImageRef}
                    src="/vivek-profile.jpg"
                    alt="Vivek Singh"
                    className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Specular Rim Light & Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent opacity-90 pointer-events-none" />
                  <div className="absolute inset-0 border border-white/15 rounded-[22px] pointer-events-none" />

                  {/* Floating Interactive Tech Pills Overlay */}
                  <div className="absolute bottom-16 left-4 right-4 flex flex-wrap gap-1.5 z-10">
                    {["Next.js 16", "Node.js", "PostgreSQL", "Gemini API", "JointJS"].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-cyan-400/40 shadow-lg hover:border-cyan-300 hover:text-white transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Author Details Footer Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end z-10 pt-2 border-t border-white/15">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight drop-shadow-md">
                        Vivek Singh
                      </h3>
                      <p className="text-[10px] font-mono text-purple-300 font-semibold tracking-wider uppercase">
                        FULL-STACK & AI SYSTEMS
                      </p>
                    </div>

                    <div className="text-[10px] font-mono text-emerald-400 bg-black/85 backdrop-blur-md px-2 py-0.5 rounded border border-emerald-500/40">
                      IN · 26.8°N
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

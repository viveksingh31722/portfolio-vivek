"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, CheckCircle2, Layout, AlertTriangle, ShieldCheck, BookOpen } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal";
import ImageReveal from "./ImageReveal";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function ChapterBuildingSystems() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHood, setShowHood] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const caseStudyData = {
    title: "Subsea Field Configurator",
    summary: "A digital desktop platform to design and simulate subsea oil & gas field configurations with real-time layout comparison and instant cost estimation.",
    category: "Desktop & Engineering Systems",
    role: "Software Engineer (IDG10)",
    scope: "Interactive canvas engine, physics calculation logic, desktop packaging",
    platform: "Desktop App (Electron)",
    link: "https://github.com/IshaanShettigar/SFC-iDG10",
    github: "https://github.com/IshaanShettigar/SFC-iDG10",
    tags: ["JavaScript", "Node.js", "Electron", "JointJS Canvas Engine", "Tailwind CSS"],
    whyTitle: "Subsea engineering layout calculations took days of manual spreadsheet work.",
    whyThisExists: "Offshore oil and gas field layouts require evaluating pipeline stress limits, vessel selection parameters, and material cost breakdowns across multiple disconnected spreadsheets. Subsea Field Configurator brings real-time layout feedback into one interactive workspace.",
    problemTitle: "No real-time feedback when modifying 2D/3D subsea layout elements.",
    problemDetails: "Manual estimations made layout iteration painfully slow. A single pipeline route adjustment meant hours of re-entering values across isolated calculation tools with zero instant cost feedback.",
    coreIdeaTitle: "Interactive node-based canvas coupled with an instant calculation engine.",
    howItWorks: [
      { title: "1. Drag & Drop Elements", desc: "Subsea manifolds, trees, and pipelines placed directly on the interactive JointJS canvas." },
      { title: "2. Define Connections", desc: "Pipelines and umbilical lines automatically snapping to valid connection ports." },
      { title: "3. Instant Stress & Cost Engine", desc: "Calculates material costs, vessel daily rates, and stress boundaries on the fly." },
      { title: "4. Export BoM & Reports", desc: "Generates Bill of Materials (BoM) and cost comparison breakdowns in one click." }
    ],
    hardPartTitle: "Decoupling high-frequency canvas rendering from physics calculation loops.",
    hardPart: "To keep the JointJS canvas smooth at 60 FPS while running heavy engineering calculations in the background, we decoupled the rendering layer from the calculation engine, preventing UI stutters during complex drag operations.",
    metrics: [
      { val: "25%", label: "Workflow calculation speedup" },
      { val: "60%", label: "QA & calculation accuracy improvement" },
      { val: "100%", label: "Offline desktop execution via Electron" },
      { val: "60 FPS", label: "Smooth interactive canvas drag rate" }
    ]
  };

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

      [step1Ref, step2Ref, step3Ref].forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 82%",
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="work"
        className="py-16 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto border-t border-white/5 relative bg-[#030712] scroll-mt-32"
      >
        {/* Chapter Label */}
        <div className="flex justify-center mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 uppercase tracking-widest text-center">
            CHAPTER 02 — BUILDING REAL SYSTEMS
          </span>
        </div>

        <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Subsea Field Configurator
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Designing an interactive engineering workspace for subsea layout comparison & real-time cost estimation.
          </p>
        </div>

        <div className="space-y-8">
          {/* STEP 01: THE PROBLEM & CONSTRAINTS */}
          <div
            ref={step1Ref}
            className="bg-[#090e1c]/80 backdrop-blur-md border border-amber-500/20 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-4"
          >
            <div className="flex items-center gap-2.5 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <AlertTriangle size={17} />
              <span>01. THE PROBLEM & CONSTRAINTS</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Manual, Error-Prone Estimations & Fragmented Spreadsheets
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl font-light">
              Subsea oil & gas field layout configuration traditionally required days of manual calculation. Engineers were forced to cross-reference pipeline stress limits, vessel selection parameters, and material cost breakdowns across multiple disconnected spreadsheets.
            </p>
          </div>

          {/* STEP 02: THE DESKTOP APP SHOWCASE */}
          <div
            ref={step2Ref}
            className="bg-[#0b0f19]/90 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] hover:border-cyan-400/30 transition-colors duration-500"
          >
            {/* Window Header */}
            <div className="px-6 py-4 bg-slate-900/90 border-b border-white/10 flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="text-xs font-mono text-slate-400 font-medium hidden sm:inline">
                  Subsea Field Configurator v1.0 — Interactive Engineering Canvas
                </span>
              </div>

              <div className="flex gap-2.5">
                <button
                  onClick={() => setShowHood(!showHood)}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono transition-all border cursor-pointer ${
                    showHood
                      ? "bg-cyan-500 text-black font-bold border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                      : "bg-cyan-500/15 border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/25"
                  }`}
                >
                  <span>{showHood ? "PRODUCT VIEW" : "OPEN THE HOOD →"}</span>
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-200 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <BookOpen size={14} />
                  <span>Case Study</span>
                </button>
              </div>
            </div>

            {/* Content Display: Product Screenshot vs Open The Hood System View */}
            {showHood ? (
              <div className="p-6 sm:p-10 bg-[#070b16] font-mono space-y-6">
                <div className="flex justify-between items-center text-xs text-cyan-400 pb-3 border-b border-white/10">
                  <span className="font-bold">SYSTEM ARCHITECTURE — SUBSEA FIELD CONFIGURATOR</span>
                  <span className="text-slate-500">DECOUPLED CANVAS & PHYSICS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-xs">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 relative">
                    <span className="text-slate-500 block text-[10px]">01. FRONTEND / USER</span>
                    <span className="font-bold text-white block mt-1">Subsea Engineer</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">Drag 2D Nodes</span>
                    <div className="sm:hidden text-cyan-400 text-xs mt-2">↓</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-cyan-500/30 relative">
                    <span className="text-cyan-400 block text-[10px]">02. DESKTOP RUNTIME</span>
                    <span className="font-bold text-cyan-300 block mt-1">Electron Shell</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">Offline OS Bridge</span>
                    <div className="sm:hidden text-cyan-400 text-xs mt-2">↓</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-500/30 relative">
                    <span className="text-purple-400 block text-[10px]">03. CANVAS LAYER</span>
                    <span className="font-bold text-purple-300 block mt-1">JointJS Graph</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">60 FPS Rendering</span>
                    <div className="sm:hidden text-cyan-400 text-xs mt-2">↓</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-emerald-500/30 relative">
                    <span className="text-emerald-400 block text-[10px]">04. MATH ENGINE</span>
                    <span className="font-bold text-emerald-300 block mt-1">Physics Engine</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">Stress Limits Math</span>
                    <div className="sm:hidden text-cyan-400 text-xs mt-2">↓</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-slate-500 block text-[10px]">05. OUTPUT & DATA</span>
                    <span className="font-bold text-white block mt-1">BoM & Costs</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">Instant Excel / PDF</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-300 font-sans leading-relaxed">
                  <strong className="text-cyan-300 font-mono">Engineering Design Decision:</strong> Decoupling JointJS drag-and-drop event loops from heavy physical calculation loops prevented UI stutters during complex layout operations, boosting calculation speed by 25%.
                </div>
              </div>
            ) : (
              <div
                className="p-4 sm:p-8 bg-slate-950/60 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group relative">
                  <ImageReveal
                    src="/subsea-cover.png"
                    alt="Subsea Field Configurator Interface"
                    className="w-full h-auto"
                    imgClassName="group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    cursorText="CASE STUDY"
                    parallaxAmount={-6}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold text-xs flex items-center gap-2 shadow-2xl">
                      <BookOpen size={16} /> Read Full Case Study
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Tech Badges Footer */}
            <div className="px-6 py-4 bg-slate-900/50 border-t border-white/10 flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">TECH STACK:</span>
              {["JavaScript (ES6+)", "Node.js", "Electron", "JointJS Canvas Engine", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 text-xs font-mono text-cyan-300 rounded-lg border border-white/5 hover:border-cyan-400/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* STEP 03: THE INTERACTIVE SOLUTION & RESULTS */}
          <div
            ref={step3Ref}
            className="bg-[#090e1c]/80 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Layout size={16} />
              <span>02. THE INTERACTIVE SOLUTION</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Real-Time JointJS Canvas & Dynamic Physics Engine
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl font-light">
              We engineered a desktop-native application using Electron and JointJS. Engineers can drag-and-drop subsea manifolds, pipelines, and umbilical cables onto a dynamic canvas, comparing layout options and recalculating total project costs dynamically.
            </p>

            {/* Metric Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-center hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl font-extrabold text-emerald-400 mb-1">+25%</div>
                <div className="text-xs text-slate-400 font-mono">Workflow Calculation Speedup</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-center hover:border-cyan-500/30 transition-colors">
                <div className="text-3xl font-extrabold text-cyan-400 mb-1">+60%</div>
                <div className="text-xs text-slate-400 font-mono">QA & Calculation Accuracy</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-center hover:border-purple-500/30 transition-colors">
                <div className="text-3xl font-extrabold text-purple-400 mb-1">100%</div>
                <div className="text-xs text-slate-400 font-mono">Offline Desktop Reliability</div>
              </div>
            </div>

            <div className="pt-4 flex justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all cursor-pointer group"
              >
                <BookOpen size={15} />
                <span>Read Deep-Dive Case Study</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={caseStudyData}
      />
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import { ArrowRight, FastForward, Terminal, Download, MapPin, Sparkles, Cpu, Code2, Activity } from "lucide-react";

export default function Hero({ onOpenQuickView }) {
  return (
    <section 
      id="chapter-00" 
      className="min-h-screen relative flex flex-col justify-start md:justify-center px-4 sm:px-6 pt-14 md:pt-40 sm:pt-48 pb-10 md:pb-20 overflow-hidden bg-[#030712] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.18),rgba(3,7,18,1))] scroll-mt-32"
    >
      {/* Background Radial Glows & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[450px] h-[280px] bg-gradient-to-bl from-emerald-500/15 via-cyan-500/15 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 md:space-y-16">
        {/* Top Status & Location Bar (Desktop & Tablet) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
        </motion.div>

        {/* DEDICATED EDITORIAL MOBILE HERO COMPOSITION (SCREENS < 768px) */}
        <div className="md:hidden flex flex-col justify-start -mx-4 sm:-mx-6 pb-6 relative overflow-hidden">
          {/* Full-Bleed Editorial Portrait Hero Photo (Upper body visible down to elbows) */}
          <div className="relative w-full h-[56dvh] max-h-[520px] overflow-hidden bg-[#030712]">
            <img
              src="/vivek-profile.jpg"
              alt="Vivek Singh"
              className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.98] saturate-[0.85]"
            />
            {/* Subtle light vignette at top so head is fully visible right below top bar */}
            <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-[#030712]/40 to-transparent z-10" />

            {/* Bottom Dark Shadow Vignette Overlay — Starts at elbow level to fade naturally */}
            <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent z-10 pointer-events-none" />
          </div>

          {/* Text Content Emerging Smoothly Below Elbow Level */}
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

            {/* Actions: Primary CTA & Quiet Secondary Link */}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href="#chapter-01"
                className="w-full py-4 rounded-2xl bg-white text-black font-semibold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-98"
              >
                <span>START THE STORY</span>
                <ArrowRight size={16} />
              </a>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 px-1 text-[11px] sm:text-xs">
                <button
                  onClick={onOpenQuickView}
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
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-xs font-mono text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.2)]"
            >
              <Terminal size={14} className="text-cyan-400" />
              <span>CHAPTER 00 — THE STORY BEGINS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Hey, I'm Vivek — <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Full-Stack & AI Systems
              </span>{" "}
              Engineer.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl"
            >
              Every developer has a stack. Behind every stack, there's a story. I build production-ready applications from raw code to microservices, subsea configurators, and grounded AI.
            </motion.p>

            {/* Developer Config Card (Creative Monospace Terminal Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-5 rounded-2xl bg-[#090e1c]/80 backdrop-blur-md border border-white/15 font-mono text-xs text-slate-300 space-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              <div className="flex items-center justify-between text-slate-500 text-[10px] pb-2 border-b border-white/10">
                <span>developer_manifest.json</span>
                <span className="text-cyan-400">v2026.1</span>
              </div>
              <div className="text-purple-300"><span className="text-slate-500">const</span> engineer = &#123;</div>
              <div className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"Vivek Singh"</span>,</div>
              <div className="pl-4"><span className="text-slate-400">coreFocus:</span> <span className="text-cyan-300">"Full-Stack, Distributed Microservices & AI RAG"</span>,</div>
              <div className="pl-4"><span className="text-slate-400">techStack:</span> [<span className="text-amber-300">"Next.js 16"</span>, <span className="text-amber-300">"Node.js"</span>, <span className="text-amber-300">"PostgreSQL"</span>, <span className="text-amber-300">"Gemini API"</span>],</div>
              <div className="text-purple-300">&#125;;</div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenQuickView}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-cyan-500 text-black font-mono font-bold text-xs hover:bg-cyan-400 transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Sparkles size={16} />
                <span>⚡ RECRUITER FAST-TRACK</span>
              </button>

              <a
                href="#chapter-01"
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all border border-white/20 hover:scale-[1.02] active:scale-95 group"
              >
                <span>Explore story</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#work"
                className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-white/[0.06] border border-white/15 text-slate-200 font-mono text-xs hover:bg-white/10 hover:border-cyan-400/50 hover:text-white transition-all active:scale-95 group shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <FastForward size={15} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Skip to work</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Holographic Cyber-Glass Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            {/* Outer Holographic Glow Border Container */}
            <div className="relative w-full max-w-[430px] p-[2px] rounded-3xl bg-gradient-to-tr from-cyan-400/50 via-purple-500/40 to-emerald-400/50 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(6,182,212,0.3)] group">
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
                    src="/vivek-profile.jpg"
                    alt="Vivek Singh"
                    className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Specular Rim Light & Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent opacity-90" />
                  <div className="absolute inset-0 border border-white/15 rounded-[22px] pointer-events-none" />

                  {/* Floating Interactive Tech Pills Overlay */}
                  <div className="absolute bottom-16 left-4 right-4 flex flex-wrap gap-1.5 z-10">
                    {["Next.js 16", "Node.js", "PostgreSQL", "Gemini API", "JointJS"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-cyan-400/40 shadow-lg">
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
          </motion.div>
        </div>

        {/* Bottom Metrics & Current Roles (Desktop & Tablet) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden md:block space-y-6 pt-6 border-t border-white/10"
        >
          {/* Stat Numbers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">4+</div>
              <div className="text-xs font-mono text-slate-400">Shipped enterprise tools</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">2+</div>
              <div className="text-xs font-mono text-slate-400">Years building software</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">15+</div>
              <div className="text-xs font-mono text-slate-400">Core tech stacks</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">&lt;50ms</div>
              <div className="text-xs font-mono text-slate-400">Real-time chat latency</div>
            </div>
          </div>

          {/* Current Role Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#080d1b]/70 border border-white/15 flex items-center justify-between group hover:border-cyan-400/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">WORKING AT</span>
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  IDG10 Engineering Solutions
                </span>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>

            <div className="p-5 rounded-2xl bg-[#080d1b]/70 border border-white/15 flex items-center justify-between group hover:border-purple-400/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">BUILDING</span>
                <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  DocuLens & MedTrackInsight
                </span>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

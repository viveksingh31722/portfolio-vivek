"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass, MapPin, Calendar, Terminal, ArrowUpRight, ArrowRight,
  Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Layers,
  Cpu, CheckCircle2, ShieldCheck, Activity
} from "lucide-react";
import { fieldNotes, getFieldLogsStats } from "@/lib/field-notes";

export default function FieldNotes() {
  const [selectedNote, setSelectedNote] = useState(fieldNotes[0]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const stats = getFieldLogsStats();
  const gallery = selectedNote?.gallery || [];

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, gallery.length]);

  return (
    <>
      <section id="field-notes" className="py-12 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto border-t border-white/10 relative bg-[#030712] scroll-mt-32">
        {/* Section Header */}
        <div className="flex justify-center mb-6">
          <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[10px] sm:text-xs font-mono text-cyan-300 uppercase tracking-wider sm:tracking-widest flex items-center gap-2 max-w-full text-center">
            <Compass size={14} className="text-cyan-400 shrink-0" />
            FIELD NOTES // PROFESSIONAL JOURNAL
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            NOT EVERYTHING HAPPENS <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              BEHIND A SCREEN.
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-sans">
            "Places, conversations and experiences that became part of the engineering journey."
          </p>
        </motion.div>

        {/* FIELD LOG HUD TERMINAL PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 rounded-2xl bg-[#080d1b] border border-cyan-500/30 mb-16 font-mono text-xs text-slate-300 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)] flex flex-wrap justify-between items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <Terminal size={16} className="text-cyan-400" />
            <span className="text-white font-bold tracking-wider">FIELD_LOG</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <div>
              <span className="text-slate-500 mr-2">entries:</span>
              <span className="text-cyan-300 font-bold">{stats.entries}</span>
            </div>
            <div>
              <span className="text-slate-500 mr-2">places:</span>
              <span className="text-purple-300 font-bold">{stats.places}</span>
            </div>
            <div>
              <span className="text-slate-500 mr-2">ideas collected:</span>
              <span className="text-emerald-300 font-bold">{stats.ideas}</span>
            </div>
            <div>
              <span className="text-slate-500 mr-2">last update:</span>
              <span className="text-slate-300 font-semibold">{stats.lastUpdate}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{stats.status}</span>
            </div>
          </div>
        </motion.div>

        {/* TIMELINE & FIELD NOTE // 001 CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Timeline Sidebar (Desktop & Tablet) */}
          <div className="hidden lg:block lg:col-span-3 font-mono text-xs space-y-6 sticky top-28">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <span className="text-slate-500 uppercase tracking-widest text-[10px] block border-b border-white/10 pb-2">
                CHRONOLOGICAL TIMELINE
              </span>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-cyan-400 font-bold">2026</div>
                  <div className="pl-3 border-l border-cyan-500/40 space-y-2">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-200">
                      <div className="font-bold">CHENNAI · INDIA</div>
                      <div className="text-[10px] text-slate-400">ASME IMECE 2026</div>
                      <div className="text-[9px] text-cyan-400 font-bold mt-1">FIELD NOTE // 001</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 opacity-50">
                  <div className="text-slate-500 font-bold">FUTURE</div>
                  <div className="pl-3 border-l border-slate-700 space-y-1 text-[10px] text-slate-500">
                    <div>FUTURE EXP // 002</div>
                    <div>FUTURE EXP // 003</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Field Note Story Content */}
          <div className="lg:col-span-9 space-y-16">
            {/* Entry Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 rounded-3xl bg-[#090e1c] border border-cyan-500/30 space-y-6 shadow-2xl relative overflow-hidden"
            >
              <div className="flex flex-wrap justify-between items-center gap-4 font-mono text-xs">
                <span className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold">
                  FIELD NOTE // {selectedNote.number}
                </span>

                <div className="flex items-center gap-4 text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                    <MapPin size={14} className="text-cyan-400" />
                    {selectedNote.location}, {selectedNote.country}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Calendar size={14} className="text-purple-400" />
                    {selectedNote.date}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {selectedNote.title}
                </h3>
                <p className="text-slate-300 text-lg sm:text-xl font-sans leading-relaxed">
                  "{selectedNote.subtitle}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400">
                <span>ORG: {selectedNote.organization}</span>
                <span>VENUE: {selectedNote.venue}</span>
              </div>
            </motion.div>

            {/* SCENES NARRATIVE PROGRESSION */}
            <div className="space-y-16">
              {/* SCENE 01: ARRIVAL */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-6 space-y-4">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                    SCENE 01 — ARRIVAL
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    It started with a conference.
                  </h4>
                  <div className="space-y-3 text-slate-300 text-base leading-relaxed font-sans">
                    <p>
                      As part of <strong className="text-white">IDG10 Engineering Solutions</strong>, I had the opportunity to attend ASME IMECE 2026 at the Chennai Trade Centre.
                    </p>
                    <p>
                      Walking into one of the largest international mechanical and systems engineering congresses, the atmosphere was immediately filled with technical intensity—engineers, researchers, and founders from over 100 countries converging in one place.
                    </p>
                  </div>
                </div>

                <div
                  className="md:col-span-6 cursor-pointer group"
                  onClick={() => setLightboxIndex(0)}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/15 relative shadow-2xl aspect-[4/5] bg-slate-900">
                    <img
                      src={gallery[0]?.url || selectedNote.coverImage}
                      alt={gallery[0]?.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-cyan-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <span>{gallery[0]?.caption}</span>
                      <Maximize2 size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* SCENE 02: REPRESENTING THE WORK */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div
                  className="md:col-span-6 order-2 md:order-1 cursor-pointer group"
                  onClick={() => setLightboxIndex(2)}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/15 relative shadow-2xl aspect-[4/5] bg-slate-900">
                    <img
                      src={gallery[2]?.url || selectedNote.coverImage}
                      alt={gallery[2]?.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-purple-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <span>{gallery[2]?.caption}</span>
                      <Maximize2 size={12} />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6 order-1 md:order-2 space-y-4">
                  <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider block">
                    SCENE 02 — REPRESENTING THE WORK
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Exhibiting subsea & physical engineering tools.
                  </h4>
                  <div className="space-y-3 text-slate-300 text-base leading-relaxed font-sans">
                    <p>
                      At <strong className="text-white">Booth A16 (IDG10 Solutions Private Limited)</strong>, we showcased our engineering product suite—including SPDT and the interactive Subsea Field Configurator.
                    </p>
                    <p>
                      Demonstrating software designed for subsea pipeline stress calculations and vessel cost estimation to practicing offshore engineers reinforced a key lesson: software isn't just about clean code; it's about solving real-world physical constraints accurately.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* SCENE 03 & 04: THE FLOOR & INTERACTIVE IDEAS CONVERGENCE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#080d1b] border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                    SCENE 04 — THE IDEAS & CONVERGENCE
                  </span>
                  <h4 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                    Hardware, Software, and AI Are Converging.
                  </h4>
                </div>

                {/* Interactive Visual Formula */}
                <div className="p-6 rounded-2xl bg-black/60 border border-emerald-500/30 text-center font-mono text-xs sm:text-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-center gap-3 text-slate-200 font-bold uppercase">
                    <span className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">AI</span>
                    <span>+</span>
                    <span className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">SOFTWARE</span>
                    <span>+</span>
                    <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">HARDWARE</span>
                    <span>+</span>
                    <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">ENGINEERING</span>
                  </div>
                  <div className="text-cyan-400 font-extrabold text-sm sm:text-base">
                    ↓ <br /> INTELLIGENT SYSTEMS
                  </div>
                </div>

                {/* 5 Themes Progressive Reveal Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {selectedNote.ideas.map((idea, idx) => (
                    <div key={idea.title} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                      <span className="text-[10px] font-mono text-emerald-400 font-bold block">0{idx + 1}. THEME</span>
                      <div className="font-bold text-white text-sm">{idea.title}</div>
                      <p className="text-xs text-slate-400 font-sans leading-relaxed">{idea.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* SCENE 05 & 06: PEOPLE & NETWORKING */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-6 space-y-4">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                    SCENE 06 — THE PEOPLE
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    20 minutes can change your perspective.
                  </h4>
                  <div className="space-y-3 text-slate-300 text-base leading-relaxed font-sans">
                    <p>
                      Some of the most valuable insights came not from slides, but from 20-minute conversations at exhibition booths and hallway discussions.
                    </p>
                    <p>
                      Hearing how engineers from different continents approach reliability, optimization, and system safety gave me a fresh lens on how I design web and backend architectures.
                    </p>
                  </div>
                </div>

                <div
                  className="md:col-span-6 cursor-pointer group"
                  onClick={() => setLightboxIndex(3)}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/15 relative shadow-2xl aspect-[16/10] bg-slate-900">
                    <img
                      src={gallery[3]?.url || selectedNote.coverImage}
                      alt={gallery[3]?.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-cyan-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <span>{gallery[3]?.caption}</span>
                      <Maximize2 size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* SCENE 07: TAKEAWAYS & WHAT I BROUGHT BACK */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#090e1c] border border-cyan-500/30 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                    SCENE 07 — WHAT I BROUGHT BACK
                  </span>
                  <h4 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                    {selectedNote.conclusionHeadline}
                  </h4>
                  <p className="text-slate-300 text-base sm:text-lg font-sans">
                    {selectedNote.conclusionText}
                  </p>
                </div>

                {/* Takeaways Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
                  {selectedNote.takeaways.map((t) => (
                    <div key={t.num} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                      <span className="text-cyan-400 font-bold text-sm">{t.num}</span>
                      <div className="font-bold text-white font-sans text-sm">{t.title}</div>
                      <p className="text-slate-400 font-sans text-xs leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CONNECT FIELD NOTES TO PORTFOLIO ARCHITECTURE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-slate-950 border border-white/15 space-y-6 shadow-2xl text-center"
              >
                <div className="flex justify-center">
                  <Sparkles className="text-cyan-400 w-8 h-8 animate-pulse" />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
                  <span>WHAT I SAW</span>
                  <span>→</span>
                  <span className="text-cyan-300">WHAT I LEARNED</span>
                  <span>→</span>
                  <span className="text-purple-300">WHAT I BUILD</span>
                  <span>→</span>
                  <span className="text-emerald-300">WHAT I EXPLORE</span>
                </div>

                <div className="pt-2 flex flex-wrap justify-center gap-4 font-mono text-xs">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-200 hover:bg-cyan-500/30 transition-all font-semibold"
                  >
                    <span>[ EXPLORE MY ENGINEERING WORK ]</span>
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#chapter-04"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500/20 border border-purple-400/50 text-purple-200 hover:bg-purple-500/30 transition-all font-semibold"
                  >
                    <span>[ EXPLORE MY AI WORK ]</span>
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href="#lab"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all font-semibold"
                  >
                    <span>[ SEE THE LAB ]</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBLE LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && gallery[lightboxIndex] && (
          <div className="fixed inset-0 z-[100080] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20"
              aria-label="Close image lightbox"
            >
              <X size={24} />
            </button>

            {/* Next / Previous Controls */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={() => setLightboxIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Lightbox Content */}
            <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4 z-10">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 max-h-[75vh]">
                <img
                  src={gallery[lightboxIndex].url}
                  alt={gallery[lightboxIndex].alt}
                  className="max-h-[75vh] w-auto object-contain shadow-2xl"
                />
              </div>

              <div className="text-center space-y-1 font-mono text-xs">
                <div className="text-cyan-300 font-bold">{gallery[lightboxIndex].caption}</div>
                <div className="text-slate-400 font-sans text-sm">{gallery[lightboxIndex].title}</div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

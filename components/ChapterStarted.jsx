"use client";
import { motion } from "framer-motion";
import { Compass, Cpu, Layers, ArrowRight } from "lucide-react";

export default function ChapterStarted() {
  return (
    <section id="chapter-01" className="py-28 px-6 max-w-5xl mx-auto border-t border-white/5 relative bg-[#030712] scroll-mt-32">
      {/* Chapter Label */}
      <div className="flex justify-center mb-6">
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono text-cyan-400 uppercase tracking-wider sm:tracking-widest max-w-full text-center">
          CHAPTER 01 — WHERE IT STARTED
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          What happens when <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">engineering</span> meets software?
        </h2>
        <p className="text-slate-400 text-lg sm:text-xl leading-relaxed">
          My transition into professional software engineering wasn't about simple template sites—it was about translating physical engineering constraints into clean, high-performance digital tools.
        </p>
      </motion.div>

      {/* Modern Full-Width Narrative Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl space-y-8"
      >
        <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
          <Compass size={18} />
          <span>THE ORIGIN STORY</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
          Building software for real-world physical constraints.
        </h3>

        <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
          <p>
            At <strong className="text-white">IDG10 Engineering Solutions</strong>, I stepped directly into the intersection of complex mechanical & marine calculations and modern web applications.
          </p>
          <p>
            When subsea engineers design offshore oil and gas field layouts, calculating pipe stress limits, vessel choices, and real-time cost estimations manually took days. The challenge was building an interactive tool that runs complex physics calculations instantly in the browser.
          </p>
        </div>

        {/* Horizontal Key Realization Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm mb-2">
              <Cpu size={16} />
              <span>Performance is UI</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              A 100ms calculation lag on interactive canvas layouts breaks engineer focus. Optimization isn't an afterthought—it's core usability.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
              <Layers size={16} />
              <span>Architecture Matters</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Decoupling interactive UI canvases from backend computation engines allowed us to increase efficiency by 25% and boost reliability by 60%.
            </p>
          </div>
        </div>

        {/* Role Metadata Footer */}
        <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
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
      </motion.div>

      {/* Chapter Transition Link */}
      <div className="flex justify-center">
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <span>Continue to Chapter 02: Building Real Systems</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

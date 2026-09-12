"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send } from "lucide-react";

export default function ChapterWhatsNext() {
  const equationSteps = [
    { label: "FULL STACK", sub: "Web & UX Excellence" },
    { label: "DISTRIBUTED SYSTEMS", sub: "Scalable Microservices" },
    { label: "AI & RAG", sub: "Grounded LLM Pipelines" },
    { label: "AUTOMATION", sub: "Agentic Workflows" },
  ];

  return (
    <section id="chapter-07" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/5 relative bg-[#030712]">
      {/* Chapter Label */}
      <div className="flex justify-center mb-6">
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          CHAPTER 07 — WHAT'S NEXT?
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <p className="text-xl sm:text-2xl font-mono text-cyan-400 mb-6 font-medium">
          "The story isn't finished."
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-8">
          Building the next generation of <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Intelligent Software
          </span>
        </h2>
      </motion.div>

      {/* Visual Equation Grid */}
      <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center items-center">
          {equationSteps.map((step, i) => (
            <div key={step.label} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 relative">
              <div className="text-xs font-mono text-cyan-400 font-bold mb-1">{step.label}</div>
              <div className="text-[11px] text-slate-400">{step.sub}</div>
              {i < 3 && (
                <span className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-600 font-bold text-lg">
                  +
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">RESULT</div>
          <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            = INTELLIGENT, HIGH-PERFORMANCE SOFTWARE
          </div>
        </div>
      </div>

      {/* Final Invitation */}
      <div className="text-center max-w-2xl mx-auto space-y-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-slate-200 leading-snug">
          Maybe the next chapter is something we build together.
        </h3>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-base hover:from-cyan-400 hover:to-purple-500 transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-95 group"
          >
            <span>Let's talk</span>
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

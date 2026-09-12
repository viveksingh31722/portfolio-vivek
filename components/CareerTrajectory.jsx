"use client";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Layers, Sparkles, Code2 } from "lucide-react";

export default function CareerTrajectory() {
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

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10 relative bg-[#030712]">
      <div className="flex justify-center mb-6">
        <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-xs font-mono text-cyan-300 uppercase tracking-widest">
          CHAPTER 10 — THE CAREER TRAJECTORY
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Where engineering is heading.
        </h2>
        <p className="text-slate-400 text-lg">
          Software development evolves from isolated scripts to scalable systems, and now to intelligent software.
        </p>
      </motion.div>

      {/* Trajectory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {steps.map((step, idx) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4 relative shadow-xl"
          >
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-bold">
                {step.label}
              </span>
              <span className="text-slate-600 font-bold">0{idx + 1}</span>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">
              {step.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Career Formula Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-slate-950 border border-white/15 text-center space-y-6 shadow-2xl"
      >
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

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Combining clean UI architecture with robust backend microservices and reliable AI context models.
        </p>
      </motion.div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowRight, FastForward, CheckCircle2 } from "lucide-react";

export default function SystemBoot({ onStartStory, onSkipIntro }) {
  const [bootStep, setBootStep] = useState(0);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setBootStep(4);
      return;
    }

    const timer1 = setTimeout(() => setBootStep(1), 600);
    const timer2 = setTimeout(() => setBootStep(2), 1400);
    const timer3 = setTimeout(() => setBootStep(3), 2200);
    const timer4 = setTimeout(() => setBootStep(4), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleSkip = () => {
    setSkipped(true);
    if (onSkipIntro) onSkipIntro();
  };

  if (skipped) return null;

  return (
    <div className="relative w-full bg-[#030712] border-b border-white/10 overflow-hidden font-mono pt-24 pb-16 px-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Single Unified Terminal Window Card */}
        <div className="rounded-2xl border border-white/15 overflow-hidden bg-[#060a15]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Terminal Header Bar */}
          <div className="flex items-center justify-between p-3.5 bg-[#090e1c] border-b border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-slate-500 ml-2 hidden sm:inline">bash - 80x24</span>
            </div>

            <button
              onClick={handleSkip}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 hover:bg-white/15 text-slate-300 transition-colors text-[11px] cursor-pointer"
            >
              <FastForward size={12} className="text-cyan-400" />
              <span>Skip intro</span>
            </button>
          </div>

          {/* Terminal Output Area */}
          <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2 text-cyan-400 font-bold">
            <span>$ whoami</span>
          </div>

          <div className="text-slate-400 font-sans text-base sm:text-lg">
            vivek@developer:~$ <span className="text-emerald-400 font-mono">Full-Stack & AI Systems Engineer</span>
          </div>

          <AnimatePresence>
            {bootStep >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-1.5 text-slate-400 text-xs pt-2"
              >
                <div className="text-purple-400">$ initialize_story</div>
                <div>[1/4] Loading career timeline...</div>
                {bootStep >= 2 && <div>[2/4] Loading subsea configurators & microservice architectures...</div>}
                {bootStep >= 3 && <div>[3/4] Loading grounded RAG & AI assistant engines...</div>}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {bootStep >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 pt-4 border-t border-white/10"
              >
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <CheckCircle2 size={13} /> Full Stack
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <CheckCircle2 size={13} /> Distributed Systems
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <CheckCircle2 size={13} /> Grounded AI
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <CheckCircle2 size={13} /> Engineering Software
                  </span>
                </div>

                <div className="space-y-2 font-sans pt-2">
                  <div className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    EVERY DEVELOPER HAS A STACK. <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                      BEHIND EVERY STACK, THERE'S A STORY.
                    </span>
                  </div>
                  <div className="text-slate-400 text-sm font-mono tracking-widest uppercase">
                    THIS IS MINE.
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={onStartStory}
                    className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-cyan-500 text-black font-mono font-bold text-xs hover:bg-cyan-400 transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] group"
                  >
                    <span>START THE STORY</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleSkip}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-mono text-xs hover:bg-white/10 transition-colors"
                  >
                    <span>Explore everything</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  </div>
  );
}

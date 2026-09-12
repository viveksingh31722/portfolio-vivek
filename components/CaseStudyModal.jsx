"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Zap, Layers, Sparkles, ChevronDown } from "lucide-react";

export default function CaseStudyModal({ isOpen, onClose, project }) {
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setShowScrollHint(true);
      setScrollProgress(0);
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, project]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop > 60) {
      setShowScrollHint(false);
    } else {
      setShowScrollHint(true);
    }

    const totalScroll = scrollHeight - clientHeight;
    if (totalScroll > 0) {
      setScrollProgress((scrollTop / totalScroll) * 100);
    }
  };

  const scrollToMore = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ top: 350, behavior: "smooth" });
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#030712]/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-4xl bg-[#080d1a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#080d1a]/95 backdrop-blur-md px-6 sm:px-10 py-5 border-b border-white/10 flex justify-between items-center z-20">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                  CASE STUDY
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  {project.category || "Full-Stack Engineering"}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Close Case Study"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scroll Progress Bar */}
            <div className="w-full bg-white/5 h-0.5 z-20">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-75 ease-out shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            {/* Modal Scrollable Body */}
            <div
              ref={contentRef}
              onScroll={handleScroll}
              className="p-6 sm:p-10 overflow-y-auto max-h-[calc(90vh-75px)] space-y-12 text-slate-300"
            >
              {/* Title & Metadata Header */}
              <div className="space-y-6 border-b border-white/10 pb-8">
                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                  {project.summary || project.desc}
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold text-xs hover:bg-cyan-400 transition-all shadow-lg"
                    >
                      <span>Try Live App</span>
                      <ExternalLink size={15} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs hover:bg-white/10 transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      <span>View GitHub Repo</span>
                    </a>
                  )}
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5 text-xs">
                  <div>
                    <span className="text-slate-500 font-mono block mb-1">ROLE</span>
                    <span className="text-slate-200 font-medium">{project.role || "Full-Stack Engineer"}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono block mb-1">SCOPE</span>
                    <span className="text-slate-200 font-medium">{project.scope || "Architecture & Implementation"}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono block mb-1">PLATFORM</span>
                    <span className="text-slate-200 font-medium">{project.platform || "Web / Cross-platform"}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono block mb-1">STATUS</span>
                    <span className="text-cyan-400 font-mono font-medium">● Live & Production Ready</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">BUILT WITH:</span>
                  <div className="flex flex-wrap gap-2">
                    {(project.tags || []).map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-cyan-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 01. WHY THIS EXISTS */}
              {project.whyThisExists && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    <Sparkles size={16} /> 01. WHY THIS EXISTS
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.whyTitle || "Closing the gap between raw data and actionable insight."}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {project.whyThisExists}
                  </p>
                </div>
              )}

              {/* 02. THE PROBLEM */}
              {project.problemDetails && (
                <div className="space-y-4 bg-white/[0.02] border border-amber-500/20 p-6 sm:p-8 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                    <Zap size={16} /> 02. THE PROBLEM
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.problemTitle || "Existing tools solve the wrong problem."}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {project.problemDetails}
                  </p>
                </div>
              )}

              {/* 03. THE CORE IDEA & HOW IT WORKS */}
              {project.howItWorks && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                    <Layers size={16} /> 03. THE CORE WORKFLOW
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.coreIdeaTitle || "Plan. Process. Reason. Decide."}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.howItWorks.map((step, index) => (
                      <div key={index} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                        <span className="text-xs font-mono text-cyan-400 font-bold block">STEP 0{index + 1}</span>
                        <h4 className="text-base font-bold text-white">{step.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 04. THE HARD PART / ARCHITECTURE */}
              {project.hardPart && (
                <div className="space-y-4 bg-[#0d1222] border border-purple-500/30 p-6 sm:p-8 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                    <ShieldCheck size={16} /> 04. THE HARD PART
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.hardPartTitle || "Engineering under strict constraints."}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {project.hardPart}
                  </p>
                </div>
              )}

              {/* 05. KEY METRICS & COMPARISON */}
              {project.metrics && (
                <div className="space-y-6 border-t border-white/10 pt-8">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    KEY METRICS & PERFORMANCE HIGHLIGHTS
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-1">{m.val}</div>
                        <div className="text-xs text-slate-400 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Floating Scroll Indicator Badge */}
            <AnimatePresence>
              {showScrollHint && (
                <motion.button
                  initial={{ opacity: 0, y: 15, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  transition={{ duration: 0.25 }}
                  onClick={scrollToMore}
                  className="absolute bottom-6 left-1/2 z-30 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#090f1f]/95 backdrop-blur-xl border border-cyan-500/40 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:border-cyan-400 hover:bg-[#0e172e] transition-all cursor-pointer group"
                >
                  <div className="w-3.5 h-5 border border-cyan-400/80 rounded-full flex justify-center p-0.5">
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                      className="w-1 h-1 bg-cyan-400 rounded-full"
                    />
                  </div>
                  <span className="text-xs font-mono tracking-wide font-medium text-slate-200 group-hover:text-cyan-300">
                    SCROLL FOR CASE STUDY
                  </span>
                  <ChevronDown size={14} className="animate-bounce text-cyan-400 ml-0.5" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Cpu, Sparkles, Terminal } from "lucide-react";

export default function SystemHUD() {
  const [activeFocus, setActiveFocus] = useState("FULL STACK");
  const [activeChapter, setActiveChapter] = useState("CH_00");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      const sections = [
        { id: "chapter-00", focus: "FULL STACK", label: "CH_00: BOOT" },
        { id: "mission", focus: "MISSION PATH", label: "CH_01: MISSION" },
        { id: "chapter-01", focus: "ENGINEERING ORIGIN", label: "CH_01: ORIGIN" },
        { id: "work", focus: "DESKTOP & CANVAS SYSTEMS", label: "CH_02: SYSTEMS" },
        { id: "chapter-03", focus: "DISTRIBUTED BACKEND", label: "CH_03: SCALING" },
        { id: "chapter-04", focus: "GROUNDED RAG & AI", label: "CH_04: ENTER AI" },
        { id: "dna", focus: "ENGINEERING DNA", label: "CH_05: DNA MAP" },
        { id: "skills", focus: "TECH ARCHITECTURE", label: "CH_05: STACK" },
        { id: "about", focus: "ENGINEER MINDSET", label: "CH_06: PERSON" },
        { id: "experience", focus: "CAREER TIMELINE", label: "CH_07: HISTORY" },
        { id: "lab", focus: "AGENTIC EXPERIMENTS", label: "CH_09: THE LAB" },
        { id: "contact", focus: "FUTURE SYSTEMS", label: "CH_12: CONTACT" },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveFocus(sections[i].focus);
            setActiveChapter(sections[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 left-6 z-[9990] hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-[#030712]/90 border border-white/15 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)] font-mono text-[11px] text-slate-300"
      >
        <div className="flex items-center gap-2 pr-3 border-r border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-bold tracking-wider">VIVEK.SYS</span>
        </div>

        <div className="flex items-center gap-2 pr-3 border-r border-white/10 text-slate-400">
          <Terminal size={13} className="text-cyan-400" />
          <span className="text-cyan-300 font-semibold">{activeChapter}</span>
        </div>

        <div className="flex items-center gap-2">
          <Activity size={13} className="text-purple-400 animate-pulse" />
          <span className="text-slate-400 uppercase">FOCUS:</span>
          <span className="text-white font-bold tracking-tight">{activeFocus}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

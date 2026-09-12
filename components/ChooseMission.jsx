"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Wrench, Code2, ArrowRight, Check } from "lucide-react";

export default function ChooseMission({ onSelectMission }) {
  const [selectedMission, setSelectedMission] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("vivek_portfolio_mission");
    if (saved) {
      setSelectedMission(saved);
    }
  }, []);

  const handleSelect = (id) => {
    setSelectedMission(id);
    sessionStorage.setItem("vivek_portfolio_mission", id);
    if (onSelectMission) onSelectMission(id);
  };

  const missions = [
    {
      id: "hiring",
      title: "I'M HIRING",
      icon: Briefcase,
      subtitle: "Show me what Vivek can build & ship.",
      focus: "Impact → Shipped Systems → Experience → Resume",
      accent: "cyan",
      href: "#work",
    },
    {
      id: "client",
      title: "I'M A CLIENT",
      icon: Wrench,
      subtitle: "Show me how Vivek solves complex engineering problems.",
      focus: "Problem → Solution → Product Quality → Capabilities",
      accent: "purple",
      href: "#work",
    },
    {
      id: "engineer",
      title: "I'M AN ENGINEER",
      icon: Code2,
      subtitle: "Show me what's under the hood & how systems scale.",
      focus: "Architecture → Concurrency → Grounded RAG → Code",
      accent: "emerald",
      href: "#chapter-03",
    },
  ];

  return (
    <section id="mission" className="py-12 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto relative bg-[#030712] border-b border-white/10 scroll-mt-32">
      <div className="text-center mb-8 md:mb-12 space-y-3">
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[10px] sm:text-xs font-mono text-cyan-300 uppercase tracking-wider sm:tracking-widest max-w-full inline-block text-center">
          CHAPTER 01 — CHOOSE YOUR MISSION
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Why are you here today?
        </h2>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Tailor your exploration path. Pick the perspective that best matches your goal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {missions.map((m) => {
          const Icon = m.icon;
          const isSelected = selectedMission === m.id;
          return (
            <motion.div
              key={m.id}
              whileHover={{ y: -4 }}
              onClick={() => handleSelect(m.id)}
              className={`p-5 sm:p-8 rounded-2xl md:rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 sm:space-y-6 relative overflow-hidden group shadow-xl ${
                isSelected
                  ? "bg-gradient-to-b from-white/[0.08] to-[#080d1b] border-cyan-400/80 shadow-[0_0_35px_rgba(6,182,212,0.25)]"
                  : "bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]"
              }`}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  {isSelected && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 font-bold">
                      <Check size={12} /> ACTIVE PATH
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    [{m.title}]
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {m.subtitle}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-4">
                <div className="text-[11px] font-mono text-slate-400 leading-tight">
                  <span className="text-slate-500 block uppercase mb-1">Recommended Flow:</span>
                  <span className="text-cyan-300">{m.focus}</span>
                </div>

                <a
                  href={m.href}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 transition-all font-semibold"
                >
                  <span>Select Path</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#chapter-01"
          onClick={() => handleSelect("all")}
          className="text-xs font-mono text-slate-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
        >
          [ Explore everything without personalization ]
        </a>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Terminal } from "lucide-react";

export default function PortfolioRemembers() {
  const [visitedItems, setVisitedItems] = useState([]);

  useEffect(() => {
    const items = [
      "Subsea Desktop Canvas & Physics Engine",
      "Real-Time Chat Microservices Architecture",
      "DocuLens Grounded AI Assistant",
      "MedTrackInsight Biopharmaceutical Console",
      "Engineering DNA Capability Map",
    ];
    setVisitedItems(items);
  }, []);

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto border-t border-white/10 relative bg-[#030712] font-mono">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 sm:p-12 rounded-3xl bg-[#080d1b] border border-cyan-500/30 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.15)] text-slate-300"
      >
        <div className="flex items-center gap-2 text-xs text-cyan-400">
          <Terminal size={16} />
          <span>CHAPTER 11 — SESSION RECAP</span>
        </div>

        <div className="space-y-2 font-sans">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            You've explored Vivek's engineering story.
          </h3>
          <p className="text-slate-400 text-sm">
            Here's what you've seen during your session:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {visitedItems.map((item) => (
            <div key={item} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 text-slate-200">
              <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10 text-center font-sans space-y-2">
          <p className="text-slate-300 text-base font-semibold">
            "You've seen what I build. You've seen how I think. There's still more to build."
          </p>
        </div>
      </motion.div>
    </section>
  );
}

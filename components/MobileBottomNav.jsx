"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Briefcase, Compass, BookOpen, Menu, X, Download, Mail,
  Sparkles, Layers, Cpu, Code2, ArrowRight, Globe
} from "lucide-react";

export default function MobileBottomNav({ onOpenQuickView }) {
  const [activeTab, setActiveTab] = useState("home");
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      const workEl = document.getElementById("work");
      const fieldNotesEl = document.getElementById("field-notes");
      const storyEl = document.getElementById("chapter-01");

      if (fieldNotesEl && scrollY >= fieldNotesEl.offsetTop - height * 0.4) {
        setActiveTab("notes");
      } else if (workEl && scrollY >= workEl.offsetTop - height * 0.4) {
        setActiveTab("work");
      } else if (storyEl && scrollY >= storyEl.offsetTop - height * 0.4) {
        setActiveTab("story");
      } else {
        setActiveTab("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#chapter-00", icon: Home },
    { id: "story", label: "Story", href: "#chapter-01", icon: BookOpen },
    { id: "work", label: "Work", href: "#work", icon: Briefcase },
    { id: "notes", label: "Notes", href: "#field-notes", icon: Compass },
    { id: "more", label: "More", href: "#", icon: Menu, isAction: true },
  ];

  return (
    <>
      {/* MOBILE BOTTOM FIXED NAVIGATION BAR */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-[100040] md:hidden bg-[#030712]/92 backdrop-blur-2xl border-t border-white/10 px-2 py-1.5 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.9)]"
        aria-label="Mobile Bottom Navigation"
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id && !isMoreOpen;

            if (item.isAction) {
              return (
                <button
                  key={item.id}
                  onClick={() => setIsMoreOpen(true)}
                  className={`flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-xl transition-all ${
                    isMoreOpen
                      ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                  aria-label="Open More Options Menu"
                >
                  <Icon size={20} className={isMoreOpen ? "text-cyan-400" : "text-slate-400"} />
                  <span className="text-[10px] font-mono tracking-tight mt-0.5">{item.label}</span>
                </button>
              );
            }

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMoreOpen(false);
                }}
                className={`flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-xl transition-all ${
                  isActive
                    ? "text-cyan-400 bg-cyan-500/15 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Icon size={20} className={isActive ? "text-cyan-400" : "text-slate-400"} />
                <span className="text-[10px] font-mono tracking-tight mt-0.5 font-medium">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* MOBILE APP "MORE" BOTTOM SHEET OVERLAY */}
      <AnimatePresence>
        {isMoreOpen && (
          <div className="fixed inset-0 z-[100050] md:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMoreOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Bottom Sheet Card */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative w-full bg-[#080d1b] border-t border-cyan-500/40 rounded-t-3xl p-6 pb-safe shadow-[0_-20px_50px_rgba(0,0,0,0.95)] max-h-[82vh] overflow-y-auto space-y-6 z-10"
            >
              {/* Sheet Drag Indicator */}
              <div className="w-12 h-1.5 rounded-full bg-slate-700 mx-auto" />

              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">VIVEK.SINGH APP MENU</h3>
                  <p className="text-xs font-mono text-cyan-400">Navigation & Quick Actions</p>
                </div>
                <button
                  onClick={() => setIsMoreOpen(false)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Recruiter Fast-Track Action */}
              <button
                onClick={() => {
                  setIsMoreOpen(false);
                  if (onOpenQuickView) onOpenQuickView();
                }}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/10 border border-cyan-400/50 text-white font-mono text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.25)]"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles size={16} className="text-cyan-400 animate-pulse" />
                  <span>⚡ RECRUITER FAST-TRACK SUMMARY</span>
                </div>
                <ArrowRight size={16} className="text-cyan-400" />
              </button>

              {/* Secondary Navigation Links */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <a
                  href="#experience"
                  onClick={() => setIsMoreOpen(false)}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-200 hover:border-cyan-400/40 flex items-center justify-between"
                >
                  <span>💼 Experience</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>

                <a
                  href="#dna"
                  onClick={() => setIsMoreOpen(false)}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-200 hover:border-purple-400/40 flex items-center justify-between"
                >
                  <span>🧬 Tech Stack</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>

                <a
                  href="#about"
                  onClick={() => setIsMoreOpen(false)}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-200 hover:border-emerald-400/40 flex items-center justify-between"
                >
                  <span>👤 About Vivek</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>

                <a
                  href="#lab"
                  onClick={() => setIsMoreOpen(false)}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-200 hover:border-amber-400/40 flex items-center justify-between"
                >
                  <span>🧪 The Lab</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>

                <a
                  href="#blogs"
                  onClick={() => setIsMoreOpen(false)}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-200 hover:border-cyan-400/40 flex items-center justify-between"
                >
                  <span>📝 Articles</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsMoreOpen(false)}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-200 hover:border-purple-400/40 flex items-center justify-between"
                >
                  <span>✉️ Contact</span>
                  <ArrowRight size={14} className="text-slate-500" />
                </a>
              </div>

              {/* Direct Actions & Social Profiles */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href="/api/resume?action=download"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-200 font-mono text-xs font-bold"
                >
                  <Download size={14} />
                  <span>Resume (PDF)</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/viveksingh31722"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                    aria-label="GitHub Profile"
                  >
                    <Code2 size={18} />
                  </a>
                  <a
                    href="mailto:viveksingh31722@gmail.com"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                    aria-label="Email Vivek"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X, FastForward } from "lucide-react";
import Link from "next/link";

export default function Navbar({ onOpenQuickView }) {
  const [pastHero, setPastHero] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Collapse header once user scrolls past 350px (Hero section threshold)
      setPastHero(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Story", href: "#chapter-00" },
    { name: "Origin", href: "#chapter-01" },
    { name: "Work", href: "#work" },
    { name: "AI & Systems", href: "#chapter-04" },
    { name: "DNA", href: "#dna" },
    { name: "Notes", href: "#field-notes" },
    { name: "About", href: "#about" },
    { name: "Lab", href: "#lab" },
    { name: "Contact", href: "#contact" },
  ];

  // Compact links shown when header is collapsed past hero
  const collapsedLinks = [
    { name: "Work", href: "#work" },
    { name: "AI", href: "#chapter-04" },
    { name: "Notes", href: "#field-notes" },
    { name: "Lab", href: "#lab" },
    { name: "Contact", href: "#contact" },
  ];

  const visibleLinks = pastHero && !isHovered ? collapsedLinks : navLinks;

  return (
    <>
      {/* MOBILE TOP BAR (SCREENS < 768px) */}
      <div className="fixed top-0 left-0 right-0 z-[100030] md:hidden bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 px-5 py-3 pt-safe flex items-center justify-between shadow-lg h-14">
        <Link href="#chapter-00" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 p-[1px]">
            <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
              <Code2 size={12} className="text-cyan-400" />
            </div>
          </div>
          <span className="font-bold text-sm tracking-tight text-white font-sans">
            VIVEK<span className="text-cyan-400">.SINGH</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 ml-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ONLINE</span>
          </span>
        </Link>
      </div>

      {/* DESKTOP & TABLET FLOATING NAVBAR (SCREENS >= 768px) */}
      <motion.header
        layout
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className={`hidden md:block fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-[10005] w-[calc(100%-2rem)] transition-all duration-500 ${
          pastHero && !isHovered ? "max-w-3xl" : "max-w-6xl"
        }`}
      >
        <motion.div
          layout
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-full rounded-full transition-all duration-500 flex justify-between items-center px-4 sm:px-6 py-2.5 backdrop-blur-2xl border ${
            pastHero
              ? "bg-gradient-to-b from-white/[0.14] via-[#030712]/85 to-[#030712]/95 border-cyan-400/50 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.6),0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(6,182,212,0.25)]"
              : "bg-gradient-to-b from-white/[0.12] via-[#030712]/75 to-[#030712]/90 border-white/25 hover:border-white/40 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.45),0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.06)]"
          }`}
        >
          {/* Brand Logo inside Glass Pill */}
          <Link href="#chapter-00" onClick={closeMenu} className="flex items-center gap-2.5 group z-[10001] shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 p-[1px] group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
                <Code2 size={18} className="text-cyan-400" />
              </div>
            </div>
            <span className="font-bold text-base tracking-tight text-white drop-shadow-md">
              VIVEK<span className="text-cyan-400">.SINGH</span>
            </span>
          </Link>

          {/* Desktop Animated Glass Navigation Links */}
          <motion.nav 
            layout
            className="hidden lg:flex items-center gap-1 bg-white/[0.07] border border-white/20 rounded-full p-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]"
          >
            <AnimatePresence mode="popLayout">
              {visibleLinks.map((link) => (
                <motion.a
                  key={link.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase text-slate-200 hover:text-white hover:bg-white/15 transition-all drop-shadow shrink-0"
                >
                  {link.name}
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.nav>

          {/* Recruiter Fast-Track & Actions */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenQuickView}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/60 text-xs font-mono text-cyan-200 hover:bg-cyan-500/30 transition-all font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              <span>⚡ QUICK VIEW</span>
            </button>

            <a
              href="#work"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-slate-300 hover:bg-white/10 transition-all"
            >
              <FastForward size={13} className="text-cyan-400" />
              <span>Skip</span>
            </a>

            {(!pastHero || isHovered) && (
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                href="https://github.com/viveksingh31722"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 border border-white/25 text-xs font-mono text-white hover:bg-white/20 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]"
              >
                GitHub
              </motion.a>
            )}
          </div>

          {/* Hamburger Menu (Mobile/Tablet) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/25 text-white hover:bg-white/20 transition-all z-[10001] shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile & Tablet Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100050] bg-[#030712]/98 backdrop-blur-2xl flex flex-col items-center justify-start overflow-y-auto px-6 py-6 lg:hidden"
          >
            {/* Overlay Top Header Bar */}
            <div className="w-full max-w-lg flex items-center justify-between pb-5 border-b border-white/10 shrink-0">
              <Link href="#chapter-00" onClick={closeMenu} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 p-[1px]">
                  <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
                    <Code2 size={16} className="text-cyan-400" />
                  </div>
                </div>
                <span className="font-bold text-base tracking-tight text-white font-sans">
                  VIVEK<span className="text-cyan-400">.SINGH</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 ml-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </span>
              </Link>

              <button
                onClick={closeMenu}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Options Container */}
            <div className="flex flex-col items-center gap-5 w-full max-w-sm py-8 my-auto">
              <div className="w-full flex flex-col gap-2">
                <button
                  onClick={() => {
                    closeMenu();
                    if (onOpenQuickView) onOpenQuickView();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-cyan-500 text-black font-mono text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
                >
                  ⚡ QUICK VIEW RECRUITER SUMMARY
                </button>
                <a
                  href="#work"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-white/5 border border-white/15 text-slate-300 font-mono text-xs hover:bg-white/10 transition-colors"
                >
                  <FastForward size={14} className="text-cyan-400" />
                  <span>Skip to work</span>
                </a>
              </div>

              <div className="w-full space-y-1">
                {navLinks.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.02 + idx * 0.03 }}
                    className="w-full text-center"
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="text-xl sm:text-2xl font-bold text-slate-200 hover:text-cyan-400 transition-colors block py-2"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/viveksingh31722"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full bg-white/10 border border-white/25 text-white font-mono text-xs font-semibold hover:bg-white/20 transition-all"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

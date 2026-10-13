"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X, FastForward, Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useQuickView } from "@/lib/QuickViewContext";
import { useLenis } from "@/components/SmoothScrollProvider";
import TextRoll from "./TextRoll";

export default function Navbar({ onOpenQuickView: propOnOpenQuickView }) {
  const { openQuickView: contextOpenQuickView } = useQuickView();
  const handleOpenQuickView = propOnOpenQuickView || contextOpenQuickView;
  const lenis = useLenis();

  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);

  // Monitor scroll state for smooth navbar adaptation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Threshold past hero
      setIsScrolled(currentScrollY > 150);

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;

      // Track active section for indicator
      const sections = ["chapter-00", "chapter-01", "work", "chapter-04", "skills", "field-notes", "about", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll & Lenis when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = "auto";
      if (lenis) lenis.start();
    }
  }, [isMobileMenuOpen, lenis]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: "Story", href: "#chapter-00", id: "chapter-00" },
    { name: "Origin", href: "#chapter-01", id: "chapter-01" },
    { name: "Work", href: "#work", id: "work" },
    { name: "AI & Systems", href: "#chapter-04", id: "chapter-04" },
    { name: "DNA", href: "#skills", id: "skills" },
    { name: "Notes", href: "#field-notes", id: "field-notes" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const collapsedLinks = [
    { name: "Work", href: "#work", id: "work" },
    { name: "AI", href: "#chapter-04", id: "chapter-04" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Notes", href: "#field-notes", id: "field-notes" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const visibleLinks = isScrolled && !isHovered ? collapsedLinks : navLinks;

  return (
    <>
      {/* MOBILE TOP BAR (SCREENS < 768px) */}
      <div className="fixed top-0 left-0 right-0 z-[100030] md:hidden bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 px-5 py-3 pt-safe flex items-center justify-between shadow-lg h-14">
        <Link href="#chapter-00" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
              <Code2 size={13} className="text-cyan-400" />
            </div>
          </div>
          <span className="font-bold text-sm tracking-tight text-white font-sans">
            VIVEK<span className="text-cyan-400">.SINGH</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ACTIVE</span>
          </span>

          <button
            onClick={toggleMenu}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* DESKTOP & TABLET FLOATING DYNAMIC NAVBAR (SCREENS >= 768px) */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden md:flex justify-center fixed inset-x-0 z-[100020] pointer-events-none transition-all duration-500 ${
          isScrolled ? "top-3 sm:top-4" : "top-5 sm:top-7"
        }`}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`pointer-events-auto transition-all duration-500 flex justify-between items-center backdrop-blur-2xl border rounded-full ${
            isScrolled && !isHovered ? "max-w-3xl" : "max-w-6xl"
          } w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] ${
            isScrolled
              ? "py-2 px-4 sm:px-5 bg-[#030712]/85 border-cyan-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.15)]"
              : "py-2.5 px-5 sm:px-6 bg-[#030712]/70 border-white/15 hover:border-white/30 shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
          }`}
        >
          {/* Brand Logo inside Glass Pill */}
          <Link
            href="#chapter-00"
            className="flex items-center gap-2.5 group shrink-0 min-w-[130px]"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-emerald-400 p-[1px] group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_15px_rgba(6,182,212,0.35)]">
              <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
                <Code2 size={16} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="font-bold text-sm tracking-tight text-white drop-shadow-md">
              VIVEK<span className="text-cyan-400">.SINGH</span>
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-1 bg-white/[0.04] border border-white/10 rounded-full p-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] mx-auto">
            <AnimatePresence mode="popLayout">
              {visibleLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative group px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 shrink-0 ${
                      isActive
                        ? "text-cyan-300 font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-400/40 -z-10 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">
                      <TextRoll>{link.name}</TextRoll>
                    </span>
                  </Link>
                );
              })}
            </AnimatePresence>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center justify-end gap-2 shrink-0 min-w-[130px]">
            <button
              onClick={handleOpenQuickView}
              className="group relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/50 text-xs font-mono text-cyan-200 hover:bg-cyan-500/25 hover:border-cyan-400 hover:text-white transition-all duration-300 font-bold shadow-[0_0_15px_rgba(6,182,212,0.25)] cursor-pointer"
            >
              <Sparkles size={13} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
              <TextRoll>QUICK VIEW</TextRoll>
            </button>

            <a
              href="#work"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all group"
            >
              <FastForward size={13} className="text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              <TextRoll>Skip</TextRoll>
            </a>

            {(!isScrolled || isHovered) && (
              <a
                href="https://github.com/viveksingh31722"
                target="_blank"
                rel="noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 text-xs font-mono text-white hover:bg-white/15 hover:border-white/30 transition-all group"
              >
                <TextRoll>GitHub</TextRoll>
                <ExternalLink size={11} className="text-slate-400" />
              </a>
            )}

            {/* Tablet Menu Trigger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE & TABLET FULL-SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="fixed inset-0 z-[100050] bg-[#030712]/98 backdrop-blur-3xl flex flex-col justify-between px-6 py-6 overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="w-full max-w-lg mx-auto flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
              <Link href="#chapter-00" onClick={closeMenu} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 p-[1px]">
                  <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
                    <Code2 size={15} className="text-cyan-400" />
                  </div>
                </div>
                <span className="font-bold text-base tracking-tight text-white font-sans">
                  VIVEK<span className="text-cyan-400">.SINGH</span>
                </span>
              </Link>

              <button
                onClick={closeMenu}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Staggered Navigation Items */}
            <div className="w-full max-w-sm mx-auto my-auto py-6 space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="pb-4"
              >
                <button
                  onClick={() => {
                    closeMenu();
                    if (handleOpenQuickView) handleOpenQuickView();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-cyan-500 text-black font-mono text-xs font-bold shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-98 transition-transform cursor-pointer"
                >
                  <Sparkles size={14} />
                  <span>QUICK VIEW RECRUITER SUMMARY</span>
                </button>
              </motion.div>

              {navLinks.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + idx * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl text-xl sm:text-2xl font-bold text-slate-200 hover:text-cyan-300 hover:bg-white/5 transition-all group"
                  >
                    <span>{item.name}</span>
                    <ArrowRight size={18} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Secondary Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="w-full max-w-sm mx-auto pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0"
            >
              <a
                href="https://github.com/viveksingh31722"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                <span>GitHub Profile</span>
                <ExternalLink size={12} />
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-cyan-400 hover:underline"
              >
                Get in touch →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

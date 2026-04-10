"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
    <header 
      className={`fixed top-0 left-0 right-0 z-[10005] transition-all duration-500 ${
        scrolled ? "py-3 pb-5 lg:pb-3 bg-background/80 backdrop-blur-xl shadow-lg" : "py-6 pb-8 lg:pb-6 bg-transparent"
      }`}
    >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2 group z-[10001]">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-secondary to-primary p-[1px] group-hover:rotate-6 transition-transform">
              <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center">
                <Code2 size={20} className="text-secondary" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              VIVEK<span className="text-secondary">.SINGH</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link href="#experience" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Experience</Link>
            <Link href="#projects" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Projects</Link>
            <Link href="#blogs" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Blogs</Link>
            <Link href="#contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Contact</Link>
            
            <a 
              href="https://github.com/viveksingh31722" 
              target="_blank" 
              className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Github
            </a>
          </div>

          {/* Hamburger Button (Visible on tablet/mobile) */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all z-[10001]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[10000] bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {[
                { name: "Experience", href: "#experience", num: "01" },
                { name: "Projects", href: "#projects", num: "02" },
                { name: "Blogs", href: "#blogs", num: "03" },
                { name: "Contact", href: "#contact", num: "04" }
              ].map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="group"
                >
                  <Link 
                    href={item.href} 
                    onClick={closeMenu}
                    className="flex items-center gap-4 text-3xl md:text-4xl font-bold text-white hover:text-secondary transition-all"
                  >
                    <span className="text-xs font-mono text-secondary/60 mt-1">{item.num}</span>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 mt-12"
              >
                <a 
                  href="https://github.com/viveksingh31722" 
                  target="_blank" 
                  className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  Github
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

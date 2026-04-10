"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, User, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  const fullText = "Vivek Singh";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && typedText === fullText) {
      // Pause at the end of typing before deleting
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && typedText === "") {
      // Pause before typing again
      setIsDeleting(false);
      timeout = setTimeout(() => {}, 500); 
    } else {
      // Typing or Deleting
      timeout = setTimeout(() => {
        setTypedText(
          isDeleting 
            ? fullText.substring(0, typedText.length - 1) 
            : fullText.substring(0, typedText.length + 1)
        );
      }, isDeleting ? 60 : 120); 
    }
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, fullText]);

  return (
    <section className="min-h-screen flex items-center relative pt-20 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div 
          className="flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/upload-resume" className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 mb-8 hover:bg-cyan-400/20 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            </span>
            <Sparkles size={14} className="text-cyan-400" /> 
            <span className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">OPEN FOR COLLABORATION</span>
          </Link>

          <p className="text-cyan-400 font-semibold tracking-wide text-2xl mb-2 flex items-center min-h-[40px]">
            Hi there, I'm <span className="ml-2 font-serif italic text-3xl md:text-4xl text-purple-400 break-words">{typedText}</span>
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }} 
              className="inline-block w-[3px] h-8 bg-cyan-400 ml-1" 
            />
            <span className="inline-block animate-bounce ml-3 text-2xl">👋</span>
          </p>
          <h1 className="text-6xl md:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className="text-white block pb-2">Fullstack</span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent block">Architect.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg mt-2">
            Engineering scalable digital ecosystems and immersive experiences. Turning complex logic into <strong className="text-white font-semibold">elegant solutions</strong>.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#projects" className="bg-cyan-500 text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
              View Projects
            </a>
            <a href="https://github.com/viveksingh31722" target="_blank" className="p-3.5 ml-2 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/vivek-singh-4bc/" target="_blank" className="p-3.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:viveksingh31722@gmail.com" className="p-3.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300 group">
              <Mail className="text-slate-400 group-hover:text-white transition-colors" size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Terminal UI */}
        <motion.div 
          className="relative w-full max-w-lg mx-auto lg:ml-auto"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Glowing blur behind terminal */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full" />
          
          <div className="bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#0F172A] px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-xs font-mono text-slate-500">ZSH - 80x24</p>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="flex items-center gap-3 text-cyan-400 mb-4">
                <span className="text-green-400">➜</span>
                <span className="text-emerald-400">~</span>
                <span className="text-white">npm install innovation --global</span>
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2.5 h-5 bg-cyan-400 inline-block"
                />
              </div>
              <p className="text-slate-500 mb-8"># Resolving dependencies...</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0F172A] border border-slate-800 p-4 rounded-xl hover:border-cyan-500/50 transition-colors">
                  <p className="text-xs font-semibold text-cyan-400 mb-1 tracking-wider">STATUS</p>
                  <p className="text-white font-bold font-sans">Building Future</p>
                </div>
                <div className="bg-[#0F172A] border border-slate-800 p-4 rounded-xl hover:border-purple-500/50 transition-colors">
                  <p className="text-xs font-semibold text-purple-400 mb-1 tracking-wider">STACK</p>
                  <p className="text-white font-bold font-sans">Full-Stack</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

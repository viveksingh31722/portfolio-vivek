"use client";
import Link from "next/link";
import { Code2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-card-border/50 pt-16 pb-8 relative overflow-hidden bg-background">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10 pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center md:items-start text-center md:text-left mb-12">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight">
              <Code2 size={28} className="text-cyan-400" />
              <span className="text-white">VIVEK<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">.SINGH</span></span>
            </Link>
            <p className="text-slate-400 text-sm max-w-xs">
              Engineering scalable digital ecosystems and immersive web experiences with modern architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-semibold text-white mb-2">Quick Links</h3>
            <Link href="#experience" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Experience</Link>
            <Link href="#projects" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Projects</Link>
            <Link href="#contact" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-semibold text-white mb-2">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700/50 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 text-slate-400 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700/50 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 text-slate-400 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="mailto:contact@example.com" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700/50 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 text-slate-400 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/50 mt-8 gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} VIVEK.SINGH. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Built with</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" className="text-cyan-500"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span>& Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

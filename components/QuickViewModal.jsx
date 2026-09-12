"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Mail, ExternalLink, ShieldCheck, Cpu, Code2, Layers, MapPin } from "lucide-react";
import ResumeModal from "./ResumeModal";
import { useState } from "react";

export default function QuickViewModal({ isOpen, onClose }) {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-[100050] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#030712]/90 backdrop-blur-2xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl bg-[#090e1a] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 text-slate-200 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(6,182,212,0.2)] my-auto max-h-[90vh] overflow-y-auto z-10 space-y-8"
          >
            {/* Header */}
            <div className="flex justify-between items-start border-b border-white/10 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-xs font-mono text-cyan-300">
                  <ShieldCheck size={14} className="text-cyan-400" />
                  <span>RECRUITER & CLIENT EXECUTIVE SUMMARY</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  Vivek Singh — Profile Overview
                </h2>
                <p className="text-xs font-mono text-slate-400 flex items-center gap-2 pt-1">
                  <MapPin size={13} className="text-cyan-400" />
                  <span>Lucknow / Noida, India · Software Engineer</span>
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/15 transition-all"
                aria-label="Close Quick View"
              >
                <X size={20} />
              </button>
            </div>

            {/* Core Capability Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                  <Code2 size={16} /> FRONTEND & DESKTOP
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Next.js 16 (App Router), React 19, TypeScript, Electron, JointJS interactive canvas engines, Tailwind CSS.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold">
                  <Layers size={16} /> BACKEND & SYSTEMS
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Node.js, Express, Microservices architecture, Socket.IO WebSockets, RabbitMQ messaging queues, Redis in-memory cache, PostgreSQL, MongoDB.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                  <Cpu size={16} /> AI & DATA SYSTEMS
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Grounded RAG context pipelines, Gemini API reasoning loops, Schema-constrained database tools, ElasticSearch indexing.
                </p>
              </div>
            </div>

            {/* Official Work Experience Highlight */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
              <div className="flex flex-wrap justify-between items-center text-xs font-mono">
                <span className="text-cyan-300 font-bold">SOFTWARE ENGINEER · IDG10 ENGINEERING SOLUTIONS</span>
                <span className="text-slate-400">PRESENT · FULL-TIME</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Building production engineering software, subsea pipeline calculation tools (SPDT), distributed microservices, and grounded AI assistants.
              </p>
            </div>

            {/* Key Shipped Projects */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                FEATURED SHIPPED PROJECTS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <a
                  href="#work"
                  onClick={onClose}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 transition-all block group"
                >
                  <div className="font-bold text-white group-hover:text-cyan-300 text-sm mb-1 flex items-center justify-between">
                    <span>Subsea Field Configurator</span>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-slate-400 font-sans text-xs">
                    Desktop engineering canvas for subsea layout comparison & physics cost estimations. (IDG10)
                  </p>
                </a>

                <a
                  href="#chapter-03"
                  onClick={onClose}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 transition-all block group"
                >
                  <div className="font-bold text-white group-hover:text-cyan-300 text-sm mb-1 flex items-center justify-between">
                    <span>Real-Time Chat & Microservices</span>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-slate-400 font-sans text-xs">
                    Low-latency distributed messaging gateway backed by Socket.IO, RabbitMQ & Redis queues.
                  </p>
                </a>

                <a
                  href="#chapter-04"
                  onClick={onClose}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-purple-400/50 transition-all block group"
                >
                  <div className="font-bold text-white group-hover:text-purple-300 text-sm mb-1 flex items-center justify-between">
                    <span>DocuLens AI Assistant</span>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-purple-400" />
                  </div>
                  <p className="text-slate-400 font-sans text-xs">
                    Grounded document-to-action AI assistant built with Next.js 16, Prisma 7 & Gemini API.
                  </p>
                </a>

                <a
                  href="#projects"
                  onClick={onClose}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-emerald-400/50 transition-all block group"
                >
                  <div className="font-bold text-white group-hover:text-emerald-300 text-sm mb-1 flex items-center justify-between">
                    <span>MedTrackInsight Console</span>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-emerald-400" />
                  </div>
                  <p className="text-slate-400 font-sans text-xs">
                    Biopharmaceutical query & benchmarking engine unifying ElasticSearch and PostgreSQL.
                  </p>
                </a>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                >
                  <Download size={15} />
                  <span>Download Resume (PDF)</span>
                </button>

                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-xs hover:bg-white/20 transition-all"
                >
                  <Mail size={15} />
                  <span>Contact Vivek</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                [ Close Quick View ]
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Embedded Resume Viewer */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  );
}

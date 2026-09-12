"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, BookOpen } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal";

export default function ChapterEnterAI() {
  const [activeStage, setActiveStage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHood, setShowHood] = useState(false);
  const [pipelineSimStep, setPipelineSimStep] = useState(0);

  const docuLensCaseStudy = {
    title: "DocuLens | Document-to-Action Project Assistant — PDA",
    summary: "An AI-powered grounded document analysis, schedule conflict verification, and human-in-the-loop project summary generator built on Next.js 16 (App Router), TypeScript, and PostgreSQL.",
    category: "AI & Full-Stack Engineering",
    role: "Full-Stack & AI Engineer",
    scope: "Concept, grounded RAG architecture, UI design, full-stack build",
    platform: "Web Application (App Router)",
    link: "https://doculens-coral.vercel.app/",
    github: "https://github.com/viveksingh31722",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Prisma 7", "PostgreSQL", "Gemini API", "Vitest"],
    whyTitle: "Most document search tools find keywords. Few find actionable intent.",
    whyThisExists: "Engineering specifications and construction contracts run hundreds of pages long. Standard search finds words, but fails to identify schedule conflicts, clause risks, or required action items. DocuLens turns static PDFs into grounded, decision-ready project summaries.",
    problemTitle: "Un-grounded LLMs invent facts when analyzing complex technical contracts.",
    problemDetails: "Allowing a standard LLM to read raw PDF text without structured grounding leads to hallucinations, missed schedule collisions, and un-verifiable outputs. Furthermore, granting LLMs direct database execution access creates severe security risks.",
    coreIdeaTitle: "Plan around grounded schemas and deterministic tool boundaries.",
    howItWorks: [
      { title: "1. Upload & Ingestion", desc: "PDFs uploaded via Next.js App Router, extracted and chunked securely." },
      { title: "2. Schema Grounding", desc: "Isolates project documents into pda_db PostgreSQL schemas via Prisma 7." },
      { title: "3. Gemini API Reasoning", desc: "Runs bounded completions API calls to detect schedule conflicts and action items." },
      { title: "4. Action Console", desc: "Presents glassmorphic human-in-the-loop reports with 100% source citations." }
    ],
    hardPartTitle: "Grounded AI without granting direct database access.",
    hardPart: "We built fixed, read-only tools and deterministic context handlers so the Gemini LLM can answer complex spending or schedule questions over project data without ever executing arbitrary SQL or modifying database state.",
    metrics: [
      { val: "0", label: "Direct DB queries executed by LLM" },
      { val: "100%", label: "Grounded source citation accuracy" },
      { val: "<2s", label: "Document conflict detection speed" },
      { val: "100%", label: "TypeScript & Unit Test coverage" }
    ]
  };

  const aiStages = [
    {
      stage: "01. Document Ingestion",
      title: "PDF Upload & Parsing",
      desc: "Raw engineering & project PDFs uploaded via Next.js App Router, extracted and tokenized safely.",
      tech: "Next.js 16 / TypeScript",
    },
    {
      stage: "02. Context Grounding",
      title: "Prisma & PostgreSQL Schema",
      desc: "Isolates project documents into grounded schemas, indexing metadata for deterministic conflict verification.",
      tech: "Prisma 7 / PostgreSQL",
    },
    {
      stage: "03. LLM Intelligence",
      title: "Gemini Completions API",
      desc: "Generates structured project summaries, schedule conflict checks, and human-in-the-loop action items.",
      tech: "Gemini API / GPT-4",
    },
    {
      stage: "04. Output Delivery",
      title: "Interactive Action Console",
      desc: "Delivers pixel-perfect glassmorphic report interfaces with verifiable source citations and unit test coverage.",
      tech: "Tailwind v4 / Vitest",
    },
  ];

  return (
    <>
      <section id="chapter-04" className="py-12 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto border-t border-white/10 relative bg-[#030712] bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(147,51,234,0.12),rgba(3,7,18,1))] overflow-hidden scroll-mt-32">
        {/* Ambient Neural Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-600/15 via-pink-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

        {/* Chapter Label */}
        <div className="flex justify-center mb-6 relative z-10">
          <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-[10px] sm:text-xs font-mono text-purple-300 uppercase tracking-wider sm:tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.2)] max-w-full text-center">
            CHAPTER 04 — ENTER AI
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto space-y-3 relative z-10"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            DocuLens: AI Document Intelligence Engine
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Building grounded, schema-bounded AI agents to eliminate document hallucination in engineering specifications.
          </p>
        </motion.div>

        {/* Full-Width Story Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 mb-12 shadow-2xl space-y-6 relative z-10"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/40 text-xs font-mono text-purple-300">
              <Sparkles size={14} className="text-purple-400" />
              <span>DocuLens | Document-to-Action Assistant</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              Transforming complex project PDFs into verifiable engineering actions.
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
              DocuLens analyzes long-form technical specification PDFs, detects schedule conflicts, and generates human-in-the-loop summaries using Next.js 16 (App Router), TypeScript, and Gemini API.
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Prisma 7", "PostgreSQL", "Gemini API", "Vitest"].map((t) => (
              <span key={t} className="px-3 py-1 bg-white/10 rounded-lg text-xs font-mono text-purple-300 border border-purple-400/30">
                {t}
              </span>
            ))}
          </div>

          {/* 4-Stage Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            {aiStages.map((item, idx) => (
              <div
                key={item.stage}
                onClick={() => setActiveStage(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeStage === idx
                    ? "bg-purple-500/15 border-purple-400/60 shadow-[0_0_25px_rgba(168,85,247,0.25)]"
                    : "bg-white/[0.03] border-white/10 hover:border-white/25"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-mono text-purple-300 font-bold">{item.stage}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {item.tech}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
            <a
              href="https://doculens-coral.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-500 text-white font-semibold text-xs hover:bg-purple-600 transition-all shadow-[0_0_25px_rgba(168,85,247,0.3)]"
            >
              <span>Live Application Demo</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-mono text-xs hover:bg-white/20 transition-all"
            >
              <BookOpen size={15} />
              <span>Read Full Case Study →</span>
            </button>
          </div>
        </motion.div>

        {/* DOCULENS APP SHOWCASE FRAME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0b081c]/90 backdrop-blur-xl border border-purple-500/30 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.15)] mb-12 relative z-10"
        >
          {/* Window Header */}
          <div className="px-6 py-4 bg-[#120c29]/90 border-b border-purple-500/20 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-purple-300 font-medium hidden sm:inline">
                DocuLens v1.0 — Document-to-Action AI Assistant Interface
              </span>
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={() => setShowHood(!showHood)}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                  showHood
                    ? "bg-purple-500 text-white font-bold border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    : "bg-purple-500/20 border-purple-400/30 text-purple-200 hover:bg-purple-500/30"
                }`}
              >
                <span>{showHood ? "PRODUCT VIEW" : "OPEN THE HOOD →"}</span>
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white hover:bg-white/20 transition-all"
              >
                <BookOpen size={14} />
                <span>Case Study</span>
              </button>
            </div>
          </div>

          {/* Content Display: Screenshot vs Open The Hood View */}
          {showHood ? (
            <div className="p-6 sm:p-10 bg-[#060412] font-mono space-y-6">
              <div className="flex justify-between items-center text-xs text-purple-300 pb-3 border-b border-purple-500/20">
                <span className="font-bold">SYSTEM ARCHITECTURE — DOCULENS RAG ENGINE</span>
                <span className="text-slate-500">BOUNDED LLM TOOL CALLS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-slate-500 block text-[10px]">01. INGESTION</span>
                  <span className="font-bold text-white block mt-1">PDF Chunking Engine</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">Next.js App Router</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-500/30">
                  <span className="text-purple-400 block text-[10px]">02. GROUNDING</span>
                  <span className="font-bold text-purple-300 block mt-1">Prisma 7 Schema</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">PostgreSQL (pda_db)</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-cyan-500/30">
                  <span className="text-cyan-400 block text-[10px]">03. INTELLIGENCE</span>
                  <span className="font-bold text-cyan-300 block mt-1">Gemini API Reasoning</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">Bounded Completions</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-emerald-500/30">
                  <span className="text-emerald-400 block text-[10px]">04. ACTION CONSOLE</span>
                  <span className="font-bold text-emerald-300 block mt-1">Verified Citations</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">Human-in-the-loop</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-slate-300 font-sans leading-relaxed">
                <strong className="text-purple-300 font-mono">Engineering Design Decision:</strong> Providing Gemini API with read-only Prisma database helper functions rather than raw SQL execution guarantees 0 un-grounded database mutations while achieving 100% citation accuracy.
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-8 bg-[#070412]/80 cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl group relative">
                <img
                  src="/docuLens_cover.png"
                  alt="DocuLens Document Assistant Interface"
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-3 rounded-full bg-purple-500 text-white font-semibold text-xs flex items-center gap-2 shadow-2xl">
                    <BookOpen size={16} /> Read Full Case Study
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tech Badges Footer */}
          <div className="px-6 py-4 bg-[#0a0618]/90 border-t border-purple-500/20 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-purple-300 uppercase tracking-wider mr-2">TECH STACK:</span>
            {["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Prisma 7", "PostgreSQL", "Gemini API"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-mono text-purple-300 rounded-lg border border-purple-500/20">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={docuLensCaseStudy}
      />
    </>
  );
}

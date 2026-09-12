"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, Network, ShieldCheck, ArrowUpRight, Layers } from "lucide-react";

export default function EngineeringDNA() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const dnaCategories = [
    { id: "all", name: "Complete Stack" },
    { id: "frontend", name: "Frontend & Canvas" },
    { id: "backend", name: "Backend & Systems" },
    { id: "ai", name: "AI & RAG Grounding" },
  ];

  const evidenceNodes = [
    {
      id: "subsea",
      category: "frontend",
      title: "Interactive Desktop Canvas",
      tech: "JointJS / Electron / Node.js",
      evidence: "Subsea Field Configurator",
      proof: "Decoupled 60 FPS interactive 2D node graph canvas from heavy physics computation engine, speeding up engineer workflow by 25%.",
      link: "#work",
    },
    {
      id: "chat",
      category: "backend",
      title: "Real-Time WebSocket & AMQP Queue",
      tech: "Socket.IO / RabbitMQ / Redis",
      evidence: "Real-Time Chat Microservices",
      proof: "Sub-50ms message propagation latency using RabbitMQ worker queue buffering and atomic Redis timestamp indexing under high message concurrency.",
      link: "#chapter-03",
    },
    {
      id: "doculens",
      category: "ai",
      title: "Grounded RAG Context Architecture",
      tech: "Next.js 16 / Prisma 7 / Gemini API",
      evidence: "DocuLens AI Assistant",
      proof: "Zero direct LLM database writes; schema-isolated bounded completions over 100+ page contract PDFs with 100% source citations.",
      link: "#chapter-04",
    },
    {
      id: "medtrack",
      category: "backend",
      title: "High-Speed Query & Search Indexing",
      tech: "ElasticSearch / Express / PostgreSQL",
      evidence: "MedTrackInsight Console",
      proof: "Sub-100ms analytical queries over 10M+ biopharmaceutical records unifying relational SQL and ElasticSearch indices.",
      link: "#projects",
    },
  ];

  const filteredNodes = selectedCategory === "all"
    ? evidenceNodes
    : evidenceNodes.filter((n) => n.category === selectedCategory);

  return (
    <section id="dna" className="py-12 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto border-t border-white/10 relative bg-[#030712] scroll-mt-32">
      <div className="flex justify-center mb-6">
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[10px] sm:text-xs font-mono text-cyan-300 uppercase tracking-wider sm:tracking-widest max-w-full text-center">
          CHAPTER 05 — THE ENGINEERING DNA
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          How I think about building software.
        </h2>
        <p className="text-slate-400 text-lg">
          Skills aren't just keywords on a resume—they are proven capabilities backed by shipped engineering systems.
        </p>
      </motion.div>

      {/* Conceptual Interactive Map */}
      <div className="bg-[#090e1a] border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <Layers size={16} className="text-cyan-400" />
            <span>SELECT ARCHITECTURE DOMAIN:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {dnaCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Evidence Node Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredNodes.map((node) => (
              <motion.div
                key={node.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-center gap-2 text-xs font-mono text-cyan-400">
                    <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono">{node.tech}</span>
                    <span className="text-slate-500 text-[10px] shrink-0 font-mono">PROVED IN</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {node.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {node.proof}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <ShieldCheck size={14} /> {node.evidence}
                  </span>

                  <a
                    href={node.link}
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

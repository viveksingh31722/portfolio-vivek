"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, Network, ShieldCheck, ArrowUpRight, Layers } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function EngineeringDNA() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const nodesRef = useRef(null);

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

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredNodes = selectedCategory === "all"
    ? evidenceNodes
    : evidenceNodes.filter((n) => n.category === selectedCategory);

  return (
    <section
      ref={sectionRef}
      id="dna"
      className="py-16 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto border-t border-white/10 relative bg-[#030712] scroll-mt-32"
    >
      <div className="flex justify-center mb-6">
        <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-xs font-mono text-cyan-300 uppercase tracking-widest text-center">
          ENGINEERING DNA & ARCHITECTURAL PROOF
        </span>
      </div>

      <div ref={headerRef} className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Philosophy:{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Proof Over Claims
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
          Every skill in my stack is grounded in shipped software, measurable benchmark metrics, and production architectural decisions.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 font-mono text-xs">
        {dnaCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-4 py-2 rounded-xl border transition-all duration-300 cursor-pointer ${
              selectedCategory === c.id
                ? "bg-cyan-500 text-black font-bold border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Proof Nodes Grid */}
      <div ref={nodesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredNodes.map((node) => (
            <motion.div
              key={node.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="p-7 rounded-2xl bg-[#090e1c]/80 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_15px_35px_rgba(6,182,212,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500 uppercase">{node.tech}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px]">
                    {node.evidence}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {node.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {node.proof}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex justify-end">
                <a
                  href={node.link}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 group/link"
                >
                  <span>Inspect System Architecture</span>
                  <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

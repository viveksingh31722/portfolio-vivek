"use client";
import { motion } from "framer-motion";
import { FlaskConical, Sparkles, Cpu, CheckCircle2, RefreshCw } from "lucide-react";

export default function TheLab() {
  const experiments = [
    {
      id: "EXP_001",
      title: "Grounded Document RAG Assistant",
      status: "SHIPPED",
      statusColor: "emerald",
      desc: "Isolated PostgreSQL schema grounding using Prisma 7 and Gemini Completions API to prevent LLM hallucinations over technical specification contracts.",
      tech: ["Next.js 16", "TypeScript", "Prisma 7", "PostgreSQL", "Gemini API"],
      link: "https://doculens-coral.vercel.app/",
    },
    {
      id: "EXP_002",
      title: "AMQP Queue & Redis Message Gateway",
      status: "SHIPPED",
      statusColor: "emerald",
      desc: "Decoupled WebSocket event dispatching with RabbitMQ message buffers to guarantee zero message loss during peak traffic queue bursts.",
      tech: ["MERN", "Socket.IO", "RabbitMQ", "Redis", "Microservices"],
      link: "https://github.com/viveksingh31722/Chat-App-Microservices",
    },
    {
      id: "EXP_003",
      title: "Subsea Pipeline Stress Calculation Engine",
      status: "SHIPPED",
      statusColor: "emerald",
      desc: "Interactive 2D drag-and-drop subsea manifold canvas calculating vessel rates and pipeline stress limits in real time.",
      tech: ["JavaScript", "Electron", "JointJS Canvas Engine", "Node.js"],
      link: "https://github.com/IshaanShettigar/SFC-iDG10",
    },
    {
      id: "EXP_004",
      title: "Autonomous Agentic AI Tool Execution",
      status: "EXPLORING",
      statusColor: "cyan",
      desc: "Investigating multi-agent coordination loops, deterministic tool calling boundaries, and autonomous task evaluation pipelines.",
      tech: ["Python", "LangChain / LangGraph", "Agentic Workflows", "OpenAI / Gemini"],
      link: null,
    },
  ];

  return (
    <section id="lab" className="py-12 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto border-t border-white/10 relative bg-[#030712] scroll-mt-32">
      <div className="flex justify-center mb-6">
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-[10px] sm:text-xs font-mono text-purple-300 uppercase tracking-wider sm:tracking-widest max-w-full text-center">
          CHAPTER 09 — THE LAB
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl mx-auto space-y-4"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Not everything I build starts with a client.
        </h2>
        <p className="text-slate-400 text-lg">
          The Lab is my space for technical explorations, architecture experiments, and building intelligent software prototypes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiments.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all flex flex-col justify-between space-y-6 group shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center font-mono text-xs">
                <span className="text-purple-400 font-bold tracking-wider">{exp.id}</span>
                {exp.status === "SHIPPED" ? (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-[10px]">
                    <CheckCircle2 size={12} /> {exp.status}
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-[10px]">
                    <RefreshCw size={12} className="animate-spin" /> {exp.status}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {exp.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                {exp.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-4 font-mono text-xs">
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/5 text-[10px]">
                    {t}
                  </span>
                ))}
              </div>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-semibold"
                >
                  <span>Inspect Experiment →</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

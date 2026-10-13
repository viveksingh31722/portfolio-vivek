"use client";
import { useEffect, useRef } from "react";
import { FlaskConical, Sparkles, Cpu, CheckCircle2, ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function TheLab() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".lab-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lab"
      className="py-16 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto border-t border-white/10 relative bg-[#030712] scroll-mt-32"
    >
      <div className="flex justify-center mb-6">
        <span className="px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-xs font-mono text-purple-300 uppercase tracking-widest text-center">
          CHAPTER 09 — THE LAB
        </span>
      </div>

      <div
        ref={headerRef}
        className="text-center mb-16 max-w-3xl mx-auto space-y-4"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Not everything I build starts with a client.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
          The Lab is where I experiment with new paradigms, test engineering architectures, and push into modern AI workflows.
        </p>
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {experiments.map((exp) => (
          <div
            key={exp.id}
            className="lab-card p-7 rounded-2xl bg-[#090e1c]/80 backdrop-blur-md border border-white/10 hover:border-purple-400/40 hover:shadow-[0_15px_35px_rgba(168,85,247,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-500 font-bold">{exp.id}</span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                    exp.statusColor === "emerald"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      : "bg-cyan-500/10 text-cyan-300 border-cyan-400/30"
                  }`}
                >
                  {exp.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {exp.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                {exp.desc}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {exp.link && (
                <div className="flex justify-end">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 group/link"
                  >
                    <span>View Repository / Live</span>
                    <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect, useRef } from "react";
import { Code2, Server, Database, Cloud, BrainCircuit, Terminal, Cpu } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const toolkitCategories = [
  {
    title: "Frontend Engineering",
    icon: <Code2 className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={22} />,
    desc: "Building accessible, performant, responsive interfaces",
    skills: ["React.js", "Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    title: "Backend & Systems",
    icon: <Server className="text-purple-400 group-hover:scale-110 transition-transform duration-300" size={22} />,
    desc: "Designing scalable APIs, microservices & web sockets",
    skills: ["Node.js", "Express", "RESTful APIs", "Socket.IO", "RabbitMQ"],
  },
  {
    title: "Data & Storage",
    icon: <Database className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" size={22} />,
    desc: "Relational DBs, document stores & in-memory caching",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma 7", "ElasticSearch"],
  },
  {
    title: "Infrastructure & Cloud",
    icon: <Cloud className="text-orange-400 group-hover:scale-110 transition-transform duration-300" size={22} />,
    desc: "Deployment, containerization & environment tooling",
    skills: ["Docker", "AWS (S3/SES)", "Linux", "Git / GitHub", "Vercel"],
  },
  {
    title: "AI & Agentic Systems",
    icon: <BrainCircuit className="text-pink-400 group-hover:scale-110 transition-transform duration-300" size={22} />,
    desc: "LLM integration, document grounding & context engineering",
    skills: ["Python", "Gemini API", "GPT-4 / LangChain", "RAG Pipelines", "Agentic AI"],
  },
  {
    title: "Engineering Practices",
    icon: <Cpu className="text-cyan-300 group-hover:scale-110 transition-transform duration-300" size={22} />,
    desc: "Performance benchmarking, clean code & robust test suites",
    skills: ["Vitest", "Unit Testing", "System Architecture", "CI/CD", "TypeScript"],
  },
];

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const headerRef = useRef(null);

  const toggleCategory = (idx) => {
    setExpandedCategory(expandedCategory === idx ? null : idx);
  };

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
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
        const cards = cardsRef.current.querySelectorAll(".skill-card");
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
      id="skills"
      className="py-16 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-7xl mx-auto border-t border-white/5 relative bg-[#030712] scroll-mt-32"
    >
      {/* Chapter Label */}
      <div className="flex justify-center mb-6">
        <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 uppercase tracking-widest text-center">
          CHAPTER 05 — THE WORK BEHIND THE WORK
        </span>
      </div>

      <div ref={headerRef} className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Toolkit
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
          The technical foundations and frameworks I use to engineer robust, high-performance software systems.
        </p>
      </div>

      {/* MOBILE INTERACTIVE ACCORDION VIEW (SCREENS < 768px) */}
      <div className="md:hidden space-y-3 font-mono text-xs">
        {toolkitCategories.map((cat, idx) => {
          const isExpanded = expandedCategory === idx || expandedCategory === null;
          return (
            <div
              key={cat.title}
              className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleCategory(idx)}
                className="w-full p-4 flex items-center justify-between text-left font-bold text-white bg-slate-900/60 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5">
                    {cat.icon}
                  </div>
                  <span className="text-sm tracking-wide">{cat.title}</span>
                </div>
                <span className="text-cyan-400 font-mono text-base">
                  {expandedCategory === idx ? "−" : "▸"}
                </span>
              </button>

              {isExpanded && (
                <div className="p-4 border-t border-white/5 space-y-3 bg-[#080d1b]/80">
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-mono text-slate-200 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* DESKTOP & TABLET GRID LAYOUT (SCREENS >= 768px) */}
      <div
        ref={cardsRef}
        className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {toolkitCategories.map((cat) => (
          <div
            key={cat.title}
            className="skill-card bg-[#090e1c]/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-[0_15px_35px_rgba(6,182,212,0.12)] hover:-translate-y-1.5 transition-all duration-400 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-500/10 transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                  {cat.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                {cat.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-slate-300 border border-white/5 group-hover:border-white/10 hover:border-cyan-400/50 hover:text-white transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

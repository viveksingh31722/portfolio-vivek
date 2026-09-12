"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, BrainCircuit, Terminal } from "lucide-react";

const toolkitCategories = [
  {
    title: "Frontend Engineering",
    icon: <Code2 className="text-cyan-400" size={22} />,
    desc: "Building accessible, performant, responsive interfaces",
    skills: ["React.js", "Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Systems",
    icon: <Server className="text-purple-400" size={22} />,
    desc: "Designing scalable APIs, microservices & web sockets",
    skills: ["Node.js", "Express", "RESTful APIs", "Socket.IO", "RabbitMQ"],
  },
  {
    title: "Data & Storage",
    icon: <Database className="text-emerald-400" size={22} />,
    desc: "Relational DBs, document stores & in-memory caching",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma 7", "ElasticSearch"],
  },
  {
    title: "Infrastructure & Cloud",
    icon: <Cloud className="text-orange-400" size={22} />,
    desc: "Deployment, containerization & environment tooling",
    skills: ["Docker", "AWS (S3/SES)", "Linux", "Git / GitHub", "Vercel"],
  },
  {
    title: "AI & Agentic Systems",
    icon: <BrainCircuit className="text-pink-400" size={22} />,
    desc: "LLM integration, document grounding & context engineering",
    skills: ["Python", "Gemini API", "GPT-4 / LangChain", "RAG Pipelines", "Agentic AI"],
  },
];

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (idx) => {
    setExpandedCategory(expandedCategory === idx ? null : idx);
  };

  return (
    <section id="skills" className="py-12 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-7xl mx-auto border-t border-white/5 relative bg-[#030712] scroll-mt-32">
      {/* Chapter Label */}
      <div className="flex justify-center mb-6">
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono text-cyan-400 uppercase tracking-wider sm:tracking-widest max-w-full text-center">
          CHAPTER 05 — THE WORK BEHIND THE WORK
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Engineering Toolkit
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          The technologies and frameworks I use to solve real engineering problems.
        </p>
      </motion.div>

      {/* MOBILE INTERACTIVE ACCORDION VIEW (SCREENS < 768px) */}
      <div className="md:hidden space-y-3 font-mono text-xs">
        {toolkitCategories.map((cat, idx) => {
          const isExpanded = expandedCategory === idx || expandedCategory === null;
          return (
            <div
              key={cat.title}
              className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleCategory(idx)}
                className="w-full p-4 flex items-center justify-between text-left font-bold text-white bg-slate-900/60"
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
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {toolkitCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">{cat.title}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {cat.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-mono text-slate-200 border border-white/5 group-hover:border-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

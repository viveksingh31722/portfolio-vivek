"use client";
import { motion } from "framer-motion";
import { User, Sparkles, MapPin, Code2 } from "lucide-react";

export default function ChapterAboutPerson() {
  const exploringItems = [
    { title: "LLMs & Prompt Engineering", desc: "Fine-tuning prompt structures and evaluation loops" },
    { title: "RAG & Vector Grounding", desc: "Building context retrieval layers over enterprise data" },
    { title: "AI Agents & Agentic Workflows", desc: "Autonomous tool invocation and multi-step reasoning" },
    { title: "Distributed System Design", desc: "High-concurrency caching, messaging queues and fault tolerance" },
  ];

  return (
    <section id="about" className="py-12 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto border-t border-white/5 relative bg-[#030712] scroll-mt-32">
      {/* Chapter Label */}
      <div className="flex justify-center mb-6">
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono text-cyan-400 uppercase tracking-wider sm:tracking-widest max-w-full text-center">
          CHAPTER 06 — THE PERSON BEHIND THE CODE
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          So, who is Vivek?
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          I am a software engineer who loves taking complicated, messy problems and turning them into clean, high-performance software people love using.
        </p>
      </motion.div>

      {/* Modern Full-Width Container */}
      <div className="space-y-8">
        {/* Human Story Card with Portrait Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-center"
        >
          {/* Vivek's Photo Frame */}
          <div className="w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden border border-cyan-500/30 shrink-0 shadow-[0_0_30px_rgba(6,182,212,0.2)] relative group">
            <img
              src="/vivek-profile.jpg"
              alt="Vivek Singh"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-white/10">
                Vivek Singh · Software Engineer
              </span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <User size={16} /> END-TO-END MINDSET
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              Understanding systems from the interface down to the hardware.
            </h3>

            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Whether it’s calculating subsea pipeline stress limits in real time, building low-latency WebSocket backends, or designing AI document assistants—I care about how every single layer fits together.
              </p>
              <p>
                I believe great software requires equal attention to UX clarity, API architecture, data persistence, and reliable deployment.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-cyan-400" /> Lucknow / Noida, India</span>
              <span className="flex items-center gap-1.5"><Code2 size={14} className="text-purple-400" /> Full-Stack & AI Systems</span>
            </div>
          </div>
        </motion.div>

        {/* Currently Exploring Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0c0d1a] border border-purple-500/20 rounded-3xl p-8 sm:p-10 space-y-6"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
            <Sparkles size={16} /> CURRENTLY EXPLORING
          </div>

          <h3 className="text-2xl font-bold text-white leading-tight">
            Pushing deeper into Intelligent & Agentic AI
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {exploringItems.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="text-sm font-bold text-slate-200 mb-1">{item.title}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

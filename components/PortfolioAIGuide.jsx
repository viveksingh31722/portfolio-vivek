"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageSquare, X, Send, Sparkles } from "lucide-react";

export default function PortfolioAIGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "ai",
      text: "Hi, I'm Vivek's Portfolio AI Guide. Ask me anything about his projects, architecture decisions, or tech stack!",
    },
  ]);

  const presetQueries = [
    {
      q: "Show me Vivek's strongest backend project.",
      a: "Vivek built a Real-Time Chat Application & Microservices platform using MERN, Socket.IO, RabbitMQ queues, and Redis in-memory caching to achieve sub-50ms message propagation latency under high concurrency.",
    },
    {
      q: "How does his subsea desktop app work?",
      a: "Subsea Field Configurator is an Electron desktop app with an interactive JointJS node canvas. It decouples high-frequency 60 FPS rendering from background physics loops to calculate pipeline stress limits and cost breakdowns in real time.",
    },
    {
      q: "What AI projects has he built?",
      a: "Vivek engineered DocuLens, a grounded document-to-action project assistant built on Next.js 16 (App Router), TypeScript, Prisma 7, PostgreSQL, and Gemini API. It analyzes technical PDFs for schedule conflicts without allowing arbitrary database writes.",
    },
    {
      q: "What is Vivek's tech stack?",
      a: "Frontend & Desktop: Next.js 16, React 19, TypeScript, Electron, JointJS, Tailwind.\nBackend & Systems: Node.js, Express, Microservices, Socket.IO, RabbitMQ, Redis, PostgreSQL, MongoDB, ElasticSearch.",
    },
  ];

  const handleAskPreset = (preset) => {
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: preset.q },
      { sender: "ai", text: preset.a },
    ]);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userText = query.trim();
    setQuery("");

    // Grounded response matching query
    let responseText = "Vivek is a Full-Stack & AI Systems Engineer specializing in Next.js 16, Node.js microservices, Electron engineering tools, and grounded Gemini RAG pipelines.";

    const lower = userText.toLowerCase();
    if (lower.includes("chat") || lower.includes("backend") || lower.includes("microservice")) {
      responseText = presetQueries[0].a;
    } else if (lower.includes("subsea") || lower.includes("desktop") || lower.includes("idg10")) {
      responseText = presetQueries[1].a;
    } else if (lower.includes("ai") || lower.includes("doculens") || lower.includes("rag")) {
      responseText = presetQueries[2].a;
    } else if (lower.includes("stack") || lower.includes("skill") || lower.includes("tech")) {
      responseText = presetQueries[3].a;
    }

    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "ai", text: responseText },
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[9995]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-mono text-xs font-bold shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all"
        >
          <Bot size={18} />
          <span className="hidden sm:inline">ASK PORTFOLIO AI</span>
        </button>
      </div>

      {/* Chat Drawer Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-20 right-6 z-[10000] w-[calc(100%-3rem)] max-w-sm bg-[#090e1a]/95 border border-purple-500/30 rounded-3xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-2xl space-y-4 text-xs font-sans"
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-purple-300 font-mono font-bold">
                <Sparkles size={16} className="text-purple-400" />
                <span>PORTFOLIO AI GUIDE</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="max-h-64 overflow-y-auto space-y-3 pr-1">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-purple-600/20 border border-purple-500/30 text-purple-200 ml-6"
                      : "bg-white/5 border border-white/10 text-slate-200 mr-4"
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                </div>
              ))}
            </div>

            {/* Presets */}
            <div className="space-y-1.5 pt-2 border-t border-white/10">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Suggested Queries:</span>
              <div className="flex flex-wrap gap-1.5">
                {presetQueries.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAskPreset(p)}
                    className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-400/40 text-[10px] text-slate-300 transition-all text-left"
                  >
                    {p.q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleCustomSubmit} className="flex gap-2 pt-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about Vivek's work..."
                className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-colors"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

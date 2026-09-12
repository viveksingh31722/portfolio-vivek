"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Network, Activity, BookOpen } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal";

export default function ChapterBiggerSystems() {
  const [activeStep, setActiveStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHood, setShowHood] = useState(false);
  const [trafficUsers, setTrafficUsers] = useState(100);
  const [selectedStrategy, setSelectedStrategy] = useState("queue");

  const chatCaseStudy = {
    title: "Real-Time Chat Application & Microservices",
    summary: "Scalable real-time communication platform built with MERN microservices, Socket.IO, RabbitMQ, and Redis for low-latency messaging.",
    category: "Distributed Backend & Systems",
    role: "Backend & Systems Engineer",
    scope: "Microservices design, WebSocket gateways, message queue integration",
    platform: "Web & Microservices Cluster",
    link: "https://github.com/viveksingh31722/Chat-App-Microservices",
    github: "https://github.com/viveksingh31722/Chat-App-Microservices",
    tags: ["MERN", "Socket.IO", "RabbitMQ", "Redis", "Microservices", "MongoDB", "Express"],
    whyTitle: "Monolithic REST APIs fail under high-concurrency real-time workloads.",
    whyThisExists: "HTTP polling degrades server performance and causes message delivery delays. Building an enterprise-grade chat system required an event-driven architecture that scales backend microservices independently.",
    problemTitle: "Traffic spikes crash monolithic API endpoints during burst activity.",
    problemDetails: "Direct HTTP connections overheat under high message concurrency. Without asynchronous queue buffering and in-memory state caching, message delivery lags and databases lock up.",
    coreIdeaTitle: "Event-driven WebSocket gateway buffered by RabbitMQ and Redis.",
    howItWorks: [
      { title: "1. Persistent WebSocket", desc: "Client establishes a persistent WebSocket connection via Socket.IO." },
      { title: "2. Gateway Validation", desc: "Express API gateway validates JWT token and message payload." },
      { title: "3. RabbitMQ Buffer", desc: "Buffers peak message spikes and queues async worker processing." },
      { title: "4. In-Memory Caching", desc: "Redis stores hot channel states while MongoDB handles cold storage." }
    ],
    hardPartTitle: "Maintaining strict message ordering across distributed worker instances.",
    hardPart: "Decoupling processing into RabbitMQ worker threads meant messages could arrive out of sequence. We implemented partition-key routing and atomic Redis timestamp indexing to ensure strict, linear delivery.",
    metrics: [
      { val: "<50ms", label: "Real-time message propagation latency" },
      { val: "100%", label: "Message delivery queue reliability" },
      { val: "4", label: "Unified transport modes (WebSocket, AMQP, HTTP, PubSub)" },
      { val: "0", label: "Downtime during peak traffic queue bursts" }
    ]
  };

  const architectureNodes = [
    {
      id: "client",
      title: "1. Client Connection",
      tech: "React / WebSocket",
      desc: "Client establishes a persistent WebSocket connection to the gateway for sub-50ms bidirectional messaging.",
    },
    {
      id: "gateway",
      title: "2. API Gateway & Socket.IO",
      tech: "Express / Node.js",
      desc: "Authenticates JWT tokens, validates message payloads, and emits real-time events to connected channel rooms.",
    },
    {
      id: "queue",
      title: "3. RabbitMQ Message Queue",
      tech: "RabbitMQ AMQP",
      desc: "Buffers peak traffic spikes and asynchronously dispatches message processing jobs to worker services.",
    },
    {
      id: "workers",
      title: "4. Microservice Workers",
      tech: "Node.js Workers",
      desc: "Decoupled background tasks handle notifications, search indexing, and chat history persistence.",
    },
    {
      id: "cache",
      title: "5. Redis & DB Persistence",
      tech: "Redis / MongoDB",
      desc: "In-memory Redis layer caches hot channel states while MongoDB persists encrypted chat transcripts.",
    },
  ];

  return (
    <>
      <section id="chapter-03" className="py-12 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto border-t border-white/5 relative bg-[#030712] scroll-mt-32">
        {/* Chapter Label */}
        <div className="flex justify-center mb-6">
          <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono text-cyan-400 uppercase tracking-wider sm:tracking-widest max-w-full text-center">
            CHAPTER 03 — WHEN SYSTEMS GOT BIGGER
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Messages shouldn't have to wait.
          </h2>
          <p className="text-slate-400 text-lg">
            Scaling backend architectures for low-latency communication, microservice decoupling, and high-concurrency throughput.
          </p>
        </motion.div>

        {/* Full-Width Story Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl space-y-6"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Network size={16} /> Distributed Microservices Architecture
          </div>

          <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
            Real-Time Chat & High-Throughput Microservice Systems
          </h3>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            When transitioning from single monolithic APIs to distributed systems, simple HTTP requests no longer cut it. By combining <strong className="text-white">Socket.IO</strong>, <strong className="text-white">RabbitMQ</strong> queues, and <strong className="text-white">Redis</strong> in-memory caching, messages flow instantly while background tasks process asynchronously.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["MERN", "Socket.IO", "RabbitMQ", "Redis", "Microservices", "PostgreSQL", "ElasticSearch"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-slate-300 border border-white/5">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-4 border-t border-white/5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-500/20 transition-all"
            >
              <BookOpen size={15} />
              <span>Read Full Case Study →</span>
            </button>

            <a
              href="https://github.com/viveksingh31722/Chat-App-Microservices"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:bg-white/10 transition-all"
            >
              <span>GitHub Repository</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* STEP 02: THE CHAT APP SHOWCASE FRAME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0b0f19] border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-12"
        >
          {/* Window Header */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-white/10 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400 font-medium hidden sm:inline">
                Real-Time Chat & Microservices Architecture — Platform Interface
              </span>
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={() => setShowHood(!showHood)}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                  showHood
                    ? "bg-cyan-500 text-black font-bold border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "bg-cyan-500/15 border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/25"
                }`}
              >
                <span>{showHood ? "PRODUCT VIEW" : "OPEN THE HOOD →"}</span>
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-200 hover:bg-white/10 transition-all"
              >
                <BookOpen size={14} />
                <span>Case Study</span>
              </button>
            </div>
          </div>

          {/* Content Display: Product Screenshot vs Open The Hood View */}
          {showHood ? (
            <div className="p-6 sm:p-10 bg-[#070b16] font-mono space-y-6">
              <div className="flex justify-between items-center text-xs text-cyan-400 pb-3 border-b border-white/10">
                <span className="font-bold">SYSTEM ARCHITECTURE — REAL-TIME CHAT & MICROSERVICES</span>
                <span className="text-slate-500">EVENT-DRIVEN WEBSOCKET & AMQP QUEUE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-xs">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-slate-500 block text-[10px]">01. CLIENT</span>
                  <span className="font-bold text-white block mt-1">React WebSocket</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">Sub-50ms Latency</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-cyan-500/30">
                  <span className="text-cyan-400 block text-[10px]">02. GATEWAY</span>
                  <span className="font-bold text-cyan-300 block mt-1">Express & Socket.IO</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">JWT Token Check</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-amber-500/30">
                  <span className="text-amber-400 block text-[10px]">03. BUFFER QUEUE</span>
                  <span className="font-bold text-amber-300 block mt-1">RabbitMQ AMQP</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">Spike Protection</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-purple-500/30">
                  <span className="text-purple-400 block text-[10px]">04. WORKER NODES</span>
                  <span className="font-bold text-purple-300 block mt-1">Node.js Workers</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">Async Persistence</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-emerald-500/30">
                  <span className="text-emerald-400 block text-[10px]">05. STATE & DB</span>
                  <span className="font-bold text-emerald-300 block mt-1">Redis & MongoDB</span>
                  <span className="text-[10px] text-slate-400 mt-1 block">Hot Cache + Cold DB</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-300 font-sans leading-relaxed">
                <strong className="text-cyan-300 font-mono">Engineering Design Decision:</strong> Decoupling socket events from persistence operations using RabbitMQ AMQP queues prevented database locks during burst messaging traffic.
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-8 bg-slate-950/60 cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group relative">
                <img
                  src="/chat-app-cover.png"
                  alt="Real-Time Chat Application Interface"
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold text-xs flex items-center gap-2 shadow-2xl">
                    <BookOpen size={16} /> Read Full Case Study
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tech Badges Footer */}
          <div className="px-6 py-4 bg-slate-900/50 border-t border-white/10 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">TECH STACK:</span>
            {["MERN", "Socket.IO", "RabbitMQ", "Redis", "Microservices", "MongoDB", "Express"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-mono text-cyan-300 rounded-lg border border-white/5">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* INTERACTIVE TRAFFIC CONCURRENCY SIMULATOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#090d19] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl mb-12"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/10">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider">
                INTERACTIVE ENGINEERING SIMULATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Traffic Concurrency Challenge: Scaling Under Load
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 font-mono text-xs w-full sm:w-auto">
              {[10, 100, 1000, 10000].map((num) => (
                <button
                  key={num}
                  onClick={() => setTrafficUsers(num)}
                  className={`px-2.5 py-1.5 rounded-lg border transition-all text-center ${
                    trafficUsers === num
                      ? "bg-cyan-500 text-black font-bold border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {num.toLocaleString()} USERS
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="text-slate-300">
              Simulating <span className="text-cyan-300 font-bold">{trafficUsers.toLocaleString()} concurrent WebSocket connections</span> emitting simultaneous message payloads.
            </div>

            <div className="space-y-2">
              <span className="text-slate-400 uppercase">CHOOSE AN ARCHITECTURE STRATEGY:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedStrategy("api")}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedStrategy === "api"
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-200"
                      : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <div className="font-bold text-white mb-1">1. Scale Monolith API</div>
                  <div className="text-[10px] text-slate-400 font-sans">Add extra Express server instances behind round-robin load balancer.</div>
                </button>

                <button
                  onClick={() => setSelectedStrategy("queue")}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedStrategy === "queue"
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-200"
                      : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <div className="font-bold text-white mb-1">2. RabbitMQ & Redis Queue</div>
                  <div className="text-[10px] text-slate-400 font-sans">Buffer incoming bursts into AMQP message queues & cache hot channels in Redis.</div>
                </button>

                <button
                  onClick={() => setSelectedStrategy("db")}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedStrategy === "db"
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-200"
                      : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <div className="font-bold text-white mb-1">3. Direct Database Writes</div>
                  <div className="text-[10px] text-slate-400 font-sans">Write every message event directly to MongoDB without queuing.</div>
                </button>
              </div>
            </div>

            {/* Simulation Feedback Output */}
            <div className="p-5 rounded-2xl bg-[#050812] border border-white/10 space-y-2 font-sans text-xs">
              <div className="font-mono text-[10px] text-cyan-400 font-bold uppercase">
                HOW VIVEK APPROACHED IT:
              </div>
              {selectedStrategy === "queue" ? (
                <div className="text-emerald-300 space-y-1">
                  <div className="font-bold">✓ OPTIMAL ARCHITECTURE CHOSEN!</div>
                  <p className="text-slate-300">
                    At {trafficUsers.toLocaleString()} users, RabbitMQ buffers spike traffic asynchronously while Redis delivers in-memory hot room state under 50ms latency with 0% database locks.
                  </p>
                </div>
              ) : selectedStrategy === "api" ? (
                <div className="text-amber-300 space-y-1">
                  <div className="font-bold">⚠ HIGHER RESOURCE COST & LATENCY SLIP</div>
                  <p className="text-slate-300">
                    Scaling raw REST API instances handles connections but causes database connection pool exhaustion when {trafficUsers.toLocaleString()} users write simultaneously.
                  </p>
                </div>
              ) : (
                <div className="text-red-400 space-y-1">
                  <div className="font-bold">✖ DATABASE LOCK RISK AT {trafficUsers.toLocaleString()} USERS</div>
                  <p className="text-slate-300">
                    Direct database writes create high write lock contention on MongoDB, degrading message response latency beyond 2,000ms.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Full-Width Interactive Message Pipeline Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0b0f19] border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6 overflow-hidden"
        >
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Activity size={14} className="text-cyan-400 animate-pulse" />
              <span>LIVE MESSAGE PIPELINE VISUALIZER</span>
            </div>
            <span className="text-xs font-mono text-slate-500">Click steps to inspect</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {architectureNodes.map((node, idx) => (
              <div
                key={node.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[140px] relative ${
                  activeStep === idx
                    ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/20"
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                    {node.tech}
                  </span>
                  <span className={`text-sm font-bold block ${activeStep === idx ? "text-cyan-300" : "text-slate-200"}`}>
                    {node.title}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 leading-tight pt-2">
                  {node.desc}
                </div>
                {idx < architectureNodes.length - 1 && (
                  <div className="lg:hidden text-center text-cyan-400 text-xs pt-2">↓</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={chatCaseStudy}
      />
    </>
  );
}

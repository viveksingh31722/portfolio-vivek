"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal";

const projectsData = [
  {
    id: 1,
    title: "MedTrackInsight",
    desc: "MedTrackInsight is a high-performance query console and benchmarking platform designed to empower biopharmaceutical R&D decisions.",
    summary: "MedTrackInsight is a high-performance query console and benchmarking platform designed to empower biopharmaceutical R&D decisions.",
    category: "Biotech & Data Systems",
    role: "Full-Stack Engineer",
    scope: "ElasticSearch architecture, Express API endpoints, Next.js UI",
    platform: "Web Dashboard Console",
    link: "https://www.medtrackintel.com/",
    github: "https://github.com/viveksingh31722",
    tags: ["Next.js", "Express", "Node.js", "PostgreSQL", "ElasticSearch"],
    image: "/medtrackInsigh_cover.png",
    whyTitle: "Biopharmaceutical R&D teams require high-speed analytical queries over massive dataset silos.",
    whyThisExists: "Biotech decision-makers often wait hours for complex cross-dataset queries across legacy database silos. MedTrackInsight unifies ElasticSearch and PostgreSQL into one lightning-fast benchmarking console.",
    problemTitle: "Slow query response times delay critical biopharmaceutical R&D decisions.",
    problemDetails: "Searching millions of clinical data points across un-indexed relational databases causes server timeouts and frustrates analysts who need rapid competitive intelligence.",
    coreIdeaTitle: "ElasticSearch indexing paired with Next.js & Express serverless caching.",
    howItWorks: [
      { title: "1. High-Speed Search", desc: "ElasticSearch indices provide sub-100ms full-text and filtered search over millions of records." },
      { title: "2. Express Gateway", desc: "Node.js API endpoints aggregate data and handle complex analytics logic." },
      { title: "3. Benchmarking Console", desc: "Interactive Next.js dashboard visualizes competitive metrics and pipeline trends." },
      { title: "4. Executive Insights", desc: "Generates executive reports and clinical trial benchmarks with one click." }
    ],
    hardPartTitle: "Synchronizing ElasticSearch indices with PostgreSQL without data drift.",
    hardPart: "Ensuring real-time data synchronization between PostgreSQL relational tables and ElasticSearch document indices under heavy concurrent write loads required custom transactional hooks and queue listeners.",
    metrics: [
      { val: "<100ms", label: "Search query latency" },
      { val: "10M+", label: "Indexed biopharmaceutical records" },
      { val: "100%", label: "Data sync reliability across SQL & Elastic" }
    ]
  },
  {
    id: 2,
    title: "DocuLens | Document-to-Action Project Assistant — PDA",
    desc: "An AI-powered grounded document analysis, schedule conflict verification, and human-in-the-loop project summary generator built on Next.js 16 (App Router), TypeScript, and PostgreSQL.",
    summary: "An AI-powered grounded document analysis, schedule conflict verification, and human-in-the-loop project summary generator built on Next.js 16 (App Router), TypeScript, and PostgreSQL.",
    category: "AI & Full-Stack Engineering",
    role: "Full-Stack & AI Engineer",
    scope: "Concept, grounded RAG architecture, UI design, full-stack build",
    platform: "Web Application (App Router)",
    link: "https://doculens-coral.vercel.app/",
    github: "https://github.com/viveksingh31722",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Prisma 7", "PostgreSQL", "Gemini API", "Vitest"],
    image: "/docuLens_cover.png",
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
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    desc: "Built a scalable real-time chat application using MERN and microservices, enabling low-latency communication with Socket.IO, RabbitMQ, and Redis.",
    summary: "Scalable real-time communication platform built with MERN microservices, Socket.IO, RabbitMQ, and Redis for low-latency messaging.",
    category: "Distributed Backend & Systems",
    role: "Backend & Systems Engineer",
    scope: "Microservices design, WebSocket gateways, message queue integration",
    platform: "Web & Microservices Cluster",
    link: "https://github.com/viveksingh31722/Chat-App-Microservices",
    github: "https://github.com/viveksingh31722/Chat-App-Microservices",
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "RabbitMQ", "Redis"],
    image: "/chat-app-cover.png",
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
  },
  {
    id: 4,
    title: "Subsea Field Configurator",
    desc: "Built a digital platform to design and simulate subsea field configurations with real-time layout comparison and cost analysis.",
    summary: "A digital desktop platform to design and simulate subsea oil & gas field configurations with real-time layout comparison and instant cost estimation.",
    category: "Desktop & Engineering Systems",
    role: "Software Engineer (IDG10)",
    scope: "Interactive canvas engine, physics calculation logic, desktop packaging",
    platform: "Desktop App (Electron)",
    link: "https://github.com/IshaanShettigar/SFC-iDG10",
    github: "https://github.com/IshaanShettigar/SFC-iDG10",
    tags: ["JavaScript", "Node.js", "Electron", "JointJS Canvas Engine", "Tailwind CSS"],
    image: "/subsea-cover.png",
    whyTitle: "Subsea engineering layout calculations took days of manual spreadsheet work.",
    whyThisExists: "Offshore oil and gas field layouts require evaluating pipeline stress limits, vessel selection parameters, and material cost breakdowns across multiple disconnected spreadsheets. Subsea Field Configurator brings real-time layout feedback into one interactive workspace.",
    problemTitle: "No real-time feedback when modifying 2D/3D subsea layout elements.",
    problemDetails: "Manual estimations made layout iteration painfully slow. A single pipeline route adjustment meant hours of re-entering values across isolated calculation tools with zero instant cost feedback.",
    coreIdeaTitle: "Interactive node-based canvas coupled with an instant calculation engine.",
    howItWorks: [
      { title: "1. Drag & Drop Elements", desc: "Subsea manifolds, trees, and pipelines placed directly on the interactive JointJS canvas." },
      { title: "2. Define Connections", desc: "Pipelines and umbilical lines automatically snapping to valid connection ports." },
      { title: "3. Instant Stress & Cost Engine", desc: "Calculates material costs, vessel daily rates, and stress boundaries on the fly." },
      { title: "4. Export BoM & Reports", desc: "Generates Bill of Materials (BoM) and cost comparison breakdowns in one click." }
    ],
    hardPartTitle: "Decoupling high-frequency canvas rendering from physics calculation loops.",
    hardPart: "To keep the JointJS canvas smooth at 60 FPS while running heavy engineering calculations in the background, we decoupled the rendering layer from the calculation engine, preventing UI stutters during complex drag operations.",
    metrics: [
      { val: "25%", label: "Workflow calculation speedup" },
      { val: "60%", label: "QA & calculation accuracy improvement" },
      { val: "100%", label: "Offline desktop execution via Electron" },
      { val: "60 FPS", label: "Smooth interactive canvas drag rate" }
    ]
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <>
      <section id="projects" className="py-12 md:py-24 px-4 sm:px-6 pb-28 md:pb-24 max-w-7xl mx-auto border-t border-white/5 bg-[#030712] scroll-mt-32">
        <motion.div 
          className="text-center mb-10 sm:mb-16 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Deep-dive case studies detailing technical architecture, engineering constraints, and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col bg-white/[0.03] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all group h-full shadow-2xl"
              >
                {/* Project Image Banner */}
                <div 
                  className="relative h-44 sm:h-56 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-70" />
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="absolute bottom-4 right-4 p-3 bg-cyan-500 text-black rounded-full opacity-90 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg hover:scale-110"
                    title="Read Case Study"
                  >
                    <BookOpen size={18} />
                  </button>
                </div>
                
                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 bg-white/5 text-slate-300 rounded-lg border border-white/5">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[10px] font-mono text-cyan-400 px-2 py-1 bg-cyan-500/10 rounded-lg">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Case Study & Link Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
                      >
                        <BookOpen size={14} />
                        <span>Read Case Study →</span>
                      </button>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          title="Open Link"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {projectsData.length > 3 && (
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <button 
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all active:scale-95 text-sm"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={20} className="text-cyan-400" /></>
              ) : (
                <>View All Projects <ChevronDown size={20} className="text-purple-400" /></>
              )}
            </button>
          </motion.div>
        )}
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}

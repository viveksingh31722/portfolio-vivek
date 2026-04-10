"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real-Time Chat Application",
    desc: "Built a scalable real-time chat application using MERN and microservices, enabling low-latency communication with Socket.IO, RabbitMQ, and Redis.",
    tags: ["MongoDB", "Express", "React","Node.js", "Socket.IO"],
    image: "/chat-app-cover.png",
    link: "https://github.com/viveksingh31722/Chat-App-Microservices",
  },
  {
    id: 2,
    title: "SaarLens | AI PDF SaaS",
    desc: "Built an AI-powered SaaS app that summarizes PDFs using GPT-4 and LangChain, with secure authentication and seamless file uploads.",
    tags: ["Next.js", "Tailwind", "Clerk", "GPT-4", "LangChain"],
    image: "/saarLens-cover.png",
    link: "https://github.com/viveksingh31722",
  },
  {
    id: 3,
    title: "Subsea Field Configurator",
    desc: "Built a digital platform to design and simulate subsea field configurations with real-time layout comparison and cost analysis.",
    tags: ["JavaScript", "Node.Js", "Electron", "Joint.Js","Tailwind"],
    image: "/subsea-cover.png",
    link: "https://github.com/IshaanShettigar/SFC-iDG10",
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">Selected projects that demonstrate my technical expertise.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, idx) => (
            <motion.div 
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all group h-full shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <a 
                  href={project.link} 
                  target="_blank" 
                  className="absolute bottom-4 right-4 p-3 bg-primary text-white rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-3 flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 bg-white/5 text-slate-300 rounded-lg border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {projects.length > 3 && (
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all active:scale-95"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={20} className="text-primary" /></>
            ) : (
              <>View All Projects <ChevronDown size={20} className="text-secondary" /></>
            )}
          </button>
        </motion.div>
      )}
    </section>
  );
}

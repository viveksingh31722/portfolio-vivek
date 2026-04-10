"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  // ... projects data ...
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
              className="flex flex-col bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all group h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 flex justify-between items-center group-hover:text-primary transition-colors">
                  {project.title}
                  <a href={project.link} target="_blank" className="opacity-100 transition-opacity">
                    <ArrowUpRight size={24} />
                  </a>
                </h3>
                <p className="text-muted mb-6 flex-grow line-clamp-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
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

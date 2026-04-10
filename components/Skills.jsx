"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Database, Cloud, Wrench, BrainCircuit, MonitorSmartphone, ChevronDown, ChevronUp } from "lucide-react";

// Using official Devicon URLs for perfectly colored, authentic technology logos
const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="text-blue-400" size={24} />,
    skills: [
      { name: "Python", exp: "1y+", desc: "AI/ML, automation, APIs", iconPath: "python/python-original.svg" },
      { name: "JavaScript", exp: "1.5y+", desc: "Full-stack, React, Node.js", iconPath: "javascript/javascript-original.svg" },
      { name: "TypeScript", exp: "1y+", desc: "Enterprise React/Next.js", iconPath: "typescript/typescript-original.svg" },
      { name: "Java", exp: "1y+", desc: "Spring Boot, enterprise", iconPath: "java/java-original.svg" },
      { name: "C++", exp: "1y+", desc: "Systems, algorithms", iconPath: "csharp/csharp-original.svg" }
    ]
  },
  {
    title: "AI/ML Technologies",
    icon: <BrainCircuit className="text-purple-400" size={24} />,
    skills: [
      { name: "PyTorch", exp: "3m+", desc: "Deep learning, neural networks", iconPath: "pytorch/pytorch-original.svg" },
      { name: "TensorFlow", exp: "3m+", desc: "Machine learning models", iconPath: "tensorflow/tensorflow-original.svg" },
      { name: "Pandas", exp: "3m+", desc: "Data manipulation, analysis", iconPath: "pandas/pandas-original.svg" },
      { name: "NumPy", exp: "3m+", desc: "Numerical computing", iconPath: "numpy/numpy-original.svg" },
      { name: "Jupyter", exp: "2m+",desc: "Research, data science", iconPath: "jupyter/jupyter-original.svg" }
    ]
  },
  {
    title: "Web Technologies & Frameworks",
    icon: <MonitorSmartphone className="text-emerald-400" size={24} />,
    skills: [
      { name: "React.js", exp: "1y+", desc: "SPAs, component libraries", iconPath: "react/react-original.svg" },
      { name: "Next.js", exp: "1y+", desc: "SSR, full-stack applications", iconPath: "nextjs/nextjs-original.svg" },
      { name: "Vue.js", exp: "1y+", desc: "Progressive web apps", iconPath: "vuejs/vuejs-original.svg" },
      { name: "Tailwind CSS", exp: "1y+", desc: "Utility-first styling", iconPath: "tailwindcss/tailwindcss-original.svg" },
      { name: "Node.js", exp: "1y+", desc: "High-performance APIs", iconPath: "nodejs/nodejs-original.svg" }
    ]
  },
  {
    title: "Databases",
    icon: <Database className="text-cyan-400" size={24} />,
    skills: [
      { name: "PostgreSQL", exp: "2y+", desc: "Relational databases", iconPath: "postgresql/postgresql-original.svg" },
      { name: "MySQL", exp: "2y+", desc: "Database management", iconPath: "mysql/mysql-original.svg" },
      { name: "MongoDB", exp: "1y+", desc: "NoSQL document storage", iconPath: "mongodb/mongodb-original.svg" },
      { name: "Redis", exp: "1y+", desc: "In-memory caching", iconPath: "redis/redis-original.svg" }
    ]
  },
  {
    title: "Tools & Cloud",
    icon: <Cloud className="text-orange-400" size={24} />,
    skills: [
      { name: "Git", exp: "1y+", desc: "Version control", iconPath: "git/git-original.svg" },
      { name: "AWS", exp: "1y+", desc: "Cloud services deployment", iconPath: "amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", exp: "1y+", desc: "Containerization", iconPath: "docker/docker-original.svg" },
      { name: "Linux", exp: "1y+", desc: "System administration", iconPath: "linux/linux-original.svg" },
      { name: "Figma", exp: "Current", desc: "UI/UX design, prototyping", iconPath: "figma/figma-original.svg" }
    ]
  },
  {
    title: "Development Environments",
    icon: <Wrench className="text-pink-400" size={24} />,
    skills: [
      { name: "VS Code", exp: "3y+", desc: "Primary code editor", iconPath: "vscode/vscode-original.svg" },
      { name: "Visual Studio", exp: "2y+", desc: ".NET development", iconPath: "visualstudio/visualstudio-plain.svg" },
      { name: "IntelliJ IDEA", exp: "1y+", desc: "Java development", iconPath: "intellij/intellij-original.svg" },
      { name: "Postman", exp: "2y+", desc: "API testing workflow", iconPath: "postman/postman-original.svg" }
    ]
  }
];

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-[1400px] mx-auto min-h-screen">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p className="text-slate-400 text-lg">A comprehensive overview of my technological proficiency.</p>
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            variants={item}
            layout
            className={`bg-[#0B1120] border border-slate-800/80 p-6 sm:p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group flex flex-col ${!showAll && index >= 3 ? 'hidden md:flex' : 'flex'}`}
          >
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800 group-hover:border-slate-700 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
            </div>

            {/* List of Skills */}
            <div className="flex flex-col gap-5">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-white/5 rounded-full p-2 border border-white/5 group-hover/item:border-cyan-500/30 transition-colors overflow-hidden">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.iconPath}`} 
                      alt={`${skill.name} logo`} 
                      className="w-full h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-500"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-200 group-hover/item:text-cyan-400 transition-colors">{skill.name}</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 group-hover/item:border-purple-500/50 group-hover/item:text-purple-300 transition-colors">
                        {skill.exp}
                      </span>
                    </div>
                    <span className="text-sm text-slate-500 mt-0.5">{skill.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button for Mobile */}
      <div className="mt-12 flex justify-center md:hidden">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all group active:scale-95"
        >
          {showAll ? (
            <>Show Less <ChevronUp size={20} className="text-cyan-400" /></>
          ) : (
            <>View All Skills <ChevronDown size={20} className="text-secondary" /></>
          )}
        </button>
      </div>
    </section>
  );
}

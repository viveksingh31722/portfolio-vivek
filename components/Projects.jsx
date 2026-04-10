"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real-Time Chat Application (Microservices-Based)",
    desc: "Built a scalable real-time chat application using MERN and microservices, enabling low-latency communication with Socket.IO, RabbitMQ, and Redis.",
    tags: ["MongoDB", "TypeScript", "Express", "React","Node.js","Microservices","RabbitMQ","Socket.IO","Redis"],
    image: "/chat-app-cover.png",
    link: "https://github.com/viveksingh31722/Chat-App-Microservices",
  },
  {
    id: 2,
    title: "SaarLens | AI-Powered PDF Summarization SaaS",
    desc: "Built an AI-powered SaaS app that summarizes PDFs using GPT-4 and LangChain, with secure authentication, subscriptions, and seamless file uploads.",
    tags: ["Next.js", "Tailwind", "Clerk", "Node.js","Stripe","LangChain"],
    image: "/saarLens-cover.png",
    link: "https://github.com/viveksingh31722",
  },
  {
    id: 3,
    title: "Subsea Field Configurator (SFC)",
    desc: "Built a digital platform to design and simulate subsea field configurations with real-time layout comparison and cost analysis.",
    tags: ["JavaScript", "Node.Js", "Electron", "Joint.Js","Tailwind","Vs Code","Mongodb"],
    image: "/subsea-cover.png",
    link: "https://github.com/IshaanShettigar/SFC-iDG10",
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-[100px] px-6 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted text-lg">A selection of things I've built recently.</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="glass-card flex flex-col group overflow-hidden md:opacity-60 md:grayscale-[60%] hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 flex justify-between items-center group-hover:text-primary transition-colors">
                {project.title}
                <a href={project.link} target="_blank" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={24} />
                </a>
              </h3>
              <p className="text-muted mb-6 flex-grow">{project.desc}</p>
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
      </motion.div>
    </section>
  );
}

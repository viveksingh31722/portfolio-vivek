"use client";
import { motion } from "framer-motion";

const techStack = [
  "NEXT.JS", "DOCKER", "POSTGRESQL", "AWS", "GOLANG", "REACT", "TYPESCRIPT", "TAILWIND"
];

export default function TechMarquee() {
  return (
    <div className="w-full bg-[#050B14] py-6 overflow-hidden border-y border-white/5 relative flex items-center">
      {/* Gradient Fades for Smooth Scroll Edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>

      <motion.div 
        className="flex whitespace-nowrap gap-16 items-center"
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {/* Double the array to create a seamless infinite loop effect */}
        {[...techStack, ...techStack].map((tech, i) => (
          <span 
            key={i} 
            className="text-2xl font-bold tracking-widest text-[#1e293b]"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

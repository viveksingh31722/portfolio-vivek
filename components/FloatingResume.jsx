"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function FloatingResume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ y: 100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ type: "spring", damping: 20, stiffness: 100, delay: 1 }}
        className="fixed bottom-6 left-1/2 z-[9000] hidden md:flex items-center gap-3 p-2 bg-[#020617]/80 backdrop-blur-md rounded-full border border-slate-800 shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]"
      >
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all cursor-pointer"
        >
          <Eye size={18} /> Preview Resume
        </button>
        <div className="w-[1px] h-6 bg-slate-800"></div>
        <a 
          href="/api/resume?action=download" 
          className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-[#020617] bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
        >
          <Download size={18} /> Download
        </a>
      </motion.div>

      {/* Mobile Version hidden to prevent UI overlap with bottom nav */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

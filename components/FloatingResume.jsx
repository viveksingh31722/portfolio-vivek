"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Download } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function FloatingResume() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isPastHero = scrollY > 500;
      const isNearBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 600;
      setIsVisible(isPastHero && !isNearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ y: 80, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            exit={{ y: 80, opacity: 0, x: "-50%" }}
            transition={{ type: "spring", damping: 24, stiffness: 200 }}
            className="fixed bottom-6 left-1/2 z-[9000] hidden md:flex items-center gap-2 p-1.5 bg-[#030712]/90 backdrop-blur-xl rounded-full border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_25px_rgba(6,182,212,0.18)] hover:border-cyan-400/40 transition-colors"
          >
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-cyan-300 hover:text-white hover:bg-cyan-500/15 transition-all cursor-pointer"
            >
              <Eye size={14} className="text-cyan-400" />
              <span>Preview Resume</span>
            </button>
            <div className="w-[1px] h-4 bg-white/15" />
            <a 
              href="/api/resume?action=download" 
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold text-black bg-gradient-to-r from-cyan-400 via-purple-300 to-emerald-400 hover:opacity-95 hover:shadow-[0_0_20px_rgba(6,182,212,0.45)] transition-all"
            >
              <Download size={13} />
              <span>PDF</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal is kept at root */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

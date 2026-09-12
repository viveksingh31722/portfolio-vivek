"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Upload } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  // Prevent scrolling on the background when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[85vh] bg-[#0B1120] border border-slate-800 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)] rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0F172A] border-b border-slate-800">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Resume Preview
              </h3>
              <div className="flex items-center gap-3">
                <a 
                  href="/upload-resume" 
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
                  title="Upload & update resume PDF"
                >
                  <Upload size={14} /> Update Resume
                </a>
                <a 
                  href="/api/resume?action=download" 
                  className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 px-3 py-1.5 rounded-lg border border-cyan-400/20 transition-colors"
                >
                  <Download size={16} /> Download PDF
                </a>
                <button 
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Document Viewer */}
            <div className="flex-grow bg-slate-900 w-full relative">
              <iframe 
                src="/api/resume#toolbar=0&navpanes=0&scrollbar=0" 
                className="w-full h-full border-none"
                title="Resume Preview"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

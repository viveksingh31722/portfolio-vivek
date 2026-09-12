"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MapPin, Calendar, Sparkles, ArrowRight, Download } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function PostCreditContact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section id="contact" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/10 relative bg-[#030712] scroll-mt-32">
        {/* Post-Credit Teaser Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl bg-[#09071c] border border-purple-500/30 text-center space-y-6 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(168,85,247,0.15)] mb-20 relative overflow-hidden"
        >
          <div className="flex justify-center">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-xs font-mono text-purple-300 uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={14} className="text-purple-400 animate-pulse" />
              POST-CREDIT SCENE — CHAPTER 12
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              THE STORY ISN'T FINISHED.
            </h2>
            <div className="text-slate-400 font-mono text-sm sm:text-base tracking-widest uppercase">
              NEXT CHAPTER: AGENTIC SYSTEMS — COMING SOON.
            </div>
          </div>

          <p className="text-slate-300 text-lg sm:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
            Maybe the next chapter is something we build together.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-xs hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              <span>LET'S TALK →</span>
            </a>

            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white font-mono text-xs hover:bg-white/20 transition-colors"
            >
              <Download size={15} />
              <span>Resume PDF</span>
            </button>
          </div>
        </motion.div>

        {/* Full Contact Section */}
        <div id="contact-form" className="bg-[#080d1b] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl space-y-12">
          <div className="text-center space-y-2 border-b border-white/10 pb-8">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Get In <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Have a project, role, or architecture challenge in mind? Send me a message below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Contact & Social Info */}
            <div className="space-y-8">
              <h4 className="text-xl font-bold text-white">Direct Channels</h4>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-mono block">Email</span>
                    <a href="mailto:viveksingh31722@gmail.com" className="text-white font-bold text-sm sm:text-base hover:text-cyan-400 transition-colors break-all">
                      viveksingh31722@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-mono block">Phone</span>
                    <a href="tel:+916393664992" className="text-white font-bold text-sm sm:text-base hover:text-cyan-400 transition-colors">
                      +91 6393664992
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-mono block">Location</span>
                    <span className="text-white font-bold text-sm sm:text-base">
                      Noida / Lucknow, Uttar Pradesh, India
                    </span>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white pt-4">Online Profiles</h4>
              <div className="flex flex-wrap gap-4 font-mono text-xs">
                <a
                  href="https://github.com/viveksingh31722"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white transition-all"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/viveksingh31722/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white transition-all"
                >
                  LinkedIn
                </a>
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="px-5 py-3 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/25 transition-all"
                >
                  Resume PDF
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div>
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 px-6 bg-white/[0.02] border border-emerald-500/30 rounded-2xl text-center space-y-4">
                  <CheckCircle className="text-emerald-400 w-16 h-16" />
                  <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                  <p className="text-slate-400 text-sm">Thank you for reaching out. I will respond to your message shortly.</p>
                  <button onClick={() => setStatus("idle")} className="text-xs font-mono text-cyan-400 hover:underline pt-4">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project, hiring, or architecture discussion"
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase">Message *</label>
                    <textarea
                      rows="5"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-xs hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? "Sending..." : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Viewer */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  );
}

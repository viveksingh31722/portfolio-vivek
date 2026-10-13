"use client";
import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle, Mail, Phone, MapPin, Calendar, Sparkles, ArrowRight, Download } from "lucide-react";
import ResumeModal from "./ResumeModal";
import TextRoll from "./TextRoll";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function PostCreditContact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const teaserRef = useRef(null);
  const formBoxRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (teaserRef.current) {
        gsap.fromTo(
          teaserRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: teaserRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (formBoxRef.current) {
        gsap.fromTo(
          formBoxRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formBoxRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      <section
        ref={sectionRef}
        id="contact"
        className="py-20 md:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10 relative bg-[#030712] scroll-mt-32"
      >
        {/* Post-Credit Teaser Banner */}
        <div
          ref={teaserRef}
          className="p-8 sm:p-14 rounded-3xl bg-[#09071c]/90 backdrop-blur-md border border-purple-500/30 text-center space-y-6 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(168,85,247,0.2)] mb-16 relative overflow-hidden group hover:border-purple-400/50 transition-colors duration-500"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex justify-center relative z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-xs font-mono text-purple-300 uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={14} className="text-purple-400 animate-pulse" />
              <span>POST-CREDIT SCENE — CHAPTER 12</span>
            </span>
          </div>

          <div className="space-y-2 relative z-10">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              THE STORY ISN'T FINISHED.
            </h2>
            <div className="text-slate-400 font-mono text-xs sm:text-sm tracking-widest uppercase">
              NEXT CHAPTER: AGENTIC SYSTEMS — COMING SOON.
            </div>
          </div>

          <p className="text-slate-300 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed relative z-10">
            Maybe the next chapter is something we build together.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4 relative z-10">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-mono font-bold text-xs hover:opacity-95 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] group"
            >
              <TextRoll rollColor="text-cyan-200">LET'S TALK</TextRoll>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white font-mono text-xs hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              <Download size={14} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <TextRoll>Resume PDF</TextRoll>
            </button>
          </div>
        </div>

        {/* Full Contact Section */}
        <div
          ref={formBoxRef}
          id="contact-form"
          className="bg-[#080d1b]/90 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.9)] space-y-12"
        >
          <div className="text-center space-y-2 border-b border-white/10 pb-8">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              Have a project, full-time role, or architecture challenge in mind? Send me a message below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Contact & Social Info */}
            <div className="space-y-8">
              <h4 className="text-xl font-bold text-white tracking-tight">Direct Channels</h4>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail size={19} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-mono block">Email</span>
                    <a
                      href="mailto:viveksingh31722@gmail.com"
                      className="text-white font-bold text-sm sm:text-base hover:text-cyan-400 transition-colors break-all"
                    >
                      viveksingh31722@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone size={19} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-mono block">Phone</span>
                    <a
                      href="tel:+916393664992"
                      className="text-white font-bold text-sm sm:text-base hover:text-cyan-400 transition-colors"
                    >
                      +91 6393664992
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-400/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin size={19} />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-mono block">Location</span>
                    <span className="text-white font-bold text-sm sm:text-base">
                      Noida / Lucknow, Uttar Pradesh, India
                    </span>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white pt-2 tracking-tight">Online Profiles</h4>
              <div className="flex flex-wrap gap-3 font-mono text-xs">
                <a
                  href="https://github.com/viveksingh31722"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/25 hover:text-white transition-all"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/viveksingh31722/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/25 hover:text-white transition-all"
                >
                  LinkedIn
                </a>
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/25 transition-all cursor-pointer"
                >
                  Resume PDF
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div>
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 px-6 bg-white/[0.02] border border-emerald-500/30 rounded-2xl text-center space-y-4">
                  <CheckCircle className="text-emerald-400 w-16 h-16 animate-bounce" />
                  <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                  <p className="text-slate-400 text-sm">Thank you for reaching out. I will respond to your message shortly.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-mono text-cyan-400 hover:underline pt-4 cursor-pointer"
                  >
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
                        className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
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
                        className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
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
                      className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
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
                      className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-y placeholder:text-slate-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-mono font-bold text-xs hover:opacity-95 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={15} />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
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

"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, ChevronDown, ChevronUp, BookOpen, PenTool, Sparkles, X, CheckCircle, Lock } from "lucide-react";
import Link from "next/link";

const fallbackBlogs = [
  {
    _id: "fb_1",
    title: "Building Grounded RAG Pipelines with Next.js 16 and Gemini API",
    content: "When building AI-powered assistants over hundreds of pages of engineering specifications, standard keyword search fails to detect intent and schedule conflicts. This article explores how schema-isolated PostgreSQL grounding and bounded Gemini completions API calls eliminate hallucinations without granting LLMs direct database mutation access.",
    readTime: "6 min read",
    createdAt: new Date("2026-02-15").toISOString(),
    tags: ["Next.js 16", "Gemini API", "RAG Grounding", "PostgreSQL"],
  },
  {
    _id: "fb_2",
    title: "Decoupling High-Frequency Canvas Rendering in Electron Desktop Apps",
    content: "Calculating subsea pipeline stress limits and 2D canvas layouts in real time can easily bottleneck single-threaded event loops. Here is how we separated the JointJS 60 FPS rendering layer from background physics calculation engines in Electron to achieve a 25% calculation speedup.",
    readTime: "8 min read",
    createdAt: new Date("2026-01-28").toISOString(),
    tags: ["Electron", "JointJS", "Node.js", "Performance"],
  },
  {
    _id: "fb_3",
    title: "Scaling WebSocket Microservices with RabbitMQ AMQP Buffers",
    content: "Monolithic REST APIs overheat under concurrent real-time chat bursts. In this breakdown, we examine how combining Socket.IO WebSocket gateways with RabbitMQ message queues and atomic Redis timestamp indexing preserves sub-50ms message propagation latency.",
    readTime: "7 min read",
    createdAt: new Date("2026-01-10").toISOString(),
    tags: ["Microservices", "Socket.IO", "RabbitMQ", "Redis"],
  },
];

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  // Form State for Modal
  const [formData, setFormData] = useState({ title: "", content: "", tags: "", readTime: "" });
  const [password, setPassword] = useState("");
  const [postStatus, setPostStatus] = useState("idle");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data) && data.length > 0) {
          setBlogs(data);
        } else {
          setBlogs(fallbackBlogs);
        }
      } else {
        setBlogs(fallbackBlogs);
      }
    } catch (error) {
      setBlogs(fallbackBlogs);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setPostStatus("loading");

    const tagsArray = formData.tags.split(",").map(t => t.trim()).filter(Boolean);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, tags: tagsArray, password })
      });

      if (res.ok) {
        setPostStatus("success");
        setFormData({ title: "", content: "", tags: "", readTime: "" });
        setPassword("");
        fetchBlogs();
      } else {
        setPostStatus("error");
      }
    } catch {
      setPostStatus("error");
    }
  };

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <>
      <section id="blogs" className="py-12 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto border-t border-white/10 relative bg-[#030712] scroll-mt-32">
        <div className="flex justify-center mb-6">
          <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-[10px] sm:text-xs font-mono text-purple-300 uppercase tracking-wider sm:tracking-widest flex items-center gap-2 max-w-full text-center">
            <BookOpen size={14} className="text-purple-400 shrink-0" />
            TECHNICAL ARTICLES & INSIGHTS
          </span>
        </div>

        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Engineering <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Writing & Breakdowns</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Deep-dive explorations into full-stack architecture, subsea calculation engines, grounded RAG models, and real-time backend systems.
          </p>

          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => setIsPostModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/15 border border-purple-400/30 text-xs font-mono text-purple-300 hover:bg-purple-500/25 transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)] font-semibold"
            >
              <PenTool size={14} />
              <span>Publish Article</span>
            </button>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 font-mono text-xs text-slate-400">
            <div className="w-10 h-10 border-2 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mb-4" />
            <p className="animate-pulse">Loading technical articles...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <AnimatePresence mode="popLayout">
              {visibleBlogs.map((blog, index) => (
                <motion.div 
                  key={blog._id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex flex-col bg-[#090e1c]/80 border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-purple-500/50 transition-all group h-full shadow-2xl space-y-6 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-purple-400" />
                      <span>{formatDate(blog.createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-cyan-300">
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <div className="flex-grow space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 font-sans">
                      {blog.content}
                    </p>
                  </div>

                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {blog.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded bg-white/5 text-purple-300 border border-purple-500/20">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/5">
                    {blog._id.startsWith("fb_") ? (
                      <div className="text-xs font-mono text-purple-400 flex items-center justify-between group-hover:text-purple-300">
                        <span>Read Technical Breakdown</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    ) : (
                      <Link 
                        href={`/blog/${blog._id}`} 
                        className="inline-flex items-center justify-between w-full text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight size={15} />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {blogs.length > 3 && (
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <button 
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs font-bold hover:bg-white/10 transition-all active:scale-95 shadow-lg"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={16} className="text-purple-400" /></>
              ) : (
                <>View All Articles ({blogs.length}) <ChevronDown size={16} className="text-cyan-400" /></>
              )}
            </button>
          </motion.div>
        )}
      </section>

      {/* Publish Article Modal */}
      <AnimatePresence>
        {isPostModalOpen && (
          <div className="fixed inset-0 z-[100050] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPostModalOpen(false)}
              className="fixed inset-0 bg-[#030712]/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#080d1b] border border-purple-500/30 rounded-3xl p-6 sm:p-10 text-slate-200 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(168,85,247,0.2)] my-auto max-h-[90vh] overflow-y-auto z-10 space-y-6"
            >
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-xs font-mono text-purple-300">
                    <PenTool size={14} className="text-purple-400" />
                    <span>PUBLISH TECHNICAL ARTICLE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Post to Database
                  </h3>
                </div>

                <button
                  onClick={() => setIsPostModalOpen(false)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {postStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 font-mono">
                  <CheckCircle className="text-emerald-400 w-14 h-14" />
                  <h4 className="text-xl font-bold text-white">Article Published!</h4>
                  <p className="text-slate-400 text-xs font-sans">Your new article is live on the portfolio database.</p>
                  <button
                    onClick={() => {
                      setPostStatus("idle");
                      setIsPostModalOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-500 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePostSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-400 uppercase">Article Title *</label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="E.g. Building Production RAG"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors font-sans text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-slate-400 uppercase">Estimated Read Time *</label>
                      <input
                        type="text"
                        required
                        value={formData.readTime}
                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                        placeholder="E.g. 7 min read"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors font-sans text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 uppercase">Tags (comma separated)</label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="Next.js 16, RAG, Gemini API, Architecture"
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors font-sans text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 uppercase">Content / Markdown *</label>
                    <textarea
                      rows="6"
                      required
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Write your technical post breakdown..."
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors font-sans text-sm resize-y"
                    />
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    <label className="text-slate-400 uppercase flex items-center gap-1">
                      <Lock size={12} className="text-purple-400" /> Admin Verification Password *
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors font-sans text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={postStatus === "loading"}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-xs hover:opacity-90 transition-opacity shadow-lg"
                  >
                    {postStatus === "loading" ? "Publishing to DB..." : "Publish Technical Article"}
                  </button>

                  {postStatus === "error" && (
                    <p className="text-red-400 text-center text-xs">Failed to publish. Ensure admin password is correct.</p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

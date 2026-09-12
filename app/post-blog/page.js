"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, CheckCircle, Trash2, ArrowLeft, Lock, Sparkles, Tag, Clock, Eye, Edit3 } from "lucide-react";
import Link from "next/link";

export default function PostBlog() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
    readTime: "",
  });
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [blogs, setBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState("write"); // 'write' or 'preview'

  useEffect(() => {
    fetchBlogs();
  }, [status]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const tagsArray = formData.tags.split(",").map(tag => tag.trim()).filter(Boolean);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tags: tagsArray,
          password
        })
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ title: "", content: "", tags: "", readTime: "" });
        setPassword("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleDelete = async (id) => {
    const adminPwd = window.prompt("Enter Admin Password to delete this blog:");
    if (!adminPwd) return;

    try {
      const res = await fetch("/api/blogs", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password: adminPwd })
      });

      if (res.ok) {
        alert("Blog deleted successfully!");
        fetchBlogs();
      } else {
        alert("Failed to delete. Incorrect password?");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 font-sans py-20 px-6 relative overflow-hidden">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-600/15 via-cyan-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        {/* Navigation Back Link */}
        <Link
          href="/#blogs"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        {/* Main Publishing Card */}
        <div className="bg-[#090e1c]/90 border border-purple-500/30 rounded-3xl p-8 sm:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(168,85,247,0.15)] backdrop-blur-2xl space-y-8">
          <div className="flex flex-wrap justify-between items-start gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-xs font-mono text-purple-300">
                <FileText size={14} className="text-purple-400" />
                <span>ADMIN PUBLISHING PORTAL</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Publish Technical Article
              </h1>
              <p className="text-slate-400 text-sm">
                Write down project breakdowns and architectural insights directly to the MongoDB database.
              </p>
            </div>

            {/* Mode Tabs */}
            <div className="flex gap-2 p-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs">
              <button
                onClick={() => setActiveTab("write")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all ${
                  activeTab === "write"
                    ? "bg-purple-500 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Edit3 size={13} /> Write
              </button>
              <button
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all ${
                  activeTab === "preview"
                    ? "bg-purple-500 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Eye size={13} /> Preview
              </button>
            </div>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-12 text-center space-y-4 font-mono"
            >
              <CheckCircle className="text-emerald-400 w-16 h-16" />
              <h2 className="text-2xl font-bold text-white font-sans">Article Published!</h2>
              <p className="text-slate-400 text-xs max-w-sm">Your technical post is now live in the database and visible on the portfolio.</p>
              <button
                onClick={() => setStatus("idle")}
                className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors shadow-lg"
              >
                Publish Another Article
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {activeTab === "write" ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-400 uppercase">Article Title *</label>
                      <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="E.g. Building Production Grounded RAG"
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-400 uppercase">Estimated Read Time *</label>
                      <input
                        name="readTime"
                        value={formData.readTime}
                        onChange={handleChange}
                        required
                        placeholder="E.g. 6 min read"
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase flex items-center gap-1.5">
                      <Tag size={13} className="text-purple-400" /> Tags (comma separated)
                    </label>
                    <input
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      placeholder="Next.js 16, RAG, Gemini API, Systems"
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase">Article Content / Markdown *</label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      required
                      rows={10}
                      placeholder="Write your technical article body here..."
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors resize-y leading-relaxed font-mono text-xs"
                    />
                  </div>
                </>
              ) : (
                /* Live Preview Mode */
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 space-y-6 min-h-[300px]">
                  <div className="space-y-2 pb-4 border-b border-white/10">
                    <span className="text-xs font-mono text-purple-400 font-bold">{formData.readTime || "Read time"}</span>
                    <h2 className="text-3xl font-bold text-white">{formData.title || "Article Title Preview"}</h2>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {formData.tags ? formData.tags.split(",").map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 font-mono text-[10px]">#{t.trim()}</span>
                      )) : <span className="text-xs text-slate-500">No tags added yet</span>}
                    </div>
                  </div>

                  <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-line font-sans">
                    {formData.content || "Write content in the 'Write' tab to preview it live here..."}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase flex items-center gap-1.5">
                    <Lock size={13} className="text-purple-400" /> Admin Verification Password *
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Admin Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-xs hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(168,85,247,0.3)] disabled:opacity-50"
                >
                  {status === "loading" ? "Publishing to MongoDB..." : "Publish Technical Article"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 font-mono text-xs text-center">Failed to publish. Ensure admin password is correct.</p>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Existing Database Articles Management */}
        {blogs.length > 0 && (
          <div className="bg-[#090e1c]/90 border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6 font-mono text-xs">
            <h3 className="text-lg font-bold text-white font-sans">Database Article Management</h3>
            <div className="space-y-3">
              {blogs.map((b) => (
                <div key={b._id} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div>
                    <span className="font-bold text-slate-200 block text-sm">{b.title}</span>
                    <span className="text-[10px] text-slate-500">{new Date(b.createdAt).toLocaleDateString()} · {b.readTime}</span>
                  </div>

                  <button
                    onClick={() => handleDelete(b._id)}
                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    title="Delete Blog"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

"use client";
import { useState, useEffect } from "react";
import { CheckCircle, FileText, Trash2 } from "lucide-react";

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

  useEffect(() => {
    fetchBlogs();
  }, [status]); // refetch when status changes (like after successful post)

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

    const payload = {
      ...formData,
      tags: tagsArray,
      password
    };

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setStatus("success");
      setFormData({ title: "", content: "", tags: "", readTime: "" });
      setPassword("");
    } else {
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
        fetchBlogs(); // refresh list
      } else {
        alert("Failed to delete. Incorrect password?");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center py-20 p-6 text-slate-200">
      <div className="glass-card w-full max-w-2xl p-10 bg-[#0B1120] border border-slate-800 rounded-3xl shadow-xl mb-10">
        <div className="flex flex-col items-center mb-8">
          <FileText size={48} className="text-purple-400 mb-4" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Post a Blog</h1>
          <p className="text-slate-400 mt-2 text-center text-sm">Write down your journey and experiences straight to the database.</p>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center py-10">
            <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
            <h2 className="text-xl font-bold text-white">Blog Posted!</h2>
            <p className="text-slate-400 mb-8 mt-2">Your blog is now live on the site.</p>
            <button onClick={() => setStatus("idle")} className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition-colors">Post Another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Title</label>
                <input 
                  name="title" value={formData.title} onChange={handleChange} required
                  placeholder="E.g. My Journey"
                  className="bg-slate-900/50 border border-slate-700 focus:border-purple-500 rounded-lg px-4 py-3 outline-none text-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Read Time</label>
                <input 
                  name="readTime" value={formData.readTime} onChange={handleChange} required
                  placeholder="E.g. 9 min read"
                  className="bg-slate-900/50 border border-slate-700 focus:border-purple-500 rounded-lg px-4 py-3 outline-none text-white transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tags (comma separated)</label>
              <input 
                name="tags" value={formData.tags} onChange={handleChange}
                placeholder="Personal, Journey, Software Engineering"
                className="bg-slate-900/50 border border-slate-700 focus:border-purple-500 rounded-lg px-4 py-3 outline-none text-white transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Content (Markdown/HTML supported if you parse it on frontend)</label>
              <textarea 
                name="content" value={formData.content} onChange={handleChange} required
                rows={8}
                placeholder="Before I begin, thanks for taking out time..."
                className="bg-slate-900/50 border border-slate-700 focus:border-purple-500 rounded-lg px-4 py-3 outline-none text-white transition-colors resize-y"
              />
            </div>

            <div className="flex flex-col gap-2 mt-4 pt-6 border-t border-slate-800">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Admin Verification</label>
              <input
                type="password"
                placeholder="Enter Admin Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3.5 rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity shadow-lg"
            >
              {status === "loading" ? "Posting..." : "Publish Blog"}
            </button>
            {status === "error" && <p className="text-red-500 text-sm text-center">Failed to publish. Ensure password is correct.</p>}
          </form>
        )}
      </div>

      {/* Blog Management Section */}
      {blogs.length > 0 && (
        <div className="glass-card w-full max-w-2xl p-8 bg-[#0B1120] border border-slate-800 rounded-3xl shadow-xl">
          <h2 className="text-xl font-bold text-white mb-6">Manage Blogs</h2>
          <div className="flex flex-col gap-3">
            {blogs.map((blog) => (
              <div key={blog._id} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-800 group">
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-200">{blog.title}</span>
                  <span className="text-xs text-slate-500">{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
                <button 
                  onClick={() => handleDelete(blog._id)}
                  className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                  title="Delete Blog"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

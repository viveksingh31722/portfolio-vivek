"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setBlogs(data);
        }
      } catch (error) {
        console.error("Failed to load blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <section id="blogs" className="py-24 px-6 max-w-[900px] mx-auto min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
      </section>
    );
  }

  // Dont render section at all if there are no blogs
  if (blogs.length === 0) {
    return null; 
  }

  return (
    <section id="blogs" className="py-24 px-6 max-w-[1400px] mx-auto min-h-screen">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-purple-400">Blogs</span> and <span className="text-purple-400">Writing</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Sharing my thoughts, experiences, and insights from my journey as a software engineer and student. Read about challenges, learnings, ai engineering stuff, and the exciting world of technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div 
            key={blog._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col h-full bg-[#0f121b] border border-slate-800 p-8 md:p-10 rounded-2xl shadow-xl hover:border-purple-500/30 transition-colors group"
          >
            {/* Metadata row */}
            <div className="flex items-center gap-3 text-sm font-medium text-slate-400 mb-5">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <span className="text-slate-500">•</span>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Title & Preview Content */}
            <div className="flex-grow">
              <h3 className="text-3xl font-extrabold text-white mb-4">
                {blog.title}
              </h3>
              <p className="text-[#a0a5b1] text-base leading-relaxed mb-8 line-clamp-4">
                {blog.content}
              </p>
            </div>

            {/* Tags array */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-8 text-sm">
                {blog.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-4 py-1.5 rounded-full bg-[#1e1a38] text-[#8e85f5] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Read Button */}
            <div>
              <Link 
                href={`/blog/${blog._id}`} 
                className="inline-flex items-center justify-center gap-2 bg-[#7e5cff] hover:bg-[#6c4be0] text-white font-bold py-3 px-8 rounded-lg text-sm transition-all shadow-[0_0_20px_rgba(126,92,255,0.4)]"
              >
                <ExternalLink size={18} /> Read Full Article
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

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

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  if (loading) {
    return (
      <section id="blogs" className="py-24 px-6 max-w-7xl mx-auto min-h-[50vh] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin mb-4"></div>
        <p className="text-slate-400 font-medium animate-pulse">Loading blog posts...</p>
      </section>
    );
  }

  if (blogs.length === 0) return null; 

  return (
    <section id="blogs" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-purple-400">Blogs</span> and <span className="text-purple-400">Writing</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Sharing my technical insights, project breakdowns, and thoughts on AI and software engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <AnimatePresence mode="popLayout">
          {visibleBlogs.map((blog, index) => (
            <motion.div 
              key={blog._id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col bg-[#0f121b] border border-slate-800 p-8 rounded-3xl hover:border-purple-500/50 transition-all group h-full shadow-xl"
            >
              <div className="flex items-center gap-3 text-sm text-slate-400 mb-6">
                <Calendar size={16} />
                <span>{formatDate(blog.createdAt)}</span>
                <span className="text-slate-500">•</span>
                <Clock size={16} />
                <span>{blog.readTime}</span>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4">
                  {blog.content}
                </p>
              </div>

              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8 lowercase">
                  {blog.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-slate-500 text-xs">#{tag}</span>
                  ))}
                </div>
              )}

              <Link 
                href={`/blog/${blog._id}`} 
                className="inline-flex items-center justify-center gap-2 w-full bg-[#7e5cff] hover:bg-[#6c4be0] text-white font-bold py-3.5 px-6 rounded-2xl text-sm transition-all"
              >
                Read Article <ExternalLink size={16} />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {blogs.length > 3 && (
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all active:scale-95"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={20} className="text-purple-400" /></>
            ) : (
              <>Load More Articles <ChevronDown size={20} className="text-cyan-400" /></>
            )}
          </button>
        </motion.div>
      )}
    </section>
  );
}

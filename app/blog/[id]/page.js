import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  await dbConnect();
  const blog = await Blog.findById(resolvedParams.id);
  if (!blog) return { title: 'Blog Not Found' };
  return { title: `${blog.title} | Vivek Singh` };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  await dbConnect();
  
  let blog = null;
  try {
    blog = await Blog.findById(resolvedParams.id);
  } catch (error) {
    // Handling invalid ObjectID errors
  }

  if (!blog) {
    notFound();
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-purple-500/30 font-sans py-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/#blogs" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        
        <header className="mb-12 border-b border-slate-800 pb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-purple-400" />
              <span>{formatDate(blog.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-cyan-400" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {blog.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="px-3 py-1.5 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-300 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Prose Content */}
        <article className="mt-8">
          {blog.content.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-6 text-[#a0a5b1] text-lg leading-relaxed font-serif tracking-wide text-justify">
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </main>
  );
}

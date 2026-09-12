"use client";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    title: "High performance & quick turnaround.",
    content:
      "Vivek delivered high-impact queries and console tools for our R&D platform with remarkable speed. He asks the right questions before writing a single line of code.",
    author: "S.K. Kushwaha",
    role: "Client (MedtrackInsight)",
  },
  {
    id: 2,
    rating: 5,
    title: "Reliable is the word.",
    content:
      "Reliable is the word. Clear updates, clean code, and he genuinely cared whether the product worked for our users, not just whether it compiled.",
    author: "Pallavi Tyagi",
    role: "Co-founder & Marketing Director",
  },
  {
    id: 3,
    rating: 5,
    title: "Calm when requirements shifted.",
    content:
      "What I appreciated most was how calm he stayed when requirements shifted halfway through. No drama, no missed deadlines. The final build was cleaner than what we asked for.",
    author: "Devinder Singh",
    role: "Engineer & Consultant",
  },
  {
    id: 4,
    rating: 5,
    title: "Pixel perfection & scale.",
    content:
      "Rare to find an engineer with a meticulous eye for design who also writes bulletproof backend services. His execution on complex systems is top notch.",
    author: "Praveen Kumar",
    role: "Manager",
  },
  {
    id: 5,
    rating: 5,
    title: "Exceptional system design.",
    content:
      "Collaborating with Vivek on subsea configurator layouts and interactive tools was seamless. Great architecture insight and strong problem-solving ability.",
    author: "Ishaan Shettigar",
    role: "Lead Engineer",
  },
];

export default function TestimonialsMarquee() {
  return (
    <section className="py-20 overflow-hidden relative border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            What people say
          </h2>
        </div>
        <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
          PEOPLE I'VE WORKED WITH
        </span>
      </div>

      <div className="relative w-full overflow-hidden group">
        {/* Edge Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        <style>{`
          @keyframes testimonials-scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-testimonials-scroll {
            animation: testimonials-scroll 35s linear infinite;
          }
        `}</style>

        <div className="flex overflow-hidden">
          <div
            className="flex gap-6 shrink-0 py-4 animate-testimonials-scroll group-hover:[animation-play-state:paused]"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[320px] sm:w-[380px] shrink-0 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/50 hover:bg-white/[0.06] hover:scale-[1.02] transition-all duration-300 shadow-xl cursor-pointer"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="text-amber-400" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Content */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.content}
                  </p>
                </div>

                {/* Author info */}
                <div className="text-xs font-medium text-slate-400 tracking-wide pt-4 border-t border-white/5">
                  <span className="text-slate-200 font-semibold">{item.author}</span>
                  <span className="mx-2 text-slate-500">·</span>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

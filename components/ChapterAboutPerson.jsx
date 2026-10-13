"use client";
import { useEffect, useRef } from "react";
import { User, Sparkles, MapPin, Code2 } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import ImageReveal from "./ImageReveal";

export default function ChapterAboutPerson() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const storyCardRef = useRef(null);
  const exploringCardRef = useRef(null);

  const exploringItems = [
    { title: "LLMs & Prompt Engineering", desc: "Fine-tuning prompt structures and evaluation loops" },
    { title: "RAG & Vector Grounding", desc: "Building context retrieval layers over enterprise data" },
    { title: "AI Agents & Agentic Workflows", desc: "Autonomous tool invocation and multi-step reasoning" },
    { title: "Distributed System Design", desc: "High-concurrency caching, messaging queues and fault tolerance" },
  ];

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Header entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Human Story Card entrance
      if (storyCardRef.current) {
        gsap.fromTo(
          storyCardRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: storyCardRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Exploring Card entrance with staggered items
      if (exploringCardRef.current) {
        const items = exploringCardRef.current.querySelectorAll(".exploring-item");
        gsap.fromTo(
          items,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: exploringCardRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto border-t border-white/5 relative bg-[#030712] scroll-mt-32"
    >
      {/* Chapter Label */}
      <div className="flex justify-center mb-6">
        <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 uppercase tracking-widest text-center">
          CHAPTER 06 — THE PERSON BEHIND THE CODE
        </span>
      </div>

      <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          So, who is{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Vivek?
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
          I am a software engineer who loves taking complicated, messy problems and turning them into clean, high-performance software people love using.
        </p>
      </div>

      <div className="space-y-8">
        {/* Human Story Card with Portrait Photo */}
        <div
          ref={storyCardRef}
          className="bg-[#090e1c]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row gap-8 items-center hover:border-cyan-400/30 transition-all duration-500"
        >
          {/* Vivek's Photo Frame with Cinematic ImageReveal */}
          <div className="w-48 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border border-cyan-500/30 shrink-0 shadow-[0_0_35px_rgba(6,182,212,0.25)] relative group">
            <ImageReveal
              src="/vivek-profile.jpg"
              alt="Vivek Singh"
              className="w-full h-full"
              imgClassName="group-hover:scale-105 transition-transform duration-700 ease-out"
              cursorText="VIVEK"
              parallaxAmount={-8}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-center pointer-events-none">
              <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-white/10 shadow-lg">
                Vivek Singh · Software Engineer
              </span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-5 flex-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <User size={15} />
              <span>END-TO-END MINDSET</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Understanding systems from the interface down to the hardware.
            </h3>

            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Whether it’s calculating subsea pipeline stress limits in real time, building low-latency WebSocket backends, or designing AI document assistants—I care about how every single layer fits together.
              </p>
              <p>
                I believe great software requires equal attention to UX clarity, API architecture, data persistence, and reliable deployment.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-cyan-400" />
                <span>Lucknow / Noida, India</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Code2 size={14} className="text-purple-400" />
                <span>Full-Stack & AI Systems</span>
              </span>
            </div>
          </div>
        </div>

        {/* Currently Exploring Grid */}
        <div
          ref={exploringCardRef}
          className="bg-[#0b0c1b]/80 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 sm:p-10 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
            <Sparkles size={15} />
            <span>CURRENTLY EXPLORING</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Pushing deeper into Intelligent & Agentic AI
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {exploringItems.map((item) => (
              <div
                key={item.title}
                className="exploring-item p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/40 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-sm font-bold text-slate-200 mb-1">
                  {item.title}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Zap, ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "IDG10 Engineering Solutions",
    duration: "Aug 2024 – Present",
    location: "Lucknow, India",
    logoUri: "/dg10-logo.png",
    achievements: [
      "Subsea Pipeline Design & Cost Estimation Software",
      "Built and optimized a subsea pipeline design tool with dynamic UI, real-time cost calculations, and vessel selection.",
      "Improved efficiency by 25% through software enhancements.",
      "Collaborated with the team to boost product quality by 60%."
    ],
    technologies: ["JavaScript", "Node.Js", "Joint.Js", "Electron", "Tailwind", "MongoDb"]
  },
  {
    id: 2,
    role: "Node.js Developer",
    company: "Careerboat.ai",
    duration: "Aug 2025 – Dec 2025",
    location: "Remote, India",
    logoUri: "/carrierboat-logo.png",
    achievements: [
      "Developed and integrated RESTful APIs for OTP generation, verification, and user authentication.",
      "Implemented profile–job matching logic to calculate compatibility scores and skill-match booleans",
      "Built APIs for search, feedback, and contact modules, using AWS SES to send automated emails and S3 for file uploads.",
    ],
    technologies: ["NodeJs", "React", "JavaScript", "MySQL", "Tailwind Css", "AWS", "Visual Studio", "Git", "ChatGpt LLM", "Express Js", "Python", "RESTful API", "JWT", "Postman", "TypeScript", "Postcss", "React-vite", "Framer-motion"], 
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Untamed Alpha Marketing",
    duration: "Jan 2026 – Present",
    location: "Noida, India",
    logoUri: "/untamed-logo.png",
    achievements: [
      "Working as a Full Stack Developer at a digital marketing agency, contributing to scalable web solutions and client projects.",
      "Developing a full-stack platform 'iChamber', focusing on performance, responsiveness, and user experience.",
      "Built and integrated backend APIs using Node.js and Express, along with MongoDB for data management.",
      "Designed modern frontend interfaces using React and optimized UI/UX for better engagement.",
      "Collaborated with cross-functional teams to deliver high-performance digital products aligned with business goals."
    ],
    technologies: ["HTML5, CSS3, JavaScript (ES6+)", "React.js / Next.js", "UI Libraries (Tailwind CSS, Bootstrap)", "DOM Manipulation & State Management", "Node.js, Express.js", "REST API Development", "Authentication (JWT, OAuth)", "Server-side Logic & Middleware"]
  }
];

const ExperienceCard = ({ exp, isLeft }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const dotRef = useRef(null);
  const achievementsToShow = isExpanded ? exp.achievements : exp.achievements.slice(0, 2);

  useEffect(() => {
    if (prefersReducedMotion() || !cardRef.current) return;

    const ctx = gsap.context(() => {
      // Entrance animation for experience card
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 35, x: isLeft ? -20 : 20 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Dot activation glow
      if (dotRef.current) {
        gsap.fromTo(
          dotRef.current,
          { scale: 0.6, opacity: 0.3 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, cardRef);

    return () => ctx.revert();
  }, [isLeft]);

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-center w-full group ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Timeline Dot with Pulse Beam */}
      <div
        ref={dotRef}
        className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#030712] border-2 border-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)] -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125"
      />

      {/* The Experience Card */}
      <div className="w-full md:w-1/2 pl-12 md:px-10 relative z-10 md:text-left">
        <div className="bg-[#090e1c]/80 backdrop-blur-md border border-white/10 p-5 sm:p-7 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-cyan-400/40 hover:shadow-[0_15px_40px_rgba(6,182,212,0.12)] transition-all duration-500 overflow-hidden relative group/card">
          {/* Subtle Ambient Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Header Row: Logo + Titles */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-5 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15 p-1 overflow-hidden shadow-inner">
              <img
                src={exp.logoUri}
                alt={exp.company}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover/card:text-cyan-300 transition-colors">
                {exp.role}
              </h3>
              <p className="text-cyan-400 font-mono text-xs font-semibold mb-1">
                {exp.company}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 font-mono items-center">
                <span>{exp.duration}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mb-2 relative z-10">
            <div className="flex items-center gap-2 mb-3 text-slate-300 font-mono font-semibold text-xs tracking-wider uppercase">
              <Zap size={13} className="text-purple-400" />
              <span>Key Achievements</span>
            </div>
            <ul className="space-y-2.5">
              {achievementsToShow.map((achievement, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2 opacity-70" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden relative z-10"
              >
                {exp.achievements.length > 2 && (
                  <ul className="space-y-2.5 mt-2.5">
                    {exp.achievements.slice(2).map((achievement, i) => (
                      <li
                        key={i + 2}
                        className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2 opacity-70" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies Used */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 mb-2.5 text-slate-300 font-mono font-semibold text-xs tracking-wider uppercase">
                    <Code2 size={13} className="text-cyan-400" />
                    <span>Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* View More Toggle */}
          <div className="relative z-10 mt-5 pt-3.5 border-t border-white/10 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[11px] font-mono font-bold tracking-wider text-cyan-400 hover:text-white transition-colors uppercase flex items-center gap-1 cursor-pointer"
            >
              <span>{isExpanded ? "View Less ▲" : "View More ▼"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WorkExperience() {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !lineRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Dynamic scrub drawing of the timeline beam as the user scrolls
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 85%",
            scrub: 0.3,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="py-16 md:py-28 px-4 sm:px-6 pb-28 md:pb-28 max-w-6xl mx-auto relative min-h-screen scroll-mt-32"
    >
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-xs font-mono text-cyan-300">
          <Briefcase size={13} className="text-cyan-400" />
          <span>CHAPTER 05 — CAREER EXPERIENCE TIMELINE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Professional{" "}
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Building scalable enterprise solutions, microservices, and AI-grounded architectures in cross-functional teams.
        </p>
      </div>

      <div className="relative">
        {/* Base Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 z-0" />

        {/* Animated Glowing Progress Beam */}
        <div
          ref={lineRef}
          style={{ transformOrigin: "top center" }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-400 -translate-x-1/2 z-0 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        />

        <div className="space-y-12 md:space-y-20">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`${!showAll && index >= 2 ? "hidden md:block" : "block"}`}
            >
              <ExperienceCard exp={exp} isLeft={index % 2 === 0} />
            </div>
          ))}
        </div>
      </div>

      {/* View More Button for Mobile */}
      {experiences.length > 2 && (
        <div className="mt-14 flex justify-center md:hidden relative z-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-mono text-xs font-bold hover:bg-white/10 transition-all active:scale-95"
          >
            {showAll ? (
              <>
                <span>SHOW LESS</span>
                <ChevronUp size={16} className="text-purple-400" />
              </>
            ) : (
              <>
                <span>VIEW MORE ROLES</span>
                <ChevronDown size={16} className="text-cyan-400" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

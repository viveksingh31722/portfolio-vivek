"use client";
import { motion } from "framer-motion";
import { Code2, Zap } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "IDG10 Engineering Solutions",
    duration: "Aug 2024 – Present",
    location: "Lucknow, India",
    logoUri: "/dg10-logo.png", // Replace this image in the public folder
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
    logoUri: "/carrierboat-logo.png", // Replaced with a generalized VW logo
    achievements: [
      "Developed and integrated RESTful APIs for OTP generation, verification, and user authentication.",
      "Implemented profile–job matching logic to calculate compatibility scores and skill-match booleans",
      "Built APIs for search , feedback , and contact modules , using AWS SES to send automated emails and S3 for file uploads.",
    ],
    technologies: ["NodeJs", "React", "JavaScript", "MySQL", "Tailwind Css", "AWS", "Visual Studio", "Git", "ChatGpt LLM", "Express Js", "Python", "RESTful API", "JWT", "Postman", "TypeScript", "Postcss", "React-vite", "Framer-motion"], 
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Untamed Alpha Marketing",
    duration: "Jan 2026 – Present",
    location: "Noida, India",
    logoUri: "/untamed-logo.png", // Placeholder logo
    achievements: [
      "Working as a Full Stack Developer at a digital marketing agency, contributing to scalable web  solutions and client projects.",
      "Developing a full-stack platform 'iChamber', focusing on performance, responsiveness, and user experience.",
      "Built and integrated backend APIs using Node.js and Express, along with MongoDB for data management.",
      "Designed modern frontend interfaces using React and optimized UI/UX for better engagement.",
      "Collaborated with cross-functional teams to deliver high-performance digital products aligned with business goals."
    ],
    technologies: ["HTML5, CSS3, JavaScript (ES6+)", "React.js / Next.js", "UI Libraries (Tailwind CSS, Bootstrap)", "DOM Manipulation & State Management", "Node.js, Express.js", "REST API Development", "Authentication (JWT, OAuth)", "Server-side Logic & Middleware"]
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto relative min-h-screen">
      <motion.div 
        className="text-center mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Professional <span className="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Built scalable enterprise solutions and driving innovation through full-stack development and artificial intelligence
        </p>
      </motion.div>

      <div className="relative">
        {/* The Central / Left Timeline Line */}
        {/* On mobile it sits on the left (8px in), on desktop it's perfectly centered */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-800 -translate-x-1/2 md:translate-x-0 z-0 shadow-[0_0_10px_rgba(168,85,247,0.3)]"></div>

        <div className="space-y-12 md:space-y-24">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center w-full group ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Dot */}
                {/* On mobile it aligns absolute left. On desktop it centers perfectly over the line */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#0B1120] border-2 border-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] -translate-x-1/2 z-10 transition-transform group-hover:scale-125"></div>

                {/* The Experience Card */}
                {/* Mobile: takes full width with left padding. Desktop: takes 50% width and adds padding towards the center line. */}
                <div className={`w-full md:w-1/2 pl-12 md:px-12 relative z-10 ${
                    isLeft ? 'md:text-left' : 'md:text-left'
                }`}>
                  <div className="bg-[#0f121d] border border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500 overflow-hidden relative group/card">
                    
                    {/* Hover Glow Behind Card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 duration-500"></div>
                    
                    {/* Header Row: Logo + Titles */}
                    <div className="flex items-start gap-4 mb-6 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-slate-700 shadow-md p-1 overflow-hidden">
                        {/* Fallback image handle if path breaks */}
                        <img src={exp.logoUri} alt={exp.company} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none' }} />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover/card:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-purple-400 font-semibold mb-1">{exp.company}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 items-center">
                          <span className="flex items-center gap-1">
                            <span className="text-[10px]">📅</span> {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="text-[10px]">📍</span> {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6 relative z-10">
                      <div className="flex items-center gap-2 mb-3 text-slate-300 font-semibold text-sm tracking-wide uppercase">
                        <Zap size={14} className="text-purple-500" /> Key Achievements
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5 opacity-60"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3 text-slate-300 font-semibold text-sm tracking-wide uppercase">
                        <Code2 size={14} className="text-cyan-500" /> Technologies Used
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[13px] text-slate-300 group-hover/card:border-purple-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

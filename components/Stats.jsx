"use client";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Cloud } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Code2 size={22} className="text-purple-400" />,
      value: "6+",
      label: "Languages"
    },
    {
      icon: <BrainCircuit size={22} className="text-purple-400" />,
      value: "6+",
      label: "AI/ML Tools"
    },
    {
      icon: <Database size={22} className="text-purple-400" />,
      value: "9+",
      label: "Dev Frameworks"
    },
    {
      icon: <Cloud size={22} className="text-purple-400" />,
      value: "6+",
      label: "Cloud Tech"
    }
  ];

  return (
    <section className="px-6 max-w-[1000px] mx-auto pb-24 relative z-10 w-full mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center justify-center p-8 py-10 rounded-2xl bg-[#090f1d] border border-slate-800/60 hover:border-purple-500/30 transition-all duration-300 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-extrabold text-purple-400 mb-2">
              {stat.value}
            </h3>
            <p className="text-slate-400 text-sm font-semibold tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

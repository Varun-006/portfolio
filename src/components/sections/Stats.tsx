"use client";

import { motion } from "framer-motion";
import { Code2, Trophy, Cpu, Zap, GitCommit, Star, GitFork, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

interface StatItem {
  number: string;
  label: string;
  detail: string;
  icon: React.ReactNode;
  accent: string;
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      number: "10+",
      label: "Builds & Repositories",
      detail: "Full stack, AI, and Python applications created",
      icon: <Code2 className="w-5 h-5" />,
      accent: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
    },
    {
      number: "02",
      label: "Hackathon Awards",
      detail: "National Level & Institution Competitions",
      icon: <Trophy className="w-5 h-5" />,
      accent: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    },
    {
      number: "384-D",
      label: "Vector Similarity Engine",
      detail: "ChromaDB & MiniLM-L6-v2 semantic search",
      icon: <Cpu className="w-5 h-5" />,
      accent: "text-violet-400 border-violet-500/20 bg-violet-500/10",
    },
    {
      number: "100%",
      label: "Real-time P2P Socket Sync",
      detail: "Live chat, video call & rating integrations",
      icon: <Zap className="w-5 h-5" />,
      accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    },
  ];

  return (
    <section className="py-12 px-6 lg:px-12 relative overflow-hidden select-none border-t border-white/5 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 relative z-10">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="conic-glow-card"
            >
              <div className="conic-glow-card-inner p-6 glass-panel flex flex-col gap-4 justify-between">
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-2xl border ${stat.accent}`}>
                    {stat.icon}
                  </div>
                  <span className="text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
                    {stat.number}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold font-heading uppercase text-white tracking-wide">
                    {stat.label}
                  </h3>
                  <p className="text-zinc-400 text-xs font-sans leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Live Summary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-panel p-6 lg:p-8 rounded-3xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 bg-gradient-to-r from-indigo-950/20 via-purple-950/10 to-transparent"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-white shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold font-heading uppercase text-white tracking-tight">
                  GitHub Developer Activity
                </h4>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-zinc-400 text-xs font-sans">
                Active repository contributions in Python, React, Next.js, and Machine Learning pipelines.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://github.com/Varun-006"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs uppercase tracking-wider rounded-full font-bold flex items-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.25)] border border-indigo-500/20 cursor-pointer"
            >
              Explore @Varun-006
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

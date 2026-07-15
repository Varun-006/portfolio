"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Wrench, Cpu, Globe, Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  accent: string;
  skills: string[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Programming",
      icon: <Terminal className="w-5 h-5" />,
      accent: "indigo",
      skills: ["Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="w-5 h-5" />,
      accent: "purple",
      skills: ["Machine Learning", "Generative AI", "NLP", "FAISS", "Embeddings"],
    },
    {
      title: "Web Development",
      icon: <Globe className="w-5 h-5" />,
      accent: "sky",
      skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend & Databases",
      icon: <Database className="w-5 h-5" />,
      accent: "violet",
      skills: ["Flask", "REST APIs", "MongoDB", "MySQL", "Node.js"],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5" />,
      accent: "zinc",
      skills: ["Git", "GitHub", "VS Code", "Docker"],
    },
    {
      title: "Currently Learning",
      icon: <Sparkles className="w-5 h-5" />,
      accent: "emerald",
      skills: ["PyTorch", "GraphQL", "Data Structures & Algorithms", "Cloud Basics"],
    },
  ];

  const accentMap: Record<string, { pill: string; icon: string }> = {
    indigo:  { pill: "border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/15 hover:border-indigo-500/50 hover:shadow-[0_0_10px_rgba(99,102,241,0.3)]",    icon: "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white" },
    purple:  { pill: "border-purple-500/30 text-purple-300 hover:bg-purple-500/15 hover:border-purple-500/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]",   icon: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white" },
    sky:     { pill: "border-sky-500/30 text-sky-300 hover:bg-sky-500/15 hover:border-sky-500/50 hover:shadow-[0_0_10px_rgba(14,165,233,0.3)]",              icon: "bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white" },
    violet:  { pill: "border-violet-500/30 text-violet-300 hover:bg-violet-500/15 hover:border-violet-500/50 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]",  icon: "bg-violet-500/10 text-violet-400 group-hover:bg-violet-500 group-hover:text-white" },
    zinc:    { pill: "border-zinc-500/30 text-zinc-300 hover:bg-zinc-500/15 hover:border-zinc-500/50 hover:shadow-[0_0_10px_rgba(113,113,122,0.2)]",         icon: "bg-zinc-500/10 text-zinc-400 group-hover:bg-zinc-500 group-hover:text-white" },
    emerald: { pill: "border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]", icon: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white" },
  };

  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 lg:py-36 px-6 lg:px-12 relative overflow-hidden select-none border-t border-white/5 bg-zinc-950/20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col gap-4">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest block">
            // 03. Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter uppercase text-white">
            TECHNICAL SKILLS
          </h2>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => {
            const accent = accentMap[category.accent];
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-panel p-7 rounded-3xl border border-white/5 flex flex-col gap-6 glass-panel-hover group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl transition-all duration-500 ${accent.icon}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-base text-white uppercase tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mt-0.5">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex px-3 py-1.5 text-[11px] font-mono rounded-full bg-white/4 border transition-all duration-300 cursor-default ${accent.pill}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

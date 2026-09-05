"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Wrench, Cpu, Globe, Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  accent: string;
  skills: string[];
  bentoCols: string;
  badge: string;
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Programming Languages & Core",
      icon: <Terminal className="w-5 h-5" />,
      accent: "indigo",
      bentoCols: "lg:col-span-7",
      badge: "Core Stack",
      skills: ["Python", "JavaScript", "Java", "C", "HTML5/CSS3"],
    },
    {
      title: "Frameworks & Web Engineering",
      icon: <Globe className="w-5 h-5" />,
      accent: "sky",
      bentoCols: "lg:col-span-5",
      badge: "Frontend & Backend",
      skills: ["React.js", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    },
    {
      title: "Databases & AI Vector Search",
      icon: <Database className="w-5 h-5" />,
      accent: "violet",
      bentoCols: "lg:col-span-5",
      badge: "Data & AI",
      skills: ["ChromaDB", "MongoDB", "MySQL", "all-MiniLM-L6-v2 Embeddings"],
    },
    {
      title: "Tools, Platforms & Cloud Services",
      icon: <Wrench className="w-5 h-5" />,
      accent: "zinc",
      bentoCols: "lg:col-span-7",
      badge: "DevOps & Integrations",
      skills: ["Git", "GitHub", "Docker", "CI/CD", "Socket.io", "Cloudinary", "Google OAuth"],
    },
    {
      title: "Soft Skills & Engineering Mindset",
      icon: <Cpu className="w-5 h-5" />,
      accent: "purple",
      bentoCols: "lg:col-span-6",
      badge: "Team Execution",
      skills: ["Agile / Scrum Teamwork", "Time Management", "Technical Decision Making"],
    },
    {
      title: "Spoken Languages",
      icon: <Sparkles className="w-5 h-5" />,
      accent: "emerald",
      bentoCols: "lg:col-span-6",
      badge: "Communication",
      skills: ["English (Professional)", "Kannada (Native)", "Hindi (Fluent)"],
    },
  ];

  const accentMap: Record<string, { pill: string; icon: string }> = {
    indigo:  { pill: "border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/15 hover:border-indigo-500/50 hover:shadow-[0_0_10px_rgba(99,102,241,0.3)]",    icon: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
    purple:  { pill: "border-purple-500/30 text-purple-300 hover:bg-purple-500/15 hover:border-purple-500/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]",   icon: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    sky:     { pill: "border-sky-500/30 text-sky-300 hover:bg-sky-500/15 hover:border-sky-500/50 hover:shadow-[0_0_10px_rgba(14,165,233,0.3)]",              icon: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
    violet:  { pill: "border-violet-500/30 text-violet-300 hover:bg-violet-500/15 hover:border-violet-500/50 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]",  icon: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
    zinc:    { pill: "border-zinc-500/30 text-zinc-300 hover:bg-zinc-500/15 hover:border-zinc-500/50 hover:shadow-[0_0_10px_rgba(113,113,122,0.2)]",         icon: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20" },
    emerald: { pill: "border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]", icon: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
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
      className="py-16 lg:py-24 px-6 lg:px-12 relative overflow-hidden select-none border-t border-white/5 bg-zinc-950/20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest block">
            // 03. Capabilities &amp; Tech Matrix
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter uppercase text-white">
            TECHNICAL SKILLS
          </h2>
        </div>

        {/* Skills Bento Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch"
        >
          {categories.map((category) => {
            const accent = accentMap[category.accent];
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`${category.bentoCols} glass-panel p-7 rounded-3xl border border-white/10 flex flex-col justify-between gap-6 glass-panel-hover group`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl border ${accent.icon}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-base text-white uppercase tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mt-0.5">
                        {category.skills.length} technical items
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase">
                    {category.badge}
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex px-3.5 py-1.5 text-xs font-mono rounded-full bg-white/4 border transition-all duration-300 cursor-default ${accent.pill}`}
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

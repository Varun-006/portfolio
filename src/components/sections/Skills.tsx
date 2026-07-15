"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Wrench, ShieldCheck, Cpu, Sparkles } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  accent: string;
  skills: Skill[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Frontend Core",
      icon: <Terminal className="w-5 h-5" />,
      accent: "indigo",
      skills: [
        { name: "React 19", level: 90 },
        { name: "Next.js 15", level: 88 },
        { name: "TypeScript", level: 82 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "JavaScript ES6+", level: 90 },
      ],
    },
    {
      title: "Backend Services",
      icon: <Database className="w-5 h-5" />,
      accent: "violet",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "Python", level: 85 },
        { name: "RESTful APIs", level: 88 },
        { name: "SQL / SQLite", level: 74 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-5 h-5" />,
      accent: "sky",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "Docker", level: 68 },
        { name: "VS Code", level: 95 },
        { name: "Figma Design", level: 72 },
        { name: "NPM / Yarn / Bun", level: 88 },
        { name: "Webpack / Vite", level: 75 },
      ],
    },
    {
      title: "AI & Intelligence",
      icon: <Cpu className="w-5 h-5" />,
      accent: "purple",
      skills: [
        { name: "Machine Learning", level: 78 },
        { name: "Scikit-Learn", level: 75 },
        { name: "FastAPI Pipelines", level: 72 },
        { name: "Data Pipelines", level: 74 },
        { name: "Predictive Analytics", level: 70 },
        { name: "Telemetry Monitoring", level: 68 },
      ],
    },
    {
      title: "Currently Learning",
      icon: <Sparkles className="w-5 h-5" />,
      accent: "emerald",
      skills: [
        { name: "Rust", level: 25 },
        { name: "LLM Fine-Tuning", level: 35 },
        { name: "GraphQL", level: 42 },
        { name: "Kubernetes", level: 30 },
        { name: "PyTorch", level: 38 },
        { name: "WebAssembly", level: 20 },
      ],
    },
  ];

  const accentMap: Record<string, { pill: string; bar: string; icon: string }> = {
    indigo:  { pill: "border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/15 hover:border-indigo-500/50 hover:shadow-[0_0_10px_rgba(99,102,241,0.3)]",  bar: "bg-indigo-500",  icon: "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white" },
    violet:  { pill: "border-violet-500/30 text-violet-300 hover:bg-violet-500/15 hover:border-violet-500/50 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]",  bar: "bg-violet-500",  icon: "bg-violet-500/10 text-violet-400 group-hover:bg-violet-500 group-hover:text-white" },
    sky:     { pill: "border-sky-500/30 text-sky-300 hover:bg-sky-500/15 hover:border-sky-500/50 hover:shadow-[0_0_10px_rgba(14,165,233,0.3)]",             bar: "bg-sky-500",     icon: "bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white" },
    purple:  { pill: "border-purple-500/30 text-purple-300 hover:bg-purple-500/15 hover:border-purple-500/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]", bar: "bg-purple-500",  icon: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white" },
    emerald: { pill: "border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]", bar: "bg-emerald-500", icon: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white" },
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

        {/* Skills Cards Grid — 3 cols on large, 2 on md, 1 on sm */}
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

                {/* Skill Pills + Progress */}
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <motion.span
                          whileHover={{ scale: 1.03 }}
                          className={`inline-flex px-3 py-1 text-[11px] font-mono rounded-full bg-white/4 border transition-all duration-300 cursor-default ${accent.pill}`}
                        >
                          {skill.name}
                        </motion.span>
                        <span className="text-[10px] font-mono text-zinc-600">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                          className={`h-full rounded-full ${accent.bar} opacity-60`}
                        />
                      </div>
                    </div>
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

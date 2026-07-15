"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "experience";
}

export default function Timeline() {
  const items: TimelineItem[] = [
    {
      year: "2024 - PRESENT",
      title: "AI & Full Stack Developer",
      organization: "Freelance & Open Source Projects",
      description: "Developing intelligent web applications, setting up micro-services, and fine-tuning pipelines using Node, Python, and modern React environments.",
      type: "experience",
    },
    {
      year: "2023 - PRESENT",
      title: "Information Science Engineering Student",
      organization: "Engineering Academy / University",
      description: "Acquiring strong academic foundations in algorithms, data structures, cloud architectures, database design, and machine learning structures.",
      type: "education",
    },
    {
      year: "2023",
      title: "Core Web Developer",
      organization: "Hobbyist & Student Tech Labs",
      description: "Engineered responsive HTML, CSS, JavaScript layouts and set up custom server nodes to process RESTful data protocols.",
      type: "experience",
    },
  ];

  return (
    <section
      id="timeline"
      className="py-24 lg:py-36 px-6 lg:px-12 relative overflow-hidden select-none border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-4 text-center">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest block">
            // 04. Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter uppercase text-white">
            TIMELINE & HISTORY
          </h2>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 flex flex-col gap-12 py-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title + i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Animated Node Circle */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-all duration-300">
                {item.type === "education" ? (
                  <GraduationCap className="w-3.5 h-3.5" />
                ) : (
                  <Briefcase className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Box Details */}
              <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col gap-4 glass-panel-hover interactive">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  {/* Year Tag */}
                  <span className="flex items-center gap-1.5 text-xs font-mono text-indigo-400 font-semibold tracking-wider">
                    <Calendar className="w-3.5 h-3.5" /> {item.year}
                  </span>
                  {/* Organization */}
                  <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                    {item.organization}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg md:text-xl font-bold font-heading text-white uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

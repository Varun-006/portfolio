"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import Image from "next/image";
import { useState } from "react";

interface Project {
  title: string;
  number: string;
  category: string;
  filterTag: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  isWip?: boolean;
  customVisual?: React.ReactNode;
}

const filters = ["All", "Frontend", "AI", "IoT"] as const;
type Filter = typeof filters[number];

const filterMap: Record<Filter, string[]> = {
  All:      [],
  Frontend: ["Creative Frontend & Performance"],
  AI:       ["Artificial Intelligence & Data"],
  IoT:      ["IoT Systems & Networking"],
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const projects: Project[] = [
    {
      title: "Varun Portfolio V2",
      number: "01",
      category: "Creative Frontend & Performance",
      filterTag: "Frontend",
      description:
        "An award-winning caliber interactive portfolio redesigned in Next.js 15, React 19, Framer Motion, and GSAP. Featuring smooth scroll physics, custom cursors, and glowing glassmorphism systems.",
      image: "/projects/portfolio-v1.png",
      tech: ["Next.js 15", "TypeScript", "Tailwind v4", "Framer Motion", "GSAP", "Lenis"],
      github: "https://github.com/Varun-006",
      live: "#",
      isWip: true,
    },
    {
      title: "Zenith ML Pipeline",
      number: "02",
      category: "Artificial Intelligence & Data",
      filterTag: "AI",
      description:
        "A robust machine learning classification pipeline designed for industrial predictive diagnostics. Features automated feature engineering, multi-model evaluation, and a Docker containerized inference API.",
      image: "",
      tech: ["Python", "Scikit-Learn", "FastAPI", "Docker", "Pandas", "NumPy"],
      github: "https://github.com/Varun-006",
      live: "https://www.credly.com/badges/8b92e22d-0b13-41ad-b8b4-1c95074eea31",
      customVisual: (
        <div className="w-full h-full relative bg-gradient-to-br from-[#101018] to-[#0A0A0A] flex flex-col justify-center items-center p-6 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />
          <div className="relative flex flex-col gap-3 max-w-xs w-full glass-panel p-5 rounded-2xl border border-indigo-500/20 shadow-2xl">
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>MODEL EVALUATION</span>
              <span className="text-indigo-400">ACCURACY: 98.4%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "98.4%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-indigo-500 rounded-full"
              />
            </div>
            <div className="flex gap-2 text-[10px] font-mono mt-1 justify-between">
              <span className="text-zinc-400">F1-Score: 0.98</span>
              <span className="text-zinc-400">Precision: 0.99</span>
              <span className="text-zinc-400">Recall: 0.98</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Helios IoT Ecosystem",
      number: "03",
      category: "IoT Systems & Networking",
      filterTag: "IoT",
      description:
        "A real-time environmental telemetry platform tracking sensor nodes over WebSockets. Features instant sub-100ms rendering, custom graphs, database integrations, and network state management.",
      image: "",
      tech: ["Node.js", "WebSockets", "Express", "SQLite", "React", "Chart.js"],
      github: "https://github.com/Varun-006",
      live: "#",
      customVisual: (
        <div className="w-full h-full relative bg-gradient-to-tr from-[#131010] to-[#0A0A0A] flex flex-col justify-center items-center p-6 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.04),transparent_60%)]" />
          <div className="relative flex items-center justify-around w-full gap-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">NODE 01</span>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-indigo-400">
                24°C
              </div>
            </div>
            <div className="w-12 h-0.5 border-t border-dashed border-zinc-700 relative">
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">GATEWAY</span>
              <div className="w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-[10px] font-mono text-white">
                LIVE
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filterTag === activeFilter);

  return (
    <section
      id="projects"
      className="py-24 lg:py-36 px-6 lg:px-12 relative overflow-hidden select-none border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col gap-4">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest block">
            // 02. Showcase
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter uppercase text-white">
            SELECTED PROJECTS
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 border cursor-none interactive ${
                activeFilter === filter
                  ? "bg-indigo-600 border-indigo-500/40 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                  : "bg-transparent border-white/10 text-zinc-400 hover:border-indigo-500/30 hover:text-white hover:bg-white/5"
              }`}
            >
              {filter}
            </button>
          ))}
          <span className="ml-auto text-zinc-600 font-mono text-[11px] uppercase tracking-widest">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col rounded-3xl overflow-hidden glass-panel border border-white/5 glass-panel-hover group"
              >
                {/* Image / Custom Visual Section */}
                <div className="h-56 relative overflow-hidden border-b border-white/5">
                  {project.customVisual ? (
                    project.customVisual
                  ) : (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    </>
                  )}

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-indigo-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full uppercase border border-white/5">
                    {project.category}
                  </span>

                  {/* WIP Badge */}
                  {project.isWip && (
                    <span className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-amber-300 bg-amber-500/15 backdrop-blur-md px-3 py-1 rounded-full uppercase border border-amber-500/20">
                      WIP
                    </span>
                  )}

                  {/* Project Number */}
                  <span className="absolute bottom-4 right-4 text-4xl font-extrabold font-heading text-white/8 leading-none select-none">
                    {project.number}
                  </span>
                </div>

                {/* Info Section */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl md:text-2xl font-bold font-heading uppercase text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-indigo-500/60 font-bold shrink-0 mt-1">
                        {project.number}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-zinc-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-none interactive"
                    >
                      <GithubIcon className="w-4 h-4" /> Code
                    </a>
                    {project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-none interactive"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-600 cursor-default select-none">
                        Coming Soon <ExternalLink className="w-3.5 h-3.5 opacity-40" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

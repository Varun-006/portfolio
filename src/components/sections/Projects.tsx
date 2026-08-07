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

const filters = ["All", "AI", "Full Stack"] as const;
type Filter = typeof filters[number];

const filterTagMap: Record<Filter, string> = {
  All: "",
  AI: "AI",
  "Full Stack": "Full Stack",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const projects: Project[] = [
    {
      title: "SKILLBRIDGE",
      number: "01",
      category: "Full Stack Developer",
      filterTag: "Full Stack",
      description:
        "Developed a full-stack peer-to-peer skill exchange platform using React, Node.js, Express, and MongoDB. Integrated JWT authentication, real-time chat via Socket.io, skill-matching, ratings/reviews, video calls, AI assistant, and Cloudinary media uploads.",
      image: "/projects/skillbridge.png",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "Docker", "Google OAuth", "Cloudinary"],
      github: "https://github.com/Varun-006",
      live: "https://skillbridge-peach.vercel.app/",
    },
    {
      title: "Resume Search Engine",
      number: "02",
      category: "AI / Semantic Search",
      filterTag: "AI",
      description:
        "Developed an AI-powered resume search engine that parses PDF, DOCX, and TXT resumes. Chunked and embedded content into 384-dimensional vectors using all-MiniLM-L6-v2, storing them in ChromaDB for semantic retrieval via CLI and Streamlit.",
      image: "",
      tech: ["Python", "ChromaDB", "all-MiniLM-L6-v2", "PyTorch", "pypdf", "Streamlit"],
      github: "https://github.com/Varun-006",
      live: "#",
      customVisual: (
        <div className="w-full h-full relative bg-gradient-to-br from-[#0f0f1a] to-[#0A0A0A] flex flex-col justify-center items-center p-6 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.07),transparent_60%)]" />
          <div className="relative flex flex-col gap-3 max-w-xs w-full glass-panel p-5 rounded-2xl border border-violet-500/20 shadow-xl">
            <div className="flex items-center gap-2 bg-white/3 rounded-xl px-3 py-2 border border-white/5 text-[10px] font-mono text-zinc-400">
              <span className="text-violet-400">›</span>
              <span>&ldquo;MERN & RN Developer, 384-dim vector&rdquo;</span>
            </div>
            <div className="flex flex-col gap-1.5 text-[10px] font-mono">
              {[
                { label: "Varuna_D_Resume.pdf", score: "98% match", highlight: true },
                { label: "Candidate_Backend.pdf", score: "89% match", highlight: false },
                { label: "Candidate_ML.pdf", score: "82% match", highlight: false },
              ].map((r) => (
                <div
                  key={r.label}
                  className={`flex items-center justify-between px-2 py-1.5 rounded-lg ${
                    r.highlight
                      ? "bg-violet-500/10 border border-violet-500/20 text-violet-300"
                      : "text-zinc-500"
                  }`}
                >
                  <span>{r.label}</span>
                  <span className={r.highlight ? "text-violet-400" : ""}>{r.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filterTag === filterTagMap[activeFilter]);

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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
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
                {/* Image / Custom Visual */}
                <div className="h-52 relative overflow-hidden border-b border-white/5">
                  {project.customVisual ? (
                    project.customVisual
                  ) : (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
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

                  {/* Project Number watermark */}
                  <span className="absolute bottom-3 right-4 text-4xl font-extrabold font-heading text-white/6 leading-none select-none">
                    {project.number}
                  </span>
                </div>

                {/* Info Section */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold font-heading uppercase text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-indigo-500/50 font-bold shrink-0 mt-0.5">
                        {project.number}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
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
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto gap-2">
                    {/* GitHub button — only shown if a real URL exists */}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-none interactive"
                      >
                        <GithubIcon className="w-4 h-4" /> Code
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-zinc-700 select-none">Private</span>
                    )}

                    {/* Live Demo — only if real URL, otherwise label */}
                    {project.live && project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-none interactive"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : project.live === "#" ? (
                      <span className="text-[10px] font-mono text-zinc-600 select-none border border-white/5 px-2.5 py-1 rounded-full">
                        In Development
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-zinc-600 select-none border border-white/5 px-2.5 py-1 rounded-full">
                        Demo Coming Soon
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

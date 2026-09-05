"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Cpu, Search, CheckCircle2, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  number: string;
  category: string;
  filterTag: string;
  description: string;
  architecture: string[];
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
  const [queryInput, setQueryInput] = useState("Machine Learning Python Engineer");
  const [simResults, setSimResults] = useState([
    { name: "Varun_D_Resume.pdf", score: "98.7%", role: "Full Stack & AI Engineer", match: true },
    { name: "ML_Researcher_Candidate.pdf", score: "89.2%", role: "Data Science Lead", match: false },
    { name: "Backend_Dev_Resume.pdf", score: "78.4%", role: "Python Developer", match: false },
  ]);

  const projects: Project[] = [
    {
      title: "SKILLBRIDGE",
      number: "01",
      category: "Full Stack Developer",
      filterTag: "Full Stack",
      description:
        "Developed a full-stack peer-to-peer skill exchange platform using React, Node.js, Express, and MongoDB. Integrated JWT authentication, real-time chat via Socket.io, skill-matching, ratings/reviews, video calls, AI assistant, and Cloudinary media uploads.",
      architecture: [
        "Client Layer: React.js SPA + Tailwind CSS + WebRTC Video SDK",
        "Server Layer: Node.js & Express REST API + Socket.io WebSocket Gateway",
        "Database Layer: MongoDB Atlas with Mongoose schema indexing",
        "Auth & Storage: JWT Token Store, Cloudinary CDN, Google OAuth 2.0",
      ],
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
      architecture: [
        "Document Parser: pypdf & docx2txt document text extractions",
        "Embedding Pipeline: HuggingFace all-MiniLM-L6-v2 (384-dim dense vectors)",
        "Vector Store: ChromaDB with Cosine Distance indexing",
        "Interface: Streamlit Dashboard + CLI query interface",
      ],
      image: "",
      tech: ["Python", "ChromaDB", "all-MiniLM-L6-v2", "PyTorch", "pypdf", "Streamlit"],
      github: "https://github.com/Varun-006",
      live: "#",
      customVisual: (
        <div className="w-full h-full relative bg-gradient-to-br from-[#0f0f1a] to-[#0A0A0A] flex flex-col justify-center items-center p-6 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_60%)]" />
          <div className="relative flex flex-col gap-3 max-w-xs w-full glass-panel p-5 rounded-2xl border border-violet-500/20 shadow-xl">
            <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 border border-white/10 text-[10px] font-mono text-zinc-300">
              <span className="text-violet-400">›</span>
              <span>&ldquo;Python & Full Stack AI Developer&rdquo;</span>
            </div>
            <div className="flex flex-col gap-1.5 text-[10px] font-mono">
              {[
                { label: "Varuna_D_Resume.pdf", score: "98% match", highlight: true },
                { label: "Candidate_Backend.pdf", score: "89% match", highlight: false },
                { label: "Candidate_ML.pdf", score: "82% match", highlight: false },
              ].map((r) => (
                <div
                  key={r.label}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg ${
                    r.highlight
                      ? "bg-violet-500/15 border border-violet-500/30 text-violet-300 font-bold"
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

  const handleQuerySim = (e: React.FormEvent) => {
    e.preventDefault();
    setSimResults([
      { name: "Varun_D_Resume.pdf", score: "99.1%", role: `Matched: ${queryInput}`, match: true },
      { name: "Senior_Candidate_A.pdf", score: "85.4%", role: "Software Architect", match: false },
      { name: "Candidate_B.pdf", score: "74.2%", role: "Frontend Engineer", match: false },
    ]);
  };

  return (
    <section
      id="projects"
      className="py-16 lg:py-24 px-6 lg:px-12 relative overflow-hidden select-none border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 relative z-10">

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
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
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
                className="conic-glow-card flex flex-col h-full"
              >
                <div className="conic-glow-card-inner glass-panel border border-white/5 flex flex-col justify-between h-full group">
                  
                  {/* Image / Custom Visual Header */}
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
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                      </>
                    )}

                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-indigo-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full uppercase border border-white/10">
                      {project.category}
                    </span>

                    {/* Project Number watermark */}
                    <span className="absolute bottom-3 right-4 text-4xl font-extrabold font-heading text-white/10 leading-none select-none">
                      {project.number}
                    </span>
                  </div>

                  {/* Info Section */}
                  <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-bold font-heading uppercase text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
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
                          className="text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions & Architecture Modal Trigger */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto gap-2">
                      <Dialog>
                        <DialogTrigger className="flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer">
                          <Layers className="w-4 h-4" /> System Architecture
                        </DialogTrigger>

                        <DialogContent className="max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-[#0E0E12] border border-white/10 rounded-2xl p-6 text-white cursor-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-heading uppercase text-white tracking-tight flex items-center gap-2">
                              <Cpu className="w-5 h-5 text-indigo-400" /> {project.title} — System Architecture
                            </DialogTitle>
                            <DialogDescription className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                              Category: {project.category} // Stack: {project.tech.join(", ")}
                            </DialogDescription>
                          </DialogHeader>

                          <div className="flex flex-col gap-6 mt-4">
                            {/* Architecture Flow */}
                            <div className="flex flex-col gap-3">
                              <h4 className="text-sm font-mono uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                                <Layers className="w-4 h-4" /> Architecture Components
                              </h4>
                              <div className="grid grid-cols-1 gap-2.5">
                                {project.architecture.map((layer, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3.5 rounded-xl bg-white/4 border border-white/5 text-xs font-mono text-zinc-300 flex items-start gap-3"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{layer}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Interactive Query Simulator for AI Resume Search Engine */}
                            {project.filterTag === "AI" && (
                              <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 flex flex-col gap-4">
                                <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-300 flex items-center gap-2 font-bold">
                                  <Search className="w-4 h-4" /> Try Vector Search Simulator
                                </h4>
                                <form onSubmit={handleQuerySim} className="flex gap-2">
                                  <input
                                    type="text"
                                    value={queryInput}
                                    onChange={(e) => setQueryInput(e.target.value)}
                                    className="flex-1 bg-black/60 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white font-mono outline-none focus:border-indigo-500"
                                    placeholder="Enter candidate skill query..."
                                  />
                                  <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                                  >
                                    Search <ArrowRight className="w-3.5 h-3.5" />
                                  </button>
                                </form>

                                <div className="flex flex-col gap-2">
                                  <span className="text-[11px] font-mono text-zinc-400">Cosine Similarity Vector Rankings:</span>
                                  {simResults.map((r, idx) => (
                                    <div
                                      key={idx}
                                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono ${
                                        r.match
                                          ? "bg-indigo-500/15 border-indigo-500/30 text-white font-bold"
                                          : "bg-white/3 border-white/5 text-zinc-400"
                                      }`}
                                    >
                                      <div className="flex items-center gap-2">
                                        <span>{r.match ? "🏆" : "📄"}</span>
                                        <span>{r.name}</span>
                                        <span className="text-[10px] text-zinc-500">({r.role})</span>
                                      </div>
                                      <span className={r.match ? "text-indigo-400" : "text-zinc-500"}>
                                        {r.score}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* External Links inside modal */}
                            <div className="flex items-center justify-end gap-4 border-t border-white/10 pt-4">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                                >
                                  <GithubIcon className="w-4 h-4" /> GitHub Repository
                                </a>
                              )}
                              {project.live && project.live !== "#" && (
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-xs font-mono text-white font-bold flex items-center gap-2 transition-colors cursor-pointer"
                                >
                                  Live Demo <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      {/* Direct Links */}
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
                            aria-label="GitHub Repository"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.live && project.live !== "#" ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
                          >
                            Live <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="text-[10px] font-mono text-zinc-600">In Dev</span>
                        )}
                      </div>
                    </div>
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

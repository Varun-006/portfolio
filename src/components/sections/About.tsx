"use client";

import { motion } from "framer-motion";
import { User, Cpu, Sparkles, Download, FileText, ExternalLink, Code, Brain, GraduationCap } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function About() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.12 },
    },
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
      id="about"
      className="py-16 lg:py-24 px-6 lg:px-12 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col gap-3">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest block">
            // 01. Story & Core Focus
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter uppercase text-white">
            ABOUT ME
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* Bento Card 1 (Large Main Bio — 7 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between gap-6 glass-panel-hover relative overflow-hidden group bg-gradient-to-br from-indigo-950/20 via-transparent to-transparent"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-300">
                  Passionate Engineer &amp; AI Builder
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-heading uppercase text-white leading-tight">
                Building practical AI &amp; full-stack software applications.
              </h3>

              <p className="font-sans text-base text-zinc-400 leading-relaxed">
                I&apos;m an Information Science Engineering student focused on building real-world applications combining Machine Learning, Generative AI, Python, backend architectures, and modern web frameworks.
              </p>
              <p className="font-sans text-base text-zinc-400 leading-relaxed">
                I believe in hands-on building — turning complex algorithms into intuitive, high-performance web products.
              </p>
            </div>

            {/* View Resume Dialog Trigger */}
            <div className="pt-2">
              <Dialog>
                <DialogTrigger className="inline-flex items-center gap-2.5 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs uppercase tracking-wider rounded-full font-bold transition-all duration-300 border border-indigo-500/20 shadow-[0_0_24px_rgba(99,102,241,0.25)] hover:shadow-[0_0_36px_rgba(99,102,241,0.4)] group cursor-pointer">
                  <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
                  View &amp; Download Resume
                </DialogTrigger>

                <DialogContent className="max-w-4xl w-full h-[90vh] bg-[#0E0E0E] border border-white/10 rounded-2xl flex flex-col gap-0 p-0 overflow-hidden cursor-auto">
                  <DialogHeader className="flex flex-row items-center justify-between px-6 py-4 border-b border-white/8 shrink-0">
                    <DialogTitle className="text-white font-heading uppercase tracking-tight text-base flex items-center gap-2">
                      <FileText className="w-4 h-4 text-indigo-400" />
                      Varun D — Resume
                    </DialogTitle>

                    <div className="flex items-center gap-3 ml-auto mr-8">
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Open
                      </a>
                      <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-500/20 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_0_16px_rgba(99,102,241,0.3)]"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download
                      </a>
                    </div>
                  </DialogHeader>

                  <div className="flex-1 w-full bg-black/40 overflow-hidden">
                    <iframe
                      src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                      className="w-full h-full border-0"
                      title="Varun D Resume"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          {/* Bento Card 2 (Profile Photo Card — 5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative min-h-[380px] rounded-3xl overflow-hidden border border-white/10 group glass-panel"
          >
            <Image
              src="/profile.jpg"
              alt="Varun D"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="glass-panel px-4 py-3 rounded-2xl border border-white/10 flex items-center justify-between backdrop-blur-md">
                <div>
                  <p className="text-white font-heading text-base uppercase tracking-wider font-bold">Varun D</p>
                  <p className="text-indigo-400 font-mono text-[10px] uppercase tracking-widest">ISE Student &amp; Developer</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3 (Developer Core — 4 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between gap-4 glass-panel-hover group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sky-500/10 text-sky-400 rounded-2xl border border-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm uppercase text-white tracking-wide">
                Full-Stack Core
              </h4>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              Proficient in building fast single-page apps, server-rendered platforms, and REST APIs using MERN &amp; Next.js.
            </p>
          </motion.div>

          {/* Bento Card 4 (AI & ML Integration — 4 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between gap-4 glass-panel-hover group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-violet-500/10 text-violet-400 rounded-2xl border border-violet-500/20 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm uppercase text-white tracking-wide">
                AI &amp; Vector Embeddings
              </h4>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              Experienced in embedding ChromaDB 384-dim semantic search vectors, LLMs, and Python data pipelines.
            </p>
          </motion.div>

          {/* Bento Card 5 (Academic Foundation — 4 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between gap-4 glass-panel-hover group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-sm uppercase text-white tracking-wide">
                Academic Foundation
              </h4>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              B.E. Information Science Engineering student (CGPA: 8.36), grounded in Data Structures, OS, and DBMS.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

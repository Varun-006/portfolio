"use client";

import { motion } from "framer-motion";
import { User, Cpu, Sparkles, Download, FileText, ExternalLink } from "lucide-react";
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
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUpVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="about"
      className="py-24 lg:py-36 px-6 lg:px-12 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 lg:gap-24 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col gap-4">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest block">
            // 01. Story
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter uppercase text-white">
            ABOUT ME
          </h2>
        </div>

        {/* Layout: Editorial split */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          {/* Left: Big Statement + Resume */}
          <motion.div
            variants={fadeUpVariants}
            className="col-span-1 lg:col-span-7 flex flex-col gap-8 text-zinc-300"
          >
            <h3 className="text-2xl md:text-3xl font-heading uppercase text-white leading-tight">
              Passionate about AI and Software Development
            </h3>
            <p className="font-sans text-lg text-zinc-400 leading-relaxed">
              I&apos;m an Information Science Engineering student with a strong interest in
              Artificial Intelligence and software development. I enjoy building practical
              projects that combine AI, backend development, and modern web technologies.
            </p>
            <p className="font-sans text-lg text-zinc-400 leading-relaxed">
              My current focus is Python, Machine Learning, Generative AI, Data Structures
              and Algorithms, and full-stack development. I believe the best way to learn
              technology is by building real applications and solving practical problems.
            </p>

            {/* View Resume Button */}
            <div className="pt-2">
              <Dialog>
                <DialogTrigger className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-sm uppercase tracking-wider rounded-full font-bold transition-all duration-300 border border-indigo-500/20 shadow-[0_0_24px_rgba(99,102,241,0.25)] hover:shadow-[0_0_36px_rgba(99,102,241,0.4)] group cursor-none interactive">
                  <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
                  View Resume
                </DialogTrigger>

                <DialogContent className="max-w-4xl w-full h-[90vh] bg-[#0E0E0E] border border-white/10 rounded-2xl flex flex-col gap-0 p-0 overflow-hidden cursor-auto">
                  {/* Dialog Header */}
                  <DialogHeader className="flex flex-row items-center justify-between px-6 py-4 border-b border-white/8 shrink-0">
                    <DialogTitle className="text-white font-heading uppercase tracking-tight text-base flex items-center gap-2">
                      <FileText className="w-4 h-4 text-indigo-400" />
                      Varun D — Resume
                    </DialogTitle>

                    {/* Action buttons */}
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

                  {/* Embedded PDF Viewer */}
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

          {/* Right: Photo + Cards */}
          <motion.div
            variants={fadeUpVariants}
            className="col-span-1 lg:col-span-5 flex flex-col gap-6 w-full"
          >
            {/* Profile Photo */}
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden border border-white/8 group">
              <Image
                src="/profile.jpg"
                alt="Varun D"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              {/* Name tag on photo */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-panel px-4 py-2.5 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-white font-heading text-sm uppercase tracking-wider font-bold">Varun D</p>
                    <p className="text-indigo-400 font-mono text-[10px] uppercase tracking-widest">ISE Student & Developer</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Box 1 */}
            <div className="glass-panel p-6 rounded-3xl border border-white/5 flex flex-col gap-3 hover:border-indigo-500/20 transition-colors duration-300 group interactive">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-mono text-sm tracking-widest uppercase text-white">
                  Developer Core
                </h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Proficient in building single page applications, server-rendered apps, and micro-frontend structures.
              </p>
            </div>

            {/* Box 2 */}
            <div className="glass-panel p-6 rounded-3xl border border-white/5 flex flex-col gap-3 hover:border-indigo-500/20 transition-colors duration-300 group interactive">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-mono text-sm tracking-widest uppercase text-white">
                  AI Integration
                </h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Passionate about embedding smart agents, machine learning APIs, and data modeling pipelines directly into web environments.
              </p>
            </div>

            {/* Box 3 */}
            <div className="glass-panel p-6 rounded-3xl border border-white/5 flex flex-col gap-3 hover:border-indigo-500/20 transition-colors duration-300 group interactive">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <User className="w-5 h-5" />
                </div>
                <h4 className="font-mono text-sm tracking-widest uppercase text-white">
                  Academic Focus
                </h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Currently pursuing an Information Science Engineering degree, grounding developer skills with algorithmic foundations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

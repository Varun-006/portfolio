"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticLink } from "../Navbar";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Engineer",
  "AI Developer",
  "ML Enthusiast",
  "Problem Solver",
];

// Fixed particle positions to avoid hydration mismatch
const particles = [
  { left: "8%",  top: "15%", duration: 4.2, delay: 0 },
  { left: "18%", top: "72%", duration: 5.1, delay: 0.7 },
  { left: "30%", top: "38%", duration: 3.8, delay: 1.2 },
  { left: "42%", top: "85%", duration: 6.0, delay: 0.3 },
  { left: "55%", top: "22%", duration: 4.7, delay: 1.8 },
  { left: "65%", top: "55%", duration: 5.5, delay: 0.5 },
  { left: "75%", top: "10%", duration: 3.5, delay: 2.1 },
  { left: "82%", top: "68%", duration: 4.9, delay: 0.9 },
  { left: "90%", top: "40%", duration: 6.3, delay: 1.4 },
  { left: "5%",  top: "50%", duration: 4.4, delay: 2.5 },
  { left: "22%", top: "92%", duration: 5.8, delay: 0.2 },
  { left: "48%", top: "60%", duration: 3.9, delay: 1.6 },
  { left: "70%", top: "30%", duration: 4.1, delay: 0.8 },
  { left: "88%", top: "80%", duration: 5.3, delay: 1.1 },
  { left: "35%", top: "5%",  duration: 6.5, delay: 0.4 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const textRevealVariants = {
    initial: { y: "120%" },
    animate: {
      y: "0%",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const fadeUpVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 12, 0],
      transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 pt-24 overflow-hidden select-none">
      {/* Background Grid Pattern */}
      <div className="grid-lines absolute inset-0" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-indigo-500/40"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -28, 0], opacity: [0.15, 0.7, 0.15] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Ambient Glow behind photo */}
      <div className="absolute right-0 bottom-0 top-0 w-full lg:w-[50%] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(99,102,241,0.14),transparent_65%)]" />
      </div>

      {/* Background Profile Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.40, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
        className="absolute right-0 bottom-0 top-0 w-full lg:w-[50%] h-full pointer-events-none select-none z-0 overflow-hidden"
        style={{
          maskImage: "radial-gradient(ellipse at 65% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at 65% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 85%)",
        }}
      >
        <Image
          src="/profile.jpg"
          alt="Varun D Portrait"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center grayscale opacity-90"
        />
      </motion.div>

      {/* Main Hero Container */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl w-full mx-auto flex flex-col gap-8 relative z-10 text-center lg:text-left mt-8 lg:mt-0"
      >
        {/* Intro Tag + Rotating Role */}
        <div className="flex flex-col gap-3 items-center lg:items-start">
          <div className="overflow-hidden h-fit flex justify-center lg:justify-start">
            <motion.div
              variants={textRevealVariants}
              className="flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full text-xs font-mono tracking-widest text-indigo-300 uppercase border border-indigo-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              AI & Full Stack Engineer Student
            </motion.div>
          </div>

          {/* Rotating Role Subtitle */}
          <div className="h-7 overflow-hidden flex justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="block text-zinc-500 font-mono text-sm tracking-widest uppercase"
              >
                // {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Huge Modern Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-extrabold leading-[0.9] tracking-tighter text-white uppercase text-left flex flex-col gap-1 md:gap-3">
          <span className="overflow-hidden block py-1.5">
            <motion.span variants={textRevealVariants} className="block">
              INTELLIGENT
            </motion.span>
          </span>
          <span className="overflow-hidden block py-1.5 text-indigo-400">
            <motion.span variants={textRevealVariants} className="block">
              SYSTEMS //
            </motion.span>
          </span>
          <span className="overflow-hidden block py-1.5">
            <motion.span variants={textRevealVariants} className="block">
              SEAMLESS WEB
            </motion.span>
          </span>
        </h1>

        {/* Short introduction + CTA buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-2">
          <motion.p
            variants={fadeUpVariants}
            className="text-zinc-400 font-sans text-lg md:text-xl max-w-xl text-left leading-relaxed"
          >
            I am Varun D, an Information Science Engineering student pushing the
            boundaries of modern web development and Artificial Intelligence. Creating
            cinematic products with flawless user interaction.
          </motion.p>

          {/* CTA Buttons + Social Links */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap items-center gap-4 justify-start"
          >
            <MagneticLink href="#projects">
              <span className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-sm uppercase tracking-wider rounded-full font-bold flex items-center gap-2 group transition-all duration-300 border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.2)] cursor-none interactive">
                Selected Works
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </MagneticLink>

            <MagneticLink href="#contact">
              <span className="px-8 py-4 bg-transparent hover:bg-white/5 text-white font-mono text-sm uppercase tracking-wider rounded-full font-bold flex items-center gap-2 transition-all duration-300 border border-white/10 cursor-none interactive">
                Let&apos;s Talk
              </span>
            </MagneticLink>

            {/* Social Icon Links */}
            <div className="flex items-center gap-3 pl-2 border-l border-white/10">
              <a
                href="https://github.com/Varun-006"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:shadow-[0_0_16px_rgba(99,102,241,0.25)] text-zinc-400 hover:text-white transition-all duration-300 cursor-none interactive"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/varun-d-14b3a2344/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:shadow-[0_0_16px_rgba(99,102,241,0.25)] text-zinc-400 hover:text-white transition-all duration-300 cursor-none interactive"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 font-mono text-[10px] tracking-widest uppercase z-10 interactive"
      >
        <span>Scroll Down</span>
        <motion.div
          variants={scrollIndicatorVariants}
          animate="animate"
          className="w-5 h-8 rounded-full border border-zinc-700 flex justify-center pt-1"
        >
          <motion.div className="w-1 h-2 bg-indigo-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

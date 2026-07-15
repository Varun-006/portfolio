"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Disable scroll during preloader
    document.documentElement.classList.add("lenis-stopped");

    let start = 0;
    const duration = 1200; // ms
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setComplete(true);
          document.documentElement.classList.remove("lenis-stopped");
        }, 500);
      } else {
        setProgress(Math.floor(start));
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          className="fixed inset-0 bg-[#0A0A0A] z-[99999] flex flex-col justify-between p-8 lg:p-16 select-none pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } 
          }}
        >
          {/* Top Info */}
          <div className="flex justify-between items-center text-xs lg:text-sm font-mono tracking-widest text-zinc-500 uppercase">
            <span>Varun D</span>
            <span>Portfolio Redesign // 2026</span>
          </div>

          {/* Center Text */}
          <div className="my-auto">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-heading text-white tracking-tighter flex flex-col uppercase">
              <span className="overflow-hidden inline-block h-fit">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="inline-block"
                >
                  Innovate.
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block h-fit text-indigo-500">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="inline-block"
                >
                  Develop.
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block h-fit">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="inline-block"
                >
                  Deploy.
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Bottom Counter */}
          <div className="flex justify-between items-end">
            <div className="text-zinc-500 font-mono text-sm max-w-xs leading-relaxed hidden md:block">
              Merging Artificial Intelligence and Full Stack Engineering to build seamless digital experiences.
            </div>
            <div className="text-8xl md:text-[10rem] lg:text-[14rem] font-bold font-heading leading-none text-white tracking-tighter tabular-nums flex items-baseline">
              <span>{progress}</span>
              <span className="text-xs md:text-sm font-mono text-zinc-500 uppercase ml-2">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

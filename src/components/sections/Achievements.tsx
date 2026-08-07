"use client";

import { motion } from "framer-motion";
import { Award, Eye, ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Achievement {
  title: string;
  org: string;
  year: string;
  description: string;
  category: "Award" | "Certification";
  image?: string;
  badgeUrl?: string;
  icon: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      title: "HACKABHiGNA 2025",
      org: "AIT Chikkamagaluru & Google Student Ambassador Program",
      year: "Oct 2025",
      description: "Participated in 24-hour National Level Hackathon (Fullstack Marketing Analytics & Agentic Flow). Sponsored by Google Gemini, Streamz AI & Environ India.",
      category: "Award",
      image: "/certificates/hackabhigna.jpg",
      icon: "⚡",
    },
    {
      title: "Runner-Up — GameForge",
      org: "Club Avinya, Rajeev Institute of Technology, Hassan",
      year: "Sept 2025",
      description: "Achieved Runner-up position in GameForge competition (Game Development using Python), showcasing innovative game design and strong technical execution.",
      category: "Award",
      image: "/certificates/gameforge.jpg",
      icon: "🏆",
    },
    {
      title: "Machine Learning Methods & Tools",
      org: "IBM SkillsBuild",
      year: "2026",
      description: "Comprehensive training on Machine Learning methods, tools, and data modeling pipelines.",
      category: "Certification",
      image: "/certificates/ibm_ml.jpg",
      badgeUrl: "https://www.credly.com/badges/8b92e22d-0b13-41ad-b8b4-1c95074eea31",
      icon: "🎖️",
    },
    {
      title: "IoT and its Applications",
      org: "NIELIT (Govt. of India)",
      year: "2026",
      description: "Certified in Internet of Things (IoT) architecture, sensors, microcontrollers, and application development.",
      category: "Certification",
      image: "/certificates/iot.jpg",
      badgeUrl: "https://www.nielit.gov.in/",
      icon: "📜",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 lg:py-36 px-6 lg:px-12 relative overflow-hidden select-none border-t border-white/5 bg-zinc-950/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-4">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest block">
            // 05. Recognition
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter uppercase text-white">
            ACHIEVEMENTS & CERTIFICATIONS
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass-panel p-6 rounded-3xl border border-white/5 flex flex-col justify-between gap-6 glass-panel-hover group"
            >
              <div className="flex flex-col gap-4">
                {/* Badge Tag */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">
                    {item.category}
                  </span>
                  <span className="text-zinc-500">{item.year}</span>
                </div>

                {/* Optional Image or Icon Graphic */}
                {item.image ? (
                  <Dialog>
                    <DialogTrigger className="w-full text-left bg-transparent p-0 m-0 border-0 outline-none block cursor-none interactive">
                      <div className="relative h-52 w-full rounded-2xl overflow-hidden border border-white/5 group/img">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/45 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                          <span className="px-5 py-2.5 bg-indigo-600 rounded-full font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 shadow-lg border border-indigo-500/20">
                            <Eye className="w-4 h-4" /> View Certificate
                          </span>
                        </div>
                      </div>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-4xl max-h-[85vh] overflow-y-auto bg-[#0E0E0E] border border-white/10 rounded-2xl flex flex-col gap-4 p-6 text-white cursor-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-heading uppercase text-white tracking-tight flex items-center gap-2">
                          <span>{item.icon}</span> {item.title}
                        </DialogTitle>
                        <DialogDescription className="text-zinc-500 font-mono text-xs uppercase tracking-wider">
                          Issued by {item.org} // Year {item.year}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="relative w-full h-[60vh] rounded-lg overflow-hidden border border-white/5 mt-2 bg-black">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <div className="h-32 w-full rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent border border-white/5 p-5 flex flex-col justify-between">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{item.org}</span>
                  </div>
                )}

                {/* Details */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold font-heading uppercase text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Badge/Credly Verification Link */}
              {item.badgeUrl && (
                <div className="border-t border-white/5 pt-4 flex justify-end">
                  <a
                    href={item.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-none interactive"
                  >
                    Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

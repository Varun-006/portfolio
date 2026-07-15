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

interface Certificate {
  title: string;
  org: string;
  year: string;
  image: string;
  badgeUrl?: string;
  icon: string;
}

export default function Achievements() {
  const certificates: Certificate[] = [
    {
      title: "Machine Learning Methods & Tools",
      org: "IBM SkillsBuild",
      year: "2026",
      image: "/certificates/ibm_ml.jpg",
      badgeUrl: "https://www.credly.com/badges/8b92e22d-0b13-41ad-b8b4-1c95074eea31",
      icon: "🏆",
    },
    {
      title: "IoT and its Applications",
      org: "NIELIT (Govt. of India)",
      year: "2026",
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass-panel p-6 rounded-3xl border border-white/5 flex flex-col justify-between gap-6 glass-panel-hover group"
            >
              <div className="flex flex-col gap-4">
                {/* Image Preview Panel */}
                <Dialog>
                  <DialogTrigger className="w-full text-left bg-transparent p-0 m-0 border-0 outline-none block cursor-none interactive">
                    <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/5 group/img">
                      <Image
                        src={cert.image}
                        alt={cert.title}
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
                        <span>{cert.icon}</span> {cert.title}
                      </DialogTitle>
                      <DialogDescription className="text-zinc-500 font-mono text-xs uppercase tracking-wider">
                        Issued by {cert.org} // Year {cert.year}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="relative w-full h-[60vh] rounded-lg overflow-hidden border border-white/5 mt-2 bg-black">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Details */}
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
                    <span>{cert.org}</span>
                    <span className="text-indigo-400 font-semibold">{cert.year}</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading uppercase text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Badge/Credly Verification Link */}
              {cert.badgeUrl && (
                <div className="border-t border-white/5 pt-4 flex justify-end">
                  <a
                    href={cert.badgeUrl}
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

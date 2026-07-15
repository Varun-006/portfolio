"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { MagneticLink } from "../Navbar";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mjgejyen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-36 px-6 lg:px-12 relative overflow-hidden select-none border-t border-white/5 bg-[#080808]"
    >
      {/* Background radial soft light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-4">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest block">
            // 06. Communication
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter uppercase text-white">
            GET IN TOUCH
          </h2>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Info Side (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold font-heading uppercase text-white tracking-tight">
                Let&apos;s Build Something Meaningful
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed font-sans">
                I&apos;m open to internships, collaborative projects, and opportunities to work
                on AI and full-stack applications. Feel free to reach out if you want to
                connect, collaborate, or just talk tech.
              </p>
            </div>

            {/* Direct Coordinates */}
            <div className="flex flex-col gap-5 border-t border-white/5 pt-8">
              {/* Coordinate: Email */}
              <a
                href="mailto:varund9110820617@gmail.com"
                className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors duration-300 group interactive"
              >
                <div className="p-3.5 bg-white/5 border border-white/5 rounded-2xl group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-mono text-xs">
                  <span className="text-zinc-600 uppercase tracking-widest">EMAIL</span>
                  <span className="text-sm tracking-wide">varund9110820617@gmail.com</span>
                </div>
              </a>

              {/* Coordinate: Resume */}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors duration-300 group interactive"
              >
                <div className="p-3.5 bg-white/5 border border-white/5 rounded-2xl group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-mono text-xs">
                  <span className="text-zinc-600 uppercase tracking-widest">RESUME CODES</span>
                  <span className="text-sm tracking-wide flex items-center gap-1">
                    Download resume.pdf
                  </span>
                </div>
              </a>
            </div>

            {/* Social Anchor points */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Varun-006"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 border border-white/5 rounded-2xl text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-colors cursor-none interactive"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/varun-d-14b3a2344/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 border border-white/5 rounded-2xl text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-colors cursor-none interactive"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Form Side (Right) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 h-full relative">
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col justify-center items-center gap-4 text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-bounce" />
                  <h4 className="text-2xl font-bold font-heading text-white uppercase tracking-tight">
                    Transmission Complete
                  </h4>
                  <p className="text-zinc-400 text-sm max-w-sm font-sans leading-relaxed">
                    Thank you, Varun has received your transmission. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
                  {/* Name Group */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.04] transition-all cursor-none interactive"
                    />
                  </div>

                  {/* Email Group */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      Email Coordinates
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.04] transition-all cursor-none interactive"
                    />
                  </div>

                  {/* Message Group */}
                  <div className="flex flex-col gap-2 flex-grow">
                    <label htmlFor="message" className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="What would you like to build?"
                      className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.04] transition-all resize-none cursor-none interactive"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-sm uppercase tracking-wider rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 border border-indigo-500/20 cursor-none interactive shadow-[0_0_30px_rgba(99,102,241,0.15)] mt-4"
                  >
                    {status === "submitting" ? (
                      "Transmitting..."
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono justify-center mt-2">
                      <AlertCircle className="w-4 h-4" /> Error processing transmission. Please retry.
                    </div>
                  )}
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-xs font-mono">
          <p>&copy; {new Date().getFullYear()} VARUN. ALL RIGHTS RESERVED.</p>
          <p className="tracking-wider uppercase">CRAFTED WITH PRECISION // NEXT.JS + TAILWIND</p>
        </div>

      </div>
    </section>
  );
}

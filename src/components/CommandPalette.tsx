"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  FileText,
  Mail,
  Palette,
  ArrowRight,
  Code2,
  Sparkles,
  Layers,
  Award,
  User,
  Check,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { useTheme, ThemeAccent } from "@/context/ThemeContext";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Themes";
  icon: React.ReactNode;
  perform: () => void;
  badge?: string;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const { accent, setAccent } = useTheme();

  // Listen for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigate = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("varunda741@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "about",
      title: "Go to About Me",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-indigo-400" />,
      perform: () => handleNavigate("about"),
    },
    {
      id: "projects",
      title: "Go to Selected Projects",
      category: "Navigation",
      icon: <Code2 className="w-4 h-4 text-violet-400" />,
      perform: () => handleNavigate("projects"),
    },
    {
      id: "skills",
      title: "Go to Technical Skills",
      category: "Navigation",
      icon: <Sparkles className="w-4 h-4 text-sky-400" />,
      perform: () => handleNavigate("skills"),
    },
    {
      id: "timeline",
      title: "Go to Experience & Education",
      category: "Navigation",
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      perform: () => handleNavigate("timeline"),
    },
    {
      id: "achievements",
      title: "Go to Achievements & Certifications",
      category: "Navigation",
      icon: <Award className="w-4 h-4 text-amber-400" />,
      perform: () => handleNavigate("achievements"),
    },
    {
      id: "contact",
      title: "Go to Contact",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      perform: () => handleNavigate("contact"),
    },

    // Actions
    {
      id: "resume",
      title: "View & Download Resume PDF",
      category: "Actions",
      icon: <FileText className="w-4 h-4 text-indigo-400" />,
      perform: () => {
        setOpen(false);
        window.open("/resume.pdf", "_blank");
      },
      badge: "PDF",
    },
    {
      id: "copy-email",
      title: copied ? "Email Copied to Clipboard!" : "Copy Contact Email",
      category: "Actions",
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-indigo-400" />,
      perform: copyEmail,
      badge: copied ? "Copied!" : "varunda741@gmail.com",
    },
    {
      id: "github",
      title: "Open GitHub Profile",
      category: "Actions",
      icon: <GithubIcon className="w-4 h-4 text-zinc-300" />,
      perform: () => {
        setOpen(false);
        window.open("https://github.com/Varun-006", "_blank");
      },
      badge: "GitHub",
    },
    {
      id: "linkedin",
      title: "Open LinkedIn Profile",
      category: "Actions",
      icon: <LinkedinIcon className="w-4 h-4 text-sky-400" />,
      perform: () => {
        setOpen(false);
        window.open("https://www.linkedin.com/in/varun-d-14b3a2344/", "_blank");
      },
      badge: "LinkedIn",
    },

    // Themes
    {
      id: "theme-indigo",
      title: "Switch Theme: Cyber Indigo",
      category: "Themes",
      icon: <Palette className="w-4 h-4 text-indigo-400" />,
      perform: () => setAccent("indigo"),
      badge: accent === "indigo" ? "Active" : "",
    },
    {
      id: "theme-emerald",
      title: "Switch Theme: Neon Emerald",
      category: "Themes",
      icon: <Palette className="w-4 h-4 text-emerald-400" />,
      perform: () => setAccent("emerald"),
      badge: accent === "emerald" ? "Active" : "",
    },
    {
      id: "theme-violet",
      title: "Switch Theme: Galactic Violet",
      category: "Themes",
      icon: <Palette className="w-4 h-4 text-violet-400" />,
      perform: () => setAccent("violet"),
      badge: accent === "violet" ? "Active" : "",
    },
    {
      id: "theme-cyan",
      title: "Switch Theme: Matrix Cyan",
      category: "Themes",
      icon: <Palette className="w-4 h-4 text-cyan-400" />,
      perform: () => setAccent("cyan"),
      badge: accent === "cyan" ? "Active" : "",
    },
  ];

  const filtered = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Floating Trigger Button (Mobile & Desktop Trigger) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-4 py-2.5 glass-panel rounded-full border border-white/10 hover:border-indigo-500/40 text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-2.5 shadow-2xl transition-all duration-300 group cursor-pointer"
        aria-label="Open Command Palette"
      >
        <Command className="w-3.5 h-3.5 text-indigo-400 group-hover:rotate-45 transition-transform duration-300" />
        <span className="hidden sm:inline">Command Menu</span>
        <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-zinc-400 font-mono">
          ⌘K
        </kbd>
      </button>

      {/* Modal Backdrop & Palette */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-w-xl w-full bg-[#0E0E12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              {/* Search Bar Input */}
              <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-white/2">
                <Search className="w-4 h-4 text-indigo-400 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search section..."
                  className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none font-sans"
                  autoFocus
                />
                <kbd className="px-2 py-1 rounded bg-white/5 text-[10px] text-zinc-500 font-mono border border-white/5">
                  ESC
                </kbd>
              </div>

              {/* Commands List */}
              <div className="max-h-[360px] overflow-y-auto p-2 flex flex-col gap-1">
                {filtered.length === 0 ? (
                  <div className="p-8 text-center text-zinc-500 font-mono text-xs">
                    No matching commands found.
                  </div>
                ) : (
                  filtered.map((item) => (
                    <button
                      key={item.id}
                      onClick={item.perform}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-indigo-500/10 hover:border-indigo-500/20 border border-transparent flex items-center justify-between group transition-all duration-150 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-indigo-500/20 transition-colors">
                          {item.icon}
                        </div>
                        <span className="text-sm font-sans text-zinc-300 group-hover:text-white transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-indigo-300 border border-white/5">
                            {item.badge}
                          </span>
                        )}
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 border-t border-white/5 bg-white/1 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Command className="w-3 h-3 text-indigo-400" /> Navigation Palette
                </span>
                <span>Press <kbd className="text-zinc-400">ESC</kbd> to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

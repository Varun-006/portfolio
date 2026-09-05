"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight, Palette, Command } from "lucide-react";
import Link from "next/link";
import { useTheme, ThemeAccent } from "@/context/ThemeContext";

interface MagneticLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
}

export function MagneticLink({ children, href, onClick, className = "", download = false }: MagneticLinkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 15, stiffness: 150 });
  const springY = useSpring(y, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull distance multiplier
    const pullX = (clientX - centerX) * 0.35;
    const pullY = (clientY - centerY) * 0.35;

    x.set(pullX);
    y.set(pullY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative inline-block ${className}`}
    >
      {download ? (
        <a href={href} download onClick={onClick} className="w-full h-full block">
          {children}
        </a>
      ) : (
        <Link href={href} onClick={onClick} className="w-full h-full block">
          {children}
        </Link>
      )}
    </motion.div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { accent, setAccent } = useTheme();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Timeline", href: "#timeline" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const accentsList: { name: ThemeAccent; color: string }[] = [
    { name: "indigo", color: "#6366f1" },
    { name: "emerald", color: "#10b981" },
    { name: "violet", color: "#8b5cf6" },
    { name: "cyan", color: "#06b6d4" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 lg:px-12 lg:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-6 py-4 rounded-full border border-white/5 backdrop-blur-md shadow-2xl relative">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold font-heading tracking-tighter text-white flex items-center gap-1 group cursor-pointer">
          <span>VARUN</span>
          <span
            className="w-2 h-2 rounded-full transition-transform group-hover:scale-150 duration-300 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
            style={{ backgroundColor: accentsList.find((a) => a.name === accent)?.color || "#6366f1" }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-wider text-zinc-400 hover:text-white transition-colors duration-300 relative group py-1 cursor-pointer"
            >
              {link.name}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: accentsList.find((a) => a.name === accent)?.color || "#6366f1" }}
              />
            </Link>
          ))}
        </div>

        {/* Theme Picker + Command Palette Hint + Resume CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Accent Color Switcher */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
            <Palette className="w-3.5 h-3.5 text-zinc-400 mr-1" />
            {accentsList.map((a) => (
              <button
                key={a.name}
                onClick={() => setAccent(a.name)}
                className={`w-3.5 h-3.5 rounded-full transition-all cursor-pointer ${
                  accent === a.name ? "scale-125 ring-2 ring-white/50" : "opacity-60 hover:opacity-100"
                }`}
                style={{ backgroundColor: a.color }}
                title={`Switch accent theme to ${a.name}`}
              />
            ))}
          </div>

          <MagneticLink href="/resume.pdf" download>
            <span className="px-5 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-wider rounded-full font-bold flex items-center gap-1.5 hover:bg-zinc-200 transition-colors cursor-pointer">
              Resume <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </MagneticLink>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white cursor-pointer p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Slideout Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[110%] left-0 w-full glass-panel border border-white/5 rounded-3xl p-6 flex flex-col gap-4 backdrop-blur-xl lg:hidden z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-mono tracking-wide text-zinc-400 hover:text-white transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Accent theme switcher */}
            <div className="flex items-center justify-between py-2 border-b border-white/5 text-xs font-mono text-zinc-400">
              <span>Theme Accent:</span>
              <div className="flex items-center gap-2">
                {accentsList.map((a) => (
                  <button
                    key={a.name}
                    onClick={() => setAccent(a.name)}
                    className={`w-4 h-4 rounded-full transition-all cursor-pointer ${
                      accent === a.name ? "ring-2 ring-white" : "opacity-60"
                    }`}
                    style={{ backgroundColor: a.color }}
                  />
                ))}
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center py-3 bg-white text-black font-mono text-xs uppercase tracking-wider rounded-full font-bold flex items-center justify-center gap-1.5 hover:bg-zinc-200"
            >
              Resume <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

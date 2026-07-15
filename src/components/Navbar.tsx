"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

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

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Timeline", href: "#timeline" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 lg:px-12 lg:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-6 py-4 rounded-full border border-white/5 backdrop-blur-md shadow-2xl relative">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold font-heading tracking-tighter text-white flex items-center gap-1 group interactive">
          <span>VARUN</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 transition-transform group-hover:scale-150 duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-mono tracking-wider text-zinc-400 hover:text-white transition-colors duration-300 relative group py-1 interactive"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Magnetic Resume CTA */}
        <div className="hidden md:block">
          <MagneticLink href="/resume.pdf" download>
            <span className="px-5 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-wider rounded-full font-bold flex items-center gap-1.5 hover:bg-zinc-200 transition-colors cursor-none interactive">
              Resume <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </MagneticLink>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white interactive p-1"
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
            className="absolute top-[110%] left-0 w-full glass-panel border border-white/5 rounded-3xl p-6 flex flex-col gap-4 backdrop-blur-xl md:hidden z-40"
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

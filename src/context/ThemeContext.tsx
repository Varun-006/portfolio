"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeAccent = "indigo" | "emerald" | "violet" | "cyan";

interface ThemeContextType {
  accent: ThemeAccent;
  setAccent: (accent: ThemeAccent) => void;
  themeColors: {
    primary: string;
    glow: string;
    border: string;
    badge: string;
    text: string;
  };
}

const themeColorMap: Record<ThemeAccent, ThemeContextType["themeColors"]> = {
  indigo: {
    primary: "#6366f1",
    glow: "rgba(99, 102, 241, 0.2)",
    border: "rgba(99, 102, 241, 0.3)",
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    text: "text-indigo-400",
  },
  emerald: {
    primary: "#10b981",
    glow: "rgba(16, 185, 129, 0.2)",
    border: "rgba(16, 185, 129, 0.3)",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    text: "text-emerald-400",
  },
  violet: {
    primary: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.2)",
    border: "rgba(139, 92, 246, 0.3)",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    text: "text-violet-400",
  },
  cyan: {
    primary: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.2)",
    border: "rgba(6, 182, 212, 0.3)",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    text: "text-cyan-400",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccentState] = useState<ThemeAccent>("indigo");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_accent") as ThemeAccent;
    if (saved && themeColorMap[saved]) {
      setAccentState(saved);
    }
  }, []);

  const setAccent = (newAccent: ThemeAccent) => {
    setAccentState(newAccent);
    localStorage.setItem("portfolio_accent", newAccent);
  };

  return (
    <ThemeContext.Provider
      value={{
        accent,
        setAccent,
        themeColors: themeColorMap[accent],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

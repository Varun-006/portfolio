"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function TerminalWidget() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "varun --init",
      output: (
        <div className="flex flex-col gap-1 text-zinc-300 font-mono text-xs">
          <span className="text-indigo-400 font-bold">✓ Environment initialized. Welcome to Varun D&apos;s Interactive CLI v2.5.0</span>
          <span className="text-zinc-500">Type <code className="text-indigo-300">help</code> or click the quick commands below to explore.</span>
        </div>
      ),
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        output = (
          <div className="flex flex-col gap-1.5 text-xs font-mono text-zinc-300">
            <span className="text-indigo-400 font-bold">Available Commands:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-zinc-400">
              <div><span className="text-indigo-300 font-semibold">about</span> - Brief bio & focus</div>
              <div><span className="text-indigo-300 font-semibold">skills</span> - Technical skill stack</div>
              <div><span className="text-indigo-300 font-semibold">projects</span> - Showcase of builds</div>
              <div><span className="text-indigo-300 font-semibold">vector-search</span> - Run AI semantic search</div>
              <div><span className="text-indigo-300 font-semibold">contact</span> - Email & social links</div>
              <div><span className="text-indigo-300 font-semibold">clear</span> - Clear terminal window</div>
            </div>
          </div>
        );
        break;

      case "about":
        output = (
          <p className="text-xs font-mono text-zinc-300 leading-relaxed">
            <span className="text-indigo-400 font-bold">Varun D:</span> ISE Student @ RV Institute / Tech enthusiast specializing in Python, Full-Stack Web App Development (MERN/Next.js), Agentic AI, and Machine Learning.
          </p>
        );
        break;

      case "skills":
        output = (
          <div className="flex flex-col gap-1 text-xs font-mono text-zinc-300">
            <span className="text-indigo-400 font-bold">CORE STACK:</span>
            <span>• Languages: Python, JavaScript, Java, C, HTML/CSS</span>
            <span>• Web: React.js, Next.js, Node.js, Express, Socket.io, Tailwind</span>
            <span>• AI/ML: ChromaDB, PyTorch, Embeddings (all-MiniLM-L6-v2), Generative AI</span>
            <span>• DB & Tools: MongoDB, MySQL, Docker, Git/GitHub, Cloudinary</span>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="flex flex-col gap-1.5 text-xs font-mono text-zinc-300">
            <span className="text-indigo-400 font-bold">FEATURED PROJECTS:</span>
            <span>1. <strong className="text-white">SKILLBRIDGE</strong> - Peer-to-Peer Skill Exchange Platform (React, Node, Socket.io, MongoDB)</span>
            <span>2. <strong className="text-white">AI Resume Search Engine</strong> - 384-dim Vector Similarity Search (Python, ChromaDB, PyTorch)</span>
          </div>
        );
        break;

      case "vector-search":
        output = (
          <div className="flex flex-col gap-2 p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs font-mono">
            <div className="flex items-center justify-between text-indigo-400 font-bold">
              <span>⚡ Running ChromaDB Vector Query...</span>
              <span>384-dim similarity</span>
            </div>
            <div className="text-zinc-300 flex flex-col gap-1">
              <span>Query: <code className="text-emerald-400">&quot;Full stack developer with AI & Python experience&quot;</code></span>
              <span className="text-emerald-300">✓ Match found: Varuna_D_Resume.pdf [98.4% cosine similarity]</span>
              <span className="text-zinc-500 text-[10px]">// Top skills matched: Python, React, Node.js, Machine Learning</span>
            </div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="flex flex-col gap-1 text-xs font-mono text-zinc-300">
            <span>Email: <a href="mailto:varunda741@gmail.com" className="text-indigo-400 underline">varunda741@gmail.com</a></span>
            <span>GitHub: <a href="https://github.com/Varun-006" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">github.com/Varun-006</a></span>
            <span>LinkedIn: <a href="https://www.linkedin.com/in/varun-d-14b3a2344/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">linkedin.com/in/varun-d</a></span>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "sudo":
        output = (
          <span className="text-rose-400 font-mono text-xs">
            Nice try! Permission denied: User is not in the sudoers file. 😉
          </span>
        );
        break;

      default:
        output = (
          <span className="text-rose-400 font-mono text-xs">
            Command not recognized: &quot;{trimmed}&quot;. Type <code className="text-indigo-300">help</code> for list.
          </span>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
    setInput("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="w-full glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col font-mono text-xs">
      {/* Terminal Header */}
      <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-zinc-400 font-mono text-[11px] flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" /> varun@dev-station:~
          </span>
        </div>
        <button
          onClick={() => handleCommand("clear")}
          className="text-[10px] text-zinc-500 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3 h-3" /> Clear
        </button>
      </div>

      {/* Quick Action Pills */}
      <div className="px-4 py-2 bg-black/40 border-b border-white/5 flex flex-wrap items-center gap-1.5 text-[10px]">
        <span className="text-zinc-500 uppercase tracking-widest mr-1">Quick:</span>
        {["help", "about", "skills", "projects", "vector-search", "contact"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 rounded bg-white/5 hover:bg-indigo-500/20 text-zinc-300 hover:text-indigo-300 border border-white/5 transition-all cursor-pointer"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 max-h-64 overflow-y-auto flex flex-col gap-3 bg-[#08080C]/90">
        {history.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-indigo-400 font-bold">
              <span>varun@portfolio:~$</span>
              <span className="text-white font-normal">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Terminal Input Line */}
      <form onSubmit={onSubmit} className="px-4 py-2.5 bg-black/60 border-t border-white/5 flex items-center gap-2">
        <span className="text-indigo-400 font-bold">varun@portfolio:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type command..."
          className="flex-1 bg-transparent text-white font-mono text-xs outline-none placeholder-zinc-600"
        />
        <button type="submit" className="text-zinc-500 hover:text-indigo-400 transition-colors cursor-pointer">
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

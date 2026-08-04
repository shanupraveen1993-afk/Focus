"use client";
import { useState, useEffect } from "react";

function CopyItem({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      data-cursor="Copy"
      className="relative text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-mono tracking-tight cursor-pointer"
    >
      {copied ? <span className="text-zinc-900 font-semibold">Copied ✓</span> : label}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,250,250,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #e4e4e7" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" data-cursor="Home" className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-zinc-800 inline-block" />
          <span className="text-sm font-semibold tracking-wide text-zinc-800">Shanmuga Praveen</span>
          <span className="text-sm text-zinc-400 hidden sm:inline">— UX Designer</span>
        </a>

        <div className="flex items-center gap-5">
          <a
            href="/Shanmuga-Praveen-Resume.pdf"
            download
            data-cursor="Download"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-mono tracking-tight"
          >
            Resume ↓
          </a>
          <span className="text-zinc-200 hidden sm:inline">|</span>
          <a
            href="https://mail.google.com/mail/?view=cm&to=shanupraveen6@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-mono tracking-tight"
          >
            shanupraveen6@gmail.com ↗
          </a>
          <span className="text-zinc-200 hidden sm:inline">|</span>
          <span className="hidden sm:block">
            <CopyItem value="+919994837342" label="+91 99948 37342" />
          </span>
          <a
            href="https://www.linkedin.com/in/shanmuga-praveen-thanigasalam-87b2bb209/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LinkedIn"
            className="text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

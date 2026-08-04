"use client";
import { useEffect, useRef, useState } from "react";

const WORDS = [
  "UX", "UI", "Empathy", "Research", "Systems",
  "Prototype", "Flow", "Persona", "Wireframe", "Component",
  "Accessibility", "Figma", "Insight", "Interaction", "Handoff",
  "Typography", "Hierarchy", "Journey", "Design", "Product",
  "Strategy", "Visual", "Testing", "Iterate", "Process",
];

interface WordNode {
  baseX: number;
  baseY: number;
  y: number;
  scale: number;
  opacity: number;
  floatOffset: number;
  floatSpeed: number;
  el: HTMLSpanElement;
}

/** Place words in a grid with jitter — guarantees no overlap and no off-screen */
function placeWords(W: number, H: number, count: number, centerPad: { x0: number; x1: number; y0: number; y1: number }) {
  const MIN_DIST = 90;
  const MARGIN = 0.06;
  const placed: { bx: number; by: number }[] = [];

  for (let i = 0; i < count; i++) {
    let bx = 0.5, by = 0.5;
    let found = false;

    for (let attempt = 0; attempt < 200; attempt++) {
      const cx = MARGIN + Math.random() * (1 - MARGIN * 2);
      const cy = MARGIN + Math.random() * (1 - MARGIN * 2);

      // skip center identity zone
      if (cx > centerPad.x0 && cx < centerPad.x1 && cy > centerPad.y0 && cy < centerPad.y1) continue;

      // check minimum distance from all already-placed words
      const tooClose = placed.some(p => {
        const dx = (cx - p.bx) * W;
        const dy = (cy - p.by) * H;
        return Math.hypot(dx, dy) < MIN_DIST;
      });

      if (!tooClose) { bx = cx; by = cy; found = true; break; }
    }

    if (!found) {
      // fallback: place in a ring outside center
      const angle = (i / count) * Math.PI * 2;
      const rx = 0.5 + Math.cos(angle) * 0.38;
      const ry = 0.5 + Math.sin(angle) * 0.34;
      bx = Math.max(MARGIN, Math.min(1 - MARGIN, rx));
      by = Math.max(MARGIN, Math.min(1 - MARGIN, ry));
    }
    placed.push({ bx, by });
  }
  return placed;
}

export default function Hero() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const nodesRef      = useRef<WordNode[]>([]);

  const hoveredRef    = useRef<number>(-1);
  const rafRef        = useRef<number>(0);
  const tRef          = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const W0 = container.clientWidth;
    const H0 = container.clientHeight;
    const spans = container.querySelectorAll<HTMLSpanElement>(`.word-item`);

    const fractions = placeWords(W0, H0, WORDS.length, { x0: 0.25, x1: 0.75, y0: 0.25, y1: 0.75 });

    nodesRef.current = WORDS.map((_, i) => {
      const { bx, by } = fractions[i];
      const node: WordNode = {
        baseX: bx * W0,
        baseY: by * H0,
        y: by * H0,
        scale: 1,
        opacity: 0.18,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.3 + Math.random() * 0.3,
        el: spans[i],
      };
      node.el.style.left = `${node.baseX}px`;
      node.el.style.top  = `${node.y}px`;
      return node;
    });

    const resize = () => {
      const W = container.clientWidth;
      const H = container.clientHeight;
      nodesRef.current.forEach((node, i) => {
        const { bx, by } = fractions[i];
        node.baseX = bx * W;
        node.baseY = by * H;
        node.y     = node.baseY;
        node.el.style.left = `${node.baseX}px`;
        node.el.style.top  = `${node.y}px`;
      });
    };
    resize();
    window.addEventListener("resize", resize);

    // hover listeners on each span
    nodesRef.current.forEach((node, i) => {
      node.el.style.pointerEvents = "auto";
      node.el.addEventListener("mouseenter", () => { hoveredRef.current = i; });
      node.el.addEventListener("mouseleave", () => { hoveredRef.current = -1; });
    });

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const loop = () => {
      tRef.current += 0.007;
      const nodes   = nodesRef.current;
      const hovered = hoveredRef.current;

      nodes.forEach((node, i) => {
        // float
        node.y = node.baseY + Math.sin(tRef.current * node.floatSpeed + node.floatOffset) * 5;

        let tScale = 1, tOpacity = 0.18, tColor = "#71717a";

        if (hovered === -1) {
          tOpacity = 0.18;
          tColor   = "#71717a";
        } else if (i === hovered) {
          tScale   = 1.4;
          tOpacity = 1.0;
          tColor   = "#18181b";
        } else {
          tOpacity = 0.06;
          tScale   = 0.9;
          tColor   = "#71717a";
        }

        node.scale   = lerp(node.scale,   tScale,   0.12);
        node.opacity = lerp(node.opacity, tOpacity, 0.12);

        node.el.style.top       = `${node.y}px`;
        node.el.style.transform = `translate(-50%,-50%) scale(${node.scale.toFixed(3)})`;
        node.el.style.opacity   = node.opacity.toFixed(3);
        node.el.style.color     = tColor;
      });

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden"
      style={{ background: "#fafafa" }}
    >
      {/* grain noise */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          opacity: 0.02,
          mixBlendMode: "overlay",
        }}
      />

      {/* subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(24,24,27,0.01) 1px,transparent 1px),linear-gradient(90deg,rgba(24,24,27,0.01) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* word nodes */}
      <div ref={containerRef} className="absolute inset-0 select-none z-[3]">
        {WORDS.map(word => (
          <span
            key={word}
            className="word-item absolute font-medium tracking-widest uppercase transition-colors duration-200"
            style={{
              opacity: 0.18,
              color: "#71717a",
              transform: "translate(-50%,-50%) scale(1)",
              fontSize: word.length <= 2 ? "0.9rem" : "0.62rem",
              letterSpacing: "0.18em",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* center identity */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pointer-events-none">

        {/* eyebrow */}
        <p
          className="text-lg sm:text-xl font-medium mb-5 text-zinc-500"
          style={{ letterSpacing: "0.04em", animation: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0s forwards", opacity: 0 }}
        >
          UX Designer · Metric Driven · Research Led
        </p>

        <h1
          className="text-6xl sm:text-8xl font-bold tracking-tight text-zinc-900 mb-6 leading-none"
          style={{ animation: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s forwards", opacity: 0 }}
        >
          Shanmuga Praveen
        </h1>

        <p
          className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.25s forwards", opacity: 0 }}
        >
          UX Designer with 5 years of experience designing B2B SaaS and user-centered products. Partnering directly with founders, product teams, and engineering to diagnose activation drop-offs and design high-impact solutions that move business metrics.
        </p>

        <div
          className="flex items-center justify-center gap-5 flex-wrap pointer-events-auto"
          style={{ animation: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.38s forwards", opacity: 0 }}
        >
          <a
            href="/Shanmuga-Praveen-Resume.pdf"
            download
            data-cursor="Download"
            className="px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 flex items-center gap-2"
            style={{ background: "#18181b", color: "#ffffff" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#27272a")}
            onMouseLeave={e => (e.currentTarget.style.background = "#18181b")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3"/><path d="m7 10 5 5 5-5"/><path d="M20 21H4"/></svg>
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/shanmuga-praveen-thanigasalam-87b2bb209/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LinkedIn"
            className="px-8 py-4 rounded-full text-base font-semibold text-zinc-500 transition-all duration-200 flex items-center gap-2 bg-white"
            style={{ border: "1px solid #e4e4e7" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#18181b"; e.currentTarget.style.color = "#18181b"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#e4e4e7"; e.currentTarget.style.color = "#71717a"; }}
          >
            LinkedIn
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

      </div>
    </section>
  );
}

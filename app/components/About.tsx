"use client";
import { useEffect, useRef, useState } from "react";

const DESIGN_SKILLS = [
  "User Research", "Usability Testing", "Wireframing", "Prototyping",
  "Interaction Design", "Information Architecture", "Design Systems",
  "A/B Testing", "PLG Funnel Analysis", "Session Analysis",
];

const TOOLS = [
  "Figma", "Adobe XD", "OpenReplay", "Clarity",
  "SQL", "Gemini", "Expo", "GitHub",
];


const STATS: { end: number; decimals?: number; suffix: string; label: string }[] = [
  { end: 168,  suffix: "%",  label: "AppVector Onboarding Completion (14% → 37.5%)" },
  { end: 94,   suffix: "%",  label: "AppVector Extension Activation (22.3% → 43.2%)" },
  { end: 500,  suffix: "+",  label: "Coordination Hours Saved (Async Hiring Tool)" },
  { end: 2.4, decimals: 1, suffix: "×",  label: "GSC Impression Growth (75K → 180K)" },
  { end: 32,   suffix: "%",  label: "GSC OAuth Connection Rate (SearchVector)" },
  { end: 8,    suffix: "+",  label: "B2B SaaS Core Product Tools Rebuilt & Launched" },
];

function StatCard({
  end, decimals = 0, suffix, label, triggered,
}: {
  end: number; decimals?: number; suffix: string; label: string; triggered: boolean;
}) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!triggered || startedRef.current) return;
    startedRef.current = true;
    const duration = 1400;
    let startTs: number | null = null;
    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [triggered, end]);

  const pct = end > 0 ? (count / end) * 100 : 0;
  const display = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();

  return (
    <div className="glass-panel glass-panel-hover rounded-[14px] p-0.5">
      <div className="rounded-[13px] p-5 flex flex-col justify-between" style={{ background: "#ffffff", minHeight: "120px" }}>
        <div className="tabular-nums leading-none mb-4">
          <span className="text-4xl font-bold text-zinc-900">{display}</span>
          <span className="text-xl font-semibold ml-0.5 text-zinc-500">{suffix}</span>
        </div>
        <div>
          <div style={{ height: "3px", background: "rgba(24,24,27,0.06)", borderRadius: "2px", marginBottom: "8px", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, #18181b, #71717a)", borderRadius: "2px" }} />
          </div>
          <div className="text-xs text-zinc-500 font-mono tracking-wide leading-snug">{label}</div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 sm:px-12" style={{ background: "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-400 mb-6">
          01 — Impact
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-8">
          Results from<br />
          <span className="text-zinc-500">shipped work.</span>
        </h2>

        {/* KPI stat cards — full width */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {STATS.map(s => (
            <StatCard key={s.label} {...s} triggered={triggered} />
          ))}
        </div>

        {/* LinkedIn button */}
        <div className="mb-8">
          <a
            href="https://www.linkedin.com/in/shanmuga-praveen-thanigasalam-87b2bb209/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 bg-white"
            style={{ border: "1px solid #e4e4e7", color: "#71717a" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#18181b"; e.currentTarget.style.color = "#18181b"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#e4e4e7"; e.currentTarget.style.color = "#71717a"; }}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Skills — full width horizontal below grid */}
        <div className="mb-6">
          <p className="text-xs font-mono tracking-[0.15em] uppercase text-zinc-400 mb-3">
            Design skills
          </p>
          <div className="flex flex-wrap gap-2">
            {DESIGN_SKILLS.map(s => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm font-medium text-zinc-500"
                style={{ border: "1px solid #e4e4e7", background: "#ffffff" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <p className="text-xs font-mono tracking-[0.15em] uppercase text-zinc-400 mb-3">
            Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map(t => (
              <span
                key={t}
                className="px-4 py-2 rounded-full text-sm font-medium text-zinc-500"
                style={{ border: "1px solid #e4e4e7", background: "#ffffff" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

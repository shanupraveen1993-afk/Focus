"use client";

import { useState } from "react";
import { Cpu, HelpCircle, Layers, Sliders, CheckSquare, Zap, Target } from "lucide-react";

interface StyleItem {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

const WORKING_STYLES: StyleItem[] = [
  {
    title: "Systems Thinker",
    icon: <Cpu className="w-5 h-5" />,
    desc: "Naturally connecting branding, design, marketing, technology, user experience, and business strategy into one unified ecosystem."
  },
  {
    title: "Question Assumptions",
    icon: <HelpCircle className="w-5 h-5" />,
    desc: "Refusing to accept default strategies just because everyone else does. Continually asking: 'Can this be simpler?' and 'What actually creates value?'"
  },
  {
    title: "First Principles Thinking",
    icon: <Layers className="w-5 h-5" />,
    desc: "Beginning with the foundational questions: Who is the audience? What problem are we solving? What should they remember? Platforms come second."
  },
  {
    title: "Clarity Over Complexity",
    icon: <Sliders className="w-5 h-5" />,
    desc: "Consistently reducing large, bloated strategies to their absolute simplest form. Short, high-impact messaging that gets direct results."
  },
  {
    title: "Complete Ownership",
    icon: <CheckSquare className="w-5 h-5" />,
    desc: "Taking responsibility for the entire product journey—from raw discovery, data analysis, and visual design to live builds and scaling."
  },
  {
    title: "Outcome Oriented",
    icon: <Target className="w-5 h-5" />,
    desc: "Rarely stopping at aesthetic visual output. Continually measuring practical implementation, user friction, and real business value."
  },
  {
    title: "Framework Builder",
    icon: <Zap className="w-5 h-5" />,
    desc: "Instead of building single, temporary ad campaigns, designing repeatable process templates and scaling workflows."
  }
];

export default function About() {
  const [selectedStyle, setSelectedStyle] = useState(0);

  return (
    <section 
      id="about"
      className="relative w-full py-24 px-6 sm:px-12 bg-[#faf8f5] border-t border-zinc-200/50"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          opacity: 0.03,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            05 / About Praveen
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-950 tracking-tight">
            Built by Praveen.
          </h2>
          <p className="text-xs uppercase font-mono tracking-widest text-zinc-400 mt-2">
            UX Designer · Brand Strategist · Growth Thinker
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-b border-zinc-200/50 pb-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-light text-zinc-950 leading-relaxed">
              I don't believe great brands are built by <span className="font-bold">marketing alone</span>.
            </h3>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
              Every successful brand starts with understanding—its purpose, its audience, its strengths, and the opportunities that others often overlook. My work begins there.
            </p>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
              I approach every project by studying the bigger picture before making decisions. Rather than jumping directly into campaigns or content, I focus on building a strong foundation through research, strategy, design, and execution. Marketing becomes more effective when it's supported by clarity and purpose.
            </p>
          </div>

          <div className="flex flex-col gap-6 bg-white/40 p-8 rounded-xl border border-zinc-200/50">
            <h4 className="text-lg font-bold text-zinc-900 font-mono tracking-tight border-b border-zinc-150 pb-3 uppercase">
              The Framework Mindset
            </h4>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
              With a background in UX and product thinking, I approach marketing differently. Every decision starts with understanding user behavior, business goals, and market reality before moving into design or promotion.
            </p>
            <blockquote className="border-l-2 border-zinc-900 pl-4 py-1 mt-2 text-zinc-800 font-mono text-sm leading-relaxed">
              "I help businesses make better decisions before they spend money on marketing."
            </blockquote>
          </div>
        </div>

        {/* Working Style Observation section */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-zinc-950 tracking-tight font-mono uppercase mb-8">
            How I Work (Observations)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* List on left */}
            <div className="md:col-span-6 flex flex-col gap-2.5">
              {WORKING_STYLES.map((style, idx) => {
                const isActive = selectedStyle === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedStyle(idx)}
                    className={`group flex items-center justify-between text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? "border-zinc-900 bg-white shadow-sm" 
                        : "border-transparent hover:bg-white/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`${isActive ? "text-zinc-900" : "text-zinc-400"}`}>
                        {style.icon}
                      </span>
                      <span className={`text-sm font-bold ${isActive ? "text-zinc-900" : "text-zinc-500"}`}>
                        {style.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Display panel on right */}
            <div className="md:col-span-6 bg-white border border-zinc-200 p-8 rounded-xl min-h-[220px] flex flex-col justify-between shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-[#faf8f5]">
                  {WORKING_STYLES[selectedStyle].icon}
                </div>
                <h4 className="text-xl font-bold text-zinc-950">
                  {WORKING_STYLES[selectedStyle].title}
                </h4>
                <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                  {WORKING_STYLES[selectedStyle].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

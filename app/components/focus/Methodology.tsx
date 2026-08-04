"use client";

import { useState } from "react";

interface Step {
  num: string;
  title: string;
  description: string;
  details: string[];
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Business Discovery",
    description: "Digging deep into the core mechanics of your business operations.",
    details: ["Understanding operations & bottlenecks", "Analyzing current unit economics", "Defining direct growth challenges"]
  },
  {
    num: "02",
    title: "Ground Research",
    description: "Leaving the desk to observe and interview actual target users.",
    details: ["Direct field surveys & qualitative data", "Identifying competitors' critical loopholes", "Uncovering undocumented user habits"]
  },
  {
    num: "03",
    title: "Brand Strategy",
    description: "Formulating a positioning architecture that cannot be ignored.",
    details: ["Defining your unique positioning angle", "Crafting core, memorable messaging", "Translating insights into brand rules"]
  },
  {
    num: "04",
    title: "Design System",
    description: "Building the visual foundation to convey high-end authority.",
    details: ["Designing a premium brand identity", "Structuring typography and visual ratios", "Standardizing reusable digital assets"]
  },
  {
    num: "05",
    title: "Digital Presence",
    description: "Deploying high-speed, low-overhead platforms optimized for conversion.",
    details: ["Building optimized web applications", "Integrating user friction diagnostics", "Launching lean, high-conversion funnels"]
  },
  {
    num: "06",
    title: "Marketing Strategy",
    description: "Connecting conventional offline outreach with targeted digital synergy.",
    details: ["Deploying local context campaigns", "Running hook-oriented performance ads", "Tracking user acquisition pipelines"]
  },
  {
    num: "07",
    title: "Continuous Growth",
    description: "Auditing performance metrics to refine and scale the ecosystem.",
    details: ["Statistical data tracking & vote share", "Reviewing actual user interaction session recordings", "Iterative optimizations on layout & copy"]
  }
];

export default function Methodology() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section 
      id="methodology"
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
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
            04 / Methodology
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-950 tracking-tight mb-4">
            The Growth Process
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg">
            We don't pitch vague ideas. We execute a disciplined, phased process from discovery to scaling. Click on any phase to see the mechanics.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Steps List (Left Column) */}
          <div className="lg:col-span-7 flex flex-col border-l border-zinc-200 pl-4 sm:pl-8 gap-4">
            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`group flex items-start gap-4 sm:gap-6 text-left py-4 px-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "border-zinc-900 bg-white shadow-sm" 
                      : "border-transparent hover:bg-white/40"
                  }`}
                >
                  <span className={`text-sm sm:text-base font-mono font-bold ${
                    isActive ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-700"
                  }`}>
                    {step.num}
                  </span>
                  
                  <div className="flex flex-col">
                    <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                      isActive ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-950"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs sm:text-sm mt-1 leading-relaxed transition-colors ${
                      isActive ? "text-zinc-500" : "text-zinc-400"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Card (Right Column) */}
          <div className="lg:col-span-5 border border-zinc-200 bg-white/70 backdrop-blur-sm p-8 rounded-xl min-h-[300px] flex flex-col justify-between sticky top-24">
            <div>
              <div className="flex justify-between items-center border-b border-zinc-200/50 pb-4 mb-6">
                <span className="text-4xl font-black text-zinc-300 font-mono tracking-tight">
                  {STEPS[activeStep].num}
                </span>
                <span className="text-xs uppercase font-mono tracking-widest text-zinc-400">
                  Target Deliverables
                </span>
              </div>

              <h4 className="text-2xl font-bold text-zinc-950 mb-4 tracking-tight">
                {STEPS[activeStep].title}
              </h4>
              
              <ul className="flex flex-col gap-3">
                {STEPS[activeStep].details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-sm text-zinc-600 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-zinc-200/50 pt-6 mt-8">
              <p className="text-[11px] text-zinc-400 font-mono tracking-wide uppercase leading-tight">
                Every solution should solve a real problem, not just look impressive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

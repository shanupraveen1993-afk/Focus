"use client";

import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const categories = [
    {
      title: "Conventional Marketing",
      subtitle: "Focusing on trust, context, and physical realities.",
      items: [
        "People First Engagement",
        "Brand Awareness & Presence",
        "Offline & Local Campaigns",
        "Customer Trust Architectures",
        "Community & Youth Discussion Groups",
        "Physical Print & Signage Branding",
        "Strategic Launch Frameworks"
      ]
    },
    {
      title: "Digital Marketing",
      subtitle: "Scaling conventional foundations into targeted performance.",
      items: [
        "Minimalist & High-Performance Websites",
        "Digital Brand Strategy",
        "Performance Marketing & Retargeting",
        "Algorithmic SEO & Keyword Auditing",
        "Google Business Optimization",
        "Interactive Ad Shoot Direction",
        "Detailed Analytics & Cohort Tracking"
      ]
    },
    {
      title: "Design Solutions",
      subtitle: "Visual architectures built for conversion and clarity.",
      items: [
        "Corporate Logo & Identity Systems",
        "Tactile Packaging Layouts",
        "Visiting Card & Stationary Assets",
        "Interface Layout & Component Usability",
        "High-Impact Digital Ad Creatives",
        "Photography & Video Art Direction",
        "End-to-End Brand Ecosystems"
      ]
    }
  ];

  return (
    <section 
      id="services"
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
            02 / Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-950 tracking-tight mb-4">
            Unified Systems. No Fluff.
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg">
            We don't offer services in isolation. We build cohesive architectures where strategy, design, and marketing feed into one single ecosystem.
          </p>
        </div>

        {/* 3 Large Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col gap-6 p-6 rounded-xl border border-zinc-200/60 bg-white/30 backdrop-blur-sm transition-all duration-300 hover:border-zinc-900 hover:bg-white"
            >
              <div>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-zinc-500 font-mono tracking-wide leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>

              <ul className="flex flex-col gap-3.5 border-t border-zinc-200/50 pt-6 mt-2">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-sm text-zinc-700 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big quote statement */}
        <div className="mt-20 border-t border-zinc-200/60 pt-16 text-center max-w-3xl mx-auto">
          <h4 className="text-2xl sm:text-4xl font-light tracking-tight text-zinc-950 leading-relaxed">
            "Good marketing is visible. <br />
            Great branding is <span className="font-bold">unforgettable</span>."
          </h4>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Search, Compass, BarChart } from "lucide-react";

export default function Philosophy() {
  return (
    <section 
      id="philosophy"
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
            01 / Philosophy
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-950 tracking-tight mb-6 leading-tight">
            We build brands from the ground up.
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg leading-relaxed">
            From understanding your business to creating the right identity, marketing strategy, and digital presence, Focus becomes your growth partner—not just your marketing agency.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Understand */}
          <div className="border border-zinc-200/80 bg-white/50 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:border-zinc-900 hover:bg-white">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950">Understand</h3>
            </div>
            <ul className="flex flex-col gap-2 font-mono text-xs text-zinc-500 tracking-wide uppercase border-t border-zinc-100 pt-6 mt-6">
              <li>• Research</li>
              <li>• Market Analysis</li>
              <li>• Target Audience</li>
              <li>• Competitors</li>
              <li>• Positioning Strategy</li>
            </ul>
          </div>

          {/* Card 2: Build */}
          <div className="border border-zinc-200/80 bg-white/50 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:border-zinc-900 hover:bg-white">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950">Build</h3>
            </div>
            <ul className="flex flex-col gap-2 font-mono text-xs text-zinc-500 tracking-wide uppercase border-t border-zinc-100 pt-6 mt-6">
              <li>• Brand Identity</li>
              <li>• Design System</li>
              <li>• Website & Platforms</li>
              <li>• Marketing Assets</li>
              <li>• Content Strategy</li>
            </ul>
          </div>

          {/* Card 3: Grow */}
          <div className="border border-zinc-200/80 bg-white/50 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:border-zinc-900 hover:bg-white">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
                <BarChart className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950">Grow</h3>
            </div>
            <ul className="flex flex-col gap-2 font-mono text-xs text-zinc-500 tracking-wide uppercase border-t border-zinc-100 pt-6 mt-6">
              <li>• Digital Marketing</li>
              <li>• Focused Campaigns</li>
              <li>• Community Building</li>
              <li>• Performance Auditing</li>
              <li>• Continuous Scaling</li>
            </ul>
          </div>
        </div>

        {/* Divider statement */}
        <div className="mt-20 border-t border-zinc-200/60 pt-16 text-center max-w-3xl mx-auto">
          <h4 className="text-2xl sm:text-4xl font-light tracking-tight text-zinc-900 leading-relaxed">
            "Most businesses start with ads. <br />
            We start with <span className="font-bold">understanding</span>."
          </h4>
        </div>
      </div>
    </section>
  );
}

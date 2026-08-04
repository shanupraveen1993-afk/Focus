"use client";
import { useState } from "react";

const screens = [
  {
    id: "lock",
    label: "01 — City Lock Screen",
    title: "City Lock Screen",
    description: "Initial gateway screen capturing the entry point. Focuses on the single-city scope with search and modular tab navigation.",
    render: () => (
      <div className="w-full h-full bg-white flex flex-col justify-between p-4 font-sans text-zinc-900 select-none">
        {/* Top status bar */}
        <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
          <span>9:41</span>
          <span>5G</span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-start pt-4 space-y-4">
          {/* Image placeholder with cross */}
          <div className="relative w-full h-28 bg-white border border-zinc-300 rounded-lg flex items-start justify-start p-2 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full text-zinc-200" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
              <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span className="relative text-[8px] font-mono uppercase tracking-wider text-zinc-400 bg-white px-1.5 py-0.5 border border-zinc-200 rounded">
              Hero Image (Thanjavur)
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-1.5">
            <h4 className="text-lg font-bold tracking-tight text-zinc-900 leading-tight">THANJAVUR</h4>
            <div className="h-2 w-32 bg-zinc-200 rounded" />
          </div>

          {/* Search bar */}
          <div className="w-full h-8 rounded-full border border-zinc-300 bg-zinc-50 flex items-center px-3 gap-2">
            <div className="w-3 h-3 rounded-full border border-zinc-400" />
            <span className="text-[11px] text-zinc-400 font-mono">Search hotels, food, itinerary...</span>
          </div>

          {/* Tab row */}
          <div className="flex justify-between gap-1">
            {["Hotels", "Food", "Itinerary", "Explore"].map((t, idx) => (
              <div
                key={t}
                className="flex-1 py-1.5 text-center text-[10px] font-mono border rounded-full font-semibold uppercase tracking-wider"
                style={{
                  background: idx === 0 ? "#18181b" : "#ffffff",
                  color: idx === 0 ? "#ffffff" : "#71717a",
                  borderColor: idx === 0 ? "#18181b" : "#e4e4e7",
                }}
              >
                {t}
              </div>
            ))}
          </div>

          {/* Card item */}
          <div className="border border-zinc-200 rounded-xl p-3 bg-zinc-50 space-y-2">
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-white border border-zinc-300 rounded-lg flex-shrink-0 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full text-zinc-200" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="0.8" />
                </svg>
              </div>
              <div className="flex-1 space-y-2 pt-1">
                <div className="h-2.5 w-24 bg-zinc-300 rounded" />
                <div className="h-2 w-16 bg-zinc-200 rounded" />
              </div>
            </div>
            <div className="h-1.5 w-full bg-zinc-200 rounded" />
            <div className="h-1.5 w-2/3 bg-zinc-200 rounded" />
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="border-t border-zinc-200 pt-2 flex justify-around items-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded border flex items-center justify-center"
              style={{
                borderColor: i === 0 ? "#18181b" : "#e4e4e7",
                background: i === 0 ? "#18181b" : "transparent"
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: i === 0 ? "#ffffff" : "#e4e4e7" }} />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "preferences",
    label: "02 — Preference Selection",
    title: "Preference Selection",
    description: "Overlay selection panel allowing users to toggle contextual review tags like Parking, AC, or Pure Veg.",
    render: () => (
      <div className="w-full h-full bg-white flex flex-col justify-between p-4 font-sans text-zinc-900 select-none">
        {/* Top status bar */}
        <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
          <span>9:41</span>
          <span>5G</span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-start pt-4 space-y-4">
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">Select Preferences</h4>
            <p className="text-[11px] text-zinc-500 leading-snug">Choose what matters to you. Results will be ranked based on review matches.</p>
          </div>

          <div className="w-full border-t border-zinc-150 my-2" />

          {/* Chips grid */}
          <div className="space-y-3">
            <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">Practical tags</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: "Parking", active: true },
                { label: "AC", active: true },
                { label: "Breakfast", active: false },
                { label: "Lift", active: false },
              ].map(c => (
                <div
                  key={c.label}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono border font-medium"
                  style={{
                    background: c.active ? "#18181b" : "#ffffff",
                    color: c.active ? "#ffffff" : "#71717a",
                    borderColor: c.active ? "#18181b" : "#e4e4e7",
                  }}
                >
                  {c.label}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">Food &amp; Environment</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: "Pure Veg", active: true },
                { label: "Quiet Zone", active: false },
                { label: "Pool", active: false },
                { label: "Gym", active: false },
              ].map(c => (
                <div
                  key={c.label}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono border font-medium"
                  style={{
                    background: c.active ? "#18181b" : "#ffffff",
                    color: c.active ? "#ffffff" : "#71717a",
                    borderColor: c.active ? "#18181b" : "#e4e4e7",
                  }}
                >
                  {c.label}
                </div>
              ))}
            </div>
          </div>

          {/* Weighting panel */}
          <div className="border border-zinc-200 rounded-lg p-3 bg-zinc-50 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono font-semibold uppercase text-zinc-500">Ranking Engine</span>
              <span className="text-[9px] font-mono text-zinc-400">3 tags selected</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[9px] text-zinc-400 font-mono">
                <span>Sentiment Match</span>
                <span>40%</span>
              </div>
              <div className="h-1 bg-zinc-200 rounded overflow-hidden">
                <div className="h-full bg-zinc-400 rounded w-2/5" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-3 pt-2">
          <div className="w-full py-2 text-center text-xs font-mono font-bold text-white bg-zinc-950 rounded-lg border border-zinc-950 uppercase tracking-widest">
            Show 14 Results →
          </div>
        </div>
      </div>
    )
  },
  {
    id: "results",
    label: "03 — Results View",
    title: "Results View",
    description: "Search results showing composite ranking. Results display rank badges (#1, #2), review matches, and sentiment confidence scores.",
    render: () => (
      <div className="w-full h-full bg-white flex flex-col justify-between p-4 font-sans text-zinc-900 select-none">
        {/* Top status bar */}
        <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
          <span>9:41</span>
          <span>5G</span>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center pt-2">
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider font-mono">14 Stays Found</h4>
            <div className="h-1.5 w-20 bg-zinc-200 rounded" />
          </div>
          <div className="w-4 h-4 rounded border border-zinc-300 flex items-center justify-center">
            <span className="text-[8px] font-bold">⌥</span>
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 flex flex-col justify-start pt-3 space-y-2.5 overflow-y-auto scrollbar-none">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border border-zinc-200 rounded-xl p-2.5 bg-zinc-50 flex flex-col gap-2 relative">
              {/* Rank Tag */}
              <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-zinc-950 text-white flex items-center justify-center text-[9px] font-mono font-bold">
                #{i + 1}
              </div>

              <div className="flex gap-2.5 pl-6">
                <div className="w-12 h-12 bg-white border border-zinc-300 rounded-lg flex-shrink-0 relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full text-zinc-200" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="0.8" />
                  </svg>
                </div>
                <div className="flex-1 space-y-1 pt-0.5">
                  <div className="h-2 w-24 bg-zinc-400 rounded" />
                  <div className="h-1.5 w-16 bg-zinc-200 rounded" />
                  {/* Sentiment badge */}
                  <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-zinc-300 bg-white text-[8px] font-mono text-zinc-500 font-semibold">
                    <div className="w-1 h-1 rounded-full bg-zinc-800" />
                    <span>94% MATCH</span>
                  </div>
                </div>
              </div>

              <div className="h-1.5 w-full bg-zinc-200 rounded" />
              {/* Keyword chips list */}
              <div className="flex gap-1">
                {["Parking", "AC"].map(c => (
                  <span key={c} className="text-[7.5px] font-mono px-1.5 py-0.5 rounded bg-white border border-zinc-200 text-zinc-500">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Nav */}
        <div className="border-t border-zinc-200 pt-2 flex justify-around items-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded border flex items-center justify-center"
              style={{
                borderColor: i === 0 ? "#18181b" : "#e4e4e7",
                background: i === 0 ? "#18181b" : "transparent"
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: i === 0 ? "#ffffff" : "#e4e4e7" }} />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "l2",
    label: "04 — Hotel Detail (L2)",
    title: "Hotel Detail (L2)",
    description: "Deep dive screen displaying detailed review extractions. Surfaces the verified amenity checklist and direct quotes from guests.",
    render: () => (
      <div className="w-full h-full bg-white flex flex-col justify-between p-4 font-sans text-zinc-900 select-none overflow-y-auto scrollbar-none">
        {/* Top status bar */}
        <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
          <span>9:41</span>
          <span>5G</span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-start pt-2 space-y-4">
          {/* Header image with back arrow */}
          <div className="relative w-full h-24 bg-white border border-zinc-300 rounded-lg flex items-start justify-start p-2 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full text-zinc-200" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
              <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
            </svg>
            <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-white border border-zinc-300 flex items-center justify-center font-bold text-[9px] cursor-pointer">
              ←
            </div>
            <span className="relative text-[8px] font-mono uppercase tracking-wider text-zinc-400 bg-white px-1.5 py-0.5 border border-zinc-200 rounded">
              Stay Showcase Image
            </span>
          </div>

          {/* Place Title */}
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-zinc-900">HOTEL SANGAM</h4>
            <div className="h-2 w-20 bg-zinc-200 rounded" />
          </div>

          {/* Sentiment Box */}
          <div className="border border-zinc-300 rounded-lg p-2.5 bg-zinc-50 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[8.5px] font-mono font-semibold uppercase text-zinc-500">Verified Sentiment</span>
              <span className="text-[8px] font-mono text-zinc-400">92% Positive</span>
            </div>
            <div className="h-1 bg-zinc-200 rounded overflow-hidden">
              <div className="h-full bg-zinc-500 rounded w-11/12" />
            </div>
            <div className="h-1.5 w-full bg-zinc-200 rounded" />
            <div className="h-1.5 w-4/5 bg-zinc-200 rounded" />
          </div>

          {/* Amenity verification list */}
          <div className="space-y-1.5">
            <p className="text-[8.5px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">User Experience Checklist</p>
            <div className="space-y-1.5">
              {[
                "Covered parking is safe & locked",
                "AC cooling is reliable & quiet",
                "Vegetarian breakfast is fresh",
              ].map(item => (
                <div key={item} className="flex items-center gap-1.5 text-[9.5px] font-mono text-zinc-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map box */}
          <div className="w-full h-16 bg-white border border-zinc-300 rounded-lg relative overflow-hidden flex items-start justify-start p-2">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "linear-gradient(to right, #71717a 1px, transparent 1px), linear-gradient(to bottom, #71717a 1px, transparent 1px)",
              backgroundSize: "8px 8px"
            }} />
            <span className="relative text-[8px] font-mono text-zinc-400 uppercase tracking-wider bg-white px-1.5 py-0.5 border border-zinc-200 rounded">
              Map Coordinate Specs
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <div className="w-full py-2 text-center text-xs font-mono font-bold text-white bg-zinc-950 rounded-lg border border-zinc-950 uppercase tracking-widest">
            Book Stay ↗
          </div>
        </div>
      </div>
    )
  }
];

export default function Wireframes() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-10">
      <p className="text-xs font-mono tracking-[0.15em] uppercase text-zinc-400 mb-4 animate-pulse">
        Figma Low-Fidelity Wireframes — B&amp;W Blueprint Mode
      </p>

      {/* screen selector */}
      <div className="flex gap-2 flex-wrap mb-6">
        {screens.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            data-cursor="View"
            className="px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200"
            style={{
              background: active === i ? "#18181b" : "#ffffff",
              color: active === i ? "#ffffff" : "#71717a",
              border: active === i ? "1px solid #18181b" : "1px solid #e4e4e7",
              cursor: "pointer"
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Split layout: wireframe left, details right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mt-6">
        
        {/* Wireframe Mobile Container */}
        <div className="md:col-span-5 flex items-center justify-start">
          <div 
            className="w-[280px] sm:w-[300px] h-[550px] rounded-[36px] border-[10px] border-zinc-900 bg-white relative shadow-2xl overflow-hidden flex flex-col justify-between"
            style={{ 
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)",
              border: "10px solid #18181b" 
            }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 rounded-b-xl bg-zinc-900 z-50 flex items-center justify-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
              <div className="w-6 h-0.5 rounded bg-zinc-700" />
            </div>

            {/* Screen Content Render */}
            <div className="flex-1 w-full h-full pt-2">
              {screens[active].render()}
            </div>
          </div>
        </div>

        {/* Blueprint Specs Panel */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-300 text-[10px] font-mono font-bold text-zinc-500 uppercase">
                Wireframe Spec
              </div>
              <span className="text-xs font-mono text-zinc-400">— Interactive Blueprint</span>
            </div>

            <h3 className="text-xl font-bold text-zinc-900">{screens[active].title}</h3>
            
            <p className="text-sm leading-relaxed text-zinc-500">
              {screens[active].description}
            </p>

            <div className="border-t border-zinc-100 my-4" />

            <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-bold">Figma Blueprint Standards</h4>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-zinc-400 rounded-full" />
                <span>₹0 Color Palette (B&amp;W Only)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-zinc-400 rounded-full" />
                <span>Image Crosshair Placeholders</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-zinc-400 rounded-full" />
                <span>Generic Text Spacing Bars</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 border border-zinc-400 rounded-full" />
                <span>Standard Layout Mock Components</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-left text-xs text-zinc-400 font-mono mt-8">
        Interactive Wireframe Simulator — Toggle selectors to view different screen blueprints.
      </p>
    </div>
  );
}

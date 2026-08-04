"use client";

import dynamic from "next/dynamic";

// Dynamically import the 3D RobotHero to avoid SSR canvas issues in Next.js
const RobotHero = dynamic(() => import("@/components/ui/robot-hero"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-zinc-50 border border-zinc-200/50 rounded-xl">
      <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 animate-pulse">
        Loading 3D Workspace...
      </span>
    </div>
  ),
});

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 sm:px-12 bg-[#faf8f5]"
    >
      {/* Tactile Paper Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          opacity: 0.035,
          mixBlendMode: "overlay",
        }}
      />

      {/* Grid Pattern Lines */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] border-b border-zinc-950" 
        style={{
          backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      {/* Split Layout: Strategy Left, 3D Interactive Right */}
      <div className="relative z-10 max-w-5xl w-full mx-auto my-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8">
        {/* Left Column: Brand details */}
        <div className="md:col-span-6 flex flex-col gap-6 md:pr-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-zinc-900 leading-none">
              focus ?
            </h1>
            <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">
              Tanjore, India
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-900 leading-tight">
            Marketing starts <span className="font-bold">before</span> marketing.
          </h2>

          {/* Subheading Bullet Points matching card */}
          <ul className="flex flex-col gap-2 font-mono text-xs sm:text-sm font-semibold text-zinc-700">
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              DIGITAL MARKETING
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              BRAND CONSULTANT
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              GROWTH POLITICS
            </li>
          </ul>

          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-md">
            Build a brand people remember. Not just another business people scroll past. We start from ground reality, then move to strategy, and then to execution.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
            <button
              onClick={() => handleScroll("contact")}
              className="px-6 py-3 rounded-md text-xs font-bold tracking-wider uppercase bg-zinc-950 text-white hover:bg-zinc-800 transition-all duration-200 cursor-pointer shadow-sm"
            >
              Let's Talk
            </button>
            <a 
              href="tel:9994837342"
              className="text-sm font-mono font-bold tracking-wider text-zinc-900 hover:opacity-70 transition-opacity"
            >
              99948 37342
            </a>
          </div>
        </div>

        {/* Right Column: 3D Interactive Canvas */}
        <div className="md:col-span-6 w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-zinc-200/50 bg-[#faf8f5] shadow-sm relative z-20">
          <RobotHero 
            backgroundText="" 
            color="#d4d4d8" 
            pantallaColor="#ff3366" 
            pantallaBrillo={1.4}
            metalness={0.0} 
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex justify-between items-center border-t border-zinc-200/50 pt-6 mt-8 text-[10px] font-mono tracking-widest text-zinc-400">
        <span>EST. 2024</span>
        <button 
          onClick={() => handleScroll("philosophy")}
          className="flex items-center gap-2 hover:text-zinc-950 transition-colors cursor-pointer"
        >
          SCROLL TO DISCOVER
          <svg className="w-3.5 h-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}

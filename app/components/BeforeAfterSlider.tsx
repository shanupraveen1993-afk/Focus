"use client";
import { useState, useRef } from "react";

interface BeforeAfterProps {
  beforeSrc: string;
  beforeAlt?: string;
  afterSrc: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  beforeAlt = "Before",
  afterSrc,
  afterAlt = "After",
  beforeLabel = "V1 — Before",
  afterLabel = "V2 — After",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none rounded-2xl border border-zinc-200 bg-white"
    >
      {/* Before Image (defines container height naturally) */}
      <div className="w-full h-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="w-full h-auto block pointer-events-none"
        />
        {/* Label Before */}
        <div className="absolute bottom-4 left-4 bg-black/75 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-md z-10">
          <span className="text-[11px] font-mono font-semibold tracking-wider text-red-400 uppercase">
            {beforeLabel}
          </span>
        </div>
      </div>

      {/* After Image (overlay, clipped to right side) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="w-full h-full object-cover object-top pointer-events-none absolute inset-0"
        />
        {/* Label After */}
        <div className="absolute bottom-4 right-4 bg-black/75 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-md z-10">
          <span className="text-[11px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            {afterLabel}
          </span>
        </div>
      </div>

      {/* Divider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/70 pointer-events-none z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Button */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-zinc-900 border-2 border-white flex items-center justify-center shadow-2xl transition-transform duration-150 ${
            isDragging ? "scale-110" : ""
          }`}
          style={{ background: "#111" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>

      {/* Transparent Native Range Slider on top */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        style={{ margin: 0 }}
      />
    </div>
  );
}

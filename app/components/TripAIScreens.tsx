"use client";
import { useState, useEffect, useCallback } from "react";

/* ── Fullscreen slider ───────────────────────────────────────────────────── */
function Slider({
  images,
  startAt,
  mode,
  onClose,
}: {
  images: string[];
  startAt: number;
  mode: "web" | "mobile";
  onClose: () => void;
}) {
  const [cur, setCur] = useState(startAt);
  const prev = useCallback(() => setCur(c => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCur(c => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", h);
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose, next, prev]);

  const isMobile = mode === "mobile";

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "rgba(0,0,0,0.97)" }}
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-4 right-5 w-9 h-9 flex items-center justify-center rounded-full text-white text-xl" style={{ background: "rgba(255,255,255,0.1)" }} aria-label="Close">×</button>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
        <span className="text-xs font-mono text-white">{cur + 1} / {images.length}</span>
      </div>

      <div
        className="flex items-center justify-center"
        style={isMobile ? { width: "min(320px,80vw)", height: "min(650px,85vh)" } : { width: "min(1200px,92vw)", height: "min(750px,88vh)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[cur]}
          alt={`Screen ${cur + 1}`}
          className="shadow-2xl object-contain"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: isMobile ? "20px" : "10px",
            border: isMobile ? "6px solid #1a1a1a" : "none",
          }}
        />
      </div>

      {images.length > 1 && <>
        <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white text-2xl" style={{ background: "rgba(255,255,255,0.12)" }} aria-label="Previous">‹</button>
        <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white text-2xl" style={{ background: "rgba(255,255,255,0.12)" }} aria-label="Next">›</button>
      </>}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5" onClick={e => e.stopPropagation()}>
        {images.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} className="rounded-full transition-all duration-200" style={{ width: i === cur ? 20 : 6, height: 6, background: i === cur ? "#f5f5f5" : "rgba(255,255,255,0.25)" }} aria-label={`Screen ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

/* ── Screen data ─────────────────────────────────────────────────────────── */
const WEB_SCREENS = Array.from({ length: 9 }, (_, i) => `/tripai/web-screen-${i + 1}.png`);
const MOB_SCREENS = [
  "/tripai/111.jpeg",
  "/tripai/222.jpeg",
  "/tripai/333.jpeg",
  "/tripai/444.jpeg",
  "/tripai/555.jpeg",
  "/tripai/666.jpeg",
  "/tripai/777.jpeg",
  "/tripai/888.jpeg",
  "/tripai/999-1.jpeg",
  "/tripai/999-2.jpeg",
  "/tripai/999-3-profile.jpeg"
];

/* ── Grid of all thumbnails ─────────────────────────────────────────────── */
function ScreenGrid({
  screens,
  mode,
  onOpen,
}: {
  screens: string[];
  mode: "web" | "mobile";
  onOpen: (i: number) => void;
}) {
  const isMobile = mode === "mobile";
  const cols = isMobile ? "grid-cols-3 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3";

  return (
    <div className={`grid ${cols} gap-3`}>
      {screens.map((src, i) => (
        <div
          key={src}
          className="relative rounded-xl overflow-hidden cursor-zoom-in group"
          style={{
            aspectRatio: isMobile ? "9/16" : "16/10",
            border: "1px solid #1e1e1e",
            background: "#0a0a0a",
          }}
          onClick={() => onOpen(i)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`${mode} screen ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover group-hover:opacity-85 transition-opacity duration-200"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "rgba(0,0,0,0.2)" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.65)" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Segment screens (per-module keyword chips + web + mobile) ───────────── */
export function SegmentScreens({
  keywords,
  webScreens,
  mobileScreens,
}: {
  keywords?: string[];
  webScreens?: string[];
  mobileScreens?: string[];
}) {
  const [webSlider, setWebSlider] = useState<number | null>(null);
  const [mobSlider, setMobSlider] = useState<number | null>(null);

  return (
    <div className="space-y-5 mt-4">
      {keywords && keywords.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {keywords.map(k => (
            <span
              key={k}
              className="px-2.5 py-1 rounded-full text-xs font-mono"
              style={{ background: "#111", color: "#9ca3af", border: "1px solid #1e1e1e" }}
            >
              {k}
            </span>
          ))}
        </div>
      )}

      {webScreens && webScreens.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "#9ca3af" }}>Web</span>
            <span className="text-xs font-mono" style={{ color: "#9ca3af" }}>— {webScreens.length} screen{webScreens.length !== 1 ? "s" : ""} · click to expand</span>
          </div>
          <div className={`grid ${webScreens.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-3`}>
            {webScreens.map((src, i) => (
              <div
                key={src}
                className="relative rounded-xl overflow-hidden cursor-zoom-in group"
                style={{ aspectRatio: "16/10", border: "1px solid #1e1e1e", background: "#0a0a0a" }}
                onClick={() => setWebSlider(i)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Web screen ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-85 transition-opacity duration-200"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.65)" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {mobileScreens && mobileScreens.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "#9ca3af" }}>Mobile</span>
            <span className="text-xs font-mono" style={{ color: "#9ca3af" }}>— {mobileScreens.length} screen{mobileScreens.length !== 1 ? "s" : ""} · click to expand</span>
          </div>
          <div className="flex gap-3">
            {mobileScreens.map((src, i) => (
              <div
                key={src}
                className="relative rounded-xl overflow-hidden cursor-zoom-in group flex-shrink-0"
                style={{
                  width: `min(${Math.floor(100 / Math.min(mobileScreens.length, 3))}%, 200px)`,
                  aspectRatio: "9/19",
                  border: "1px solid #1e1e1e",
                  background: "#0a0a0a",
                }}
                onClick={() => setMobSlider(i)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Mobile screen ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-85 transition-opacity duration-200"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.65)" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {webSlider !== null && webScreens && (
        <Slider images={webScreens} startAt={webSlider} mode="web" onClose={() => setWebSlider(null)} />
      )}
      {mobSlider !== null && mobileScreens && (
        <Slider images={mobileScreens} startAt={mobSlider} mode="mobile" onClose={() => setMobSlider(null)} />
      )}
    </div>
  );
}

/* ── Export ──────────────────────────────────────────────────────────────── */
export default function TripAIScreens() {
  const [slider, setSlider] = useState<{ screens: string[]; mode: "web" | "mobile"; index: number } | null>(null);

  return (
    <>
      <div className="space-y-8 my-8">
        {/* Web */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "#9ca3af" }}>Web</span>
            <span className="text-xs font-mono" style={{ color: "#9ca3af" }}>— {WEB_SCREENS.length} screens · click to expand</span>
          </div>
          <ScreenGrid screens={WEB_SCREENS} mode="web" onOpen={i => setSlider({ screens: WEB_SCREENS, mode: "web", index: i })} />
        </div>

        {/* Mobile */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: "#9ca3af" }}>Mobile</span>
            <span className="text-xs font-mono" style={{ color: "#9ca3af" }}>— {MOB_SCREENS.length} screens · click to expand</span>
          </div>
          <ScreenGrid screens={MOB_SCREENS} mode="mobile" onOpen={i => setSlider({ screens: MOB_SCREENS, mode: "mobile", index: i })} />
        </div>
      </div>

      {slider && (
        <Slider images={slider.screens} startAt={slider.index} mode={slider.mode} onClose={() => setSlider(null)} />
      )}
    </>
  );
}

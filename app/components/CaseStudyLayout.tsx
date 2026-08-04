"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

/* ─── Lightbox ─────────────────────────────────────────────────────────────── */

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(0,0,0,0.94)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-white text-2xl leading-none w-9 h-9 flex items-center justify-center rounded-full"
        style={{ background: "rgba(255,255,255,0.1)" }}
        aria-label="Close"
      >
        ×
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[92vh] rounded-xl object-contain shadow-2xl"
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}

/* ─── Full-screen slider (multi-image) ────────────────────────────────────── */

function FullSlider({
  slots,
  startAt,
  onClose,
}: {
  slots: { src?: string; alt?: string; label: string }[];
  startAt: number;
  onClose: () => void;
}) {
  const [cur, setCur] = useState(startAt);
  const prev = useCallback(() => setCur(c => (c - 1 + slots.length) % slots.length), [slots.length]);
  const next = useCallback(() => setCur(c => (c + 1) % slots.length), [slots.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", h);
    return () => {
      window.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [onClose, next, prev]);

  const s = slots[cur];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "rgba(0,0,0,0.97)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-5 w-9 h-9 flex items-center justify-center rounded-full text-white text-xl"
        style={{ background: "rgba(255,255,255,0.1)" }}
        aria-label="Close"
      >×</button>

      {/* Counter */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full"
        style={{ background: "rgba(255,255,255,0.1)" }}
      >
        <span className="text-xs font-mono text-white">{cur + 1} / {slots.length}</span>
      </div>

      {/* Image */}
      <div
        className="flex items-center justify-center p-8"
        style={{ maxWidth: "min(960px, 92vw)", maxHeight: "88vh" }}
        onClick={e => e.stopPropagation()}
      >
        {s.src ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={s.src}
            alt={s.alt ?? s.label}
            className="rounded-xl shadow-2xl object-contain"
            style={{ maxWidth: "100%", maxHeight: "80vh" }}
          />
        ) : (
          <div className="flex flex-col items-center gap-3 opacity-30">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.4" />
              <circle cx="8.5" cy="8.5" r="1.5" stroke="white" strokeWidth="1.4" />
              <path d="m21 15-5-5L5 21" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-xs font-mono text-white">{s.label}</p>
          </div>
        )}
      </div>

      {/* Label */}
      {s.label && (
        <p
          className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[13px] font-mono text-center px-4"
          style={{ color: "rgba(255,255,255,0.45)", maxWidth: "80vw" }}
          onClick={e => e.stopPropagation()}
        >{s.label}</p>
      )}

      {/* Prev / Next */}
      {slots.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white text-2xl"
            style={{ background: "rgba(255,255,255,0.12)" }}
            aria-label="Previous"
          >‹</button>
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white text-2xl"
            style={{ background: "rgba(255,255,255,0.12)" }}
            aria-label="Next"
          >›</button>
        </>
      )}

      {/* Dot indicators */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5"
        onClick={e => e.stopPropagation()}
      >
        {slots.map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            className="rounded-full transition-all duration-200"
            style={{
              width: i === cur ? 20 : 6,
              height: 6,
              background: i === cur ? "#f5f5f5" : "rgba(255,255,255,0.25)",
            }}
            aria-label={`Go to screen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Primitive building blocks ───────────────────────────────────────────── */

export function BackLink() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-6">
      <Link
        href="/#projects"
        className="text-xs font-mono tracking-widest uppercase text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
      >
        ← Back to work
      </Link>
    </div>
  );
}

export function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-xl flex flex-col w-full">
      {/* Browser Top Chrome Bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-50 border-b border-zinc-200">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="flex-1 max-w-xs sm:max-w-sm mx-auto h-5 rounded bg-white border border-zinc-200 text-[9px] font-mono text-zinc-400 flex items-center justify-center tracking-tight select-none">
          https://praveen-resume.vercel.app/demo
        </div>
      </div>
      {/* Browser Viewport Area */}
      <div className="relative w-full overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
}

export function CaseHeader({
  tag,
  title,
  tagline,
  meta,
  wideTagline,
}: {
  tag: string;
  title: string;
  tagline: React.ReactNode;
  meta: { label: string; value: string }[];
  wideTagline?: boolean;
}) {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-12 border-b border-zinc-200">
      <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-6">{tag}</p>
      <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 mb-6 leading-tight tracking-tight">
        {title}
      </h1>
      <p className={`text-xl text-zinc-600 leading-relaxed mb-12 ${wideTagline ? "max-w-full" : "max-w-2xl"}`}>{tagline}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {meta.map(({ label, value }) => (
          <div key={label}>
            <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-1">{label}</p>
            <p className="text-sm text-zinc-800 font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Section({
  n,
  title,
  children,
  accent,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
  accent?: "blue" | "green" | "amber";
}) {
  const accentColor = accent === "green" ? "#10b981" : accent === "amber" ? "#f59e0b" : "#18181b";
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 border-b border-zinc-200">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-4 h-px" style={{ background: accentColor }} />
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-400" style={{ opacity: 0.8 }}>{n}</p>
      </div>
      <h2 className="text-3xl font-bold text-zinc-900 mb-10 tracking-tight">{title}</h2>
      <div className="space-y-8 text-zinc-800 leading-relaxed text-lg">{children}</div>
    </div>
  );
}

export function Para({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-zinc-950 font-semibold bg-zinc-100/80 px-1.5 py-0.5 rounded">{children}</span>;
}

export function DecisionList({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="space-y-6 mt-2">
      {items.map(({ title, body }) => (
        <div key={title} className="flex gap-4">
          <div
            className="w-1 flex-shrink-0 rounded-full mt-1"
            style={{ background: "#18181b", minHeight: 16 }}
          />
          <div>
            <p className="text-zinc-800 font-medium text-sm mb-1">{title}</p>
            <p className="text-zinc-500 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function OutcomeGrid({
  items,
}: {
  items: { n: string; label: string }[];
}) {
  const colClass = items.length === 6 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2";
  return (
    <div className={`grid ${colClass} gap-4 mt-2`}>
      {items.map(({ n, label }) => (
        <div
          key={label}
          className="glass-panel rounded-xl p-5"
          style={{ background: "rgba(20,20,22,0.4)" }}
        >
          <p className="text-2xl font-bold mb-1 tabular-nums leading-tight text-white">{n}</p>
          <p className="text-xs font-mono leading-snug mt-1 text-[#9ca3af]">{label}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Visual hierarchy — Callout boxes ───────────────────────────────────── */

export function Callout({
  type = "blue",
  children,
  label,
}: {
  type?: "blue" | "green" | "amber";
  children: React.ReactNode;
  label?: string;
}) {
  const cfg = {
    blue:  { bg: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.2)",  dot: "#3b82f6",  labelColor: "#1d4ed8" },
    green: { bg: "rgba(16,185,129,0.08)",  border: "rgba(16,185,129,0.2)",  dot: "#10b981",  labelColor: "#047857" },
    amber: { bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.2)",  dot: "#f59e0b",  labelColor: "#b45309" },
  };
  const c = cfg[type];
  return (
    <div
      className="rounded-xl px-5 py-4 flex gap-4 mt-5"
      style={{ background: c.bg, border: `1px solid ${c.border}` }}
    >
      <div className="flex-shrink-0 pt-0.5">
        <div className="w-2 h-2 rounded-full" style={{ background: c.dot }} />
      </div>
      <div>
        {label && (
          <p className="text-xs font-mono tracking-widest uppercase mb-2 font-semibold" style={{ color: c.labelColor }}>
            {label}
          </p>
        )}
        <p className="text-zinc-800 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

/* ─── Image slots ─────────────────────────────────────────────────────────── */

export function ImageSlot({
  label,
  note,
  src,
  alt,
  lightBg,
  frame = "browser",
}: {
  label: string;
  note?: string;
  tall?: boolean; // kept for API compat, no longer used
  src?: string;
  alt?: string;
  lightBg?: boolean;
  frame?: "browser" | "none";
}) {
  const [lightbox, setLightbox] = useState(false);
  const hasImage = !!src;

  const imageEl = hasImage ? (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={alt ?? label}
      className="w-full h-auto block transition-opacity duration-200 group-hover:opacity-90"
    />
  ) : null;

  return (
    <>
      <div className="space-y-3 mt-8">
        <p className="text-[11px] font-mono text-zinc-400 tracking-widest uppercase">{label}</p>
        <div
          className={`w-full rounded-xl overflow-hidden ${hasImage ? "cursor-zoom-in group relative" : "flex flex-col items-center justify-center gap-3"}`}
          style={{
            minHeight: hasImage ? 0 : 220,
            border: hasImage ? (frame === "browser" ? "none" : "1px solid #e4e4e7") : "1.5px dashed #d4d4d8",
            background: "#ffffff",
          }}
          onClick={() => hasImage && setLightbox(true)}
        >
          {hasImage ? (
            frame === "browser" ? (
              <BrowserFrame>{imageEl}</BrowserFrame>
            ) : (
              <>
                {imageEl}
                <div
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg"
                  style={{ background: "rgba(0,0,0,0.75)", pointerEvents: "none" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  <span className="text-xs font-mono text-white tracking-wide">Click to expand</span>
                </div>
              </>
            )
          ) : (
            <>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" opacity={0.22}>
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#71717a" strokeWidth="1.4" />
                <circle cx="8.5" cy="8.5" r="1.5" stroke="#71717a" strokeWidth="1.4" />
                <path d="m21 15-5-5L5 21" stroke="#71717a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-xs font-mono text-zinc-300 tracking-widest uppercase text-center px-6">
                {label}
              </p>
              {note && (
                <p className="text-[13px] text-zinc-400 text-center px-10 leading-relaxed">{note}</p>
              )}
            </>
          )}
        </div>
        {note && hasImage && (
          <p className="text-[13px] text-zinc-500 leading-relaxed mt-1.5 italic">{note}</p>
        )}
      </div>
      {lightbox && src && <Lightbox src={src} alt={alt ?? label} onClose={() => setLightbox(false)} />}
    </>
  );
}

export function ImageRow({
  slots,
  useSlider = true,
}: {
  slots: { label: string; note?: string; src?: string; alt?: string }[];
  useSlider?: boolean;
}) {
  const [sliderStart, setSliderStart] = useState<number | null>(null);

  if (slots.length === 2 && useSlider && slots[0].src && slots[1].src) {
    return (
      <div className="mt-8 space-y-3">
        <BrowserFrame>
          <BeforeAfterSlider
            beforeSrc={slots[0].src}
            beforeAlt={slots[0].alt ?? slots[0].label}
            beforeLabel={slots[0].label}
            afterSrc={slots[1].src}
            afterAlt={slots[1].alt ?? slots[1].label}
            afterLabel={slots[1].label}
          />
        </BrowserFrame>
        {slots[0].note && slots[1].note && (
          <p className="text-[13px] text-zinc-500 leading-relaxed italic mt-2">
            <strong>Left:</strong> {slots[0].note} <br />
            <strong>Right:</strong> {slots[1].note}
          </p>
        )}
      </div>
    );
  }

  const cols = slots.length === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <>
      <div className={`mt-6 grid ${cols} gap-3`}>
        {slots.map((s, i) => {
          const hasImage = !!s.src;
          return (
            <div key={i} className="space-y-1.5">
              <div
                className={`w-full rounded-xl overflow-hidden ${hasImage ? "cursor-zoom-in group relative" : "flex flex-col items-center justify-center gap-2"}`}
                style={{
                  border: hasImage ? "1px solid #e4e4e7" : "1.5px dashed #d4d4d8",
                  background: "#ffffff",
                }}
                onClick={() => { if (hasImage) setSliderStart(i); }}
              >
                {hasImage ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.src}
                      alt={s.alt ?? s.label}
                      className="w-full h-auto block transition-opacity duration-200 group-hover:opacity-90"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: "rgba(0,0,0,0.22)" }}
                    >
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.65)" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" opacity={0.18}>
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#71717a" strokeWidth="1.4" />
                      <circle cx="8.5" r="1.5" stroke="#71717a" strokeWidth="1.4" />
                      <path d="m21 15-5-5L5 21" stroke="#71717a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-[13px] font-mono text-[#6b7280] tracking-widest uppercase text-center px-2">{s.label}</p>
                  </>
                )}
              </div>
              <p className="text-[13px] font-mono text-zinc-500 leading-snug">{s.label}</p>
            </div>
          );
        })}
      </div>

      {sliderStart !== null && (
        <FullSlider
          slots={slots}
          startAt={sliderStart}
          onClose={() => setSliderStart(null)}
        />
      )}
    </>
  );
}

/* ─── Handover Slider — preview thumbnail + "View all" full-screen slider ─── */

export function HandoverSlider({
  label,
  note,
  screens,
}: {
  label: string;
  note?: string;
  screens: { src: string; label: string; alt?: string }[];
}) {
  const [sliderStart, setSliderStart] = useState<number | null>(null);
  const preview = screens[0];
  const stripScreens = screens.slice(1, 4);
  const remaining = screens.length - stripScreens.length - 1;

  return (
    <>
      <div className="mt-6 space-y-2">
        <p className="text-[13px] font-mono text-zinc-500 tracking-widest uppercase">{label}</p>

        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e4e4e7", background: "#ffffff" }}>
          {/* Featured preview */}
          <div
            className="w-full cursor-zoom-in group relative"
            onClick={() => setSliderStart(0)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview.src}
              alt={preview.alt ?? preview.label}
              className="w-full h-auto block transition-opacity duration-200 group-hover:opacity-90"
            />
            <div
              className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }}
            >
              <p className="text-[13px] font-mono text-white px-4 pb-3 leading-snug">{preview.label}</p>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 p-3 items-stretch animate-fade" style={{ borderTop: "1px solid #e4e4e7" }}>
            {stripScreens.map((s, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-lg overflow-hidden cursor-pointer group relative"
                style={{ width: 96, height: 64, border: "1px solid #e4e4e7" }}
                onClick={() => setSliderStart(i + 1)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.alt ?? s.label}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-opacity duration-200"
                />
              </div>
            ))}

            {/* View all button */}
            <button
              className="flex-shrink-0 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-200 hover:border-zinc-400 bg-white"
              style={{ width: 96, height: 64, border: "1px solid #e4e4e7" }}
              onClick={() => setSliderStart(0)}
            >
              <span className="text-lg font-light text-zinc-800 leading-none">+{remaining}</span>
              <span className="text-[13px] font-mono text-zinc-400 tracking-widest uppercase">View all</span>
            </button>
          </div>
        </div>

        {note && <p className="text-[13px] text-zinc-500 leading-relaxed italic">{note}</p>}
      </div>

      {sliderStart !== null && (
        <FullSlider
          slots={screens}
          startAt={sliderStart}
          onClose={() => setSliderStart(null)}
        />
      )}
    </>
  );
}

/* ─── Data table ──────────────────────────────────────────────────────────── */

export function TableBlock({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="rounded-xl overflow-hidden mt-5" style={{ border: "1px solid #e4e4e7" }}>
      <table className="w-full text-xs bg-white">
        <thead>
          <tr style={{ background: "#f4f4f5", borderBottom: "1px solid #e4e4e7" }}>
            {headers.map((h, i) => (
              <th
                key={h}
                className="px-4 py-3 text-left font-mono tracking-widest uppercase whitespace-nowrap"
                style={{ color: i === 0 ? "#71717a" : "#18181b", fontWeight: 600 }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={{
                background: ri % 2 === 0 ? "#ffffff" : "#fafafa",
                borderBottom: ri < rows.length - 1 ? "1px solid #e4e4e7" : "none",
              }}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 leading-snug"
                  style={{ color: ci === 0 ? "#71717a" : "#18181b" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Split layout ────────────────────────────────────────────────────────── */

export function Split({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
      {children}
    </div>
  );
}

export function SplitBlock({
  label,
  children,
  accent,
}: {
  label: string;
  children: React.ReactNode;
  accent?: "before" | "after" | "neutral";
}) {
  const borderColor =
    accent === "before" ? "#fca5a5" : accent === "after" ? "#86efac" : "#e4e4e7";
  const labelColor =
    accent === "before" ? "#ef4444" : accent === "after" ? "#10b981" : "#71717a";
  return (
    <div
      className="rounded-xl p-5"
      style={{ border: `1px solid ${borderColor}`, background: "#ffffff" }}
    >
      <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: labelColor }}>
        {label}
      </p>
      <div className="text-zinc-600 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

/* ─── Funnel / metric steps ───────────────────────────────────────────────── */

export function FunnelRow({
  steps,
}: {
  steps: { label: string; value: string; sub?: string }[];
}) {
  return (
    <div className="flex gap-0 mt-5 rounded-xl overflow-hidden" style={{ border: "1px solid #e4e4e7" }}>
      {steps.map((s, i) => (
        <div
          key={s.label}
          className="flex-1 px-4 py-4 flex flex-col bg-white"
          style={{
            background: i === 0 ? "#ffffff" : "rgba(244,244,245,0.4)",
            borderRight: i < steps.length - 1 ? "1px solid #e4e4e7" : "none",
          }}
        >
          <p className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-2">{s.label}</p>
          <p className="text-2xl font-bold text-zinc-800 tabular-nums">{s.value}</p>
          {s.sub && <p className="text-xs text-zinc-400 mt-1 font-mono">{s.sub}</p>}
        </div>
      ))}
    </div>
  );
}

/* ─── Legacy screen slots (kept for backwards compat) ────────────────────── */

export function ScreenSlot({
  label,
  src,
  alt,
  tall,
}: {
  label: string;
  src?: string;
  alt?: string;
  tall?: boolean;
}) {
  const h = tall ? "h-96" : "h-64";
  return (
    <div className="space-y-2">
      <div
        className={`relative w-full ${h} rounded-xl overflow-hidden flex items-center justify-center`}
        style={{ border: "1px solid #e4e4e7", background: "#ffffff" }}
      >
        {src ? (
          <Image src={src} alt={alt ?? label} fill className="object-contain" sizes="768px" />
        ) : (
          <p className="text-xs font-mono text-zinc-300 tracking-widest uppercase">
            {label}
          </p>
        )}
      </div>
      <p className="text-xs font-mono text-zinc-500">{label}</p>
    </div>
  );
}

export function ScreenRow({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">{children}</div>;
}

export function ScreenFull({
  label,
  src,
  alt,
}: {
  label: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div className="space-y-2 mt-6">
      <div
        className="w-full rounded-xl overflow-hidden relative"
        style={{ minHeight: 320, border: "1px solid #e4e4e7", background: "#ffffff" }}
      >
        {src ? (
          <Image src={src} alt={alt ?? label} fill className="object-contain" sizes="768px" />
        ) : (
          <div className="flex items-center justify-center h-80">
            <p className="text-xs font-mono text-zinc-300 tracking-widest uppercase">{label}</p>
          </div>
        )}
      </div>
      <p className="text-xs font-mono text-zinc-500">{label}</p>
    </div>
  );
}

export function WireframeSlot({ label }: { label: string }) {
  return (
    <div className="space-y-2">
      <div
        className="w-full h-56 rounded-xl flex items-center justify-center"
        style={{ border: "1px dashed #d4d4d8", background: "#ffffff" }}
      >
        <p className="text-xs font-mono text-zinc-300 tracking-widest uppercase">{label}</p>
      </div>
      <p className="text-xs font-mono text-zinc-400">Wireframe — {label}</p>
    </div>
  );
}

/* ─── User Voice (persona quote card) ────────────────────────────────────── */

export function UserVoice({
  quote,
  context,
  insight,
  label,
}: {
  quote: string;
  context: string;
  insight: string;
  label?: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden glass-panel" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-50" style={{ borderBottom: "1px solid #e4e4e7" }}>
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] font-mono tracking-[0.18em] uppercase text-zinc-400">
          {label ?? "User Research · Persona"}
        </span>
      </div>

      {/* Light Body */}
      <div className="px-8 py-8 bg-white">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-zinc-600 text-xs bg-zinc-100 border border-zinc-200">U</div>
          <p className="text-xs font-mono tracking-widest uppercase text-zinc-400">{context}</p>
        </div>
        <div className="pl-5 mb-6 border-l-2 border-amber-500">
          <p className="text-[15px] leading-[1.75] font-medium text-zinc-800">{quote}</p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50/50 border border-amber-200">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="text-[12px] font-mono font-semibold text-amber-700">{insight}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Tag Cluster (taxonomy visual) ──────────────────────────────────────── */

export function TagCluster({
  tags,
}: {
  tags: { name: string; cluster: string; accentColor?: string; keywords: string[] }[];
}) {
  const cols = tags.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2";
  return (
    <div className="rounded-2xl overflow-hidden glass-panel" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-50" style={{ borderBottom: "1px solid #e4e4e7" }}>
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] font-mono tracking-[0.18em] uppercase text-zinc-400">
          Tag Taxonomy · {tags.map(t => t.cluster).join(" + ")}
        </span>
      </div>

      {/* Light Body */}
      <div className={`grid ${cols} gap-0 bg-white`}>
        {tags.map((tag, idx) => {
          const accent = tag.accentColor ?? "#18181b";
          return (
            <div
              key={tag.name}
              className="p-6 text-zinc-700"
              style={idx > 0 ? { borderLeft: "1px solid #e4e4e7" } : {}}
            >
              {/* Cluster badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: accent }} />
                  <span className="text-[13px] font-mono font-semibold tracking-[0.18em] uppercase" style={{ color: accent }}>{tag.cluster}</span>
                </div>
                <span className="text-[12px] font-mono text-zinc-400">{tag.keywords.length} keywords</span>
              </div>
              {/* Tag name */}
              <p className="text-lg font-bold mb-4 text-zinc-800">{tag.name}</p>
              {/* Keywords */}
              <div className="flex flex-wrap gap-1.5">
                {tag.keywords.map(kw => (
                  <span
                    key={kw}
                    className="text-[12px] font-mono px-2.5 py-1 rounded-full"
                    style={{ background: `${accent}10`, border: `1px solid ${accent}25`, color: "var(--text)" }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Style Guide (visual palette for case studies) ────────────────────────── */

export function StyleGuide({
  colors,
  fontFamily,
  fontName,
}: {
  colors: { name: string; hex: string; desc: string }[];
  fontFamily: string;
  fontName: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden glass-panel p-8 space-y-8 bg-white" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-6 border-zinc-200 gap-4">
        <div>
          <h3 className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-1">Visual Identity</h3>
          <p className="text-xl font-bold text-zinc-800">Project Style Guide</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-400">Typography:</span>
          <span className="text-sm font-semibold text-zinc-800 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200" style={{ fontFamily }}>
            {fontName}
          </span>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-6">Color Swatches</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {colors.map((c) => (
            <div key={c.hex} className="flex flex-col gap-3 group">
              <div
                className="w-full aspect-[4/3] rounded-xl relative shadow-inner overflow-hidden border border-zinc-200/50 transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ background: c.hex }}
              >
                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono font-semibold px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-white tracking-wider">
                  {c.hex.toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-800">{c.name}</p>
                <p className="text-xs text-zinc-500">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Phone Mockup Frame ─────────────────────────────────────────────────── */

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[290px] sm:w-[320px] aspect-[9/19.5] rounded-[48px] border-[8px] border-zinc-800 bg-black relative shadow-xl overflow-hidden flex flex-col">
      {/* Speaker / Camera Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 rounded-b-2xl bg-zinc-800 z-50 flex items-center justify-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
        <div className="w-10 h-1 rounded bg-zinc-900" />
      </div>
      {/* Content Viewport */}
      <div className="flex-1 w-full h-full relative overflow-y-auto scrollbar-none pt-4 bg-white flex flex-col justify-start items-center">
        {children}
      </div>
    </div>
  );
}

/* ─── Doc link (PDF / external source) ───────────────────────────────────── */

export function DocLink({
  href,
  label,
  type = "PDF",
}: {
  href: string;
  label: string;
  type?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-4 px-3 py-2 rounded-lg transition-colors duration-150 hover:bg-zinc-100 group bg-white"
      style={{ border: "1px solid #e4e4e7", textDecoration: "none" }}
    >
      {/* PDF icon */}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14 2 14 8 20 8" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round"/>
        <polyline points="10 9 9 9 8 9" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
      <span className="text-xs font-mono tracking-wide" style={{ color: "#71717a" }}>
        <span style={{ color: "#ef4444" }}>{type}</span>
        {" · "}
        <span className="group-hover:text-zinc-900 transition-colors duration-150">{label}</span>
      </span>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-zinc-900 transition-colors duration-150">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </a>
  );
}

/* ─── Page wrapper ────────────────────────────────────────────────────────── */

export function CaseStudyPage({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {children}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link
          href="/#projects"
          className="text-xs font-mono tracking-widest uppercase text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
        >
          ← Back to all work
        </Link>
      </div>
    </main>
  );
}

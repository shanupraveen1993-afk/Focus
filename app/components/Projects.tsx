"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

/* ── Types ── */
interface ComparisonSide {
  label: string;
  items: { src: string; alt: string; caption: string }[];
}

interface Project {
  id: string;
  tag: string;
  tagPills?: [string, string, string];
  tagColor: string;
  borderColor: string;
  title: string;
  tagline: string;
  metrics: { n: string; l: string }[];
  chips: string[];
  personalProject?: boolean;
  aiProject?: boolean;
  cta?: { label: string; href: string };
  liveCta?: { label: string; href: string };
  liveCta2?: { label: string; href: string };
  apkCta?: { label: string; href: string };
  images: { src: string; alt: string }[];
  webImages?: { src: string; alt: string }[];
  mobileImages?: { src: string; alt: string }[];
  demoVideo?: string;
  note?: string;
  noLightbox?: boolean;
  phoneRow?: boolean;
  comparison?: { before: ComparisonSide; after: ComparisonSide };
}

const PROJECTS: Project[] = [
  {
    id: "appvector",
    tag: "Worked directly with CEO · Cross-functional: product, engineering, sales",
    tagPills: ["UX Designer", "6 months", "14%→37.5% onboarding"],
    tagColor: "linear-gradient(150deg, #140e05 0%, #070707 55%)",
    borderColor: "rgba(251,146,60,0.18)",
    title: "AppVector — ASO Platform",
    tagline: "Restructured the onboarding and Chrome extension activation flows for a B2B ASO platform, doubling onboarding completion (14% to 37.5%) by replacing a blocking 3-step configuration gate with an automated demo-first preview.",
    metrics: [
      { n: "14%→37.5%", l: "onboarding completion" },
      { n: "22.3%→43.2%", l: "extension activation" },
      { n: "+54%",       l: "keyword engagement" },
      { n: "203→337",    l: "active token users" },
    ],
    chips: ["PLG Funnel", "Growth Diagnostics", "B2B SaaS", "Session Analysis", "Dev Handoff", "Figma"],
    cta: { label: "View Case Study →", href: "/appvector" },
    liveCta: { label: "appvector.io ↗", href: "https://appvector.io" },
    images: [
      { src: "/appvector-landing.png", alt: "AppVector live landing page — ASO platform" },
    ],
  },
  {
    id: "searchvector",
    tag: "Full UX rebuild after AI codebase migration — 8 tools diagnosed and redesigned end-to-end",
    tagPills: ["UX Designer", "3 months", "2.5× GSC growth · week 1"],
    tagColor: "linear-gradient(150deg, #090d1a 0%, #070707 55%)",
    borderColor: "rgba(99,102,241,0.18)",
    title: "SearchVector — SEO Intelligence",
    tagline: "Recovered product activation and grew organic impressions by 2.5× in week one by auditing and redesigning 8 core SEO modules. Replaced blocking GSC connection modals with value-first, preview-driven GSC connection landing pages.",
    metrics: [
      { n: "2.5×",  l: "GSC impression growth · week 1" },
      { n: "8+",    l: "tools redesigned end-to-end" },
      { n: "1 SOP", l: "UX framework adopted by dev team" },
      { n: "9",     l: "feature modules shipped" },
    ],
    chips: ["Cognitive Load", "Data-Dense UX", "B2B SaaS", "Dashboard Design", "GSC Integration", "Figma"],
    cta: { label: "View Case Study →", href: "/searchvector" },
    liveCta: { label: "searchvector.io ↗", href: "https://searchvector.io" },
    images: [
      { src: "/searchvector-dashboard.png", alt: "SearchVector dashboard — rebuilt product" },
    ],
  },
  {
    id: "audio-hiring",
    tag: "Internal tool · Multivariate.ai · built to screen ASO/SEO specialist candidates",
    tagPills: ["UX Designer", "Internal Tool", "500+ hrs saved"],
    tagColor: "linear-gradient(150deg, #0d1f15 0%, #070707 55%)",
    borderColor: "rgba(16,185,129,0.15)",
    title: "Audio Hiring Tool",
    tagline: "Designed a dual-sided async audio screening platform that eliminated synchronous first-round scheduling friction. Created raw-audio candidate flows and split-viewport recruiter dashboards to save 500+ hours of HR coordination.",
    metrics: [
      { n: "3,285", l: "invites sent" },
      { n: "35%",   l: "acceptance (2× benchmark)" },
      { n: "399",   l: "completed interviews" },
      { n: "500+",  l: "man-hours saved" },
    ],
    chips: ["Dual-sided UX", "Workflow Design", "Hick's Law", "Mobile-first", "Figma"],
    cta: { label: "View Case Study →", href: "/audio-hiring" },
    images: [
      { src: "/hiring/06-pre-interview.png",    alt: "Candidate — pre-interview instructions" },
      { src: "/hiring/13-admin-evaluation.png", alt: "Recruiter — evaluation panel" },
    ],
  },
  {
    id: "tripai",
    personalProject: true,
    aiProject: true,
    tag: "AI design experiment — validating LLM-based travel intelligence against real hotel data",
    tagPills: ["Solo Designer + Dev", "4-day sprint", "AI UX proof of concept"],
    tagColor: "linear-gradient(150deg, #0d1f40 0%, #070707 55%)",
    borderColor: "rgba(255,255,255,0.08)",
    title: "TripAI",
    tagline: "Designed and validated a sentiment-driven travel discovery interface, translating 5 in-depth user interviews and 130+ hotel datasets into a contextual ranking system for underserved travelers.",
    metrics: [
      { n: "4 days", l: "research → shipped" },
      { n: "5",      l: "user interviews" },
      { n: "130+",   l: "hotels structured" },
      { n: "₹0",     l: "budget" },
    ],
    chips: ["AI UX Patterns", "Latency Design", "Gemini API", "Expo", "Rapid Prototyping"],
    cta: { label: "View Case Study →", href: "/tripai" },
    liveCta: { label: "Live Site ↗", href: "https://tripai-thanjavur.vercel.app" },
    apkCta: { label: "Install APK ↓", href: "/tripai/tripai-release.apk" },
    images: [
      { src: "/tripai/111.jpeg", alt: "Onboarding — Hotels & Food · Discover the best stays & eats · Next" },
      { src: "/tripai/222.jpeg", alt: "Home — Your trip, AI-powered · Gateway of India hero · Hotels / Food / Itinerary / Explore tabs · Continue with Google" },
      { src: "/tripai/333.jpeg", alt: "Hotels — Find your perfect stay · tag filters (Near Big Temple, Car Parking, Quiet & Peaceful) · Find top hotels in Thanjavur" },
      { src: "/tripai/444.jpeg", alt: "Hotel results — AI Ranked · Quiet & Peaceful · Hotel Jais Inn 4.8 Excellent 875 reviews" },
    ],
    phoneRow: true,
  },
  {
    id: "nearby",
    personalProject: true,
    aiProject: true,
    tag: "Field research experiment — testing LLM persona accuracy against 67 on-ground interviews",
    tagPills: ["Solo Researcher + Designer", "Field Study", "AI persona disproved by data"],
    tagColor: "linear-gradient(150deg, #1a0d2e 0%, #070707 55%)",
    borderColor: "rgba(139,92,246,0.15)",
    title: "Nearby",
    tagline: "Conducted 67 user interviews to test AI persona accuracy against tier-2 Indian user behaviors, exposing critical trust-building gaps in standard AI models and designing a localized trust architecture (e.g. Aadhaar verification).",
    note: "This started as a complete UX project — 67 field interviews, personas, user flows, full screen design — published on Behance. The AI experiment came after: what happens when you give AI a finished brief?",
    metrics: [
      { n: "67", l: "field interviews" },
      { n: "13", l: "personas distilled" },
      { n: "6 weeks", l: "field study duration" },
    ],
    chips: ["LLM vs Field Research", "Trust Design", "User Interviews", "Non-Metro India", "Google Stitch"],
    cta: { label: "View Case Study →", href: "/nearby" },
    liveCta: { label: "View on Behance ↗", href: "https://www.behance.net/gallery/199735857/Nearby-Your-service-partner" },
    images: [],
    comparison: {
      before: {
        label: "V1 — Human Research",
        items: [
          { src: "/nearby-old-home.png",      alt: "V1 home screen", caption: "Home — service categories" },
          { src: "/nearby-old-providers.png", alt: "V1 providers list", caption: "Provider list — distance first" },
        ],
      },
      after: {
        label: "V2 — Google Stitch (AI)",
        items: [
          { src: "/nearby-new-home.png",      alt: "V2 home screen", caption: "Home — AI-generated" },
          { src: "/nearby-new-providers.png", alt: "V2 providers list", caption: "Provider list — AI-generated" },
        ],
      },
    },
  },
];

/* ── Before / After comparison strip ── */
function ComparisonStrip({ before, after }: { before: ComparisonSide; after: ComparisonSide }) {
  const [lightbox, setLightbox] = useState<{ srcs: string[]; start: number } | null>(null);

  const Side = ({ data, accent }: { data: ComparisonSide; accent?: boolean }) => {
    const srcs = data.items.map(i => i.src);
    return (
      <div className="min-w-0 flex flex-col gap-3">
        <p className="text-xs font-mono tracking-widest uppercase" style={{ color: accent ? "#18181b" : "#71717a" }}>
          {data.label}
        </p>
        {data.items.length === 0 ? (
          <div className="rounded-xl flex flex-col items-center justify-center gap-2" style={{ height: 160, background: "#fafafa", border: `1.5px dashed ${accent ? "#18181b" : "#e4e4e7"}` }}>
            <span className="text-[13px] font-mono tracking-widest uppercase" style={{ color: "#71717a" }}>Images coming</span>
          </div>
        ) : (
          <div className="flex gap-2">
            {data.items.map((img, i) => (
              <div key={img.src} className="space-y-1.5 flex-1">
                <div
                  className="rounded-2xl overflow-hidden cursor-zoom-in relative group"
                  style={{ border: `1px solid ${accent ? "rgba(24,24,27,0.15)" : "#e4e4e7"}`, background: "#ffffff" }}
                  onClick={e => { e.stopPropagation(); setLightbox({ srcs, start: i }); }}
                >
                  <Image src={img.src} alt={img.alt} width={320} height={600} className="w-full h-auto block" sizes="20vw" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150" style={{ background: "rgba(0,0,0,0.35)" }}>
                    <ExpandIcon />
                  </div>
                </div>
                <p className="text-[13px] font-mono leading-tight" style={{ color: "#71717a" }}>{img.caption}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Side data={before} />
        <Side data={after} accent />
      </div>
      {lightbox && <Slider images={lightbox.srcs} startAt={lightbox.start} onClose={() => setLightbox(null)} />}
    </>
  );
}

/* ── Video player — manual play, full-bleed ── */
function VideoPlayer({ src, onCardClick }: { src: string; onCardClick?: (e: React.MouseEvent) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <div
      className="relative w-full bg-black overflow-hidden cursor-pointer"
      onClick={toggle}
      style={{ aspectRatio: "16/9" }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover block"
        onEnded={() => setPlaying(false)}
      />
      {/* play / pause overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
        style={{ opacity: playing ? 0 : 1, background: "rgba(0,0,0,0.28)" }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 3 }}>
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── Slider ── */
function Slider({ images, startAt, onClose }: { images: string[]; startAt: number; onClose: () => void }) {
  const [cur, setCur] = useState(startAt);
  const prev = () => setCur(c => (c - 1 + images.length) % images.length);
  const next = () => setCur(c => (c + 1) % images.length);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.9)" }} onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-5 w-9 h-9 flex items-center justify-center rounded-full text-white text-xl" style={{ background: "rgba(255,255,255,0.1)" }}>×</button>
      {images.length > 1 && <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full text-white text-2xl" style={{ background: "rgba(255,255,255,0.12)" }}>‹</button>}
      {images.length > 1 && <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full text-white text-2xl" style={{ background: "rgba(255,255,255,0.12)" }}>›</button>}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={images[cur]} alt="" className="max-w-full max-h-[88vh] rounded-xl object-contain shadow-2xl" onClick={e => e.stopPropagation()} />
      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button key={i} onClick={e => { e.stopPropagation(); setCur(i); }} className="rounded-full transition-all duration-200" style={{ width: i === cur ? 20 : 6, height: 6, background: i === cur ? "#f5f5f5" : "rgba(255,255,255,0.25)" }} />
          ))}
        </div>
      )}
    </div>
  );
}

const ExpandIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
  </svg>
);

/* ── Phone row — 4 screens side by side with lightbox ── */
function PhoneRow({ images }: { images: Project["images"] }) {
  const [lightbox, setLightbox] = useState<{ srcs: string[]; start: number } | null>(null);
  const srcs = images.map(x => x.src);
  return (
    <>
      <div className="flex gap-2">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="flex-1 rounded-2xl overflow-hidden cursor-zoom-in relative group"
            style={{ border: "1px solid #e4e4e7", background: "#ffffff" }}
            onClick={e => { e.stopPropagation(); setLightbox({ srcs, start: i }); }}
          >
            <Image src={img.src} alt={img.alt} width={320} height={600} className="w-full h-auto block" sizes="20vw" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150" style={{ background: "rgba(0,0,0,0.35)" }}>
              <ExpandIcon />
            </div>
          </div>
        ))}
      </div>
      {lightbox && <Slider images={lightbox.srcs} startAt={lightbox.start} onClose={() => setLightbox(null)} />}
    </>
  );
}

/* ── Screen grid ── */
function ScreenGrid({ images, noLightbox }: { images: Project["images"]; noLightbox?: boolean }) {
  const [current, setCurrent] = useState(0);
  const [sliderOpen, setSliderOpen] = useState(false);
  const srcs = images.map(x => x.src);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setCurrent(c => (c + 1) % images.length), 2000);
    return () => clearInterval(id);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="w-full h-28 rounded-xl flex flex-col items-center justify-center gap-2" style={{ background: "#fafafa", border: "1.5px dashed #e4e4e7" }}>
        <span className="text-xs text-zinc-400 font-mono tracking-widest uppercase">Screenshots coming</span>
      </div>
    );
  }

  const img = images[current];
  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length);
  const next = () => setCurrent(c => (c + 1) % images.length);

  return (
    <>
      <div className="space-y-2" onClick={e => e.stopPropagation()}>
        <div className={`relative w-full rounded-xl overflow-hidden bg-white border border-[#e4e4e7] ${!noLightbox ? "cursor-zoom-in group" : ""}`} onClick={() => !noLightbox && setSliderOpen(true)}>
          <Image src={img.src} alt={img.alt} width={1200} height={800} className="w-full h-auto block transition-opacity duration-200 group-hover:opacity-90" sizes="(max-width: 768px) 100vw, 800px" />
          {images.length > 1 && (
            <>
              <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-white text-lg z-10" style={{ background: "rgba(0,0,0,0.55)" }}>‹</button>
              <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-white text-lg z-10" style={{ background: "rgba(0,0,0,0.55)" }}>›</button>
            </>
          )}
          {!noLightbox && (
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 px-2 py-1 rounded-lg pointer-events-none" style={{ background: "rgba(0,0,0,0.72)" }}>
              <ExpandIcon />
              <span className="text-xs font-mono text-white tracking-wide">expand</span>
            </div>
          )}
        </div>
        {images.length > 1 && (
          <div className="flex gap-1.5 justify-center pt-0.5">
            {images.map((_, i) => (
              <button key={i} onClick={e => { e.stopPropagation(); setCurrent(i); }} className="rounded-full transition-all duration-200" style={{ width: i === current ? 18 : 5, height: 5, background: i === current ? "#18181b" : "#e4e4e7" }} />
            ))}
          </div>
        )}
      </div>
      {!noLightbox && sliderOpen && <Slider images={srcs} startAt={current} onClose={() => setSliderOpen(false)} />}
    </>
  );
}

/* ── Single project card ── */
function ProjectCard({ p }: { p: Project }) {
  const router = useRouter();

  const handleCardClick = () => {
    if (p.cta) router.push(p.cta.href);
  };

  return (
    <div
      data-cursor="Read"
      className={`rounded-2xl overflow-hidden mb-8 transition-all duration-300 cursor-pointer group/card hover:shadow-2xl hover:border-zinc-300`}
      style={{ background: "#ffffff", border: "1px solid #e4e4e7", boxShadow: "0 4px 24px rgba(0,0,0,0.02)" }}
      onClick={handleCardClick}
    >
      {/* ── Header ── */}
      <div className="px-6 pt-6 pb-5 sm:px-8 sm:pt-8">
        {/* eyebrow metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-zinc-100 pb-3">
          <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase font-medium">
            {p.tag}
          </span>
          {p.tagPills && (
            <div className="flex flex-wrap gap-1.5">
              {p.tagPills.map(pill => (
                <span key={pill} className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded bg-zinc-50 border border-zinc-200 text-zinc-500">
                  {pill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* title + tagline */}
        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2 tracking-tight leading-tight group-hover/card:text-zinc-700 transition-colors duration-200 flex items-center gap-3 flex-wrap">
          {p.title}
          {p.aiProject && (
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200">
              AI Project
            </span>
          )}
        </h3>
        <p className="text-sm leading-relaxed mb-6 text-zinc-500 font-normal">{p.tagline}</p>

        {/* metrics */}
        {p.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {p.metrics.map(({ n, l }) => (
              <div key={l} className="rounded-xl px-3 py-2.5 bg-zinc-50 border border-zinc-200">
                <p className="text-lg font-bold text-zinc-800 tabular-nums mb-0.5">{n}</p>
                <p className="text-xs text-zinc-400 font-mono leading-snug">{l}</p>
              </div>
            ))}
          </div>
        )}

        {p.note && (
          <div className="mt-4 p-3 bg-zinc-50 border border-zinc-150 rounded-xl text-xs font-mono text-zinc-500 leading-relaxed">
            <span className="font-semibold text-zinc-700">Project Context:</span> {p.note}
          </div>
        )}
      </div>

      {/* ── Media ── */}
      {p.demoVideo && <VideoPlayer src={p.demoVideo} />}
      {!p.demoVideo && (
        <div className="px-6 sm:px-8 pb-2">
          {p.comparison ? (
            <ComparisonStrip before={p.comparison.before} after={p.comparison.after} />
          ) : p.phoneRow ? (
            <PhoneRow images={p.images} />
          ) : (
            <ScreenGrid images={p.images} noLightbox={p.noLightbox} />
          )}
        </div>
      )}

      {/* ── Footer ── */}
      <div className="px-6 pb-6 pt-4 sm:px-8 sm:pb-7 border-t border-zinc-200">
        {/* chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.chips.map(c => (
            <span key={c} className="px-2.5 py-1 rounded-full text-xs font-mono bg-zinc-100 text-zinc-600 border border-zinc-200">
              {c}
            </span>
          ))}
        </div>

        {/* cta buttons — view case study primary, external links secondary */}
        <div className="flex gap-3 justify-end flex-wrap items-center">
          {p.apkCta && (
            <a
              href={p.apkCta.href}
              download
              className="px-5 py-2.5 rounded-full text-sm font-medium text-zinc-500 hover:text-zinc-800 transition-colors bg-white border border-zinc-200"
              onClick={e => e.stopPropagation()}
            >
              {p.apkCta.label}
            </a>
          )}
          {p.liveCta && (
            <a
              href={p.liveCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-medium text-zinc-500 hover:text-zinc-800 transition-colors bg-white border border-zinc-200"
              onClick={e => e.stopPropagation()}
            >
              {p.liveCta.label}
            </a>
          )}
          {p.liveCta2 && (
            <a
              href={p.liveCta2.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-medium text-zinc-500 hover:text-zinc-800 transition-colors bg-white border border-zinc-200"
              onClick={e => e.stopPropagation()}
            >
              {p.liveCta2.label}
            </a>
          )}
          {p.cta && (
            <span
              className="px-6 py-3 rounded-full text-sm font-bold text-white cursor-pointer bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              {p.cta.label}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const PROJECT_ORDER = ["tripai", "appvector", "searchvector", "audio-hiring", "nearby"];

const PROJECT_TAGS: Record<string, string[]> = {
  appvector: ["B2B SaaS"],
  searchvector: ["B2B SaaS"],
  "audio-hiring": ["B2B SaaS"],
  tripai: ["AI UX", "Mobile"],
  nearby: ["AI UX", "Mobile", "Field Research"]
};

const FILTERS = ["All", "B2B SaaS", "AI UX", "Mobile", "Field Research"];

/* ── Section ── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const ordered = PROJECT_ORDER.map(id => PROJECTS.find(p => p.id === id)!);
  const filtered = ordered.filter(p => {
    if (activeFilter === "All") return true;
    const tags = PROJECT_TAGS[p.id] || [];
    return tags.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-24 px-6 sm:px-12" style={{ background: "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-400 mb-4">
          02 — Projects
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-2 leading-tight">
          Selected Work
        </h2>

        {/* Project category filters */}
        <div className="flex flex-wrap gap-2 mb-8 mt-5">
          {FILTERS.map(f => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-4 py-2 rounded-full text-xs font-mono transition-all duration-200"
                style={{
                  background: isActive ? "#18181b" : "#ffffff",
                  color: isActive ? "#ffffff" : "#71717a",
                  border: isActive ? "1px solid #18181b" : "1px solid #e4e4e7",
                  cursor: "pointer"
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="space-y-6">
          {filtered.map(p => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

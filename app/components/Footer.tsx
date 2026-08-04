"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-16 px-6 overflow-hidden"
      style={{ background: "#fafafa", borderTop: "1px solid #e4e4e7" }}
    >
      {/* bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(24,24,27,0.01) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-400 mb-8">
          03 — Contact
        </p>

        <h2 className="text-4xl sm:text-6xl font-bold text-zinc-900 mb-4 leading-tight">
          Research is the key.<br />
          Design is the craft.<br />
          <span className="text-zinc-500">Process is the proof.</span>
        </h2>

        <p className="text-zinc-500 text-lg mb-8 max-w-lg mx-auto">
          UX Designer at Multivariate.ai — part of Nextgrowth Lab, top 10 SEO/ASO agency in India. Open to senior UX roles.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="mailto:shanupraveen6@gmail.com"
            data-cursor="Email"
            className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2"
            style={{ background: "#18181b", color: "#ffffff" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#27272a")}
            onMouseLeave={e => (e.currentTarget.style.background = "#18181b")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Send Email ↗
          </a>
          <a
            href="https://www.linkedin.com/in/shanmuga-praveen-thanigasalam-87b2bb209/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LinkedIn"
            className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 text-zinc-500 bg-white"
            style={{ border: "1px solid #e4e4e7" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#18181b"; e.currentTarget.style.color = "#18181b"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#e4e4e7"; e.currentTarget.style.color = "#71717a"; }}
          >
            Open LinkedIn ↗
          </a>
        </div>

        <div
          className="h-px w-full mb-8"
          style={{ background: "linear-gradient(90deg, transparent, #e4e4e7, transparent)" }}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <span>Shanmuga Praveen · UX Designer</span>
          <span>Designed &amp; built by Praveen S · 2026</span>
          <span>Tanjore, India</span>
        </div>
      </div>
    </footer>
  );
}

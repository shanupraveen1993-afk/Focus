"use client";

import { useState } from "react";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const currentYear = new Date().getFullYear();
  const [businessType, setBusinessType] = useState("");

  const getWhatsAppLink = () => {
    const baseText = "Hi Praveen, I would like to request a free 1-to-1 business assessment call for my business.";
    const businessSuffix = businessType.trim() 
      ? ` My business is: ${businessType.trim()}.` 
      : "";
    const fullText = encodeURIComponent(`${baseText}${businessSuffix}`);
    return `https://wa.me/919994837342?text=${fullText}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.open(getWhatsAppLink(), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer 
      id="contact"
      className="relative w-full py-28 px-6 sm:px-12 bg-[#faf8f5] border-t border-zinc-200"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          opacity: 0.035,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-10 max-w-3xl w-full mx-auto text-center flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            06 / Connect & Strategy
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold text-zinc-950 tracking-tight leading-tight">
            Let's build something <br className="hidden sm:inline" />
            people remember.
          </h2>
        </div>

        {/* Free Assessment Action Card */}
        <div className="w-full max-w-lg bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-8 text-left shadow-sm flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 mb-1.5">
              Request Free Business Assessment
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-mono">
              Get a 1-to-1 business analysis call. We'll audit your current positioning and outline what your brand needs to grow.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="business-input" className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                What is your business?
              </label>
              <input
                id="business-input"
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder="e.g. Local restaurant, e-commerce brand, clothing boutique..."
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:border-zinc-900 bg-zinc-50 text-sm font-sans placeholder-zinc-400 text-zinc-900"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-zinc-950 text-white font-semibold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              Get Free 1-to-1 Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Traditional card contact details */}
        <div className="flex flex-col items-center gap-6 border-y border-zinc-200/60 py-10 w-full max-w-md">
          <h3 className="text-4xl font-black text-zinc-900 tracking-tighter">
            focus ?
          </h3>
          
          <a 
            href="tel:9994837342"
            className="text-2xl font-mono tracking-widest text-zinc-800 hover:text-zinc-950 transition-colors"
          >
            99948 37342
          </a>

          <div className="flex items-center gap-6 mt-2">
            <a 
              href={getWhatsAppLink()}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white hover:border-zinc-900 hover:text-zinc-950 transition-all font-mono text-xs text-zinc-500 uppercase tracking-widest cursor-pointer"
            >
              <MessageSquare className="w-4.5 h-4.5 text-zinc-800" />
              WhatsApp
            </a>
            <a 
              href="mailto:shanupraveen6@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 bg-white hover:border-zinc-900 hover:text-zinc-950 transition-all font-mono text-xs text-zinc-500 uppercase tracking-widest cursor-pointer"
            >
              <Mail className="w-4.5 h-4.5 text-zinc-800" />
              Email
            </a>
          </div>
        </div>

        {/* Signature */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-400 font-semibold">
            BY
          </span>
          <span className="text-lg font-bold font-mono tracking-[0.25em] text-zinc-900 uppercase">
            PRAVEEN
          </span>
        </div>

        {/* Footer legal */}
        <div className="w-full max-w-5xl mx-auto flex justify-between items-center border-t border-zinc-200/50 pt-8 mt-8 text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
          <span>Tanjore, Tamil Nadu, India</span>
          <span>© {currentYear} Focus Studio</span>
        </div>
      </div>
    </footer>
  );
}

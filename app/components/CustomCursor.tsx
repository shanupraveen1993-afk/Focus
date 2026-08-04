"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const label = useRef("");
  const rafId = useRef<number>(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.currentTarget as HTMLElement;
      const lbl = t.dataset.cursor || "";
      label.current = lbl;
      if (labelRef.current) labelRef.current.textContent = lbl;
      if (ringRef.current) {
        ringRef.current.style.width  = lbl ? "80px" : "28px";
        ringRef.current.style.height = lbl ? "80px" : "28px";
        ringRef.current.style.background = lbl ? "rgba(255, 255, 255, 0.9)" : "transparent";
        ringRef.current.style.borderColor = lbl ? "#ffffff" : "rgba(255, 255, 255, 0.7)";
      }
    };

    const onLeave = () => {
      label.current = "";
      if (labelRef.current) labelRef.current.textContent = "";
      if (ringRef.current) {
        ringRef.current.style.width  = "28px";
        ringRef.current.style.height = "28px";
        ringRef.current.style.background = "transparent";
        ringRef.current.style.borderColor = "rgba(255, 255, 255, 0.7)";
      }
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button,[data-cursor]").forEach(el => {
      el.addEventListener("mouseenter", onEnter as EventListener);
      el.addEventListener("mouseleave", onLeave);
    });

    const loop = () => {
      const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        const w = parseFloat(ringRef.current.style.width) || 28;
        const h = parseFloat(ringRef.current.style.height) || 28;
        ringRef.current.style.transform = `translate(${ring.current.x - w / 2}px, ${ring.current.y - h / 2}px)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white z-[9999] pointer-events-none mix-blend-difference"
        style={{ transition: "none" }}
      />
      {/* ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full z-[9998] pointer-events-none flex items-center justify-center mix-blend-difference"
        style={{
          width: "28px",
          height: "28px",
          border: "1px solid rgba(255, 255, 255, 0.7)",
          background: "transparent",
          transition: "width 0.25s ease, height 0.25s ease, background 0.25s ease, border-color 0.25s ease",
        }}
      >
        <div
          ref={labelRef}
          className="text-[9px] font-semibold text-white tracking-wider uppercase text-center leading-tight"
        />
      </div>
    </>
  );
}

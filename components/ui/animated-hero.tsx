"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["UX Designer", "Product Thinker", "Systems Builder", "Research-Led", "AI-Native"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center" style={{ background: "#060606" }}>
      <div className="container mx-auto px-6">
        <div className="flex gap-6 py-20 items-center justify-center flex-col">

          {/* availability badge */}
          <div>
            <Button variant="secondary" size="sm" className="gap-3 font-mono text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </Button>
          </div>

          {/* headline */}
          <div className="flex gap-3 flex-col items-center">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tight text-center font-bold text-white leading-none">
              Shanmuga Praveen
            </h1>

            {/* animated cycling subtitle */}
            <div className="relative flex w-full justify-center overflow-hidden h-10 md:h-12 mt-1">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute text-xl md:text-2xl font-semibold"
                  style={{ color: "#f5f5f5" }}
                  initial={{ opacity: 0, y: -40 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -60 : 60, opacity: 0 }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </div>
          </div>

          {/* tagline */}
          <p className="text-base md:text-lg leading-relaxed tracking-tight max-w-xl text-center" style={{ color: "#9ca3af" }}>
            5 years shipping B2B SaaS, consumer apps, and AI-powered products —
            end-to-end: research, Figma wireframes, prototype, and dev handoff.
          </p>

          {/* skill tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            {["Figma", "User Research", "Prototyping", "Dev Handoff", "AI Products"].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-mono"
                style={{ border: "1px solid #1e1e1e", background: "rgba(10,10,10,0.8)", color: "#9ca3af" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-row gap-3 flex-wrap justify-center">
            <Button size="lg" variant="outline" className="gap-3" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              About Me <Mail className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-3" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Work <MoveRight className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export { Hero };

"use client";

export default function Navbar() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/80 backdrop-blur-md border-b border-zinc-200/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => handleScroll("hero")} 
          className="text-2xl font-bold tracking-tight text-zinc-900 hover:opacity-70 transition-opacity cursor-pointer font-sans"
        >
          focus ?
        </button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => handleScroll("hero")}
            className="text-xs uppercase font-mono tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="text-xs uppercase font-mono tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            About Me
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="text-xs uppercase font-mono tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

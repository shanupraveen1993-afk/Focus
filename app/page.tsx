import Navbar from "./components/focus/Navbar";
import Hero from "./components/focus/Hero";
import Philosophy from "./components/focus/Philosophy";
import Services from "./components/focus/Services";
import ClarityChecker from "./components/focus/ClarityChecker";
import Methodology from "./components/focus/Methodology";
import About from "./components/focus/About";
import Contact from "./components/focus/Contact";

export default function Home() {
  return (
    <div className="bg-[#faf8f5]">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <ClarityChecker />
        <Methodology />
        <About />
      </main>
      <Contact />
    </div>
  );
}


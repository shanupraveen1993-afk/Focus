import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <div className="bg-[#0c0c0e] text-white min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}



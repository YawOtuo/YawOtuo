import Image from "next/image";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/framer/scroll-progress";
import RevealSlideEnter from "./components/framer/reveal-slide-enter";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5 lg:px-20 gap-5 text-white w-full overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <RevealSlideEnter>
        <div id="about">
          <About />
        </div>{" "}
      </RevealSlideEnter>
      <div className="pt-10 lg:mt-0" id="experience">
        {" "}
        <Experience />
      </div>{" "}
      <RevealSlideEnter>
        {" "}
        <div id="tech-stack">
          {" "}
          <TechStack />
        </div>
      </RevealSlideEnter>
      <RevealSlideEnter>
        {" "}
        <div id="projects">
          <Projects />
        </div>
      </RevealSlideEnter>
    </main>
  );
}

import Image from "next/image";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/framer/scroll-progress";
import RevealSlideEnter from "./components/framer/reveal-slide-enter";
import LetsTalk from "./components/LetsTalk";
import LottieFileBuilder from "./components/LottieFileBuilder";
import developer1Json from "@/app/lotties/bg1.json";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center gap-5 text-white w-full overflow-x-hidden ">
      <ScrollProgress />
      <Navbar />
      <div className="] w-full relative">
        <HeroSection />
      </div>
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
        <div id="projects" className="lg:px-5">
          <Projects />
        </div>
      </RevealSlideEnter>
      <RevealSlideEnter >
       
          <LetsTalk />
      </RevealSlideEnter>
    </main>
  );
}

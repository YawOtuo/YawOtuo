import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/framer/scroll-progress";
import LetsTalk from "./components/LetsTalk";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center w-full overflow-x-hidden text-white">
      <ScrollProgress />
      <Navbar />
      <div className="w-full pt-16 lg:pt-0">
        <HeroSection />
      </div>
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <LetsTalk />
    </main>
  );
}

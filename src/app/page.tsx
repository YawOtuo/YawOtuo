import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/framer/scroll-progress";
import LetsTalk from "./components/LetsTalk";
import Footer from "./components/Footer";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <About />
      <Featured />
      <Experience />
      <TechStack />
      <Projects />
      <LetsTalk />
      <Footer />
    </main>
  );
}

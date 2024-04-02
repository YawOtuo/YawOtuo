import Image from "next/image";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5 lg:px-20 gap-5 text-white w-full">
      <Navbar />
      <HeroSection />
      <About />
      <div className="mt-10 lg:mt-0">
        <Experience />
      </div>{" "}
      <TechStack />
      <Projects />
    </main>
  );
}

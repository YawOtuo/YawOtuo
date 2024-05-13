import Image from "next/image";
import RevealSlideEnter from "../framer/reveal-slide-enter";
import HSButtons from "./Buttons";
import developer1Json from "@/app/lotties/bg1.json";
import LottieFileBuilder from "../LottieFileBuilder";

function HeroSection() {
  return (
    <RevealSlideEnter>
      <div className="flex flex-col items-start lg:items-start justify-start lg:justify-center text-white lg:h-[50vh] gap-8 lg:gap-10 px-5 lg:px-20 lg:w-[80%] relative">
        <div className="flex flex-col gap-5 lg:gap-1">
          <h1
            className="text-4xl lg:text-8xl font-bold
          
          ">
            <span className="text-2xl lg:text-8xl">Hello!</span>
            <br className="lg:hidden" /> I am Yaw Otuo
          </h1>

          <h3 className="text-base lg:text-xl font-semibold">
            &lt; Software Engineer - ML and AI Enthusiast - People Person /&gt;
          </h3>
        </div>

        <RevealSlideEnter delay={2}>
          <div className="flex gap-5 items-center ">
            <HSButtons variant={"contact"} label="Let's Talk" />
            <HSButtons variant={"resume"} label="Resume" />
          </div>
        </RevealSlideEnter>
      </div>
    </RevealSlideEnter>
  );
}

export default HeroSection;

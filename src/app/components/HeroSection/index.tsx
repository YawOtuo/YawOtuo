"use client";
import developer1Json from "@/app/lotties/bg1.json";
import LottieFileBuilder from "../LottieFileBuilder";
import DesktopHeroSection from "./DesktopHeroSection";
import MobileHeroSection from "./MobileHeroSection";

function HeroSection() {
  return (
    <div className="relative min-h-[80vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden ">
      
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      <div className="absolute inset-0 z-0 hidden lg:block opacity-10 sm:opacity-15 md:opacity-20 lg:opacity-30">
        {/* <LottieFileBuilder
          animationData={developer1Json}
          width="100%"
          height="100%"
        /> */}
      </div>
      
      {/* Mobile Layout */}
      <MobileHeroSection />

      {/* Desktop Layout */}
      <DesktopHeroSection />
    </div>
  );
}

export default HeroSection;

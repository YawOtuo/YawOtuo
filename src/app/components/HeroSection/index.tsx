"use client";
import DesktopHeroSection from "./DesktopHeroSection";
import MobileHeroSection from "./MobileHeroSection";

function HeroSection() {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <MobileHeroSection />
      <DesktopHeroSection />
    </div>
  );
}

export default HeroSection;

"use client";
import Image from "next/image";
import RevealSlideEnter from "../framer/reveal-slide-enter";
import HSButtons from "./Buttons";
import developer1Json from "@/app/lotties/bg1.json";
import LottieFileBuilder from "../LottieFileBuilder";
import useNavbar from "../Navbar/useNavbar";
import { motion } from "framer-motion";

function HeroSection() {
  const { handleLinkClick } = useNavbar();
  
  return (
    <div className="relative min-h-[80vh] md:min-h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Lottie Animation */}
      <div className="absolute inset-0 z-0 opacity-10 sm:opacity-15 md:opacity-20 lg:opacity-30">
        <LottieFileBuilder
          animationData={developer1Json}
          width="100%"
          height="100%"
        />
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-transparent z-10"></div>
      
      {/* Content */}
      <RevealSlideEnter>
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center text-white min-h-[50vh] md:min-h-[100vh] gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-20 w-full">
          
          {/* Profile Image - First on Mobile */}
          <motion.div
            className="flex-shrink-0 lg:w-[40%] w-full flex justify-center lg:justify-end items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-yellow-500/30 shadow-2xl">
                <Image
                  src="/me.jpg" // You'll need to add your image to the public folder
                  alt="Yaw Otuo - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-black text-xs">⚡</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white text-xs">🚀</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Left Content - Second on Mobile */}
          <div className="flex flex-col items-start justify-center gap-6 sm:gap-8 lg:gap-10 lg:w-[60%] w-full order-2 lg:order-1">
            {/* Main Heading */}
            <motion.div 
              className="flex flex-col gap-3 sm:gap-4 lg:gap-3 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h1 className="text-4xl lg:text-7xl 2xl:text-8xl font-bold leading-tight">
                  <span className="text-yellow-500 text-xl sm:text-2xl md:text-3xl lg:text-6xl 2xl:text-7xl">Hello!</span>
                  <br className="lg:hidden" /> 
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    I am Yaw Otuo
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">
                  I turn wild ideas into digital reality
                </h2>
              </motion.div>

        
            </motion.div>

            {/* Single Catchy Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-2xl w-full"
            >
              <p className="text-gray-300 text-xs lg:text-lg leading-relaxed">
                🚀 <span className="text-yellow-400 font-semibold">I help startups go from &quot;what if&quot; to &quot;wow!&quot;</span> - 
                Built African Bully Registry from zero to international recognition in 1 year.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <RevealSlideEnter delay={1.2}>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-start sm:items-center w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {/* Primary Button - Always Visible */}
                <HSButtons
                  variant={"contact"}
                  label="Let's Build Something Epic"
                  onClick={() => handleLinkClick("letstalk")}
                />
                
                {/* Secondary Buttons - Hidden on Mobile */}
                <div className="hidden sm:flex sm:flex-row gap-4 lg:gap-6">
                  <HSButtons
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/document/d/1RycbOCvFvEHFDmymyK8jx7Bq5XBZU5_MAEzigP9g-Hk/edit#heading=h.5x0d5h95i329",
                        "_blank"
                      )
                    }
                    variant={"resume"}
                    label="See My Resume"
                  />
                  <HSButtons
                    onClick={() => handleLinkClick("projects")}
                    variant={"secondary"}
                    label="See My Projects"
                  />
                </div>
              </motion.div>
            </RevealSlideEnter>
          </div>
        </div>
      </RevealSlideEnter>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-yellow-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;

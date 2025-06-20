"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HSButtons from "./Buttons";
import useNavbar from "../Navbar/useNavbar";
import RevealSlideEnter from "../framer/reveal-slide-enter";
import ProfileImage from "./ProfileImage";

export default function DesktopHeroSection() {
  const { handleLinkClick } = useNavbar();

  return (
    <div className="hidden lg:block relative z-20 w-full">
      <RevealSlideEnter>
        <div className="flex flex-col lg:flex-row items-center justify-center text-white min-h-[100vh] gap-8 sm:gap-10 lg:gap-12 px-6 sm:px-6 md:px-8 lg:px-20 w-full py-12 sm:py-16">
          <motion.div
            className="flex-shrink-0 lg:w-[40%] w-full flex justify-center lg:justify-end items-center order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProfileImage />
          </motion.div>

          <div className="flex flex-col items-start text-left justify-center gap-8 sm:gap-10 lg:gap-12 lg:w-[60%] w-full order-1">
            <motion.div
              className="flex flex-col gap-6 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h1 className="text-7xl 2xl:text-8xl font-bold leading-tight tracking-tight">
                  <span className="text-yellow-500 text-6xl 2xl:text-7xl block mb-3">
                    Hello!
                  </span>
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
                <h2 className="text-2xl font-semibold text-gray-300">
                  I turn wild ideas into digital reality
                </h2>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-2xl w-full"
            >
              <p className="text-lg leading-relaxed text-gray-300">
                🚀{" "}
                <span className="text-yellow-400 font-semibold">
                  Empowering startups with innovative solutions
                </span>{" "}
                - Transforming early-stage ideas into production-ready
                applications.
              </p>
            </motion.div>

            <RevealSlideEnter delay={1.2}>
              <motion.div
                className="flex flex-row items-center gap-8 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="w-auto">
                  <HSButtons
                    variant={"contact"}
                    label="Let's Build Something Epic"
                    onClick={() => handleLinkClick("letstalk")}
                  />
                </div>
                <div className="flex flex-row gap-4">
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-yellow-500/50 rounded-full flex justify-center backdrop-blur-sm bg-black/10"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-yellow-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
} 
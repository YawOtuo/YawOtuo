"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HSButtons from "./Buttons";
import useNavbar from "../Navbar/useNavbar";
import ProfileImage from "./ProfileImage";

export default function MobileHeroSection() {
  const { handleLinkClick } = useNavbar();

  return (
    <div className="relative z-20 flex flex-col items-center justify-center text-white  w-full px-4 sm:px-6 py-16 text-center lg:hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mb-6"
      >
        <ProfileImage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="mb-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
          <span className="text-white/70 text-lg block mb-3">Hello!</span>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            I am Yaw Otuo
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mt-2">
          I turn wild ideas into digital reality
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="max-w-md mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-8"
      >
        🚀 Empowering startups with innovative solutions - transforming
        early-stage ideas into production-ready applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto"
      >
        <div className="w-full">
          <HSButtons
            variant={"contact"}
            label="Let's Build Something Epic"
            onClick={() => handleLinkClick("letstalk")}
          />
        </div>
        <div className="flex gap-4 w-full justify-center">
          <div className="w-full">
            <HSButtons
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1RycbOCvFvEHFDmymyK8jx7Bq5XBZU5_MAEzigP9g-Hk/edit#heading=h.5x0d5h95i329",
                  "_blank"
                )
              }
              variant={"resume"}
              label="Resume"
            />
          </div>
          <div className="w-full">
            <HSButtons
              onClick={() => handleLinkClick("projects")}
              variant={"secondary"}
              label="Projects"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import HSButtons from "./Buttons";
import useNavbar from "../Navbar/useNavbar";
import ProfileImage from "./ProfileImage";

export default function MobileHeroSection() {
  const { handleLinkClick } = useNavbar();

  return (
    <div className="lg:hidden flex flex-col items-center text-center w-full px-4 sm:px-6 py-20 pt-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <ProfileImage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-5"
      >
        <p className="text-accent font-medium mb-1">Hello, I&apos;m</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Yaw Otuo
        </h1>
        <p className="text-base text-muted mt-1">
          Full Stack Developer & AI Enthusiast
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm text-muted max-w-md leading-relaxed mb-6"
      >
        I turn wild ideas into digital reality — building scalable,
        production-ready applications for startups.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm"
      >
        <HSButtons
          variant="contact"
          label="Let's Talk"
          onClick={() => handleLinkClick("letstalk")}
        />
        <HSButtons
          variant="secondary"
          label="Projects"
          onClick={() => handleLinkClick("projects")}
        />
      </motion.div>
    </div>
  );
}

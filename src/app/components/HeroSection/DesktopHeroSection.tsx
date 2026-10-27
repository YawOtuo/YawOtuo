"use client";
import { motion } from "framer-motion";
import HSButtons from "./Buttons";
import useNavbar from "../Navbar/useNavbar";
import ProfileImage from "./ProfileImage";

export default function DesktopHeroSection() {
  const { handleLinkClick } = useNavbar();

  return (
    <div className="hidden lg:flex items-center min-h-[80vh] w-full px-6 lg:px-20 py-20">
      <div className="flex items-center gap-16 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <ProfileImage />
        </motion.div>

        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-accent font-medium mb-2">Hello, I&apos;m</p>
            <h1 className="text-5xl xl:text-6xl font-bold text-white tracking-tight">
              Yaw Otuo
            </h1>
            <p className="text-xl text-muted mt-2">
              Full Stack Developer & AI Enthusiast
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-xl leading-relaxed"
          >
            I turn wild ideas into digital reality — building scalable,
            production-ready applications for startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <HSButtons
              variant="contact"
              label="Let's Talk"
              onClick={() => handleLinkClick("letstalk")}
            />
            <HSButtons
              variant="secondary"
              label="View Projects"
              onClick={() => handleLinkClick("projects")}
            />
            <HSButtons
              variant="resume"
              label="Resume"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1RycbOCvFvEHFDmymyK8jx7Bq5XBZU5_MAEzigP9g-Hk/edit#heading=h.5x0d5h95i329",
                  "_blank"
                )
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

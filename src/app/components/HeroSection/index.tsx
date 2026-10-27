"use client";

import { motion } from "framer-motion";
import { LuArrowDownRight, LuArrowUpRight } from "react-icons/lu";
import useNavbar from "../Navbar/useNavbar";
import ProfileImage from "./ProfileImage";
import { Container } from "../ui/section";

const RESUME_URL =
  "https://docs.google.com/document/d/1RycbOCvFvEHFDmymyK8jx7Bq5XBZU5_MAEzigP9g-Hk/edit#heading=h.5x0d5h95i329";

function HeroSection() {
  const { handleLinkClick } = useNavbar();

  return (
    <section className="w-full pt-32 pb-20 lg:pt-44 lg:pb-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm text-muted mb-8"
            >
              Yaw Otuo — Full Stack Developer &amp; AI Enthusiast, Ghana
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold tracking-tighter leading-[1.02]"
            >
              I turn wild ideas into{" "}
              <span className="bg-accent px-3 -mx-3 rounded-xl box-decoration-clone">
                digital reality.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-muted max-w-xl mt-8 leading-relaxed"
            >
              I help startups take early-stage ideas to production-ready
              applications, with scalable, clean code and a focus on the
              people using it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10"
            >
              <button
                onClick={() => handleLinkClick("letstalk")}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-accent hover:text-foreground transition-colors duration-200"
              >
                Let&apos;s talk
                <LuArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <button
                onClick={() => handleLinkClick("projects")}
                className="inline-flex items-center gap-2 font-semibold underline decoration-accent decoration-4 underline-offset-8 hover:decoration-foreground transition-colors"
              >
                See my work
                <LuArrowDownRight size={18} />
              </button>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-muted hover:text-foreground transition-colors"
              >
                Resume
                <LuArrowUpRight size={18} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-4"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

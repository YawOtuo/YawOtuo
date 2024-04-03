"use client"

import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-white origin-left " style={{ scaleX }} />
    </div>
  );
}

export default ScrollProgress;

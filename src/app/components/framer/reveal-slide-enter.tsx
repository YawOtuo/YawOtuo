"use client"
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  reverse? : boolean
};

export default function RevealSlideEnter({ children, delay=0.2, className, reverse }: props) {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateX: reverse ? -90 : 90 },
        visible: { opacity: 1, translateX: 0 },
      }}
      transition={{
        type: "spring",
        duration: 1,
        damping: 40,
        delay: delay,
        stiffness: 100,
      }}
      initial="hidden"
      animate={controls}
      className={`${className} w-full overflow-x-hidden`}
    >
      {children}
    </motion.div>
  );
}
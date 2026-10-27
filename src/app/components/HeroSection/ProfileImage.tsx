"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-surface-elevated">
        <Image
          src="/me.jpg"
          alt="Yaw Otuo - Full Stack Developer"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/30"></div>
    </motion.div>
  );
}

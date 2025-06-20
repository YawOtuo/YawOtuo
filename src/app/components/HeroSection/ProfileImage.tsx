"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative">
      <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
        <Image
          src="/me.jpg"
          alt="Yaw Otuo - Full Stack Developer"
          fill
          className="object-cover transform hover:scale-110 transition-transform duration-500"
          priority
        />
      </div>
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity },
        }}
      >
        <span className="text-black text-sm sm:text-base">⚡</span>
      </motion.div>
      <motion.div
        className="absolute -bottom-2 -left-2 w-5 h-5 sm:w-7 sm:h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white text-sm sm:text-base">🚀</span>
      </motion.div>
    </div>
  );
} 
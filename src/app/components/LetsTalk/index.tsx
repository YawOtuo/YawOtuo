"use client";
import LottieFileBuilder from "../LottieFileBuilder";
import LTButtons from "./LTButtons";
import developer1Json from "@/app/lotties/pc1.json";
import LTForm from "./LTForm";
import { motion } from "framer-motion";

function LetsTalk() {
  return (
    <div className="wrapper flex gap-6 sm:gap-8 flex-col min-h-[80vh] w-full sm:w-[90%] lg:w-[80%] justify-center py-20 lg:py-0">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
        id="letstalk"
      >
        <h2 className="title text-white mb-3 sm:mb-4">Let's Talk</h2>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
          Ready to turn your ideas into reality? Let's build something amazing together!
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center px-4">
        
        {/* Left Side - Animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800/50">
            <LottieFileBuilder
              animationData={developer1Json}
              width="100%"
              height="100%"
            />
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <LTForm />
        </motion.div>
      </div>
    </div>
  );
}

export default LetsTalk;

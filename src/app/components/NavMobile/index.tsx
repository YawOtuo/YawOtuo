//@ts-nocheck
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavMobileMenuStore } from "./components/useNavMobileMenuStore";
import NavMobileMenuArea from "./components/NavMobileMenuArea";
import { ExpandCircle } from "@/app/lib/animations";

export default function NavMobile(props: any) {
  const menuRef = useRef<HTMLElement>(null);
  const { setNavMobileMenuStore } = useNavMobileMenuStore();

  return (
    <AnimatePresence>
      {props?.isOpen && (
        <motion.aside
          ref={menuRef}
          tabIndex="0"  
          className="fixed top-0 min-h-dvh w-full h-screen left-0 right-0 z-[9999] flex flex-col overflow-hidden bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.95,
            transition: {
              duration: 0.2,
              ease: "easeIn"
            }
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-orange-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>

          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => setNavMobileMenuStore(false)}
            className="absolute top-6 right-6 z-100 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Menu Content */}
          <div className="relative z-10 flex-1 flex items-center justify-center">
            <NavMobileMenuArea data={props?.data}/>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 p-6 text-center"
          >
            <p className="text-gray-400 text-sm">
              Let's build something amazing together
            </p>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
// const Root = styled(motion.aside, {
//   // gap:"px",
//   height: "100svh",
//   position: "fixed",
//   overflowY: "auto",
//   // minHeight: "100svh",
//   top: 0,
//   left: 0,
//   right: 0,
//   // bottom: "0px",
//   width: "100%",
//   zIndex: "9999",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",

// });

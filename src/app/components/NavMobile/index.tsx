"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useNavMobileMenuStore } from "./components/useNavMobileMenuStore";
import { MobileMenu } from "./MobileMenu";

export default function NavMobile({ isOpen }: { isOpen: boolean }) {
  const { setNavMobileMenuStore } = useNavMobileMenuStore();

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className="fixed inset-0 z-[9999] bg-background flex flex-col overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-end px-6 h-16 shrink-0">
            <button
              onClick={() => setNavMobileMenuStore(false)}
              className="font-mono text-sm py-2"
              aria-label="Close menu"
            >
              close ×
            </button>
          </div>
          <MobileMenu />
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

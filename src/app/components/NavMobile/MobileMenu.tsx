"use client";

import { motion } from "framer-motion";
import { useNavMobileMenuStore } from "./components/useNavMobileMenuStore";
import useNavbar from "../Navbar/useNavbar";
import { useContactChannels } from "../LetsTalk/channels";

export const MobileMenu = () => {
  const { setNavMobileMenuStore } = useNavMobileMenuStore();
  const { links, handleLinkClick } = useNavbar();
  const { channels } = useContactChannels();

  return (
    <div className="flex-1 flex flex-col justify-between px-6 pb-10">
      <nav className="flex flex-col">
        {links.map((link, index) => (
          <motion.button
            key={link.url}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 + index * 0.06 }}
            onClick={() => {
              setNavMobileMenuStore(false);
              // wait for the overlay to unlock scrolling before jumping
              setTimeout(() => handleLinkClick(link.url), 250);
            }}
            className="flex items-baseline gap-4 py-3 text-left"
          >
            <span className="font-mono text-sm text-accent-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-4xl sm:text-5xl font-extrabold tracking-tighter">
              {link.name}
            </span>
          </motion.button>
        ))}
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-3 mt-12"
      >
        {channels.map((channel) => (
          <a
            key={channel.name}
            href={channel.href}
            target={channel.external ? "_blank" : undefined}
            rel={channel.external ? "noopener noreferrer" : undefined}
            aria-label={channel.name}
            className="w-12 h-12 rounded-full bg-surface flex items-center justify-center hover:bg-accent transition-colors"
          >
            <channel.icon size={20} />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

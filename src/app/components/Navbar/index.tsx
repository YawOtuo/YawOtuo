"use client";

import { useNavMobileMenuStore } from "../NavMobile/components/useNavMobileMenuStore";
import Logo from "../Logo";
import useNavbar from "./useNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "@/app/lib/utils";

function Navbar() {
  const { links, activeSection, handleLinkClick } = useNavbar();
  const { setNavMobileMenuStore } = useNavMobileMenuStore();

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 px-2 py-2 rounded-full bg-surface shadow-lg shadow-black/20">
          <div className="pl-3 pr-2">
            <Logo />
          </div>
          <div className="h-4 w-px bg-surface-elevated"></div>
          <ul className="flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.url;
              return (
                <li key={link.url}>
                  <button
                    onClick={() => handleLinkClick(link.url)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                      isActive
                        ? "text-black"
                        : "text-muted hover:text-white"
                    )}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-accent rounded-full"></span>
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="w-full lg:hidden fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-50 bg-surface">
        <Logo />
        <button
          onClick={() => setNavMobileMenuStore(true)}
          className="p-2 rounded-full hover:bg-surface transition-colors"
          aria-label="Open menu"
        >
          <GiHamburgerMenu color="white" size={20} />
        </button>
      </div>
    </>
  );
}

export default Navbar;

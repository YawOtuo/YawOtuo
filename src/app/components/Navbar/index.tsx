"use client";

import { useNavMobileMenuStore } from "../NavMobile/components/useNavMobileMenuStore";
import Logo from "../Logo";
import useNavbar from "./useNavbar";
import { cn } from "@/app/lib/utils";

function Navbar() {
  const { links, activeSection, handleLinkClick } = useNavbar();
  const { setNavMobileMenuStore } = useNavMobileMenuStore();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[rgba(250,249,246,0.85)] backdrop-blur-md">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <Logo />
        </button>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {links
            .filter((link) => link.url !== "letstalk")
            .map((link) => {
              const isActive = activeSection === link.url;
              return (
                <button
                  key={link.url}
                  onClick={() => handleLinkClick(link.url)}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-200 py-1",
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-0.5 h-[3px] bg-accent rounded-full" />
                  )}
                </button>
              );
            })}
          <button
            onClick={() => handleLinkClick("letstalk")}
            className="ml-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-accent hover:text-foreground transition-colors duration-200"
          >
            Let&apos;s talk
          </button>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setNavMobileMenuStore(true)}
          className="lg:hidden font-mono text-sm py-2"
          aria-label="Open menu"
        >
          menu +
        </button>
      </div>
    </header>
  );
}

export default Navbar;

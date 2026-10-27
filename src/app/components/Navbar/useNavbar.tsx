"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "About", url: "about" },
  { name: "Experience", url: "experience" },
  { name: "Tech Stack", url: "tech-stack" },
  { name: "Projects", url: "projects" },
  { name: "Contact", url: "letstalk" },
];

function useNavbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    links.forEach((link) => {
      const element = document.getElementById(link.url);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (url: string) => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    const element = document.getElementById(url);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { links, activeSection, handleLinkClick };
}

export default useNavbar;

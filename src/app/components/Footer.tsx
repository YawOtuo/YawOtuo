"use client";

import { Container } from "./ui/section";

function Footer() {
  return (
    <footer className="w-full pt-10 pb-12">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yaw Otuo
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm text-muted hover:text-foreground transition-colors"
        >
          back to top ↑
        </button>
      </Container>
    </footer>
  );
}

export default Footer;

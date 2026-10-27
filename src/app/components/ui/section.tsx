"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full max-w-6xl mx-auto px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn("w-full py-24 lg:py-36", className)}>
      <Container>{children}</Container>
    </section>
  );
}

type SectionHeaderProps = {
  index: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({
  index,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn("mb-14 lg:mb-20", className)}
    >
      <p className="font-mono text-sm text-accent-ink mb-4">{index}</p>
      <h2 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg lg:text-xl max-w-xl mt-6">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function SectionLoader() {
  return (
    <div className="py-24 text-center font-mono text-sm text-muted-foreground animate-pulse">
      loading…
    </div>
  );
}

export function SectionError({ message }: { message: string }) {
  return <p className="py-24 text-center text-muted">{message}</p>;
}

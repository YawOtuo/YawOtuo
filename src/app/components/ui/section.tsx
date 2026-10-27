"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  padded?: boolean;
};

export function Section({
  children,
  className,
  id,
  padded = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full flex flex-col justify-center",
        padded && "py-20 lg:py-32 px-4 sm:px-6 lg:px-20",
        className
      )}
    >
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(centered && "text-center", "mb-12 lg:mb-16", className)}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

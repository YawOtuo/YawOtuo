"use client";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "group relative overflow-hidden rounded-full px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
        secondary: "border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
        tertiary: "bg-transparent text-white hover:text-gray-200 border border-white/20 hover:border-white/40"
      },
      size: {
        default: "w-fit whitespace-nowrap",
        full: "w-full"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  label: string;
  icon?: React.ReactNode;
  className?: string;
  as?: "a" | "button";
} & (
  | Omit<HTMLMotionProps<"button">, "label">
  | Omit<HTMLMotionProps<"a">, "label">
);

export default function PillButton({
  label,
  icon,
  className = "",
  variant,
  size,
  as,
  ...props
}: ButtonProps) {
  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {icon}
      <span>{label}</span>
    </span>
  );

  if (as === "a") {
    return (
      <motion.a 
        className={buttonVariants({ variant, size, className })} 
        {...motionProps} 
        {...(props as Omit<HTMLMotionProps<"a">, "label">)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={buttonVariants({ variant, size, className })} 
      {...motionProps} 
      {...(props as Omit<HTMLMotionProps<"button">, "label">)}
    >
      {content}
    </motion.button>
  );
} 
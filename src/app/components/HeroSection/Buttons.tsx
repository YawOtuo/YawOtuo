"use client"
import PillButton from "../PillButton";

interface ButtonProps {
  variant?: "contact" | "resume" | "secondary";
  label: string;
  onClick?: () => void;
}

const HSButtons = ({ variant = "contact", label, onClick }: ButtonProps) => {
  if (variant === "contact") {
    return (
      <PillButton
        label={label}
        onClick={onClick}
        variant="secondary"
        size="full"
        icon={
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-black transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        }
      />
    );
  }

  if (variant === "resume") {
    return (
      <PillButton
        variant="tertiary"
        size="full"
        label={label}
        onClick={onClick}
      />
    );
  }

  return (
    <PillButton
      variant="tertiary"
      size="full"
      label={label}
      onClick={onClick}
    />
  );
};

export default HSButtons;

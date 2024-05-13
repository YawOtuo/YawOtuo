import React from "react";
import { Textarea } from "@nextui-org/input";

export interface TextAreaProps {
  label?: string;
  placeholder?: string;
  className?: string;
}

export default function TextArea({
  label,
  placeholder,
  className,
}: TextAreaProps) {
  return (
    <Textarea
      label={label}
      placeholder={placeholder}
      className={className}
      classNames={{
        inputWrapper: [
          "bg-transparent",
          "border-2 border-white",
          "focus:bg-transparent",
          "hover:bg-transparent",
        ],
      }}
    />
  );
}

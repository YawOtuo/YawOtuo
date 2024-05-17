import React from "react";
import { Textarea } from "@nextui-org/input";

export interface TextAreaProps {
  label?: string;
  placeholder?: string;
  className?: string;
  name: string;
  handleChange: any;
  value: any;
}

export default function TextArea({
  label,
  placeholder,
  className,
  name,
  handleChange,
  value,
}: TextAreaProps) {
  return (
    <Textarea
      name={name}
      onChange={handleChange}
      value={value}
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

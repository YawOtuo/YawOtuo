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
    <div className="flex flex-col gap-3">
      <p className="text-xl">{label}</p>
      <textarea
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        className={"py-2 bg-transparent rounded-xl border-2 border-white px-2 text-2xl h-[150px]"}
      />
    </div>
  );
}

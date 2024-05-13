import { Input } from "@nextui-org/input";

export interface TextInputProps {
  type?: "email" | "password" | "text";
  label?: string;
  labelPlacement?: "outside" | "outside-left" | "inside" | undefined;
  className?: string;
  color?: any
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  label,
  labelPlacement = "outside",
  className,
  color = "default"
}) => {
  return (
    <div className={className}>

      <Input type={type} label={label} labelPlacement={labelPlacement} color={color}
      classNames={{
        inputWrapper:[
          "bg-transparent",
          "border-2 border-white",
          "focus:bg-transparent",
          "hover:bg-transparent"
        
        ]
      }}
      />

    </div>
  );
};

export default TextInput;

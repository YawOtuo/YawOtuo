import { Input } from "@nextui-org/input";

export interface TextInputProps {
  type?: "email" | "password" | "text";
  label?: string;
  labelPlacement?: "outside" | "outside-left" | "inside" | undefined;
  className?: string;
  color?: any
  name : string
  handleChange: any
  value : any
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  label,
  labelPlacement = "outside",
  className,
  color = "default",
  handleChange, 
  name,
  value
}) => {
  return (
    <div className={className}>

      <Input name={name} type={type} label={label} labelPlacement={labelPlacement} color={color}
      onChange={handleChange}
      value={value}
      className="!text-white"
      classNames={{
        inputWrapper:[
          "bg-transparent",
          "border-2 border-white",
          "focus:bg-transparent",
          "hover:bg-transparent",
          "text-white"
        
        ]
      }}
      />

    </div>
  );
};

export default TextInput;

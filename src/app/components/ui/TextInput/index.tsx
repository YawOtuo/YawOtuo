export interface TextInputProps {
  type?: "email" | "password" | "text";
  label?: string;
  labelPlacement?: "outside" | "outside-left" | "inside" | undefined;
  className?: string;
  color?: any;
  name: string;
  handleChange: any;
  value: any;
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  label,
  labelPlacement = "outside",
  className,
  color = "default",
  handleChange,
  name,
  value,
}) => {
  return (
    <div className={`${className} flex flex-col gap-1`}>

      <p className="text-base  ">{label}</p>

      <input
        name={name}
        type={type}
        color={color}
        onChange={handleChange}
        value={value}
        className="!text-white bg-transparent border-b-[1px] border-white py-1 px-5 text-2xl"
      />
    </div>
  );
};

export default TextInput;

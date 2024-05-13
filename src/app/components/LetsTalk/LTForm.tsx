import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import LTButtons from "./LTButtons";

const links = [
  { name: "google", url: "https://www.google.com/" },
  { name: "facebook", url: "http://www.facebook.com" },
  { name: "twitter", url: "https://twitter.com/" },
];

function LTForm() {
  return (
    <div className="w-full bg-transparent max-w-[700px]">
      <div className="flex flex-col gap-5">
        <TextInput label="Full Name" />
        <TextInput label="Email" type="email" />
        <TextArea label="Message" />
      </div>

      <div className="flex items-center gap-5 mt-5 ">
        {links?.map((r, index: number) => (
          <LTButtons key={index} label={r?.name} />
        ))}
      </div>
    </div>
  );
}

export default LTForm;

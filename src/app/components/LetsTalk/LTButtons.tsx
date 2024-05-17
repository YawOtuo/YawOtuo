import Image from "next/image";

type Props = {
  label: string;
  onClick?: any;
  variant?: any;
  url: string;
};

function LTButtons({ variant, label, url }: Props) {
  const options: any = {
    contact:
      "bg-yellow-600 text-purple1 font-bold hover:bg-purple1 hover:text-white",
    resume:
      "border-2 border-yellow-600 font-semibold hover:bg-yello hover:text-white hover:border-purple1",
  };

  return (
    <a className="w-[50px] hover:scale-[1.5] transition-all " href={url}>
      <div className="relative w-full aspect-square max-w-[30px]">
        <Image src={label} fill alt="Link" />
      </div>
    </a>
  );
}

export default LTButtons;

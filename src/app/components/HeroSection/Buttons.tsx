"use client"

type Props = {
  label: string;
  onClick?: any;
  variant: any;
};

function HSButtons({ variant, label, onClick }: Props) {
  const options: any = {
    contact: "bg-yellow-600 text-purple1 font-bold  transition-all hover:text-white",
    resume: "border-2 border-yellow-600 font-semibold transition-all text-white ",
  };
  return (
    <div className="">
      <button className={`${options[variant]} px-6 py-3 rounded-md`} onClick={onClick}>{label}</button>
    </div>
  );
}

export default HSButtons;

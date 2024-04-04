type Props = {
  label: string;
  onClick?: any;
  variant: any;
};

function HSButtons({ variant, label }: Props) {
  const options: any = {
    contact: "bg-yellow-600 text-purple1 font-bold hover:bg-purple1 hover:text-white",
    resume: "border-2 border-yellow-600 font-semibold hover:bg-yello hover:text-white hover:border-purple1",
  };
  return (
    <div>
      <button className={`${options[variant]} px-6 py-3 rounded-md`}>{label}</button>
    </div>
  );
}

export default HSButtons;

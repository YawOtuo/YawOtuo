type Props = {
  label: string;
  onClick?: any;
  variant: any;
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
    <div>
      <a href={url} className={`${options[variant]} px-6 py-3 rounded-md`}>
        {label}
      </a>
    </div>
  );
}

export default LTButtons;

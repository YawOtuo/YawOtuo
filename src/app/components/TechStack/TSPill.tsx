type Props = {
  data: string;
};

function TSPill({ data }: Props) {
  return (
    <div className="bg-transparent border-2 lg:border-[5px] border-white px-10 lg:px-20 py-1 lg:py-2 rounded-3xl text-xs lg:text-xl uppercase whitespace-nowrap hover:scale-[1.15] transition-all cursor-pointer">
      <p>{data}</p>
    </div>
  );
}

export default TSPill;

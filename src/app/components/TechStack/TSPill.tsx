type Props = {
  data: string;
};

function TSPill({ data }: Props) {
  return (
    <div className="bg-transparent border-[5px] border-white px-20 py-2 rounded-3xl text-xl uppercase whitespace-nowrap">
      <p>{data}</p>
    </div>
  );
}

export default TSPill;

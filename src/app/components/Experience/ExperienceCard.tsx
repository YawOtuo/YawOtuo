import Image from "next/image";

import { LuCompass } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";

type ExperienceType = {
  logo: string;
  title: string;
  position: string;
  duration: string;
  company: string;
};

type Props = {
  data: ExperienceType;
};

function ExperienceCard({ data }: Props) {
  return (
    <div className="border-white  border-[5px] rounded-2xl w-fit px-10 py-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5 text-lg">
          {/* <div className="relative w-full aspect-square max-w-[100px]">
            <Image src={data?.logo} fill alt="log" />{" "}
          </div> */}
          <LuCompass color="white" size="30" />

          <p className="">{data?.title}</p>
          <p>@ {data?.company}</p>
        </div>
        <div className="flex gap-5 items-center text-md">
          <MdOutlinePersonOutline color="white" />
          <p>{data?.position}</p>
        </div>{" "}
        <p>{data?.position}</p>
        <p>{data?.position}</p>
        <p>{data?.duration}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;

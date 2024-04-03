import Image from "next/image";

import { LuCompass } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import RevealSlideEnterTop from "../framer/reveal-slide-enter-top";
import RevealSlideEnter from "../framer/reveal-slide-enter";

type ExperienceType = {
  logo: string;
  title: string;
  position: string;
  duration: string;
  company: string;
};

type Props = {
  data: ExperienceType;
  reverseSlide : boolean
};

function ExperienceCard({ data, reverseSlide }: Props) {
  return (
    <RevealSlideEnter reverse={reverseSlide}>
      <div className="border-white  border-[5px] rounded-2xl w-fit px-10 py-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-1 text-lg">
            {/* <div className="relative w-full aspect-square max-w-[100px]">
              <Image src={data?.logo} fill alt="log" />{" "}
            </div> */}
            <div>
              <LuCompass color="white" size="30" />
            </div>
            <p className=" pl-2 font-semibold">{data?.role}</p>
            <p className=" font-semibold text-base">@ {data?.company}</p>
          </div>
          {/* <div className="flex gap-5 items-center text-md">
            <MdOutlinePersonOutline color="white" />
            <p>{data?.company}</p>
          </div>{" "} */}
          <div className="flex gap-3 items-start text-sm text-yellow-600">
            {" "}
            <p>{data?.startDate}</p>
            <p>-</p>
            <p>{data?.endDate}</p>
          </div>
          <p>{data?.description}</p>
          <p>{data?.duration}</p>
        </div>
      </div>
    </RevealSlideEnter>
  );
}

export default ExperienceCard;

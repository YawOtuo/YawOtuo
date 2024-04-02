import { urlFor } from "@/app/utils/sanity-image";
import Image from "next/image";

import { LuCompass } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";

type ProjectType = {
  title: string;
  description: string;
  technologies: [];
  image: any;
};

type Props = {
  data: ProjectType;
};

function ProjectCard({ data }: Props) {
  return (
    <div className="border-white  border-[5px] rounded-2xl w-fit  pb-10 ">
      <div className="flex flex-col gap-5">
        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-y-2xl">
          <Image
            src={urlFor(data?.image)?.url()}
            fill
            alt="log"
            objectFit="cover"
            objectPosition="center"
          />{" "}
        </div>
        <div className="flex flex-col px-5 lg:px-10">
          <div className="flex items-center gap-1 text-base">
            <p className=" font-semibold">{data?.title}</p>
      
          </div>

          <p className="text-xs lg:text-base">{data?.description}</p>
          <div className="flex flex-wrap gap-5">
            {data?.technologies?.map((r : any, index: number) => (
              <p className="text-xs" key={index}>{r}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

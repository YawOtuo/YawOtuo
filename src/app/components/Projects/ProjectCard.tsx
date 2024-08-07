import { urlFor } from "@/app/utils/sanity-image";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
    <div className="border-white  border-[5px] rounded-2xl w-full  pb-5 lg:max-w-[40vw]">

      <div className="flex flex-col gap-5">
        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-t-2xl max-h-[40vh]">
          <Image
            src={urlFor(data?.image)?.url()}
            fill
            alt="log"
            objectFit="cover"
            objectPosition="center"
          />{" "}
        </div>
        <div className="flex flex-col px-3 lg:px-5 py-2 lg:py-5 ">
          <div className="flex items-center gap-1 text-base">
            <p className=" font-semibold">{data?.title}</p>
          </div>

          <p className="text-xs lg:text-sm 2xl:!leading-6 h-[20vh] overflow-y-scroll">{data?.description}</p>
          <div className="flex flex-wrap gap-5">
            {data?.technologies?.map((r: any, index: number) => (
              <p className="text-xs" key={index}>
                {r}
              </p>
            ))}
          </div>

          <div className="flex items-center gap-5 text-yellow-600 font-semibold text-xs pt-1 lg:pt-4">
            {data?.link && <a 
            target="_blank"
            href={data?.link}
            className="text-green-500"
            >View Project</a>}{" "}
            {data?.githubLink && (
              <a
                target="_blank"
                href={data?.githubLink}
                className="flex items-center gap-1">
                <FaGithub size={15} color="" />
                View Code
              </a>
            )}
            {data?.youtubeLink && (
              <a
                target="_blank"
                href={data?.youtubeLink}
                className="flex items-center gap-1">
                <FaYoutube size={20} color="red" />
                Youtube Link
              </a>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

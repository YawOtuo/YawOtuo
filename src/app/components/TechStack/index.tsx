"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import useAboutData from "../About/useAbout";
import TSPill from "./TSPill";
import { Autoplay, FreeMode } from "swiper/modules";
import LottieFileBuilder from "../LottieFileBuilder";

import developer1Json from "@/app/lotties/rocket1.json";

// function chunkArray(array: any, chunkSize: any) {
//   const chunks = [];
//   for (let i = 0; i < array?.length; i += chunkSize) {
//     chunks.push(array.slice(i, i + chunkSize));
//   }
//   return chunks;
// }

function TechStack() {
  const { aboutData } = useAboutData();

  // const chunkedTData = chunkArray(aboutData?.techStack, 7); // Change 5 to your desired chunk size

  return (
    <div className="flex flex-col gap-5 w-full items-start min-h-[90vh] justify-center">
      <div className="flex items-center gap-5">
        <p className="title mb-10 wrapper whitespace-nowrap">Tech Stack</p>

        {/* <LottieFileBuilder
          animationData={developer1Json}
          width={200}
          height={200}
        /> */}
      </div>{" "}
      <div className="flex gap-5 lg:gap-10 items-start w-full flex-wrap wrapper">
        {aboutData?.techStack?.map((tech, index) => (
          <div key={index} className="flex ">
            <TSPill  data={tech} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;

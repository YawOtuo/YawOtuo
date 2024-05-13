"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import useAboutData from "../About/useAbout";
import TSPill from "./TSPill";
import { Autoplay, FreeMode } from "swiper/modules";
import LottieFileBuilder from "../LottieFileBuilder";

import developer1Json from "@/app/lotties/rocket1.json";

function chunkArray(array: any, chunkSize: any) {
  const chunks = [];
  for (let i = 0; i < array?.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function TechStack() {
  const { aboutData } = useAboutData();

  const chunkedTData = chunkArray(aboutData?.techStack, 7); // Change 5 to your desired chunk size

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
      <div className="flex flex-col gap-10 items-start w-full">
        {chunkedTData.map((chunk, index) => (
          <Swiper
            key={index}
            rewind
            className="w-full"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // Define breakpoints here

              768: { slidesPerView: 1 }, // Example breakpoint for screen width <= 768px
              1024: { slidesPerView: "auto" }, // Example breakpoint for screen width <= 1024px
            }}
            modules={[FreeMode, Autoplay]}
            spaceBetween={50}>
            {chunk.map((tech: any, idx: number) => (
              <SwiperSlide key={index} className="!w-fit">
                <div className="w-fit" key={index}>
                  <div key={idx} className="">
                    <TSPill data={tech} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </div>
  );
}

export default TechStack;

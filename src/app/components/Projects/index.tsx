"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import ProjectsCard from "./ProjectCard";
import useProjectsData from "./useProjectsData";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import ProjectsQuote from "./ProjectsQuotes";
import RevealSlideEnter from "../framer/reveal-slide-enter";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import developer1Json from "@/app/lotties/rocket2.json";
import LottieFileBuilder from "../LottieFileBuilder";
import { useRef } from "react";

function Projects() {
  const { ProjectsData, loading, error } = useProjectsData();
  const ref = useRef<SwiperRef>(null);
  return (
    <div className="flex flex-col gap-10 w-full ">
      <div className="flex items-center justify-start">
        <h1 className="title wrapper  hidden lg:flex">Projects</h1>

        <div className="hidden lg:flex">
          <LottieFileBuilder
            animationData={developer1Json}
            width={500}
            height={"100%"}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 wrapper w-full">
        <div className="lg:hidden">
          <LottieFileBuilder
            animationData={developer1Json}
            width={"100%"}
            height={"100%"}
          />
        </div>

        <h1 className="title  lg:hidden">Projects</h1>

        <ProjectsQuote />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 px-0 min-h-[60vh]">
        <Swiper
          ref={ref}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            // slideShadows: true,
          }}
          className="w-full !px-3 !lg:px-20"
          navigation={{
            nextEl: ".custom-l-next",
            prevEl: ".custom-l-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-l-pagination",
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          spaceBetween={50}>
          {ProjectsData?.map((r, index) => (
            <SwiperSlide className="lg:!w-fit !flex justify-center" key={index}>
              <ProjectsCard data={r} />
            </SwiperSlide>
          ))}
          <div
            className={`hidden lg:flex custom-l-prev absolute hover:scale-[1.05] transition-all
            hover:rotate-[360deg] left-0
            lg:left-[10%] z-10  h-6 lg:h-10 w-6 lg:w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-white border-2 lg:border-[4px] top-[38%]  translate-y-[-38%] bg-purple2`}>
            <MdChevronLeft className="text-lg text-white" />
          </div>

          {/* <div
            className={`custom-l-pagination bottom-40 h-20 w-full space-x-3 text-center `}></div> */}

          <div
            className={`hidden custom-l-next 
            hover:scale-[1.05] transition-all
            hover:rotate-[360deg] right-0
            absolute lg:right-[10%] z-10 lg:flex h-6 lg:h-10 w-6 lg:w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-purple2 border-white  border-2 lg:border-[4px] top-[38%] translate-y-[-38%]`}>
            <MdChevronRight className="text-lg text-white" />
          </div>
        </Swiper>
      </div>
      <div className="flex  items-center w-full gap-5 justify-center">
        <button
          className="swiper-mobile-button"
          onClick={() => ref.current?.swiper.slidePrev()}>
          <MdChevronLeft className="text-white" />
        </button>{" "}
        <button
          className="swiper-mobile-button "
          onClick={() => ref.current?.swiper.slideNext()}>
          <MdChevronRight className="text-white" />
        </button>{" "}
      </div>
    </div>
  );
}

export default Projects;

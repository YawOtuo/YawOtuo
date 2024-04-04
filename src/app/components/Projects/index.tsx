"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectsCard from "./ProjectCard";
import useProjectsData from "./useProjectsData";
import { Navigation, Pagination } from "swiper/modules";
import ProjectsQuote from "./ProjectsQuotes";
import RevealSlideEnter from "../framer/reveal-slide-enter";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Projects() {
  const { ProjectsData, loading, error } = useProjectsData();
  return (
    <div className="flex flex-col gap-10 w-full ">
      <h1 className="title wrapper">Projects</h1>

      <ProjectsQuote />

      <div className="flex items-center justify-center gap-10 px-0 ">
        <Swiper
          breakpoints={{
            // Define breakpoints here

            768: { slidesPerView: 1 }, // Example breakpoint for screen width <= 768px
            1024: { slidesPerView: 2 }, // Example breakpoint for screen width <= 1024px
            1460: { slidesPerView: 3 }, // Example breakpoint for screen width <= 1024px
          }}
          className="w-full !px-8 !lg:px-20"
          navigation={{
            nextEl: ".custom-l-next",
            prevEl: ".custom-l-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-l-pagination",
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={50}>
          {ProjectsData?.map((r, index) => (
            <SwiperSlide className="w-full" key={index}>
              <RevealSlideEnter>
                <div className="flex justify-center w-full">
                  <ProjectsCard data={r} />
                </div>{" "}
              </RevealSlideEnter>{" "}
            </SwiperSlide>
          ))}
          <div
            className={`custom-l-prev absolute left-0 z-10 flex h-6 lg:h-10 w-6 lg:w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-white border-2 lg:border-[4px] top-[38%] translate-y-[-38%] bg-purple2`}>
            <MdChevronLeft className="text-lg text-white" />
          </div>

          {/* <div
            className={`custom-l-pagination bottom-40 h-20 w-full space-x-3 text-center `}></div> */}

          <div
            className={`custom-l-next absolute right-0 z-10 flex h-6 lg:h-10 w-6 lg:w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-purple2 border-white  border-2 lg:border-[4px] top-[38%] translate-y-[-38%]`}>
            <MdChevronRight className="text-lg text-white" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;

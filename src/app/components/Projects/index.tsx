"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectsCard from "./ProjectCard";
import useProjectsData from "./useProjectsData";
import { Navigation, Pagination } from "swiper/modules";
import ProjectsQuote from "./ProjectsQuotes";
import RevealSlideEnter from "../framer/reveal-slide-enter";

function Projects() {
  const { ProjectsData, loading, error } = useProjectsData();
  return (
    <div className="flex flex-col gap-10 w-full">
      <h1 className="title">Projects</h1>

      <ProjectsQuote />

      <div className="flex items-center justify-center gap-10 px-0 lg:px-20">
        <Swiper
          breakpoints={{
            // Define breakpoints here

            768: { slidesPerView: 1 }, // Example breakpoint for screen width <= 768px
            1024: { slidesPerView: 2 }, // Example breakpoint for screen width <= 1024px
            1460: { slidesPerView: 3 }, // Example breakpoint for screen width <= 1024px
          }}
          className="w-full"
          pagination
          modules={[Navigation, Pagination]}
          spaceBetween={50}>
          {ProjectsData?.map((r, index) => (
            <SwiperSlide className="w-full" key={index}>
              <RevealSlideEnter>
                <ProjectsCard data={r} />
              </RevealSlideEnter>{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;

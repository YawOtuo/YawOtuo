"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import ProjectsCard from "./ProjectCard";
import useProjectsData from "./useProjectsData";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import ProjectsQuote from "./ProjectsQuotes";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import developer1Json from "@/app/lotties/rocket2.json";
import LottieFileBuilder from "../LottieFileBuilder";
import { useRef } from "react";
import { motion } from "framer-motion";

function Projects() {
  const { ProjectsData, loading, error } = useProjectsData();
  const ref = useRef<SwiperRef>(null);

  if (loading) {
    return (
      <div className="w-full flex gap-2 flex-col min-h-[60vh] justify-center py-20 lg:py-0 px-4 sm:px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex gap-2 flex-col min-h-[60vh] justify-center py-20 lg:py-0 px-4 sm:px-6 lg:px-20">
        <p className="text-red-400">Error loading projects. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 min-h-[60vh] justify-center py-20 lg:py-0">
      
      {/* Section Header - Full Width */}
      <div className="w-full px-4 sm:px-5 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-between"
        >
          <h2 className="title text-white">Projects</h2>
          <div className="hidden lg:flex">
            <LottieFileBuilder
              animationData={developer1Json}
              width={300}
              height="100%"
            />
          </div>
        </motion.div>
      </div>

      {/* Project Quote - Full Width */}
      <div className="w-full px-4 sm:px-5 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6"
        >
          <div className="lg:hidden">
            <LottieFileBuilder
              animationData={developer1Json}
              width="100%"
              height="100%"
            />
          </div>
          <ProjectsQuote />
        </motion.div>
      </div>

      {/* Enhanced Carousel - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full relative"
      >
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
            slideShadows: false,
          }}
          className="w-full !px-4 sm:!px-5 !lg:px-20"
          navigation={{
            nextEl: ".custom-l-next",
            prevEl: ".custom-l-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-l-pagination",
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          spaceBetween={20}
          breakpoints={{
            640: {
              spaceBetween: 25,
            },
            1024: {
              spaceBetween: 30,
            },
          }}
        >
          {ProjectsData?.map((project, index) => (
            <SwiperSlide className="!w-[280px] sm:!w-[320px] lg:!w-[400px] !flex justify-center" key={index}>
              <ProjectsCard data={project} index={index} />
            </SwiperSlide>
          ))}
          
          {/* Enhanced Navigation Buttons */}
          <div className="hidden lg:flex custom-l-prev absolute hover:scale-110 transition-all duration-300 hover:rotate-180 left-5 lg:left-10 z-10 h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-yellow-500 bg-gray-900/80 backdrop-blur-sm top-1/2 transform -translate-y-1/2">
            <MdChevronLeft className="text-xl text-yellow-500" />
          </div>

          <div className="hidden lg:flex custom-l-next absolute hover:scale-110 transition-all duration-300 hover:-rotate-180 right-5 lg:right-10 z-10 h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-yellow-500 bg-gray-900/80 backdrop-blur-sm top-1/2 transform -translate-y-1/2">
            <MdChevronRight className="text-xl text-yellow-500" />
          </div>
        </Swiper>
      </motion.div>

      {/* Mobile Navigation - Full Width */}
      <div className="w-full flex items-center justify-center gap-4 px-4 sm:px-5 lg:px-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="swiper-mobile-button"
          onClick={() => ref.current?.swiper.slidePrev()}
        >
          <MdChevronLeft className="text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="swiper-mobile-button"
          onClick={() => ref.current?.swiper.slideNext()}
        >
          <MdChevronRight className="text-white" />
        </motion.button>
      </div>

      {/* View More CTA - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full px-4 sm:px-5 lg:px-20"
      >
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-4 sm:p-6 border border-yellow-500/20 text-center">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-yellow-500 mb-2">
            Want to see more projects?
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4">
            Check out my GitHub for more projects and contributions
          </p>
          <motion.a
            href="https://github.com/YawOtuo"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 text-sm sm:text-base"
          >
            View GitHub Profile
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;

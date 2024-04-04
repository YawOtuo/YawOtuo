"use client";
import RevealSlideEnter from "../framer/reveal-slide-enter";
import ExperienceCard from "./ExperienceCard";
import useExperienceData from "./useExperience";

function Experience() {
  const { experienceData, loading, error } = useExperienceData();
  return (
    <div className="flex flex-col gap-10 wrapper">
      <RevealSlideEnter>
        <h1 className="title">Experience</h1>
      </RevealSlideEnter>{" "}
      <div className="hidden lg:flex flex-col">
        {experienceData?.map((r, index) => (
          <div
            className={`flex w-full gap-5
            ${index % 2 == 0 ? " justify-center" : "justify-end"}
            `}
            key={index}>
            <div
              className={`${
                index % 2 !== 0 ? "order-3 " : ""
              } max-w-[50%] w-full`}>
              <ExperienceCard data={r} reverseSlide={index % 2 !== 0} />
            </div>{" "}
            <div
              className={` flex items-center  border-white  " : "flex-row-reverse border-[2.5px]  ${
                index % 2 !== 0 ? "order-2 " : ""
              } `}></div>
            <div className="w-full "></div>
          </div>
        ))}
      </div>
      <div className="flex  flex-col gap-10 lg:hidden">
        {experienceData?.map((r, index) => (
          <div
            className={`flex flex-col gap-10
            `}
            key={index}>
            <div className={index % 2 !== 0 ? "order-2 " : ""}>
              <ExperienceCard data={r} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

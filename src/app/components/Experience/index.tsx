"use client"
import ExperienceCard from "./ExperienceCard";
import useExperienceData from "./useExperience";

function Experience() {
    const {experienceData, loading, error} = useExperienceData()
  return (
    <div className="flex flex-col gap-10 ">
      <h1 className="title">Experience</h1>
      <div className="hidden lg:flex flex-col gap-10">
        {experienceData?.map((r, index) => (
          <div
            className={`grid grid-cols-2
            ${index % 2 !== 0 ? " justify-items-start" : "justify-items-end"}
            `}
            key={index}>
            <div className={index % 2 !== 0 ? "order-2 align-self" : ""}>
              <ExperienceCard data={r} reverseSlide={index % 2 !== 0} />
            </div>{" "}
            <div></div>
          </div>
        ))}
      </div>
      <div className="flex  flex-col gap-10 lg:hidden">
        {experienceData?.map((r, index) => (
          <div
            className={`flex flex-col gap-10
            `}
            key={index}>
            <div className={index % 2 !== 0 ? "order-2 align-self" : ""}>
              <ExperienceCard data={r} />
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

import ExperienceCard from "./ExperienceCard";
import { mockExperience } from "./data";

function Experience() {
  return (
    <div className="flex flex-col gap-10 ">
      <h1 className="title">Experience</h1>
      <div className="hidden lg:flex flex-col">
        {mockExperience.map((r, index) => (
          <div
            className={`grid grid-cols-2
            ${index % 2 !== 0 ? " justify-items-start" : "justify-items-end"}
            `}
            key={index}>
            <div className={index % 2 !== 0 ? "order-2 align-self" : ""}>
              <ExperienceCard data={r} />
            </div>{" "}
            <div></div>
          </div>
        ))}
      </div>
      <div className="flex  flex-col gap-10 lg:hidden">
        {mockExperience.map((r, index) => (
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

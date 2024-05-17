"use client";
import useAboutData from "./useAbout";

function About() {
  const { aboutData } = useAboutData();
  return (
    <div className="wrapper flex gap-2 flex-col min-h-[110vh] lg:w-[80%] justify-center py-20 lg:py-0">
      <p className="title">About Me</p>

      {/* Check if aboutData exists and if generalInfo is an array */}
      {aboutData && Array.isArray(aboutData.generalInfo) && (
        <div className="lg:w-[90%] lg:leading-loose">
       
          {aboutData.generalInfo.map((info, index) => (
            <p key={index} className="pt-7">{info}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default About;

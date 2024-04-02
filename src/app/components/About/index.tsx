"use client"
import useAboutData from "./useAbout";

function About() {
  const {aboutData } =  useAboutData()
  return (
    <div className="flex gap-10 flex-col min-h-[80vh] lg:w-[70%]">
      <p className="title">About Me</p>

      <p className="lg:w-[70%] lg:leading-loose">
      {aboutData?.generalInfo}   </p>
    </div>
  );
}

export default About;
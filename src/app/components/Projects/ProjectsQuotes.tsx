import RevealSlideEnter from "../framer/reveal-slide-enter";

function ProjectsQuote() {
  return (
    <RevealSlideEnter>
      <div className="min-h-[30vh] lg:h-[80vh] flex flex-col justify-center  mb-20  w-full">
        <>
          <div className="flex flex-col gap-5 ">
            <blockquote className="text-xl lg:text-5xl lg:leading-[80px] text-yellow2 w-full font-semibold">
              {" "}
              &quot; Projects are like seeds;
              <br  />
              they require nurturing, patience, and dedication to grow into
              something remarkable. &quot;
            </blockquote>
            <p className="text-sm text-yegllow-600 ">
              Here are a few of my latest projects
            </p>
          </div>
        </>
      </div>
    </RevealSlideEnter>
  );
}

export default ProjectsQuote;

import RevealSlideEnter from "../framer/reveal-slide-enter";

function ProjectsQuote() {
  return (
    <RevealSlideEnter>
      <div className="h-[30vh] lg:h-[80vh] flex flex-col justify-center lg:w-[75%] mb-20 lg:mb-0">
        <>
          <div className="flex flex-col gap-5 ">
            <blockquote className="text-xl lg:text-5xl lg:leading-[80px] text-yellow-600 w-full">
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

import RevealSlideEnter from "./framer/reveal-slide-enter";

function HeroSection() {
  return (
    <RevealSlideEnter>
      <div className="flex flex-col items-start lg:items-start justify-center text-white h-[100vh] gap-4 lg:gap-2 px-5 lg:px-20 lg:w-[80%]">
        <div className="flex flex-col gap-1">
          <h1
            className="text-4xl lg:text-8xl font-bold
          
          ">
            Hi! I am Yaw Otuo
          </h1>

          <h3 className="text-xl font-semibold">
            &lt; Software Engineer - ML and AI Enthusiast - People Person /&gt;
          </h3>
        </div>
        {/* <p className="text-base ">
          Give a man a program, frustrate him for a day. Teach a man to program,
          frustrate him for a lifetime.
        </p> */}
      </div>
    </RevealSlideEnter>
  );
}

export default HeroSection;

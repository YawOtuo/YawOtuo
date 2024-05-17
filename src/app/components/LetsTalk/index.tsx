import LottieFileBuilder from "../LottieFileBuilder";
import LTButtons from "./LTButtons";
import developer1Json from "@/app/lotties/talk1.json";
import LTForm from "./LTForm";

function LetsTalk() {
  return (
    <div className="wrapper py-20">
      <h1 className="title">Let&apos;s talk</h1>

      <div className="grid grid-cols-2 mt-3 lg:mt-0 gap-7 lg:gap-20">

        <div className="col-span-2 lg:col-span-1">

          <LottieFileBuilder
            animationData={developer1Json}
            width={"100%"}
            height={"100%"}
          />
        </div>

        <div className="flex items-center w-full col-span-2 lg:col-span-1">
          <LTForm />
        </div>
      </div>
    </div>
  );
}

export default LetsTalk;

"use client"
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-800/20 rounded-lg animate-pulse" />
});

type Props = {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  rendererSettings?: any;
  height?: number | string;
  width?: number | string;
};

export default function LottieFileBuilder({
  animationData,
  loop = true,
  autoplay = true,
  rendererSettings = {
    preserveAspectRatio: "xMidYMid slice",
  },
  height = 400,
  width = 400,
}: Props) {
  return (
    <div className="w-full">
      <Lottie 
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width, height }}
        rendererSettings={rendererSettings}
      />
    </div>
  );
}

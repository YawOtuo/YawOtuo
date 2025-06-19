"use client"
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import("react-lottie"), { 
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
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationData,
    rendererSettings: rendererSettings,
  };

  return (
    <div className="w-full">
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
}

"use client"
import { useState, useEffect } from 'react';

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Temporary placeholder while we fix the Lottie issue
  return (
    <div 
      className="w-full h-full bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg flex items-center justify-center border border-yellow-500/20"
      style={{ width, height }}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">🎨</div>
        <span className="text-gray-400 text-sm">Animation Placeholder</span>
      </div>
    </div>
  );
}

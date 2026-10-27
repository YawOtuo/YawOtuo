"use client"
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const LottiePlayer = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => ({ default: mod.Player })), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-surface rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-2">🎨</div>
        <span className="text-muted text-sm">Loading...</span>
      </div>
    </div>
  )
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
  const [isClient, setIsClient] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div 
        className="w-full h-full bg-surface rounded-lg flex items-center justify-center"
        style={{ width, height }}
      >
        <div className="text-center">
          <div className="text-4xl mb-2">🎨</div>
          <span className="text-muted text-sm">Loading...</span>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div 
        className="w-full h-full bg-surface rounded-lg flex items-center justify-center"
        style={{ width, height }}
      >
        <div className="text-center">
          <div className="text-4xl mb-2">⚠️</div>
          <span className="text-muted text-sm">Animation unavailable</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full" style={{ width, height }}>
      <LottiePlayer
        src={animationData}
        className="w-full h-full"
        loop={loop}
        autoplay={autoplay}
        style={{ width, height }}
      />
    </div>
  );
}

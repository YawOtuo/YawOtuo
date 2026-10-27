"use client";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative w-full max-w-[280px] lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden bg-surface-elevated">
      <Image
        src="/me.jpg"
        alt="Yaw Otuo - Full Stack Developer"
        fill
        sizes="(min-width: 1024px) 340px, 280px"
        className="object-cover object-top"
        priority
      />
    </div>
  );
}

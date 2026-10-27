"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import type { IconType } from "react-icons";
import useAboutData from "../About/useAbout";

export type ContactChannel = {
  name: "Email" | "WhatsApp" | "LinkedIn" | "GitHub";
  value: string;
  href: string;
  external: boolean;
  icon: IconType;
};

const socialChannels: ContactChannel[] = [
  {
    name: "WhatsApp",
    value: "+233 20 377 5123",
    href: "https://wa.me/+233203775123",
    external: true,
    icon: FaWhatsapp,
  },
  {
    name: "LinkedIn",
    value: "in/yaw-otuo",
    href: "https://www.linkedin.com/in/yaw-otuo/",
    external: true,
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    value: "@YawOtuo",
    href: "https://github.com/YawOtuo",
    external: true,
    icon: FaGithub,
  },
];

/**
 * Contact channels. The email address comes from Sanity (About -> Contact
 * email); until it is set, the Email channel is simply left out.
 */
export function useContactChannels(): {
  email: ContactChannel | null;
  channels: ContactChannel[];
  socials: ContactChannel[];
} {
  const { aboutData } = useAboutData();
  const address = aboutData?.email?.trim();

  const email: ContactChannel | null = address
    ? {
        name: "Email",
        value: address,
        href: `mailto:${address}`,
        external: false,
        icon: LuMail,
      }
    : null;

  return {
    email,
    socials: socialChannels,
    channels: email ? [email, ...socialChannels] : socialChannels,
  };
}

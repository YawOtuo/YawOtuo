import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import "swiper/css/effect-coverflow";
import MobileMenuWrapper from "./components/MobileMenuwrapper";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yaw Otuo",
  description: "FullStack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${mont.className} max-w-8xl mx-auto `}>
        <MobileMenuWrapper>{children}</MobileMenuWrapper>
      </body>
    </html>
  );
}

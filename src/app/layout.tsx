import type { Metadata } from "next";
import "./globals.css";
import MobileMenuWrapper from "./components/MobileMenuwrapper";

export const metadata: Metadata = {
  title: "Yaw Otuo | Full Stack Developer",
  description:
    "Full Stack Developer & AI Enthusiast crafting efficient, scalable solutions for startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased text-foreground">
        <MobileMenuWrapper>{children}</MobileMenuWrapper>
      </body>
    </html>
  );
}

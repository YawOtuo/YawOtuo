"use client"
import { useRef } from "react";
import Link from "next/link";

const links = [
  { name: "About", url: "about" },
  { name: "Experience", url: "experience" },
  { name: "Tech Stack", url: "tech-stack" },
  { name: "Projects", url: "projects" },
];

function Navbar() {
  const handleLinkClick = (url) => {
    console.log('first')
    const element = document.getElementById(url);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <div className="w-full justify-between hidden  lg:flex items-center mt-5 px-5">
      <div className="bg-white p-1 rounded-full aspect-square text-purple1 hover:
      rotate-[360deg] duration-1000 cursor-pointer">
        {/* Logo or Branding */}
        <h1 className="text-lg font-bold">YO</h1>
      </div>
      <div>
        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {links.map((link, index) => (
            <li key={index}>
              <p
                onClick={() => handleLinkClick(link.url)}
                style={{ cursor: "pointer" }}
              >
                {link.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

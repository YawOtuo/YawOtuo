"use client";
import { useRef } from "react";
import Link from "next/link";
import { useNavMobileMenuStore } from "../NavMobile/components/useNavMobileMenuStore";
import Logo from "../Logo";
import useNavbar from "./useNavbar";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const { links, handleLinkClick } = useNavbar();
  const { setNavMobileMenuStore } = useNavMobileMenuStore();
  return (
    <>
      <div className="w-full justify-between hidden lg:flex items-center px-5 lg:py-2 lg:pt-4 lg:fixed top-0 z-50  backdrop-blur-sm" >
        <Logo />
        <div>
          {/* Navigation Links */}
          <ul className="flex space-x-8">
            {links.map((link, index) => (
              <button
                key={index}
                className="appearance-none text-white hover:text-yellow-400 transition-colors duration-300"
                onClick={() => {
                  handleLinkClick(link.url);
                }}
                style={{ cursor: "pointer" }}>
                {link.name}
              </button>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full lg:hidden flex items-center justify-between px-5 z-50  backdrop-blur-sm">
        <Logo />

        <button onClick={() => setNavMobileMenuStore(true)}>
          <GiHamburgerMenu color="white" />
        </button>
      </div>
    </>
  );
}

export default Navbar;

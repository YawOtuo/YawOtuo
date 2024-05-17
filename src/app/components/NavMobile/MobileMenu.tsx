import Link from "next/link";
import { useNavMobileMenuStore } from "./components/useNavMobileMenuStore";
import useNavbar from "../Navbar/useNavbar";
import Logo from "../Logo";

export const MobileMenu = () => {
  // const { setToggle } = useMenuStore();
  const { setNavMobileMenuStore } = useNavMobileMenuStore();
  const { links, handleLinkClick } = useNavbar();

  return (
    <div className={`px-5 pt-5 flex flex-col gap-5`}>
      <Logo />
      <div className="flex flex-col gap-2 w-full items-start">
        {links?.map((link: any, index: number) => (
          <button
            key={index}
            onClick={() => {
              setNavMobileMenuStore(false);

              handleLinkClick(link.url);
            }}>
            <p className={"text-2xl !font-semibold uppercase text-[#fff]"}>
              {link?.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

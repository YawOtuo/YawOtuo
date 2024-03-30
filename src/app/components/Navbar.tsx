import Link from "next/link";

const links = [
    { name: "About", url: "/" },
    { name: "Experience", url: "/about" },
    { name: "Tech Stack", url: "/services" },
    { name: "Projects", url: "/contact" },
  ];
  
  function Navbar() {
    return (
      <div className="w-full justify-between hidden  lg:flex items-center mt-5">
        <div>
          {/* Logo or Branding */}
          <h1 className="text-lg font-bold">My Website</h1>
        </div>
        <div>
          {/* Navigation Links */}
          <ul className="flex space-x-8">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.url} className="">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  
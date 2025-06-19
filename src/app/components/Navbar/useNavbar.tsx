function useNavbar() {
  const links = [
    { name: "About", url: "about" },
    { name: "Experience", url: "experience" },
    { name: "Tech Stack", url: "tech-stack" },
    { name: "Projects", url: "projects" },
  ];

  const handleLinkClick = (url: string) => {
    console.log("first");
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const element = document.getElementById(url);
      console.log(element);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  };
  return { links, handleLinkClick };
}

export default useNavbar;

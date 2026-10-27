import { useNavMobileMenuStore } from "./components/useNavMobileMenuStore";
import useNavbar from "../Navbar/useNavbar";
import Logo from "../Logo";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaFolder,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const MobileMenu = () => {
  const { setNavMobileMenuStore } = useNavMobileMenuStore();
  const { links, handleLinkClick } = useNavbar();

  const getIcon = (name: string) => {
    const iconMap: { [key: string]: any } = {
      home: FaHome,
      about: FaUser,
      experience: FaBriefcase,
      "tech stack": FaCode,
      projects: FaFolder,
      "let's talk": FaEnvelope,
      contact: FaEnvelope,
    };
    return iconMap[name.toLowerCase()] || FaHome;
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/YawOtuo",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/yaw-otuo/",
      color: "hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/+233203775123",
      color: "hover:text-green-400",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto px-6">
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <Logo />
        </div>
        <p className="text-muted text-sm">
          Full Stack Developer & AI Enthusiast
        </p>
      </motion.div>

      {/* Navigation Links */}
      <div className="space-y-2 mb-12">
        {links?.map((link: any, index: number) => {
          const IconComponent = getIcon(link.name);
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              onClick={() => {
                setNavMobileMenuStore(false);
                handleLinkClick(link.url);
              }}
              className="w-full group"
            >
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface hover:bg-surface-elevated transition-all duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-subtle group-hover:bg-accent/20 transition-all duration-300">
                  <IconComponent className="text-accent text-lg" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-white font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                    {link?.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {link.name === "home" && "Welcome to my portfolio"}
                    {link.name === "about" && "Learn more about me"}
                    {link.name === "experience" && "My professional journey"}
                    {link.name === "tech stack" && "Technologies I use"}
                    {link.name === "projects" && "See my work"}
                    {(link.name === "let's talk" || link.name === "contact") &&
                      "Get in touch"}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        <p className="text-muted text-sm mb-4">Connect with me</p>
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-surface hover:bg-surface-elevated transition-all duration-300 ${social.color}`}
            >
              <social.icon className="text-xl text-white" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

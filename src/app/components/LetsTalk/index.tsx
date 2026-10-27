"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "../ui/section";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LuMail, LuArrowUpRight } from "react-icons/lu";

const contactOptions = [
  {
    name: "Email",
    value: "yotuo2003@gmail.com",
    href: "mailto:yotuo2003@gmail.com",
    icon: LuMail,
    description: "Send me an email and I'll reply within 24 hours.",
    color: "text-accent",
    bgColor: "bg-accent-subtle",
  },
  {
    name: "WhatsApp",
    value: "+233 20 377 5123",
    href: "https://wa.me/+233203775123",
    icon: FaWhatsapp,
    description: "Message me directly for quick responses.",
    color: "text-green-400",
    bgColor: "bg-green-500/15",
  },
  {
    name: "LinkedIn",
    value: "Yaw Otuo",
    href: "https://www.linkedin.com/in/yaw-otuo/",
    icon: FaLinkedin,
    description: "Connect with me professionally.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/15",
  },
  {
    name: "GitHub",
    value: "YawOtuo",
    href: "https://github.com/YawOtuo",
    icon: FaGithub,
    description: "Check out my code and contributions.",
    color: "text-white",
    bgColor: "bg-surface-elevated",
  },
];

function LetsTalk() {
  return (
    <Section id="letstalk">
      <SectionHeader
        title="Let's Talk"
        subtitle="Have a project in mind? Pick the channel that works best for you."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {contactOptions.map((option, index) => (
          <motion.a
            key={option.name}
            href={option.href}
            target={option.href.startsWith("mailto") ? undefined : "_blank"}
            rel={option.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group bg-surface rounded-2xl p-6 hover:bg-surface-elevated transition-colors duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between mb-5">
              <div
                className={`w-12 h-12 rounded-xl ${option.bgColor} flex items-center justify-center`}
              >
                <option.icon className={`${option.color}`} size={22} />
              </div>
              <LuArrowUpRight
                className="text-muted-foreground group-hover:text-accent transition-colors"
                size={20}
              />
            </div>

            <div className="flex-1">
              <p className="text-muted-foreground text-sm mb-1">{option.name}</p>
              <p className="text-white font-semibold text-lg mb-3">
                {option.value}
              </p>
              <p className="text-muted text-sm leading-relaxed">
                {option.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-muted text-base max-w-xl mx-auto">
          I&apos;m currently open to freelance projects, full-time roles, and
          collaboration opportunities. Let&apos;s build something amazing
          together.
        </p>
      </motion.div>
    </Section>
  );
}

export default LetsTalk;

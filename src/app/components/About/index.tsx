"use client";

import { motion } from "framer-motion";
import useAboutData from "./useAbout";
import { Section, SectionHeader } from "../ui/section";
import { LuGraduationCap, LuMapPin, LuBriefcase } from "react-icons/lu";

const getYearsExperience = () => {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

const highlights = [
  {
    icon: LuBriefcase,
    label: "Years Experience",
    value: `${getYearsExperience()}+`,
  },
  {
    icon: LuGraduationCap,
    label: "Education",
    value: "BSc Computer Engineering",
  },
  {
    icon: LuMapPin,
    label: "Location",
    value: "Ghana",
  },
];

function About() {
  const { aboutData, loading, error } = useAboutData();

  if (loading) {
    return (
      <Section id="about" className="min-h-[60vh]">
        <div className="flex items-center justify-center flex-1">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="about">
        <p className="text-red-400 text-center">
          Error loading about data. Please try again later.
        </p>
      </Section>
    );
  }

  const bioParagraphs = aboutData?.generalInfo?.length
    ? aboutData.generalInfo
    : [
        "Hello! I'm Yaw Otuo, a Full Stack Developer & AI Enthusiast from Ghana who's passionate about crafting efficient, scalable solutions that make a real difference.",
        "My journey started with a simple goal: to turn wild ideas into digital reality. Today, I've helped startups like African Bully Registry go from concept to international recognition.",
        "Currently pursuing Computer Engineering at Kwame Nkrumah University of Science and Technology, I combine academic knowledge with real-world experience to deliver exceptional results.",
      ];

  return (
    <Section id="about">
      <SectionHeader
        title="About Me"
        subtitle="Get to know the person behind the code"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="bg-surface rounded-2xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-6">
              From Ghana to Global Impact
            </h3>
            <div className="space-y-4">
              {bioParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted text-base lg:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4"
        >
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="p-5 flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center">
                <item.icon className="text-accent" size={22} />
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">
                  {item.value}
                </p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </div>
            </div>
          ))}

          <div className="p-5">
            <h4 className="text-white font-semibold mb-3">What I Do</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Full Stack Development",
                "AI Integration",
                "Mobile Apps",
                "Cloud Architecture",
                "Startup Consulting",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent-subtle text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export default About;

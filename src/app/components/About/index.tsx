"use client";

import useAboutData from "./useAbout";
import {
  Section,
  SectionHeader,
  SectionLoader,
  SectionError,
} from "../ui/section";
import Reveal from "../ui/reveal";

const START_YEAR = 2021;

const whatIDo = [
  "Full Stack Development",
  "AI Integration",
  "Mobile Apps",
  "Cloud Architecture",
  "Startup Consulting",
];

const fallbackBio = [
  "I'm Yaw Otuo, a Full Stack Developer & AI Enthusiast from Ghana who crafts efficient, scalable solutions that make a real difference.",
  "My journey started with a simple goal: to turn wild ideas into digital reality. Today, I've helped startups like African Bully Registry go from concept to international recognition.",
  "I'm pursuing a BSc in Computer Engineering at Kwame Nkrumah University of Science and Technology, combining academic knowledge with real-world experience.",
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </p>
      <p className="text-3xl lg:text-4xl font-extrabold tracking-tighter leading-tight">
        {value}
      </p>
    </div>
  );
}

function About() {
  const { aboutData, loading, error } = useAboutData();

  if (loading) {
    return (
      <Section id="about">
        <SectionLoader />
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="about">
        <SectionError message="Couldn't load the about section. Please try again later." />
      </Section>
    );
  }

  const years = new Date().getFullYear() - START_YEAR;
  const bio = aboutData?.generalInfo?.length ? aboutData.generalInfo : fallbackBio;
  const [lead, ...rest] = bio;

  return (
    <Section id="about">
      <SectionHeader index="01" title="About" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
        <Reveal className="lg:col-span-7">
          <p
            className={
              lead.length < 260
                ? "text-2xl lg:text-3xl font-semibold leading-snug tracking-tight"
                : "text-lg lg:text-xl text-muted leading-relaxed"
            }
          >
            {lead}
          </p>
          <div className="mt-8 space-y-5">
            {rest.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted text-base lg:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 space-y-10">
          <Stat label="Experience" value={`${years}+ years`} />
          <Stat label="Education" value="BSc Computer Engineering" />
          <Stat label="Based in" value="Ghana" />

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              What I do
            </p>
            <ul className="space-y-2">
              {whatIDo.map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default About;

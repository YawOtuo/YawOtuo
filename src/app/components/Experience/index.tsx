"use client";

import { useState } from "react";
import ExperienceCard, { ExperienceType } from "./ExperienceCard";
import useExperienceData from "./useExperience";
import {
  Section,
  SectionHeader,
  SectionLoader,
  SectionError,
} from "../ui/section";
import Reveal from "../ui/reveal";

function Experience() {
  const { experienceData, loading, error } = useExperienceData();
  // First entry starts open so it's obvious the rows expand
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (loading) {
    return (
      <Section id="experience">
        <SectionLoader />
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="experience">
        <SectionError message="Couldn't load experience. Please try again later." />
      </Section>
    );
  }

  const items = experienceData as ExperienceType[];

  return (
    <Section id="experience">
      <SectionHeader
        index="03"
        title="Experience"
        subtitle="From founding a startup to building products for others. Tap a role for the details."
      />

      <div className="-mx-2 lg:-mx-8 space-y-2">
        {items?.map((experience, index) => (
          <Reveal key={experience._id || index} delay={index * 0.05}>
            <ExperienceCard
              data={experience}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Experience;

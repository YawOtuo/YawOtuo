"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import useExperienceData from "./useExperience";
import { Section, SectionHeader } from "../ui/section";
import { formatExperienceDate } from "@/app/lib/date";

type ExperienceItem = {
  _id: string;
  company: string;
  title: string;
  position: string;
  duration: string;
  description: string;
  responsibilities?: string[];
  startDate: string;
  endDate: string;
  location?: string;
  role?: string;
};

function Experience() {
  const { experienceData, loading, error } = useExperienceData();

  if (loading) {
    return (
      <Section id="experience" className="min-h-[60vh]">
        <div className="flex items-center justify-center flex-1">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="experience">
        <p className="text-red-400 text-center">
          Error loading experience data. Please try again later.
        </p>
      </Section>
    );
  }

  return (
    <Section id="experience">
      <SectionHeader
        title="Experience"
        subtitle="My journey from startup founder to full-stack developer"
      />

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-surface-elevated md:-translate-x-1/2"></div>

        <div className="space-y-6">
          {(experienceData as ExperienceItem[])?.map((experience, index) => (
            <motion.div
              key={experience._id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 items-start"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-accent rounded-full md:-translate-x-1/2 z-10"></div>

              {/* Date */}
              <div className="hidden md:flex md:flex-col md:items-end md:pr-8 md:pt-6">
                <span className="text-accent font-semibold text-sm">
                  {formatExperienceDate(experience.startDate)} - {formatExperienceDate(experience.endDate)}
                </span>
                {experience.duration && (
                  <span className="text-muted-foreground text-xs mt-1">
                    {experience.duration}
                  </span>
                )}
              </div>

              {/* Card */}
              <div className="md:pl-8">
                <ExperienceCard data={experience} index={index} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;

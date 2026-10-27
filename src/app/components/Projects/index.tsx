"use client";

import { LuArrowUpRight } from "react-icons/lu";
import ProjectCard, { ProjectType } from "./ProjectCard";
import useProjectsData from "./useProjectsData";
import {
  Section,
  SectionHeader,
  SectionLoader,
  SectionError,
} from "../ui/section";
import Reveal from "../ui/reveal";

function Projects() {
  const { ProjectsData, loading, error } = useProjectsData();

  if (loading) {
    return (
      <Section id="projects">
        <SectionLoader />
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="projects">
        <SectionError message="Couldn't load projects. Please try again later." />
      </Section>
    );
  }

  const projects = (ProjectsData as ProjectType[]) || [];

  return (
    <Section id="projects">
      <SectionHeader
        index="05"
        title="Selected work"
        subtitle="A few things I've designed, built and shipped."
      />

      {/* Second column is dropped down on desktop for a staggered, editorial rhythm */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-16 lg:gap-y-24">
        {projects.map((project, index) => (
          <Reveal
            key={project._id || index}
            delay={(index % 2) * 0.1}
            className={index % 2 === 1 ? "md:mt-24" : ""}
          >
            <ProjectCard data={project} index={index} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20 lg:mt-28">
        <a
          href="https://github.com/YawOtuo"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 text-2xl lg:text-4xl font-extrabold tracking-tighter"
        >
          <span className="underline decoration-accent decoration-4 underline-offset-8 group-hover:decoration-foreground transition-colors">
            More on GitHub
          </span>
          <LuArrowUpRight
            size={32}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </Reveal>
    </Section>
  );
}

export default Projects;

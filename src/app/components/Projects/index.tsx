"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import useProjectsData from "./useProjectsData";
import { Section, SectionHeader } from "../ui/section";
import PillButton from "../PillButton";

type ProjectType = {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  image: any;
  link?: string;
  githubLink?: string;
  youtubeLink?: string;
  category?: string;
  featured?: boolean;
  priority?: number;
};

function Projects() {
  const { ProjectsData, loading, error } = useProjectsData();

  if (loading) {
    return (
      <Section id="projects" className="min-h-[60vh]">
        <div className="flex items-center justify-center flex-1">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="projects">
        <p className="text-red-400 text-center">
          Error loading projects. Please try again later.
        </p>
      </Section>
    );
  }

  const projects = (ProjectsData as ProjectType[]) || [];
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const orderedProjects = featured.length > 0 ? [...featured, ...others] : projects;

  return (
    <Section id="projects">
      <SectionHeader
        title="Projects"
        subtitle="A few things I've built"
      />

      {/* Featured Projects */}
      {featured.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-5">
            Featured
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featured.map((project, index) => (
              <ProjectCard key={project._id} data={project} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* All Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {featured.length > 0 && (
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-5">
            More Work
          </h3>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, index) => (
            <ProjectCard key={project._id} data={project} index={index} />
          ))}
        </div>
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <div className="bg-surface rounded-2xl inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-5">
          <div className="text-left">
            <h3 className="text-white font-semibold mb-1">Want to see more?</h3>
            <p className="text-muted text-sm">
              Check out my GitHub for more projects and contributions.
            </p>
          </div>
          <PillButton
            as="a"
            href="https://github.com/YawOtuo"
            target="_blank"
            variant="primary"
            label="View GitHub"
          />
        </div>
      </motion.div>
    </Section>
  );
}

export default Projects;

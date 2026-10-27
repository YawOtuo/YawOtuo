"use client";

import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { Section, SectionHeader } from "../ui/section";
import Reveal from "../ui/reveal";
import { urlFor } from "@/app/utils/sanity-image";
import CountUp from "./CountUp";
import useFeaturedProject from "./useFeaturedProject";

const storeButton =
  "inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[rgba(250,249,246,0.12)] hover:bg-[rgba(250,249,246,0.22)] font-semibold transition-colors duration-200";

function Featured() {
  const { project, loading } = useFeaturedProject();

  // Nothing is marked "featured" in Sanity (or it's still loading): skip the section
  if (loading || !project) return null;

  const imageUrl = project.image ? urlFor(project.image)?.url() : null;
  const meta = [project.role, project.since && `since ${project.since}`]
    .filter(Boolean)
    .join(" · ");

  return (
    <Section id="featured">
      <SectionHeader
        index="02"
        title="Featured project"
        subtitle="The one I'm proudest of."
      />

      <Reveal>
        <div className="rounded-[2rem] bg-foreground text-background p-8 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className={imageUrl ? "lg:col-span-7" : "lg:col-span-12"}>
              {meta && (
                <p className="font-mono text-sm text-accent mb-5">{meta}</p>
              )}
              <h3 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-none">
                {project.title}
              </h3>
              {project.description && (
                <p className="mt-6 text-lg lg:text-xl leading-relaxed text-[rgba(250,249,246,0.7)] max-w-2xl">
                  {project.description}
                </p>
              )}

              {!!project.technologies?.length && (
                <p className="mt-6 font-mono text-sm text-[rgba(250,249,246,0.5)]">
                  {project.technologies.join("  ·  ")}
                </p>
              )}

              <div className="mt-10 flex flex-wrap gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-foreground font-semibold hover:bg-accent-hover transition-colors duration-200"
                  >
                    Visit website
                    <LuArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
                {project.appStoreLink && (
                  <a
                    href={project.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={storeButton}
                  >
                    <FaApple size={20} />
                    iOS app
                  </a>
                )}
                {project.playStoreLink && (
                  <a
                    href={project.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={storeButton}
                  >
                    <FaGooglePlay size={18} />
                    Android app
                  </a>
                )}
              </div>
            </div>

            {imageUrl && (
              <div className="lg:col-span-5">
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-[rgba(250,249,246,0.08)]">
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {!!project.stats?.length && (
            <div className="mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-6xl lg:text-8xl font-extrabold tracking-tighter text-accent leading-none">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 font-mono text-sm text-[rgba(250,249,246,0.6)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  );
}

export default Featured;

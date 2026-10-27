"use client";

import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { urlFor } from "@/app/utils/sanity-image";

export type ProjectType = {
  _id?: string;
  title: string;
  description: string;
  technologies?: string[];
  image?: any;
  link?: string;
  githubLink?: string;
  youtubeLink?: string;
  year?: string;
};

type Props = {
  data: ProjectType;
  index: number;
};

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-semibold underline decoration-accent decoration-[3px] underline-offset-4 hover:decoration-foreground transition-colors"
    >
      {label}
      <LuArrowUpRight size={16} />
    </a>
  );
}

function ProjectCard({ data, index }: Props) {
  const imageUrl = data.image ? urlFor(data.image)?.url() : null;
  const primaryLink = data.link || data.githubLink || data.youtubeLink;

  const image = (
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-elevated">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={data.title}
          fill
          sizes="(min-width: 768px) 480px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
    </div>
  );

  return (
    <article className="group">
      {primaryLink ? (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${data.title}`}
          className="block"
        >
          {image}
        </a>
      ) : (
        image
      )}

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="text-2xl lg:text-4xl font-extrabold tracking-tighter leading-tight">
          <span className="font-mono text-sm font-normal text-accent-ink mr-3 align-middle">
            {String(index + 1).padStart(2, "0")}
          </span>
          {data.title}
        </h3>
        {data.year && (
          <span className="font-mono text-sm text-muted-foreground shrink-0">
            {data.year}
          </span>
        )}
      </div>

      <p className="text-muted leading-relaxed mt-3 line-clamp-3">
        {data.description}
      </p>

      {!!data.technologies?.length && (
        <p className="font-mono text-xs text-muted-foreground mt-4 leading-relaxed">
          {data.technologies.join("  ·  ")}
        </p>
      )}

      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
        {data.link && <ProjectLink href={data.link} label="Live" />}
        {data.githubLink && <ProjectLink href={data.githubLink} label="Code" />}
        {data.youtubeLink && <ProjectLink href={data.youtubeLink} label="Demo" />}
      </div>
    </article>
  );
}

export default ProjectCard;

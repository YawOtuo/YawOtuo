import { urlFor } from "@/app/utils/sanity-image";
import Image from "next/image";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

type ProjectType = {
  title: string;
  description: string;
  technologies: string[];
  image: any;
  link?: string;
  githubLink?: string;
  youtubeLink?: string;
  category?: string;
  featured?: boolean;
};

type Props = {
  data: ProjectType;
  index: number;
};

function ProjectCard({ data, index }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <div className="bg-surface rounded-2xl overflow-hidden h-full flex flex-col hover:bg-surface-elevated transition-colors duration-300">
        {/* Project Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <Image
            src={urlFor(data?.image)?.url()}
            fill
            alt={data?.title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-white text-center"
            >
              <FaExternalLinkAlt className="mx-auto text-2xl" />
            </motion.div>
          </div>

          {data?.featured && (
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-black text-xs font-bold rounded-full">
              Featured
            </div>
          )}

          {data?.category && (
            <div className="absolute top-3 right-3 px-2.5 py-1 text-xs font-medium rounded-full bg-accent-subtle text-accent">
              {data.category}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
            {data?.title}
          </h3>

          <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {data?.description}
          </p>

          {data?.technologies && data.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {data.technologies.slice(0, 5).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-surface-elevated text-muted-foreground text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
              {data.technologies.length > 5 && (
                <span className="px-2.5 py-1 text-muted-foreground text-xs">
                  +{data.technologies.length - 5}
                </span>
              )}
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-2 pt-4 mt-auto">
            {data?.link && (
              <a
                target="_blank"
                href={data.link}
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-accent text-black text-xs font-semibold rounded-lg hover:bg-accent-hover transition-colors duration-300"
              >
                <FaExternalLinkAlt size={11} />
                Live
              </a>
            )}

            {data?.githubLink && (
              <a
                target="_blank"
                href={data.githubLink}
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-surface-elevated text-white text-xs font-semibold rounded-lg hover:bg-surface-hover transition-colors duration-300"
              >
                <FaGithub size={12} />
                Code
              </a>
            )}

            {data?.youtubeLink && (
              <a
                target="_blank"
                href={data.youtubeLink}
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-red-600/90 text-white text-xs font-semibold rounded-lg hover:bg-red-500 transition-colors duration-300"
              >
                <FaYoutube size={12} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

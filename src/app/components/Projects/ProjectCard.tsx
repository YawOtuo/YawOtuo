import { urlFor } from "@/app/utils/sanity-image";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

import { LuCompass } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";

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

  const getCategoryColor = (category?: string) => {
    const colors: { [key: string]: string } = {
      'web': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'mobile': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'ai': 'bg-green-500/20 text-green-400 border-green-500/30',
      'ecommerce': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'default': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    };
    return colors[category?.toLowerCase() || 'default'];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer w-full"
    >
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-yellow-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10">
        
        {/* Project Image */}
        <div className="relative w-full aspect-[3/2] overflow-hidden">
          <Image
            src={urlFor(data?.image)?.url()}
            fill
            alt={data?.title}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-white text-center"
            >
              <p className="text-lg font-semibold mb-2">View Project</p>
              <FaExternalLinkAlt className="mx-auto text-2xl" />
            </motion.div>
          </div>

          {/* Featured Badge */}
          {data?.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
              ⭐ Featured
            </div>
          )}

          {/* Category Badge */}
          {data?.category && (
            <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(data.category)}`}>
              {data.category}
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Project Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300"
          >
            {data?.title}
          </motion.h3>

          {/* Project Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4 line-clamp-3"
          >
            {data?.description}
          </motion.p>

          {/* Technologies */}
          {data?.technologies && data.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h4 className="text-white font-semibold text-sm mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Action Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-gray-800/50"
          >
            {data?.link && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                href={data.link}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-yellow-500 text-black font-semibold text-xs sm:text-sm rounded-lg hover:bg-yellow-400 transition-colors duration-300 whitespace-nowrap"
              >
                <FaExternalLinkAlt size={12} className="sm:w-3.5 sm:h-3.5" />
                Live Demo
              </motion.a>
            )}
            
            {data?.githubLink && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                href={data.githubLink}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-800 text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-gray-700 transition-colors duration-300 whitespace-nowrap"
              >
                <FaGithub size={14} className="sm:w-4 sm:h-4" />
                Code
              </motion.a>
            )}
            
            {data?.youtubeLink && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                href={data.youtubeLink}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-red-600 text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-red-500 transition-colors duration-300 whitespace-nowrap"
              >
                <FaYoutube size={14} className="sm:w-4 sm:h-4" />
                Demo
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

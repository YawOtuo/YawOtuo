"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuCalendar, LuMapPin, LuChevronDown } from "react-icons/lu";
import { formatExperienceDate } from "@/app/lib/date";

type ExperienceType = {
  logo?: string;
  title?: string;
  position?: string;
  duration?: string;
  company?: string;
  responsibilities?: string[];
  description?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  role?: string;
};

type Props = {
  data: ExperienceType;
  index: number;
};

function ExperienceCard({ data, index }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isCurrent = data?.endDate?.toLowerCase() === "present";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="bg-surface rounded-2xl overflow-hidden hover:bg-surface-elevated transition-colors duration-300"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 lg:p-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-1">
              {data?.role || data?.title || "Role"}
            </h3>
            <p className="text-accent font-semibold">
              {data?.company ? `@ ${data.company}` : ""}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {isCurrent && (
              <span className="px-3 py-1 bg-green-500/15 text-green-400 text-xs font-medium rounded-full">
                Current
              </span>
            )}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-muted-foreground"
            >
              <LuChevronDown size={20} />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <LuCalendar className="text-accent" size={15} />
            <span>
              {formatExperienceDate(data?.startDate || "")} - {formatExperienceDate(data?.endDate || "")}
            </span>
          </div>
          {data?.location && (
            <div className="flex items-center gap-2">
              <LuMapPin className="text-accent" size={15} />
              <span>{data.location}</span>
            </div>
          )}
        </div>

        {data?.description && (
          <p className="text-muted text-sm lg:text-base leading-relaxed mt-4 line-clamp-2">
            {data.description}
          </p>
        )}

        <p className="text-accent text-sm font-medium mt-4">
          {isExpanded ? "Show less" : "View details"}
        </p>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-2">
              {data?.responsibilities && data.responsibilities.length > 0 && (
                <ul className="space-y-3">
                  {data.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="text-muted text-sm lg:text-base flex items-start gap-3"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              )}

              {data?.duration && (
                <div className="mt-5">
                  <span className="inline-block px-3 py-1 bg-surface-elevated text-muted-foreground text-xs font-medium rounded-full">
                    {data.duration}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ExperienceCard;

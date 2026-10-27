"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LuPlus, LuMapPin } from "react-icons/lu";
import { formatExperienceDate } from "@/app/lib/date";
import { cn } from "@/app/lib/utils";

export type ExperienceType = {
  _id?: string;
  title?: string;
  position?: string;
  duration?: string;
  company?: string;
  responsibilities?: string[];
  skillsDeveloped?: string[];
  achievements?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  role?: string;
};

type Props = {
  data: ExperienceType;
  isOpen: boolean;
  onToggle: () => void;
};

function ExperienceCard({ data, isOpen, onToggle }: Props) {
  const isCurrent = data.endDate?.toLowerCase() === "present";
  const hasDetails =
    !!data.description ||
    !!data.achievements ||
    !!data.responsibilities?.length ||
    !!data.skillsDeveloped?.length;

  return (
    <div
      className={cn(
        "rounded-3xl transition-colors duration-300",
        isOpen ? "bg-surface" : "hover:bg-surface"
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        disabled={!hasDetails}
        className="w-full text-left grid grid-cols-12 gap-x-4 gap-y-2 items-start p-6 lg:p-8"
      >
        <div className="col-span-12 md:col-span-3 font-mono text-sm text-muted md:pt-2">
          <p>
            {formatExperienceDate(data.startDate || "")} –{" "}
            {formatExperienceDate(data.endDate || "")}
          </p>
          {isCurrent && (
            <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-accent text-foreground text-xs font-medium">
              current
            </span>
          )}
        </div>

        <div className="col-span-10 md:col-span-8">
          <h3 className="text-2xl lg:text-4xl font-extrabold tracking-tighter leading-tight">
            {data.role || data.title || "Role"}
          </h3>
          {data.company && (
            <p className="text-lg lg:text-xl text-muted mt-1">{data.company}</p>
          )}
        </div>

        <div className="col-span-2 md:col-span-1 flex justify-end md:pt-2">
          {hasDetails && (
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center"
            >
              <LuPlus size={20} />
            </motion.span>
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && hasDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-x-4 px-6 lg:px-8 pb-8">
              <div className="col-span-12 md:col-start-4 md:col-span-8 space-y-6">
                {data.location && (
                  <p className="flex items-center gap-2 text-sm text-muted">
                    <LuMapPin size={16} />
                    {data.location}
                  </p>
                )}

                {data.description && (
                  <p className="text-lg text-muted leading-relaxed">
                    {data.description}
                  </p>
                )}

                {!!data.responsibilities?.length && (
                  <ul className="space-y-3">
                    {data.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex gap-3 leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {data.achievements && (
                  <p className="leading-relaxed">
                    <span className="font-semibold">Highlights: </span>
                    <span className="text-muted">{data.achievements}</span>
                  </p>
                )}

                {!!data.skillsDeveloped?.length && (
                  <div className="flex flex-wrap gap-2">
                    {data.skillsDeveloped.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-surface-elevated font-mono text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExperienceCard;

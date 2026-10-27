"use client";

import { motion } from "framer-motion";
import useAboutData, { TechSkill } from "../About/useAbout";
import TSPill from "./TSPill";
import { Section, SectionHeader } from "../ui/section";

const fallbackCategoryMap: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "Django", "FastAPI", "NestJS"],
  Database: ["MySQL", "PostgreSQL", "Firebase", "Supabase", "MongoDB"],
  "Tools & Cloud": ["AWS", "Git", "Docker", "Figma", "Postman", "VS Code"],
};

function isValidSkill(item: unknown): item is TechSkill {
  return (
    item !== null &&
    typeof item === "object" &&
    item !== undefined &&
    "name" in item &&
    typeof (item as TechSkill).name === "string" &&
    (item as TechSkill).name.trim() !== ""
  );
}

function normalizeTechStack(
  techStack: (string | TechSkill | null | undefined)[] | undefined
): TechSkill[] {
  if (!techStack) return [];

  return techStack
    .filter((item): item is string | TechSkill => item !== null && item !== undefined)
    .map((item): TechSkill => {
      if (typeof item === "string") {
        // Backward compatibility: map string skills to categories
        for (const [category, skills] of Object.entries(fallbackCategoryMap)) {
          if (skills.includes(item)) {
            return { name: item, category: { _id: category, name: category } };
          }
        }
        return { name: item, category: { _id: "Other", name: "Other" } };
      }

      // Ensure category has a usable name
      const categoryName =
        item.category && typeof item.category === "object"
          ? item.category.name || "Other"
          : "Other";

      return {
        name: item.name,
        category: {
          _id: item.category?._id || categoryName,
          name: categoryName,
          priority: item.category?.priority,
        },
      };
    })
    .filter(isValidSkill);
}

function groupByCategory(skills: TechSkill[]) {
  const grouped: Record<string, TechSkill[]> = {};

  skills.forEach((skill) => {
    const categoryName = skill.category?.name || "Other";
    if (!grouped[categoryName]) {
      grouped[categoryName] = [];
    }
    grouped[categoryName].push(skill);
  });

  return grouped;
}

function getCategoryOrder(skills: TechSkill[]): string[] {
  const categories = new Map<string, number>();

  skills.forEach((skill) => {
    const name = skill.category?.name || "Other";
    const priority = skill.category?.priority ?? Infinity;
    if (!categories.has(name)) {
      categories.set(name, priority);
    }
  });

  return Array.from(categories.entries())
    .sort((a, b) => a[1] - b[1])
    .map(([name]) => name);
}

function TechStack() {
  const { aboutData, loading, error } = useAboutData();

  if (loading) {
    return (
      <Section id="tech-stack" className="min-h-[60vh]">
        <div className="flex items-center justify-center flex-1">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="tech-stack">
        <p className="text-red-400 text-center">
          Error loading tech stack data. Please try again later.
        </p>
      </Section>
    );
  }

  const normalizedSkills = normalizeTechStack(aboutData?.techStack);
  const skillsToDisplay =
    normalizedSkills.length > 0
      ? normalizedSkills
      : Object.entries(fallbackCategoryMap).flatMap(([category, skills]) =>
          skills.map((name) => ({
            name,
            category: { _id: category, name: category },
          }))
        );

  const grouped = groupByCategory(skillsToDisplay);
  const categoryOrder = getCategoryOrder(skillsToDisplay);

  return (
    <Section id="tech-stack">
      <SectionHeader
        title="Tech Stack"
        subtitle="The tools and technologies I use to turn ideas into reality"
      />

      <div className="space-y-10 lg:space-y-14">
        {categoryOrder.map((category) => {
          const items = grouped[category];
          if (!items?.length) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {items.map((tech, index) => (
                  <TSPill key={tech.name} data={tech.name} index={index} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export default TechStack;

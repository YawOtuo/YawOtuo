"use client";

import useAboutData, { TechSkill } from "../About/useAbout";
import {
  Section,
  SectionHeader,
  SectionLoader,
  SectionError,
} from "../ui/section";
import Reveal from "../ui/reveal";

// Used for legacy string-only entries and when Sanity has no tech stack yet
const fallbackCategoryMap: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "Django", "FastAPI", "NestJS"],
  Database: ["MySQL", "PostgreSQL", "Firebase", "Supabase", "MongoDB"],
  "Tools & Cloud": ["AWS", "Git", "Docker", "Figma", "Postman", "VS Code"],
};

const NO_PRIORITY = Number.MAX_SAFE_INTEGER;

function normalizeTechStack(
  techStack: (string | TechSkill | null | undefined)[] | undefined
): TechSkill[] {
  if (!techStack) return [];

  const skills: TechSkill[] = [];

  for (const item of techStack) {
    if (!item) continue;

    if (typeof item === "string") {
      const category =
        Object.entries(fallbackCategoryMap).find(([, list]) =>
          list.includes(item)
        )?.[0] ?? "Other";
      skills.push({ name: item, category: { _id: category, name: category } });
      continue;
    }

    if (typeof item.name !== "string" || !item.name.trim()) continue;

    const categoryName = item.category?.name || "Other";
    skills.push({
      name: item.name,
      category: {
        _id: item.category?._id || categoryName,
        name: categoryName,
        priority: item.category?.priority,
      },
    });
  }

  return skills;
}

function groupSkills(skills: TechSkill[]) {
  const groups = new Map<
    string,
    { name: string; priority: number; skills: TechSkill[] }
  >();

  for (const skill of skills) {
    const name = skill.category?.name || "Other";
    const priority = skill.category?.priority ?? NO_PRIORITY;
    const group = groups.get(name) ?? { name, priority, skills: [] };
    group.skills.push(skill);
    groups.set(name, group);
  }

  return Array.from(groups.values()).sort((a, b) => a.priority - b.priority);
}

function TechStack() {
  const { aboutData, loading, error } = useAboutData();

  if (loading) {
    return (
      <Section id="tech-stack">
        <SectionLoader />
      </Section>
    );
  }

  if (error) {
    return (
      <Section id="tech-stack">
        <SectionError message="Couldn't load the tech stack. Please try again later." />
      </Section>
    );
  }

  const fromSanity = normalizeTechStack(aboutData?.techStack);
  const skills = fromSanity.length
    ? fromSanity
    : Object.entries(fallbackCategoryMap).flatMap(([category, list]) =>
        list.map((name) => ({ name, category: { _id: category, name: category } }))
      );

  const groups = groupSkills(skills);

  return (
    <Section id="tech-stack">
      <SectionHeader
        index="04"
        title="Tech stack"
        subtitle="The tools I reach for to turn ideas into working products."
      />

      <div className="space-y-12 lg:space-y-16">
        {groups.map((group) => (
          <Reveal
            key={group.name}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
          >
            <p className="md:col-span-3 font-mono text-sm text-accent-ink md:pt-3">
              {group.name}
            </p>
            <ul className="md:col-span-9 flex flex-wrap items-baseline gap-x-3 gap-y-2">
              {group.skills.map((skill, index) => (
                <li
                  key={skill.name}
                  className="text-3xl lg:text-5xl font-extrabold tracking-tighter"
                >
                  {skill.name}
                  {index < group.skills.length - 1 && (
                    <span className="text-muted-foreground font-medium ml-3">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default TechStack;

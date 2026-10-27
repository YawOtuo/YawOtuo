"use client";

import { LuArrowUpRight } from "react-icons/lu";
import { Section, SectionHeader } from "../ui/section";
import Reveal from "../ui/reveal";
import { useContactChannels } from "./channels";

function LetsTalk() {
  const { email, socials } = useContactChannels();

  return (
    <Section id="letstalk">
      <SectionHeader
        index="06"
        title="Let's talk"
        subtitle="Have a project or an idea? Reach out on whichever channel suits you."
      />

      {/* Email — the primary way to reach me (only once it is set in Sanity) */}
      {email && (
      <Reveal>
        <a
          href={email.href}
          className="group block rounded-3xl bg-accent hover:bg-accent-hover transition-colors duration-200 p-8 lg:p-14"
        >
          <div className="flex items-start justify-between gap-6">
            <p className="font-mono text-sm">Email me</p>
            <LuArrowUpRight
              size={36}
              className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
          <p className="mt-10 lg:mt-16 text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter break-all leading-none">
            {email.value}
          </p>
        </a>
      </Reveal>
      )}

      {/* Other channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {socials.map((channel, index) => (
          <Reveal key={channel.name} delay={index * 0.08}>
            <a
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-10 rounded-3xl bg-surface hover:bg-surface-elevated transition-colors duration-200 p-6 lg:p-8"
            >
              <div className="flex items-start justify-between">
                <channel.icon size={28} />
                <LuArrowUpRight
                  size={24}
                  className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
                />
              </div>
              <div>
                <p className="font-mono text-sm text-muted mb-1">
                  {channel.name}
                </p>
                <p className="text-xl lg:text-2xl font-extrabold tracking-tight break-all">
                  {channel.value}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default LetsTalk;

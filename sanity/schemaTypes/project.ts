import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }], // Define an array of strings for technologies used
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "githubLink",
      title: "GitHub Link",
      type: "url",
    }),
    defineField({
      name: "youtubeLink",
      title: "YouTube Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"], // Allow both HTTP and HTTPS
          allowRelative: false, // Do not allow relative URLs
          //   regex: /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/.+/i, // Validate YouTube URLs
          //   error: 'Please enter a valid YouTube URL', // Error message for invalid URLs
        }),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      description: "Shown next to the project title, e.g. 2024",
    }),
    defineField({
      name: "priority",
      title: "priority",
      type: "number",
    }),

    // --- Featured project (shown in its own section instead of the grid) ---
    defineField({
      name: "featured",
      title: "Featured project",
      type: "boolean",
      description:
        "Show this project in the big featured section instead of the projects grid. Only the first featured project (by priority) is shown.",
      initialValue: false,
    }),
    defineField({
      name: "role",
      title: "Your role",
      type: "string",
      description: "e.g. Founder & CEO",
      hidden: ({ document }) => !document?.featured,
    }),
    defineField({
      name: "since",
      title: "Since",
      type: "string",
      description: "e.g. 2023",
      hidden: ({ document }) => !document?.featured,
    }),
    defineField({
      name: "appStoreLink",
      title: "iOS App Store link",
      type: "url",
      hidden: ({ document }) => !document?.featured,
    }),
    defineField({
      name: "playStoreLink",
      title: "Google Play link",
      type: "url",
      hidden: ({ document }) => !document?.featured,
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      description: "Numbers shown under the featured project, e.g. 150 / Farms",
      hidden: ({ document }) => !document?.featured,
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Number",
              type: "number",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "suffix",
              title: "Suffix",
              type: "string",
              description: 'Optional, e.g. "+"',
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { value: "value", suffix: "suffix", label: "label" },
            prepare: ({ value, suffix, label }) => ({
              title: `${value ?? ""}${suffix ?? ""}`,
              subtitle: label,
            }),
          },
        },
      ],
    }),
  ],
});

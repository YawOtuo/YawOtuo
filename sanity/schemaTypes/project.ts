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
      name: "priority",
      title: "priority",
      type: "number",
    }),
  ],
});

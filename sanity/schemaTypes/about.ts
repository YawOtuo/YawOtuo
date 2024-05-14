import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'generalInfo',
      title: 'General Information',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'educationItem' }] }],
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }], // Define an array of strings for tech stack items
    }),
  ],
});

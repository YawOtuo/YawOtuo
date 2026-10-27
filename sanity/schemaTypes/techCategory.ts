import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'techCategory',
  title: 'Tech Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
});

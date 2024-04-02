import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'educationItem',
  title: 'Education Item',
  type: 'object',
  fields: [
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
  ],
});

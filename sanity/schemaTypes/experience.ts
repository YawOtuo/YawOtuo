import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
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
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'text',
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'text',
    }),
    defineField({
      name: 'skillsDeveloped',
      title: 'Skills Developed',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})

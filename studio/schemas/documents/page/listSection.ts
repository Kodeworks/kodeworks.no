import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'listSection',
  type: 'object',
  title: 'List Section',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'List',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.unique(),
    }),
  ],
})

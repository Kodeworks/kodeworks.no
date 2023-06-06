import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'paragraph',
  type: 'object',
  title: 'Paragraph',
  fields: [
    defineField({
      name: 'text',
      type: 'array',
      title: 'Text',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.unique(),
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textSection',
  type: 'object',
  title: 'Text Section',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'text',
      type: 'array',
      title: 'Text',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.unique(),
    }),
  ],
})

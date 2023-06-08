import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
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
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'callToAction',
      type: 'callToAction',
      title: 'Call to Action',
    }),
  ],
})

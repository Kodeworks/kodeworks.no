import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'illustration',
  type: 'object',
  title: 'Image',
  fields: [
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
  ],
})

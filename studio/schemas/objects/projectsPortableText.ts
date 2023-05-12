import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectsPortableText',
  type: 'array',
  title: 'Projects Portable Text',
  of: [
    defineArrayMember({
      type: 'object',
      name: 'quote',
      title: 'Quote',
      fields: [
        defineField({
          name: 'author',
          type: 'string',
          title: 'Author',
        }),
        defineField({
          name: 'quoteText',
          title: 'Quote Text',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
    defineArrayMember({
      name: 'output',
      title: 'Output',
      description: 'todo: what is this?',
      type: 'object',
      fields: [
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
    defineArrayMember({
      type: 'block',
    }),
    defineArrayMember({
      name: 'image',
      title: 'Image block',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt',
        }),
        defineField({
          name: 'wide',
          type: 'boolean',
          initialValue: false,
          validation: (R) => R.required(),
        }),
      ],
    }),
    defineArrayMember({
      title: 'Heading',
      name: 'heading',
      type: 'object',
      fields: [
        defineField({
          name: 'content',
          title: 'Content',
          type: 'string',
        }),
      ],
    }),
  ],
})

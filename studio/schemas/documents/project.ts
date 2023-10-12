import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      title: 'Project name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'object',
      fields: [
        defineField({
          title: 'English',
          name: 'en',
          type: 'text',
        }),
        defineField({
          title: 'Norewgian',
          name: 'no',
          type: 'text',
        }),
      ],
    }),
    defineField({
      title: 'Extra Description',
      name: 'extraDescription',
      type: 'text',
    }),
    defineField({
      title: 'Show on front page',
      name: 'showOnFrontPage',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Heading',
          name: 'heading',
          fields: [{type: 'text', name: 'text'}],
        }),
        defineArrayMember({
          type: 'object',
          title: 'Paragraph',
          name: 'paragraph',
          fields: [{type: 'text', name: 'text'}],
        }),
        defineArrayMember({
          type: 'object',
          title: 'Output',
          name: 'output',
          fields: [{type: 'text', name: 'text'}],
        }),
        defineArrayMember({
          type: 'object',
          title: 'Quote',
          name: 'quote',
          fields: [
            {type: 'text', name: 'text'},
            {type: 'string', name: 'author'},
          ],
        }),
        defineArrayMember({
          title: 'Image',
          name: 'image',
          type: 'image',
        }),
        defineArrayMember({
          title: 'Wide image',
          name: 'wideimage',
          type: 'image',
        }),
      ],
    }),
    defineField({
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
  ],
})

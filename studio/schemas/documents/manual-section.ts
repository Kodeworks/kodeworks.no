import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'manual-section',
  title: 'Manual Section',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      title: 'Group label',
      name: 'label',
      type: 'reference',
      to: [{type: 'section-label'}],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'job-description',
  title: 'Job description',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'label',
      title: 'Location label',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
  ],
})

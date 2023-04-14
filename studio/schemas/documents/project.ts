import {defineField, defineType} from 'sanity'

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
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'hidden',
      type: 'boolean',
      description: 'Hide this project in the public project list',
      initialValue: false,
      validation: (R) => R.required(),
    }),
  ],
})

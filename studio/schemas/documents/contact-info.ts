import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  type: 'object',
  title: 'Kontaktinfo',
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
    defineField({
      name: 'name',
      type: 'string',
      title: 'Navn',
    }),
    defineField({
      name: 'phone',
      title: 'Telefon nummer',
      type: 'number',
    }),
    defineField({
      name: 'jobTitle',
      title: 'Stillingstittel',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Epost',
    }),
  ],
})

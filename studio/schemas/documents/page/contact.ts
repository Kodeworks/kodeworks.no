import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  type: 'object',
  title: 'Kontakt info',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tittel',
    }),
    defineField({
      name: 'subText',
      type: 'string',
      title: 'Undertekst',
    }),
    defineField({
      name: 'contactInfos',
      title: 'Kontakt info',
      type: 'array',
      of: [{type: 'contactInfo'}],
    }),
  ],
})

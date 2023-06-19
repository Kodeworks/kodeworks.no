import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'benefitItem',
  type: 'object',
  title: 'Gode',
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
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'text',
      type: 'string',
      title: 'Undertekst',
    }),
    defineField({
      name: 'amountYearly',
      title: 'Beløp årlig',
      type: 'number',
    }),
    defineField({name: 'fixedBenefits', type: 'boolean', title: 'Beregn i faste goder', initialValue: false}),

  ]
})
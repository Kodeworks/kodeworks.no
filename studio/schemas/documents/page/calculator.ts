import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'calculator',
  type: 'object',
  title: 'Calculator',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'basicPensionAmount',
      title: 'Grunnbeløpet i folketrygden',
      type: 'object',
      fields: [
        defineField({
          name: 'fromDate',
          title: 'Per dato',
          type: 'date',
        }),
        defineField({
          name: 'amount',
          title: 'Beløp',
          type: 'number',
        }),
      ],
    }),
    defineField({name: 'yearlyPensionSaving', title: 'Årlig pensjonssparing (%)', type: 'number'}),
    defineField({
      name: 'estimatedSalaryIncrease',
      title: 'Estimert lønnsjustering',
      type: 'number',
    }),
    defineField({
      name: 'employeeBudget',
      title: 'Ansattbudsjetter',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Tittel',
        }),
        defineField({
          name: 'subTitle',
          type: 'string',
          title: 'Undertekst',
        }),
        defineField({
          name: 'epolyeeBudgetsPosts',
          title: 'Ansatt budsjetter',
          type: 'array',
          of: [{type: 'employeeBudgetPost'}],
        }),
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Andre goder',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Tittel',
        }),
        defineField({
          name: 'subTitle',
          type: 'string',
          title: 'Undertekst',
        }),
        defineField({
          name: 'benefitItems',
          title: 'Andre goder',
          type: 'array',
          of: [{type: 'benefitItem'}],
        }),
      ],
    }),
    defineField({
      name: 'salaryStpes',
      title: 'Lønnstrinn (Stigende rekkefølge)',
      type: 'array',
      of: [{type: 'number'}],
    }),
  ],
})

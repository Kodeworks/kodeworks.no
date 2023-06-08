import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Salary',
  title: 'Salary',
  type: 'document',
  fields: [
    defineField({
      name: 'BasicPensionAmount', title: 'Grunnbeløpet i folketrygden',
      type: 'object',
      fields: [
        defineField({
          title: 'Per dato',
          name: 'FromDate',
          type: 'date',
        }),
        defineField({
          title: 'Beløp',
          name: 'amount',
          type: 'number',
        }),
      ],
    }),
    defineField({name: 'YearlyPension', title: 'Årlig pensjonssparing (%)', type: 'number'}),
    defineField({name: 'LastSalaryIncrease', title: 'Forrige lønnsjustering', type: 'number'}),
    defineField({
      title: 'Lønnstrinn (Stigende rekkefølge)',
      name: 'SalaryStpes',
      type: 'array',
      of: [{type: 'number'}]
    }),
  ],
})

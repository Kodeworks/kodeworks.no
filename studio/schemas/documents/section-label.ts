import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'section-label',
  title: 'Section label',
  type: 'document',
  fields: [defineField({name: 'label', title: 'Label', type: 'string'})],
})

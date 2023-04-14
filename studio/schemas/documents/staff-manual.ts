import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'staff-manual',
  title: 'Staff manual',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'intro', title: 'Introduction', type: 'text'}),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'manual-section'}]}],
    }),
  ],
})

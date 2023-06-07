import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'container',
  type: 'object',
  title: 'Container',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'callToAction'},
        {type: 'listSection'},
        {type: 'textSection'},
        {type: 'paragraph'},
        {type: 'illustration'},
      ],
    }),
    defineField({name: 'fullWidth', type: 'boolean', title: 'Use full width', initialValue: false}),
    defineField({
      name: 'background',
      type: 'string',
      title: 'Background color (HEX)',
      initialValue: '#FFFFFF',
    }),
  ],
})

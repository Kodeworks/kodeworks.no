import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'container'},
        {type: 'hero'},
        {type: 'callToAction'},
        {type: 'listSection'},
        {type: 'textSection'},
        {type: 'paragraph'},
        {type: 'illustration'},
        {type: 'calculator'},
        {type: 'contact'},
      ],
    }),
  ],
})

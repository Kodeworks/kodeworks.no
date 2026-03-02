import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const dataset = 'development' // TODO do not merge, switch back to production when done testing

export default defineConfig({
  name: 'default',
  title: `studio.kodeworks.no - ${dataset}`,
  projectId: 'zkl0178p',
  dataset: dataset,

  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

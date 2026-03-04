import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structureTool} from 'sanity/structure'

const dataset = 'development' // TODO do not merge, switch back to production when done testing

export default defineConfig({
  name: 'default',
  title: `studio.kodeworks.no - ${dataset}`,
  projectId: 'zkl0178p',
  dataset: dataset,

  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

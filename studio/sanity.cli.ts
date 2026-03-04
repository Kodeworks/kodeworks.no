import {defineCliConfig} from 'sanity/cli'

const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production'

export default defineCliConfig({
  api: {
    projectId: 'zkl0178p',
    dataset: dataset,
  },
})

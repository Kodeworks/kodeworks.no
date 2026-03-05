import {defineCliConfig} from 'sanity/cli'

const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production'

export default defineCliConfig({
  api: {
    projectId: 'zkl0178p',
    dataset: dataset,
  },
  typegen: {
    path: "'../web/src/**/*.{ts,tsx,js,jsx}'", // glob pattern to typescript files that will be used in typegen
    // path: "../web/src/lib/sanity.ts", // glob pattern to typescript files that will be used in typegen
    schema: './schema.json', // path to schema file, generated with 'sanity schema extract' command
    generates: '../web/src/types/sanity.types.ts', // path to the output file for generated type definitions
  },
})

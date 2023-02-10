import createClient, {Transaction} from '@sanity/client'
import {projectsStore as projects} from './tempProjectsStore'

/**
 * This is a script intended to transfer some json files into a sanity dataset
 * do not just run this, edit to suit your needs, then execute with `sanity execute`
 * see https://www.sanity.io/docs/migrating-data
 */

const client = createClient({
  projectId: 'zkl0178p',
  dataset: 'development',
  useCdn: false,
  apiVersion: '2023-01-12',
  token: process.env.SANITY_SECRET_TOKEN,
})

const transferProject = (transaction: Transaction, project: any) => {
  const document = {
    _type: 'project',
    name: project.name,
    slug: {
      _type: 'slug',
      current: project.urlName,
    },
    technologies: project.technologies,
    description: project.description,
  }
  transaction.create(document)
}
const main = async () => {
  const transaction = client.transaction()
  for (const projectKey of Object.keys(projects)) {
    transferProject(transaction, (projects as any)[projectKey])
  }
  const transactionResults = await transaction.commit()
  console.log('🌱', 'transactionResults', transactionResults)
}

main()

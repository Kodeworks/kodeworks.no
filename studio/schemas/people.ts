export default {
  name: 'people',
  type: 'document',
  title: 'People',
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'First name'
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last name'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'projects',
      type: 'array',
      of: [{type: 'project'}],
      title: 'Projects'
    },
    {
      name: 'socials',
      type: 'array',
      of: [{type: 'social'}],
      title: 'Socials'
    }
  ]
}

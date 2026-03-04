# KodeWorks.no

## Getting started

Kodeworks.no is split into several applications inside one repository, known as a monorepo.

_Web_, represents the webpage existing at kodeworks.no, created using [NEXT.js](https://nextjs.org/).  
_Studio_, is the CMS providing data to _Web_, using [Sanity Studio](https://www.sanity.io/).

_Web_ is deployed and hosted with [Vercel](https://vercel.com/), while _Studio_ uses Sanity's own deployment and hosting.  
[Turborepo](https://turbo.build/) and [npm Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) is used to handle monorepo features.

### Developing

Recommended Node version: 20 (LTS)  
Recommended npm version: 9+

Install dependencies (in root directory of the repository):

```bash
npm install
```

Run local dev servers of _Web_ and _Studio_:

```bash
npm run dev -w web
npm run dev -w studio
```

Server starts at `http://localhost:3000` for web and `http://localhost:3333/` for studio.

Build _Web_ and _Studio_:

```bash
npm run build -w web
npm run build -w studio
```

Validate Sanity documents against a specific dataset:

```bash
npm run studio:validate:development
npm run studio:validate:production
```

### Deployment

Deployment is handle automatically by Vercel listening to webhooks from Github.  
Commits to feature branch with a Pull Request are deployed to preview environment.  
Commits to master are deployed to production environment.
Vercel runtime should use Node.js 20.

Sanity studio currently have to be deployed manually. In the studio directory, run:

```bash
npm run deploy
```

### Image attributions

Some images used across the site has been found at `https://unsplash.com/`.

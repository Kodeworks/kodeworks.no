# KodeWorks.no

## Getting started

Kodeworks.no is split into several applications inside one repository, known as a monorepo.

_Web_, represents the webpage existing at kodeworks.no, created using [NEXT.js](https://nextjs.org/).  
_Studio_, is the CMS providing data to _Web_, using [Sanity Studio](https://www.sanity.io/).

_Web_ is deployed and hosted with [Vercel](https://vercel.com/), while _Studio_ uses Sanity's own deployment and hosting.  
[Turborepo](https://turbo.build/) and [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) is used to handle Monorepo features.

### Developing

Recommended Node version: 16  
Recommended NPM version: 8

Install dependencies:

```bash
npm install
```

And run local dev server for _Web_ and _Studio_:

```bash
npm run dev
```

Server starts at `http://localhost:3000`.

### Deployment

Deployment is handle automatically by Vercel listening to webhooks from Github.  
Commits to feature branch with a Pull Request are deployed to preview environment.  
Commits to master are deployed to production environment.

Sanity studio currently have to be deployed manually.

```bash
npm run deploy
```

### Image attributions

Some images used across the site has been found at `https://unsplash.com/`.

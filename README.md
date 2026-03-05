# KodeWorks.no

## Getting started

Kodeworks.no repository is structured as a monorepo.
[Turborepo](https://turbo.build/) and [npm Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) is used to handle monorepo features.
See `turbo.json` and `package.json`.

Dependencies are hoisted with single root lockfile `package-lock.json`.

`web` workspace is a NextJS app that serves kodeworks.no, see [NEXT.js](https://nextjs.org/).  
`studio` workspace is a Sanity Studio application and is the CMS behind kodeworks.no, see [Sanity Studio](https://www.sanity.io/).

_Web_ is deployed and hosted with [Vercel](https://vercel.com/), while _Studio_ uses Sanity's own deployment and hosting.  

### Developing

See `.nvmrc` for recommended node version.

Install dependencies (in root directory of the repository):
```bash
npm install
```

Run local dev servers of _Web_ and _Studio_ simulatneously from root directory:
```bash
npm run dev
```

Server starts at `http://localhost:3000` for web and `http://localhost:3333/` for studio.

Build _Web_ and _Studio_:
```bash
npm run build
```

Validate Sanity documents against a specific dataset:
```bash
npm run studio:validate:development
npm run studio:validate:production
```

### Deployment
Deployment is handled automatically by Vercel listening to webhooks from Github.  
Commits to feature branch with a Pull Request are deployed to preview environment.  
Commits to master are deployed to production environment.
Vercel runtime should use Node.js 24.

Sanity studio currently have to be deployed manually. In the root directory, run:
```bash
npm run studio:deploy
```

### Image attributions
Some images used across the site has been found at `https://unsplash.com/`.

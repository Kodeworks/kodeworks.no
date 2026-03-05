# KodeWorks.no

## Getting started

KodeWorks.no `web` is built with [Next.js](https://nextjs.org/) and is currently written in **TypeScript**.

### Building

Recommended Node version: v22.22 (see `.npmrc` in project root).

Install dependencies using
```bash
npm install
```

And run the server locally using
```bash
npm run dev
```

Server starts at `http://localhost:3000`.

Build `web`:
```bash
npm run build
```

### Image attributions

Some images used across the site has been found at `https://unsplash.com/`.


## Sanity typegen

Sanity typegen generates types on groq queries in this repository. For it to work, the query needs to be assigned to a constant with a unique name and needs to use `groq` template literal. See [documentation](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen).

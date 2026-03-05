# KodeWorks.no

## Getting started

KodeWorks.no `web` is built with [Next.js](https://nextjs.org/) and is currently written in **TypeScript**.

### Building

For recommended Node version see `.nvmrc` in project root.

For dependency install, dev server and build commands, see Readme in the repository root.

Feel free to run `npm install`, `npm run dev`, `npm run build` in this repository also.

### Image attributions

Some images used across the site has been found at `https://unsplash.com/`.

## Sanity typegen

This repository relies on automatic type generations for Sanity content and results of GROQ queries exetuded in this repository. See [Sanity Typegen documentation](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen).
 
For Sanity Typegen to work on GROQ queries, the query needs to be assigned to a constant with a unique name and needs to use `groq` template literal.

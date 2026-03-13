# Jiyu Kaku

Fresh [Next.js](https://nextjs.org) 16 baseline for `jiyu-kaku`, set up for the normal Next.js local loop and a Vercel deployment workflow.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- Vercel CLI workflow via `npx vercel`

## Getting Started

Use the standard Next.js development server for day-to-day work:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Primary source files:

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`

## Vercel Workflow

Use these commands when you want local behavior tied to a Vercel project:

```bash
npm run vercel:link
npm run vercel:pull
npm run vercel:dev
```

What each command does:

- `vercel:link`: connects this local repository to a Vercel project
- `vercel:pull`: pulls Vercel project settings and environment variables for local parity
- `vercel:dev`: runs the Vercel local environment on port `3000`

For most frontend work, `npm run dev` should remain the default loop. Use `vercel:dev` when you specifically need Vercel environment parity.

## Deployment

Create a production build locally:

```bash
npm run build
```

Deploy with Vercel:

```bash
npm run vercel:deploy
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Vercel CLI Docs](https://vercel.com/docs/cli) - local and deployment workflow
- [Vercel `dev` Docs](https://vercel.com/docs/cli/dev) - when to use `vercel dev`

## Node Version

This project targets `24.x` in `package.json` to align with Vercel's current LTS runtime line.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

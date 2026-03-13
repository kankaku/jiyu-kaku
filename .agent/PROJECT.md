# PROJECT

## Goal

Create a clean, modern Next.js baseline for `jiyu-kaku` with a Vercel-friendly local development and deployment workflow.

## Architecture

- Framework: Next.js App Router
- Runtime: Node.js
- UI: React with TypeScript
- Styling: Tailwind CSS v4 baseline from the current Next.js starter
- Deployment target: Vercel

## Workspace Structure

- `src/app/` for route modules and global layout
- `public/` for public assets
- `.agent/` for project context and execution state

## Key Decisions

- Start from a fresh `create-next-app` scaffold instead of restoring older project files.
- Use TypeScript, ESLint, App Router, and the default modern Next.js starter configuration.
- Keep local development centered on `next dev`; document `vercel dev` as an environment parity tool, not the default loop.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint
- Vercel CLI

## Milestones

- `M0`: Initialize project context and baseline app scaffold
- `M1`: Confirm local verification and Vercel workflow
- `M2`: Build product-specific UI and features

# AGENTS.md

## Project Overview

This repository hosts `jiyu-kaku`, a Next.js application intended to run locally with the standard Next.js developer experience and deploy cleanly on Vercel.

## Workspace Layout

- `src/app/`: App Router routes, layouts, pages, and route metadata
- `src/components/`: Reusable UI components
- `public/`: Static assets served by Next.js
- `.agent/`: Persistent project context and execution planning for Codex sessions

## Required Reading Order

Read these files in order at the start of each new session:

1. `AGENTS.md`
2. `.agent/PROJECT.md`
3. `.agent/STATUS.md`
4. The latest active plan in `.agent/execplans/`

## Project-Specific Rules

- Treat this repository as a Vercel-hosted Next.js application using the App Router.
- Prefer current Vercel and Next.js defaults unless the user asks for custom deviations.
- Keep the initial scaffold minimal, production-safe, and easy to extend.
- Verify changes with local project checks before committing.
- Update `.agent/STATUS.md` and the active exec plan whenever the project milestone meaningfully changes.

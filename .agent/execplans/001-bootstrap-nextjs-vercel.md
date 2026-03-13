# Bootstrap Next.js and Vercel Baseline

## Objective

Set up a new Next.js application from an empty repository, add the minimum Vercel development workflow support, and verify the scaffold is ready for further feature work.

## Steps

1. [x] Create required agent context files
2. [x] Generate a fresh Next.js app in the repository root
3. [x] Add Vercel CLI configuration and developer documentation
4. [x] Run local verification checks
5. [ ] Commit, push, open PR, and request Codex review

## Notes

- The repository was intentionally reset to a clean state on `main`.
- The current setup should favor Next.js defaults unless a clear project need requires deviation.
- `next dev` will be the primary local loop; `vercel dev` will be documented for environment parity.

## Verification

- `npm run lint`
- `npm run build`
- `npm run dev` and `curl -I http://127.0.0.1:3000`
- `npm run vercel:build` was intentionally blocked until the repository is linked and project settings are pulled from Vercel

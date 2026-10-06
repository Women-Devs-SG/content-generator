# Repository guidance

This repository is the Women Devs SG Content Generator, a Next.js app for
editing and exporting branded social media visuals.

## Project conventions

- Read `README.md` and `CONTRIBUTING.md` for setup and contribution rules.
- Wait for a maintainer to assign an issue before starting; keep each PR to one
  issue.
- Keep templates under `templates/<template-name>/` and their styles in the
  matching CSS module.
- Reuse platform dimensions from `lib/platformSizes.ts`, brand colors from
  `lib/colors.ts`, and text scales from `lib/typography.ts`.
- Keep template controls and preview behavior consistent with the existing
  editor in `pages/index.tsx` and shared components in `components/`.
- For UI changes, inspect all four supported platform sizes and export a PNG
  to compare with the preview. The supported sizes are listed in
  `lib/platformSizes.ts`.
- Use the bundled fonts in `public/fonts/` where practical. Remote fonts or
  images may not appear in exported images.

## Validation

Run these checks before proposing a change:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

The Husky pre-commit hook runs the format, lint, and type checks. Husky installs
it when `npm ci` runs the repository's `prepare` script. This repository does
not currently have an automated test suite; do not report tests as passing.
For UI changes, follow the manual preview and export checks above.

When changing framework or package APIs, check the current upstream
documentation and preserve the project's existing versions and conventions.

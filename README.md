# Women Devs SG Content Generator

Generate on-brand visuals for social/community platforms with ready-made templates and strict layout rules per platform.

- **Live app**: https://wds-content-generator.vercel.app/
- **Templates**: `Hacktoberfest Update`, `Event Promotion`
- **Platforms**: Instagram post/story, LinkedIn cover, Meetup banner (sizes auto-applied)
- **Export**: One-click image export of the composed canvas

## Tech stack
- **Next.js** 15, **React** 19, **TypeScript**
- **Tailwind CSS** for styling
- Lightweight components for layout, typography scale, and export-to-image

## Local development
```bash
# install deps
npm install

# run dev server
npm run dev

# build & start
npm run build
npm start
```

## Linting & formatting
```bash
# ESLint (Next.js + TS + React)
npm run lint
# Auto-fix
npm run lint:fix
# Prettier
npm run format
```

## Project structure (high-level)
- `pages/index.tsx` — editor UI and preview pane
- `templates/hacktoberfest/` — Hacktoberfest card layout
- `templates/event-promo/` — Event Promotion card layout
- `components/` — shared UI (logo, buttons, preview, export)
- `lib/` — platform sizes and typography scale

## Notes
- Export uses a DOM-to-image utility to capture the `#canvas` element.
- Each template enforces responsive spacing, typography, and platform-safe layout rules.

## Contributing
Issues and PRs welcome. Keep commits small and focused; follow the existing code style and lint rules.

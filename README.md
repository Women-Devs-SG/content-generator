# Women Devs SG Content Generator

Generate on-brand visuals for social/community platforms with ready-made templates and strict layout rules per platform.

- **Live app**: https://wds-content-generator.vercel.app/
- **Templates**: `Hacktoberfest Update`, `Event Promotion`
- **Platforms**: Instagram post/story, LinkedIn cover, Meetup banner (sizes auto-applied)
- **Export**: One-click image export of the composed canvas

## Tech stack

- **Next.js** 16, **React** 19, **TypeScript**
- **Tailwind CSS** for styling
- Lightweight components for layout, typography scale, and export-to-image

## Local development

Requires Node 22 (see `.nvmrc`).

```bash
# install deps
npm ci

# run dev server
npm run dev

# build & start
npm run build
npm start
```

## Linting & formatting

```bash
# ESLint (TS + React)
npm run lint
# Typecheck
npm run typecheck
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

Issues and PRs are welcome, including during Hacktoberfest! Please read the [contribution guidelines](CONTRIBUTING.md) before you start: ask to be assigned to an issue first, and keep each PR to one issue. All contributors are expected to follow our [Code of Conduct](.github/CODE_OF_CONDUCT.md).

To report a security issue, see [SECURITY.md](SECURITY.md).

## License

The code is released under the [MIT License](LICENSE). The bundled Montserrat fonts are licensed separately under the [SIL Open Font License](public/fonts/Montserrat/OFL.txt).

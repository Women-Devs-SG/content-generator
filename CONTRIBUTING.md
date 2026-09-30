# Contributing

## Welcome to Women Devs Singapore!👋

Thank you for considering contributing to the **Women Devs SG Content Generator**! Your involvement helps us create an inclusive and impactful space for developers of all levels. This guide provides a clear pathway for you to start contributing, whether you’re new to open source or an experienced contributor.

By contributing, you agree to follow our [Code of Conduct](.github/CODE_OF_CONDUCT.md) and treat everyone with respect and kindness. If you witness or experience a violation of the Code of Conduct, please report it to [womendevssg@gmail.com](mailto:womendevssg@gmail.com).

## Table of Contents

- [What We’re Looking For](#what-were-looking-for)
- [Getting Started](#getting-started)
- [Working with Issues](#working-with-issues)
- [Setting Up Your Local Environment](#setting-up-your-local-environment)
- [Code Style and Formatting](#code-style-and-formatting)
- [Working on Templates](#working-on-templates)
- [Creating a Pull Request](#creating-a-pull-request)
- [Awaiting Review](#awaiting-review)

---

## What We’re Looking For

We welcome contributions in many forms, including:

- **Templates:** Designing and building new on-brand templates, or new platform sizes for existing ones.
- **Design:** Mockups, layout and typography improvements, decor ideas, and accessibility feedback (no code required!).
- **Documentation:** Writing guides, improving README files, and enhancing project clarity.
- **Bug Reports:** Identifying and reporting bugs, such as layout overflow or export problems.
- **Code Contributions:** Fixing bugs, adding new features, or refactoring existing code.
- **Ideas and Feedback:** Sharing suggestions for improvement in our Telegram group.
- **Outreach:** Helping spread the word about our projects through blogs, social media, or talks.

Whether you're fixing a typo or tackling a major issue, all contributions are valuable!

⚠️ **Disclaimer:** While we welcome contributions from everyone around the world, preference will be given to:

- Women developers based in Singapore
- Members of the **[WDS Telegram community group](https://t.me/+hh3Fts4oDG41NzQ1)**

This ensures our Community Coding Month efforts stay aligned with our mission of building a strong local women-in-tech community.

### 💡 Tips for First-Time Contributors

- Look for issues labeled `good first issue`, `hacktoberfest`, or `no-coding-required`.
- Read this guide before submitting a PR.
- Don’t be afraid to ask questions — [maintainers](https://github.com/orgs/Women-Devs-SG/teams/wds-maintainers) are here to help.
- Start small: even fixing a typo or adding a link counts!
- Celebrate your contributions and share your PRs with the community.

We’re excited to have you here and can’t wait to see your contributions and ideas!

---

## Getting Started

Before you dive in:

1. **Read Our Code of Conduct:** This ensures a welcoming and collaborative space for everyone.
2. **Check Existing Issues:** Look for open issues in the repository to see where help is needed.
3. **Start Small:** We label beginner-friendly issues as `good-first-issue` to help you ease into the project.
4. **Understand the project:** Read the [README](README.md) for setup and the project structure, and try the [live app](https://wds-content-generator.vercel.app/) to see how templates and platforms work.
5. **Join our Telegram group:** To participate in Community Coding Month activities and connect with the community, please join the **[WDS Telegram group](https://t.me/+hh3Fts4oDG41NzQ1)**.

---

## Working with Issues

### Finding an Issue

- Visit the Issues tab in the repository.
- Look for issues tagged with `good-first-issue` or `help-wanted`.
- Leave a comment on the issue you'd like to work on, and a maintainer will assign it to you.

### ❤️ Our Contribution Etiquette

To ensure that everyone has a fair and positive experience, we ask all contributors to follow these guidelines. We are a community focused on providing opportunities, and these rules help us achieve that mission.

**1. Ask Before You Work**

- Please comment on an issue and ask to be assigned **before** you start working.
- Do not work on issues that have already been assigned to someone else.

**2. Wait for Assignment**

- After commenting, please wait for a maintainer to formally assign the issue to you.
- A maintainer's assignment is the official green light to begin your work.

**3. Respect Our `women-devs-only` Issues**

- As part of our core mission to empower women in tech, some issues are labeled **`women-devs-only`**.
- **These issues are strictly reserved to give women developers an opportunity to learn and contribute in a safe, supportive space.** We kindly ask that our allies respect this policy and leave these specific issues for them.

**4. One Issue at a Time**

- To give everyone a chance, you can only be assigned **one issue at a time** across all WomenDevsSG repositories.
- Please also ensure that each Pull Request (PR) you submit solves **only one issue**. Do not bundle fixes for multiple issues into a single PR.

**We appreciate your cooperation in helping us build a fair and supportive open-source environment!**

### Creating an Issue

If you spot a bug or have an idea that isn’t already listed:

1. Open a new issue and use the appropriate template (Bug Report, Feature Request, Template Request, or Documentation Improvement).
2. Be clear and concise in your description. For visual bugs, include the template, the platform size, and a screenshot.
3. Wait for feedback from maintainers before proceeding.

---

## Setting Up Your Local Environment

To work on an issue:

1. Fork the repository to your GitHub account.
2. Clone your fork and move into it:
   ```bash
   git clone https://github.com/your-username/content-generator.git
   cd content-generator
   ```
3. Add the original repository as `upstream` so you can keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/Women-Devs-SG/content-generator.git
   ```
4. Install dependencies and start the dev server, using Node 22 (see `.nvmrc`):
   ```bash
   npm ci
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000). No accounts or environment variables are needed.
5. Create a branch from the latest `upstream/main`:
   ```bash
   git fetch upstream
   git checkout -b your-branch-name upstream/main
   ```
6. Make your changes.
7. Before opening a PR, run these checks (CI runs them too):

   ```bash
   npm run format:check
   npm run lint
   npm run typecheck
   npm run build
   ```

   If the format check fails, run `npm run format`. If lint fails, `npm run lint:fix` can fix many problems automatically. See [Code Style and Formatting](#code-style-and-formatting) for details.

   There is no automated test suite. For UI changes, check your change in the browser on **every platform size** (Instagram post, Instagram story, Meetup banner, LinkedIn cover) and **export a PNG** to confirm the output matches the preview.

AI-assisted contributions follow the same review process. Verify generated changes yourself and describe the checks you actually ran in your PR.

---

## Code Style and Formatting

We use [Prettier](https://prettier.io/) to format code and [ESLint](https://eslint.org/) to catch problems, so you don't need to worry about style by hand.

- **Formatting:** Run `npm run format` to format the repo using the settings in `.prettierrc` (no semicolons, single quotes, 2-space indentation, 80-character lines). You can also turn on format-on-save in your editor with the Prettier extension.
- **Linting:** Run `npm run lint`. If it fails, `npm run lint:fix` can fix many problems automatically; fix the rest by hand.
- **CI:** Every PR runs `npm run format:check` and `npm run lint`. If either fails, run the commands above, commit the result, and push again.
- **Keep PRs focused:** Formatting should only change the files you worked on. If `npm run format` changes other files, leave those changes out of your PR.

---

## Working on Templates

Each template is a React component under `templates/<template-name>/` with its own CSS module. A few things to know:

- **Registering a template:** Templates are listed in the `templates` array in `pages/index.tsx`, which also holds the editor state and form fields for each template.
- **Platform sizes:** Canvas sizes live in `lib/platformSizes.ts`. A template must look good at all of them, including the very wide, short LinkedIn cover.
- **Brand and typography:** Use the brand colors from `lib/colors.ts` and the type scale from `lib/typography.ts` instead of hard-coded values, so everything stays on-brand.
- **Fonts and images:** Use the bundled Montserrat fonts in `public/fonts/`. Export captures the `#canvas` element with `html-to-image`, so fonts and images that load from other sites may be missing from exported images; always test an export.
- **Content:** Use fictional names and placeholder text for default content and screenshots.

For a new template, please open a **Template Request** issue with a sketch or mockup first, so maintainers can agree on the design before you build it.

---

## Creating a Pull Request

Once you've completed your changes:

1. Push your branch to your forked repository:
   ```bash
   git push origin your-branch-name
   ```
2. Open a pull request (PR) from your branch to the repository's `main` branch.
3. Fill in the [pull request template](.github/PULL_REQUEST_TEMPLATE.md), which GitHub adds to the description automatically. Link the issue it resolves (for example, `Closes #123`).

### PR Checklist:

- The PR solves only the one issue you were assigned.
- The checks from step 7 of [Setting Up Your Local Environment](#setting-up-your-local-environment) pass, and you've ticked the ones you ran in the template.
- For UI changes, you've checked every platform size, exported a PNG, and added before/after screenshots.
- Your commit messages and PR title follow the existing style, such as `feat: add workshop template` or `fix: logo cut off on LinkedIn cover`.

---

## Awaiting Review

Once you’ve submitted your PR:

- A maintainer will review your changes. This may take some time — thank you for your patience!
- If changes are requested, you can update your PR by pushing to the same branch.

Remember, reviews are meant to ensure the quality and consistency of the project, not to criticize you personally.

---

Thank you for making WomenDevsSG a better space for everyone! 💙

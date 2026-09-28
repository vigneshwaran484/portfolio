# vignesh-portfolio147

Personal portfolio for Vigneshwaran C. React + Vite + Tailwind, editor-inspired design with light and dark themes, deployed on Netlify.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # serves dist/ on :4173
```

## Edit content

Everything visible is data. Layout components never need touching for content changes.

| File | What it controls |
|---|---|
| `src/data/profile.ts` | name, tagline, summary, links, education, `currentlyBuilding` line |
| `src/data/projects.ts` | `featured[]` (flagship cards) and `more[]` (compact grid) |
| `src/data/experience.ts` | work log entries |
| `src/data/skills.ts` | stack readout groups |
| `src/data/achievements.ts` | competitions, roles, certifications |
| `src/data/security.ts` | open-source PRs, CTF entries, LeetCode/SkillRack stats (snapshots: update the numbers) |

Project `status` must be one of `live`, `complete`, `in-progress`, `research`. The badge copy is fixed on purpose.

## Resume

Drop the real file at `public/resume.pdf`. The current file is a one-line placeholder so the link never 404s.

## Design tokens

Colors live in `src/styles/index.css` (dark tokens on `:root`, light overrides on `[data-theme="light"]`) and are mapped into Tailwind in `tailwind.config.ts`.
Cards, buttons, chips, the hero code window and reveal motion are in the same file under `@layer components`.
Fonts: Inter (text) and JetBrains Mono (code/labels). The theme toggle saves to localStorage; first visit follows the OS setting.

## Deploy (Netlify)

Site name: `vigneshwaran-c-portfolio` (the old portfolio site; this build overwrites it). `netlify.toml` sets build command, publish dir, SPA redirect and cache headers.
Connect the GitHub repo in Netlify, or run `npx netlify-cli deploy --prod --dir=dist` after `npm run build`.

## TODO after first deploy

- Replace `public/resume.pdf`.
- Add repo links for PulseTN, PromptGuard, SentinelTrace, Alumni Nexus, Law-Suite in `src/data/projects.ts` when public.

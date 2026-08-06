# Kelvar Industries

The production website for [Kelvar Industries](https://www.kelvarindustries.com), an engineering company building intelligent autonomous systems across air, land, sea, and space.

The site presents Kelvar's platform portfolio, KELVARX atmospheric programme, research and development work, company story, and career opportunities through an editorial, motion-led interface.

## Technology

- [Next.js 16](https://nextjs.org/) with the App Router and Turbopack
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion for React](https://motion.dev/)
- [Bun](https://bun.sh/) for dependency locking and tests
- Locally hosted Barlow Condensed, DM Mono, and Inter fonts

## Getting started

### Requirements

- Node.js 20 or later
- Bun 1.3 or later

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
bun run dev          # Start the local development server
bun run lint         # Run ESLint with zero-warning enforcement
bun run format:check # Verify Prettier formatting
bun run typecheck    # Check TypeScript without emitting files
bun test             # Run unit and content-integrity tests
bun run build        # Create an optimised production build
bun run start        # Serve the production build
bun run check        # Run the complete local quality gate
```

## Routes

| Route                 | Purpose                                                             |
| --------------------- | ------------------------------------------------------------------- |
| `/`                   | Company overview, platforms, mission, focus areas, and global reach |
| `/about`              | Mission, story, values, team, and KELVARX introduction              |
| `/focus`              | Air, sea, land, and space operating domains                         |
| `/kelvarx`            | KELVARX atmospheric and near-space programme                        |
| `/kelvarx/stratokite` | StratoKite platform story and specifications                        |
| `/drones/dome`        | Dome flagship platform page                                         |
| `/research`           | Research, Development & Deployment programmes                       |
| `/careers`            | Culture, benefits, filters, and open positions                      |
| `/contact`            | Enquiries and company contact details                               |

## Project structure

```text
app/                   Routes, layouts, metadata, and page composition
features/              Cohesive capabilities with explicit ownership
components/
  about/               About-page sections
  careers/             Career culture, filters, and roles
  drones/              Product-page layouts and stories
  focus/               Focus-domain page sections
  home/                Homepage feature sections
  layout/              Navbar, menu, splash screen, and footer
  map/                 Global network map and globe
  research/            RD&D programme sections
  ui/                  Shared presentation and interaction primitives
content/               Confirmed copy and structured page data
lib/                   Pure utilities, SEO helpers, and motion variants
public/assets/         Local fonts, images, posters, and WebM videos
tests/                 Content-integrity tests
types/                 Shared content and component contracts
```

### Separation of concerns

The codebase follows five main boundaries:

1. `app/` composes routes and owns route metadata.
2. `features/` owns cohesive product capabilities and their behaviour.
3. `components/` owns shared presentation and page-specific sections.
4. `content/` owns confirmed copy and structured data.
5. `types/` and `lib/` own shared contracts and pure behaviour.

Page files should remain small. Stateful behaviour belongs in focused hooks, repeated interface patterns belong in `components/ui/`, and factual content should not be embedded inside visual components. The complete dependency rules and deliberate exceptions are documented in [`ARCHITECTURE.md`](ARCHITECTURE.md).

## Content model

Platform summaries are defined in [`content/products/summaries.ts`](content/products/summaries.ts). Detailed Dome content lives in [`content/products/dome.ts`](content/products/dome.ts), while KELVARX and research programmes have their own content modules.

Current platform hierarchy:

```text
Platforms
├── StratoKite → /kelvarx/stratokite
├── Robobot
├── Hydrax
└── Dome → /drones/dome

KELVARX
├── StratoKite
├── StratoCopter
└── StratoSatellite
```

Robobot and Hydrax remain concise because they are still in development and do not yet have the same confirmed product depth as Dome.

## Design system

The complete visual and interaction teardown is documented in [`DESIGN.md`](DESIGN.md). It covers:

- Brand and visual principles
- Colour and typography tokens
- Borders, spacing, grids, and imagery
- Motion timing and reduced-motion behaviour
- Navigation and splash choreography
- The animated Kelvar button
- Every shared and feature-level component
- Responsive, accessibility, and performance rules
- A design-review checklist

Global tokens and component-layer CSS live in [`app/globals.css`](app/globals.css) and are exposed through Tailwind CSS v4 utilities such as:

```text
bg-bg
bg-surface
bg-card
text-primary
text-muted
text-dim
border-border-col
```

Use semantic utilities instead of arbitrary CSS-variable colour expressions.

## Motion and accessibility

Motion is implemented with Motion for React and targeted CSS transitions. The site does not require GSAP.

When adding animation:

- Prefer transforms and opacity.
- Respect `prefers-reduced-motion`.
- Keep interactive feedback faster than environmental motion.
- Use viewport-once reveals unless replay communicates useful state.
- Do not hide essential content until JavaScript hydrates.
- Provide focus behaviour equivalent to hover behaviour.

Decorative videos are muted, stripped of audio tracks, hidden from assistive technology, and loaded through [`LazyVideo`](components/ui/lazy-video.tsx). Videos pause outside the viewport and do not autoplay for reduced-motion or data-saving users.

## Performance conventions

- Local fonts are loaded with `next/font/local`.
- Images use `next/image` where responsive sources are possible.
- Native video posters use lightweight, appropriately sized JPEG files.
- Below-the-fold video sources are attached only near the viewport.
- The heavy network map and globe are deferred until users approach the section.
- Homepage LCP content is visible without waiting for hydration.
- The splash screen runs once per browser session and uses a shorter mobile sequence.
- WebM background videos contain video streams only—no unused audio.

When adding media, verify its dimensions and transfer size before committing it.

## Validation

Before handing off a change, run:

```bash
bun run lint
bun run format:check
bun run typecheck
bun test
bun run build
git diff --check
```

The content-integrity tests currently verify:

- Confirmed platform ordering
- StratoKite's relationship to KELVARX
- Unique content slugs
- Summary/detail consistency
- Career location parsing, filtering, and grouping

## SEO

Global metadata is defined in [`app/layout.tsx`](app/layout.tsx). Internal routes define focused metadata through their route layouts. Shared SEO utilities live in [`lib/seo.ts`](lib/seo.ts).

New public pages should include:

- A unique title and description
- Canonical URL
- Open Graph metadata
- Twitter metadata
- Descriptive link text
- A sequential heading structure

## Deployment

The production domain is:

```text
https://www.kelvarindustries.com
```

[`proxy.ts`](proxy.ts) permanently redirects the default Vercel hostname to the canonical production domain. Static assets are excluded from this redirect matcher.

Build the same artefact used in production with:

```bash
bun run build
```

## Supporting documentation

- [`DESIGN.md`](DESIGN.md) — complete design and interaction system
- [`INSTRUCTIONS.md`](INSTRUCTIONS.md) — KELVARX implementation background and client direction

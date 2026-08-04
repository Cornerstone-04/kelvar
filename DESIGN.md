# Designing Kelvar Industries

> A visual, interaction, and component teardown of the Kelvar Industries website.

This document explains how the Kelvar website looks, moves, and behaves—and why. It is both a design reference and an implementation guide for anyone extending the site.

Its presentation is inspired by the component-by-component reasoning in [Tearing Down Zya's Waitlist](https://usul.fyi/tearing-down-zya-waitlist): begin with the visual thesis, isolate the important patterns, explain their anatomy, then document the production constraints that keep them coherent.

---

## 01. The visual thesis

Kelvar is not styled like a consumer software company. It presents itself as an advanced engineering organisation working across autonomy, robotics, atmospheric intelligence, and surveillance.

The interface should feel:

- **Precise:** thin rules, disciplined grids, numbered systems, and deliberate alignment.
- **Technical:** mono labels, telemetry language, restrained colour, and status indicators.
- **Monumental:** condensed headlines, oversized type, full-width imagery, and near-viewport scenes.
- **Active:** information reacts to scrolling and pointing without becoming playful or weightless.
- **Credible:** imagery stays photographic and operational rather than glossy, fantastical, or aggressively futuristic.

The central tension is **military precision versus atmospheric scale**. The grids, borders, labels, and mono type provide precision. Large imagery, parallax, oversized headings, and negative space provide scale.

### The governing rule

Motion and decoration must reveal structure, state, or hierarchy. If an effect does none of those things, it probably does not belong.

---

## 02. Foundations

The global system is defined in [`app/globals.css`](app/globals.css) and registered with Tailwind CSS v4 through `@theme inline`.

### Colour system

| Tailwind utility | Token | Value | Purpose |
| --- | --- | --- | --- |
| `bg-bg`, `text-bg` | `--bg` | `#07072a` | Primary deep-navy canvas |
| `bg-surface` | `--surface` | `#0d0d2e` | Raised or alternating sections |
| `bg-card` | `--card` | `#282846` | Menus, dropdowns, and stronger panels |
| `border-border-col` | `--border-col` | `#484761` | Visible structural borders |
| `text-primary` | `--primary` | `#f5f5f9` | Headlines, active controls, primary copy |
| `text-muted` | `--muted` | `#9494a8` | Supporting copy and secondary labels |
| `text-dim` | `--dim` | `#7c7c94` | Indexes, inactive states, quiet metadata |
| `bg-nav-background` | `--nav-background` | `#07072abf` | Translucent navigation surface |

Kelvar intentionally has no bright accent colour. Hierarchy comes from luminosity, scale, spacing, and motion—not from introducing unrelated hues.

#### Colour rules

1. Use semantic Tailwind utilities such as `text-muted`, `bg-surface`, and `border-border-col`.
2. Use white alpha values only for local optical adjustments where no semantic token exists.
3. Do not add a “tech blue,” neon green, or signal colour to make an element look interactive.
4. Active controls move toward `text-primary`; inactive information recedes toward `text-muted` or `text-dim`.
5. Large images are normally darkened and desaturated so typography remains dominant.

### Typography

Fonts are loaded locally in [`app/layout.tsx`](app/layout.tsx).

| Role | Typeface | Tailwind utility | Character |
| --- | --- | --- | --- |
| Display | Barlow Condensed | `font-heading` | Compressed, monumental, industrial |
| Interface/data | DM Mono | `font-mono` | Technical, measured, telemetry-like |
| General UI | Inter | `font-sans` | Neutral and highly readable |

#### Display typography

Headings are uppercase globally, tightly led, and frequently use responsive `clamp()` sizing. Hero type commonly ranges from roughly `3rem` to `10rem`. The condensed face permits very large language without excessive horizontal width.

Outlined words are secondary layers, not decorative duplicates. They usually complete a thought while preserving hierarchy—for example, a solid first phrase followed by a low-contrast outlined phrase.

#### Mono typography

DM Mono is used for:

- Section labels
- Descriptions and technical narratives
- Status indicators
- Navigation indexes
- Metrics and capability lists
- Buttons and CTAs

Small mono copy uses generous letter spacing when functioning as metadata. Paragraphs use normal tracking and line heights around `1.75–1.95`.

### Borders and surfaces

Borders are Kelvar's primary organisational device. Sections are divided by one-pixel rules instead of shadows or rounded cards.

- Default section boundary: `border-white/10` or `border-border-col`
- Very quiet internal grid: `#ffffff12`
- Interactive border: dim at rest, complete and bright on hover
- Corners: normally square
- Shadows: reserved for floating utility surfaces such as dropdowns

Cards are produced by placing a one-pixel-gap grid on a light translucent background, then giving each child the page background. This makes dividers precise without duplicating border logic.

### Spacing and grids

Primary page gutters are:

- Mobile: `px-6`
- Desktop: `md:px-10` or `md:px-12`

Major vertical section spacing is usually:

- Mobile: `py-12` to `py-16`
- Desktop: `md:py-20` to `md:py-28`

Layouts become asymmetrical when hierarchy benefits from it: a narrow label or sticky narrative column beside a larger visual/data column. Equal columns are used for direct comparisons such as Mission versus Story.

---

## 03. Motion philosophy

Kelvar's motion vocabulary is built with CSS transitions and Motion for React. GSAP is intentionally not required.

### The three motion scales

#### Micro motion: 200–350ms

Used for immediate feedback:

- Arrow translation
- Border completion
- Hover colour changes
- Menu indicators
- Dropdown chevrons

Micro motion should feel mechanical and responsive.

#### Section motion: 400–800ms

Used for revealing content:

- Opacity plus `12–24px` vertical rise
- Sentence illumination
- Staggered cards and list items
- Section rules growing across the page

The standard arrival curve is `cubic-bezier(0.16, 1, 0.3, 1)`. It moves quickly at first and settles softly without feeling elastic.

Shared variants live in [`lib/motion-variants.ts`](lib/motion-variants.ts):

- `riseIn`: `14px` rise over `550ms`
- `fadeIn`: opacity over `800ms`
- `viewportOnce`: prevents decorative reveals from replaying repeatedly

#### Environmental motion: 900–1600ms

Used for large visual systems:

- Slow image scaling on hover
- Scroll-linked parallax
- Hero drift and fade
- Splash-screen choreography
- Globe rotation

Environmental movement must stay slower than controls so the interface remains usable while the scene feels alive.

### Staggering

Repeated items normally stagger by `50–100ms`. Stagger communicates sequence and lets users parse a system. It should not make the final item wait excessively.

### Scroll-linked motion

Scroll is used for three jobs:

1. **Depth:** hero copy and imagery drift at different speeds.
2. **Reading progress:** sentences move from dim to fully visible.
3. **Continuity:** sticky visual or narrative panels remain anchored while related detail passes beside them.

Scroll should never be hijacked. Native document movement remains intact.

### Reduced motion

Every continuous, parallax, or elaborate effect must respect `prefers-reduced-motion`.

The reduced version must:

- Render content in its final readable state.
- Avoid continuous looping motion where possible.
- Use automatic rather than smooth programmatic scrolling.
- Avoid delaying access to page controls.

`useReducedMotion()` is used throughout the motion-heavy components. The global animated button frame also removes its transition delays under reduced motion.

---

## 04. The animated Kelvar button

Implementation:

- [`components/ui/kelvar-button.tsx`](components/ui/kelvar-button.tsx)
- `.kelvar-button-frame` in [`app/globals.css`](app/globals.css)

The button is intentionally quiet at rest. Its complete frame is revealed only when the user points to or focuses it.

### Anatomy

1. A real one-pixel border establishes the resting silhouette.
2. `::before` draws the horizontal edges from opposite corners.
3. `::after` draws the vertical edges after a `100ms` delay.
4. The icon translates in the direction of the action.
5. Internal and external destinations use different arrow geometry.

The effect communicates activation without filling the button with a foreign accent colour.

### Usage

Use `KelvarButton` for standard CTAs. Use the `kelvar-button-frame` class directly only when a specialised layout cannot accept the component API.

Do not:

- Remove the visible focus state.
- Put a bright fill behind it.
- Use rounded pill geometry.
- Animate every CSS property with `transition-all` when only colour or transform changes.

---

## 05. Navigation as an instrument panel

Implementation:

- [`components/layout/site-navbar.tsx`](components/layout/site-navbar.tsx)
- [`components/layout/navigation/navigation-menu.tsx`](components/layout/navigation/navigation-menu.tsx)
- [`components/layout/navigation/nav-block.tsx`](components/layout/navigation/nav-block.tsx)
- [`components/layout/navigation/use-navbar-visibility.ts`](components/layout/navigation/use-navbar-visibility.ts)

The fixed navbar is deliberately sparse: wordmark, bird mark, and menu trigger. The menu expands into large rectangular blocks rather than a conventional list.

### Behaviour

- Downward scroll after the threshold hides the navbar.
- Upward scroll restores it.
- Opening the menu always restores the navbar.
- Platforms and RD&D drill into their own menu level.
- Submenus replace the main menu horizontally instead of expanding its height.
- Hover activates the block, indicator dot, background field, and typing/glitch label.

The navbar publishes `--site-navbar-offset`. Sticky sub-navigation, such as the Focus domain navigation, consumes this value so it moves flush to the viewport when the main navbar disappears.

### Why the blocks are large

The navigation is part of the site's spatial identity. Large blocks create obvious targets, accommodate touch, and make the limited information architecture feel deliberate rather than sparse.

---

## 06. Splash-screen choreography

Implementation: [`components/layout/site-splash.tsx`](components/layout/site-splash.tsx)

The splash establishes the brand before handing control to the website. It uses a measured sequence rather than a loading spinner:

1. Technical calibration language appears clearly enough to be read.
2. The bird mark and Kelvar name establish identity.
3. Lines and corner marks reinforce the optical-instrument language.
4. The overlay exits and reveals the page.
5. Session storage prevents the sequence from blocking every route visit.

The splash is intentionally slower than ordinary UI motion because it is a one-time brand event. It must still release the page promptly and expose a reduced-motion final state.

---

## 07. Shared interface components

### `AmbientField` and `NoiseOverlay`

File: [`components/ui/ambient-field.tsx`](components/ui/ambient-field.tsx)

`AmbientField` adds low-contrast radial illumination. `NoiseOverlay` adds a tiny procedural grain generated from inline SVG turbulence. Together they stop large navy surfaces from feeling digitally flat.

They are always decorative, absolutely positioned, and pointer-transparent.

### `CtaSection`

File: [`components/ui/cta-section.tsx`](components/ui/cta-section.tsx)

A centered page-ending conversion block with an optional outlined second line. It combines monumental display type, a short mono explanation, and the standard Kelvar button.

Use one decisive terminal CTA per narrative. Avoid placing two equally weighted CTAs back-to-back.

### `GlitchText`

File: [`components/ui/glitch-text.tsx`](components/ui/glitch-text.tsx)

Despite its name, the component behaves like a terminal typing reveal. It can trigger either on intersection or through an explicit `active` state. A block cursor blinks until the string completes.

Use it for short labels and active navigation states—not paragraphs.

### `InternalPageHero`

File: [`components/ui/internal-page-hero.tsx`](components/ui/internal-page-hero.tsx)

The shared internal hero combines:

- Ambient field and noise
- Section label
- Solid headline plus optional outlined line
- Optional technical description
- Scroll-linked downward drift and opacity reduction

It creates continuity across About, Careers, and other internal destinations without forcing every page into identical downstream layouts.

### `KelvarButton`

File: [`components/ui/kelvar-button.tsx`](components/ui/kelvar-button.tsx)

The canonical CTA implementation. It renders either an anchor or button, supports external destinations, selects the correct arrow, and applies the shared animated frame.

### `LazyVideo`

File: [`components/ui/lazy-video.tsx`](components/ui/lazy-video.tsx)

Video sources are attached only when they approach the viewport. Playback pauses when the video leaves view. Reduced-motion and data-saving users receive the poster instead of forced autoplay.

This component is both a performance primitive and an accessibility decision.

### `MetricGrid`

File: [`components/ui/metric-grid.tsx`](components/ui/metric-grid.tsx)

A staggered grid for quantitative evidence. Large condensed values lead; small mono labels explain. The number of desktop columns is configurable without changing its visual grammar.

### `Rule`

File: [`components/ui/rule.tsx`](components/ui/rule.tsx)

A canonical one-pixel horizontal separator. Use it when the divider is a standalone layout element; use border utilities when the divider belongs structurally to a component edge.

### `ScrollIndicator`

File: [`components/ui/scroll-indicator.tsx`](components/ui/scroll-indicator.tsx)

A low-frequency chevron pulse at the bottom of immersive heroes. It suggests continuation without becoming a button.

### `ScrollToTop`

File: [`components/ui/scroll-to-top.tsx`](components/ui/scroll-to-top.tsx)

Appears after `500px`, enters with opacity and vertical movement, and uses masked spans to reveal its complete border on hover. Reduced-motion users receive immediate scrolling.

### `ScrollingText`

File: [`components/ui/scrolling-text.tsx`](components/ui/scrolling-text.tsx)

Splits prose into sentences and raises each sentence from very low opacity as it enters the reading zone. This makes dense technical content feel synchronised with scrolling without moving the text itself.

### `SectionFrame`

File: [`components/ui/section-frame.tsx`](components/ui/section-frame.tsx)

A structural wrapper providing canonical gutters, vertical spacing, top rule, optional section label, and optional surface background.

### `SectionLabel`

File: [`components/ui/section-label.tsx`](components/ui/section-label.tsx)

A typed mono eyebrow followed by a flexible horizontal rule. It introduces sections with a consistent technical cadence and supplies visual alignment across otherwise different layouts.

---

## 08. Page and feature systems

### Home

Files: [`components/home/`](components/home)

| Component | Responsibility | Signature behavior |
| --- | --- | --- |
| `HeroSection` | Establishes the site proposition | Full-screen media, scroll-linked fade/drift, glitch title, scroll cue |
| `MissionSection` | States the core mission | Large editorial statement with restrained reveal |
| `EthosSection` | Introduces operating principles | Composes the pillar system |
| `PillarGrid` | Renders ethos items | Numbered, bordered grid with staged entry |
| `DronePlatformsSection` | Introduces the platform portfolio | Composes platform rows and section framing |
| `DronePlatformRow` | Presents one platform | Oversized name, media, metadata, directional CTA motion |
| `AreasOfFocusSection` | Summarises Air, Sea, Land, Space | Domain imagery and pathway into Focus |
| `ArrSection` | Presents recurring-revenue logic | Technical grid and commercial narrative |

Home motion is broad and cinematic at the top, then becomes more systematic as the user reaches products and focus areas.

### About

Files: [`components/about/`](components/about)

| Component | Responsibility | Signature behavior |
| --- | --- | --- |
| `AboutHeroSection` | Introduces the organisation | Internal hero treatment |
| `NarrativeSection` | Compares Mission and Story | Equal editorial panels on large displays |
| `KelvarxFeature` | Makes the programme a major brand story | Pointer-following light field, slow image parallax, telemetry sequence |
| `ValuesSection` | Presents organisational values | Bordered grid, status-dot pulse, slight hover lift |
| `TeamSection` | Presents people | Staggered profiles and subdued portrait placeholders |
| `AboutSectionHeading` | Aligns About subsection labels | Shared number and section-label stack |
| `AboutSections` | Composes the page narrative | No local presentation logic |

### Focus

Files: [`components/focus/`](components/focus)

| Component | Responsibility | Signature behavior |
| --- | --- | --- |
| `FocusHero` | Introduces multi-domain operation | Monumental internal hero |
| `FocusDomainNav` | Provides Air/Sea/Land/Space wayfinding | Sticky, horizontally scrollable, navbar-aware offset |
| `FocusNetworkStatement` | Unifies the domains | Large “one intelligence layer” editorial bridge |
| `DomainSection` | Explains one operating environment | Sticky full-height image beside scrolling capabilities and systems |
| `DomainHero` | Owns domain visual treatment | Darkened image, oversized ghost index, slow hover scale |
| `DomainCapabilities` | Lists capabilities | Numbered, staggered technical rows |
| `DomainSystems` | Connects systems to domains | Status chips and framed CTAs |

The Focus page is designed as one continuous instrument. Sticky navigation supplies orientation; sticky imagery preserves environmental context while technical material moves.

### KELVARX

Files: [`components/focus/kelvarx/`](components/focus/kelvarx)

| Component | Responsibility | Signature behavior |
| --- | --- | --- |
| `KelvarxHero` | Establishes programme scale | Atmospheric imagery and monumental programme language |
| `KelvarxApplications` | Explains operational applications | Sticky left narrative with scrolling right-side material |
| `KainNetwork` | Explains the connectivity layer | Network/system visual language |
| `KelvarAiCommand` | Explains interpretation and command | Technical data hierarchy and staged reveals |
| `StratosSeries` | Presents the programme's platform family | Sequential system stories and specification lists |

KELVARX uses more atmospheric space and environmental imagery than other pages. Its motion should feel persistent and orbital, not fast or aggressive.

### Stratokite and Dome

Files:

- [`components/drones/product-page-layout.tsx`](components/drones/product-page-layout.tsx)
- [`components/drones/product-video-hero.tsx`](components/drones/product-video-hero.tsx)
- [`components/drones/dome-product-story.tsx`](components/drones/dome-product-story.tsx)
- [`app/kelvarx/stratokite/page.tsx`](app/kelvarx/stratokite/page.tsx)

`ProductPageLayout` chooses the product-story composition. `ProductVideoHero` provides a scroll-linked cinematic entry. `DomeProductStory` deliberately remains a rich flagship narrative because Dome has substantially more confirmed product information than Hydrax or Robobot.

Product pages should not invent parity. Development-stage systems can remain concise until credible content exists.

### Research, Development & Deployment

Files: [`components/research/`](components/research)

| Component | Responsibility | Signature behavior |
| --- | --- | --- |
| `PageHero` | Introduces RD&D | Research-specific hero language |
| `IntroSection` | Preserves the research thesis | Large narrative introduction |
| `ResearchAreas` | Composes research programmes | Data-driven programme sequence |
| `PlatformNav` | Links research areas | Compact anchored navigation |
| `PlatformSection` | Chooses the correct programme renderer | Composition only |
| `PlatformHero` | Owns programme media | Image/video abstraction and cinematic overlays |
| `PlatformIntro` | States programme purpose | Two-column thesis and description |
| `PlatformDomains` | Selects immersive or card domains | Layout determined by content model |
| `TechnologyGrid` | Presents enabling technology | Three-column technical cards |
| `UseCaseGrid` | Presents application categories | Structured numbered lists |
| `NumberedList` | Renders ordered technical information | Static or staggered variant |
| `StratosStorySection` | Composes the legacy Stratos research narrative | Delegates to specialised story modules |
| `StratosIntroduction` | Introduces research context | Long-form editorial treatment |
| `StratosSystem` | Explains system architecture | Technical systems layout |
| `StratosOperations` | Explains deployment | Operational sequence |
| `StratosEconomics` | Explains commercial logic | Structured metrics and comparison fields |
| `StoryFrame` | Frames research story segments | Consistent label and spacing shell |
| `AarSection` | Presents autonomous recurring revenue | Commercial research bridge |
| `ResearchCTA` | Ends the RD&D journey | Focused contact pathway |

### Careers

Files: [`components/careers/`](components/careers)

| Component | Responsibility | Signature behavior |
| --- | --- | --- |
| `CareersHeader` | Establishes hiring proposition | Large internal-page headline |
| `CareersDisciplineStrip` | Shows cross-disciplinary scope | Continuous low-priority marquee, reduced-motion aware |
| `CareersPerks` | Presents benefits | Large editorial benefit grid |
| `CareersCulture` | States working principles | Sticky statement beside scrolling numbered panels |
| `CareersRoles` | Composes controls and role results | No filtering implementation details |
| `useCareerFilters` | Owns role filter state and derived results | Pure feature state boundary |
| `CareerFilterDropdown` | Selects one filter value | Outside-click dismissal and animated chevron |
| `CareerRoleItem` | Presents one vacancy | Framed card and directional external arrow |
| `GeneralApplication` | Captures candidates outside listed roles | Large terminal CTA block |

### Maps and global systems

Files: [`components/map/`](components/map)

| Component | Responsibility | Signature behavior |
| --- | --- | --- |
| `GlobalNetworkMap` | Composes the world-network scene | Connects geographic visualisations to supporting narrative |
| `MapSvg` | Renders detailed vector geography | Static specialist renderer |
| `SpinningGlobe` | Projects and rotates global points | Continuous low-speed environmental animation |

Map motion should imply reach and persistence. It should never resemble a game interface.

### Site chrome

| Component | Responsibility |
| --- | --- |
| `SiteNavbar` | Fixed brand/navigation shell |
| `NavigationMenu` | Menu state, levels, and panel choreography |
| `NavBlock` | One large interactive navigation target |
| `useNavbarVisibility` | Scroll direction and shared sticky offset |
| `SiteFooter` | Brand summary, navigation, contact information, legal closure |
| `SiteSplash` | One-time brand introduction |

---

## 09. Imagery direction

Kelvar imagery should feel captured, tested, or observed—not rendered for spectacle.

### Preferred qualities

- Real equipment and environments
- Wide editorial crops
- Strong negative space for typography
- Low-to-moderate saturation
- Natural haze, atmosphere, water, terrain, or industrial texture
- Dark tonal range compatible with the navy UI
- Details that imply scale without adding fictional interfaces

### Avoid

- Neon science-fiction grading
- Floating holographic HUDs
- Generic blue “technology” imagery
- Visible third-party marks
- Overly clean stock photography
- Invented product details presented as real engineering

Image overlays normally combine reduced brightness, reduced saturation, a bottom gradient into `--bg`, and occasionally a subtle vignette.

---

## 10. Responsive strategy

Kelvar preserves hierarchy rather than identical choreography across devices.

### Desktop

- Sticky split narratives are encouraged.
- Media can approach viewport height.
- Oversized type and negative space carry the composition.
- Menus and capability systems can use multi-column grids.

### Mobile

- Sticky two-column scenes become normal vertical flow where necessary.
- Horizontal navigations may scroll natively.
- Typography remains large but uses `clamp()` to avoid clipping.
- Page gutters reduce to `1.5rem`.
- Touch targets remain at least visually and interactively generous.
- Hover-only information must never be required to understand or navigate.

The correct mobile adaptation is often simpler than desktop. Preserving every desktop trick would make the interface feel trapped.

---

## 11. Accessibility and performance

### Accessibility rules

- All meaningful images require useful alt text.
- Decorative overlays must be hidden from interaction.
- Icon-only controls require accessible labels.
- Hover states must have equivalent focus states.
- Motion must respect reduced-motion preferences.
- Colour must not be the sole indicator of state.
- Native links, buttons, sections, headings, and navigation landmarks are preferred.

### Performance rules

- Use `LazyVideo`; do not attach off-screen video sources eagerly.
- Prefer transform and opacity animation.
- Use `requestAnimationFrame` to throttle pointer and scroll work.
- Use `next/image` with honest `sizes` values.
- Avoid permanent `will-change` on repeated elements.
- Keep continuous animation slow and limited in number.
- Use `viewport={{ once: true }}` for reveals that do not need replay.
- Do not ship large source videos when an efficient WebM is available.

---

## 12. Architecture and content flow

The site follows four broad layers:

```text
app/          Route metadata and page composition
components/   Presentation and local interaction
content/      Confirmed copy and structured page data
types/        Shared contracts for content and components
lib/          Pure utilities and shared motion definitions
```

Pages should mostly compose exported feature components. Content files should contain facts and copy, not JSX. Hooks should own stateful behaviour that can be understood independently from presentation. UI primitives should remain content-agnostic.

### Component responsibility test

Before extending a component, ask:

1. Does the new behaviour share the component's existing reason to change?
2. Is the data specific to this feature or generally reusable?
3. Can the interaction be described independently from the rendering?
4. Would another page reasonably reuse this pattern?
5. Is the component orchestrating children, or implementing all of them itself?

If the component gains a second independent reason to change, extract that responsibility.

---

## 13. How to add a new Kelvar section

1. **Start with the information hierarchy.** Identify the primary statement, supporting evidence, and action.
2. **Choose a known section grammar.** Editorial split, technical grid, sticky narrative, immersive media, or terminal CTA.
3. **Use semantic tokens.** Do not introduce raw brand colours in component markup.
4. **Use one dominant motion idea.** Supporting elements may stagger, but they should reinforce the same reading order.
5. **Define the reduced-motion result.** It should be complete and readable before motion is added.
6. **Build mobile as honest document flow.** Add desktop stickiness or parallax progressively.
7. **Reuse the standard button and labels.** Extend their APIs rather than cloning their markup.
8. **Keep content outside the component.** Add types when the shape crosses feature boundaries.
9. **Verify keyboard, touch, and scroll behavior.** Hover is enhancement, not functionality.
10. **Run TypeScript, tests, and the production build.** Visual work is not finished until the compiled result is stable.

---

## 14. Design review checklist

### Brand

- Does the result feel precise, technical, monumental, active, and credible?
- Is hierarchy achieved without an unrelated accent colour?
- Does the imagery feel operational rather than fictional?

### Typography

- Is Barlow Condensed carrying display hierarchy?
- Is mono copy legible and appropriately spaced?
- Are outlined headings secondary rather than dominant?

### Layout

- Are one-pixel rules doing most of the structural work?
- Is the mobile flow understandable without desktop stickiness?
- Is negative space intentional rather than accidental?

### Motion

- Does every large movement explain hierarchy or continuity?
- Do controls respond faster than environmental scenes?
- Are repeated items staggered modestly?
- Is reduced motion supported?

### Interaction

- Do icons move in the direction of their action?
- Do framed buttons complete their borders on hover and focus?
- Are touch and keyboard targets usable?
- Is important information available without hover?

### Engineering

- Does each component have one reason to change?
- Is content separate from presentation?
- Are shared types and utilities in the correct layer?
- Are image and video loading strategies appropriate?
- Do TypeScript, tests, and the production build pass?

---

## Closing principle

Kelvar's interface is most successful when it behaves like the systems it describes: quiet at rest, precise in response, persistent in motion, and clear about what matters.

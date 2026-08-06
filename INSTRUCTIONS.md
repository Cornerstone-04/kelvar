# KELVARX Systems Implementation

## Confirmed hierarchy

Keniye's latest direction supersedes the original assumption that KELVARX belongs
inside RD&D.

```text
Kelvar Industries
├── Platforms
│   ├── Stratokite → /kelvarx/stratokite
│   ├── Robobot
│   ├── Hydrax
│   └── Dome
├── Focus
│   ├── Air
│   ├── Sea
│   ├── Land
│   └── Space → /kelvarx
├── KELVARX
│   ├── Stratokite
│   ├── Stratocopter
│   └── Stratos Solar Sat
└── RD&D
    └── General research programmes and future developments
```

## Platform portfolio

The main platform order is:

1. Stratokite
2. Robobot
3. Hydrax
4. Dome

Platforms must be reachable from the main navigation. Stratokite is part of the
KELVARX programme and uses `/kelvarx/stratokite`. Robobot, Hydrax, and Dome link
to their main platform sections.

Dome no longer has a standalone detail page. The legacy `/drones/dome` route
redirects to the Dome section instead of returning a broken link.

## RD&D

RD&D keeps its general hero, introduction, research areas, AAR content, and
research contact CTA. It must not render the old Stratos-specific hero,
architecture, balloon taxonomy, operations, applications, cost comparison, or
advantages.

Future research programmes should be added independently of the platform
portfolio.

## Focus and KELVARX

Focus remains the overview of the four strategic domains: Air, Sea, Land, and
Space. The Space section introduces the domain and links to KELVARX, but does
not contain the complete programme experience.

KELVARX is a standalone programme at `/kelvarx`. Its narrative is:

> Platforms collect. KAIN connects. KELVAR AI Command interprets and controls.

The page sequence is:

1. KELVARX division hero
2. Division vision
3. Stratos Series
4. KAIN
5. KELVAR AI Command
6. Applications
7. Partnership CTA

The Focus page retains only its original closing CTA. The KELVARX partnership
CTA belongs only to the standalone programme page and should use the same
typographic scale and vertical rhythm as the Focus CTA.

Stable anchors:

- `kelvarx`
- `stratos-series`
- `kain`
- `kelvar-ai-command`
- `kelvarx-applications`

## Stratos Series

### Stratos Kite

- Balloon-assisted tail-sitter glider drone
- Payload: EO and thermal cameras, radiosonde, GPS, environmental sensors,
  and AI edge processor
- Data: pressure, temperature, humidity, wind, aerial imagery, and thermal
  signatures
- Missions: agriculture, border awareness, environmental monitoring,
  pipeline inspection, and disaster assessment

### Stratocopter

- Balloon-assisted quadcopter drone
- Payload: zoom and thermal cameras, radiosonde sensors, loudspeaker,
  searchlight, and AI video analytics
- Data: local weather, air-quality indicators, live video, thermal imaging,
  and atmospheric information
- Missions: public safety, event security, inspection, emergency response,
  and telecommunications support

### Stratos Solar Sat

- Balloon-assisted near-space satellite drone
- Payload: high-resolution and infrared imaging, radiosonde, atmospheric
  sensors, communications relay, and solar power management
- Data: stratospheric weather, atmospheric composition, Earth observation,
  climate data, and coverage analytics
- Missions: near-space research, forecasting, climate monitoring, rural
  connectivity, maritime awareness, and national security

Each system must visually distinguish payload, collected data, and missions.
Desktop uses a vertical product sequence. Mobile stacks all essential content
without hiding it behind mandatory interactions.

Stratokite has a dedicated child page at `/kelvarx/stratokite`, making its
relationship to KELVARX explicit. The platform homepage entry, platform menu,
and Stratos Kite story link to that route.

## KAIN

KAIN is the proposed KELVARX Atmospheric Intelligence Network. It connects the
three Stratos systems into a shared sensing layer.

The static diagram must remain understandable without motion and communicate:

```text
Stratos Kite ─┐
Stratocopter ├─ KAIN ─ Atmospheric and visual intelligence
Solar Sat ────┘
```

Do not present KAIN as a deployed public network without confirmation.

## KELVAR AI Command

Present KELVAR AI Command as a developing operational layer for:

- Weather mapping
- Radiosonde telemetry
- AI video analytics
- Fleet control
- Mission planning
- Predictive maintenance
- Digital twin simulation
- Data archive and analytics

The command surface is illustrative. Do not invent customers, deployment
locations, alerts, coverage, or performance data.

## Design

KELVARX is an advanced expression of the existing visual system:

- Deep navy background
- White and cool-grey typography
- Barlow Condensed headings
- DM Mono technical labels
- Thin rules and square geometry
- Full-bleed atmospheric imagery
- One restrained atmospheric signal colour

Avoid bright gradients, generic dashboard styling, excessive glass cards,
rounded startup UI, and imagery that misrepresents a platform.

Existing Stratos images may represent Stratos Kite and the general KELVARX
programme. If no accurate image exists, use an explicitly labelled neutral
placeholder. Never present one aircraft as multiple different systems.

## Motion

Motion communicates altitude, telemetry, coordination, and state:

- Slow atmospheric fades and subtle scale settling
- Instrument-like rises of 12-20px
- Precise 0.05-0.09s stagger
- Transform and opacity animation only where practical
- No elastic, bouncing, or playful movement

Respect `prefers-reduced-motion`. Essential content must be available before
animation and the layout must work with all animation disabled.

## Claim guardrails

The supplied material describes developing concepts. Use language such as
`developing`, `designed to`, `intended to`, and `proposed` where operational
status is not confirmed.

Do not publish unverified:

- Altitude, endurance, speed, or weather ratings
- 24/7 operational claims
- Regulatory or aviation status
- Cost comparisons
- Deployment or customer claims
- National security capability claims framed as operational

## Definition of done

- Main platform order is Stratokite, Robobot, Hydrax, Dome
- Platforms appear in the main navigation
- Dome has no standalone content page
- RD&D contains no Stratos-specific long-form story
- Space introduces and links into KELVARX
- Focus presents Space as a concise domain overview linking to `/kelvarx`
- KELVARX is a standalone page
- Stratokite is available at `/kelvarx/stratokite`
- The three Stratos systems are distinct
- KAIN and AI Command have clear roles
- Missing imagery uses honest placeholders
- Reduced-motion behavior is respected
- Mobile and desktop layouts remain usable
- Type checks, tests, and production build pass

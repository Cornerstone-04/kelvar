# KELVARX Research Page Implementation Brief

## 1. Objective

Add KELVARX to the existing `/research` experience as Kelvar Industries' advanced aerospace, autonomous systems, and space technologies division.

KELVARX must not be presented as a disconnected company, a conventional product page, or a new primary navigation destination. It should become the organizing identity for the existing Stratos feature on the research page.

The revised story should communicate one connected system:

1. **KELVARX** defines the division and its mission.
2. **Stratos Series** provides the aerial and near-space platforms.
3. **KAIN** combines the platforms into an atmospheric intelligence network.
4. **KELVAR AI Command** converts telemetry and imagery into decisions and fleet actions.
5. **Applications** show what the complete system enables.

The core narrative is:

> Platforms collect. KAIN connects. KELVAR AI Command interprets and controls.

## 2. Scope and Placement

### Primary placement

Keep the experience on `/research`, using the current Stratos story position after the general research areas.

Relevant entry points:

- `app/research/page.tsx`
- `content/research/stratos.ts`
- `types/research-types.ts`
- `components/research/stratos/stratos-story-section.tsx`

The existing `kelvarStratos` object should remain the source passed into `PlatformSection`. Extend or rename its story model as needed, but do not create a parallel hard-coded KELVARX page inside the component.

### Homepage placement

This implementation does not require a full homepage redesign. A later enhancement may add a compact KELVARX teaser linking to `/research#kelvarx`, but the detailed content belongs on the research page.

### Navigation

Do not add KELVARX to the main menu yet. Keep `RD&D` as the top-level route. Within the research page, use a small local section navigator or progress rail for:

- Division
- Stratos Series
- KAIN
- AI Command
- Applications

Use stable section IDs:

- `kelvarx`
- `stratos-series`
- `kain`
- `kelvar-ai-command`
- `kelvarx-applications`

## 3. Content Architecture

### Section 1: KELVARX Division Hero

Replace the current hero's generic Stratos-first framing with KELVARX as the division.

Required content:

- Eyebrow: `Advanced Aerospace, Autonomous Systems & Space Technologies`
- Primary title: `KELVARX`
- Division description based on the client's supplied vision
- Flagship line: `Measuring the Atmosphere. Monitoring the Earth. Connecting the Future.`
- A short transition into the Stratos Series

The hero should still use an existing Stratos atmospheric image until approved KELVARX division artwork is supplied. Do not generate or imply a finished aircraft design from copy alone.

Recommended hero metrics:

- `03` / Stratos platforms
- `01` / Connected intelligence network
- `24/7` / Autonomous monitoring intent

Treat `24/7` as positioning, not a validated performance specification. Do not introduce altitude, endurance, range, launch time, weather rating, or payload capacity unless the client confirms them.

### Section 2: Division Vision

Use a concise editorial section to establish why KELVARX exists:

> To develop intelligent aerial, atmospheric, and space-based platforms that enhance connectivity, surveillance, environmental intelligence, and sustainable infrastructure across Africa and global markets.

Pair the text with a system-level diagram or restrained atmospheric visual. This section replaces repetitive generic explanations of what stratospheric balloons are.

### Section 3: KELVARX Stratos Series

Replace the current `Zero-Pressure Balloons`, `Superpressure Balloons`, and `Stratollite Balloons` cards with the client's three named platforms.

#### Stratos Kite

- Type: Balloon-assisted tail-sitter glider drone
- Description: Helium balloon, tail-sitter fixed-wing drone, radiosonde package, and intelligent imaging systems
- Standard payload:
  - High-resolution EO camera
  - Thermal camera
  - Radiosonde weather package
  - GPS tracking
  - Environmental sensors
  - AI edge processor
- Data collected:
  - Atmospheric pressure
  - Temperature
  - Humidity
  - Wind speed and direction
  - Live aerial imagery
  - Thermal signatures
- Primary missions:
  - Agricultural intelligence
  - Border surveillance
  - Environmental monitoring
  - Pipeline inspection
  - Disaster assessment

#### Stratos Copter

- Type: Balloon-assisted quadcopter drone
- Description: Helium lift with quadcopter maneuverability and positioning
- Standard payload:
  - Daylight zoom camera
  - Thermal camera
  - Radiosonde weather sensors
  - Loudspeaker option
  - Searchlight option
  - AI video analytics
- Data collected:
  - Local weather conditions
  - Air-quality indicators
  - Live video feeds
  - Thermal imaging data
  - Wind and atmospheric information
- Primary missions:
  - Public safety
  - Event security
  - Infrastructure inspection
  - Emergency response
  - Telecommunications support

#### Stratos Solar Sat

- Type: Balloon-assisted near-space satellite drone
- Description: Solar-powered stratospheric platform for Earth observation and atmospheric monitoring
- Standard payload:
  - Ultra-high-resolution camera
  - Infrared imaging system
  - Radiosonde package
  - Atmospheric sensors
  - Communication relay equipment
  - Solar power management system
- Data collected:
  - Stratospheric weather data
  - Atmospheric composition
  - Earth observation imagery
  - Climate data
  - Telecommunications coverage analytics
  - Environmental intelligence
- Primary missions:
  - Near-space research
  - Weather forecasting
  - Climate monitoring
  - Rural internet delivery
  - Maritime awareness
  - National security

#### Interaction pattern

On desktop, show the three platforms as a vertical product sequence rather than three small equal cards. Each platform should receive enough room for:

- Large name and type
- One dominant image
- Short description
- Three switchable or sequential information groups: `Payload`, `Data`, and `Missions`

On mobile, stack all information and use native disclosure controls only if the closed state still communicates the platform's purpose. Do not hide every important detail behind tabs.

Do not create three new `/drones/[slug]` routes in this phase. The email does not contain enough validated engineering detail for independent commercial product pages.

### Section 4: KAIN

Introduce the **KELVARX Atmospheric Intelligence Network (KAIN)** immediately after the aircraft.

The visual goal is to show that every Stratos platform is a node in a shared sensing layer.

Required data groups:

#### Atmospheric data

- Temperature
- Humidity
- Air pressure
- Altitude
- Wind profiles
- Air density

#### Visual intelligence

- Real-time video
- Aerial photography
- Thermal imaging
- Environmental change detection
- AI object recognition

#### Applications

- Weather forecasting
- Climate research
- Flood prediction
- Agricultural planning
- Wildfire detection
- Disaster management

Use a network diagram with three platform nodes feeding a shared KAIN layer. The diagram must remain understandable without animation and should use HTML/CSS or SVG primitives rather than a heavy charting dependency.

Avoid presenting KAIN as a public live network or deployed infrastructure unless the client confirms deployment status. Wording should distinguish product vision from current operational claims.

### Section 5: KELVAR AI Command

Present KELVAR AI Command as the operational software and intelligence layer managing KELVARX assets.

Required capabilities:

- Real-time weather mapping
- Radiosonde telemetry monitoring
- AI video analytics
- Fleet control
- Mission planning
- Predictive maintenance
- Digital twin simulation
- Data archive and analytics

Design this section like a command surface, but do not build a fake functional dashboard. Use a composed interface preview with:

- Regional map or atmospheric field
- Selected fleet asset
- Telemetry summary
- Mission status
- Intelligence event list

Label illustrative values clearly if real data is unavailable. Avoid invented customer names, deployment locations, alerts, performance numbers, or map coverage.

### Section 6: Applications

Consolidate repeated platform missions into customer-facing categories:

1. Environmental and climate intelligence
2. Agriculture and land planning
3. Public safety and disaster response
4. Border, maritime, and infrastructure awareness
5. Telecommunications and rural connectivity
6. Near-space research

Each category should explain the outcome, identify which Stratos platform is most relevant, and note the role played by KAIN or AI Command.

Avoid a generic icon grid. Use an editorial list, image-led panels, or a system/application matrix.

### Section 7: Closing Statement

End the KELVARX story with:

> KELVARX - Measuring the Atmosphere. Monitoring the Earth. Connecting the Future.

Follow it with the existing research contact CTA or adapt the CTA copy to invite research, deployment, and institutional partnerships. Do not add a purchase or pricing CTA.

## 4. Design Direction

### Relationship to the existing site

KELVARX must feel like the most technically advanced expression of the existing Kelvar design system, not a microsite pasted into it.

Retain:

- Deep navy background
- White and cool-grey typography
- Barlow Condensed headings
- DM Mono technical labels and metadata
- Thin low-opacity rules
- Full-bleed atmospheric imagery
- Large editorial type
- Square or minimally rounded geometry

Do not introduce:

- Bright startup gradients
- Glass cards on every section
- Neon cyberpunk effects
- Generic blue dashboard styling
- Excessive rounded cards
- Stock space imagery that misrepresents the products

### Visual progression

The page should visually move through altitude and abstraction:

1. **KELVARX:** broad atmospheric, cinematic, division-level view
2. **Stratos Series:** physical aircraft and payload details
3. **KAIN:** interconnected sensing and data flows
4. **AI Command:** software, telemetry, and operational decisions
5. **Applications:** grounded human and infrastructure outcomes

Use this progression to vary section density. The hero should breathe; platform sections should be tactile and image-led; KAIN and AI Command should become more precise and information-dense.

### Color accents

Use the existing palette as the foundation. If KELVARX needs an accent, use one restrained atmospheric signal color such as a desaturated cyan or pale electric blue.

The accent should only indicate:

- Live or selected states
- Network paths
- Telemetry markers
- Section progress

Do not use the accent as a large background fill. Define it as a CSS custom property rather than scattering raw color values through components.

### Typography

- Division and platform names: Barlow Condensed, very large, heavy
- Section labels and telemetry: DM Mono, uppercase, tracked
- Descriptions: DM Mono or Inter depending on density
- Keep prose widths between approximately 55 and 75 characters
- Use sentence case for long explanatory headings where the existing component already supports it
- Preserve clear hierarchy; do not make all technical labels visually equal

### Imagery

Reuse the existing Stratos assets where they genuinely match the three platform concepts. Inventory and map each image before implementation.

Every image must have:

- A defined role
- Accurate alternative text
- Intentional crop at mobile and desktop sizes
- A gradient overlay only where text needs contrast

If no image accurately depicts Stratos Copter or Solar Sat, use a neutral schematic/placeholder treatment and flag the missing asset. Do not relabel one aircraft image as a different aircraft.

## 5. Motion Philosophy

### Core principle

Motion should communicate **altitude, telemetry, coordination, and system state**. It should not exist merely to decorate scroll.

The overall character should be controlled and aerospace-like:

- Slow, deliberate entrances
- Small travel distances
- Precise stagger
- Continuous motion only where it conveys an active system
- No bouncy springs, elastic overshoot, or playful rotation

### Motion vocabulary

Use four repeatable motion behaviors:

#### 1. Atmospheric reveal

For heroes and large images:

- Fade from `opacity: 0` to `1`
- Optional scale from approximately `1.02` to `1`
- Duration: `0.8-1.2s`
- Ease: `[0.16, 1, 0.3, 1]`

This should feel like visibility emerging through atmosphere, not a dramatic zoom.

#### 2. Instrument rise

For headings, metrics, and cards:

- Vertical travel: `12-20px`
- Fade to full opacity
- Duration: `0.45-0.7s`
- Stagger: `0.05-0.09s`

Keep the current Motion library and reuse a shared variant rather than writing unique transitions for every element.

#### 3. Data transmission

For the KAIN diagram:

- Reveal paths with SVG stroke progression or a clipped CSS line
- Move a small signal marker along an already visible path
- Keep cycles slow and subtle
- Do not animate every line simultaneously
- Stop or greatly reduce continuous effects when the section is outside the viewport

The static diagram must communicate the complete architecture before motion is applied.

#### 4. Command state

For KELVAR AI Command:

- Use restrained state changes such as a selected row, a telemetry pulse, or a map target appearing
- Prefer opacity and border-color transitions
- Avoid fake typing, rapidly changing numbers, blinking warning panels, and looping alert animations

### Scroll behavior

- Continue using `whileInView` for discrete entrances
- Use `viewport={{ once: true }}` for content reveals
- Reserve scroll-linked transforms for one or two large atmospheric moments only
- Never make essential text depend on a scroll animation completing
- Avoid long pinned sections on mobile
- If a desktop sticky composition is used, allow the content to return to normal document flow below `lg`

### Reduced motion

Respect `prefers-reduced-motion`.

When reduced motion is enabled:

- Render all content immediately
- Remove parallax and animated path drawing
- Stop looping signal markers and telemetry pulses
- Preserve selection, focus, and disclosure transitions only when needed for comprehension

Create either a small motion utility or consistent component-level checks so reduced-motion behavior is not implemented differently in every section.

### Performance constraints

- Animate `transform` and `opacity` wherever possible
- Do not animate layout dimensions during scroll
- Avoid large blur animations
- Do not add a 3D/WebGL dependency for this implementation
- Lazy-load below-the-fold imagery
- Ensure continuous KAIN animation does not trigger unnecessary React renders

## 6. Data and Component Architecture

### Data model

Refactor `PlatformStory` so KELVARX content is represented explicitly rather than forcing it into generic `platformTypes`.

Suggested additions:

```ts
type KelvarxPlatform = {
  id: string;
  name: string;
  type: string;
  description: string;
  media?: PlatformStoryMedia;
  payload: string[];
  dataCollected: string[];
  missions: string[];
};

type IntelligenceLayer = {
  id: string;
  name: string;
  description: string;
  groups: {
    label: string;
    items: string[];
  }[];
};

type KelvarxApplication = {
  name: string;
  outcome: string;
  platforms: string[];
  intelligenceLayer: "KAIN" | "KELVAR AI Command" | "Both";
};
```

The final names may follow existing conventions, but the structure must preserve the distinction between:

- Physical platform
- Payload
- Collected data
- Mission
- Network capability
- Command capability
- Customer application

### Component boundaries

Recommended components:

- `KelvarxHero`
- `KelvarxVision`
- `StratosSeriesSection`
- `StratosPlatformStory`
- `KainNetworkSection`
- `KelvarAiCommandSection`
- `KelvarxApplicationsSection`
- `KelvarxClosingSection`
- `KelvarxSectionNav` if the local navigator is implemented

Keep the existing Stratos material in `content/research/stratos.ts`. If KELVARX is confirmed as a distinct division, add `content/research/kelvarx.ts` and compose its relationship with Stratos through `content/index.ts`. Components should receive typed data and should not contain the client's copy as scattered literals.

### Existing content to remove or revise

- Replace the generic balloon taxonomy in `platformTypes`
- Remove repetitive generic descriptions of stratospheric balloons
- Re-evaluate the satellite cost comparison; retain it only if the client confirms the figures and it supports the new story
- Remove unsupported performance claims
- Fix existing copy errors encountered during the refactor
- Preserve useful architecture, operations, and applications material only where it accurately maps to the new client brief

## 7. Responsive Behavior

### Mobile

- Use a single-column narrative
- Keep platform name and purpose visible before disclosures
- Stack payload, data, and missions
- Convert network diagrams into a top-to-bottom flow
- Remove sticky panels and parallax
- Maintain a minimum 44px interaction target
- Avoid horizontally scrolling technical tables unless no clearer representation exists

### Tablet

- Use two-column information groups where space permits
- Keep media full-width when a split would make aircraft detail too small
- Allow the local section navigator to scroll horizontally with clear overflow affordance

### Desktop

- Use editorial split layouts and selective sticky storytelling
- Give each aircraft a distinct visual beat
- Show KAIN as a multi-node horizontal or radial system
- Present AI Command as a composed large interface surface with supporting capability list

## 8. Accessibility

- Use semantic section headings in order
- Ensure local navigation links identify their destination
- All interactive disclosure controls need `aria-expanded` and keyboard operation
- Do not communicate platform state or data flow using color alone
- Maintain readable contrast over imagery
- Decorative network paths should be hidden from assistive technology
- Provide a concise text explanation adjacent to the KAIN diagram
- Avoid autoplay video with sound
- Ensure reduced-motion users receive the complete narrative

## 9. Content and Claim Guardrails

The email is a product brief, not proof of deployed capability.

Before publishing, obtain confirmation for:

- Trademark styling for KELVARX, Stratos names, KAIN, and KELVAR AI Command
- Current development status of each platform
- Whether the platforms are concepts, prototypes, testing systems, or operational products
- Validated altitude, endurance, weather, speed, and communications specifications
- Whether `24/7`, autonomous, real-time, predictive maintenance, and digital twin claims are currently available
- Regulatory and aviation status
- Any national security wording
- All cost-comparison figures
- Ownership and publication rights for new imagery

Use future-facing language such as `designed to`, `being developed for`, or `intended to` wherever operational status is not confirmed.

The Miri Africa and Birdstop links are inspiration for hierarchy and product storytelling only. Do not copy their wording, layouts, claims, imagery, metrics, or brand presentation.

## 10. Implementation Sequence

### Phase 1: Content model

1. Extend the platform story types.
2. Convert the email content into typed KELVARX data.
3. Mark unverified claims in code comments or a content checklist.
4. Remove replaced generic balloon taxonomy.

### Phase 2: Page structure

1. Update the existing Stratos story renderer to the KELVARX sequence.
2. Add stable section IDs.
3. Build the three platform stories.
4. Build KAIN and AI Command sections.
5. Consolidate the applications.
6. Adapt the closing CTA.

### Phase 3: Visual and motion system

1. Add the restrained KELVARX accent token.
2. Create shared Motion variants.
3. Add atmospheric, instrument, network, and command-state motion.
4. Implement reduced-motion behavior.
5. Validate responsive layouts.

### Phase 4: Content and quality assurance

1. Verify every claim against client-approved content.
2. Confirm each image maps to the correct platform.
3. Run type checking, linting, and production build.
4. Test keyboard navigation and disclosure controls.
5. Test reduced-motion mode.
6. Check mobile, tablet, laptop, and wide desktop layouts.
7. Check that all section anchors land below the fixed navigation.
8. Review animation smoothness and image loading performance.

## 11. Definition of Done

The KELVARX addition is complete when:

- KELVARX clearly reads as a division within Kelvar Industries
- The three Stratos platforms are distinct and understandable
- Payload, collected data, and missions are not conflated
- KAIN clearly connects the aircraft into an intelligence network
- KELVAR AI Command clearly acts as the management and analytics layer
- Applications communicate customer outcomes rather than repeating feature lists
- The experience visually belongs to the existing research page
- Motion reinforces system behavior and respects reduced-motion settings
- No unsupported specifications or deployment claims are presented as facts
- The layout works without animation and across all supported breakpoints
- Type checking and the production build pass

# Architecture

Kelvar is a Next.js App Router application organised around one-way dependency flow and explicit feature ownership.

## Dependency direction

```text
app routes → features/page sections → shared UI → pure utilities and types
                         ↘ content modules ↗
```

- `app/` owns routing, layouts, metadata, loading and error boundaries. Route files should compose features rather than implement them.
- `features/` owns cohesive product capabilities that have their own components, validation or behaviour. Contact and KELVARX are current examples.
- `components/<page>/` owns page-specific sections that do not yet justify a full feature module.
- `components/ui/` is feature-agnostic and cannot import from `app/` or `features/`.
- `content/` contains confirmed copy and structured editorial data.
- `lib/` contains reusable pure utilities and cannot depend on routes or features.
- `types/` contains cross-feature contracts; feature-only types stay beside their feature.

ESLint enforces the most important inward dependency rules.

## Rendering and state

Server Components are the default. A client boundary is introduced only for browser APIs, animation orchestration or local interaction. State is kept at the narrowest owner:

- URL state for shareable filters and navigation.
- Local component state for transient interface behaviour.
- Server-backed state for data that must persist or be trusted.

The contact form deliberately prepares a validated `mailto:` enquiry because the repository has no mail service or credentialed server endpoint. It explicitly tells users that delivery occurs in their mail application; replacing it with an API requires a provider, server-side validation, rate limiting and delivery monitoring.

## Failure handling

`app/error.tsx` provides a recoverable route boundary and `app/global-error.tsx` protects root rendering. Errors are logged locally. Production telemetry remains a deployment decision because no monitoring provider is configured; add one before introducing server mutations or other operationally critical workflows.

## Quality gates

Run `bun run check` before handoff. Pull requests and main-branch pushes run linting, formatting verification, strict TypeScript, unit tests, the production build and Playwright smoke tests in GitHub Actions.

Architecture changes must preserve behaviour, keyboard access, reduced-motion support, metadata and public URLs.

# Design: Launch the getMando Public Website

Build an Astro static site: English is canonical, Spanish reviewed, and typed local content builds every page. No backend, API, runtime fetch, analytics, demo, or gallery.

## Technical Approach

Use Astro with `output: 'static'`, TypeScript, `@astrojs/sitemap`, and local content collections. It is content-first, zero-JS by default, typed at build time, and supports locale-aware sitemap output.

Runtime compatibility is Node `>=22.12.0` with Astro `7.1.1` pinned exactly. The committed npm lockfile must resolve `esbuild` to `0.28.1` or newer, and Astro 6 HTML-aware whitespace compression is retained explicitly with `compressHTML: true` so static copy and inline icon labels do not change under Astro 7.

| Option | Trade-off | Decision |
|---|---|---|
| Astro static site | Typed content and minimal JS | **Choose** |
| Eleventy | Requires added TS/content-validation conventions | Reject |
| Next.js | Unnecessary React/server complexity | Reject |
| Source-fed releases | Violates no-sync/no-fetch boundary | Reject |

## Information Architecture and Routes

| English (canonical) | Spanish translation | Purpose |
|---|---|---|
| `/` | `/es/` | Landing: value, one screenshot viewport with approved Dark/Light variants, README documentation CTA, value and community links |
| `/releases/` | `/es/releases/` | Index of local release articles linking onward to GitHub Releases |
| `/releases/{slug}/` | `/es/releases/{slug}/` | Editorial Markdown release article; Spanish posts begin in work unit 2 |

Unit 2 will enable Astro native i18n routing with `defaultLocale: en`, locales `en` and `es`, and `prefixDefaultLocale: false`; unit 1 deliberately leaves it disabled to avoid nonexistent routes and alternates. Shared UI will use typed local dictionaries, while release articles remain paired English/Spanish Markdown with build-time parity validation. `BaseLayout` will then set localized metadata and equivalent-route alternates. `site` produces absolute sitemap URLs; `robots.txt` references `sitemap-index.xml`.

## Architecture Decisions

| Decision | Choice and rationale |
|---|---|
| Content ownership | Website owns editorial Markdown release articles; GitHub README owns installation, configuration, support, and the authoritative release record. |
| Page construction | Thin pages select shared `BaseLayout`, shell, reusable icon, switcher, hero, and release components; no islands. |
| i18n | Astro native routing and typed local dictionaries; no external i18n dependency. Enable only with Spanish routes in unit 2. |
| External links | GitHub and other off-site destinations open in a new tab with `noopener noreferrer` and an accessible name; internal routes stay same-tab. |
| Visual assets | Astro-import approved logo plus dark/light hero variants for one switchable screenshot viewport, with Light as the default; meaningful alt, decorative empty alt, no gallery. |
| Accessibility/responsiveness | Semantic landmarks, one H1, visible focus, native controls, contrast tokens, reduced motion, fluid narrow-first layout. |

## Data Flow and Contracts

```
local page copy + src/content/releases/en/*.md
                 -> Astro content validation -> static HTML/CSS, images, sitemap, robots
                 -> dist/ publish directory -> Dokploy-managed static server and domain/TLS proxy
```

```ts
type Locale = 'en' | 'es';
type ReleaseFrontmatter = {
  version: string;
  publishedAt: string;
  githubReleaseUrl: string;
};
```

Each release has a local Markdown article with version, slug, ISO publication date, and GitHub Release URL frontmatter. The English index explicitly sorts the complete archive newest-to-oldest by publication date; articles use a factual overview plus applicable consistent editorial sections, then the authoritative GitHub Release link. Spanish articles, routes, and locale parity are explicitly deferred to work unit 2. The content schema rejects invalid versions, dates, and non-HTTPS getMando GitHub Release URLs. `RELEASE_CHECKLIST.md` requires both locale entries to be reviewed before deployment; it makes no API call.

## Deployment

Dokploy connects the GitHub repository and builds it with **Nixpacks**. The build installs pinned project dependencies, runs `npm run build`, and publishes Astro's `dist/` directory through Dokploy's managed static server. The domain routes to container port 80. The repository does not maintain a Dockerfile or nginx configuration.

Validate that the repository is connected, the Nixpacks build and `dist/` publish directory are configured, DNS points `getmando.rackandhost.com` to Dokploy ingress, and Dokploy HTTPS/Let's Encrypt is enabled after resolution. None is confirmed. Roll back by redeploying the prior revision or removing the route; GitHub remains the fallback.

## Testing Strategy

| Layer | Verification |
|---|---|
| Content/build | `astro check` and `astro build`: validate content schemas and produce English routes, sitemap, and robots output without remote release dependencies. |
| Dependency security | `npm audit --json` reports zero known vulnerabilities; inspect the lockfile graph for Astro `7.1.1` and `esbuild` `>=0.28.1`. |
| Locale parity | A lightweight build check verifies equivalent English and Spanish routes and release entries. |
| Manual browser review | Before launch, review narrow/wide layouts, documentation CTA, keyboard navigation, focus, contrast, external-link behavior, and the single screenshot viewport with its theme selector. |
| Deployment smoke test | In Dokploy, verify the root, Spanish route, releases, assets, HTTPS, and fallback behavior for unknown paths. |

## File Changes

| File | Action | Description |
|---|---|---|
| `package.json`, `astro.config.mjs`, `tsconfig.json` | Create | Astro static, i18n/site/sitemap, scripts and pinned dependencies. |
| `src/pages/{index,releases}.astro`, `src/pages/releases/[slug].astro`, `src/pages/es/...` | Create | English landing and release routes; GitHub README owns installation documentation and Spanish routes follow in unit 2. |
| `src/layouts/`, `src/components/`, `src/styles/global.css` | Create | Metadata, reusable shell/sections, tokens and responsive accessible styles. |
| `src/content.config.ts`, `src/content/releases/{en,es}/*.md`, `src/data/site-copy.ts` | Create | Validated editorial Markdown release articles; English foundation first, Spanish entries in unit 2. |
| `src/assets/` | Create | Approved logo and dark/light assets for one switchable hero screenshot viewport. |
| `public/robots.txt` | Create | Crawl directives for the generated sitemap. |
| `RELEASE_CHECKLIST.md`, lightweight build-validation script | Create | Manual release gate and locale/content parity checks without a test framework. |

## Threat Matrix

N/A — site URL routing is static page generation, not a routing/shell, subprocess, VCS/PR automation, executable-classification, or process-integration boundary. No matrix rows apply.

## Rollout, Risks, and Scope

No migration or feature flag. Deploy after build checks and a Dokploy smoke test. Risks: unapproved assets, translation drift, and unverified Nixpacks/DNS/TLS settings; mitigate with approval, build-time parity validation, the release checklist, and deployment validation.

The MVP likely exceeds the 800-line budget. With `ask-always`, request a delivery decision before apply; recommend: (1) shell, English pages, deployment, baseline tests; (2) Spanish, releases, parity/browser tests.

## Open Questions

- [ ] Approve the logo and single hero screenshot for public use before implementation.
- [ ] Confirm Dokploy repository access, DNS ownership, and certificate issuance when deployment is configured.

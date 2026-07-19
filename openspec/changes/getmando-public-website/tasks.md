# Tasks: Launch the getMando Public Website

## Review Workload Forecast

| Field | Value |
|---|---|
| Estimated changed lines | 1,050–1,350 authored lines |
| Risk level | High |
| 800-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 foundation/English/deployment; PR 2 Spanish/releases/validation |
| Delivery strategy | ask-always |
| Chain strategy | pending |
| Maintainer size exception | Approved — complete English release archive |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High
800-line budget risk: High
Maintainer-approved size:exception: Yes — complete English release archive

### Suggested Work Units

| Unit | Goal | Likely PR | Focused test command | Runtime harness | Rollback boundary |
|---|---|---|---|---|---|
| 1 | Shell, English pages, assets, README documentation links, and complete ordered English Markdown release archive | size:exception local unit | `npm run check && npm run build` | Preview: `/`, `/releases/`, and all English release routes | Config, shared UI, English pages/assets/content |
| 2 | Spanish pages/posts, parity and launch review | PR 2 (base: PR 1 branch) | `npm run validate:parity && npm run build` | Browser + Dokploy: ES, HTTPS, assets, unknown path | Spanish content, checklist, parity script |

## Phase 1: Foundation and English Experience

- [x] 1.1 Create `package.json`, `astro.config.mjs`, and `tsconfig.json` for pinned static Astro, `site`, sitemap, TypeScript, and `check`/`build`/parity scripts. **Accept:** static build needs no remote request.
- [x] 1.2 Create `src/layouts/BaseLayout.astro`, shared shell/icon/switcher/section components, and `src/styles/global.css`; implement landmarks, one H1, focus, contrast, reduced motion, narrow-first layout, accessible external links, and icon navigation. **Verify:** keyboard and narrow/wide review pass.
- [x] 1.3 Add approved evolved logo and one Light-default switchable Dark/Light screenshot viewport in `src/assets/`; create English `src/data/site-copy.ts`, landing and release pages, a complete ordered English Markdown release archive, release index, and English release detail routes. **Accept:** value precedes README CTA; no local quick-start/demo/gallery; each local article links to its GitHub Release.
- [x] 1.4 Add `public/robots.txt` and metadata/alternate/canonical behavior in `BaseLayout.astro`. **Verify:** build emits sitemap, robots reference, absolute self-canonicals, and `en`/`es`/`x-default` hreflang.
- [ ] 1.5 Configure Dokploy Nixpacks: `npm run build`, publish `dist/`, port 80, domain/TLS; record evidence outside the repo. **Accept:** add no Dockerfile, nginx, custom image, or health endpoint.

## Phase 2: Spanish Content and Release Information

- [ ] 2.1 Enable Astro native i18n (`en`/`es`, default English, unprefixed English), create typed shared-copy dictionaries and `src/pages/es/{index,releases}.astro`. **Verify:** every Spanish route has an English counterpart and self-canonical.
- [ ] 2.2 Add Spanish Markdown release articles paired with the English posts using version and HTTPS GitHub Release URL frontmatter. **Accept:** schema rejects invalid data/URLs; no YAML files, API, token, fetch, or sync.
- [ ] 2.3 Add Spanish release indexes/detail routes and create `RELEASE_CHECKLIST.md`. **Verify:** each release index links to its local article, every article links to GitHub as the complete authority, and the checklist requires both locale entries.

## Phase 3: Validation and Launch Evidence

- [ ] 3.1 Create the lightweight parity script to fail on missing route or release pairs. **Verify:** demonstrate failure before restoring a pair; run `npm run validate:parity && npm run check && npm run build`.
- [ ] 3.2 Inspect `dist/` for six routes, assets, sitemap, robots, metadata, self-canonicals, hreflang, and no runtime data dependency. **Accept:** record output in implementation evidence.
- [ ] 3.3 Review CTA order, hero count, links, keyboard/focus, contrast, and narrow/wide layouts; smoke-test root, Spanish, releases, HTTPS, assets, and unknown paths in Dokploy. **Accept:** record findings and rollback target.

## Phase 4: Runtime Dependency Remediation

- [x] 4.1 Upgrade the exact Astro dependency to `7.1.1`, generate `package-lock.json` through normal `npm install`, and preserve Astro 6 whitespace rendering with `compressHTML: true`. **Verify:** Node `>=22.12.0`, resolved `esbuild >=0.28.1`, zero-vulnerability `npm audit --json`, `npm run check`, `npm run build`, and static-output inspection preserve the nine English pages, route policy, release order, semantics, sitemap, and robots.

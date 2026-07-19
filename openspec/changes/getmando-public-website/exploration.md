## Exploration: getMando public website

### Current State

The target workspace (`/home/osv/work/getmando-web`) is intentionally empty of application source, is not a Git repository, and contains only OpenSpec/SDD initialization. No website stack, hosting configuration, test runner, or deployment contract can be inferred yet.

The verified sibling product repository is `/home/osv/work/getmando`, a Git repository whose origin is `git@github.com:rackandhost/getmando.git` (`https://github.com/rackandhost/getmando`). It is an Angular 21.1 standalone application using TypeScript, Tailwind CSS, signals, YAML configuration, and a Vitest/Angular test setup. The product is a client-rendered, self-hosted dashboard for organizing and accessing homelab/self-hosted services from one place; it intentionally avoids becoming a widget-heavy portal.

Verified product facts useful for public copy:

- Core value: a simple, beautiful, focused dashboard for self-hosted applications, with a glassmorphism UI.
- Capabilities: real-time search, categories, favorites, bookmarks, configurable search engines (Google, DuckDuckGo, Startpage, YouTube), responsive layout, light/dark/auto themes, custom backgrounds, keyboard accessibility, and YAML-driven configuration.
- Deployment: pre-built Docker image `ghcr.io/rackandhost/getmando`; Docker Compose is the documented recommended path, with a read-only mounted `dashboard.yaml`; Docker CLI is also documented. The container serves static compiled files through nginx and has a `/health` endpoint; there is no application backend.
- Documentation source: the product README is currently the main user-facing guide, covering quick start, configuration reference, development, Docker details, roadmap, contributing, license, and support. `ARCHITECTURE.md` is contributor-oriented rather than end-user documentation.
- Releases: `package.json` is at `1.1.0`; Git tags verify `v1.1.0`, `v1.0.1`, and `v1.0.0` (plus earlier versions), with `v1.1.0` on `origin/main`. Therefore v1.1.0 is released, not merely an undated candidate.
- Changelog: `CHANGELOG.md` is a maintained source containing v1.1.0, v1.0.1, v1.0.0, and earlier entries. GitHub release automation also generates release notes from tags and appends versioned Docker pull instructions and compare links.
- Branding/assets: `public/img/mando.png` is the current square blue/purple/orange monitor logo; `background.jpg` and `background-light.jpg` are product UI backgrounds. README screenshots show dark and light dashboard states. No separate website brand guide or public marketing copy was found.
- Licensing/support: GPL v3.0; README links to GitHub Issues and Discussions. The product repository also links to Angular, Tailwind, ng-icons, and the app-icon source.

The requested domain is `https://getmando.rackandhost.com`, but DNS, TLS, deployment provider, repository ownership for the website, and whether the site should be deployed separately from the product container are not yet verified.

### Affected Areas

- `/home/osv/work/getmando-web/` — new public website workspace; currently no application source or hosting contract.
- `/home/osv/work/getmando/README.md` — primary source for product positioning, installation, configuration, support, and current roadmap copy.
- `/home/osv/work/getmando/CHANGELOG.md` — canonical human-maintained release/changelog content.
- `/home/osv/work/getmando/package.json` — current product version (`1.1.0`) and stack metadata.
- `/home/osv/work/getmando/ARCHITECTURE.md` — verified deployment/runtime model and technical terminology.
- `/home/osv/work/getmando/Dockerfile`, `/home/osv/work/getmando/nginx.conf` — verified container and static-serving constraints.
- `/home/osv/work/getmando/public/img/` and `/home/osv/work/getmando/screenshots/` — candidate visual assets; reuse requires an explicit branding decision and asset ownership review.
- `/home/osv/work/getmando/.github/workflows/create-release.yml` — release source and automation behavior relevant to version pages.

### Approaches

1. **Static marketing site with curated documentation and release pages** — Build a small static site whose landing page, docs, versions, and changelog are authored in the website repository. Link to GitHub as the source of truth for code and issue/discussion support.
   - Pros: simplest hosting model; fast, SEO-friendly, predictable; editorial control over public messaging; no runtime dependency on GitHub.
   - Cons: release and README content can drift; updates require a website change; documentation is duplicated unless a clear ownership boundary is established.
   - Effort: Low/Medium.

2. **Source-driven static site from the product repository** — Keep product-facing docs/changelog in `/home/osv/work/getmando` and generate or synchronize website pages from selected Markdown, release tags, and assets during a build.
   - Pros: reduces duplicated facts; versions and changelog can follow the product repository; product maintainers update one canonical source.
   - Cons: requires explicit extraction rules and sanitization; README structure is not yet optimized as a navigation hierarchy; release automation and website publishing become coupled; generated content still needs editorial review.
   - Effort: Medium.

3. **Hybrid editorial site with source-fed release index** — Curate the landing page and stable docs in the website repository, while importing release metadata/changelog entries from GitHub or a scheduled build; link each release to its GitHub release and Docker tag.
   - Pros: strongest balance of marketing clarity and release freshness; docs can be intentionally audience-oriented; GitHub remains authoritative for release details.
   - Cons: introduces an external API/build dependency and failure/fallback decisions; some duplication remains; maintenance ownership must be explicit.
   - Effort: Medium.

### Recommendation

Start the proposal round with **Approach 3**, but keep the first release deliberately small: a focused landing page, Getting Started documentation, configuration/deployment reference, versions/changelog index, and clear GitHub/Docker links. Use the product repository as the factual source for releases and technical claims, while retaining editorial control over positioning and beginner-facing documentation. If the maintainer cannot commit to a synchronization process, choose Approach 1 instead; do not prematurely couple the two repositories.

The likely information architecture is: Home (what it is, who it helps, screenshot/demo, primary install CTA), Docs (Getting Started, Docker, configuration, customization/troubleshooting), Versions (latest release plus historical releases and changelog), and Community/Source (GitHub, Issues, Discussions, license). The landing page should sell the outcome—one calm entry point to self-hosted services—not Angular implementation details.

### Product and Business Questions

- Who is the primary audience for launch: homelab beginners, experienced self-hosters, or both? Which audience should the copy prioritize?
- What is the primary conversion: install the Docker image, visit GitHub/star the repository, read documentation, or something else?
- Should the site present getMando as a personal/open-source project, a Rack & Host product, or a product with a broader future commercial audience?
- How deep should documentation go in v1: a quick start plus configuration reference, or also reverse proxy, upgrades, troubleshooting, and contribution guidance?
- Is English-only acceptable for launch, or are Spanish/multilingual pages required? Which language is authoritative when content differs?
- Is the existing logo, palette, glassmorphism treatment, and dashboard screenshots approved for the public brand, or should the site introduce a revised visual identity?
- Should the public site show a live demo/screenshot gallery, and if so, is there a safe demo instance and approved data/content?
- Who owns ongoing updates, and what freshness guarantee is desired for versions/changelogs (manual release, same-day update, or automated synchronization)?
- Where should the website be hosted and deployed, and will it have its own repository/CI separate from the product repository?
- Which content is intentionally out of scope for launch: roadmap items, performance claims, accessibility claims, architecture details, or future database features?

### Risks

- The README contains useful but potentially marketing-sensitive claims (for example performance and WCAG AA statements) that need evidence and approval before being promoted as guarantees.
- README, `CHANGELOG.md`, GitHub Releases, package version, and Docker tags are related but distinct sources; an automated or manual policy is needed to prevent version drift.
- The product repository currently has no website-specific information architecture or content API; source-driven generation must not be assumed to be free.
- The target workspace has no Git history or detected stack, so hosting and repository setup remain decisions rather than constraints.
- Reusing product imagery without a brand/asset approval could lock the public site into an unreviewed visual language.
- A public domain requires DNS/TLS/redirect, canonical URL, metadata, accessibility, and mobile behavior decisions that are not covered by the product repository.
- The requested 800-line review budget is generous for planning but should not be interpreted as permission for an oversized first implementation; keep proposal scope reviewable.

### Ready for Proposal

Yes, after the user answers the highest-value questions about audience, primary conversion, brand direction, documentation depth, language, and maintenance/source-of-truth policy. The next proposal should explicitly choose between curated-static and hybrid source-driven content, define launch scope, and record hosting/repository ownership without selecting a framework until those constraints are known.

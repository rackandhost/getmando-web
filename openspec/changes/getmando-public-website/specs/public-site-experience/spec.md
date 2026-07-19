# Public Site Experience Specification

## Purpose

Provide a static, accessible public path from product discovery to the authoritative getMando documentation.

## Requirements

### Requirement: Bilingual Canonical Experience

The website MUST use Astro native i18n routing with `defaultLocale: en`, locales `en` and `es`, and `prefixDefaultLocale: false` when Spanish routes are introduced. Shared UI copy MUST use typed local dictionaries, while paired English/Spanish Markdown release articles MUST be validated for build-time locale parity. English MUST remain the canonical version when translations differ.

#### Scenario: Visit English content

- GIVEN a visitor opens an English public page
- WHEN the page is rendered
- THEN English content and primary navigation MUST be available
- AND it MUST remain independently usable before Spanish routes are introduced

#### Scenario: Visit Spanish content

- GIVEN a visitor selects Spanish content
- WHEN the equivalent page is rendered
- THEN it MUST present translated content and an English-canonical counterpart

### Requirement: Docker-First Landing Conversion

The landing page MUST present value and audience context before a prominent Docker installation call to action. It MUST use one approved screenshot viewport with accessible Dark and Light variants, and MUST evolve the current getMando identity rather than replace it. The landing hierarchy MUST also expose product value and GitHub/community destinations.

#### Scenario: Follow the primary conversion path

- GIVEN a visitor opens the landing page
- WHEN they scan the primary content hierarchy
- THEN they MUST encounter product value before a prominent Docker install call to action
- AND exactly one approved screenshot viewport MUST be presented at a time

#### Scenario: Inspect visual content

- GIVEN the landing page contains its hero visual
- WHEN it is reviewed
- THEN it MUST use approved dark/light screenshot variants and evolved existing identity
- AND it MUST NOT present more than one screenshot at a time or a gallery

### Requirement: README Documentation Destination

The website MUST direct installation, configuration, troubleshooting, and complete product documentation to the product GitHub README at `https://github.com/rackandhost/getmando#readme`. The MVP MUST NOT publish a local quick-start route or duplicate installation guidance.

#### Scenario: Follow documentation

- GIVEN a visitor follows a documentation CTA
- WHEN they need installation or configuration guidance
- THEN they MUST receive the GitHub README destination

#### Scenario: Inspect local routes

- GIVEN the public routes are reviewed
- WHEN installation material is identified
- THEN no local quick-start route MUST be present

### Requirement: Accessible Responsive Public Pages

Public pages MUST use semantic structure, support keyboard operation, provide sufficient text and control contrast, and provide meaningful alternative text for informative images. They MUST remain usable across supported narrow and wide viewport sizes.

#### Scenario: Navigate without a pointer

- GIVEN a keyboard-only visitor opens a public page
- WHEN they move through interactive content
- THEN every interactive element MUST be reachable and operable by keyboard

#### Scenario: View a narrow layout

- GIVEN a visitor uses a narrow viewport
- WHEN a public page is rendered
- THEN content and primary actions MUST remain readable, reachable, and usable

### Requirement: External Link Safety

External destinations MUST open in a new tab with `noopener noreferrer` and an accessible name announcing that behavior. Internal website routes MUST stay in the same tab without those attributes.

#### Scenario: Follow external documentation

- GIVEN a visitor follows a GitHub documentation, community, repository, or release link
- THEN it MUST open in a new tab with safe relationship attributes and an accessible new-tab name

### Requirement: Discoverable Static Deployment

The website MUST be deployable as static public content suitable for Dokploy. It MUST provide localized metadata, canonical URLs under `https://getmando.rackandhost.com`, a sitemap, and robots directives. The MVP MUST NOT include a backend, analytics, live demo, gallery, or runtime data service.

#### Scenario: Inspect crawler and deployment outputs

- GIVEN the static site is prepared for deployment
- WHEN its public outputs are inspected
- THEN localized metadata, canonical URLs, sitemap, and robots directives MUST be present
- AND no backend, analytics, live-demo, gallery, or runtime data dependency MUST be required


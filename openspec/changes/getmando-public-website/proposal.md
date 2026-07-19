# Proposal: Launch the getMando Public Website

## Intent

Increase getMando adoption by moving self-hosters to a Docker installation, while positioning it as open source backed by Rack & Host.

## Scope

### In Scope
- Static custom-domain website at `https://getmando.rackandhost.com`; framework and hosting provider are design decisions.
- English-canonical and Spanish-translated landing, releases, and navigation.
- A progressive-disclosure landing page: README documentation CTA, one screenshot viewport with approved dark/light variants, product value, and GitHub/community links.
- GitHub README is the installation and configuration documentation authority; the MVP owns no local installation guide.
- Manually maintained editorial Markdown release articles; the index links to each local article, and every article links to its authoritative GitHub release.
- Accessibility/SEO baseline: semantics, keyboard operation, contrast, alt text, responsive layout, localized metadata, canonical URL, sitemap, and robots directives.

### Out of Scope
- Live demo, gallery, full documentation portal, advanced guides, analytics, or backend.
- A replacement visual identity, framework choice, hosting-provider selection, or a second release authority.

## Capabilities

### New Capabilities
- `public-site-experience`: Bilingual static discovery and README-led Docker conversion.
- `release-information`: Curated local Markdown release articles linked to official GitHub releases.

### Modified Capabilities
None; no baseline specifications exist.

## Approach

Evolve the existing getMando logo, palette, and glassmorphism in an editorial static site. Curate beginner-friendly discovery copy and full local release articles; GitHub README owns installation, configuration, advanced material, and the authoritative release record. Update the website manually as part of each product release.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `openspec/changes/getmando-public-website/` | New | Launch contract and follow-on work. |
| Website source (TBD) | New | Static pages, localized content, assets, metadata, release import. |
| GitHub Releases | External | Authoritative release details and destination links. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Website release information becomes stale | Medium | Add the website update to the product release checklist and link every entry to GitHub. |
| English/Spanish drift | Medium | Treat English as canonical; review translations with each content change. |
| Accessibility or SEO regression | Medium | Add automated/manual checks in technical design. |

## Rollback Plan

Revert to the last known-good site or remove DNS deployment. GitHub remains the installation, support, and release fallback.

## Dependencies

- DNS/TLS and static-hosting setup for the custom domain.
- Approved hero screenshot/assets.
- A release process that includes updating the website's curated Markdown release article.

## Success Criteria

- [ ] Both languages expose README documentation paths; Spanish maps to canonical English.
- [ ] Keyboard, responsive, metadata, canonical URL, sitemap, and robots checks pass.
- [ ] The release index is manually updated for each product release, links every entry to its local article, and every article links to its authoritative GitHub release.
- [ ] Launch has no analytics scripts; adoption is assessed through external project/release signals.

# Apply Progress: Astro 7 Runtime Dependency Remediation

**Change**: getmando-public-website
**Mode**: Standard
**Work unit**: Astro 7 dependency remediation

## Completed Tasks

- [x] 4.1 Upgrade the exact Astro dependency to `7.1.1`, generate `package-lock.json` through normal `npm install`, and preserve Astro 6 whitespace rendering with `compressHTML: true`.

## Work Unit Evidence

| Evidence | Result |
|---|---|
| Focused test command and exact result | `npm audit --json` exited 0 with 0 total vulnerabilities; `npm ls astro esbuild --all` resolved `astro@7.1.1` and `esbuild@0.28.1`. |
| Runtime harness command/scenario and exact result | `npm run check && npm run build` exited 0: 0 errors, warnings, and hints; build emitted 9 static pages. Generated HTML inspection confirmed preserved inline icon/button/nav labels and prose whitespace. |
| Rollback boundary | Revert `package.json`, `package-lock.json`, and `astro.config.mjs` to restore the prior dependency graph and Astro 6 default whitespace behavior; the recorded SDD progress files are documentation-only. |

## Verification Notes

- Node `v24.15.0` satisfies the `>=22.12.0` engine requirement.
- The generated routes are `/`, `/releases/`, and seven descending release detail routes; no `/es/` or quick-start route exists.
- Generated release pages retain semantic `time[datetime]` values, external GitHub links use `target="_blank" rel="noopener noreferrer"`, internal links remain same-tab, and `robots.txt` references `sitemap-index.xml`.

## Deviations from Design

None — the remediation preserves the static architecture and rendered content.

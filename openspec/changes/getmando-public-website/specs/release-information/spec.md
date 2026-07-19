# Release Information Specification

## Purpose

Publish locally curated Markdown release articles through an index while retaining GitHub Releases as the authoritative record.

## Requirements

### Requirement: Curated Release Index

The website MUST publish a manually maintained release index that sorts the complete local archive newest-to-oldest by ISO publication date. Each article MUST include validated version, slug, publication date, and GitHub Release URL frontmatter; a factual overview; applicable consistent editorial sections; and an authoritative GitHub Release link. The website MUST NOT present itself as a second release authority.

#### Scenario: Read a published release

- GIVEN a visitor opens the versions and changelog index
- WHEN they select a release entry
- THEN its version and a link to its local release article MUST be visible
- AND the local article MUST link to the authoritative GitHub Release in a new tab

#### Scenario: Order the historical archive

- GIVEN release articles are loaded from local Markdown
- THEN the index MUST order them deterministically by descending publication date

#### Scenario: Seek complete release details

- GIVEN a visitor needs the authoritative release record
- WHEN they follow the local article's GitHub Release link
- THEN GitHub MUST provide the authoritative complete release record

### Requirement: Explicit Release Maintenance

The product release process MUST include a checklist step to manually update the website's curated Markdown article for every published product release. The step MUST verify the version, editorial article, and authoritative GitHub Release link before website deployment.

#### Scenario: Publish a new product release

- GIVEN a product release is being published
- WHEN release maintenance is performed
- THEN the checklist MUST require the website article to be manually updated and verified

#### Scenario: Detect an omitted website update

- GIVEN a product release has no corresponding curated website article
- WHEN the release checklist is reviewed
- THEN the checklist MUST identify the website article update as incomplete

### Requirement: No Automated Release Synchronization

The MVP MUST NOT use the GitHub API, build-time synchronization, release tokens, runtime fetching, or automated changelog imports to populate release information. Release articles MUST be maintained as Markdown in the website repository.

#### Scenario: Build the release index

- GIVEN the website is built or deployed
- WHEN release information is produced
- THEN it MUST use locally maintained content
- AND it MUST NOT require GitHub credentials, API access, or remote release fetching

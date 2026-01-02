# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Sync Rule**: Keep `CLAUDE.md` (English) and `CLAUDE.ja.md` (Japanese) in sync. When modifying one, always update the other.

## Project Overview & Setup

@README.md

## Content Architecture

### Two Collections System

The codebase uses Astro's content collections with **strict schema validation**:

1. **`articles`** - Daily AI news articles
2. **`aiTimeline`** - Historical AI milestones for timeline views

### Tag Validation System

Tags are **strictly validated** against a predefined enum in `src/content/config.ts`.

**Critical workflow**:
1. Check `TAGS.md` before creating articles
2. Use ONLY tags from the allowed list
3. Run `npm run validate-tags` before committing
4. If you need a new tag, add it to `src/content/config.ts` (in `commonTags` enum)

The tag validation script (`scripts/validate-tags.ts`) automatically runs before build (`prebuild` hook). Using undefined tags will cause **build failures**.

### Frontmatter Schema

**Articles** (`src/content/articles`):
```yaml
---
title: string
description: string
date: YYYY-MM-DD (parsed as Date)
category: ChatGPT | Claude | Gemini | Grok | Image Generation | Research | Other
tags: [array of allowed tags from TAGS.md]
locale: en | ja
technyanComment?: string (optional mascot comment)
---
```

**Timeline** (`src/content/aiTimeline`):
```yaml
---
title: string
description: string
date: YYYY-MM-DD
category: Model Release | Technical Breakthrough | Investment | Social Impact | Policy & Regulation
impactLevel: high | medium | low
tags?: [array of allowed tags]
relatedCompanies?: [array of company names]
locale: en | ja
technyanComment?: string
---
```

## Article Creation Guidelines

When collecting multiple news stories, follow these rules:

1. **Create separate articles** - Do NOT combine unrelated news into one article
2. **Dual-language files** - Always create both `ja.md` AND `en.md`
3. **Clear directory names** - Use English directory names that reflect content (e.g., `anthropic-microsoft-nvidia-partnership/`)
4. **Relationship assessment** - Only combine closely related news; separate independent news
5. **Format consistency** - Follow existing article format (frontmatter, section structure)
6. **Category restrictions** - Use ONLY categories defined in the schema enum

## AI News Fetching Skills Reference

> **Important**: `.claude/skills/` directory skills are NOT supported in GitHub Actions (claude-code-action). By referencing skill documents with `@` syntax here, these documents are loaded as part of CLAUDE.md context, enabling the same guidance to work in both local and CI environments.

@.claude/skills/ai-news-fetcher/SKILL.md
@.claude/skills/ai-news-fetcher/WORKFLOW.md

## Architecture Highlights

### Content Processing Flow

1. **Articles** are stored as Markdown with YAML frontmatter
2. **Astro Content Collections** provide type-safe access and validation
3. **React components** handle interactive features (search, filtering, views)
4. **History utilities** (`src/utils/historyUtils.ts`) calculate impact scores and group articles

### Impact Score System

Articles have dynamically calculated impact scores (0-100) based on:
- Tag count (×10 points each)
- Technyan comment presence (+30 points)
- Category weights (Research: +20, Major models: +15, etc.)

Used in **Impact Map View** to visualize article importance.

### Five History Views

The `/history` page offers **five different visualization modes** for the same timeline data:

1. **Timeline View** - Vertical chronological flow
2. **Milestone View** - Grouped by year/month
3. **Impact Map View** - Sized by impact score
4. **Archive Grid View** - Compact calendar-style grid
5. **Story Flow View** - Immersive storytelling experience

All powered by the same `aiTimeline` collection with different rendering logic.

### i18n System

**Two-level language support**:

1. **UI translations** - Managed in `src/i18n/translations.ts` with `en` and `ja` keys
2. **Content translations** - Separate `.md` files per language with `locale` field

React components use `I18nProvider` and `useI18n()` hook. Language preference stored in `localStorage`.

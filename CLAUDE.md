# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Russian-language website for the Selenide test automation framework, hosted at ru.selenide.org. Built with Jekyll 3.9.5 on GitHub Pages. All content is in Russian.

The English counterpart lives at selenide.org (separate repository).

## Development Commands

```bash
# Start local dev server (requires RVM with Ruby 2.7)
./start.sh
# Serves at http://0.0.0.0:4002 with LiveReload on port 40002

# Or manually:
bundle exec jekyll serve --future --incremental --safe --strict_front_matter \
  --host=0.0.0.0 --port=4002 --livereload --livereload-port=40002 --watch

# Create a new blog post:
rake post title="Post Title" date="2026-04-12" tags="[tag1, tag2]"

# Create a new page:
rake page name="page-name.md"

# Install dependencies:
bundle install
```

## Content Structure

**Blog posts** (`_posts/`): Markdown files named `YYYY-MM-DD-slug.md` with this frontmatter:
```yaml
---
layout: post
title: "Title in Russian"
description: ""
category:
header-text: "Short header text"
tags: []
---
{% include JB/setup %}
```

**Documentation pages** (`documentation/`): Standalone Markdown pages for Selenide features, anti-patterns (`donts/`), etc.

**Top-level pages**: `index.md`, `quick-start.md`, `documentation.md`, `faq.md`, `users.md`, `quotes.md`, etc.

**Data files** (`_data/`): `users.json` (companies using Selenide), `user-tags.json`.

## Theme & Layout Architecture

Uses Jekyll Bootstrap with a custom "ingmar" theme:
- `_includes/themes/ingmar/default.html` - main page template (header, footer, analytics)
- `_includes/themes/ingmar/post.html` - blog post template
- `_includes/themes/ingmar/_quicklinks.html` - sidebar quick links
- `_layouts/default.html`, `post.html`, `page.html` - thin wrappers that delegate to the theme
- `_includes/main_menu.md` - site navigation
- `_includes/documentation-menu.md` - docs sidebar menu
- `_includes/donate.md` - donation widget (included in multiple layouts)
- `assets/themes/ingmar/` - CSS, JS, images for the theme

Frontend dependencies are loaded from CDNs (jQuery, jQuery UI, Magnific Popup, Google Fonts).

## Key Configuration

- `_config.yml`: Jekyll config. `SELENIDE_VERSION` variable used in quick-start code snippets. Update it when releasing a new Selenide version.
- `CNAME`: Points to `ru.selenide.org`.
- Permalink format: `/:categories/:year/:month/:day/:title/`
- Markdown processor: kramdown.

## Deployment

Push to `gh-pages` branch triggers automatic GitHub Pages deployment. No CI/CD pipeline — GitHub Pages builds Jekyll directly.

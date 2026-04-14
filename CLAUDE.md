# CLAUDE.md — selenide-ru

## Project Overview

Russian-language website for the Selenide test automation framework, hosted at ru.selenide.org. Built with Hugo static site generator on GitHub Pages. All content is in Russian.

The English counterpart lives at selenide.org (separate repository: selenide-web).

## Tech stack

- **Hugo** static site generator
- **Goldmark** for Markdown rendering (with `unsafe: true` for raw HTML in content)
- **Go templates** for layouts
- **jQuery 3.6.0** + jQuery UI 1.13.1 (from CDN)
- Custom theme "Ingmar" (inlined in `layouts/` and `assets/themes/ingmar/`)

## Development Commands

```bash
# Install Hugo (macOS)
brew install hugo

# Start local dev server
./start.sh
# or manually:
hugo server --buildFuture --port 4002
```

## Content Structure

```
hugo.toml            Main Hugo config
content/
  _index.md          Homepage (content in layouts/index.html)
  blog/              Blog posts (185+ files), _index.md is the blog list
  documentation/     _index.md + sub-pages (page-objects, screenshots, reports, clouds, selenide-vs-selenium)
  quick-start.md, faq.md, users.md, quotes.md, contacts.md, javadoc.md, thanks.md
layouts/
  _default/          baseof.html, single.html, list.html, users.html
  blog/              single.html (post), list.html (blog index with year/month grouping)
  partials/          donate.html, main-menu.html, documentation-menu.html, quicklinks.html, title.html, analytics.html
  shortcodes/        selenide-version.html, selenium-changelog.html, documentation-menu.html
  index.html         Homepage template
  404.html           Custom 404
assets/
  themes/ingmar/css/ CSS files (processed via Hugo Pipes for fingerprinting)
static/
  images/            Logos, screenshots
  assets/themes/ingmar/js/  JavaScript files
  CNAME, favicon.ico, robots.txt
data/
  users.json         Companies using Selenide
  user_tags.json     Tags for filtering users page
```

**Blog posts** (`content/blog/`): Markdown files named `YYYY-MM-DD-slug.md` with this frontmatter:
```yaml
---
slug: "slug-name"
date: YYYY-MM-DD
title: "Title in Russian"
description: ""
category:
headerText: "Short header text"
tags: []
---
```

## Key Configuration

- `hugo.toml`: Hugo config. `params.selenideVersion` variable used in quick-start code snippets via `{{</* selenide-version */>}}` shortcode. Update it when releasing a new Selenide version.
- `static/CNAME`: Points to `ru.selenide.org`.
- Permalink format: `/:year/:month/:day/:slug/`

## Deployment

A GitHub Actions workflow runs `hugo` and deploys the `public/` directory to GitHub Pages.

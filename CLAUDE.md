# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

hugo-modus is a Hugo theme using the colour palette from the Modus themes (Operandi for light mode, Vivendi for dark mode). It's an opinionated, minimalist theme focused on readability and typography.

## Development Commands

### CSS Development
```shell
make watch    # Watch for changes and rebuild CSS using Tailwind CSS 4
make build    # Build CSS once (production mode with optimization)
```

### Hugo Server
```shell
make dev      # Start Hugo server with exampleSite content for theme development
```

The dev server uses:
- `exampleSite/content` for content
- `exampleSite/hugo.toml` for configuration
- Builds drafts
- Disables fast render for accurate previews
- Navigates to changed content automatically

### Content Creation
```shell
hugo new -k section posts/_index.md    # Create a new section
hugo new posts/your-first-post.md      # Create new content
```

## Architecture

### CSS & Styling

The theme uses **Tailwind CSS 4** with a custom theme configuration:
- Entry point: `assets/css/main.css`
- Output: `assets/css/dist/main.css`
- All Modus theme colors are defined as CSS custom properties in the `@theme` block
- Two color schemes: `operandi-*` (light) and `vivendi-*` (dark)
- Color categories: base colors (red, green, yellow, blue, magenta, cyan), special colors (rust, gold, olive, etc.), background colors (intense, subtle, nuanced)

### Layout Structure

The theme follows Hugo's standard layout hierarchy:
- `layouts/_default/baseof.html` - Base template with header, main, footer structure
- `layouts/_default/single.html` - Default single page template (uses `article-post.html` partial)
- `layouts/_default/list.html` - Default list template
- `layouts/_default/home.html` - Homepage template

### Custom Sections

The theme has specialized layouts for different content types:
- **til/** - "Today I Learned" posts (uses `article-card.html` partial instead of `article-post.html`)
- **links/** - Link posts
- **series/** - Taxonomy for grouping related posts

### Partials Organization

17 partials handle different UI components (in `layouts/partials/`):
- `head.html`, `header.html`, `footer.html` - Base structure
- `article-post.html`, `article-card.html`, `article-item.html` - Content display variations
- `datetime-link.html`, `metadata.html` - Metadata display
- `toc.html`, `pager.html`, `page-list.html` - Navigation components
- `section-header.html`, `favicon.html` - Miscellaneous

### Configuration

- Root `hugo.toml` - Theme module configuration (requires Hugo extended v0.141.0+)
- `exampleSite/hugo.toml` - Example site configuration with:
  - Custom taxonomies (series)
  - Syntax highlighting configuration (`noClasses = false` for CSS classes)
  - Menu configuration
  - Multi-language support (en, zh)

### Archetypes

Two content archetypes in `archetypes/`:
- `default.md` - Default content template
- `section.md` - Section index page template

## Environment Setup

The project uses Nix flakes for development environment:
```shell
nix develop    # Enter development shell with go, hugo, and tailwindcss_4
```

Or use direnv with the included `.envrc` for automatic environment loading.

## Theme Distribution

- Published as Hugo module: `github.com/goofansu/hugo-modus`
- Can also be installed as git submodule
- Demo site: https://hugo-modus.yejun.dev/

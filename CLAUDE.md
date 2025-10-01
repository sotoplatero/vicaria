# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vicaria is a SvelteKit 2 application using Svelte 5, styled with Tailwind CSS 4, DaisyUI components, and supporting markdown content via MDSvex.

## Package Manager

This project uses **pnpm** (note the `.npmrc` and `pnpm-lock.yaml`). Always use `pnpm` commands:
- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

## Development Commands

- `pnpm dev` - Start Vite dev server (default: http://localhost:5173)
- `pnpm dev -- --open` - Start dev server and open browser
- `pnpm build` - Build production bundle
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run svelte-check for type checking
- `pnpm check:watch` - Run svelte-check in watch mode

## Architecture

### Framework Stack
- **SvelteKit 2** with **Svelte 5** (using runes: `$props()`, `$state()`, etc.)
- **adapter-auto** for deployment (may need adapter changes based on target platform)
- **TypeScript** with strict mode enabled

### Styling
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin
- **DaisyUI** for component library
- **@tailwindcss/typography** for prose styling
- Global styles in `src/app.css`

### Content Processing
- **MDSvex** configured for `.svx` files
- Supports both `.svelte` and `.svx` extensions for components

### Project Structure
- `src/routes/` - SvelteKit file-based routing
  - `+layout.svelte` - Root layout (imports global CSS, sets favicon)
  - `+page.svelte` - Home page
- `src/lib/` - Reusable code accessible via `$lib` alias
  - `src/lib/assets/` - Static assets (images, icons)
- `static/` - Public static files served at root

### TypeScript Configuration
- Extends `.svelte-kit/tsconfig.json` (auto-generated)
- Strict mode enabled with `allowJs` and `checkJs`
- Path alias `$lib` resolves to `src/lib/`

## Key Implementation Notes

### Svelte 5 Syntax
This project uses Svelte 5's new runes API. Use `$props()`, `$state()`, `$derived()`, etc. instead of legacy syntax.

### Vite Configuration
Vite is configured with both Tailwind CSS and SvelteKit plugins. Both are required for the build process.

### MDSvex Integration
Markdown files with `.svx` extension are preprocessed and can include Svelte components. The preprocessor chain includes both `vitePreprocess()` and `mdsvex()`.

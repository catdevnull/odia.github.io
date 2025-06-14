# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start Astro development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the built application locally
- `npm run export` - Build and export static site (alias for build)

## Deployment

To update the website, use the updated command:
```bash
rm -rf dist && npm run build && touch dist/.nojekyll && echo -n odia.legal > dist/CNAME && gh-pages -t -d dist
```

## Architecture

This is an Astro-based static website for the "Observatorio de Derecho Informático Argentino" (ODIA). The site uses a single-page architecture with animated article overlays and client-side JavaScript for interactivity.

### Key Structure
- **Single Page App**: Main page (`src/pages/index.astro`) with client-side JavaScript managing state for article visibility and animations
- **Component Architecture**: 
  - `src/components/Header.astro` - Navigation and site branding
  - `src/components/Footer.astro` - Social media links and footer content
  - `src/layouts/Layout.astro` - Base HTML layout with global styles
- **Content Management**: Markdown files in `src/content/markdown/` directory are loaded dynamically via fetch and rendered with JavaScript
- **Styling**: SCSS with component-based organization in `src/styles/`

### Content Flow
Articles are loaded dynamically via fetch from the public/content directory and rendered using a simple JavaScript markdown parser. The site uses timeout-based animations for smooth transitions between article views.

### Static Assets
- Documents in `public/documents/`
- Images including team member photos in `public/images/`
- Markdown content in `public/content/` (accessible via fetch)
- Custom favicon and branding assets

## Technology Stack
- Astro 5.9.3 with static site generation
- Client-side JavaScript for interactivity
- FontAwesome CDN for social media icons
- SCSS with HTML5 UP Dimension theme framework
- Static export for GitHub Pages deployment

## Migration Notes
- Migrated from Next.js 9.5.2 to modern Astro SSG
- Converted React components to Astro components where possible
- Maintained existing animations and interactions with vanilla JavaScript
- Preserved all existing styling and design
- Updated deployment process to use `dist/` instead of `out/`
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://odia.legal',
  integrations: [react(), mdx(), sitemap()],
  output: 'static',
  build: {
    assets: '_astro'
  }
});

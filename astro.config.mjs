// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://vijayinnovation.com',
  integrations: [icon()],
  build: {
    // Inline small stylesheets so the first paint needs no extra request.
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});

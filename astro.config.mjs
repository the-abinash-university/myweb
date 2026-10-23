// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkHighlight from './src/markdown/remark-highlight.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://abinashchaudhary.com',
  integrations: [sitemap()],
  markdown: {
    processor: unified({ remarkPlugins: [remarkHighlight] }),
  },
});

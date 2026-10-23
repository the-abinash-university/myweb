// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkHighlight from './src/markdown/remark-highlight.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: unified({ remarkPlugins: [remarkHighlight] }),
  },
});

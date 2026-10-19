# Personal site

A portfolio, side-project, and writing site built with Astro, inspired by the typography and earthy palette of [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus).

## Get started

```sh
npm install
npm run dev
```

Build the static site with `npm run build`; preview the build locally with `npm run preview`.

## Personalize the site

- Edit `src/data/site.ts` to update your name, introduction, email, résumé path, and social profile URLs.
- Edit the CV directly in `src/pages/cv.md`. The `/cv/` page renders that Markdown, offers the Markdown source for download, and has a Print / Save as PDF button for exporting the current version.
- Add your photo to `src/assets/profile/` to replace the About page placeholder automatically. Supported formats are AVIF, GIF, JPEG, PNG, SVG, and WebP. When there are multiple images, a non-placeholder filename is chosen alphabetically; keep just one personal photo in that folder for a predictable result. Leave `profile-placeholder.svg` in place as the fallback.
- To replace the mountain-and-sea hero art with a photo, add one AVIF, GIF, JPEG, PNG, SVG, or WebP image to `src/assets/hero/`. The site will use it automatically, with a subtle rustic finish; remove it to restore the built-in illustration. If there are several images, the alphabetically first filename is used.
- Add Markdown posts under `src/pages/posts/`. Each post becomes a page and is automatically listed on `/blog/`.
- Add side-project Markdown pages under `src/pages/side-projects/`. Each project becomes a page and is automatically listed on the home page and `/side-projects/`. The included projects are illustrative concepts, not claims of completed work.
- Add tutorial Markdown files under `src/pages/tutorials/`. Each file becomes a tutorial page, appears in the tutorials section on the home page, and is automatically listed at `/tutorials/`. The home page shows the three newest tutorials. Include `layout: ../../layouts/TutorialLayout.astro` and the usual title, `pubDate`, description, and optional tags in its frontmatter.
- The theme toggle follows the visitor's system preference until they choose a theme, then remembers their choice in local storage. Light mode uses warm book-paper colors; dark mode uses a deeper forest palette.

Example post:

```md
---
layout: ../../layouts/BlogPostLayout.astro
title: A note from the workshop
pubDate: 2026-10-18
description: A short summary that appears in the writing list.
tags: [projects, notes]
---

Write your post here.
```

For a tutorial, use `layout: ../../layouts/TutorialLayout.astro` and put the Markdown file in `src/pages/tutorials/`. The tutorial index discovers new files automatically.

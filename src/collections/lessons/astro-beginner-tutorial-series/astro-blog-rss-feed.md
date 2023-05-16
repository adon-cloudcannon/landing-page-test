---
_schema: default
title: Astro Blog RSS Feed
image: https://cc-dam.imgix.net/Tutorial Astro —sublessonRSS.png
order: 6
tutorial: astro-beginners-tutorial-series
description: In this lesson you will learn how to add a blog post RSS feed in Astro.
seo:
  open_graph_type: article
  featured_image: https://cc-dam.imgix.net/Tutorial+Astro+%E2%80%94sublessonRSS.png
  featured_image_alt: Astro blog RSS feed tutorial
---
So far in this&nbsp;<a target="_blank" rel="noopener" href="/tutorials/astro-beginners-tutorial-series/">Astro Beginners’ tutorial</a>, all the routes on the site have been HTML pages, whether generated from Astro markup files or Markdown. In this final lesson, we see Astro can also generate non-HTML content. We focus on adding an Astro Blog RSS feed, though you can follow a similar approach to serve a PDF brochure or even some JSON data from your Astro site.

## Astro resource routes

We saw earlier, if we want Astro to generate an HTML page, we create a `.astro`, Markdown or HTML file within the `src/pages` directory. Astro generates the page using that input file’s path to determine the route the content is served from. So `https://example.com/docs/getting-started` might be generated from `src/pages/docs/getting-started.astro`.

For non-HTML routes, we follow the same file-based routing pattern, still creating the source file within `src/pages`. One difference, though, is that for non-HTML routes, you need to create a TypeScript (or JavaScript) file (instead of `.astro`, etc.). Going back to the PDF brochure example, you might create `src/pages/brochure.pdf.ts`&nbsp;to make the brochure available at the endpoint `https://example.com/brochure.pdf`.

### Astro non-HTML route source

Continuing the PDF example, within the endpoint file we need to export a handler function. That handler function will perform two tasks:

1. listen for HTTP `GET` requests (sent by a site visitor’s browser requesting the PDF, for example)
2. return an HTTP response with the requested data

Here is what the code might look like for the PDF endpoint:

```tsx
// EXAMPLE ONLY
import type { APIRoute } from 'astro';

export const get: APIRoute = async function get(context) {

  const doc = /* logic to create a PDF file */;

  return { body: doc.toString('binary'), encoding: 'binary' };
}
```

It is important that the exported handler is named `get` (to match the request HTTP method). The `context` parameter on the `get` function makes two objects available:

* `context.params`, which you only have access to if you create dynamic routes here, like we had for blog posts.
* `context.request` is an object with an `url` field: the URL the incoming request was sent to.

The response will always have a `body` field. Here, the response will be binary data (rather than text), so we include the optional `encoding` field. You can omit `encoding` if sending a JSON text response, for example.

## Astro blog RSS feed endpoint

RSS feeds are typically sent as plain text in XML format. We could manually construct a text string containing the XML content, then use that as the response body. However, the `@astrojs/rss` package makes things easier for us.

Run the command below to install the package:

```shell
pnpm add @astrojs/rss
```

Now we can add some source code for the XML RSS feed route. Create `src/pages/rss.xml.ts` with the following content:

```tsx
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const get: APIRoute = async function get({ site }) {
  const posts = await getCollection("blog");
  const items = [];

  return rss({
    title: "Novelty Cycles",
    description: "Novelty Cycles Blog Posts",
    site: site.toString(),
    customData: `<language>en</language>`,
    items
  });
}
```

The XML site map will include some site metadata, as well as the list of blog posts. For the moment, we just have an empty array for the posts. In the `get` function signature, we are destructuring `site` from `context`. `site` is a global setting within an Astro project; it is the final site’s URL. We can set the value in `astro.config.mjs`.

Update `astro.config.mjs` with a site field. Use `https://example.com` if you do not yet have a value for your own site:

```javascript
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://example.com",
  integrations: [react()],
});
```

Go to `http://localhost:3000/rss.xml` in your browser, and you should see something like this displayed. The content should match, though the styling might vary depending on which browser you are using:

![Astro blog post base RSS](https://cc-dam.imgix.net/astro-blog-post-rss-feed-base-rss.png "Astro blog post base RSS")

You can see the `astrojs/rss` package generated the response body for you, using the data you provided. In the snippet above, language is set to `en`. You can change this to match your site’s language. The XML format is exactly what RSS readers need. The content is designed for those readers, rather than for humans to read. That said, XML supports styling, and you can add a stylesheet.

Let’s add the missing `items` field. `@astrojs/rss` just expects an array of blog posts. Each item will need the following fields:

```plaintext
- title
- description
- link
- pubDate (as a Date object)
```

If you are already feeling confident with your Astro Content Collection skills, have a go at adding in the items array yourself, before reading on.

### Items array

Just like when we created the blog roll on the home page, we want the posts to be in reverse chronological order (newest first). We’ll use `Array.sort` once more:

```javascript
 const items = posts
    .sort((a, b) => Date.parse(b.data.date) - Date.parse(a.data.date));
```

That puts the posts in the right order, and to finish, we just have to map the fields output by `getCollection` to the ones we need for `items`. Here is the complete handler function:

```tsx
export const get: APIRoute = async function get({ site }) {
  const posts = await getCollection("blog");

  const items = posts
    .sort((a, b) => Date.parse(b.data.date) - Date.parse(a.data.date))
    .map(({ data: { date, title, description }, slug }) => ({
      title,
      description,
      link: `${site}${slug}`,
      pubDate: new Date(date),
    }));

  return rss({
    title: "Novelty Cycles",
    description: "Novelty Cycles Blog Posts",
    site: site.toString(),
    customData: "<language>en</language>",
    items,
  });
};
```

The final RSS feed (at `http://localhost:3000/rss.xml`) should look something like this:

![Astro blog post RSS feed](https://cc-dam.imgix.net/astro-blog-post-rss-feed.png "Astro blog post base RSS")

Once you have built the site using your Content Management System (CMS), you will be able to open up the feed in an RSS reader.

![Astro blog post RSS reader](https://cc-dam.imgix.net/astro-blog-post-rss-feed-rss-reader.png "Astro blog post base RSS")

## RSS link tag

Typically you will add an RSS feed link to site headers or footers. You can also add a meta tag to help RSS readers find the feed. It is fine to put this tag on every site page, using `src/layout/BaseLayout.astro`\:

```html
<html lang="en">
  <head>
    <!-- ...TRUNCATED -->
    <link
      rel="alternate"
      title="Novelty Cycles Blog Posts"
      href="/rss.xml"
      type="application/rss+xml"
    />
  </head>
  <!-- TRUNCATED... -->
```

## Congratulations!

Well done on making it to the end and completing the tutorial. Hopefully, it has provided enough to get you going on your next Astro project. I'm excited to hear what you will do with Astro. Visit the <a target="_blank" rel="noopener" href="https://docs.astro.build/en/getting-started/">Astro docs</a> to learn about more advanced Astro features.

![Astro CloudCannon CMS visual editor](https://cc-dam.imgix.net/astro-cloudcannon-visual.png "Astro CloudCannon CMS visual editor")

![Astro CloudCannon CMS content editor](https://cc-dam.imgix.net/astro-cloudcannon-content.png "Astro CloudCannon CMS content editor")

If you are building a content site,&nbsp;<a target="_blank" rel="noopener" href="https://cloudcannon.com/astro-cms/">give CloudCannon a try</a>. It’s a CMS that lets the entire team focus on what they do best. Developers build the site using their preferred code editor and commit source code to a Git repo, as usual. Content creators can choose between seeing their edits live, onscreen, with the visual editor, or alternatively, writing long-form WYSIWYG content in the content editor. When they save their work, CloudCannon syncs changes back to the Git repo and automatically rebuilds your site. The whole team uses the tools they are most comfortable with.

I wish you the best of luck on your Astro journey and trying out CloudCannon — the stars are the limit!
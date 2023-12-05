---
_schema: default
title: Visual Editing on Your Microblog with Bookshop and Eleventy
breadcrumb_title:
description:
draft: true
series:
image:
date:
hide_publish_date: false
author: a110034b-fb1b-44a0-bf3e-1b4aa5f4dfd8
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch your website today
  body_text: >-
    Give your content team full autonomy on your developer-approved tech stack
    with CloudCannon.
  button:
    content:
      link: https://app.cloudcannon.com/register?trial=cc_standard
      text: Get started free!
    styles:
      size:
      style: outline
      extra_classes:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---
Visual editing is table-stakes for a modern content management workflow and CloudCannon makes it straightforward to add visual editing to the same development workflow your development team already loves.

Visual editing empowers editors to feel confident when building content inside of the CMS and having that content look identical when it is pushed to production.

To get visual editing up and running with CloudCannon, we can use a plugin called Bookshop. CloudCannon provides a few&nbsp;[comprehensive guides](https://cloudcannon.com/documentation/guides/)&nbsp;to get Bookshop up and running, specifically for&nbsp;[Astro](https://cloudcannon.com/documentation/guides/bookshop-astro-guide/)&nbsp;and&nbsp;[Eleventy](https://cloudcannon.com/documentation/guides/bookshop-eleventy-guide/).

## Let’s make a Microblog

In this post we’re going to go through the minimum viable steps to add Bookshop Visual Editing to an Eleventy Microblog project (think something akin to Tumblr).

You can&nbsp;[head over to GitHub to read through the final source code](https://github.com/zachleat-cc/demo-cloudcannon-microblog)&nbsp;of the Micro-blog project. A&nbsp;[live demo](https://rare-pineapple.cloudvent.net/)&nbsp;of the final product is also available. You can add any arbitrary HTML content to the site. It has a primary post content stream, individual post pages, pages for each tag, and search (via&nbsp;[Pagefind](https://pagefind.app/)).

## Setup

### Bookshop Scaffolding

To scaffold your initial Bookshop files, you can run the following command which will populate a&nbsp;`_component-library`&nbsp;folder:

<code class="language-sh">npx @bookshop/init --new _component-library --framework eleventy </code>

### Bookshop Installation

You can install everything you need for Bookshop with this one command:

<code class="language-sh">npm install --save-dev --save-exact @bookshop/eleventy-bookshop @bookshop/sass @bookshop/generate @bookshop/browser @bookshop/eleventy-engine npm-run-all </code>

* `@bookshop/eleventy-bookshop`: the Eleventy plugin for Bookshop
* `@bookshop/sass`: compiles our Sass stylesheets.
* `@bookshop/generate @bookshop/browser @bookshop/eleventy-engine`: used exclusively for Live Editing features on CloudCannon (and not necessary for local development)
* `npm-run-all`: (not Bookshop-specific) used during local development to run Eleventy and our Sass compiler side-by-side

### Eleventy Configuration

Next we’ll want to add Bookshop’s Eleventy plugin to our Eleventy configuration file (likely&nbsp;`.eleventy.js`&nbsp;or&nbsp;`eleventy.config.js`) just the same as you would any other Eleventy plugin.

```
const pluginBookshop = require("@bookshop/eleventy-bookshop");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginBookshop({
    bookshopLocations: ["_component-library"]
  }));

  // Rebuild Eleventy when you make Bookshop changes
  eleventyConfig.addWatchTarget("./_component-library/**/*");
};
```

The&nbsp;`bookshopLocations`&nbsp;configuration property must match the folder name specified in our scaffolding command (`npx @bookshop/init …`) above.

### Build Commands

We’ll also need to configure Sass to compile our Bookshop components, which you can do with these handy npm script additions to your&nbsp;`package.json`:

<code class="language-json">{ "scripts": { "build:style": "bookshop-sass --bookshop _component-library --output _site/public/bookshop.css", "dev:style": "npm run build:style -- --watch", "dev:content": "npx @11ty/eleventy --serve --quiet", "start": "run-p dev:*" } } </code>

Now we can run&nbsp;`npm start`&nbsp;to start Eleventy’s local development server and we’re off to the races.

### CloudCannon Build Hooks

Finally, we’ll add two CloudCannon build hooks to run our Bookshop integrations on the CloudCannon servers:

`.cloudcannon/prebuild`:

```
#!/usr/bin/env bash

npm install
npm run build:style
```

`.cloudcannon/postbuild`:

```
#!/usr/bin/env bash

npx @bookshop/generate
```

## Using Bookshop

Now that our setup is complete we can move on to the fun part: creating Bookshop components.

Our Microblog project has three separate content types, each represented as a Bookshop component:

* `text`
* `code`
* `link`

> *You can view the source code for our finished&nbsp;[Microblog components for&nbsp;`code`,&nbsp;`link`, and&nbsp;`text`](https://github.com/zachleat-cc/demo-cloudcannon-microblog/tree/main/_component-library/components).*

The simplest of these is the&nbsp;[text component](https://github.com/zachleat-cc/demo-cloudcannon-microblog/tree/main/_component-library/components/text), which is just plain HTML content. The source folder contains three files:

* `text.bookshop.yml`&nbsp;for CloudCannon specific configuration (including input types).
* `text.eleventy.liquid`&nbsp;for the Liquid syntax for the component.
* `text.scss`&nbsp;for component styles.

When we make edits in the CloudCannon interface, the content will be updated in real time in the CloudCannon visual editor.

If you’d like to see how the visual editing experience looks and behaves,&nbsp;[skip to&nbsp;`0:46`&nbsp;in this video on YouTube](https://youtu.be/AsWt6BTjzyk?feature=shared&amp;t=46)&nbsp;(or watch below).

{% bookshop 'markdown/youtube' title: " Live Editing an Eleventy Project in CloudCannon with Bookshop " id: "AsWt6BTjzyk" extend: false border: false %}

You can put any combination of Bookshop components into a post on our Microblog and the values for each of the component instances are serialized as&nbsp;`content_blocks`&nbsp;in the template’s front matter (view&nbsp;[a sample post for an example](https://github.com/zachleat-cc/demo-cloudcannon-microblog/blob/main/src/posts/2023-11-20.md?plain=1)).

### Works as-is with Web Components

More interestingly, the&nbsp;[`link`&nbsp;Bookshop component](https://github.com/zachleat-cc/demo-cloudcannon-microblog/tree/main/_component-library/components/link)&nbsp;uses the&nbsp;[`<browser-window>`&nbsp;web component](https://www.zachleat.com/web/browser-window/)&nbsp;and is visually editable too!

Any changes to the&nbsp;`link`&nbsp;URL are automatically reflected in the web component and the screenshot and favicon are updated accordingly.

## Investigate Further

There is a lot more to Bookshop. You can learn about data binding, live editing fallbacks, custom plugins, preview thumbnails and the component playground on&nbsp;[the full Bookshop guide](https://cloudcannon.com/documentation/guides/bookshop-eleventy-guide/).
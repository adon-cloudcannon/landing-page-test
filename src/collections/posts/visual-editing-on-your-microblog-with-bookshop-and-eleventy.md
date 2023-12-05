---
_schema: default
title: Let’s Create a Microblog with Visual Editing using Bookshop and Eleventy
breadcrumb_title: Let’s Create a Microblog with Visual Editing
description: >-
  Visual editing is table-stakes for a modern content management workflow and
  CloudCannon makes it straightforward to add visual editing to the same
  development workflow your development team already loves.
draft: true
series:
image: https://cc-dam.imgix.net/bookshop.png
date:
hide_publish_date: false
tags:
  - Eleventy
  - Tutorials
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

To get visual editing up and running with CloudCannon, we’ll use a plugin called Bookshop. In the [guides section of the CloudCannon documentation](https://cloudcannon.com/documentation/guides/) you can find a section dedicated to Bookshop, with guides specifically for&nbsp;[Astro](https://cloudcannon.com/documentation/guides/bookshop-astro-guide/)&nbsp;and&nbsp;[Eleventy](https://cloudcannon.com/documentation/guides/bookshop-eleventy-guide/).

## Let’s make a Microblog

In this post we’re going to go through the minimum viable steps to add Bookshop Visual Editing to an Eleventy Microblog (think something akin to Tumblr).

You can&nbsp;[head over to GitHub to read through the final source code](https://github.com/zachleat-cc/demo-cloudcannon-microblog)&nbsp;of the Microblog project. Feel free to fork the repository and deploy your own version to CloudCannon to try this out for yourself!

A&nbsp;[live demo](https://rare-pineapple.cloudvent.net/)&nbsp;of the final product is also available (with a few sample posts). Editors can add any arbitrary HTML content to the blog and the project includes pages for the content stream, individual posts, tags, and also on-page search (via&nbsp;[Pagefind](https://pagefind.app/)).

## Set up Bookshop

### Scaffolding

To create the initial Bookshop component files and folder structure, you can run the following command to populate the `_component-library`&nbsp;folder:

```shell
npx @bookshop/init --new _component-library --framework eleventy
```

### Installation

Next, let’s install our Bookshop dependencies. You can install everything you need for Bookshop with this command:

```shell
npm install --save-dev --save-exact @bookshop/eleventy-bookshop @bookshop/sass @bookshop/generate @bookshop/eleventy-engine npm-run-all
```

* `@bookshop/eleventy-bookshop` to add Bookshop shortcodes to Eleventy.
* `@bookshop/sass` to compile our Sass stylesheets.
* `@bookshop/generate @bookshop/eleventy-engine` to enable Live Editing features on CloudCannon (these are not necessary for local development)
* `npm-run-all`: (not Bookshop-specific) used during local development to run Eleventy and our Sass compiler side-by-side

### Eleventy Configuration

Next we’ll want to add Bookshop’s Eleventy plugin to our Eleventy configuration file (likely&nbsp;`.eleventy.js`&nbsp;or&nbsp;`eleventy.config.js`) the [same as you would any other Eleventy plugin](https://www.11ty.dev/docs/plugins/#adding-a-plugin).

```javascript
const pluginBookshop = require("@bookshop/eleventy-bookshop");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginBookshop({
    bookshopLocations: ["_component-library"]
  }));
};
```

The&nbsp;`bookshopLocations`&nbsp;configuration property must match the folder name specified in our scaffolding command (`npx @bookshop/init …`) above.

### Compiling Sass

We’ll also need to compile our Bookshop component styles, which you can do with the `bookshop-sass` command in these handy npm script additions to your&nbsp;`package.json`:

```json
{
  "scripts": {
    "build:style": "bookshop-sass --bookshop _component-library --output _site/public/bookshop.css",
    "dev:style": "npm run build:style -- --watch",
    "dev:content": "npx @11ty/eleventy --serve --quiet",
    "start": "run-p dev:*"
  }
}
```

Now we simply run&nbsp;`npm start`&nbsp;to start Eleventy’s local development server and Bookshop is running locally!

### CloudCannon Build Hooks

Finally, we’ll add two CloudCannon build hooks to run our Bookshop integrations on the CloudCannon servers. We will create two files: `.cloudcannon/prebuild` and `.cloudcannon/postbuild`.

`.cloudcannon/prebuild`:

```shell
#!/usr/bin/env bash

npm install
npm run build:style
```

`.cloudcannon/postbuild`:

```shell
#!/usr/bin/env bash

npx @bookshop/generate
```

## Using Bookshop

Now that our setup is complete we can move on to the fun part: creating Bookshop components. At time of writing, our Microblog project has three Bookshop components: `text`, `code`, and `link`.

*You can view the source code for our finished&nbsp;[Microblog components for&nbsp;`code`,&nbsp;`link`, and&nbsp;`text`](https://github.com/zachleat-cc/demo-cloudcannon-microblog/tree/main/_component-library/components).*

The simplest of these is the&nbsp;[text component](https://github.com/zachleat-cc/demo-cloudcannon-microblog/tree/main/_component-library/components/text) which holds on to no more than plain ol’ HTML content. Each Bookshop component can be represented in three files and `text` is no exception:

* `text.bookshop.yml`&nbsp;for CloudCannon specific configuration (including input types).
* `text.eleventy.liquid`&nbsp;for Liquid templating syntax for the component.
* `text.scss`&nbsp;for component styles.

When we make changes to the HTML content in a `text` component in the CloudCannon interface, the visual rendering of the component will be updated in real time in the visual editor.

If you’d like to see a preview of how the visual editing experience looks and behaves,&nbsp;[skip to&nbsp;`0:46`&nbsp;in this video on YouTube](https://youtu.be/AsWt6BTjzyk?feature=shared&amp;t=46)&nbsp;(or watch below).

{% bookshop 'markdown/youtube' title: " Live Editing an Eleventy Project in CloudCannon with Bookshop " id: "AsWt6BTjzyk" extend: false border: false %}

You can mix and combine these Bookshop components together to create a post on the blog and the values for each of the component instances are serialized as&nbsp;`content_blocks`&nbsp;in the template’s front matter (view&nbsp;[a sample post](https://github.com/zachleat-cc/demo-cloudcannon-microblog/blob/main/src/posts/2023-11-20.md?plain=1)).

### Works With Web Components

Perhaps more interestingly, the&nbsp;[`link`&nbsp;Bookshop component](https://github.com/zachleat-cc/demo-cloudcannon-microblog/tree/main/_component-library/components/link)&nbsp;uses the&nbsp;[`<browser-window>`&nbsp;web component](https://www.zachleat.com/web/browser-window/)&nbsp;and is editable without any configuration or introspection into the web component’s code — and this example demonstrates re-rendering compatibility with <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM">Shadow DOM</a> web components too.

Any changes to the&nbsp;`link`&nbsp;URL are automatically reflected in the web component and the screenshot with favicon are updated accordingly.

### Current Limitations

Shortcodes are not supported in Bookshop components. Guarding the [shortcode with `env_bookshop_live`](https://cloudcannon.com/documentation/guides/bookshop-eleventy-guide/live-fallbacks/) is not yet a viable workaround. This is a [Liquid limitation](https://liquidjs.com/tutorials/options.html#Strict) with parsing unknown shortcode names that we hope to fix soon. Try to switch your shortcode to use a filter instead and it will work fine.

## That’s it!

We now have a visual editing interface for our Microblog. Editors can now add or edit entries easily and predictably — but there is more! On [the full Bookshop guide](https://cloudcannon.com/documentation/guides/bookshop-eleventy-guide/) you can learn more about data binding, live editing fallbacks, custom plugins, preview thumbnails, and the component playground (everybody loves a style guide!).

*Poster image photo by <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/photos/brown-concrete-library-interior-0rzUepBXHN0">Ivo Rainha</a>.*
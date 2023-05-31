---
_schema: default
title: How CloudCannon’s live editing works with Astro and Bookshop
breadcrumb_title:
description: >-
  How CloudCannon's Bookshop — a component development workflow for static
  websites — enables live visual editing and page-building with Astro.
draft: true
series:
image: https://cc-dam.imgix.net/Astro and Bookshop.png
date: 2023-06-06T05:02:00+12:00
hide_publish_date: false
tags:
  - Astro
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch your Astro website today
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
CloudCannon’s Git-based CMS supports live visual editing on a wide range of static site generators, bringing intuitive composition, editing, and publishing workflows to all site users, regardless of their technical knowledge. But how do we do it? The short answer? <a target="_blank" rel="noopener" href="https://github.com/CloudCannon/bookshop">Bookshop</a>, our component development workflow for static websites, which we’ve just expanded to support live visual editing and page-building with <a target="_blank" rel="noopener" href="https://cloudcannon.com/astro-cms/">Astro</a>.

To help you integrate your existing Astro sites with Bookshop, we’ve created a new <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/guides/bookshop-astro-guide/">Bookshop Astro Guide</a> as part of our documentation. Our <a target="_blank" rel="noopener" href="https://cloudcannon.com/templates/sendit/">Astro Sendit template</a> is also a very helpful reference, as it contains an example site that’s fully integrated with Bookshop’s live visual editing.

While many Astro developers will be accustomed to creating, updating, and removing pages, components, and posts in their IDE, you (and other site users) can also complete all of these tasks within the CMS’s intuitive interface, as pictured above. With the Sendit template, we’ve also allowed users to easily edit our data files with CloudCannon’s Data Editor — meaning information like company details, navigation, footers, and theme colours, stored in .json files in `data/`, can be accessible and editable for all site users.

## Getting started with Astro and CloudCannon

Let’s first spin up a new Sendit site on CloudCannon, explore its features, and then poke around the files together. (If you’d rather, you can do this directly [via GitHub](https://github.com/CloudCannon/sendit-astro-template).)

If you don’t already have a CloudCannon account, take a moment to [create one](https://app.cloudcannon.com/register?trial=cc_standard), link your GitHub, GitLab, or Bitbucket account, and create a new Astro Sendit site from a template. Your site files will stay in your Git repo, and upon triggering any save in CloudCannon, your site will build.

Looking at our `astro.config.mjs` file, there’s not much to it, as you’ll see:

```javascript
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import bookshop from '@bookshop/astro-bookshop';

// https://astro.build/config
export default defineConfig({
  site: "https://top-quail.cloudvent.net/",
  integrations: [bookshop(), react()]
});
```

We’re importing our configuration, as well as Bookshop and React, and declaring our site’s domain. This `site:` field is temporarily set for you, as above, but you can change this URL to the final, deployed URL of your site.

(Note that all sites built on CloudCannon receive a free preview domain with the format `adjective-noun.cloudvent.net` — if you don’t already have a final URL for your new Astro site you can set this to your free cloudvent.net domain.)

## Separating content and layout

The next thing you might notice about the files in this site is that we’ve separated our page and post content from the layout and routing information — our files in `src/content/pages` and `src/content/blog` are in Markdown format, and we’re using `[…slug].astro` files in `src/pages` for routing. We also use .astro files like `Layout.astro`, `PageLayout.astro`, and `PostLayout.astro` in `src/layouts` for our layout information and SEO props, but having our content in .md files means CloudCannon can access it in our Content Editor (for WYSIWYG editing) and Visual Editor (for page building and live visual editing).

This way we can get the best of both worlds — Astro’s speed and flexibility for developers, and CloudCannon’s intuitive editing for writers, marketers, and content teams. Building our Astro site is one thing. Astro’s got that under control! But a good site — even one that builds *astronomically* quickly, with *stellar* opportunity for future additions — is only as strong as its ease of editing. Editing the pages and posts on our site — and allowing non-technical content writers and marketing teams to do so, as well as to create new content — is something else entirely.

And that’s where CloudCannon’s visual editing comes in.

## How Visual Editing works on CloudCannon

As I mentioned above, Sendit is preconfigured for live visual editing on all of its pages, so let’s dig into the feature and see how we’ve set it up for Sendit. In the above video, we saw visual editing in the Sendit homepage’s hero component. The component’s information is stored in two places. Its layout and styling is stored in `/src/components/home/hero/hero.jsx`\:

```jsx
import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function HomeHero(block) {
  return (
    <section className="hero-two">
      <div className="hero-two-shape"></div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-two-content">
              <h1 className="mb-4">{block.title}</h1>
              <div
                className="mb-7 w-xxl-80"
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
              <div className="">
                {block.button && (
                  <a
                    href={block.button.link}
                    className="btn btn-primary btn-lg"
                  >
                    {" "}
                    {block.button.text}{" "}
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-two-banner">
              <img src={block.image} alt={block.image_alt} />
              <div className="hero-two-banner-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

During the build process (specifically, in our [postbuild](https://cloudcannon.com/documentation/articles/extending-your-build-process-with-hooks/) file), we use our open-source component development tool [Bookshop](https://github.com/CloudCannon/bookshop) to read the data and default values of our components from .yml files and turn them into inputs config for the editor. For example, here’s `src/components/home/hero/hero.bookshop.yml`, showing the data and default values (pre-filled text) for this hero component:

You’ll see that each component has a defined blueprint, label, icon, and tags, and can include default values. The last few lines of this file add extra definitions to CloudCannon’s inputs configuration; in this case we’re setting our description block as a Markdown text area, unlike title or image\_alt, which are plain single-line text inputs by default.

## Connecting the dots

Looking at `src/layouts/PageLayout.astro` below, we can see a component using the `bookshop:live` directive with props sourced from a `frontmatter` variable:

And in the front matter of on our homepage, we can see that `content_blocks` contains the Bookshop component `home/hero`.

When we view that page in CloudCannon’s Visual Editor, we’ll be able to interact with the component directly on the page. Clicking on the component will open up an editing panel, and our changes will render live on screen.

## Global configuration with CloudCannon and Astro

Bringing it all together, is CloudCannon’s global configuration file, `/cloudcannon.config.cjs`. Under `collections_config` at line 7 you’ll see that we can define (or change) a lot of information about our data, posts, and pages, including where content is stored, which schemas are used for posts and pages, and which editor should be enabled to edit them.

You’ll also see that we’ve enabled the Visual Editor for pages on Sendit, but for posts we also give editors the option to use the Content Editor, which is a configurable WYSIWYG Markdown editor for distraction-free writing. (Users with higher-permission roles such as Developers and Site Owners will also be able to view files in the Source Editor.)

(If your interest is piqued by `_inputs`, we go into a lot more information about the `_inputs` <a target="_blank" href="https://cloudcannon.com/documentation/articles/how-to-choose-what-input-is-used-in-the-data-editor/">configuration in our documentation</a>, which includes a list of all available input types. We also go deep on `_editables`, which allow you to [choose which toolbar controls are available to users in the Content Editor](https://cloudcannon.com/documentation/articles/defining-editable-regions-in-your-html/#options).)

When you’re setting up your own Astro sites on CloudCannon, you can choose which editing (and publishing) features would work best for your site users. With visual editing, branching for staging and production workflows, and top-tier support, CloudCannon’s got you covered.

## Where to now?

That brings us to the end of this short and sweet post — we’ve demystified some of the configuration behind our new Astro template within CloudCannon, and we’ve started to define just how CloudCannon lets you and your users interact with your site and its pages. There’s a tremendous amount of power, potential, and flexibility in Bookshop and that&nbsp;`cloudcannon.config.cjs`&nbsp;file, and we’ve barely scratched the surface.

If you'd like to dig into more of the deep configuration options in CloudCannon, check out our documentation on&nbsp;[using the configuration cascade](https://cloudcannon.com/documentation/articles/using-the-configuration-cascade/), which is a set of sources containing customizable options for the editor, each with a different scope and priority. This allows you to set global defaults and where necessary, override those for specific collections or files.

If you come across any issues while you're dialling in your configuration for Astro, please reach out to us via our support team — we're here to help.
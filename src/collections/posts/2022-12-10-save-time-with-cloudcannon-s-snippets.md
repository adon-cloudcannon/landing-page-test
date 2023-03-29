---
draft: false
title: Save time with CloudCannon's Snippets
description: "With CloudCannon Snippets, content editors using a supported static site generators can use a simple interface to easily insert includes, shortcodes and Markdown extensions into their content —\_all without touching the underlying code."
series:
permalink: /blog/save-time-with-cloudcannon-snippets/
image: https://cc-dam.imgix.net/blog/blog-snippets-overview.jpg
date: 2022-12-10T05:00:00+1300
hide_publish_date: false
tags:
  - Features
  - Resources
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
---
It’s only been a few weeks since we first introduced Snippets on CloudCannon, and they’re already saving time for CloudCannon developers, as well as for content teams collaborating on static sites. Today we’ll go through exactly what a Snippet is and how it can save you time on your next web project.

## What’s a Snippet?

A Snippet is CloudCannon's method of configuring and then editing content with a wide range of structured components across different static site generators. With Snippets, content editors can use a simple interface to easily insert includes, shortcodes and Markdown extensions into their content — all without touching the underlying code.

## What’s the difference between a Snippet, a shortcode and an include?

You’ll see these terms used differently in different places around the web. Typically a static site generator will use the term ‘shortcode’ —&nbsp;[Hugo](https://gohugo.io/content-management/shortcodes/) and [Eleventy](https://www.11ty.dev/docs/shortcodes/) both do this — to mean a relatively simple way to insert reusable content into an existing template. Some shortcodes are paired, meaning they require a closing tag, and can nest other template content inside them.

Includes, by contrast, allows you to ‘include’ or insert content onto your page from another file in your site structure. For instance, your site’s navigation, section titles and footer are best served from a single source of truth, so using includes is the most efficient and error-proof way to do so.

CloudCannon’s term **Snippets** is a superset, an umbrella term that covers a range of ways that static site generators use structured components. This encompasses includes in Eleventy, shortcodes in Hugo and Eleventy, and — coming soon — Markdown extensions in MkDocs and includes in Jekyll, among others. We support a wide range of SSGs, each with unique configuration requirements, but with Snippets we can support a range of different shortcodes, extensions, and includes across different SSGs, all configured in our [global configuration file](https://cloudcannon.com/documentation/articles/setting-global-configuration/?ssg=Eleventy) — allowing CloudCannon users to edit and develop more efficiently.

## Why use Snippets?

With Snippets, content writers can make use of reusable components within the Content or Visual Editors without having to switch over to raw HTML or Markdown — whether their task is embedding a correctly styled social media post into a page, adding navigation links between documentation pages, or any other specific repeatable content they need to do their jobs.

One of the main reasons that developers on CloudCannon use Snippets — and, let’s be honest, one of the main reasons developers use *any* tool — is to save time. By configuring and using Snippets, developers can avoid having to write out entire blocks of code from scratch, which can be time-consuming and error-prone, particularly when a built site is handed over to a content team for ongoing content loading.

As always, we focus on giving everyone the tools they need to work without getting in their way. Hence the simple Snippets button you’ll see in your Markdown editing menu:

![](https://cc-dam.imgix.net/blog/snippet-toolbar.webp)

After choosing which Snippet to add, all you’ll need to do is fill in the relevant fields, and your new content block is inserted directly into your Markdown. Here’s the process of adding a Snippet that uses one of Hugo’s built-in shortcodes:


{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/766299367" autoplay:true extend:true border:true %}

Speaking as a writer and content editor, a GUI like this means I can spend more time actually seeing and thinking about the content I’m working on. (And the sooner I can see my content in its final context, the sooner I can make it better — which is why CloudCannon’s Visual Editor and Content Editor are my two most frequently used views.) Snippets are another part of the solution, and added to Bookshop components, there’s a really clear path to creating new pages (and entirely new sites) in a fraction of the time it would otherwise have taken.

Of course, having a GUI means configuring your Snippets ahead of time. Luckily, when it comes to configuring which Snippets are available for content teams to use, CloudCannon has you covered.

## How to configure a new Snippet

We go into *a lot* more detail on [configuring Snippets for Hugo shortcodes](https://cloudcannon.com/documentation/articles/editing-with-hugo-shortcodes/?ssg=Hugo) and [for Eleventy shortcodes](https://cloudcannon.com/documentation/articles/editing-with-eleventy-shortcodes/?ssg=Eleventy) in our documentation, but here’s a quick checklist of the minimum steps needed.

**For Eleventy sites**, in the global configuration file `cloudcannon.config.yml`, you’ll need to:

* Import the built-in shortcodes or includes you want from Eleventy, using the `_snippets_imports` key. (This step is not required for built-in Hugo shortcodes, which are already imported.)

**For both Hugo and Eleventy sites,** In the global configuration file `cloudcannon.config.yml` you’ll need to:

* Define any custom shortcodes you want from your chosen SSG, using the `_snippets` object

For example, setting up a custom Snippet for Hugo would look like this:

```yaml
_snippets:
  hugo_tint:
    template: hugo_paired_shortcode_positional_args
    inline: true
    preview:
      text: Tint
    definitions:
      shortcode_name: tint
      content_key: inner_text
      positional_args:
        - editor_key: tint_color
          type: string
    _inputs:
      tint_color:
        type: color
      inner_text:
        comment: This text will be tinted
```

By default, when Snippets are available for either Hugo or Eleventy sites, CloudCannon will automatically add the Snippets button to your editing toolbar. (If you’ve already set custom editing options in your global configuration via the `_editables` object, then you’ll need to include `snippets: true` as well.)

Looking through our Snippets documentation, you’ll find a full list of all supported options to configure your custom shortcodes as a CloudCannon Snippet. If you have components that don’t fit our existing Snippet configuration, let us know\! We’re still building out the Snippets feature, and while we have pretty clear plans, our development process is guided by user requests.

---

*We’re also happy to help you configure your Snippets — just reach out to us in support and we’ll get back to you as soon as we can.*

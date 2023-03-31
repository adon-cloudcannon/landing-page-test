---
_schema: default
title: Looking for a Forestry alternative?
description: >-
  Have you been looking for an alternative to Forestry for your Jekyll, Hugo,
  and Eleventy static sites? With CloudCannon's Git-based CMS, your search is at
  an end.
draft: true
series:
image: https://cc-dam.imgix.net/blog/forestry-alternative-2.png
date: 2021-09-13T17:00:00Z
hide_publish_date: false
tags:
  - Resources
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
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
***We've recently released a helpful migration tool! Once you've connected your existing Forestry site repository to CloudCannon, we'll automatically generate a CloudCannon config file from your Forestry settings.***

---

##

## Your CMS for Jekyll, Hugo, and Eleventy

Forestry announced in April 2021 that they'd be sunsetting their CMS in favour of TinaCMS and Tina Cloud, which is currently limited to React-based sites. If you've been looking for an alternative to Forestry for your Jekyll, Hugo, and Eleventy static sites, CloudCannon is here to help. (We also have a [full migration guide](/blog/forestry-to-cloudcannon-the-full-migration-guide/), if you're ready to make the move.)

So how does CloudCannon compare?

### Visual editing

CMSs exist to help editing teams manage a website's contents. The simpler the editing experience, the more your editing team will be empowered to make updates without the help of a developer. CloudCannon puts the editor's experience first and foremost, with a fully-featured visual editor that developers can configure for optimal editing.

With CloudCannon, content writers can write and update content directly on the website — what could be more intuitive than that?

![](https://cc-dam.imgix.net/documentation/images/getting-started/Editable-regions.gif)

### Component page building

Markdown is fantastic, but it's too restrictive for complex marketing content, especially when content editors prefer a visual approach. That's where using components — which can be pieced together to build a page — are a great idea. On CloudCannon, components are called [array structures](https://cloudcannon.com/documentation/edit/editing/configuration/#array-structures). You start by defining a label and the data fields in your component, and you're free to use the [full range of field types](https://cloudcannon.com/documentation/edit/interfaces/inputs/#inputs) available on CloudCannon; you can even nest array structures! Once configured, editors can use these components to piece together content on a page.

![](https://cc-dam.imgix.net/blog/page-building.gif)

### Git-based

CloudCannon is a Git-based CMS. All changes in your repository automatically sync to CloudCannon, and all changes editors make will commit back to the repository. We're working towards providing editors access to the full power of Git; currently editors can create a branch or copy of a site to make large-scale changes that can be merged in through a branch merge or pull request at a later date.

![](https://cc-dam.imgix.net/blog/git-sync-save.png)

### Hosting included

All sites on CloudCannon have access to reliable, high-performance hosting through our partner CloudFlare. Configure your custom domain and host your production site directly on CloudCannon, or use our hosting just for your staging environment and host production on your own hosting provider — the choice is yours.

## What's on the roadmap?

We believe simple, elegant, and performant SSGs such as Jekyll, Hugo, and Eleventy are the best way to build most marketing and brand websites. We're constantly refining our support for these SSGs and iterating on the editing and publishing experience.

### More intuitive visual editing

Visual editing is at the core of CloudCannon. We're working on making more functionality available in the visual editor to provide an even more intuitive editing experience. Our ultimate goal is twofold: first, to give the developer the complete flexibility to model content however they'd like — using front matter, collections, markdown, or HTML. For non-technical editors, our aim is to abstract how a site's content is stored and managed, allowing them to create and maintain complex content structures in a SSG *without* needing to know everything about how it all works.

### Managing components

Later this month we'll be announcing a new open-source framework for managing HTML components. (Think [Storybook](https://github.com/storybookjs/storybook), but made especially for HTML-based SSGs.) This new framework will have a tight integration into CloudCannon, giving developers a clear structure for creating components, and giving editors the ability to add, rearrange and update components with a live preview. Stay tuned for more details.

### Git for all

The final piece of the puzzle is Git workflows. Git has changed how web developers collaborate on content. We want to bring the power and flexibility of these workflows to content editors, and we're well on the way there. Our plan is to see just how far we can push this without content editors needing to know anything about Git.

## How do I get started?

You can start transferring your sites in a few minutes:

1. [Create an account and sign up for a 14-day trial](https://app.cloudcannon.com/register?trial=cc_standard)
2. Create a site
3. Connect your Git repository to your site — we support GitHub, Bitbucket and GitLab.
4. Configure your [build options](https://cloudcannon.com/documentation/build/setup/configuration/#configuration).

That's it! CloudCannon will automatically build your site every time your repository changes.

CloudCannon provides a basic level of editing by default. To configure more intuitive editing for your content editors you can look at the following configurable options:

* [Editable regions](https://cloudcannon.com/documentation/edit/editing/html/#editable-regions) — Add inline editing to HTML content.
* [Editor links](https://cloudcannon.com/documentation/edit/editing/html/#editable-regions) — Add buttons and links to the visual editing interface to link to data in the front matter, collections or data files.
* [Inputs](https://cloudcannon.com/documentation/edit/interfaces/inputs/#inputs) — Configure the editing interface for different content types.
* [Array structures](https://cloudcannon.com/documentation/edit/editing/configuration/#array-structures) — Create your own components, which editors can use to build their own pages.

## Haere mai! Welcome!

We'd love to hear from you! If you're interested in trying out CloudCannon, [reach out and say hello](https://cloudcannon.com/contact/)! We're here to help and we're always ready to listen.

##
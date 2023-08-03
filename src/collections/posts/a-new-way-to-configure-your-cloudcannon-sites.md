---
_schema: default
title: A new way to configure your CloudCannon sites
breadcrumb_title:
description: "We’ve just released a new way to create and edit your CloudCannon configuration files within CloudCannon itself\_—\_enabling all users to clearly see what’s possible in our very detailed global configuration options. "
draft: true
series:
image: https://cc-dam.imgix.net/config-gui-hero-image.png
date:
hide_publish_date: false
tags:
  - Features
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
We’ve just released a new way to create and edit your CloudCannon configuration files within CloudCannon itself — enabling all users to clearly see what’s possible in our *very detailed* global configuration options.

Developers on CloudCannon can now view and edit their config files in the Data Editor, which allows them to see their configuration at a glance — as well as to learn more about the options that are available to them.

Here’s our Engineering Lead, Ross Phillips, on what the new configuration view brings to CloudCannon users:

## How to configure the ideal editing experience for your static site

If you’re new to CloudCannon, when you create a new site or import an existing SSG repository you’ll be prompted to generate a new CloudCannon configuration file — either completely fresh or from any existing build settings in your repo.

Note that while some automatic generation is possible — identifying collections in SSGs like Eleventy, Jekyll, or Hugo, for example — the generated config file should be treated as a starting point to build upon. (CloudCannon’s strength is in its flexibility, after all, and we don’t want to make decisions about your data for you.)

Once your site has built, — or if you’re a current CloudCannon user with an existing site, navigate to **Site Settings &gt; Editing** to see your new configuration view and explore your options. You can also browse to your site’s config file, then open it in the Data Editor view.

## Think globally (and work locally)

If you prefer to work locally, you can still edit your CloudCannon config file in your favorite IDE. Thanks to CloudCannon’s two-way Git syncing, you can edit locally while you refer to the new configuration view, which comes complete with descriptions of each field, expected input type, and association documentation links.

Simply push your changes to see them live on CloudCannon.

## Who is the new config interface for?

In creating the new visual configuration interface, we responded to requests from a wide range of new and experienced users across different static site generators, as well as from interviews with our agency [Partners](https://cloudcannon.com/partner-program/).

In short, the new interface is for everyone — we’ve created it to help all CloudCannon users. New users will benefit from the helpful links to our documentation, as well as the scoped options within each config field. Existing CloudCannon users will find logical connections between the grouped options, and may discover new ways to create ideal editing environments for their content teams. We’re also hoping that our power users, who create and configure multiple sites daily, will find their workflows greatly assisted by the new interface.

## Did you know…<br>​​​​​

### … you can set site-wide editing interfaces, and override them within specific collections as needed?

{% bookshop 'markdown/image' src: "https://cc-dam.imgix.net/global-editing-interfaces-config-gui.png" alt: "Config interface showing Inputs" extend: false border: false %}

Under **Global editing interfaces** you can set which of the Visual, Content, and Data Editors are enabled, and in which order. You can also customize the appearance and behaviour of your **Inputs** in data editing interfaces, including adding Instance Values, as well as Labels or Comments to assist your content team.

Because some elements of CloudCannon’s config operate as a cascade, you can always override these global settings with more specific settings for defined groups of files (collections).<br>

### … you can sort your collections based on custom keys in their front matter?<br>

{% bookshop 'markdown/image' src: "https://cc-dam.imgix.net/config-gui-sort-final.png" alt: "Config interface in CloudCannon" extend: false border: false %}

We’re all about flexibility for site users — and the way developers present and sort site files can make a huge difference to how quickly a content team works. Maybe you’d like to sort the way your blog posts appear within the CMS: ordered by author name, descending? Or organize your pages by lead score? It’s up to you — define your default sorting and add customized **Sort** **Options** under **Collection Display**.<br>

### … you can add Editables to create much richer input options for the Content Editor

{% bookshop 'markdown/image' src: "https://cc-dam.imgix.net/config-gui-editables.png" alt: "Editable options in CloudCannon config interface" extend: false border: false %}

Most writers will have a personally preferred set of rich text editing controls, or will need specific options enabled. Under **Global editing interfaces &gt; Editables** you can set **text** editables for richer text editing; **content / block** editables for managing blocks of text; and **image** editables for orientation, image size, mime type, and paths.<br>

### … you can choose your preferred syntax highlighting in the Source Editor?

{% bookshop 'markdown/image' src: "https://cc-dam.imgix.net/source-editor-config-gui.png" alt: "Source Editor configuration interface" extend: false border: false %}

By default your Source Editor will display code with **monokai** highlighting, but there are 38 different color schemes to choose from — see **Global site configuration &gt; Source Editor** for more!

---

*Build a new static site on CloudCannon, or open one of your existing sites, and try browsing through your configuration file. We’d love to know what you think!*
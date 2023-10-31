---
_schema: default
title: Adding a responsive HTML table to your static site
breadcrumb_title:
description: >-
  Add a responsive HTML table with the new web component <table-saw>, which
  detects your viewport and renders the table accordingly.
draft: true
series:
image: https://cc-dam.imgix.net/responsive-tables-CC.png
date: 2023-11-02T05:00:00+13:00
hide_publish_date: false
tags:
  - Eleventy
  - Features
  - Resources
author: a110034b-fb1b-44a0-bf3e-1b4aa5f4dfd8
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch your Eleventy website today
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
When you're adding a large table to your website, a common problem that you'll see is content either getting clipped or overflowing horizontally. It can happen when you have a small viewport of that table and the table attempts to render on that small view.

We have a nice, easy solution for this — a new web component called `<table-saw>`, which detects your viewport and renders the table accordingly. The full repo is available at <a target="_blank" rel="noopener" href="https://github.com/zachleat/table-saw/">https://github.com/zachleat/table-saw/</a>; you can also check out a container query example of this on <a target="_blank" rel="noopener" href="https://zachleat.github.io/table-saw/demo.html">https://zachleat.github.io/table-saw/demo.html</a>

As you’ll see in the demo, if we resize this container, it will re-render the table in a two column layout, repeating the table headers and pairing them up with every single cell in the body of the table.

This is an open-source web component — try it out and use it on your own projects!

We’ve already deployed it live to the CloudCannon website. Depending on your viewport size, you’ll see either the original tables rendering or a two-column layout; we’ve set a specific breakpoint for that swap.

{% bookshop 'markdown/youtube' title: "" id: "tKrJTc2DgbY" extend: false border: false %}

Within the CloudCannon CMS, any content author can easily add this responsive table to their own page or blog post, just by adding a <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/articles/editing-with-eleventy-shortcodes/">Snippet</a> (a.k.a. an Eleventy shortcode). This will lets editors build tables with a familiar table layout, with inline editing of the headers and data cells.

## How to add responsive tables on CloudCannon

To add &lt;table-saw&gt; as a Snippet on CloudCannon with our <a target="_blank" rel="noopener" href="https://github.com/CloudCannon/bookshop">Bookshop component management system</a>, I’ve added the `tablesaw.bookshop.yml` and `tablesaw.eleventy.liquid` files to our markdown component library: these establish the parameters of the component and define its structure, as well as calling the `table-saw.js` script and styling the table itself.

```yaml
# Metadata about this component, to be used in the CMS
spec:
  label: "Responsive Table"
  description:
  icon: table
  tags: []

# Defines the structure of this component, as well as the default values
blueprint:
  content_markdown: ""

# Overrides any fields in the blueprint when viewing this component in the component browser
preview:

# Any extra CloudCannon inputs configuration to apply to the blueprint
_inputs:
```

```
{% raw %}<script type="module" src="/js/table-saw.js"></script>
<div><table-saw zero-padding text-align>{{ content_markdown }}</table-saw></div>{% endraw %}
```

In order to access the new ‘Responsive Table’ Snippet in the toolbar, I’ve also added the following under `_snippets` in my `cloudcannon.config.yml` file:

```yaml
	tablesaw:
    template: eleventy_liquid_bookshop_component
    inline: false
    preview:
      text: Responsive Table
    definitions:
      component_name: markdown/tablesaw
      named_args:
        - editor_key: content_markdown
          type: string
```

## Installing the responsive tables component for local development

You have a few options to install `table-saw`:

1. Install via&nbsp;<a target="_blank" rel="noopener" href="https://www.npmjs.com/package/@zachleat/table-saw">npm</a>:&nbsp;`npm install @zachleat/table-saw`
2. <a target="_blank" rel="noopener" href="https://github.com/zachleat/table-saw/tags">Download the source manually from GitHub</a>&nbsp;into your project.
3. Skip this step and use the script directly via a third-party CDN (not recommended for production use)

<!-- notionvc: 1e8763a8-aff3-4c65-b3f9-2f4fa07a61f4 -->
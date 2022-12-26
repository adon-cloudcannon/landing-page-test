---
title: 'Editing Content with Hugo Shortcodes: Built-in and Custom Shortcode Support'
description: >-
  CloudCannon is the first CMS with full support and full integration for
  built-in and custom Hugo shortcodes — across our Visual, Content, and Source
  Editors.
series:
permalink: /blog/editing-content-with-hugo-shortcodes/
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/blog-hugo-shortcodes.jpg
date: 2022-11-03T05:00:00+1300
hide_publish_date: false
tags:
  - Features
  - Hugo
author: cloudcannon
---
You asked for it. We’ve done it. CloudCannon is the first CMS with **full support and full integration for built-in and custom Hugo shortcodes** — in our Visual, Content, and Source Editors. That’s a pretty big claim\! What do we mean by this? Let’s take a look.

## What are shortcodes?

Hugo uses shortcodes — code snippets in content files — to get around the limitations of Markdown, while keeping the simplicity and ease of Markdown’s syntax. Shortcodes let developers consolidate templating into small, reusable snippets that can be embedded directly inside Markdown content.

Hugo ships with a set of [predefined shortcodes](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes), which we’ve integrated and configured for immediate use in CloudCannon’s Visual and Content Editors.

## How to use Hugo’s built-in shortcodes in CloudCannon

When you and your team members are working in CloudCannon’s Content Editor or Visual Editor, which provide two different WYSIWYG interfaces for Markdown content, you’ll be able to add a shortcode by simply clicking the ‘Snippet’ button at the top right of the editing pane. (More on Snippets later — we’ll be expanding this functionality across other SSGs in the coming weeks.)

{% bookshop "markdown/image" src:"https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/blog-hugo-snippets-1.jpg" alt:"WYSIWYG editor" extend:false border:true %}

From here you can select your Hugo shortcode.

{% bookshop "markdown/image" src:"https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/blog-hugo-snippets-2.jpg" alt:"Shortcode list" extend:false border:true %}

Within the shortcode interface itself, you’ll see all the available options to change the shortcode’s parameters.

{% bookshop "markdown/image" src:"https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/blog-hugo-snippets-3.jpg" alt:"Tweet example" extend:false border:true %}

This integration means that content editors and marketers will be able to create new shortcodes and edit existing shortcodes via an intuitive interface, without ever needing to work in source files.

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/766299367" autoplay:true extend:true border: true %}

If you’re a developer working locally, or via CloudCannon’s Source Editor
view, simply call the shortcode in your Markdown content as you normally
would — {% raw %}`{{< shortcodename parameters >}}`{% endraw %} — and CloudCannon will include
it in your Hugo build.

Here’s an example of how the gist shortcode looks in an example Markdown
file:

{% raw %}
```md 
## Heading text

Here's my Markdown content, with an example of the gist shortcode below.

{{< gist spf13 7896402 "img.html" >}}
```
{% endraw %}

The above shortcode, `{% raw %}{{< gist spf13 7896402 "img.html" >}}{% endraw %}`, will embed the referenced code sample on your page.

You and your editors will now be able to see this gist shortcode, edit its parameters, or remove it via the Content Editor and Visual Editor views, where it appears as a component within the Markdown section of your page.

## Configure your custom Hugo shortcodes in CloudCannon

If you’ve been using Hugo for a while, you’re likely to have built up a
library of your own [custom shortcodes](https://gohugo.io/templates/shortcode-templates/), stored in
layouts/shortcodes/. If you’re working locally or within CloudCannon’s
Source Editor, you can use them immediately.

To ensure that others can use or edit custom shortcodes from CloudCannon’s
Content Editor or Visual Editor, you’ll need to add to your global
CloudCannon configuration file. If you’re familiar with the logic behind
[configuring
inputs](https://cloudcannon.com/documentation/articles/how-to-choose-what-input-is-used-in-the-data-editor/?ssg=Hugo) within CloudCannon, this will be a relatively straightforward process. For
more details, view our [documentation on editing content with custom Hugo
shortcodes](https://cloudcannon.com/documentation/articles/editing-with-hugo-shortcodes/).

## Shortcodes for everyone

By fully integrating both Hugo’s built-in shortcodes and your own custom
Hugo shortcodes into CloudCannon’s intuitive Markdown editing views,
CloudCannon help to surface one of Hugo’s core features for users with any
level of technical ability.

We’ve always been focused on enhancing the editing experience for our
users, and by integrating Hugo’s shortcodes fully into our Content Editor
and Visual Editor we’re giving all our users a more efficient means of
using templated content, and more control over their Hugo websites.

## What’s next?

We’ve been working on this feature for some time, because it’s important
to our users. Over the coming months we’ll start to reveal more of the
bigger picture for our Snippets feature, which will include full support
and integration for shortcode equivalents in other static site generators
(like Liquid tags in Jekyll and Eleventy), as well as full MDX support.

Our goal is to build the best Git-based CMS for your whole team, no matter
which SSG you’re using. We’d love to hear what you think about our
shortcode integration for your Hugo sites, and which features are still on
your wishlist.

As always, feel free to reach out to our dev team in support with any
questions [or](/hello) comments\!
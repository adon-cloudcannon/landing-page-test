---
title: Powerful Templates
description:
date: 2013-08-21
tags:
  - Features
author: mike-neumegen
image: https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/uploads/blog-lightbulb.jpg
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
---

You guys asked for it, and here it is. We're so excited to announce the brand new templating feature in CloudCannon.

Making changes to the structure of your website can involve editing every single HTML page. Now you can include a file into your HTML pages making **updating a breeze**.&nbsp;

![](https://res.cloudinary.com/dahpdufoq/image/upload/marketing-site/blog/uploads/80e7f5d79e8b31e1fe0b0486baefd2d0.png){: width="411" height="240"}

We've made the syntax as simple as possible. Simply adding `<!-- include header.html -->` to an HTML page is all you need to save yourself some **serious time**. See our docs for a more detailed explanation.

We've also launched a few smaller features to make **your life easier**. Adding an underscore to the beginning of a file name (e.g. \_header.html) makes the file inaccessible to visitors and hides it from your clients in the client editor. This is great if you have templating files lying around you don't want anyone to see.

Highlighting the current page is much more **straightforward**. CloudCannon automatically adds a class of `cc-active` to any `<a>` tags which point to the current page. Using some CSS and the `cc-active` class you can highlight the active page (Especially useful when you're using includes).

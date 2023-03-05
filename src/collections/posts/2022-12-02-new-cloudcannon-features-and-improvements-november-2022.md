---
title: New CloudCannon features and improvements (November 2022)
description: >-
  CloudCannon's been hard at work on updates for Eleventy shortcodes (Liquid and
  Nunjucks) under our Snippets feature, resizable inputs, and new preview
  options, as well as a host of other features and fixes.
series:
image: https://cc-dam.imgix.net/blog/blog-product-nov.jpg
date: 2022-12-02T05:00:00+1300
hide_publish_date: false
tags:
  - Company
  - Features
  - Resources
author: cloudcannon
---
Has it already been a month since our last product update? Time flies when you’re scoping and building new features, and even more so when your sites build quickly and are [hosted on one of the fastest global Jamstack hosts](https://cloudcannon.com/community/jamstack-hosting-comparison/)\!

If you’d like to see all of our recent features, as well as our fixes, you can see our [Changelog](https://cloudcannon.com/changelog/) for more information. For now, though, let’s look at the latest CloudCannon updates we’ve built for you.

## Snippets for Eleventy 🎉

**Released 18 November 2022**

For anyone who uses Eleventy shortcodes, this is a big deal\! Your customized development workflows are now supported by [CloudCannon’s Snippets](https://cloudcannon.com/documentation/articles/editing-with-eleventy-shortcodes/?ssg=Eleventy)\: Liquid or Nunjucks shortcodes can now be configured for immediate use within CloudCannon. For content editors who prefer the Visual or Content Editor, using custom shortcodes are now as easy as clicking a button and adding the shortcodes directly to your content.

We also added a few quality-of-life improvements which are aimed at giving you the flexibility you‘ve asked for, while making CloudCannon’s interface as logical and user-friendly as possible:

* Added Java and Graphviz support to the CloudCannon build machine
* Changed the look of the Organization setup task-list progress indicator
* Added an option to force reconnection if a site has a syncing error

*Psst: If you're an Eleventy user, we've got something special in the works for you, releasing next week\!*

## New preview option for inputs

**Released 23 Nov 2022**

Those of you who requested more preview options — we heard you\! With this release we brought across the new preview options we’d used in Snippets and Structure configuration to a range of inputs — Select, Multiselect, Choice, Multichoice, Object and Array. To keep things consistent, we’ll also roll this configuration out to our collections in the coming weeks.

We’ve also added a few other features in this release:

* Your configuration files created from the redesigned site setup list will now be pre-populated with automatically discovered settings and helpful comments.
* You can now configure \_inputs differently per schema — our configuration cascade now includes schemas.
* We’ve improved the design on some of our notification emails, making it easier for users to unsubscribe.

## Resizable inputs = more room to move in the Data Editor

**Released November 07 2022**

Everybody loves a little more screen real estate when you’re working on a large block of text or code, and if you spend a lot of time in our Data Editor, we now give you the option to control the size of some of our larger inputs, namely [Rich Text](https://cloudcannon.com/documentation/articles/using-rich-text-inputs-to-edit-your-data/) and [Code](https://cloudcannon.com/documentation/articles/using-code-inputs-to-edit-your-data/).

Based on your feature requests we’ve also added JPEG profile images, and have made a few improvements to the way we slugify titles to filenames.

You may remember that we added [built-in and custom Hugo shortcode support](https://cloudcannon.com/blog/editing-content-with-hugo-shortcodes/) last month. To speed things up for everyone using that feature, we’ve built out an improved initialization of new Hugo shortcodes in the Content Editor, as well as adding Hugo snippet templates for shortcodes with no arguments.

---

*Do you have any questions about our recent releases and updates? Or is there a feature you’d love to use on CloudCannon? Check out our [documentation](https://cloudcannon.com/documentation), or get in touch via in-app support, and we’ll get back to you as soon as we can.*

*Our roadmaps are heavily influenced by our users, so we’d love to hear what would make your CloudCannon experience more efficient, more pleasant, or more flexible for the way you want to work.*
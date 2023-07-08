---
draft: false
title: New CloudCannon features and improvements (October 2022)
description: >-
  We thought it’d be helpful to wrap up the exciting last month of releases in
  one place, so that our users can more clearly see the constant improvements
  we’re working on. Some changes and fixes are firmly in ‘under-the-hood’
  territory, addressing edge cases for just a few users or a single static site
  generator, whereas others are significant improvements, enhancements, or major
  feature additions to benefit all CloudCannon CMS users.
series:
image: https://cc-dam.imgix.net/blog/blog-product-oct-22.jpg
date: 2022-11-10T05:00:00+1300
hide_publish_date: false
tags:
  - Company
  - Features
  - Resources
author: fe9a75cd-0633-422b-8cc2-76bdfe319f28
ssg_frameworks:
categories:
  - company
  - features
  - resources
---
If you could get a glimpse behind the scenes at CloudCannon — via our sprint planning and tickets, our internal beta testing, and the *very* involved discussions going on within our engineering, ops, and product teams — you’d probably be as excited about the future as we are.

But the last month has been pretty exciting, too\!

You’ve probably noticed that our [changelog](https://cloudcannon.com/changelog/) publishes capsule summaries of our features and fixes, but we thought it’d be helpful to wrap up the last month of releases in one place, so that our users can more clearly see the constant improvements we’re working on. Some changes and fixes are firmly in ‘under-the-hood’ territory, addressing edge cases for just a few users or a single SSG, whereas others are significant improvements, enhancements, or major feature additions to benefit all CloudCannon users.

Whatever the case, though, every feature we add to CloudCannon is the result of a lot of planning, careful scoping, and above all, a focus on making life easier for our users, whether they’re developers, marketers, or content writers.

Without further ado, here are some of the most recent feature additions to CloudCannon:

## Full Support for Hugo Shortcodes

**3 November 2022 \| Major**

We’ve been working on full Hugo shortcode integration within our editors for some time now, making sure that when we were ready to launch, everything worked as smoothly as possible. With the first phase of that work complete, [CloudCannon’s Content Editor and Visual Editor now automatically supports all built-in Hugo shortcodes](https://cloudcannon.com/documentation/articles/editing-with-hugo-shortcodes/) — and, [via configuration](https://cloudcannon.com/documentation/articles/editing-with-hugo-shortcodes/?ssg=Hugo), all of our users’ custom shortcodes.

Because shortcodes form such an integral part of the Hugo development experience, speeding up repetitive tasks like embeds while keeping users’ Markdown clean, it was important to us to get it right — particularly for the non-technical users who prefer not to work with complex code. That’s why we render shortcode content blocks within the Content Editor as draggable items that can be moved anywhere within a Markdown section, and why editing shortcode blocks is as intuitive as possible.

{% bookshop "markdown/vimeo" video:"https://player.vimeo.com/video/768343165" autoplay:true extend:true border: true %}

Over the coming months we’ll share more of the bigger picture for
shortcodes’ ‘parent’ category feature of **Snippets** — which will include
full support and integration for shortcode equivalents in other static
site generators (like Liquid tags in Jekyll and Eleventy), as well as full
support for MDX. For more information on this release, read the [full
Hugo shortcode release post in our
blog](https://cloudcannon.com/blog/editing-content-with-hugo-shortcodes/).


* If you’ve ever wanted to be able to preview data in different places
across the CloudCannon app, we’ve also [updated our structures to use the
new preview
options](https://cloudcannon.com/documentation/articles/changing-how-cards-preview-your-data/),
which lets cards preview your data.

* If you’re evaluating a CMS, everyone on your team should be able to give
it a test drive — so we’re now allowing trial accounts to add additional
shares above the base plan limits.


## Cloudinary auth improvements, wider permissions for form attachments
and build deploys


**14 October 2022 \| Minor**


* Cloudinary users connecting to their DAM service within CloudCannon can
now authorize their accounts more easily.

* For Client Share users, we’ve now opened up access to CloudCannon Form
attachments.

* Are you using CloudCannon to handle your build and deploying on your own
infrastructure? Users with Technical Editor roles can now view Build
Deploy reports.


## Autodetecting failed states and suggested fixes for build failures


**10 October 2022 \| Minor**


This release added additional information to help you resolve build
failures. Our build server can now detect a larger number of failed
states, meaning CloudCannon can make a range of helpful suggestions to fix
your site if it fails to build. To see these suggestions, you can look at
the **Suggested fixes** section of your site’s status page.


* For sites with one or more DAMs connected, the file picker will now
remember your most recently used file source and open it by default. This
one’s a small fix, but it’s particularly handy for teams managing large
asset collections, or for those content editors who work across multiple
sites\!


## Notifications, signup questionnaire, and improvements


**28 September \| Minor**


In this release we visually updated our in-app notifications so they’re
slightly more subtle, and improved our communication via these
notifications for users in Organizations. In addition, users who are part
of our [Partner program](https://cloudcannon.com/partner-program/) can now
be visually distinguished in teams lists with a new badge.


To help new users better see how CloudCannon can work for them, we’ve
added a short questionnaire at the end of the signup flow. By answering
three quick questions about their skillset and goals, new users are able
to tailor their initial experience and get straight to the CloudCannon
features they’re likely to use.

---

*Do you have any questions about our recent releases and updates? Or is
there a feature you’re waiting for? Check out our
[documentation](https://cloudcannon.com/documentation), or get in touch via in-app support, and we’ll
get back to you as soon as we can.*
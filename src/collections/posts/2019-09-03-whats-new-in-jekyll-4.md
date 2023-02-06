---
title: What's new in Jekyll 4
date: 2019-09-03T12:00:00+1200
tags:
  - Resources
  - Jekyll
author: mike-neumegen
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/uploads/blog-night-time-galaxy.jpg
---
Jekyll 4 is here\! It's been a long time coming but the wait was worth it. Let's get down to the details.

## Build Speed Improvements

Build speed has always been a major pain point for Jekyll developers. We've seen large websites on CloudCannon take minutes to build. Slow builds are painful to work on as you have to wait every time you make a change.

Jekyll 4 makes huge strides in speeding up builds. It's fantastic to see Jekyll make this a priority, a trend we hope continues into the future\!

### Utterson

You can't improve what you can't measure.

In the past, Jekyll had no way of knowing the performance impact of new features and changes. We felt the first step to making Jekyll builds faster was to build a performance testing suite to see the performance impact of Pull Requests.

We sponsored Pat Hawks on the Jekyll Core team to work on this idea. A few months later, Pat launched [Utterson](https://github.com/jekyll/Utterson), a tool which compares the build time of a suite of sites between different versions of Jekyll (or even specific PRs/commits).

Utterson has been a huge help in identifying performance issues and testing the performance of fixes. We hope Utterson continues to help improve Jekyll performance into the future.

### Cache API

While working with Pat, we identified parts of the Jekyll build which could be saved between builds. Processing Liquid templates and converting Markdown files don't change between builds (unless underlying code has changed), so they're a perfect candidate for caching.

Pat created the [Cache API](https://jekyllrb.com/tutorials/cache-api/) so Jekyll and Jekyll Plugins can cache data between builds. Caching Liquid templates and converted Markdown files resulted in a 20%-30% performance increase in testing. Since adding this feature, Ashwin Maroli has cached other parts of the Jekyll build resulting in more performance gains.

Jekyll plugins have been left to their own devices for caching. We're looking forward to seeing plugins use the cache API so they're not reinventing the wheel.

### Memoization

Memoization is a form of caching where you save the return value of a function for future calls to that function. Ashwin has been on a storm finding areas all over Jekyll which can take advantage of this caching strategy.

### Liquid C

The team at Shopify released Liquid 4 at the end of 2016 which introduced performance increases and bug fixes in Liquid processing. Unfortunately for Jekyll users this didn't make it to the `liquid-c` gem (the Liquid gem Jekyll uses) until the end of 2018. Long story short, this new version should bring a 10% increase in Liquid processing.

### Drop support for old Ruby versions

The easiest way to increase your build performance is to make sure you're using the latest version of Ruby. The Jekyll team has dropped support for Ruby 2.3 and below in Jekyll 4 which will force developers to use a faster version of Ruby.

## Sass

Sass processing has moved from the `sass` gem to `sassc`. `sassc` is maintained by the Sass team so we should see better support here in the long run. It also claims to be 4000% faster than `sass` so faster builds too\!

## New Features

Jekyll 4 is mostly about build performance but there are a few new goodies to get your hands on:

* You can disable Liquid on a page by having `render_with_liquid: false` in the front matter
* You can use `and` and `or` operations with `where_exp`
* The `link` tag understands Liquid variables
* The `link` and `post_url` tags no longer need `site.baseurl` prepended every time they’re used

## Thank you Core Team

Jekyll 4 is a massive improvement over previous versions. We want to thank all the hard work Ashwin, Frank, Matt and Pat on the core team have put in to get Jekyll 4 released. We’re big fans of the build performance focus and are excited to see what comes next.

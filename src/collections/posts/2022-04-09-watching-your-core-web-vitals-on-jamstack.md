---
title: Watching your Core Web Vitals on Jamstack
description: "Three major metrics —\_Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift —\_measure a site’s loading time, time to interactivity, and visual stability. Luckily for you, Jamstack sites (including those created with CloudCannon) are perfectly placed to achieve high scores."
series:
image: https://cc-dam.imgix.net/core-vitals.jpg
date: 2022-04-09T05:00:00+1200
tags:
  - Resources
author: david-large
---
Whether we notice it or not, we’re all living and working in a Core Web Vitals world. Three major metrics — **Largest Contentful Paint**, **First Input Delay**, and **Cumulative Layout Shift** — measure a site’s loading time, time to interactivity, and visual stability, as we’ll examine in this article. Further, we’ll cover why it’s important to consider your site’s core vitals both as you build it, and as you maintain it. Luckily for you, Jamstack sites (including those created with CloudCannon) are perfectly placed to achieve high scores, so you’re already leagues ahead of a developer working with a monolithic CMS.

## What are Core Web Vitals?

At their core, the web vitals measure overall user experience. But before we discuss how to leverage and improve these three metrics, let’s dig in to what they’re measuring.

### 1\. Largest Contentful Paint (LCP)

LCP measures how long it takes to load the largest piece of content on your page. To reach your LCP score, Google calculates the render time of that largest image, video, or text block on your page, relative to when that page first began its load process. In terms of direct user experience, your LCP measures how long a user has to wait to see that block.

**Aim for:** &lt;=2.5ms LCP

### 2\. First Input Delay (FID)

FID measures the time from when a user first interacts with a page to the time when the browser actually responds to that interaction. Obviously this metric is particularly important on pages where you want or need a user to do something — to click a link, submit a form, or open a modal —because that’s the point at which the page has to be interactive.

**Aim for:** &lt;=100ms FID

### 3\. Cumulative Layout Shift (CLS)

CLS measures the total of all unexpected layout shifts that occur during the lifespan of the page. This score can range from zero to any positive number, where zero means no shifting.

**Aim for:** &lt;=0.1

## Measuring Core Web Vitals

Before we move on, take a moment to run a [quick test](https://pagespeed.web.dev/) on one of your sites. You’ll see that your site pages are given an aggregate score based on the results for 75% of pages within a URL group. Google’s assumption here is that performance issues in similar pages are likely due to the same underlying problem.

[Lighthouse tests](https://developers.google.com/web/tools/lighthouse) are a helpful method to measure your web vitals — you can run Lighthouse tests from Chrome DevTools, via the [Lighthouse Chrome Extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk), or in the command line:

```
npm install -g lighthouse
```

To run your test:

```
lighthouse <url>
```

If you need more information, try:

```
lighthouse --help
```

You can also [use Lighthouse programmatically](https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically), as a Node module.

## How to improve your Core Web Vitals

Core Web Vitals can be improved in many ways, though it’s always more effective to begin on any areas that are scoring the lowest. You should start from the infrastructure you're hosting on, before moving on to the way your site is built, and making small tweaks like resizing individual images.

Start with these high impact methods to improve your Core Web Vitals on your static sites:

* Use a CDN to deploy on the edge. See CloudCannon’s [Jamstack hosting performance comparison](https://cloudcannon.com/community/jamstack-hosting-comparison/). 
* Remove unnecessary JavaScript. Static site generators like [Astro](https://astro.build/) and [SvelteKit](https://kit.svelte.dev/) (both supported by CloudCannon) are great solutions here, as they give both the speed of static and dynamic interactions of an SPA.
* Minify your CSS, JS, and HTML where possible. Again, your chosen build tools will help you here — Sass allows `style: compressed`, for example, and something like [jekyll-minifier](https://github.com/digitalsparky/jekyll-minifier) could be a solid turnkey option for Jekyll users to minify HTML, XML, CSS, JSON, and JavaScript.
* Reduce the number of redirects you use by planning ahead. It’s really tempting to take the path of least resistance and use redirects when you change a site layout, but if you begin your build process with a clear plan for navigation, you will greatly reduce the need to redirect in the first place.
* Serve optimized images and videos that only load when they’re needed. Formats like AVIF and [WebP](https://developers.google.com/speed/webp/faq) images are generally better optimized than legacy image formats — though depending on the image you're serving, in some cases a PNG or SVG might be ideal. Further, [lazy loading](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/) is a simple change to add into your workflow.

It’s worth keeping in mind that because Core Web Vitals reflect metrics for the past 28 days, any changes you make now will take at least four weeks to be reflected in Google’s report. So there’s never a better time than now to make a change — even a small one\!

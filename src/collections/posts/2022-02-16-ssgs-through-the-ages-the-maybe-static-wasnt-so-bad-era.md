---
title: The 'Maybe Static Wasn't So Bad' era
description: >-
  The fifth part of an ongoing series: After a period of heavy, complex
  JavaScripts integrated into SSGs, we return to simpler times. And what could
  be simpler than straight HTML templates with Markdown content?
series:
  - SSGs through the ages
permalink: /blog/ssg-history-5-maybe-static-wasnt-so-bad/
image: /uploads/explorer-5.png
date: 2022-02-16T05:00:00.000Z
tags:
  - Resources
author: mike-neumegen
---
After [a period of heavy, complex JavaScripts integrated into SSGs](/blog/ssg-history-4-spas-are-awesome/), the following period pulls back to simpler times. And what could be simpler than straight HTML templates with Markdown content?

![Docusaurus logo at year 2017](https://dam-cdn.cloudcannon.com/docusaurus-timeline.svg){: width="600" height="77"}

## **[Docusaurus](https://github.com/facebook/docusaurus)** 

*by [Joel Marcey](https://github.com/JoelMarcey)*

Docusaurus was born inside Facebook, where there was a growing need for custom websites to document the company's open-source projects.

> "Since each site was unique, adding basic infrastructure such as a blog, consistent navigation, search, etc. became challenging undertakings."

To solve this problem, the open-source team set out to build a documentation template in Jekyll. It would serve as a starting point for new projects to provide all the basic functionality they would need, though they soon encountered issues with maintainability.

"Projects were free to modify the template as desired and apply their own project-specific features to it. So while projects share the same site generation platform, they have now diverted enough where they cannot take advantage of the new features we have added to the template over time."

The team went back to the drawing board and explored how they could keep their portfolio of documentation sites updated and consistent, yet be flexible enough for each site to adapt the platform to their needs. Docusaurus was born, and focused on the following principles:

1. To put the focus on writing good documentation instead of worrying about the infrastructure of a website.
2. To provide features that many open source websites need, like blog support, search, and versioning.
3. To make it easy to push updates, new features, and bug fixes to everyone all at once.
4. And, finally, to provide a consistent look and feel across all of our open-source projects.

Docusaurus is powered mostly by JavaScript and React, Remarkable for Markdown, and highlight.js for syntax highlighting. It features a configurable sidebar, documentation versioning, translations, search, and blog support. It can be extended through plugins and theming for anything it can't do out of the box.

Docusaurus powers the documentation sites for many of the tools developers use every day, including [Algolia Docsearch](https://docsearch.algolia.com/), [Jest](https://jestjs.io/), [React Native](https://reactnative.dev/), and [Redis](https://developer.redis.com/).

More recently, Docusaurus has been working towards their 2.0 to make quality-of-life improvements, including a better React implementation, Webpack for an extendable build pipeline, easier extensibility around layouts, and more. [Sébastien Lorber](https://github.com/slorber), [Alexey Pyltsyn](https://github.com/lex111), and [Yangshun Tay](https://github.com/yangshun) have joined the maintenance team to push Docusaurus forward.

![Eleventy logo at year 2017](https://dam-cdn.cloudcannon.com/eleventy-timeline.svg){: width="600" height="77"}

## **[Eleventy](https://www.11ty.dev/)** 

*by [Zach Leatherman](https://github.com/zachleat)*

The story behind how Eleventy got its name must be the sweetest of all the SSGs:

> Some might think that the name Eleventy is an homage to Spinal Tap (*turn it up to eleven*) or more directly, Lord of the Rings. I chose it because of a story my grandma Nonnie loved to tell about how I learned to count. Rather than move from ten to eleven like a normal child, I felt it appropriate to use the teen suffix for the numbers eleven and twelve, counting "ten, eleventy-teen, twelvety-teen, thirteen, …" I always liked that story and it seemed as appropriate a reason as any.

Zach Leatherman created Eleventy for three reasons:

1. **Flexibility** — Eleventy is a highly flexible static site generator. It supports almost any templating engine you can dream of, the directory structure is highly configurable, and [an extensive plugin ecosystem](https://www.11ty.dev/docs/plugins/) can extend the framework to whatever you need.
2. **Betting on JavaScript** — JavaScript was an easy choice for Zach due to the enormous npm ecosystem, which can be leveraged for faster build-out and easier maintenance.
3. **Not a JavaScript Framework** — "While Eleventy uses JavaScript in node.js to transform templates into content, importantly (by default) it does not recommend nor force your HTML to include any Eleventy-specific client-side JavaScript."

Soon after launching, Eleventy gained a cult following. There's not a single killer feature driving this adoption, but Eleventy takes some of the best ideas from other SSGs, mitigates their downsides, and ties them together in a well-thought-out package:

* It's highly extensible like Jekyll and Gatsby.
* It has fast build times like Hugo.
* It has a convention-based folder structure similar to Jekyll.
* It can pull in 3rd party data during build like Gatsby.
* It supports shortcodes like Hugo.

Eleventy ranked highly for developer satisfaction in both the [2020](https://www.netlify.com/blog/2020/05/27/state-of-the-jamstack-survey-2020-first-results/) and [2021](https://jamstack.org/survey/2021/) Jamstack surveys and boasts vocal community support. It powers websites such as Google's [web.dev](https://web.dev/), [CSS-Tricks Conferences](https://conferences.css-tricks.com/), [ffconf](https://ffconf.org/), and [Lookback](https://lookback.io/).

[*Get started with Eleventy on CloudCannon.*](https://app.cloudcannon.com/register?trial=cc_standard)

![Sapper logo sitting at year 2017](https://dam-cdn.cloudcannon.com/sapper-timeline.svg){: width="600" height="77"}

## **[Sapper](https://sapper.svelte.dev/)** 

*by [Rich Harris](https://github.com/Rich-Harris)*

In his [announcement post for Sapper](https://svelte.dev/blog/sapper-towards-the-ideal-web-app-framework), Rich Harris commends Next.js on being close to an ideal web application framework. In his view, however, it's not perfect. He points out one of Next.js's main flaws: vast amounts of JavaScript files, even for the most straightforward applications.

One year earlier, Rich introduced the world to Svelte — an innovative JavaScript framework making it easier to build interactive user interfaces with one key difference:

> Svelte converts your app into ideal JavaScript at *build time*, rather than interpreting your application code at *run time*. This means you don't pay the performance cost of the framework's abstractions, and you don't incur a penalty when your app first loads.

Sapper aims to bring the advantages of a Next.js style framework while "dramatically reducing the amount of code that gets sent to the browser." React and Next ships 204kb of JavaScript for a simple hello world. With Sapper it's just 7kb.

Spoiler alert: Sapper would a successor in the future. (More on that later.)

![VuePress logo sitting at year 2018](https://dam-cdn.cloudcannon.com/vuepress-timeline.svg){: width="600" height="77"}

## **[VuePress](https://vuepress.vuejs.org/)** 

*by [Evan You](https://github.com/yyx990803)*

Evan You, the creator of Vue.js, released his take on a Vue-based SSG in 2018 with VuePress. Where Nuxt.js focuses on building web applications, VuePress is all about document-based websites, particularly product documentation.

The default template on VuePress gives you a documentation theme with many bells and whistles, including a customizable navbar, site-wide search, and multi-language support. You can even use Vue components directly in your Markdown.

[VuePress 2](https://v2.vuepress.vuejs.org/) is currently in beta and is a significant rework of the framework led by [meteorlxy](https://github.com/meteorlxy). Improvements include:

* It uses Vue 3
* It's built from the ground up in TypeScript
* It supports either Webpack or Vite as the bundler

![Gridsome logo on timeline at year 2018](https://dam-cdn.cloudcannon.com/gridsome-timeline.svg){: width="600" height="77"}

## **[Gridsome](https://gridsome.org/)** 

*by [Hans-J&oslash;rgen Vedvik](https://github.com/hjvedvik)*

The success of Gatsby.js inspired Hans to create the "missing piece to the Vue.js ecosystem."

> What Gatsby.js does for React.js is a game-changer in how we build websites. React.js is excellent, but we think Vue.js is more approachable for most web designers and devs getting started with Jamstack. Gridsome is the Vue.js alternative to Gatsby.

Gridsome takes a similar approach to Gatsby.js, using a universal GraphQL layer to connect to data sources. It also applies many of the same out-of-the-box performance optimizations such as image compressing, image lazy-loading, CSS & JS minification, code-splitting, HTML compressing, and more.

---

Coinciding with a return to static — an elegant solution for a more-or-less civilized age — we've seen the development of several SSG ecosystems in this era. But with Next.js and Nuxt.js pushing the envelope, some developers questioned whether they could take this paradigm even further. In my next article, we'll see why someone would create a full-stack web application as a modern replacement for Rails.
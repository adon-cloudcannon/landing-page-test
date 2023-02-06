---
title: The 'Rebirth' era
description: >-
  Part 7 of an ongoing series: With modern tooling and the knowledge of better
  ways of implementing SSGs, the rebirth era sees reincarnations of several
  older SSGs with modern ideas.
series: SSGs through the ages
permalink: /blog/ssg-history-7-rebirth/
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/explorer-7_yy2hqt.png
date: 2022-03-02T05:00:00.000Z
tags:
  - Resources
author: mike-neumegen
---
What’s old is new again. With modern tooling and the knowledge of better ways of implementing SSGs, the rebirth era sees reincarnations of several older SSGs with modern ideas.

## [Bridgetown](https://www.bridgetownrb.com/)

*First released in 2020 by [Jared White](https://github.com/jaredcwhite)*

Much of Jekyll's success can be attributed to the free hosting provided by GitHub Pages. We don't know exactly how many websites are on GitHub Pages, but it's likely in the hundreds of thousands, if not millions. GitHub Pages runs a single version of Jekyll (currently 3.9.0) to build all of the sites on the platform. Upgrading Jekyll to a newer version (Jekyll 4.2.1 was released in September 2021) on GitHub Pages would likely cause issues the next time anyone built their site.

Suffice it to say, Jekyll is in a tricky spot. At this rate, new features won't reach the Jekyll users on GitHub Pages anytime soon, leaving little incentive for the core team to continue making improvements.

Jared White grew frustrated with the Jekyll situation. He had been using Jekyll to build websites for clients as part of his agency, Whitefusion. As a Rubyist at heart, Jared loved Jekyll but realized it was starting to show its age.

> After an amicable conversation with the Jekyll core team, I decided to take on the exciting (but incredibly daunting\!) task of "forking" Jekyll and using it as the starting point for a *reimagined* Ruby-based website framework: **Bridgetown.**

Forking Jekyll allowed Jared to develop rapidly as he didn't need to maintain backward compatibility. Bridgetown was a new SSG based on the bones of Jekyll. The changes include:

* Change the codebase into a monorepo rather than splitting off into Gems.
* Removing deprecated code and confusing config options.
* Improving the default site structure.
* Add a console command to interact with the site data and plugins.
* Replace the asset pipeline with Webpack.
* Make pagination a first-class citizen — a common pain-point with Jekyll.
* Streamline taxonomy pages.
* Support environment-based configuration
* ERB support in templates
* Enable component-based templating

Bridgetown has an ambitious roadmap for the coming year. It's going to be exciting to see what a modern reincarnation of Jekyll is capable of without the shackles of GitHub Pages.

Update (7 March): [Bridgetown has reached their 1.0.0 release](https://github.com/bridgetownrb/bridgetown/releases/tag/v1.0.0)\!

## [VitePress](https://vitepress.vuejs.org/)

*First released in 2020 by [Evan You](https://github.com/yyx990803)*

Four years after creating VuePress, Evan You came back with a new SSG, VitePress. "VitePress is [VuePress'](https://vuepress.vuejs.org/) little brother, built on top of [Vite](https://github.com/vitejs/vite)."

Evan You had recently released Vite to combat many of the pain points developers face using Webpack. The days of having a single JavaScript file for your website are long gone for most of us and build tools have become a necessary evil. Webpack is a popular build tool that builds a tree of all the dependencies on a site, transpiles (makes the JS work in older browsers) or compiles (turn SCSS into CSS) them, concatenates the files and optimizes them. Needless to say, this process can be time-consuming, which is especially painful when you’re developing. Waiting minutes to see your change appear in the browser is not a fun experience.

Vite takes a different approach. It assumes you’re using a modern browser during development, allowing it to leverage native ES modules rather than bundling. The result is seeing updates in the browser in a fraction of the time you would using Webpack. And you can still run a bundled build for production.

VitePress shares many of the updates coming to VuePress 2, including:

* Vue 3 support
* Using Vite instead of Webpack for the build

While it shares many similarities with VuePress 2, the goals of the project are slightly different, in that VitePress is more opinionated and less configurable:

> VitePress aims to scale back the complexity in the current VuePress and restart from its minimalist roots.

---

Following the trends of the rebirth era, where existing static site generators are rebuilt within the context of the modern web, we’ll start to see islands architecture appearing within the SSG world, allowing static websites to keep the best of both worlds — fast load times and the dynamic interactions of an SPA.

The final episode of this series will be released next week. Tune in then for the newest wave of SSG history, as well as our thoughts on the future for SSG direction and development.
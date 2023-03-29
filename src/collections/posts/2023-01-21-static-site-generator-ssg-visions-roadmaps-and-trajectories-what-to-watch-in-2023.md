---
draft: false
title: >-
    Static Site Generator (SSG) Visions, Roadmaps, and Trajectories: What to
    Watch in 2023 
description: >-
    A complete roundup of public roadmaps, planned features, and open
    discussions for some of the most popular static site generators (SSGs) in
    2023.
series:
image: https://cc-dam.imgix.net/blog/blog-ssg-visions-roadmaps-2023.jpg
date: 2023-01-21T05:10:00+1300
hide_publish_date: false
tags:
    - Resources
    - Hugo
    - Eleventy
    - Jekyll
    - Next.js
    - SvelteKit
    - Astro
    - Nuxt.js
    - Bridgetown
author: 466580e8-b101-4837-a0c2-a90a8aebb5db
---
Last week I published a list of the [top five static site generators for 2023](https://cloudcannon.com/blog/the-top-five-static-site-generators-for-2023-and-when-to-use-them/). In that article I looked at the major features for each framework, as well as the kinds of development each SSG is best suited for.

But the tools we use are never really static: each of the SSGs I covered last week has plans for new features, public roadmaps, or discussion channels for users and maintainers. And there are plenty of newer meta-frameworks and site generators building up steam and growing their own communities.

As CloudCannon lays out our own plans for content management, publishing and editing features for the year (more on that next week!), let’s look at the features on the horizon for some of the most popular SSGs out there — and keep an eye on one slightly smaller progressive generator (and fullstack framework) that’s showing a lot of potential for growth in 2023.

## Astro

Given Astro’s growth (and its well-deserved hype) over 2022, it’s a safe bet that Astro is going to be huge again this year. It’s positioned really well in the modern web dev community as a website-focused meta-framework, rather than a webapp-focused meta-framework (Next.js, SolidStart etc), and anecdotally, I’m hearing a lot of people who were previously unfamiliar with SSGs discovering Astro and calling it a “great new way to make websites”. (Which is true, however late these people are coming to the party.)

Some of Astro's appeal lies in its bring-your-own framework model, where devs can bring in their favorite React, Vue, Svelte or other components and tools, and get an excellent result. For SSG use cases that lean heavily on JavaScript frameworks, I think we’ll start to see more sites built on Astro, and less use of framework-specific meta-frameworks. (Although they will probably still be very popular regardless.)

With Astro 2.0.0 on the horizon — currently scheduled for a January 24th release — we’ll see the following changes (from the [beta release changelog](https://github.com/withastro/astro/pull/5792)):

* Removal of support for Node 14. Minimum supported Node version will be &gt;=16.12.0;
* Default preview host will be `localhost` instead of `127.0.0.1`, allowing the static server and integration preview servers to serve under IPv6;
* *Breaking change:* Client assets will build to an `_astro` directory in the build output directory. Previously these were built to various locations, including `assets/`, `chunks/` and the root of build output. You can control this location with the new `build` configuration option named `assets`.
* The experimental `contentCollections` flag will be baselined, so you can remove this from your Astro config.


```json
import { defineConfig } from 'astro/config'; 

export default defineConfig({ 
- experimental: { contentCollections: true } 
}) 
```

* Generated content collection types will be moved to a `.astro` directory, replacing the previously generated `src/content/types.generated.d.ts` file. Astro will also generate the [TypeScript reference path](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-path-) to include `.astro` types in your project. This will update your project's `src/env.d.ts` file, or write one if none exists.
* Zod objects, unions, discriminated unions, intersections, and transform results will be allowed as content collection schemas;
* Astro will also support serving well-known URIs with the `@astrojs/node` SSR adapter.

The CloudCannon product team is particularly interested in the content collection changes, but I’m also just impressed with the astronomical (sorry) speed with which this project is moving. Exciting times!

[Bring your Astro websites to CloudCannon](https://app.cloudcannon.com/register?trial=cc_standard)

## Eleventy

Eleventy looks better each time we dig into it, doesn’t it? With Netlify now sponsoring Eleventy’s full-time open-source development, we’ve been seeing a raft of updates and activity over the last year, with many changes understandably related to hooking into the vast range of services that Netlify has to offer.

Eleventy v2.0 is also approaching. Its first beta release was announced just days ago, with a list of features emphasizing smaller dependencies, faster builds, and improved plugins (from the [beta release announcement](https://www.11ty.dev/blog/eleventy-v2-beta/)):

* Dependencies decreased by 32% to [211 modules](https://npmgraph.js.org/?q=@11ty/eleventy@2.0.0-beta.1);
* `node_modules` file weight decreased by 77% to just 34.3 MB;
* `npm install` will be 30% faster;
* Improved build performance (tested on&nbsp;[a sample 500 page site](https://docs.google.com/spreadsheets/d/1-H3wmT7q7m7G7d5M_dCLxQOiAAX3TP0byQdf0pP1fAQ/edit?usp=sharing) against v1.0.2) using:
  * Liquid: 18% faster;
  * Nunjucks: 17% faster;
  * Markdown (with Liquid): 17% faster;
  * JavaScript (11ty.js): 8% faster.
  * [`--incremental` for incremental builds](https://www.11ty.dev/docs/usage/incremental/)
  * Smarter incremental builds with support for layout dependencies,&nbsp;[registered dependencies on custom templates](https://www.11ty.dev/docs/languages/custom/#registering-dependencies), dependencies in `pagination` data or [`eleventyImport`](https://www.11ty.dev/docs/collections/#declare-your-collections-for-incremental-builds)
* [`--ignore-initial` command line option](https://www.11ty.dev/docs/usage/#ignore-initial-to-run-eleventy-without-an-initial-build]&#40;https://www.11ty.dev/docs/usage/#ignore-initial-to-run-eleventy-without-an-initial-build) to skip the first build (best paired with `-- incremental`);
* Use&nbsp;[emulated passthrough copy](https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve) to serve passthrough files directly without triggering a build (will still work with live reload);
* Added support for&nbsp;[WebC, the new single file format for web components](https://www.11ty.dev/docs/languages/webc/), and the&nbsp;[Vite plugin](https://www.11ty.dev/docs/server-vite/);
* Bundled with Eleventy, we’ll now have:
  * [Eleventy Edge](https://www.11ty.dev/docs/plugins/edge/)&nbsp;to render Eleventy templates in an Edge Function for dynamic content;
  * [Eleventy Dev Server](https://www.11ty.dev/docs/dev-server/)&nbsp;replacing Browsersync, adds support for DOM-diffing live reloads;
  * [Render Plugin](https://www.11ty.dev/docs/plugins/render/)&nbsp;will render any template syntax inside other files;
  * [Internationalization (i18n) Plugin](https://www.11ty.dev/docs/plugins/i18n/)&nbsp;makes it easy to create localized sites;
  * [HTML `<base>`&nbsp;Plugin](https://www.11ty.dev/docs/plugins/html-base/)&nbsp;makes it easy to deploy your site to any folder path without changing any content (works great with the path prefix feature).
* New support has been added for&nbsp;[aliasing to an existing template language](https://www.11ty.dev/docs/languages/custom/#aliasing-an-existing-template-language), which unlocks TypeScript or JSX in Eleventy when you use `esbuild-register` and alias `11ty.ts` or `11ty.tsx` to `11ty.js`;
* [Event arguments](https://www.11ty.dev/docs/events/#event-arguments) unlock new plugin abilities: `dir` (input/output/includes/data/layouts locations), `outputMode` (where the templates are going: `fs`, `json`, `ndjson`), `runMode` (`build`, `watch`, or `serve`), or `results` for the processed Eleventy output;
* Memory usage improvements to&nbsp;[Pagination](https://www.11ty.dev/docs/pagination/).

Phew! There’s more over at the [beta release changelog](https://github.com/11ty/eleventy/compare/v1.0.2...v2.0.0-beta.1), but with the above changes it’s clear that the Eleventy team is busier than ever, and the SSG will remain a forerunner in the field over 2023.

[Get started with our Eleventy Beginner tutorial series](/tutorials/eleventy-beginner-tutorial/)<br>[Bring your Eleventy websites to CloudCannon](https://app.cloudcannon.com/register?trial=cc_standard)<br>[Learn how to configure your Eleventy sites for CloudCannon editing](https://cloudcannon.com/documentation/guides/eleventy-cms-get-started-with-cloudcannon/)

## Jekyll

Jekyll, too, is likely to be gearing up for a major version release, based on the [Jekyll version 5.0 Roadmap document](https://github.com/jekyll/jekyll/issues/9156) published in October last year. For the thousands upon thousands of sites relying on Jekyll this will be welcome news, and may help to bring devs back to the SSG with which so many of us began building our static sites.

It’s still a little unclear just how many of the following proposed breaking changes will be implemented — some, like renaming the Liquid variable `{{ page }}` to `{{ view }}` may prove controversial. The project currently emphasizes keeping Jekyll’s behavior consistent, to reduce interference from moving parts, as well as reducing maintenance and development overhead.

Breaking changes for Jekyll v5 may include:

* For the Ruby API:
  * Consider initializing core-primitives with keyword arguments instead of positional parameters;
  * Introducing a common superclass for pages, documents, layouts, inclusions (`include_files)`, `data_files`;
  * Making pages and documents behave similarly using inheritance;
  * Introducing a `StaticFile` subclass for static files in a collection;
  * Consider making Liquid drops immutable;
  * Removing deprecated features / code.
* Rename Liquid variable `{{ page }}` to `{{ view }}`;
* Incremental regeneration based on SHA digests;
* Proposed configuration changes include:
  * Dedicated (default) collection\_dir: `_collections`;
  * `collections` have to be a map of key-value pairs — lists or anything else will ignored, or perhaps errored;
  * Simpler syntax for `defaults`.
* Options for collections include:
  * Dedicated collection\_dir: `_collections`;
  * Register collections based on existence in collection\_dir instead of configuration;
  * Reducing the special status of `posts` collection:
    * Making front matter mandatory for all documents (incl. posts);
    * Removing support for superdirectory-based categories and consider only front matter data;
    * Treating Categories and Tags of every collection equally;
    * Allow having static files within `posts` collection.

Some of the above proposed changes to Jekyll appear to be bringing its behavior more in line with other SSGs, particularly in terms of posts and collections. I’ll watch this one closely, since some of my oldest CloudCannon sites are built with Jekyll, and I’d love to improve their performance if I can.

[Get started with our Jekyll Beginner tutorial series](/tutorials/jekyll-tutorial/)<br>[Bring your Jekyll websites to CloudCannon](https://app.cloudcannon.com/register?trial=cc_standard)

## Hugo

[Hugo will, at some point in the future, release its version 1.0.](https://twitter.com/GoHugoIO/status/1593518089336913920?s=20) But [according to lead maintainer Bjørn Erik Pedersen](https://twitter.com/bepsays/status/1594615957686816769?s=20), as of November 2022 Hugo is still missing a few “vital pieces”. It’s hard to parse this statement in some respects, since the software is already so well tested and stable, but the core Hugo team is considerably smaller than that of many other SSGs, and Pedersen acknowledges the expectations of bug fixes for back ports that rightfully come along with a v1.0 release.

Ultimately, though, the Hugo devs take breaking changes very seriously, and while their pace in terms of major feature additions isn’t the same as larger teams, they’re consistently iterating on an incredibly well performing SSG — one with a dedicated following and very well positioned use cases. For purely static sites where build speed is a key element, it’s still hard to look past Hugo.

Because of the team’s focus on smaller point releases they’re able to move pretty nimbly, and average a release at least monthly, and sometimes weekly for pressing issues. This also means there’s not much in the way of public roadmaps available, though I’ll leave you with the following teaser, from Hugo’s Twitter account in September last year:

> Current Hugo Road Map:<br><br>First: The "million pages" version (soon).<br>Then: Proper API support (aka "data for pages")[@bepsays](https://twitter.com/bepsays?ref_src=twsrc%5Etfw) — GoHugo.io (@GoHugoIO) [September 16, 2022](https://twitter.com/GoHugoIO/status/1570897369662734336?ref_src=twsrc%5Etfw)

<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Get started with our Hugo Beginner tutorial series](/tutorials/hugo-beginner-tutorial/)<br>[Bring your Hugo sites to CloudCannon](https://app.cloudcannon.com/register?trial=cc_standard)<br>[Learn how to configure your Hugo sites for CloudCannon editing](https://cloudcannon.com/documentation/guides/hugo-starter-guide/)

## SvelteKit

SvelteKit hit its own version 1.0 in mid-December last year after two years in development, to much celebration from Svelte adherents across the world. (CloudCannon celebrated in our own way, as it happens, by bringing our CMS support for [SvelteKit support out of beta](https://cloudcannon.com/blog/cloudcannon-sveltekit-support-out-of-beta/)!) Version 1.0 was, of course, a major milestone, with framework’s features now battle-tested and production-ready, while still feeling new and shiny to many of us.

Even in the team’s 1.0 release notes, though, they made a point of saying that they’re “just getting started”. In 2023 we’ll see Svelte v4 (the two are developed together), and the SvelteKit roadmap for the year ahead includes the following:

* Built-in i18n support;
* Incremental static regeneration;
* Granular control over deployment region and runtime;
* Image optimization;
* and “many other improvements”.

I really like the Svelte team’s approach to pitching their product, personally. As they say, Next.js, Remix, Astro, Rails, and Laravel are all wonderful tools, and if you’ve settled on one of them, you should feel great about choosing them. But you should also feel pretty damn good about choosing SvelteKit — it offers perhaps the most flexibility about how you build your sites and apps. You can do build-time validation or render data from the filesystem that your edge functions can’t touch. You don’t necessarily need server-side rendering, but it’s there if you want it, and SvelteKit lets you make the choice with as much granularity as you need — hence the term that Svelte creator Rich Harris coined last year, ‘[transitional apps](https://www.youtube.com/watch?v=860d8usGC0o)’.

[Get started with our SvelteKit Beginner tutorial series](/tutorials/sveltekit-beginner-tutorial/)<br>[Bring your SvelteKit websites to CloudCannon](https://app.cloudcannon.com/register?trial=cc_standard)

## Next.js

Time moves quickly, doesn’t it? It’s now been three months since Next.js v13 (stable) came out, and the 13.1 update followed just a few weeks ago, the two releases bringing a host of features aimed at improving speed, performance and DX:

* [Server and Client Components](https://beta.nextjs.org/docs/rendering/server-and-client-components) let you build complex interfaces while reducing the amount of JavaScript sent to the client;
* The new `app/` directory (still in beta) promises to improved routing and layouts, particularly for interfaces that preserve their states across navigations, remaining interactive while avoiding expensive re-renders;
* With both the `app/` directory and Server Components, you can render parts of the page that don’t require data, while showing a loading state for the parts of the page that do — and users can interact with the page without waiting for the entire page to load;
* Turbopack (alpha) support will replace Webpack, bringing “up to 700x faster” updates (and, for comparison, roughly 10x faster updates than Vite);
* `next/image` is a new component that further improves your Core Web Vitals by minimizing layout shit and optimizing files on demand;
* The native `fetch` Web API has also been extended in React and Next.js. It&nbsp;[automatically dedupes fetch requests](https://beta.nextjs.org/docs/data-fetching/fundamentals#automatic-fetch-request-deduping) and provides a single, flexible method for fetching, caching, and revalidating data at the component level. In effect, all the benefits of Static Site Generation (SSG), Server-Side Rendering (SSR), and Incremental Static Regeneration (ISR) are now available through one API.

There’s more, of course — including a new font system,&nbsp;`<Link>`&nbsp;now always renders an `<a>`, a new library in `@vercel/og` that generates dynamic social cards (open graph images), as well as updates to the Middleware API.

Judging by the Next.js team’s previous development cycles, it’s likely we’ll see a few more incremental updates over the next few months before another RFC cycle starts mid-year for Next.js 14. But whatever the timeline leads us to, there’s such a weight of industry behind Next.js (and an incredible number of built sites and apps) that the year ahead is almost certain to be very *very* positive.

[Bring your Next.js websites to CloudCannon](https://app.cloudcannon.com/register?trial=cc_standard)

## Nuxt

Last year was exciting for Vue and Nuxt users, with Nuxt 3 bringing a new architecture and a full-stack server framework (Nitro). The stable version of Nuxt 3 followed two years of overall research, experimentation and community feedback, and the transition from Nuxt 2 to Nuxt 3 was a major one.

2023 promises a gentler transition to Nuxt 4, with a consistent release cycle (following [semver](https://semver.org/)), patch releases roughly weekly and minor releases roughly monthly. Overall, we should see fewer, if any, breaking changes.

The biggest change for Nuxt users — and particularly those who manage sites across both version 2 and version 3 — will be the introduction of a unified repository, soon to be located at `nuxt/nuxt`. Documentation for Nuxt 2 will also be migrated to the new [nuxt.com](http://nuxt.com) site, meaning there will be a single source of truth (albeit with a version switcher) for all of your Nuxt resources, regardless of the version you’re using.

With more than 60 modules already compatible with Nuxt 3, the team is off to a good start, and they aim to make sure that the most widely used modules in Nuxt 2 are either upgraded or have a straightforward migration path. Among them, the first priorities for the year will be `nuxt/image`, PWA, and `nuxt/auth`. RFCs are also being developed for `nuxt/font` and `nuxt/script` with the Google Aurora team, so your quest for best performance practice will be made more straightforward.

[Bring your Nuxt websites to CloudCannon](https://app.cloudcannon.com/register?trial=cc_standard)

## Bridgetown

I’ve been watching Bridgetown take shape and build its community for at least the past year, and it’s readily apparent that for developers like Bridgetown creator Jared White, the best advice is to ‘always bet on Ruby’. A couple of years ago White wrote that Bridgetown, a modern rewrite of Jekyll, would comprise part of what he calls the ‘DREAMstack’ — Delightful Ruby Expressing APIs and Markup — and bridge the gap between modern Jamstack deployment and traditional Ruby on Rails apps. Fast forward to 2022, and Bridgetown’s progressive site generator (and fullstack framework) reached its milestone 1.0 status, pushed out two major updates, and held [its first conference](https://www.bridgetownconf.rocks/).

The most recent release, Bridgetown 1.2, brought a Ruby-based configuration and initialization system (for plugins too), meaning that Ruby devs will be able to write their configuration using Ruby itself — YAML is now optional (though it won’t be deprecated in the near future). 1.2 also brought a slotted content feature for pages and components, and templates using `data` instead of `resource.data`. This was also the last version that will support Ruby 2.7 — in 2023 Bridgetown will be moving to Ruby 3.0+.

Future goals for Bridgetown include:

* Fewer ‘globals’ within Bridgetown’s core, meaning you’ll be able to define multiple Bridgetown sites and boot them up at once — this bodes well for larger installs with more complexity;
* A new Ruby-based web components SSR pipelines with per-island hydration in JavaScript;
* More plugins! Development on Bridgetown core is actually forecast to slow slightly, with the project devs focusing more on growing Bridgetown’s plugin ecosystem. Several key plugins currently under development: among them, Turbo, forms, database (via `bridgetown-activerecord`), authentication, membership and paywalls, and dashboards.

What I’m most interested in, though, is Jared White’s concept of Bridgetown as a ‘publishing hub’ — beginning in 2023, some experimental plugins for Bridgetown will start to provide PESOS solutions — Publish Elsewhere, Syndicate to your Own Site. In contrast to the POSSE model (Publish on your Own Site, Syndicate Elsewhere), PESOS depends upon a centrally controlled nexus offering control to content creators who want or need to publish externally. This kind of rich plugin is essential for a site generator, and with more PESOS plugins on the way, I think we’ll start to see increased adoption of Bridgetown, either from former Jekyll users or newer devs using it as a launching point into Ruby.

## So what will 2023 hold for the modern web?

In general terms, I think we’re seeing a couple of trends converging: zero-JavaScript by default, and (to varying degrees) an increased granularity to choose which framework, tool, or programming language creates your HTML on a page-by-page basis. While framework-specific tools continue to be popular, the most explosive growth and developer fervor (see Astro, Eleventy, SvelteKit) seems reserved for framework-agnostic tools that keep developer freedom and choice at the forefront.

Overall, it’s pretty clear to me that there are no losers in this race — just being a part of the modern web dev world makes us all winners. Whatever the meta-framework or static site generator you’re using, you’re likely to see performance and DX improvements in your future, directly impacting your work and the sites you and your users are updating. Let’s tip our hats to the developers, maintainers, testers, and community members that keep these incredible open-source projects moving.

With an action-packed 2023 roadmap for CloudCannon itself (watch this space), editing and managing the static sites you make will also become even easier, with improved publishing workflows, access to more templates for you to deconstruct and repurpose, and less friction overall in your development.

Here at CloudCannon, we’re all pretty excited for the work ahead in 2023, and the SSG, framework, and meta-framework updates that will be coming our way. We hope you are too!

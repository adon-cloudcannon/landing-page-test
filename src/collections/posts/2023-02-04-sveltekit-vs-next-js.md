---
draft: false
_schema: default
title: SvelteKit vs. Next.js
description: >-
  SvelteKit vs Next.js compares open source web development tools for creating
  web applications and static websites. Both static site generators offer
  server-side rendering, code splitting, fast build times, and run on
  JavaScript. SvelteKit is a framework for Svelte, whereas Next.js uses React
  components.
series:
image: https://cc-dam.imgix.net/blog/sk-vs-nextjs-min.jpg
date: 2023-02-03T16:01:00Z
hide_publish_date: false
tags:
  - Next.js
  - SvelteKit
  - Resources
author: 8be0c187-5378-43bd-9a1e-85ed1c49b51d
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch your SvelteKit or Next.js website today
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
ssg_frameworks:
  - nextjs
  - sveltekit
categories:
  - resources
---
If you're looking to build static sites with complex interactive web applications, you’d be hard pressed to find two more suitable static site generators than **[Next.js](https://nextjs.org/)** and **[SvelteKit](https://kit.svelte.dev/)**.&nbsp;

Luckily for both developers and content teams, CloudCannon supports both Next.js and SvelteKit: whichever tool you choose for your static sites, with CloudCannon you’ll have the benefit of accessible content management, flexible dev tooling, and intuitive content editing and page building. It’s worth noting, however, that our support for Next.js and SvelteKit is focused on SSG capabilities of these tools, and as such does not include SSR.

Both Next.js and SvelteKit are incredibly popular tools, both built with JavaScript — and if you’ve been tuned into the web development world over the past few years you’ll have come across ardent supporters for each. It’s a testament to the vision driving the development of each tool that both have found such a widespread following. But which should you choose? Well, as usual, the answer will depend almost entirely on your development experience and preferences. (The remainder of the answer is much more subjective: choose the one that best fits your preferred workflow!)

With that said, let’s start comparing apples to apples, shall we?

**TL;DR** — Choose Next.js if you prefer React, choose SvelteKit if you prefer Svelte.

### What is Next.js?

Next.js is a robust hybrid framework for both statically exported React applications and websites, as well as server-rendered React applications. As a framework, Next.js takes care of the tooling and configuration required by React while also giving developers' applications more structure, features, and optimizations. It is often referred to as a meta framework for this reason. To put it as simply as possible, Next.js is a framework for React, which is a framework for Javascript components.

Next.js is becoming more and more popular among developers with React expertise. React offers a virtual DOM program and server-side rendering, which makes complex apps run extremely fast. It is also increasingly popular among those that need the adaptability of a hybrid model that can integrate both server-side rendering (SSR) and static site generation (SSG) in one project.

The designated purpose of Next.js, which is backed by Vercel, is to deliver full-stack functionality to the frontend. New Rust-based transpilation and minification capabilities, as well as the incremental bundler and build system Turbopack replacing Webpack, suggest that Next.js will continue to be a powerhouse for users who want the entire range of development options at their disposal.

### Sites made with Next.js

* [hbomax.com](http://hbomax.com)
* [notion.com](http://notion.com)
* [ign.com](http://ign.com)
* [hulu.com](http://hulu.com)

### What is SvelteKit?

SvelteKit is a framework for Svelte that creates web applications and static sites that are build-optimized and only load the bare minimum of code. This allows developers to leverage their existing Svelte experience for their next e-commerce site, web application, or responsive marketing site. SvelteKit is actively being developed with their roadmap including built-in i18n support, incremental static regeneration, granular control over deployment region and runtime, image optimization, and many other improvements. SvelteKit is already powering significant data visualization applications such as The New York Times [Coronavirus tracker](https://www.nytimes.com/interactive/2021/us/covid-cases.html). (Fun fact: Rich Harris first developed Svelte while employed as a graphics editor at The New York Times.)

As opposed to having two tightly tied programs (one to generate HTML, one to handle client-side interaction), this full-stack meta framework lets you utilise one language, unlike standard server frameworks. In other words, the logic and templating is bundled into one file for each component. You can deploy as a standard Node server or using serverless functionalities, including at the edge, because SvelteKit runs anywhere JavaScript runs.

After the initial server-rendered page load, it switches by default to client-side navigation, unlike conventional "multi-page apps" or MPA frameworks. Faster page transitions, state that survives between pages (such the position of a sidebar's scroll bar), and less data usage are all made possible by this. Additionally, it prevents third-party scripts like analytics from being run again after each page load.

You have freedom with SvelteKit. Many frameworks make the assumption that there is just one right method, but the answer is always more complex. Pre-rendering static pages, for instance, does more than simply act as a poor man's cache control; it also enables build-time validation, renders data from the filesystem that your edge functions can't access, and serves as a safeguard against unstable databases.

### Sites made with SvelteKit

* [daisyui.com](http://daisyui.com)
* [nytimes.com](http://nytimes.com)
* [stake.com](http://stake.com)
* [creately.com](http://creately.com)

### Comparing Next.js and SvelteKit

{% bookshop 'markdown/tablesaw' content_markdown: "<table><thead><tr><th> </th><th><strong>Next.js</strong></th><th><strong>SvelteKit</strong></th></tr></thead><tbody><tr><td><strong>First release</strong></td><td>2016</td><td>2020</td></tr><tr><td><strong>Built with</strong></td><td>JavaScript (React)</td><td>JavaScript</td></tr><tr><td><strong>Templating language(s)</strong></td><td>JSX</td><td>Svelte</td></tr><tr><td><strong>Plugins</strong></td><td>Yes</td><td>Yes</td></tr><tr><td><strong>GitHub stars</strong></td><td>96k+</td><td>13k+</td></tr><tr><td><strong>Templates / Themes</strong></td><td>Yes (Next.js uses the term ‘Template’.)</td><td>Yes (SvelteKit uses the term ‘Themes’.)</td></tr><tr><td><strong>Licence</strong></td><td>MIT</td><td>MIT</td></tr><tr><td><strong>Installation requirements</strong></td><td>Via npm</td><td>Via npm</td></tr><tr><td><strong>Build speeds</strong></td><td>Fast</td><td>Faster</td></tr><tr><td><strong>Multilingual and i18n</strong></td><td>Multilingual with a little work; i18n built-in.</td><td>Via <code>SvelteKit-i18n</code></td></tr><tr><td><strong>Easy WordPress / legacy converter</strong></td><td>No; you’ll need to convert to Markdown and then clean up your content.</td><td>No; available through third-parties</td></tr><tr><td><strong>Learning curve</strong></td><td>Moderate; it will help to have React experience.</td><td>Minimal; it will help to have Svelte experience.</td></tr><tr><td><strong>Documentation</strong></td><td><a href=\"https://nextjs.org/docs/getting-started\">nextjs.org</a></td><td><a href=\"https://kit.svelte.dev/docs/introduction\">kit.svelte.dev</a></td></tr><tr><td><strong>Support communities</strong></td><td><a href=\"https://discord.com/invite/bUG2bvbtHy\">Next.js Discord</a></td><td><a href=\"https://discord.com/invite/svelte\">SvelteKit Discord</a></td></tr><tr><td><strong>Twitter accounts</strong></td><td><a href=\"https://twitter.com/nextjs\">Next.js Twitter</a></td><td><a href=\"https://twitter.com/sveltejs\">Svelte Twitter</a></td></tr><tr><td><strong>GitHub repos</strong></td><td><a href=\"https://github.com/vercel/next.js\">github.com/vercel/next.js</a></td><td><a href=\"https://github.com/sveltejs/kit\">github.com/sveltejs/kit</a></td></tr><tr><td><strong>Code splitting</strong></td><td>Yes (automatic)</td><td>Yes (automatic)</td></tr><tr><td><strong>Image optimization</strong></td><td>Yes</td><td>Yes</td></tr><tr><td><strong>Disable runtime JS</strong></td><td>Yes (experimental feature)</td><td>Yes</td></tr><tr><td><strong>Environment variables</strong></td><td>Yes</td><td>Yes</td></tr><tr><td><strong>Content security policy</strong></td><td>Via <code>next-secure-headers</code></td><td>Yes (built-in)</td></tr><tr><td><strong>CloudCannon support</strong></td><td>Yes — your <a href=\"https://cloudcannon.com/nextjs-cms/\">Next.js</a> sites (in SSG mode) can be editable in minutes with CloudCannon.</td><td>Yes — your <a href=\"https://cloudcannon.com/sveltekit-cms/\">SvelteKit</a> sites (in SSG mode) can be editable in minutes with CloudCannon.</td></tr></tbody></table>" %}

### Which should I choose?

The short answer — as always — is that it depends on you, your team, and your plan for the future of your project.

**Choose Next.js** if you (or your team) already have React knowledge and/or components, or if you know your website project or app will expand in size and/or scope beyond a simple static site in the near future. Don’t forget that Next.js is not only a static site generator. Since it uses both static and server-side generated pages, it is a hybrid framework (or meta framework). The reduction or elimination of upfront construction time makes Next.js an appealing solution for content-rich websites with many pages (100k+).

Similar to that, Next.js's server-side rendering allows developers more control over scaling for huge e-commerce stores that depend on search and filtering to help users discover one product among thousands. It is difficult to consider another framework if your team is charged with launching a production-ready solution as quickly as feasible. Next.js will also benefit larger development teams with short timelines to scale their architecture.

**Choose SvelteKit** if you (or your team) already have Svelte knowledge and/or components, or if you expect your project to expand in size and/or scope beyond a simple static site in the foreseeable future. Like Next.js, SvelteKit is also a hybrid/meta framework that effectively reduces upfront construction time. Although, SvelteKit is even faster than Next.js, making it another great choice for content-rich projects. SvelteKit provides developers with greater power over scaling for extensive e-commerce stores dependent on filtering, and shorter timelines for scaling architecture.

The primary benefit of choosing SvelteKit as opposed to Next.js is the ability to work with Svelte. Surveys, like [this one](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/), show that developer satisfaction is greater with Svelte compared to React. Advantages of Svelte include writing less boilerplate code, which allows developers to focus on creating solutions, easily creating reactive variables, and eliminating virtual DOM which improves performance speed and reliability.

### Choose either — or both — with CloudCannon

CloudCannon’s focus is, and always has been, making content editing and production more accessible to everyone, no matter the use case. Accordingly, we provide excellent support for both Next.js and SvelteKit, meaning we’re here for you whichever approach you choose. With our Git-based CMS, your content teams will be able to easily build pages in an intuitive visual editor, while developers benefit from our flexible approach to configuration and content management.

We’ve published a series of tutorials on [Getting Set Up In SvelteKit](/tutorials/sveltekit-beginner-tutorial/), and we've also created a comprehensive overview (and video guide) of [How to get started with Next.js and CloudCannon](https://cloudcannon.com/documentation/articles/nextjs-starter-guide/?ssg=Next.js)[.&nbsp;](https://cloudcannon.com/documentation/articles/nextjs-starter-guide/?ssg=Next.js)
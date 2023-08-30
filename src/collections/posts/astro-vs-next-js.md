---
_schema: default
title: Astro vs. Next.js
breadcrumb_title:
description: >-
  Astro is a UI-agnostic MPA framework built for speed, while Next.js is a
  React-based SPA framework with a strong focus on features. Read on to compare
  these two SSGs and determine if you should choose Astro and support the
  underdog, or choose the tried-and-true Next.js.
draft: false
series:
image: https://cc-dam.imgix.net/Astro vs. Nextjs.png
date: 2023-04-11T09:20:00+12:00
hide_publish_date: false
tags:
  - Astro
  - Next.js
author: 8be0c187-5378-43bd-9a1e-85ed1c49b51d
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch your Astro or Next.js website today
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
  featured_image: https://cc-dam.imgix.net/astro-vs-nextjs.png
  featured_image_alt: Astro vs. Next.js
ssg_frameworks:
  - astro
  - nextjs
---
#

*Last updated September 1st 2023.*

Why compare <a target="_blank" href="https://astro.build/">Astro</a> and <a target="_blank" href="https://nextjs.org/">Next.js</a>? Astro is the new kid on the block in the web development world, being relatively new to the market but quickly gaining interest. Next.js is arguably the most popular website development framework, having become the go-to for some of the world’s largest companies like OpenAI, Hulu, and Vimeo. Astro is a UI-agnostic MPA framework built for speed, while Next.js is a React-based SPA framework with a strong focus on features.

As always, the choice between static site generators will depend on a multitude of factors. Your individual use case, you and your team’s web development experience, as well as language and workflow preferences all have a part to play. The good news is, with CloudCannon’s <a target="_blank" href="https://cloudcannon.com/astro-cms/">Astro</a> and <a target="_blank" href="https://cloudcannon.com/nextjs-cms/">Next.js</a> support, whichever tool you choose for your static sites, you’ll gain the advantages of flexible development tooling, accessible content management, and visual content editing and page building. With both <a target="_blank" href="https://cloudcannon.com/blog/out-of-this-world-support-for-all-astro-users/">Astro support</a> and <a target="_blank" href="https://cloudcannon.com/blog/enhanced-cloudcannon-support-for-next-js-users/">Next.js support</a> having been released out of beta in 2023, there’s no better time to start your new project. However, it should be noted that CloudCannon’s support for Astro and Next.js is limited to SSG capabilities, and does not include SSR.

Read on to compare these two SSGs and determine if you should choose Astro and support the underdog, or choose the tried-and-true Next.js.

**TL;DR** – choose Astro for content-rich websites with less interactivity, choose Next.js for highly interactive feature-rich websites that are more application-like.

### What is Astro?

Used by over 100,000 developers and teams around the world, Astro is the fastest growing static site generator. Although this framework is relatively new, it should not be ignored. First released in 2021, the most recent update to Astro,&nbsp;<a rel="noopener" target="_blank" href="https://docs.astro.build/en/guides/upgrade-to/v3/">version 3.0</a>, features the release of View Transitions, the &lt;Image /&gt; component, React Fast Refresh, supercharged rendering, the 'astro: Namespace', and more! Astro is designed for building content-rich websites, a focus that lets them provide performance features that can’t be matched by more application-focused frameworks. This static site generator is ideal for use cases like marketing sites, publishing sites, documentation sites, blogs, portfolios, and even e-commerce sites.

Astro leverages server-side rendering by keeping everything in HTML, CSS, Javascript, or Typescript. This eliminates the need to learn a server-side language, and instead offering opt-in complexity. Astro makes things as simple as possible while you onboard, letting you incrementally reach for new features as you go. Astro takes a Multi Page Application (MPA) approach, which improves page performance metrics like <a target="_blank" href="https://developer.chrome.com/docs/lighthouse/performance/interactive/">Time to Interactive (TTI)</a>. This is critical for content-focused websites since first-load performance is essential. Javascript often slows sites since users’ devices rarely match the speed of a developers laptop. That is why Astro’s goal is to be fast by default.

Astro is more approachable than Next.js for those with less web development experience. You can use any UI component languages you know: React, Preact, Svelte, Vue, Solid, Lit, and more are all supported. The built in UI language `.astro` makes it easy to use progressive enhancement and accessibility patterns without any overhead. Astro’s features include component syntax, file-based routing, asset handling, a build process, bundling, optimizations, data-fetching, and more. And if you need further control you have access to over <a target="_blank" href="https://astro.build/integrations/">100+ integrations</a> like React, Svelte, Vue, Tailwind CSS, MDX, and image optimizations, to name a few.

Astro also leverages <a target="_blank" href="https://docs.astro.build/en/concepts/islands/">Astro Islands</a>, which are interactive UI components on otherwise static HTML pages. You can use any supported UI framework (React, Svelte, Vue, etc.) or even mix and match them to render islands in the browser in isolation via partial hydration. The UI component is automatically rendered to HTML ahead of time and then all the JavaScript is stripped out to keep your static sites fast by default. When Javascript is required for interactive UI you simply create an island of interactivity without needing to alter the entire page.

Beyond performance gains, island architecture also allows for loading in parallel. This means components can load at the same time and hydrate in isolation. So high-priority components can become interactive without having to wait for heavier components on the same page. You can customize this further by attaching a special <a target="_blank" href="https://docs.astro.build/en/reference/directives-reference/#client-directives">client directive</a> that tells Astro exactly when and how to render each component. Overall, Astro has gained so much interest in so little time because it lets developers build extremely fast static websites, with the flexibility of any UI language, and the ability to easily embed interactive islands. What’s more, Astro offers fantastic <a target="_blank" href="https://docs.astro.build/en/getting-started/">documentation</a>, and the team is great at educating and supporting new users.

### Sites made with Astro

* <a target="_blank" href="https://create.t3.gg/">t3.gg</a>
* <a target="_blank" href="https://roadmap.sh/">roadmap.sh</a>
* <a target="_blank" href="https://pngtree.com/">pngtree.com</a>
* <a target="_blank" href="https://getbem.com/">getbem.com</a>

### What is Next.js?

Next.js is a popular React framework backed by Vercel that is used by some of the world’s biggest companies. It provides a rich set of features out of the box, including server-side rendering, client-side rendering, API routes, and dynamic imports. As a static site generator it takes care of the tooling and configuration required by React while also giving developers' applications more structure, features, and optimizations.

First released in 2016, with the latest&nbsp;<a target="_blank" rel="noopener" href="https://nextjs.org/blog/next-13-4">Next.js 13.4</a>&nbsp;release boasting major improvements. These include the marking of stability for the App Router, and the introduction of Turbopack, and Server Actions. Next.js is widely used by developers for building complex and feature-rich websites, web applications, and e-commerce platforms. It also has a large and active community that provides support, documentation, and a rich ecosystem of plugins and tools.

Next.js is arguably the most widely used framework among developers with React expertise. React offers a virtual DOM program and server-side rendering, which makes complex applications run faster. The stated goal of Next.js is to bring full-stack functionality to the frontend. With new Rust-based transpilation and minification, and Turbopack replacing Webpack, Next.js is well positioned to continue acting as the go-to powerhouse for web developers.

Next.js takes a Single-Page Application (SPA) approach, meaning that most HTML is rendered locally with JavaScript running on the browser. Usually, local rendering slows down a page, but Next.js mitigates this by including the option for server-side rendering on the first page load. It is worth noting that even though local rendering is initially slower it benefits future page loading. This will improve the experience for long-lived users. Similarly, a SPA’s client routing offers faster future page loads once the web application is fully loaded in the browser. Next.js’s increased control over page rendering also provides more powerful transitions across page navigation.

Next.js uses an app-like architecture that is ideal for complex use cases that require multi-page state management. The entire website is run as a single application that maintains state and memory across many pages. Overall, Next.js has become the web development powerhouse that it is today because it allows React developers to build highly interactive web applications without compromising on performance. What’s more is that there is a massive community backing Next.js, meaning you can easily find any resources needed for your Next.js project.

### Sites made with Next.js?

* <a target="_blank" href="https://chat.openai.com/chat">chat.openai.com</a>
* <a target="_blank" href="https://asana.com/">asana.com</a>
* <a target="_blank" href="https://codesandbox.io/">codesandbox.io</a>
* <a target="_blank" href="https://linktr.ee/">linktr.ee</a>

### Comparing Next.js and Astro

<table><thead><tr><th> </th><th>Next.js</th><th>Astro</th></tr></thead><tbody><tr><td><strong>First release</strong></td><td>2016</td><td>2021</td></tr><tr><td><strong>GitHub stars</strong></td><td>111k+</td><td>33.1K+</td></tr><tr><td><strong>License</strong></td><td>MIT</td><td>MIT</td></tr><tr><td><strong>Build speeds</strong></td><td>Fast</td><td>Faster</td></tr><tr><td><strong>Built with</strong></td><td>JavaScript</td><td>JavaScript</td></tr><tr><td><strong>Templating language(s)</strong></td><td>JSX</td><td>Astro, HTML, Markdown, JavaScript, JSX</td></tr><tr><td><strong>Supported UI framework(s)</strong></td><td>React</td><td>React, Preact, Svelte, Vue, Solid, Lit</td></tr><tr><td><strong>Installation requirements</strong></td><td>Node.js must be installed</td><td>Node.js must be installed</td></tr><tr><td><strong>Plugins</strong></td><td>Yes — limited</td><td>Yes — many</td></tr><tr><td><strong>Themes / Templates / Starters</strong></td><td>Yes (templates)</td><td>Yes (themes)</td></tr><tr><td><strong>TypeScript support</strong></td><td>Yes</td><td>Yes</td></tr><tr><td><strong>Easy WordPress / legacy converter</strong></td><td>No; you’ll need to convert to Markdown and then clean up your content</td><td>No; you’ll need to convert to Markdown and then clean up your content</td></tr><tr><td><strong>Built-in module bundler</strong></td><td>webpack</td><td>Snowpack</td></tr><tr><td><strong>Disable runtime JS</strong></td><td>Yes</td><td>No runtime JS required by default</td></tr><tr><td><strong>Data Fetching</strong></td><td>Yes</td><td>Yes</td></tr><tr><td><strong>Internationalization (i18n)</strong></td><td>Built-in</td><td>Yes, via integration</td></tr><tr><td><strong>Hot reloading</strong></td><td>Yes</td><td>Yes</td></tr><tr><td><strong>Code splitting</strong></td><td>Automatic</td><td>Automatic</td></tr><tr><td><strong>Image optimization</strong></td><td>Yes</td><td>Yes</td></tr><tr><td><strong>Environment variables</strong></td><td>Yes</td><td>Yes</td></tr><tr><td><strong>Content security policy</strong></td><td>Via next-secure-headers</td><td>Custom HTTP headers rules</td></tr><tr><td><strong>Learning curve</strong></td><td>Moderate; it will help to have React experience</td><td>Easy; it will help to have JavaScript experience</td></tr><tr><td><strong>Documentation</strong></td><td><a target="_blank" href="https://nextjs.org/docs/getting-started">nextjs.org</a></td><td><a target="_blank" href="https://docs.astro.build/en/getting-started/">astro.build</a></td></tr><tr><td><strong>GitHub repos</strong></td><td><a target="_blank" href="https://github.com/vercel/next.js">github.com/vercel/next.js</a></td><td><a target="_blank" href="https://github.com/withastro/astro">github.com/withastro/astro</a></td></tr><tr><td><strong>Support communities</strong></td><td><a target="_blank" href="https://discord.com/invite/bUG2bvbtHy">Next.js Discord</a></td><td><a target="_blank" href="https://discord.com/invite/grF4GTXXYm">Astro Discord</a></td></tr><tr><td><strong>Twitter accounts</strong></td><td><a target="_blank" href="https://twitter.com/nextjs">Next.js Twitter</a></td><td><a target="_blank" href="https://twitter.com/astrodotbuild">Astro Twitter</a></td></tr><tr><td><strong>Site Type</strong></td><td>Pre-rendered static SPAs &amp; websites requiring many interactive React components.</td><td>Content-rich, mostly static MPAs with progressive enhancement &amp; websites requiring flexible framework usage.</td></tr><tr><td><strong>Use case(s)</strong></td><td>Large e-commerce websites, complex marketing websites</td><td>Small e-commerce websites, marketing websites, blogs, portfolios, documentation websites</td></tr><tr><td><strong>CloudCannon support</strong></td><td>Yes — your&nbsp;<a target="_blank" href="https://cloudcannon.com/nextjs-cms/">Next.js</a>&nbsp;sites (in SSG mode) can be editable in minutes with CloudCannon</td><td>Yes — your&nbsp;<a target="_blank" href="https://cloudcannon.com/astro-cms/">Astro</a>&nbsp;sites can be editable in minutes with CloudCannon</td></tr></tbody></table>

### Which should I choose?

The short answer – as always – is that it depends on you, your team, and your project.

**Choose Astro** if you (or your team) are newer to web development and would benefit from a gentler learning curve. With Astro’s opt-in complexity, you can build an entire website with just HTML and CSS. With server-side rendering you won’t need to worry about the complexity of hook and stale closures, atoms, selectors, reactions, or derivations.

For more experienced developers, you may still want to choose Astro as it’s flexible enough to let you capitalize on your accumulated knowledge by letting you mix and match multiple UI frameworks within a single project. You can use React, Preact, Solid, Svelte, Vue, and Lit in your Astro project. This also makes Astro the superior choice if you predict future project migrations as being UI-agnostic means you can avoid project lock-in to a single framework.

Another reason to make the switch to Astro is if your project is content heavy and only requires limited interactivity. Your content-rich static sites will be significantly faster using Astro since less JavaScript is served. For example, Astro sites can <a target="_blank" href="https://twitter.com/t3dotgg/status/1437195415439360003">load 40% faster with 90% less JavaScript</a> compared to Next.js. Because Astro only hydrates what's needed and leaves the rest as static HTML, you get to decide which components need to run in the browser. This selective hydration paired with Astro’s island architecture for interactive components means you can build lightning-fast websites. The increase in performance will result in improved SEO and user experience for your Astro site.

For example, it would make sense to choose Astro if you are just getting started with web development and want a flexible tool for building simple, yet high performing static sites. It would also be an ideal choice if you want more flexibility to leverage your development experience by mixing and matching frameworks to build the fastest websites for use cases like marketing sites, documentation, blogs, and smaller e-commerce stores.

**Choose Next.js** if you (or your team) already has React experience and want to benefit from a plethora of features, plugins, and community resources. Next.js’s popularity and longevity to date means that it boasts a very large community of users. This makes a smooth developer experience with users always making new Next.js resources.

Next.js is also the obvious choice for React developers building complex static websites that require multi-page state management. If your project includes app-like features and you prefer to work in React, then Next.js is a no-brainer. Although Astro can build faster static websites compared to Next.js, Astro was not designed for sites that need multi-page state management. This is where Next.js shines as it offers fantastic site performance and developer experience in comparison to other application-focused frameworks. Next.js reduces the upfront construction time needed for complex projects and allows greater control over scaling for huge e-commerce sites.

For instance, it would make sense to choose Next.js if you already know React and you are building a massive e-commerce store that needs to scale, or a highly interactive website that works more like an app. If you are building this type of site but don’t prefer React, then a static site generator like <a target="_blank" href="https://cloudcannon.com/sveltekit-cms/">SvelteKit</a> or <a target="_blank" href="https://cloudcannon.com/nuxtjs-cms/">Nuxt.js</a> would be a suitable alternative.

### Choose either – or both – with CloudCannon

CloudCannon’s focus is, and always has been, making content editing and production more accessible to everyone, no matter the use case. Accordingly, we provide excellent support for both Astro and Next.js, meaning we’re here for you whichever approach you choose. With our Git-based CMS, your content teams will be able to easily build pages in an intuitive visual editor, while developers benefit from our flexible approach to configuration and content management.

We’ve published comprehensive guides for <a target="_blank" href="https://cloudcannon.com/documentation/guides/astro-starter-guide/"><strong>Getting started with Astro</strong></a> and <a target="_blank" href="https://cloudcannon.com/documentation/guides/nextjs-starter-guide/?ssg=Next.js"><strong>Getting started with Next.js and CloudCannon</strong></a> (including a video) to help you set up your project. And if you would like to build a live-editable website using Astro and CloudCannon's Open source component workflow, <a target="_blank" rel="noopener" href="https://cloudcannon.com/blog/introducing-bookshop/"><strong>Bookshop</strong></a>, you can follow along this **<a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/guides/bookshop-astro-guide/">Astro Bookshop Guide</a>**. Or if you are new to Astro, check out our <a target="_blank" rel="noopener" href="https://cloudcannon.com/tutorials/astro-beginners-tutorial-series/"><strong>Beginner's Astro Tutorial Series</strong></a> to help you set up your first Astro site!
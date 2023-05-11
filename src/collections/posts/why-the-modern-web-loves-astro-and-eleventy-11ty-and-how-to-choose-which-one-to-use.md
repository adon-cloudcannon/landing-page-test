---
_schema: default
title: "Why the modern web loves Astro and Eleventy (11ty) –\_and how to choose which one to use"
description: >-
  Compare Astro and 11ty (Eleventy) to find out why these two static site
  generators are so powerful, and choose which one is best for your next
  project.
draft: true
series:
image: https://cc-dam.imgix.net/astro-and-11ty.png
date: 2023-05-13T05:04:00+12:00
hide_publish_date: false
tags:
  - Astro
  - Eleventy
author: 8be0c187-5378-43bd-9a1e-85ed1c49b51d
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch your Astro or Eleventy website today
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
  featured_image: https://cc-dam.imgix.net/Astro-and-11ty.png
  featured_image_alt: Astro vs. 11ty (Eleventy)
---
<a target="_blank" rel="noopener" href="https://astro.build/">Astro</a> and <a target="_blank" rel="noopener" href="https://www.11ty.dev/">Eleventy</a> (11ty) are two of the most popular (and arguably most similar) technologies available for static site generation. So what is it about their approach to static sites that resonates so strongly with the modern web development community? In short, both focus on content-heavy use cases, both reduce boilerplate code for faster websites, and both take a multi-page application (MPA) approach to web development, encouraging progressive enhancement.

Is this the software equivalent of convergent evolution, with both sets of tooling following the same trends or guiding principles (static first, with a dual emphasis on build speed and flexibility)? Or are there significant differences that will impact your developer experience? And how should you choose between Astro and 11ty? Let’s explore both static site generators (SSGs), and find out.

Whichever SSG you choose, with CloudCannon’s <a target="_blank" rel="noopener" href="https://cloudcannon.com/astro-cms/">Astro</a> and <a target="_blank" rel="noopener" href="https://cloudcannon.com/eleventy-cms/">Eleventy</a> support, you and your team can benefit from flexible development tooling, accessible content management, and visual page building and content editing. Now that CloudCannon’s <a target="_blank" rel="noopener" href="https://cloudcannon.com/blog/out-of-this-world-support-for-all-astro-users/">Astro support</a> and <a target="_blank" rel="noopener" href="https://cloudcannon.com/blog/new-eleventy-features-a-new-theme-and-full-eleventy-support/">Eleventy support</a> have both been released out of beta, there’s no better time to get started on a new project. It’s worth mentioning that CloudCannon’s content management support is limited to static site generation (SSG), and does not include server-side rendering (SSR).

---

### Table of contents

* [What is Astro?](#what-is-astro)
* [What is Eleventy?](#what-is-eleventy)
* [Similarities between Astro and Eleventy](#astro-eleventy-similarities)
* [Differences between Astro and Eleventy](#astro-eleventy-differences)
* [Astro vs. 11ty (Eleventy) comparison at a glance](#astro-eleventy-comparison)
* [Astro vs. 11ty (Eleventy) usage trends](#astro-eleventy-usage)
* [Which should I choose?](#which-should-i-choose)

---

## What is Astro?{#what-is-astro}

Astro is known as the "all-in-one web framework for building fast, content-focused websites". It is the fastest-growing static site generator, with over 100,000 developers and teams using it worldwide. First released in 2021, the most recent (at the time of writing) update to Astro, <a target="_blank" rel="noopener" href="https://astro.build/blog/astro-220/">version 2.2</a>, features CDN support for assets, and an `image()` scheme helper API change. Astro has attracted such interest so quickly because it helps developers build lightning-fast content-rich websites, with the flexibility of any UI language, and the option to easily embed interactive islands.

### Astro’s key features

Astro differentiates itself from other frameworks by offering component islands, server-first API design, zero Js by default, edge-ready deployment, customizable integrations, and UI-agnostic support. This flexibility lets you use React, Preact, Solid, Svelte, Vue, and Lit in your Astro project.

### Getting started with Astro

Astro is known for its superior developer experience; take a look at Astro reviews across the web and you’ll notice that this is one of its most frequent praises. You can build static sites in Astro with just HTML and CSS, or take advantage of Astro’s opt-in complexity by mixing and matching your favourite UI frameworks.

### Astro community & ecosystem

Astro also provides excellent&nbsp;<a target="_blank" rel="noopener" href="https://docs.astro.build/en/getting-started/">documentation</a>, and the Astro team is fantastic at supporting new users. You may have already come across <a target="_blank" rel="noopener" href="https://twitter.com/bholmesdev?lang=en">Ben Holmes</a> on socials media, Astro’s “guy with the whiteboard” who makes easy to understand Astro tutorials. The Astro community is very active on <a target="_blank" rel="noopener" href="https://twitter.com/astrodotbuild">Twitter</a> and&nbsp;<a target="_blank" rel="noopener" href="https://astro.build/chat">Discord</a>, with questions answered quickly. There is also a variety of themes, components, and plugins being created by the community, with <a target="_blank" rel="noopener" href="https://astro.build/themes/">Astro’s themes directory</a> being a great place to find a theme or submit your own.

### Astro use cases

Astro’s focus on fast content-rich websites makes it perfect for use cases such as marketing sites and landing pages, blogs, portfolios, documentation websites, and even e-commerce sites with mostly static content.

### Sites made with Astro

* **<a target="_blank" rel="noopener" href="https://create.t3.gg/">t3.gg</a>**
* **<a target="_blank" rel="noopener" href="https://roadmap.sh/">roadmap.sh</a>**
* **<a target="_blank" rel="noopener" href="https://pngtree.com/">pngtree.com</a>**
* **<a target="_blank" rel="noopener" href="https://getbem.com/">getbem.com</a>**

## What is Eleventy?

Eleventy (also referred to as 11ty) is known as the “simpler static site generator”. It is the only purely static site generator that has reliably continued to grow in usage share, making Eleventy the clear choice for purely static use cases. First released in 2018, the most recent (at the time of writing) update to 11ty, <a target="_blank" rel="noopener" href="https://www.11ty.dev/blog/eleventy-v2/">version 2.0</a>, features smaller and more secure files, faster builds, more plugins, template language aliasing, and event arguments. Eleventy has successfully maintained interest over time by focusing on speed and flexibility. With Eleventy, developers can build faster static sites, while leveraging the flexibility of multiple template languages — all without being tied to any frameworks.

### Eleventy’s key features

Eleventy differentiates itself from other static site generators by offering flexible configuration options, incremental adoption, enabling you to work with your project’s existing directory structure, allowing you to work in multiple independent templating languages, while not requiring the use of Javascript framework. With 11ty you can choose to work in HTML, Markdown, WebC, JavaScript, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug, and Custom.

### Getting started with Eleventy

Eleventy is known for its flexibility and simplicity, both of which help to flatten the learning curve while allowing more customizability. In this way, 11ty adapts to you and your preferences. You can build static websites in your way in Eleventy, while maintaining full control over the performance of your site and extending complexity as needed.

### Eleventy community and ecosystem

Eleventy offers helpful <a target="_blank" rel="noopener" href="https://www.11ty.dev/docs/">documentation</a>, and benefits from an active community of 11ty developers. Eleventy is active on both <a target="_blank" rel="noopener" href="https://twitter.com/eleven_ty">Twitter</a> and <a target="_blank" rel="noopener" href="https://fosstodon.org/@eleventy">Mastodon</a>, with 11ty creator, <a target="_blank" rel="noopener" href="https://twitter.com/zachleat">Zach Leatherman</a>, personally engaging with users. You can ask questions about Eleventy on the dedicated <a target="_blank" rel="noopener" href="https://www.11ty.dev/blog/discord/">Discord</a> channel, <a target="_blank" rel="noopener" href="https://github.com/11ty/eleventy/discussions">GitHub Discussions</a> page, or the <a target="_blank" rel="noopener" href="https://github.com/11ty/eleventy/issues">Issue tracker</a>. The <a target="_blank" rel="noopener" href="https://www.11ty.dev/speedlify/">Eleventy Leaderboards</a> are a great place to check out community made starter projects (11ty calls themes starters) and evaluate them based on Lighthouse scores. Eleventy also offers a growing list of both official and community contributed <a target="_blank" rel="noopener" href="https://www.11ty.dev/docs/plugins/">plugins</a>. Additionally, the <a target="_blank" rel="noopener" href="https://www.youtube.com/@EleventyVideo/featured">11ty YouTube Channel</a> and <a target="_blank" rel="noopener" href="http://11ty.rocks">11ty.rocks</a> are worth mentioning as great resources for learning to build with Eleventy.

### Eleventy use cases

Eleventy’s focus on fast and flexible static sites makes it perfect for marketing websites with progressive enhancement, blogs, portfolios, documentation sites, and mostly static ecommerce websites.

### Sites Made with Eleventy

* **<a target="_blank" rel="noopener" href="https://12daysofweb.dev/">12daysofweb.dev</a>**
* **<a target="_blank" rel="noopener" href="https://css-irl.info/">css-irl.info</a>**
* **<a target="_blank" rel="noopener" href="https://chromatichq.com/">chromatichq.com</a>**
* **<a target="_blank" rel="noopener" href="https://www.zachleat.com/">zachleat.com</a>**

## Similarities between Astro and

Astro and Eleventy are arguably more similar than they are different. You really can’t go wrong with either of these static site generators, so let’s take a look at what makes them both great before jumping into the details of their differences.

### Javascript based

Both Astro and 11ty are modern JavaScript-based website builders. Using JavaScript to generate static sites eliminates the need for a client-side framework. This doesn’t mean you can’t use a client-side framework, it just means that it is optional. This makes Astro and Eleventy more beginner friendly since you can start building static sites with just HTML and CSS.

### Zero config

Eleventy and Astro are both `zero config` by default, allowing for extensibility with flexible configuration options. This means that 11ty and Astro will work well with your existing project structure.

### Flexible content authoring

Both Astro and Eleventy let you use any content authoring system, making them great choices for content heavy use cases like blogs, portfolios, documentations, and marketing sites. You can write content directly in Astro or 11ty using Markdown or MDX, or leverage a third-party Content Management System (CMS) like CloudCannon to allow less tech savvy content editors to manage content visually.

### MPAs

Astro and Eleventy both build multi-page applications (MPAs). Multi-page architecture offers a number of benefits such as better empty-cache performance, energy efficiency, search by default, better privacy, as well as inclusivity and robustness by default. All this means you can build faster, more secure, and more accessible static sites by eliminating the large client JavaScript bundles customary to Single Page Applications (SPAs).

### Progressive enhancement

Both Astro and 11ty use progressive enhancement. Progressive enhancement means starting with a solid foundation of accessible, semantic HTML, and then layering on more advanced features as the user’s device and browser allows. The implications of this are that websites can be designed to work for everyone, even users on older browsers or devices with slower internet connections. Progressive enhancement also makes websites more accessible for users with disabilities, and improves website performance by reducing load times.

### Island architecture

Astro and 11ty both offer an island architecture web development approach. This means you can break your site into isolated islands of functionality, each with its own serverless function that can be invoked when necessary. With these ‘islands’ of interactivity you can incorporate dynamic components with rich user experiences that adapt to user input and changing data, while still benefitting from the speed and reliability of static site generation. This approach to building static sites can improve site performance and reduce infrastructure costs, without compromising on engaging experiences. Although, it is worth noting that while <a target="_blank" rel="noopener" href="https://docs.astro.build/en/concepts/islands/">island architecture</a> has always been one of Astro’s core offerings, interactive ‘<a target="_blank" rel="noopener" href="https://github.com/11ty/is-land">11ty is-lands</a>’ are a relatively new addition to Eleventy, available via plugin.

### Partial Hydration

Both Astro and Eleventy use partial hydration for interactive islands. Partial hydration combines the benefits of server-side rendering and client-side rendering by selectively hydrating parts of the web page with JavaScript (the interactive island components), while still using static site generation for the rest of the content. The ability to choose which parts of a page to hydrate with JavaScript helps reduce the overall amount of JavaScript, which once again improves performance, reduces infrastructure costs, and makes your site more accessible to users. Up until the recent addition of island architecture 11ty’s purely static site generation was hydration-less, meaning that Astro is the leader of this category.

### UI Agnostic

Astro and 11ty are UI agnostic static site generators, meaning you can use any UI framework you choose to create interactive components. While it is possible to use any framework in both Astro and 11ty, Astro provides built-in support for React, Preact, Svelte, Vue, Solid, and Lit, while Eleventy offers built-in support for Petite Vue, Vue, Svelte, Preact, Lit, and Alpine.js.

## Differences between Astro and Eleventy

The difference between Astro and Eleventy boils down to the finer details. Let’s take a look at how these static site generators differ, and how these differences will impact your developer and user experience, as well as your sites performance.

### Templating languages

While Eleventy supports a numerous templating languages, including HTML, Markdown, WebC, JavaScript, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug, and Custom, Astro uses `.astro` layouts, pages, and components for most page templating. Eleventy’s use of independent templating languages means you can mix and match your favorite templating languages without being held hostage to a custom format. This decoupling makes future migrations easier should you choose to use a different syntax. Comparatively, Astro’s use of <a target="_blank" rel="noopener" href="https://docs.astro.build/en/core-concepts/astro-components/">Astro components</a> for templating offers reusable UI, like headers, and contain small snippets of HTML, or even entire page layouts. Astro components are HTML-only with no client-side runtime. This makes Astro more opinionated than 11ty in terms of templating.

### Asset Management

Bundling CSS, JavaScript, and other assets must be configured manually in Eleventy, whereas asset bundling is built-in to Astro. While built-in bundling reduces complexity, this comes at the cost of reduced flexibility.

### Directory Structure

Astro uses a `src/` directory for all files and metadata needed for querying and processing a site build. In comparison, Eleventy works with your project’s existing directory structure. There is no requirement for an `app` or `pages` directory in 11ty — you can use your structure of choice.

### Routing

While both Astro and 11ty leverage file-based routing systems that are simple, flexible, and easy to use, dynamic routing is a built-in Astro feature, whereas dynamic routing requires additional setup in Eleventy.

### Static Assets

Astro uses a built-in import function to bundle and optimize static assets. In contrast, Eleventy manages static assets by copying files to the output directory, preserving the directory structure.

### Rendering

Eleventy offers a range of template engines for rendering; any of the 12 supported templating languages will work. With 11ty you can choose which engine best suit your needs, or even mix and match templating engines to render your project. On the other hand, Astro uses a combination of JSX and template literals for rendering. In Astro JSX defines the structure and content of components, and template literals define the styles and other attributes. In addition to this, Astro also supports Server-side rendering (SSR), which generates HTML on each request.

### Styling

Astro includes built-in support for CSS styling and the ability to write CSS modules. Although, Astro limits styling options to CSS and CSS-in-JS libraries. Comparatively, 11ty doesn’t provide any built-in styling support, rather 11ty lets you use any CSS preprocessor or library for styling.

### Performance

While both Astro and Eleventy are designed to generate fast and efficient static sites, Astro provides more built-in performance optimizations than Eleventy. Astro’s built-in features like prerendering, image optimization, HTTP/2 push, lazy loading, and code-splitting make it easier to achieve optimal site performance without additional configuration. Nonetheless, although 11ty doesn’t offer these features built-in, you can easily add these features and more with third-party plugins and custom optimizations to generate equally performant sites. In fact, <a target="_blank" rel="noopener" href="https://cloudcannon.com/blog/cloudcannon-com-is-now-built-with-eleventy/">CloudCannon.com is built with Eleventy</a>, and makes use of various third-party tools for performance optimization.

## Astro vs. 11ty (Eleventy) comparison at a glance

<table><thead><tr><th> </th><th>Astro</th><th>Eleventy</th></tr></thead><tbody><tr><td>First release</td><td>2021</td><td>2018</td></tr><tr><td>GitHub stars</td><td>26K+</td><td>13k+</td></tr><tr><td>Licence</td><td>MIT</td><td>MIT</td></tr><tr><td>Build speeds</td><td>Very fast</td><td>Very fast</td></tr><tr><td>Built with</td><td>JavaScript</td><td>JavaScript</td></tr><tr><td>Templating language(s)</td><td>Astro, HTML, Markdown, JavaScript, JSX</td><td>JavaScript, HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug, WebC</td></tr><tr><td>UI Agnostic</td><td>Yes</td><td>Yes</td></tr><tr><td>Supported UI frameworks</td><td>React, Preact, Svelte, Vue, Solid, Lit</td><td>Petite Vue, Vue, Svelte, Preact, Lit, Alpine.js</td></tr><tr><td>Installation requirements</td><td>Node.js must be installed</td><td>Node.js must be installed</td></tr><tr><td>Plugins</td><td>Yes — many</td><td>Yes</td></tr><tr><td>Themes / Templates / Starters</td><td>Yes (themes)</td><td>Yes (starters)</td></tr><tr><td>Easy WordPress / legacy converter</td><td>No; you’ll need to convert to Markdown and then clean up your content</td><td>No; you’ll need to convert to Markdown and then clean up your content</td></tr><tr><td>Disable runtime JS</td><td>No runtime JS required by default</td><td>No runtime JS required by default</td></tr><tr><td>Data Fetching</td><td>Yes</td><td>Yes</td></tr><tr><td>Internationalization (i18n)</td><td>Yes, via integration</td><td>Yes, via plugin</td></tr><tr><td>Hot reloading</td><td>Yes</td><td>Yes</td></tr><tr><td>Code splitting</td><td>Automatic</td><td>Manual</td></tr><tr><td>Image optimization</td><td>Yes</td><td>Yes, via separate dependency</td></tr><tr><td>Environment variables</td><td>Yes</td><td>Yes</td></tr><tr><td>Content security policy</td><td>Custom HTTP headers rules</td><td>Custom HTTP headers rules</td></tr><tr><td>Island Architecture</td><td>Yes</td><td>Yes, via plugin</td></tr><tr><td>Learning curve</td><td>Easy; it will help to have JavaScript experience</td><td>Easy; it will help to have JavaScript experience</td></tr><tr><td>Documentation</td><td><a target="_blank" rel="noopener" href="https://docs.astro.build/en/getting-started/">astro.build</a></td><td><a target="_blank" rel="noopener" href="http://11ty.dev/">11ty.dev</a></td></tr><tr><td>GitHub repos</td><td><a target="_blank" rel="noopener" href="https://github.com/withastro/astro">Astro GitHub</a></td><td><a target="_blank" rel="noopener" href="https://github.com/11ty/eleventy/">11ty GitHub</a></td></tr><tr><td>Support communities</td><td><a target="_blank" rel="noopener" href="https://discord.com/invite/grF4GTXXYm">Astro Discord</a></td><td><a target="_blank" rel="noopener" href="https://discord.gg/GBkBy9u">11ty Discord</a></td></tr><tr><td>Twitter accounts</td><td><a target="_blank" rel="noopener" href="https://twitter.com/astrodotbuild">Astro Twitter</a></td><td><a target="_blank" rel="noopener" href="https://twitter.com/eleven_ty">11ty Twitter</a></td></tr><tr><td>CloudCannon support</td><td>Yes — you can get <a target="_blank" rel="noopener" href="https://cloudcannon.com/astro-cms/">Astro</a>&nbsp;sites editable in minutes with CloudCannon.</td><td>Yes — you can get <a target="_blank" rel="noopener" href="https://cloudcannon.com/eleventy-cms/">11ty</a>&nbsp;sites editable in minutes with CloudCannon.</td></tr></tbody></table>

## Astro vs. 11ty (Eleventy) usage trends

Stability and longevity are important metrics to take into account when considering which static site generator to choose. Usage trends offer useful insights for understanding where both Astro and Eleventy sit in the web development market, how actively each is being developed, and for speculating on the future of these technologies.

### GitHub star history

![Astro and 11ty (Eleventy) GitHub star history](https://cc-dam.imgix.net/star-history-202354.png "Astro and 11ty &#40;Eleventy&#41; GitHub star history")

While GitHub stars are solely a metric for how many users have clicked the star button, whether to indicate a favorite repository, follow active development, recommend similar projects, or just to support friends, it is interesting to compare and contrast Astro and 11ty’s star histories. While Eleventy experienced more of a slow but sustained increase in stars, Astro gained approximately double the stars in half the time. It will be interesting to watch and see if Astro can sustain this growth. You can find an <a target="_blank" rel="noopener" href="https://star-history.com/#11ty/eleventy&amp;withastro/astro&amp;Date">up-to-date star history comparison here</a> to observe any changes.

### npm trends

![Astro and 11ty (Eleventy) npm downloads over time](https://cc-dam.imgix.net/npm-trends.png "Astro and 11ty &#40;Eleventy&#41; npm downloads over time")

npm trends indicate the number of Astro and Eleventy npm downloads over time. Currently, it appears that Astro continues to experience growth in number of downloads, while Eleventy has reached a more steady rate of downloads. Again, it is interesting that Astro has outpaced Eleventy in download number despite being a relatively new framework. You can check out <a target="_blank" rel="noopener" href="https://npmtrends.com/@11ty/eleventy-vs-astro">up-to-date npm trends here</a>.

### Framework usage by satisfaction

The yearly Jamstack survey records frameworks by usage and satisfaction. You can see how <a target="_blank" rel="noopener" href="https://jamstack.org/survey/2022/#frameworks-by-usage-and-satisfaction">Astro and 11ty 2022 usage and satisfaction compares here</a>. This shows Astro entering the early adoption phase characterized by rapid growth and improving satisfaction scores. On the other hand, 11ty is in the regular growth phase, being singled out as the only purely static site generator to show growth in usage share, which indicates its stability.

## Which should I choose?

The choice between Astro and Eleventy ultimately comes down to personal preference. Both Astro and 11ty have impressively fast build times. Both are built for mostly static content-rich use cases with some interactivity. Both are highly flexible and under active development with large user communities. Lastly, both Astro and Eleventy encourage progressive enhancement, helping you prioritize essential static content first and add dynamic functionality later.

But at the end of the day the choice of Astro vs. 11ty depends on what means more to you, flexibility and control, or ease of use.

**Choose Astro** if you prefer a more opinionated framework with many built-in features, or you envision your static site project evolving in a more app-like direction. Although Astro is more opinionated than 11ty, Astro still offers plenty of customizability and opt-in complexity. Astro use of built-in features for templating, styling, asset management, and more can be beneficial to beginners learning web development. The Astro learning curve is also flattened by their fantastic documentation. And unlike Eleventy, Astro offers server-side rendering (SSR) in addition to static site generation (SSG), which means that if you think your project will need more and more interactivity as it evolves, Astro may be the better fit.

**Choose Eleventy** if you prefer more simplicity, flexibility, and granular control over your static site. Although Eleventy does not offer as many built-in features as Astro, Eleventy offers greater ‘pluggability’. With 11ty you are in full control over the HTML rendered to your site pages. This means that as the developer you are in full control over the performance of your project, which may require more work to stay organized, but is a powerful position to be in. You can use your templating languages of choice, and make use of any file structure, asset management, styling, optimizations, and rendering systems you choose when building with Eleventy. It is also worth nothing that 11ty is a more mature technology compared to Astro, meaning 11ty has had more time to work out potential issues and gain a broad user base.

## Choose either – or both – with CloudCannon

Whether you choose Astro or Eleventy for your content-rich static websites, CloudCannon is here to help make your static site generation even easier, with instant (and free) testing domains and a robust Visual Editor. Our focus is, and always has been, making content editing and production more accessible to everyone, no matter the use case. With CloudCannon’s Git-based CMS, your content team can set up site pages in our intuitive Visual Editor, while developers enjoy our flexible approach to configuration and content management.

We have published both an <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/guides/astro-starter-guide/">Astro starter guide</a> and an <a target="_blank" rel="noopener" href="https://cloudcannon.com/documentation/guides/eleventy-cms-get-started-with-cloudcannon/">Eleventy starter guide</a> to help you get your project set up in CloudCannon with ease. Or if you’re just getting started with these technologies for the first time, we have both a comprehensive<s> Astro beginner tutorial</s> and <a target="_blank" rel="noopener" href="https://cloudcannon.com/tutorials/eleventy-beginner-tutorial/">Eleventy beginner tutorial</a> series to lend you a helping hand while you learn.
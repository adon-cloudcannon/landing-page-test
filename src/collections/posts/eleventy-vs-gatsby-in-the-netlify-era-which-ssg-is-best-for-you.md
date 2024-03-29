---
_schema: default
title: Eleventy (11ty) vs. Gatsby in 2023 – which SSG is best for you?
breadcrumb_title: 11ty vs Gatsby
description: >-
  Compare 11ty (Eleventy) and Gatsby to find out why these two static site
  generators are so powerful, and choose which one to use for your next project.
draft: false
series:
image: https://cc-dam.imgix.net/11ty-vs-gatsby.png
date: 2023-06-09T05:01:00+12:00
hide_publish_date: false
tags:
  - Eleventy
  - Gatsby
  - Resources
author: 8be0c187-5378-43bd-9a1e-85ed1c49b51d
permalink: /blog/{{ title | slugify }}/
cta:
  title: Launch your Eleventy or Gatsby website today
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
  featured_image: https://cc-dam.imgix.net/11ty-vs-gatsby.png
  featured_image_alt: 11ty vs. Gatsby
ssg_frameworks:
  - 11ty
  - gatsby
categories:
  - resources
---
With Netlify’s recent <a target="_blank" href="https://www.gatsbyjs.com/blog/gatsby-is-joining-netlify/">acquisition of Gatsby Inc</a>, and their sponsorship last year of <a target="_blank" href="https://www.11ty.dev/blog/eleventy-oss/">full-time open-source development on Eleventy (11ty)</a>, it’s an exciting time to be choosing a new static site generator (SSG) — particularly if and when Netlify makes Gatsby’s composable architecture primitives available across the web. While GatsbyJS has certainly carved out a name for itself in the Jamstack community, for certain use cases its single-page application (SPA) approach is being challenged by lighter-weight static site generators such as Eleventy.

Eleventy’s <a target="_blank" href="https://www.11ty.dev/docs/plugins/partial-hydration/">recent adoption of interactive island architecture</a> means that this previously purely static site generator can more effectively compete with heavyweight frameworks like Gatsby. 11ty’s use of progressive enhancement and multi-page application (MPA) approach to web development makes it easier than ever to achieve top Lighthouse scores, which is often a challenging feat using Gatsby. What’s more, Eleventy is well known for easy site migrations owing to its framework-agnostic approach and its focus on flexibility. So let’s compare 11ty vs. Gatsby to find out whether its worth making the switch from one to the other or, if you’re just starting out, which technology you should choose.

Whichever SSG you choose, with CloudCannon’s&nbsp;**<a target="_blank" href="https://cloudcannon.com/eleventy-cms/">Eleventy</a>**&nbsp;and **<a target="_blank" href="https://cloudcannon.com/gatsby-cms/">Gatsby</a>** support, you and your team can benefit from flexible development tooling, accessible content management, and visual page building and content editing. Now that CloudCannon’s&nbsp;**<a target="_blank" href="https://cloudcannon.com/blog/new-eleventy-features-a-new-theme-and-full-eleventy-support/">Eleventy support</a>**&nbsp;and **<a target="_blank" href="https://cloudcannon.com/blog/full-cloudcannon-support-for-gatsby/">Gatsby support</a>** have both been released out of beta, there’s no better time to get started on a new project.

## What is Eleventy?

Eleventy (11ty) is the “simpler static site generator” that focuses on speed and flexibility. Let’s focus on speed first. Eleventy uses a MPA approach, leveraging progressive enhancement to reduce your site’s time to interactive (TTI) by selectively hydrating interactive components, while keeping the rest of the page static and stripping away unnecessary JavaScript. As such, 11ty helps developers build faster sites than what is possible using Gatsby, which requires more JavaScript to hydrate the web application, costing in longer TTI and input latency.

Now for the flexibility. Eleventy exploits the flexibility of 11 different template languages, without tying you up to any client-side frameworks (although you can still choose to use a framework in 11ty if you like). Eleventy lets you mix and match HTML, Markdown, WebC, JavaScript, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, and Pug for templating. Eleventy also offers flexible configuration options and incremental adoption, making it easy to work with your project’s existing directory structure.

Eleventy’s simplicity and customizability flattens the learning curve for getting started; this static site generator effectively adapts to you and your preferences. With Eleventy you can build static sites your way, with full control over the performance of your website and the option to extend complexity as needed. Learning to use 11ty is made easier with helpful **<a target="_blank" href="https://www.11ty.dev/docs/">documentation</a>** and an active community of passionate developers answering questions, and sharing starters (11ty’s term for structured themes) and plugins. Eleventy is ideal for use cases such as marketing websites with progressive enhancement, blogs, portfolios, documentation sites, and mostly static ecommerce websites.

### Sites made with 11ty

* <a target="_blank" href="https://12daysofweb.dev/">12daysofweb.dev</a>
* <a target="_blank" href="https://css-irl.info/">css-irl.info</a>
* <a target="_blank" href="https://chromatichq.com/">chromatichq.com</a>
* <a target="_blank" href="https://www.zachleat.com/">zachleat.com</a>

## What is Gatsby.js?

Gatsby is a React-based open source framework for building ‘blazing fast’ websites with a SPA approach. It uses React (JSX) for templating and GraphQL for queries. This static site generator was a trail-blazer in the Jamstack world, being the first to incorporate dynamic React components into static sites.

Gatsby has since focused on expanding the composable architecture ecosystem by building Gatsby Cloud as a deploy and hosting platform, and incorporating automatic dependency tracking, scalable data layers, and superior image processing. In early 2023, Gatsby officially joined Netlify, meaning that while Gatsby will continue to evolve, its composable architecture primitives will be integrated into Netlify and made available across other frameworks.

Gatsby is a highly opinionated static site generator with many built-in features including code splitting, prefetching, routing and caching. Although, Gatsby’s approach to data-fetching is arguably the most opinionated; Gatsby creates an internal GraphQL API as a middleware between the frontend template and content sources. This means that you can mesh sources into one big graph in a single GraphQL query, making it easier to use many data sources.

Gatsby’s well-established position in the world of web development makes for a large user base and plugin ecosystem. This active community along with Gatsby’s breadth of built-in features create an excellent developer experience. Gatsby is ideal for use cases such as ecommerce and marketing websites that use React-based interactive components and multiple data sources with APIs, or for building pre-rendered static sites as single page applications (SPAs).

### Sites made with Gatsby

* <a target="_blank" href="https://ahrefs.com/">ahrefs.com</a>
* <a target="_blank" href="https://calendly.com/">calendly.com</a>
* <a target="_blank" href="https://bitwarden.com/">bitwarden.com</a>
* <a target="_blank" href="https://ably.com/">ably.com</a>

## 11ty vs. Gatsby at a glance

{% bookshop 'markdown/tablesaw' content_markdown: "<table><thead><tr><th> </th><th>Eleventy</th><th>Gatsby</th></tr></thead><tbody><tr><td><strong>First release</strong></td><td>2018</td><td>2015</td></tr><tr><td><strong>GitHub stars</strong></td><td>13k+</td><td>54k+</td></tr><tr><td><strong>Licence</strong></td><td>MIT</td><td>MIT</td></tr><tr><td><strong>Build speeds</strong></td><td>Faster</td><td>Slower</td></tr><tr><td><strong>Built with</strong></td><td>JavaScript</td><td>JavaScript</td></tr><tr><td><strong>Templating language(s)</strong></td><td>JavaScript, HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug, WebC</td><td>JSX</td></tr><tr><td><strong>Supported UI frameworks</strong></td><td>Petite Vue, Vue, Svelte, Preact, Lit, Alpine.js</td><td>JSX</td></tr><tr><td><strong>Installation requirements</strong></td><td>Node.js must be installed</td><td>Node.js, Git &amp; Gatsby CLI must be installed</td></tr><tr><td><strong>Plugins</strong></td><td>Yes</td><td>Yes — many</td></tr><tr><td><strong>Themes / Templates / Starters</strong></td><td>Yes (starters)</td><td>Yes (themes)</td></tr><tr><td><strong>Easy WordPress / legacy converter</strong></td><td>No; you’ll need to convert to Markdown and then clean up your content</td><td>No; you’ll need to convert to Markdown and then clean up your content</td></tr><tr><td><strong>Disable runtime JS</strong></td><td>No runtime JS required by default</td><td>Yes, via plugin</td></tr><tr><td><strong>Data Fetching</strong></td><td>Yes</td><td>Yes</td></tr><tr><td><strong>Internationalization (i18n)</strong></td><td>Yes, via plugin</td><td>Yes, via plugin</td></tr><tr><td><strong>Hot reloading</strong></td><td>Yes</td><td>Yes</td></tr><tr><td><strong>Code splitting</strong></td><td>Manual</td><td>Automatic</td></tr><tr><td><strong>Image optimization</strong></td><td>Yes, via separate dependency</td><td>Yes, via plugin</td></tr><tr><td><strong>Environment variables</strong></td><td>Yes</td><td>Yes</td></tr><tr><td><strong>Content security policy</strong></td><td>Custom HTTP headers rules</td><td>Via gatsby-plugin-csp</td></tr><tr><td><strong>Learning curve</strong></td><td>Easy; it will help to have JavaScript experience</td><td>Moderate; it will help to have React &amp; GraphQL experience</td></tr><tr><td><strong>Documentation</strong></td><td><a target=\"_blank\" href=\"https://www.11ty.dev/\">11ty.dev</a></td><td><a target=\"_blank\" href=\"https://www.gatsbyjs.com/docs/\">gatsbyjs.com</a></td></tr><tr><td><strong>GitHub repos</strong></td><td><a target=\"_blank\" href=\"https://github.com/11ty/eleventy/\">github.com/11ty/eleventy</a></td><td><a target=\"_blank\" href=\"https://github.com/gatsbyjs/gatsby\">github.com/gatsbyjs/gatsby</a></td></tr><tr><td><strong>Support communities</strong></td><td><a target=\"_blank\" href=\"https://discord.com/invite/GBkBy9u\">Eleventy Discord</a></td><td><a target=\"_blank\" href=\"https://discord.com/invite/br9rbUE\">Gatsby Discord</a></td></tr><tr><td><strong>Twitter accounts</strong></td><td><a target=\"_blank\" href=\"https://twitter.com/eleven_ty\">Eleventy Twitter</a></td><td><a target=\"_blank\" href=\"https://twitter.com/gatsbyjs\">Gatsby Twitter</a></td></tr><tr><td><strong>CloudCannon support</strong></td><td>Yes — you can get <a target=\"_blank\" href=\"https://cloudcannon.com/eleventy-cms/\">Eleventy</a> sites editable in minutes with CloudCannon.</td><td>Yes — you can get <a target=\"_blank\" href=\"https://cloudcannon.com/gatsby-cms/\">Gatsby</a> sites editable in minutes with CloudCannon.</td></tr></tbody></table>" %}

## Which should I choose?

The choice between Eleventy and Gatsby will depend on your web development experience to date, as well as the type of static sites you want to build. These two static site generators have significantly different learning curves and are generally intended for different use cases. When choosing between 11ty and Gatsby you must consider what you already know, what you are willing to learn, and what type of site you need.

**Choose Eleventy** if you are relatively new to web development and want to build mostly (or even purely) static sites like blogs, portfolios, documentation, or simple business websites. Eleventy’s simplicity makes it much easier to learn compared to Gatsby. With 11ty you can get a site up and running only using HTML and CSS; there is no need to learn how to use any frameworks. Eleventy is also the clear choice for more experienced web developers wanting to mix and match multiple templating languages and frameworks in one project, or wanting to prioritize performance. The flexibility 11ty affords will allow you to build your way and add in as much complexity as you need with progressive enhancement and partial hydration for interactive components. This means you can keep JavaScript to a minimum and easily achieve top Lighthouse scores. Eleventy lets you do this while giving you full control over your sites HTML, since the focus is on customizability rather than built-in features. It also doesn’t lock you into any one framework and offers incremental adoption, meaning it is easy to migrate an existing site to or from Eleventy.

**Choose Gatsby** if you are already familiar with React and GraphQL (or are highly motivated to learn) and want to build static sites with more interactivity, like complex ecommerce or marketing websites. While choosing Gatsby will come at the cost of your websites speed due to needing to run more JavaScript, Gatsby’s client-side routing does helps optimize performance a bit. Although it still cannot come close to the speed of sites built with lighter static site generators like 11ty, though this may not matter if speed is not a top priority for your project. Gatsby is also a great choice for developers who want to use a single internal API to manage multiple data sources, or those who prefer more opinionated static site generators with many built-in features. You may also be swayed to choose Gatsby for access to a bigger community with more plugins available compared to Eleventy.

It is also worth nothing that while Gatsby’s composable architecture primitives such as image processing, scalable Valhalla data layers, and automatic dependency tracking for real-time preview and deployment services, may have previously been unique to Gatsby, these features will soon be available across all static site generators (where it makes sense) thanks to Netlify. This means you will be able to take advantage of these features for building more complex website in lighter-weight static site generators that can better optimize your site for speed.

## Choose either – or both – with CloudCannon

Whether you choose Eleventy or Gatsby for your next static site, CloudCannon is here to help make static site generation even easier, with instant (and free) testing domains and a robust Visual Editor. Our focus is, and always has been, making content editing and production more accessible to everyone, no matter the use case. With CloudCannon’s Git-based CMS, your content team can build and edit site pages in our intuitive Visual Editor, while developers enjoy our flexible approach to configuration and content management.

We have published both an&nbsp;**<a target="_blank" href="https://cloudcannon.com/documentation/guides/eleventy-cms-get-started-with-cloudcannon/">Eleventy starter guide</a>**&nbsp;and a **<a target="_blank" href="https://cloudcannon.com/documentation/guides/gatsby-starter-guide/">Gatsby starter guide</a>** to help you get your project set up in CloudCannon with ease. Or if you’re just getting started with 11ty for the first time, we have a comprehensive&nbsp;**<a target="_blank" href="https://cloudcannon.com/tutorials/eleventy-beginner-tutorial/">Eleventy beginner tutorial</a>**&nbsp;series to lend you a helping hand while you learn.
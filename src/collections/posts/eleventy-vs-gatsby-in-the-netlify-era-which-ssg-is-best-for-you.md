---
_schema: default
title: Eleventy vs. Gatsby in the Netlify era – which SSG is best for you?
breadcrumb_title: 11ty vs Gatsby
description:
draft: true
series:
image: https://cc-dam.imgix.net/11ty vs. Gatsby (1).png
date: 2023-05-27T05:01:00+12:00
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
  featured_image: https://cc-dam.imgix.net/11ty vs. Gatsby (1).png
  featured_image_alt: 11ty vs. Gatsby
---
#

With Netlify’s recent [acquisition of Gatsby Inc](https://www.gatsbyjs.com/blog/gatsby-is-joining-netlify/), and their sponsorship last year of [full-time open-source development on Eleventy (11ty)](https://www.11ty.dev/blog/eleventy-oss/), it’s an exciting time to be choosing a new static site generator (SSG) — particularly if and when Netlify makes Gatsby’s composable architecture primitives available across the web. While GatsbyJS has certainly carved out a name for itself in the Jamstack community, for certain use cases its single-page application (SPA) approach is being challenged by lighter-weight static site generators such as Eleventy.

Eleventy’s [recent adoption of interactive island architecture](https://www.11ty.dev/docs/plugins/partial-hydration/) means that this previously purely static site generator can more effectively compete with heavyweight frameworks like Gatsby. 11ty’s use of progressive enhancement and multi-page application (MPA) approach to web development makes it easier than ever to achieve top Lighthouse scores, which is often a challenging feat using Gatsby. What’s more, Eleventy is well known for easy site migrations owing to its framework-agnostic approach and its focus on flexibility. So let’s compare 11ty vs. Gatsby to find out whether its worth making the switch from one to the other or, if you’re just starting out, which technology you should choose.

Whichever SSG you choose, with CloudCannon’s&nbsp;**[Eleventy](https://cloudcannon.com/eleventy-cms/)**&nbsp;and **[Gatsby](https://cloudcannon.com/gatsby-cms/)** support, you and your team can benefit from flexible development tooling, accessible content management, and visual page building and content editing. Now that CloudCannon’s&nbsp;**[Eleventy support](https://cloudcannon.com/blog/new-eleventy-features-a-new-theme-and-full-eleventy-support/)**&nbsp;and **[Gatsby support](https://cloudcannon.com/blog/full-cloudcannon-support-for-gatsby/)** have both been released out of beta, there’s no better time to get started on a new project.

## What is Eleventy?

Eleventy (11ty) is the “simpler static site generator” that focuses on speed and flexibility. Let’s focus on speed first. Eleventy uses a MPA approach, leveraging progressive enhancement to reduce your site’s time to interactive (TTI) by selectively hydrating interactive components, while keeping the rest of the page static and stripping away unnecessary JavaScript. As such, 11ty helps developers build faster sites than what is possible using Gatsby, which requires more JavaScript to hydrate the web application, costing in longer TTI and input latency.

Now for the flexibility. Eleventy exploits the flexibility of 11 different template languages, without tying you up to any client-side frameworks (although you can still choose to use a framework in 11ty if you like). Eleventy lets you mix and match HTML, Markdown, WebC, JavaScript, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, and Pug for templating. Eleventy also offers flexible configuration options and incremental adoption, making it easy to work with your project’s existing directory structure.

Eleventy’s simplicity and customizability flattens the learning curve for getting started; this static site generator effectively adapts to you and your preferences. With Eleventy you can build static sites your way, with full control over the performance of your website and the option to extend complexity as needed. Learning to use 11ty is made easier with helpful **[documentation](https://www.11ty.dev/docs/)** and an active community of passionate developers answering questions, and sharing starters (11ty’s term for structured themes) and plugins. Eleventy is ideal for use cases such as marketing websites with progressive enhancement, blogs, portfolios, documentation sites, and mostly static ecommerce websites.

### Sites made with 11ty

* [12daysofweb.dev](https://12daysofweb.dev/)
* [css-irl.info](https://css-irl.info/)
* [chromatichq.com](https://chromatichq.com/)
* [zachleat.com](https://www.zachleat.com/)

## What is Gatsby.js?

Gatsby is a React-based open source framework for building ‘blazing fast’ websites with a SPA approach. It uses React (JSX) for templating and GraphQL for queries. This static site generator was a trail-blazer in the Jamstack world, being the first to incorporate dynamic React components into static sites.

Gatsby has since focused on expanding the composable architecture ecosystem by building Gatsby Cloud as a deploy and hosting platform, and incorporating automatic dependency tracking, scalable data layers, and superior image processing. In early 2023, Gatsby officially joined Netlify, meaning that while Gatsby will continue to evolve, its composable architecture primitives will be integrated into Netlify and made available across other frameworks.

Gatsby is a highly opinionated static site generator with many built-in features including code splitting, prefetching, routing and caching. Although, Gatsby’s approach to data-fetching is arguably the most opinionated; Gatsby creates an internal GraphQL API as a middleware between the frontend template and content sources. This means that you can mesh sources into one big graph in a single GraphQL query, making it easier to use many data sources.

Gatsby’s well-established position in the world of web development makes for a large user base and plugin ecosystem. This active community along with Gatsby’s breadth of built-in features create an excellent developer experience. Gatsby is ideal for use cases such as ecommerce and marketing websites that use React-based interactive components and multiple data sources with APIs, or for building pre-rendered static sites as single page applications (SPAs).

### Sites made with Gatsby

* [ahrefs.com](https://ahrefs.com/)
* [calendly.com](https://calendly.com/)
* [bitwarden.com](https://bitwarden.com/)
* [ably.com](https://ably.com/)

## 11ty vs. Gatsby at a glance



## Which should I choose?



The choice between Eleventy and Gatsby will depend on your web development experience to date, as well as the type of static sites you want to build. These two static site generators have significantly different learning curves and are generally intended for different use cases. When choosing between 11ty and Gatsby you must consider what you already know, what you are willing to learn, and what type of site you need.

**Choose Eleventy** if you are relatively new to web development and want to build mostly (or even purely) static sites like blogs, portfolios, documentation, or simple business websites. Eleventy’s simplicity makes it much easier to learn compared to Gatsby. With 11ty you can get a site up and running only using HTML and CSS; there is no need to learn how to use any frameworks. Eleventy is also the clear choice for more experienced web developers wanting to mix and match multiple templating languages and frameworks in one project, or wanting to prioritize performance. The flexibility 11ty affords will allow you to build your way and add in as much complexity as you need with progressive enhancement and partial hydration for interactive components. This means you can keep JavaScript to a minimum and easily achieve top Lighthouse scores. Eleventy lets you do this while giving you full control over your sites HTML, since the focus is on customizability rather than built-in features. It also doesn’t lock you into any one framework and offers incremental adoption, meaning it is easy to migrate an existing site to or from Eleventy.

**Choose Gatsby** if you are already familiar with React and GraphQL (or are highly motivated to learn) and want to build static sites with more interactivity, like complex ecommerce or marketing websites. While choosing Gatsby will come at the cost of your websites speed due to needing to run more JavaScript, Gatsby’s client-side routing does helps optimize performance a bit. Although it still cannot come close to the speed of sites built with lighter static site generators like 11ty, though this may not matter if speed is not a top priority for your project. Gatsby is also a great choice for developers who want to use a single internal API to manage multiple data sources, or those who prefer more opinionated static site generators with many built-in features. You may also be swayed to choose Gatsby for access to a bigger community with more plugins available compared to Eleventy.

It is also worth nothing that while Gatsby’s composable architecture primitives such as image processing, scalable Valhalla data layers, and automatic dependency tracking for real-time preview and deployment services, may have previously been unique to Gatsby, these features will soon be available across all static site generators (where it makes sense) thanks to Netlify. This means you will be able to take advantage of these features for building more complex website in lighter-weight static site generators that can better optimize your site for speed.

## Choose either – or both – with CloudCannon

Whether you choose Eleventy or Gatsby for your next static site, CloudCannon is here to help make static site generation even easier, with instant (and free) testing domains and a robust Visual Editor. Our focus is, and always has been, making content editing and production more accessible to everyone, no matter the use case. With CloudCannon’s Git-based CMS, your content team can build and edit site pages in our intuitive Visual Editor, while developers enjoy our flexible approach to configuration and content management.

We have published both an&nbsp;**[Eleventy starter guide](https://cloudcannon.com/documentation/guides/eleventy-cms-get-started-with-cloudcannon/)**&nbsp;and a **[Gatsby starter guide](https://cloudcannon.com/documentation/guides/gatsby-starter-guide/)** to help you get your project set up in CloudCannon with ease. Or if you’re just getting started with 11ty for the first time, we have a comprehensive&nbsp;**[Eleventy beginner tutorial](https://cloudcannon.com/tutorials/eleventy-beginner-tutorial/)**&nbsp;series to lend you a helping hand while you learn.
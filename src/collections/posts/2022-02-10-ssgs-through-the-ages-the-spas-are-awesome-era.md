---
draft: false
title: The 'SPAs are awesome' era
description: >-
  The fourth part of an ongoing series: the 'SPAs are awesome' period of static
  site generators saw a proliferation of companies developing single-page
  applications.
series: SSGs through the ages
permalink: /blog/ssg-history-4-spas-are-awesome/
cta:
  title: Launch your website today
  body_text: Give your content team full autonomy on your developer-approved tech stack with CloudCannon.
  button:
    content: 
      link: "https://app.cloudcannon.com/register?trial=cc_standard"
      text: "Get started free!"
    styles:
      size:
      style: "outline"
      extra_classes:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/explorer-4_jk233e.svg
date: 2022-02-10T05:00:00.000Z
tags:
  - Resources
author: a5f00346-90df-4d69-9ce1-d9e4c8e51b10
---
In the early 2010s — [while Jekyll was being reinvented](/blog/ssg-history-3-reinvention/) — web browsers were becoming ever more capable, spurring a proliferation of companies developing single-page applications. However, building single-page web applications required a level of shared data consistency that the most popular JavaScript framework at the time, JQuery, was not equipped to handle. We saw a number of frameworks tackle this problem, including [Backbone](https://backbonejs.org/), [Ember](https://emberjs.com/), [Knockout](https://knockoutjs.com/index.html), and most popular, [AngularJs](https://angularjs.org/). These frameworks provided a structure for creating large applications.

Adding your own event handlers and manually manipulating the Document Object Model (DOM) is error-prone and slow. It also makes it difficult to reuse views. In 2013, React was released by [Jordan Walke](https://github.com/jordwalke) at Facebook and offered a completely new way of thinking about the view layer. Instead of having to manipulate the DOM directly to get to your desired state, React takes a declarative approach. You tell React what state you want the UI to be in, and it works out the details. React handles the events and performs the time-consuming DOM manipulations on a virtual DOM, which is significantly faster as it only updates the objects that have changed on the real DOM.

Around the same time, [Evan You](https://github.com/yyx990803) was using AngularJs on some internal projects at Google. He like parts of AngularJs but felt it was too heavyweight for his projects. Evan set out to build a lightweight version of the framework which he released in 2014, under the name Vue.js.

Both React and Vue.js surged in popularity in the mid 2010s. Developers in the SSG community were working out how to integrate these technologies with their existing static site. A new wave of tooling arrived soon after this, which made these new JavaScript frameworks first-class citizens of the static site generator world.

## [Gatsby.js](https://www.gatsbyjs.com/)

*First released in 2015 by [Kyle Mathews](https://github.com/KyleAMathews)*

The release of Gatsby.js started a seismic shift with regards to what an SSG could be. Until now, SSGs had mainly focused on building HTML from source files. Kyle Mathew's vision was to flip this on its head. He thought of it as pulling content rather than pushing:

> when you start working on more complex sites, you really start to miss the flexibility of building a database-driven site. With a database, all your data is available to query against in any fashion that you'd like. Whatever bits of data you need to assemble a page, you can *pull* in. You want to create author pages showing their bio & last 5 posts? It's just a query away.

Gatsby.js completely streamlined sourcing content and data from anywhere: it could be from a static file (like existing SSGs), your database, your CMS, or somewhere else. All this data is available through a GraphQL interface, making it easy to interact with content from multiple sources.

React was already the go-to tool for developers in product development due to its flexibility, simplicity, and ability to power even the largest web products. Gatsby.js capitalized on this popularity and enabled React developers to bring their knowledge and components to informational websites.

Gatsby.js was also the first SSG to blur the line between static and dynamic websites by supporting single-page applications (SPAs) as first-class citizens. It gives developers the best of the static and dynamic:

1. Gatsby.js builds an entirely static website.
2. When a client loads a page, React hydrates the page enabling dynamic interactions.

The developer doesn't need to build these experiences individually. Everything is created from React components.

The idea for Gatsby.js came to Kyle while he was working on his previous start-up, RelateRocket. On the marketing website, he stated that he "wanted to avoid using anything other than React.js." By 2018, Gatsby.js already had over 10k stars on GitHub (Jekyll had around 30k simultaneously but with a much lower trajectory). With this momentum, Kyle teamed up with [Sam Bhagwat](https://github.com/calcsam) to form Gatsby Inc., a venture-backed company focused on building cloud infrastructure to push Gatsby.js even further.

Gatsby.js made a monumental change in how we think about SSGs and added a great deal of legitimacy to the space. It currently powers the websites for well-known brands such as [Figma](https://www.figma.com/), [Digital Ocean](https://www.digitalocean.com/), [Impossible](https://impossiblefoods.com/), and [National Geographic](https://www.nationalgeographic.co.uk/).

[*Get started with Gatsby.js on CloudCannon*](https://app.cloudcannon.com/register?trial=cc_standard).

## [Next.js](https://nextjs.org/)

*First released in 2016 by [Guillermo Rauch](https://github.com/rauchg)*

Guillermo and his company Ziet (now [Vercel](https://vercel.com/)) had "been pursuing a vision of universal JavaScript applications." In other words: a way to develop websites and web applications using JavaScript to run in both the frontend and backend. This idea is also known as isomorphic JavaScript and was first popularized by the [Meteor](https://www.meteor.com/) framework in 2011. Next.js is Vercel's take on this vision.

Next.js started with six principles in mind:

1. Zero setup. Use the filesystem as an API — Automatically route files in the pages directory. For example, pages/about.js maps to /about.
2. Only JavaScript. Everything is a function — Every route in Next.js is a function or extension of *React.Component*. Doing this keeps everything modular, flexible, and highly testable.
3. Automatic server rendering and code splitting — Every component inside *`pages/`* gets server-rendered automatically and their scripts inlined. Each page has its own set of dependencies that don't impact the performance of the rest of the site.
4. Data fetching is up to the developer — Fetching data is unopinionated and straightforward, giving the developer complete flexibility to work with any API implementation.
5. Anticipation is the key to performance — In Next.js, "if you navigate around, odds are that by the time you follow a link or trigger a route transition, the component has already been fetched."
6. Simple deployment — Running Next.js is a two-step process: first a build step, and then starting it. Deploying to Vercel can be done with a single command.

Next.js isn't just a static site generator. It's a hybrid framework, meaning it blends server-side generated pages with static pages. You also have the option to run *`next export`* to create a purely static website that doesn't need the Next server to run.

Within six months of launching, Next.js had already amassed 10k stars on GitHub. Along with Gatsby.js, Next.js was embraced by the fast-growing React community, which further fuelled its popularity. The hybrid approach meant that Next.js could power websites that wouldn't be feasible with a purely static approach, for example:

* Content-rich websites — Most SSGs will have an excruciatingly long build time on a website with 100k+ pages. With server-side rendering, these pages render on demand, meaning no upfront build time.
* E-commerce — Large e-commerce stores typically rely on search and filtering to help customers find what they're looking for. They also highly value SEO to bring customers inbound. Ticking these boxes is difficult for a static website, particularly when there are millions of products. Again, server-side rendering gives the developer more flexibility to handle sites of this scale flawlessly.

Next.js is currently the world's most popular static site generator, due to its excellent developer experience, flexibility, and ability to work it a wide range of use-cases. It powers the websites for world-leading brands such as [Ticketmaster](https://www.ticketmaster.com/), [Realtor.co](https://www.realtor.com/), [AT&T](https://www.att.com/), and [Tiktok](https://www.tiktok.com/).

[*Get started with Next.js on CloudCannon.*](https://app.cloudcannon.com/register?trial=cc_standard)

## [Nuxt.js](https://nuxtjs.org/)

*First released in 2016 by [Alexandre Chopin](https://github.com/alexchopin/) & [Sébastien Chopin](https://github.com/Atinux)*

Much like the many SSGs taking direct inspiration from Jekyll, Nuxt.js started as a Vue.js alternative to Next.js:

> The 25th of October 2016, the team behind [zeit.co](https://web.archive.org/web/20180623121740mp_/https://zeit.co/), announced [Next.js](https://web.archive.org/web/20180623121740mp_/https://zeit.co/blog/next), a framework for server-rendered React applications. A few hours after the announcement, the idea of creating server-rendered [Vue.js](https://web.archive.org/web/20180623121740mp_/https://vuejs.org) applications the same way as Next.js was obvious: **Nuxt.js** was born.

Just like Next.js, Nuxt is a hybrid framework giving developers the ability to serve and deploy websites using server-side rendering (SSR), single-page apps (SPAs), or use static site generation (SSG) to build an entirely static website.

Vue.js had an answer for Next.js, propelling the rapid growth and adoption of Nuxt. To ensure the continued success and growth of Nuxt.js, Alexandre & Sébastien Chopin formed the commercial entity NuxtLabs and promptly raised $2M "to build a team of Nuxt experts working full time on Open Source and business solutions around it."

Nuxt.js powers the websites for well-known brands such as [Upwork](https://www.upwork.com/), [design.gitlab.com](https://design.gitlab.com/), [Ecosia](https://www.ecosia.org/), and even Nintendo's [Paper Mario](https://papermario.nintendo.com/).

---

Complexity tends to lead to further complexity, though as we see in the SPA era, there are layers within layers — even within the SPA space, players like Nuxt.js saw the advantages of lightweight tooling.

My next major focus in this series emphasizes what I see as a shift back to simpler times — and what could be simpler than HTML templates with Markdown content?